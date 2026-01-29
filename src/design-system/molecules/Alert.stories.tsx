import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

const meta = {
    title: "Molecules/Alert",
    component: Alert,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
Alert component for displaying important messages and notifications.

**Design Principles:**
- Clear visual hierarchy
- Semantic color coding
- Scannable content
- Accessible to all users

**When to Use:**
- System-wide notifications
- Form validation feedback
- Status changes and updates
- Error messages
- Success confirmations
- Important warnings

**Best Practices:**
- Keep messages concise and actionable
- Use appropriate severity levels
- Include clear next steps when needed
- Don't overuse alerts - too many reduce effectiveness
- Consider dismissible alerts for non-critical messages

**Accessibility:**
- Uses role="alert" for screen readers
- Color is not the only indicator (includes text)
- Sufficient color contrast ratios
- Consider aria-live for dynamic alerts
        `
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "info", "success", "warning", "destructive"]
        }
    }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default neutral alert
 */
export const Default: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <Alert className="w-[400px]">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the CLI.
            </AlertDescription>
        </Alert>
    )
};

/**
 * Info alert for informational messages
 */
export const Info: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <Alert variant="info" className="w-[400px]">
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
                Your session will expire in 5 minutes. Please save your work.
            </AlertDescription>
        </Alert>
    )
};

/**
 * Success alert for positive confirmations
 */
export const Success: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <Alert variant="success" className="w-[400px]">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
                Your changes have been saved successfully.
            </AlertDescription>
        </Alert>
    )
};

/**
 * Warning alert for important cautions
 */
export const Warning: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <Alert variant="warning" className="w-[400px]">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
                This action cannot be undone. Please review carefully before proceeding.
            </AlertDescription>
        </Alert>
    )
};

/**
 * Destructive alert for errors and critical issues
 */
export const Destructive: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <Alert variant="destructive" className="w-[400px]">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Failed to connect to the server. Please check your connection and try
                again.
            </AlertDescription>
        </Alert>
    )
};

/**
 * Title Only - Alert with just a title
 */
export const TitleOnly: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <Alert variant="info" className="w-[400px]">
            <AlertTitle>Maintenance scheduled for January 25, 2026</AlertTitle>
        </Alert>
    )
};

/**
 * Description Only - Alert with just description
 */
export const DescriptionOnly: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <Alert variant="warning" className="w-[400px]">
            <AlertDescription>
                Your trial period ends in 3 days. Upgrade now to continue using all
                features.
            </AlertDescription>
        </Alert>
    )
};

/**
 * Form Validation
 * Common use case: showing validation errors in forms
 */
export const FormValidation: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <div className="space-y-4 w-[400px]">
            <Alert variant="destructive">
                <AlertTitle>Validation Error</AlertTitle>
                <AlertDescription>
                    Please correct the following errors:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Email address is required</li>
                        <li>Password must be at least 8 characters</li>
                    </ul>
                </AlertDescription>
            </Alert>
        </div>
    )
};

/**
 * System Status
 * Common use case: showing system-wide status messages
 */
export const SystemStatus: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <div className="space-y-4 w-[500px]">
            <Alert variant="success">
                <AlertTitle>All Systems Operational</AlertTitle>
                <AlertDescription>
                    All services are running normally. Last checked: 2 minutes ago.
                </AlertDescription>
            </Alert>

            <Alert variant="warning">
                <AlertTitle>Degraded Performance</AlertTitle>
                <AlertDescription>
                    We are experiencing slower than normal response times. Our team is
                    investigating.
                </AlertDescription>
            </Alert>

            <Alert variant="destructive">
                <AlertTitle>Service Outage</AlertTitle>
                <AlertDescription>
                    The API service is currently unavailable. We are working to restore
                    service. Expected resolution: 30 minutes.
                </AlertDescription>
            </Alert>
        </div>
    )
};

/**
 * Deployment Notifications
 * Common use case: AI/ML deployment status updates
 */
export const DeploymentNotifications: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <div className="space-y-4 w-[500px]">
            <Alert variant="info">
                <AlertTitle>Deployment in Progress</AlertTitle>
                <AlertDescription>
                    Your model "gpt-4-turbo-preview" is being deployed to eu-central-1.
                    This usually takes 2-3 minutes.
                </AlertDescription>
            </Alert>

            <Alert variant="success">
                <AlertTitle>Deployment Complete</AlertTitle>
                <AlertDescription>
                    Your model is now live and ready to receive requests at:
                    <code className="block mt-1 text-xs bg-black/20 px-2 py-1 rounded">
                        https://api.berget.ai/v1/models/gpt-4-turbo
                    </code>
                </AlertDescription>
            </Alert>

            <Alert variant="destructive">
                <AlertTitle>Deployment Failed</AlertTitle>
                <AlertDescription>
                    Unable to deploy model due to insufficient GPU resources. Please try
                    again or contact support.
                </AlertDescription>
            </Alert>
        </div>
    )
};

/**
 * Feature Announcements
 * Common use case: highlighting new features or updates
 */
export const FeatureAnnouncements: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <Alert variant="info" className="w-[500px]">
            <AlertTitle>New Feature Available</AlertTitle>
            <AlertDescription>
                We have added support for GPT-4 Turbo with 128K context windows. Try it
                now in your deployments!
            </AlertDescription>
        </Alert>
    )
};

/**
 * All Variants
 * Shows all alert variants side by side
 */
export const AllVariants: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <div className="space-y-4 w-[500px]">
            <Alert variant="default">
                <AlertTitle>Default</AlertTitle>
                <AlertDescription>This is a default alert.</AlertDescription>
            </Alert>

            <Alert variant="info">
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>This is an informational alert.</AlertDescription>
            </Alert>

            <Alert variant="success">
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>This is a success alert.</AlertDescription>
            </Alert>

            <Alert variant="warning">
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>This is a warning alert.</AlertDescription>
            </Alert>

            <Alert variant="destructive">
                <AlertTitle>Destructive</AlertTitle>
                <AlertDescription>This is a destructive alert.</AlertDescription>
            </Alert>
        </div>
    )
};
