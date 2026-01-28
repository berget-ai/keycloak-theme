import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import "../berget-theme.css";
import "../../index.css";

// Berget Logo SVG as data URL
const BERGET_LOGO =
    "data:image/svg+xml,%3csvg%20width='463'%20height='419'%20viewBox='0%200%20463%20419'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cfilter%20id='invertFilter'%3e%3cfeColorMatrix%20type='matrix'%20values='-1%200%200%200%201%200%20-1%200%200%201%200%200%20-1%200%201%200%200%200%201%200'/%3e%3c/filter%3e%3c/defs%3e%3cpath%20d='M208.739%2017L255.261%2017L446%20403L398%20403L313.5%20255L261.5%20176L233.163%2096.1677L237.815%2098.6522H226.185L230.837%2096.1677L113%20331L64.5%20403L18%20403L208.739%2017Z'%20fill='black'%20filter='url(%23invertFilter)'/%3e%3c/svg%3e";

// Success checkmark icon
const SuccessIcon = () => (
    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[hsl(var(--berget-primary))]/20 flex items-center justify-center">
        <svg
            className="w-10 h-10 text-[hsl(var(--berget-primary))]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
            />
        </svg>
    </div>
);

export default function EmailConfirmation(
    props: PageProps<Extract<KcContext, { pageId: "email-confirmation.ftl" }>, I18n>
) {
    const { kcContext, i18n } = props;
    const { advancedMsgStr } = i18n;
    const { magicLinkContinuation } = kcContext;

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
                </CardHeader>

                <CardContent className="space-y-6 text-center">
                    <SuccessIcon />

                    <CardTitle className="text-3xl text-white font-serif">
                        {advancedMsgStr("magicLinkSuccessfulLogin")}
                    </CardTitle>

                    {magicLinkContinuation.sameBrowser && (
                        <div className="pt-4">
                            <Button asChild className="w-full">
                                <a href={magicLinkContinuation.url}>
                                    {advancedMsgStr("continueToApp")}
                                </a>
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
