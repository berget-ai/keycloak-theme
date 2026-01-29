import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { Shield, Lock, Check, AlertCircle } from "lucide-react";

/**
 * Badge component for status indicators, labels, and metadata.
 *
 * Use controls below to explore different variants.
 */
const meta = {
    title: "Atoms/Badge",
    component: Badge,
    parameters: {
        docs: {
            description: {
                component: `
Badge component for displaying small status indicators and labels.

**Design Principles:**
- Small and unobtrusive
- Clear semantic variants
- Consistent with Berget color palette
- Accessible color contrast

**When to Use:**
- Status indicators (Active, Pending, Failed)
- Feature flags (New, Beta, Premium)
- Tags and categories
- Notification counts
- Labels and metadata

**Use the Controls panel below** to experiment with different variants.
        `
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: [
                "default",
                "secondary",
                "accent",
                "destructive",
                "outline",
                "success",
                "warning",
                "info",
                "sage"
            ],
            description: "Visual style variant"
        }
    }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive badge - use Controls to change variant
 */
export const Interactive: Story = {
    args: {
        children: "Badge",
        variant: "default"
    }
};

/**
 * All variants showcase - shows all badge variants
 * Note: This is a static showcase. Use Interactive story to test individual variants with controls.
 */
export const AllVariants: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        children: undefined as any
    },
    render: () => (
        <div className="flex flex-col gap-6">
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Base Variants
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="accent">Accent</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    State Variants
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="info">Info</Badge>
                </div>
            </div>
        </div>
    )
};

/**
 * Common use cases - shows badge usage patterns
 * Note: This is a static showcase. Use Interactive story to test individual variants with controls.
 */
export const Examples: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        children: undefined as any
    },
    render: () => (
        <div className="flex flex-col gap-6">
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Status Indicators
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="success">Active</Badge>
                    <Badge variant="warning">Pending</Badge>
                    <Badge variant="destructive">Failed</Badge>
                    <Badge variant="info">Processing</Badge>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Feature Flags
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="accent">New</Badge>
                    <Badge variant="info">Beta</Badge>
                    <Badge variant="secondary">Premium</Badge>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Tags & Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Design Systems</Badge>
                    <Badge variant="outline">Berget</Badge>
                </div>
            </div>
        </div>
    )
};

/**
 * Sage variant with icons - Figma spec
 * Note: This is a static showcase. Use Interactive story to test individual variants with controls.
 */
export const SageWithIcons: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        children: undefined as any
    },
    render: () => (
        <div className="flex flex-col gap-6">
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Privacy & Security Badges
                </h3>
                <div className="flex flex-wrap gap-3">
                    <Badge variant="sage" icon={Shield}>
                        No data leaves Sweden
                    </Badge>
                    <Badge variant="sage" icon={Lock}>
                        End-to-end encrypted
                    </Badge>
                    <Badge variant="sage" icon={Check}>
                        GDPR compliant
                    </Badge>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Status with Icons
                </h3>
                <div className="flex flex-wrap gap-3">
                    <Badge variant="sage" icon={Check}>
                        Verified
                    </Badge>
                    <Badge variant="sage" icon={AlertCircle}>
                        Attention needed
                    </Badge>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Hero Tagline Badges
                </h3>
                <div className="flex flex-wrap gap-3">
                    <Badge variant="sage" icon={Shield}>
                        Built for Europe
                    </Badge>
                    <Badge variant="sage" icon={Check}>
                        GDPR Compliant
                    </Badge>
                    <Badge variant="sage" icon={Lock}>
                        Secure by Design
                    </Badge>
                </div>
            </div>
        </div>
    )
};
