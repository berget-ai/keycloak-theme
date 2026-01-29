import type { Meta, StoryObj } from "@storybook/react";
import { BergetSymbol } from "./BergetSymbol";

const meta = {
    title: "Atoms/BergetSymbol",
    component: BergetSymbol,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
The Berget AI triangle symbol.

**Design Principles:**
- Maintains aspect ratio
- Scalable vector graphics
- Two variants for different backgrounds
- Consistent brand representation

**When to Use:**
- Navigation headers
- Email templates
- Marketing materials
- Favicons
- Compact branding elements

**Brand Guidelines:**
- Use light variant on dark backgrounds
- Use dark variant on light backgrounds
- Maintain clear space around symbol
- Do not distort or modify the symbol shape
        `
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "range", min: 24, max: 200, step: 8 }
        },
        variant: {
            control: "select",
            options: ["light", "dark"]
        }
    }
} satisfies Meta<typeof BergetSymbol>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default variant for dark backgrounds
 */
export const Default: Story = {
    args: {
        size: 48,
        variant: "light"
    }
};

/**
 * Small size (24px) - For compact headers or favicons
 */
export const Small: Story = {
    args: {
        size: 24,
        variant: "light"
    }
};

/**
 * Medium size (48px) - Default size for most uses
 */
export const Medium: Story = {
    args: {
        size: 48,
        variant: "light"
    }
};

/**
 * Large size (96px) - For hero sections or featured placements
 */
export const Large: Story = {
    args: {
        size: 96,
        variant: "light"
    }
};

/**
 * Extra Large size (160px) - For landing pages or splash screens
 */
export const ExtraLarge: Story = {
    args: {
        size: 160,
        variant: "light"
    }
};

/**
 * Size Comparison - All sizes side by side
 */
export const SizeComparison: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="flex items-end gap-8">
            <div className="text-center">
                <BergetSymbol size={24} variant="light" />
                <p className="text-xs text-muted-foreground mt-2">24px</p>
            </div>
            <div className="text-center">
                <BergetSymbol size={32} variant="light" />
                <p className="text-xs text-muted-foreground mt-2">32px</p>
            </div>
            <div className="text-center">
                <BergetSymbol size={48} variant="light" />
                <p className="text-xs text-muted-foreground mt-2">48px</p>
            </div>
            <div className="text-center">
                <BergetSymbol size={64} variant="light" />
                <p className="text-xs text-muted-foreground mt-2">64px</p>
            </div>
            <div className="text-center">
                <BergetSymbol size={96} variant="light" />
                <p className="text-xs text-muted-foreground mt-2">96px</p>
            </div>
        </div>
    )
};

/**
 * In Navigation Header
 */
export const InNavigation: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="w-full bg-background border-b border-[hsl(var(--border))]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <BergetSymbol size={32} variant="light" />
                <nav className="flex gap-4">
                    <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        Models
                    </a>
                    <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        Docs
                    </a>
                </nav>
            </div>
        </div>
    )
};

/**
 * Variant Comparison - Light vs Dark
 */
export const VariantComparison: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="grid grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg border border-[hsl(var(--border))]">
                <p className="text-sm text-muted-foreground mb-4">Light (on dark bg)</p>
                <BergetSymbol size={64} variant="light" />
            </div>
            <div className="bg-white p-8 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">Dark (on light bg)</p>
                <BergetSymbol size={64} variant="dark" />
            </div>
        </div>
    )
};
