import type { KcContext } from "./KcContext";
import type { I18n } from "./i18n";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Alert, AlertDescription } from "../components/ui/Alert";
import { Button } from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import "./berget-theme.css";
import "../index.css";

interface LoginProps {
    kcContext: Extract<KcContext, { pageId: "login.ftl" }>;
    i18n: I18n;
}

export default function Login({ kcContext, i18n }: LoginProps) {
    const { msg, msgStr } = i18n;
    const { url, realm, usernameHidden, login, messagesPerField, social, message } =
        kcContext;

    return (
        <div className="berget-auth-container px-4">
            <Card className="stat-card w-full max-w-2xl mx-auto">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-6">
                        <img
                            src="data:image/svg+xml,%3csvg%20width='463'%20height='419'%20viewBox='0%200%20463%20419'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cfilter%20id='invertFilter'%3e%3cfeColorMatrix%20type='matrix'%20values='-1%200%200%200%201%200%20-1%200%200%201%200%200%20-1%200%201%200%200%200%201%200'/%3e%3c/filter%3e%3c/defs%3e%3cpath%20d='M208.739%2017L255.261%2017L446%20403L398%20403L313.5%20255L261.5%20176L233.163%2096.1677L237.815%2098.6522H226.185L230.837%2096.1677L113%20331L64.5%20403L18%20403L208.739%2017Z'%20fill='black'%20filter='url(%23invertFilter)'/%3e%3c/svg%3e"
                            alt="Berget Logo"
                            className="h-16 w-auto logo-animate"
                        />
                    </div>
                    <CardTitle className="text-3xl text-white font-serif">
                        {realm.displayName || realm.name}
                    </CardTitle>
                    <p className="text-white/60">Sign in to continue</p>
                </CardHeader>

                <CardContent className="space-y-6">
                    {message && (
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

                    {/* Social Providers */}
                    {social?.providers && social.providers.length > 0 && (
                        <div className="space-y-4">
                            <div className="text-center text-sm text-white/60">
                                Or continue with
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                {social.providers.map(provider => (
                                    <a
                                        key={provider.providerId}
                                        href={provider.loginUrl}
                                        className="flex items-center justify-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 text-white hover:border-white/20"
                                    >
                                        <i className={provider.iconClasses} />
                                        <span>{provider.displayName}</span>
                                    </a>
                                ))}
                            </div>
                            {social.providers.length > 0 && (
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-white/10" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-background px-2 text-white/60">
                                            Or
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Login Form */}
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            // Handle form submission
                        }}
                        action={url.loginAction}
                        method="post"
                        className="space-y-6"
                    >
                        {!usernameHidden && (
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-white/60 text-sm font-medium mb-2"
                                >
                                    {msg("usernameOrEmail")}
                                </label>
                                <input
                                    tabIndex={1}
                                    id="username"
                                    className="berget-input w-full"
                                    name="username"
                                    defaultValue={login?.username ?? ""}
                                    type="text"
                                    autoFocus={true}
                                    autoComplete="off"
                                />
                                {messagesPerField.existsError("username") && (
                                    <span className="text-red-400 text-sm mt-1 block">
                                        {messagesPerField.get("username")}
                                    </span>
                                )}
                            </div>
                        )}

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-white/60 text-sm font-medium mb-2"
                            >
                                {msg("password")}
                            </label>
                            <input
                                tabIndex={2}
                                id="password"
                                className="berget-input w-full"
                                name="password"
                                type="password"
                                autoComplete="off"
                            />
                            {messagesPerField.existsError("password") && (
                                <span className="text-red-400 text-sm mt-1 block">
                                    {messagesPerField.get("password")}
                                </span>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <Checkbox
                                id="rememberMe"
                                name="rememberMe"
                                checked={login?.rememberMe === "on"}
                                label={msg("rememberMe")}
                            />

                            {realm.resetPasswordAllowed && (
                                <div>
                                    <a
                                        tabIndex={5}
                                        href={url.loginResetCredentialsUrl}
                                        className="text-sm text-[hsl(var(--berget-primary))] hover:text-[hsl(var(--berget-secondary))] transition-colors"
                                    >
                                        {msg("doForgotPassword")}
                                    </a>
                                </div>
                            )}
                        </div>

                        <Button
                            type="submit"
                            tabIndex={4}
                            name="login"
                            id="kc-login"
                            className="w-full"
                        >
                            {msgStr("doLogIn")}
                        </Button>
                    </form>

                    {realm.registrationAllowed && (
                        <div className="text-center pt-6 border-t border-white/10">
                            <span className="text-white/60 text-sm">
                                {msg("noAccount")}{" "}
                                <a
                                    href={url.registrationUrl}
                                    className="text-[hsl(var(--berget-primary))] hover:text-[hsl(var(--berget-secondary))] transition-colors"
                                >
                                    {msg("doRegister")}
                                </a>
                            </span>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
