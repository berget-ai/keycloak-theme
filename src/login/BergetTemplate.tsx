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

// Berget Logo SVG as data URL
const BERGET_LOGO =
    "data:image/svg+xml,%3csvg%20width='463'%20height='419'%20viewBox='0%200%20463%20419'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cfilter%20id='invertFilter'%3e%3cfeColorMatrix%20type='matrix'%20values='-1%200%200%200%201%200%20-1%200%200%201%200%200%20-1%200%201%200%200%200%201%200'/%3e%3c/filter%3e%3c/defs%3e%3cpath%20d='M208.739%2017L255.261%2017L446%20403L398%20403L313.5%20255L261.5%20176L233.163%2096.1677L237.815%2098.6522H226.185L230.837%2096.1677L113%20331L64.5%20403L18%20403L208.739%2017Z'%20fill='black'%20filter='url(%23invertFilter)'/%3e%3c/svg%3e";

// Helper to get page title based on pageId
function getPageTitle(
    pageId: string,
    realm: { displayName?: string; name: string }
): string {
    switch (pageId) {
        case "login.ftl":
        case "login-username.ftl":
            return "Sign In";
        case "login-password.ftl":
            return "Enter Password";
        case "register.ftl":
            return "Create Account";
        case "login-reset-password.ftl":
            return "Reset Password";
        case "login-update-password.ftl":
            return "Update Password";
        case "login-verify-email.ftl":
            return "Verify Email";
        case "logout-confirm.ftl":
            return "Sign Out";
        case "error.ftl":
            return "Error";
        case "info.ftl":
            return "Information";
        case "login-otp.ftl":
            return "One-Time Code";
        case "login-config-totp.ftl":
            return "Configure Authenticator";
        case "terms.ftl":
            return "Terms & Conditions";
        case "webauthn-authenticate.ftl":
            return "Security Key";
        case "login-idp-link-confirm.ftl":
            return "Link Account";
        case "login-page-expired.ftl":
            return "Page Expired";
        default:
            return realm.displayName || realm.name;
    }
}

// Helper to get page subtitle
function getPageSubtitle(pageId: string): string {
    switch (pageId) {
        case "login.ftl":
        case "login-username.ftl":
            return "Sign in to continue";
        case "login-password.ftl":
            return "Enter your password";
        case "register.ftl":
            return "Create your account";
        case "login-reset-password.ftl":
            return "Enter your email to reset password";
        case "login-update-password.ftl":
            return "Please update your password";
        case "login-verify-email.ftl":
            return "Check your email";
        case "logout-confirm.ftl":
            return "Are you sure you want to sign out?";
        case "error.ftl":
            return "Something went wrong";
        case "info.ftl":
            return "";
        case "login-otp.ftl":
            return "Enter your one-time code";
        case "login-config-totp.ftl":
            return "Set up two-factor authentication";
        case "terms.ftl":
            return "Please review and accept";
        case "webauthn-authenticate.ftl":
            return "Use your security key to sign in";
        case "login-idp-link-confirm.ftl":
            return "Link your account";
        case "login-page-expired.ftl":
            return "Please try again";
        default:
            return "";
    }
}

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
    const pageId = kcContext.pageId;

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

    const pageTitle = getPageTitle(pageId, realm);
    const pageSubtitle = getPageSubtitle(pageId);

    return (
        <div className="berget-auth-container px-4">
            <Card className="stat-card w-full max-w-2xl mx-auto">
                <CardHeader className="text-center pb-8">
                    <div className="flex justify-center mb-6">
                        <img
                            src={BERGET_LOGO}
                            alt="Berget Logo"
                            className="h-16 w-auto logo-animate"
                        />
                    </div>
                    <CardTitle className="text-3xl text-white font-serif mb-2">
                        {pageTitle}
                    </CardTitle>
                    {pageSubtitle && (
                        <p className="text-white/60 text-base">{pageSubtitle}</p>
                    )}
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
                        <div className="mt-6 pt-6 border-t border-white/10 text-center text-white/60">
                            {infoNode}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
