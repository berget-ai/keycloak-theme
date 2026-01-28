import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import "../berget-theme.css";
import "../../index.css";

// Berget Logo SVG as data URL
const BERGET_LOGO =
    "data:image/svg+xml,%3csvg%20width='463'%20height='419'%20viewBox='0%200%20463%20419'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cfilter%20id='invertFilter'%3e%3cfeColorMatrix%20type='matrix'%20values='-1%200%200%200%201%200%20-1%200%200%201%200%200%20-1%200%201%200%200%200%201%200'/%3e%3c/filter%3e%3c/defs%3e%3cpath%20d='M208.739%2017L255.261%2017L446%20403L398%20403L313.5%20255L261.5%20176L233.163%2096.1677L237.815%2098.6522H226.185L230.837%2096.1677L113%20331L64.5%20403L18%20403L208.739%2017Z'%20fill='black'%20filter='url(%23invertFilter)'/%3e%3c/svg%3e";

export default function OtpForm(
    props: PageProps<Extract<KcContext, { pageId: "otp-form.ftl" }>, I18n>
) {
    const { kcContext, i18n } = props;
    const { msg, msgStr, advancedMsgStr } = i18n;
    const { auth, url, messagesPerField } = kcContext;

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
                        {advancedMsgStr("otpFormTitle")}
                    </CardTitle>
                    <p className="text-white/60 mt-2">
                        {advancedMsgStr("otpFormSubtitle")}{" "}
                        <span className="text-white font-medium">
                            {auth.attemptedUsername}
                        </span>
                    </p>
                    <a
                        href={url.loginRestartFlowUrl}
                        className="text-sm text-[hsl(var(--berget-primary))] hover:text-[hsl(var(--berget-secondary))] transition-colors mt-2 inline-block"
                        aria-label={msgStr("restartLoginTooltip")}
                    >
                        {advancedMsgStr("otpFormChangeEmail")}
                    </a>
                </CardHeader>

                <CardContent className="space-y-6">
                    <form
                        id="kc-otp-login-form"
                        action={url.loginAction}
                        method="post"
                        className="space-y-6"
                    >
                        <div>
                            <label
                                htmlFor="otp"
                                className="block text-white/60 text-sm font-medium mb-2"
                            >
                                {msg("loginOtpOneTime")}
                            </label>
                            <input
                                id="otp"
                                name="otp"
                                autoComplete="one-time-code"
                                type="text"
                                className="berget-input w-full text-center text-2xl tracking-[0.5em] font-mono"
                                autoFocus
                                placeholder="000000"
                                maxLength={6}
                                aria-invalid={
                                    messagesPerField.existsError("totp")
                                        ? "true"
                                        : undefined
                                }
                            />
                            {messagesPerField.existsError("totp") && (
                                <span
                                    id="input-error-otp-code"
                                    className="text-red-400 text-sm mt-2 block text-center"
                                    aria-live="polite"
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(messagesPerField.get("totp"))
                                    }}
                                />
                            )}
                        </div>

                        <div className="flex flex-col gap-3">
                            <Button
                                type="submit"
                                name="submit"
                                id="kc-submit"
                                className="w-full"
                            >
                                {msgStr("doSubmit")}
                            </Button>
                            <Button
                                type="submit"
                                name="resend"
                                id="kc-resend"
                                variant="outline"
                                className="w-full"
                            >
                                {advancedMsgStr("doResend")}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
