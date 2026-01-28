import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "./KcPageStory";

// Use our custom KcPage which has the Berget Login component
const { KcPageStory } = createKcPageStory({ pageId: "login.ftl" });

const meta = {
    title: "Berget/Login",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    type: "error",
                    summary: "Invalid username or password"
                }
            }}
        />
    )
};

export const WithSocialProviders: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: [
                        {
                            loginUrl: "google",
                            alias: "google",
                            providerId: "google",
                            displayName: "Google",
                            iconClasses: "fa fa-google"
                        },
                        {
                            loginUrl: "github",
                            alias: "github",
                            providerId: "github",
                            displayName: "GitHub",
                            iconClasses: "fa fa-github"
                        }
                    ]
                }
            }}
        />
    )
};

export const WithRegistrationEnabled: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    registrationAllowed: true,
                    resetPasswordAllowed: true
                }
            }}
        />
    )
};
