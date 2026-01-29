import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "./Panel";

/**
 * Panel - the foundational component for all card-like surfaces.
 *
 * Panel is the base building block. Card and other components extend Panel.
 * Use controls below to explore different variants and padding options.
 */
const meta = {
    title: "Atoms/Panel",
    component: Panel,
    parameters: {
        docs: {
            description: {
                component: `
# Panel Component

The foundational component for all card-like surfaces in the design system.

**Why Panel Exists:**
- Single source of truth for surface styling
- Card, FeatureCard, and other components extend Panel
- DRY principle - define borders, backgrounds, shadows once
- Consistent behavior across all card-like components

**Variants:**
- \`highlight\` - Dark glass with backdrop blur
- \`glass\` - Light glass morphism with shadow
- \`solid\` - Solid dark background
- \`dark\` - Semi-transparent dark background (60% opacity)

**Padding Options:**
- \`none\`, \`sm\`, \`md\` (default), \`lg\`

**Use the Controls panel below** to experiment with different options.

**See also:** COMPONENT-GUIDE.md for when to use Panel vs Card vs FeatureCard.
        `
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["highlight", "glass", "solid", "dark"],
            description: "Visual style variant"
        },
        padding: {
            control: "select",
            options: ["none", "sm", "md", "lg"],
            description: "Internal padding"
        },
        radius: {
            control: "select",
            options: ["default", "lg", "xl"],
            description: "Border radius size"
        }
    }
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive panel - use Controls to change variant and padding
 */
export const Interactive: Story = {
    args: {
        variant: "highlight",
        padding: "md",
        radius: "default",
        children: (
            <div className="relative z-10">
                <h3 className="font-medium mb-2">Panel Component</h3>
                <p className="text-sm text-muted-foreground">
                    The foundational component for all card-like surfaces. Use the
                    controls to explore variants.
                </p>
            </div>
        )
    }
};

/**
 * All variants showcase - shows all variants at once
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
        <div className="flex flex-col gap-4 w-[600px]">
            <Panel variant="highlight">
                <p className="text-sm font-medium">Highlight</p>
                <p className="text-sm text-white/60">Dark glass with backdrop blur</p>
            </Panel>

            <Panel variant="glass">
                <p className="text-sm font-medium">Glass</p>
                <p className="text-sm text-white/60">Light glass morphism</p>
            </Panel>

            <Panel variant="solid">
                <p className="text-sm font-medium">Solid</p>
                <p className="text-sm text-white/60">Solid dark background</p>
            </Panel>

            <Panel variant="dark">
                <p className="text-sm font-medium">Dark</p>
                <p className="text-sm text-white/60">60% opacity dark background</p>
            </Panel>
        </div>
    )
};

/**
 * Padding options - shows all padding options at once
 * Note: This is a static showcase. Use Interactive story to test individual padding with controls.
 */
export const PaddingOptions: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        children: undefined as any
    },
    render: () => (
        <div className="flex flex-col gap-4 w-[600px]">
            <Panel padding="none">
                <p className="text-sm">None - No padding</p>
            </Panel>
            <Panel padding="sm">
                <p className="text-sm">Small - Compact spacing</p>
            </Panel>
            <Panel padding="md">
                <p className="text-sm">Medium - Default comfortable spacing</p>
            </Panel>
            <Panel padding="lg">
                <p className="text-sm">Large - Generous spacing</p>
            </Panel>
        </div>
    )
};

/**
 * Border radius variants - Console style with larger corners
 * Note: This is a static showcase. Use Interactive story to test individual radius with controls.
 */
export const RadiusVariants: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        children: undefined as any
    },
    render: () => (
        <div className="flex flex-col gap-6 w-[600px]">
            <Panel radius="default" padding="lg">
                <div className="relative z-10">
                    <p className="text-base font-medium mb-1">Default (rounded-2xl)</p>
                    <p className="text-sm text-white/60">Standard 32px border radius</p>
                </div>
            </Panel>

            <Panel radius="lg" padding="lg">
                <div className="relative z-10">
                    <p className="text-base font-medium mb-1">Large (rounded-3xl)</p>
                    <p className="text-sm text-white/60">
                        Larger 48px radius - perfect for stat cards
                    </p>
                </div>
            </Panel>

            <Panel radius="xl" padding="lg">
                <div className="relative z-10">
                    <p className="text-base font-medium mb-1">XL (rounded-[2rem])</p>
                    <p className="text-sm text-white/60">
                        Extra large 64px radius - for big content panels
                    </p>
                </div>
            </Panel>
        </div>
    )
};
