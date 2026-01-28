import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";

const meta = {
    title: "Organisms/Section Header",
    component: SectionHeader,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
Consistent section header component used across all pages.

**Design Pattern:**
- Optional tagline/badge
- Large title
- Supporting description text
- Configurable alignment and sizing

**When to Use:**
- Start of major sections
- Page introductions
- Feature section headers
- Content area dividers

**Real Usage:**
This pattern appears on every page: products, why-berget, models, pricing, etc.
        `
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        alignment: {
            control: "select",
            options: ["left", "center", "right"]
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"]
        },
        maxWidth: {
            control: "select",
            options: ["sm", "md", "lg", "xl", "full"]
        }
    }
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default center-aligned header
 */
export const Default: Story = {
    args: {
        title: "European AI Infrastructure",
        description:
            "Deploy and scale AI models with data residency in Europe. GDPR compliant, sovereign, and powerful."
    }
};

/**
 * With Tagline - Common pattern on landing pages
 */
export const WithTagline: Story = {
    args: {
        tagline: "Built for Europe",
        title: "Why Choose Berget",
        description:
            "The only AI platform designed specifically for European organizations with strict data sovereignty requirements."
    }
};

/**
 * Small Size - For subsections
 */
export const Small: Story = {
    args: {
        title: "Key Features",
        description: "Everything you need to deploy AI at scale",
        size: "sm"
    }
};

/**
 * Large Size - For hero sections
 */
export const Large: Story = {
    args: {
        title: "Build AI Applications",
        description:
            "The complete platform for deploying, managing, and scaling AI models in Europe",
        size: "lg"
    }
};

/**
 * Left Aligned - For content sections
 */
export const LeftAligned: Story = {
    args: {
        title: "Serverless Inference",
        description:
            "Deploy AI models without managing infrastructure. Auto-scaling, pay-per-use, and EU-based.",
        alignment: "left"
    }
};

/**
 * Right Aligned - Rarely used, but available
 */
export const RightAligned: Story = {
    args: {
        title: "Get Started Today",
        description: "Join hundreds of developers building on Berget AI",
        alignment: "right"
    }
};

/**
 * Narrow Width - For focused content
 */
export const NarrowWidth: Story = {
    args: {
        title: "Privacy First",
        description:
            "Your data never leaves the EU. Full GDPR compliance and data sovereignty guaranteed.",
        maxWidth: "sm"
    }
};

/**
 * Wide Width - For full-width sections
 */
export const WideWidth: Story = {
    args: {
        title: "Platform Architecture",
        description:
            "A complete stack from infrastructure to tools, designed for scalability and performance",
        maxWidth: "xl"
    }
};

/**
 * Title Only - Minimal header
 */
export const TitleOnly: Story = {
    args: {
        title: "Our Products"
    }
};

/**
 * With Long Description
 */
export const LongDescription: Story = {
    args: {
        title: "Comprehensive AI Platform",
        description:
            "Berget AI provides a complete infrastructure for deploying and managing AI models. From serverless inference to dedicated compute, vector databases to fine-tuning tools, we have everything you need to build sophisticated AI applications. All running on EU infrastructure with full GDPR compliance and data sovereignty.",
        maxWidth: "lg"
    }
};

/**
 * Products Page Pattern
 */
export const ProductsPageHeader: Story = {
    args: {
        title: ""
    },
    render: () => (
        <div className="bg-gradient-to-b from-background to-background/50 py-24">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Berget AI Products"
                    description="Complete infrastructure for deploying and scaling AI models in Europe. From serverless inference to dedicated compute, choose the right solution for your needs."
                    size="lg"
                />
            </div>
        </div>
    ),
    parameters: {
        layout: "fullscreen"
    }
};

/**
 * Why Berget Page Pattern
 */
export const WhyBergetPattern: Story = {
    args: {
        title: ""
    },
    render: () => (
        <div className="bg-[#2D6A4F]/5 py-32">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Key Benefits"
                    description="Why leading European organizations choose Berget AI for their AI infrastructure"
                    maxWidth="lg"
                />
            </div>
        </div>
    ),
    parameters: {
        layout: "fullscreen"
    }
};

/**
 * Features Section Pattern
 */
export const FeaturesSectionPattern: Story = {
    args: {
        title: ""
    },
    render: () => (
        <div className="py-24">
            <div className="container mx-auto px-4 space-y-16">
                <SectionHeader
                    title="Platform Capabilities"
                    description="Everything you need to build, deploy, and scale AI applications"
                />

                <div className="space-y-32">
                    <div>
                        <SectionHeader
                            title="Serverless Inference"
                            description="Deploy models without managing infrastructure"
                            alignment="left"
                            size="sm"
                            maxWidth="xl"
                        />
                    </div>

                    <div>
                        <SectionHeader
                            title="Dedicated Compute"
                            description="Reserved GPU instances for consistent performance"
                            alignment="left"
                            size="sm"
                            maxWidth="xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    ),
    parameters: {
        layout: "fullscreen"
    }
};

/**
 * CTA Section Pattern
 */
export const CTASectionPattern: Story = {
    args: {
        title: ""
    },
    render: () => (
        <div className="py-24 bg-gradient-to-b from-background to-[#2D6A4F]/10">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Ready to Get Started?"
                    description="Join hundreds of developers building on European AI infrastructure"
                    size="lg"
                />
            </div>
        </div>
    ),
    parameters: {
        layout: "fullscreen"
    }
};
