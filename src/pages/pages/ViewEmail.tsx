import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import "../berget-theme.css";
import "../../index.css";

// Berget Logo SVG as data URL
const BERGET_LOGO =
    "data:image/svg+xml,%3csvg%20width='463'%20height='419'%20viewBox='0%200%20463%20419'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cfilter%20id='invertFilter'%3e%3cfeColorMatrix%20type='matrix'%20values='-1%200%200%200%201%200%20-1%200%200%201%200%200%20-1%200%201%200%200%200%201%200'/%3e%3c/filter%3e%3c/defs%3e%3cpath%20d='M208.739%2017L255.261%2017L446%20403L398%20403L313.5%20255L261.5%20176L233.163%2096.1677L237.815%2098.6522H226.185L230.837%2096.1677L113%20331L64.5%20403L18%20403L208.739%2017Z'%20fill='black'%20filter='url(%23invertFilter)'/%3e%3c/svg%3e";

export default function ViewEmail(
    props: PageProps<Extract<KcContext, { pageId: "view-email.ftl" }>, I18n>
) {
    const { kcContext, i18n } = props;
    const { msgStr, advancedMsgStr } = i18n;
    const { auth, url } = kcContext;

    return (
        <div className="berget-auth-container px-4">
            <Card className="stat-card w-full max-w-2xl mx-auto">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-6">
                        <img
                            src={BERGET_LOGO}
                            alt="Berget Logo"
                            className="h-16 w-auto logo-animate"
                        />
                    </div>
                    <CardTitle className="text-3xl text-white font-serif">
                        {advancedMsgStr("checkYourEmail")}
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 text-center">
                    <div className="space-y-3 py-4">
                        <p className="text-white font-medium text-lg">
                            {auth.attemptedUsername}
                        </p>
                        <p className="text-white/60">
                            {advancedMsgStr("magicLinkConfirmation")}
                        </p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                        <a
                            href={url.loginRestartFlowUrl}
                            className="text-sm text-[hsl(var(--berget-primary))] hover:text-[hsl(var(--berget-secondary))] transition-colors"
                            aria-label={msgStr("restartLoginTooltip")}
                        >
                            {advancedMsgStr("tryAnotherWay")}
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
