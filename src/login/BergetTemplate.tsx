import { useEffect } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useInitialize } from "keycloakify/login/Template.useInitialize";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Alert, AlertDescription } from "../components/ui/Alert";
import "./berget-theme.css";

export default function BergetTemplate(props: TemplateProps<KcContext, I18n>) {
    const {
        displayMessage = true,
        socialProvidersNode = null,
        infoNode = null,
        documentTitle,
        bodyClassName,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children
    } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { msgStr } = i18n;

    const { realm, message } = kcContext;

    useEffect(() => {
        document.title = documentTitle ?? msgStr("loginTitle", realm.displayName);
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: bodyClassName ?? kcClsx("kcBodyClass")
    });

    const { isReadyToRender } = useInitialize({ kcContext, doUseDefaultCss });

    if (!isReadyToRender) {
        return null;
    }

    return (
        <div className="berget-auth-container">
            <div className="w-full max-w-md mx-auto p-6">
                <Card className="stat-card">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl text-white font-serif">
                            {realm.displayName || realm.name}
                        </CardTitle>
                        <p className="text-white/60">Sign in to continue</p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {displayMessage && message && (
                            <Alert
                                variant={
                                    message.type === "error"
                                        ? "destructive"
                                        : message.type === "success"
                                          ? "success"
                                          : "default"
                                }
                            >
                                <AlertDescription>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: kcSanitize(message.summary)
                                        }}
                                    />
                                </AlertDescription>
                            </Alert>
                        )}

                        {children}

                        {socialProvidersNode}

                        {infoNode && (
                            <div className="mt-6 pt-6 border-t border-white/10">
                                {infoNode}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
