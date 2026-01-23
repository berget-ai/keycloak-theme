import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ArrowRight, Download, Loader2, Mail, Plus } from "lucide-react";

/**
 * Button component - the primary interaction element in the Berget Design System.
 *
 * Designed with Scandinavian principles: clean, functional, and beautiful.
 * Use controls below to explore different variants, sizes, and states.
 */
const meta = {
    title: "Atoms/Button",
    component: Button,
    parameters: {
        docs: {
            description: {
                component: `
The Button component is versatile and accessible with multiple variants and sizes.
It supports all native button attributes and can be used with the \`asChild\` prop for composition.

**Features:**
- Multiple variants (default, primary, secondary, outline, ghost, destructive, link)
- Three sizes (sm, default, lg)
- Icon support
- Loading states
- Disabled states
- Full keyboard accessibility
- Smooth hover and focus transitions

**Use the Controls panel below** to experiment with different variants and sizes.
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
                "primary",
                "secondary",
                "outline",
                "ghost",
                "destructive",
                "link"
            ],
            description: "Visual style variant"
        },
        size: {
            control: "select",
            options: ["sm", "default", "lg", "icon"],
            description: "Size of the button"
        },
        disabled: {
            control: "boolean",
            description: "Disabled state"
        },
        asChild: {
            control: "boolean",
            description: "Render as Slot for composition"
        }
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive button - use Controls to change variant, size, and state
 */
export const Interactive: Story = {
    args: {
        children: "Button",
        variant: "default",
        size: "default"
    }
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-8">
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Variants
                </h3>
                <div className="flex flex-wrap gap-3">
                    <Button variant="default">Default</Button>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                </div>
            </div>

            <div className="border-t border-[hsl(var(--border))] pt-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Sizes</h3>
                <div className="flex items-center flex-wrap gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                </div>
            </div>

            <div className="border-t border-[hsl(var(--border))] pt-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">States</h3>
                <div className="flex flex-wrap gap-3">
                    <Button disabled>Disabled</Button>
                    <Button>
                        <Loader2 className="mr-2 w-7 h-7 animate-spin" strokeWidth={2} />
                        Loading
                    </Button>
                </div>
            </div>
        </div>
    )
};

/**
 * Buttons with icons
 */
export const WithIcons: Story = {
    render: () => (
        <div className="flex flex-wrap gap-3">
            <Button>
                <Mail className="mr-2 w-7 h-7" strokeWidth={2} />
                Email
            </Button>
            <Button variant="primary">
                <Plus className="mr-2 w-7 h-7" strokeWidth={2} />
                Add New
            </Button>
            <Button variant="secondary">
                Download
                <Download className="ml-2 w-7 h-7" strokeWidth={2} />
            </Button>
            <Button variant="outline">
                Continue
                <ArrowRight className="ml-2 w-7 h-7" strokeWidth={2} />
            </Button>
            <Button variant="ghost" size="icon">
                <Plus className="w-7 h-7" strokeWidth={2} />
            </Button>
        </div>
    )
};
