import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCard } from "./FeatureCard";
import { Cloud, Server, Zap, Database, Bot, Leaf, Shield, Heart } from "lucide-react";

const meta = {
    title: "Organisms/Feature Card",
    component: FeatureCard,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
Reusable feature card component based on the patterns from products and why-berget pages.

**Design Pattern:**
- Icon + Title + Description + Feature list
- Consistent spacing and hover states
- Multiple color variants for different sections
- Supports any Lucide icon

**When to Use:**
- Product feature grids (like on /products)
- Benefits sections (like on /why-berget)
- Service offerings
- Capability showcases
- Any 3-column feature layout

**Real Usage:**
This component generalizes the card pattern used throughout the website for consistency.
        `
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "moss", "sage", "earth"]
        }
    }
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default variant with subtle background
 */
export const Default: Story = {
    args: {
        icon: Cloud,
        iconColor: "text-white",
        title: "Serverless Inference",
        description: "Deploy AI models without managing infrastructure",
        features: [
            "Auto-scaling based on demand",
            "Pay only for what you use",
            "EU-based infrastructure",
            "GDPR compliant"
        ]
    },
    render: args => (
        <div className="w-full max-w-[385px]">
            <FeatureCard {...args} />
        </div>
    )
};

/**
 * Moss variant - Green tinted
 */
export const Moss: Story = {
    args: {
        icon: Server,
        iconColor: "text-white",
        title: "Dedicated Compute",
        description: "Reserved GPU instances for consistent performance",
        features: ["Predictable latency", "Custom configurations", "Private networking"],
        variant: "moss"
    },
    render: args => (
        <div className="w-full max-w-md">
            <FeatureCard {...args} />
        </div>
    )
};

/**
 * Sage variant - Lighter green
 */
export const Sage: Story = {
    args: {
        icon: Zap,
        iconColor: "text-white",
        title: "Real-time Processing",
        description: "Low-latency inference for time-sensitive applications",
        features: [
            "Sub-100ms response times",
            "WebSocket support",
            "Streaming responses"
        ],
        variant: "sage"
    },
    render: args => (
        <div className="w-full max-w-md">
            <FeatureCard {...args} />
        </div>
    )
};

/**
 * Earth variant - Darker green
 */
export const Earth: Story = {
    args: {
        icon: Database,
        iconColor: "text-white",
        title: "Vector Database",
        description: "Built-in embeddings and similarity search",
        features: ["Automatic indexing", "Semantic search", "Version control"],
        variant: "earth"
    },
    render: args => (
        <div className="w-full max-w-md">
            <FeatureCard {...args} />
        </div>
    )
};

/**
 * Without Checkmarks
 */
export const WithoutCheckmarks: Story = {
    args: {
        icon: Bot,
        iconColor: "text-white",
        title: "AI Models",
        description: "Access to leading language models",
        features: ["GPT-4", "Claude 3", "Mistral Large", "Llama 3"],
        showCheckmarks: false
    },
    render: args => (
        <div className="w-full max-w-md">
            <FeatureCard {...args} />
        </div>
    )
};

/**
 * Without Features List
 */
export const WithoutFeatures: Story = {
    args: {
        icon: Shield,
        title: "GDPR Compliant",
        description:
            "All data stays in the EU with full GDPR compliance. Your data, your control, your sovereignty."
    },
    render: args => (
        <div className="w-full max-w-md">
            <FeatureCard {...args} />
        </div>
    )
};

/**
 * Three-Column Grid (Products Page Pattern)
 */
export const ThreeColumnGrid: Story = {
    render: () => (
        <div className="w-full max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                    icon={Cloud}
                    iconColor="text-white"
                    title="Easy Integration"
                    variant="moss"
                    features={[
                        "OpenAI-compatible API",
                        "Drop-in replacement",
                        "SDKs for all languages",
                        "Comprehensive docs"
                    ]}
                />
                <FeatureCard
                    icon={Zap}
                    iconColor="text-white"
                    title="Pay-per-Use"
                    variant="moss"
                    features={[
                        "No minimum commitment",
                        "Per-token billing",
                        "Volume discounts",
                        "Transparent pricing"
                    ]}
                />
                <FeatureCard
                    icon={Server}
                    iconColor="text-white"
                    title="EU Infrastructure"
                    variant="earth"
                    features={[
                        "Multiple EU regions",
                        "Low latency",
                        "Data residency",
                        "Local compliance"
                    ]}
                />
            </div>
        </div>
    )
};

/**
 * Benefits Section (Why Berget Pattern)
 */
export const BenefitsSection: Story = {
    render: () => (
        <div className="w-full max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                    icon={Shield}
                    iconColor="text-white"
                    title="EU Based"
                    description="Built for European organizations with strict data requirements"
                    features={[
                        "GDPR compliant by default",
                        "Data stays in Europe",
                        "EU-CLOUD certified",
                        "Local support team"
                    ]}
                    variant="default"
                />
                <FeatureCard
                    icon={Leaf}
                    iconColor="text-white"
                    title="Sustainable AI"
                    description="Lower your carbon footprint with renewable energy"
                    features={[
                        "Renewable energy powered",
                        "Carbon-neutral operations",
                        "Energy-efficient hardware",
                        "Transparent reporting"
                    ]}
                    variant="default"
                />
            </div>
        </div>
    )
};

/**
 * Two-Column Layout
 */
export const TwoColumnLayout: Story = {
    render: () => (
        <div className="w-full max-w-4xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureCard
                    icon={Database}
                    iconColor="text-white"
                    title="Data Management"
                    description="Complete control over your AI data and models"
                    features={[
                        "Private storage",
                        "Version control",
                        "Access logs",
                        "Audit trail"
                    ]}
                    variant="moss"
                />
                <FeatureCard
                    icon={Bot}
                    iconColor="text-white"
                    title="Model Selection"
                    description="Access to the best open-source and commercial models"
                    features={[
                        "GPT-4 Turbo",
                        "Claude 3 Opus",
                        "Mistral Large",
                        "Custom fine-tuning"
                    ]}
                    variant="sage"
                />
            </div>
        </div>
    )
};

/**
 * Large Feature List
 */
export const LargeFeatureList: Story = {
    args: {
        icon: Server,
        iconColor: "text-white",
        title: "Complete AI Platform",
        description: "Everything you need to build and deploy AI applications",
        features: [
            "Multiple LLM providers",
            "Vector databases",
            "Fine-tuning capabilities",
            "Model evaluation tools",
            "A/B testing",
            "Cost analytics",
            "Usage monitoring",
            "Team collaboration",
            "API key management",
            "Webhook integrations"
        ],
        variant: "moss"
    },
    render: args => (
        <div className="w-full max-w-md">
            <FeatureCard {...args} />
        </div>
    )
};
