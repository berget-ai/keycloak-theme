/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
            doResend: "Resend code",
            otpFormTitle: "Enter Code",
            otpFormSubtitle: "We sent a code to",
            otpFormChangeEmail: "Use a different email",
            checkYourEmail: "Check Your Email",
            magicLinkConfirmation:
                "We sent you a magic link. Click the link in your email to sign in.",
            tryAnotherWay: "Try another way",
            magicLinkSuccessfulLogin: "You have successfully signed in!",
            continueToApp: "Continue to application"
        },
        sv: {
            doResend: "Skicka igen",
            otpFormTitle: "Ange kod",
            otpFormSubtitle: "Vi skickade en kod till",
            otpFormChangeEmail: "Använd en annan e-post",
            checkYourEmail: "Kolla din e-post",
            magicLinkConfirmation:
                "Vi skickade en magisk länk. Klicka på länken i din e-post för att logga in.",
            tryAnotherWay: "Prova ett annat sätt",
            magicLinkSuccessfulLogin: "Du har loggat in!",
            continueToApp: "Fortsätt till applikationen"
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
