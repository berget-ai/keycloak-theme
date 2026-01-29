import type { Meta, StoryObj } from "@storybook/react";
import { HeroBlock } from "../organisms/HeroBlock";
import { SectionHeader } from "../organisms/SectionHeader";
import { Button } from "../atoms/Button";
import { Shield } from "lucide-react";

const meta = {
    title: "Templates/Page Examples",
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: `
Complete page examples showing how to combine block components.

These examples demonstrate the real patterns from berget.ai website:
- /products page structure
- /why-berget page layout
- Feature section patterns
- CTA section patterns
        `
            }
        }
    },
    tags: ["autodocs"]
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Complete Products Page Pattern
 */
export const ProductsPageExample: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <main className="min-h-screen">
            {/* Hero */}
            <HeroBlock
                title="Berget AI Products"
                description="Complete infrastructure for deploying and scaling AI models in Europe. From serverless inference to dedicated compute."
                actions={
                    <>
                        <Button size="lg">Get Started</Button>
                        <Button size="lg" variant="outline">
                            View Pricing
                        </Button>
                    </>
                }
            />

            {/* Serverless Inference Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Sticky Header */}
                        <div className="lg:col-span-4 lg:sticky lg:top-24">
                            <SectionHeader
                                title="Serverless Inference"
                                description="Deploy AI models without managing infrastructure"
                                alignment="left"
                                size="sm"
                                maxWidth="full"
                            />
                        </div>

                        {/* Feature Cards - Temporarily commented out until FeatureCard is recreated */}
                        {/* <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FeatureCard
                                icon={Cloud}
                                iconColor="text-white"
                                title="Easy Integration"
                                variant="moss"
                                features={[
                                    "OpenAI-compatible API",
                                    "Drop-in replacement",
                                    "SDK for all languages"
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
                                    "Volume discounts"
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
                                    "Data residency"
                                ]}
                            />
                        </div> */}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        title="Ready to Get Started?"
                        description="Join hundreds of developers building on European AI infrastructure"
                        maxWidth="lg"
                    />
                    <div className="flex gap-4 justify-center mt-8">
                        <Button size="lg">Create Account</Button>
                        <Button size="lg" variant="outline">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
};

/**
 * Why Berget Page Pattern
 */
export const WhyBergetPageExample: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <main className="min-h-screen">
            {/* Hero */}
            <HeroBlock
                taglineIcon={Shield}
                tagline="Built for Europe"
                title="AI That Respects Your Data"
                description="The only AI platform designed specifically for European organizations with strict data sovereignty requirements."
                variant="moss"
                actions={
                    <>
                        <Button size="lg" className="px-8 py-6 text-lg">
                            Get Started
                        </Button>
                        <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                            Book Demo
                        </Button>
                    </>
                }
            />

            {/* Key Benefits */}
            <section className="py-32 bg-[#2D6A4F]/5">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        title="Key Benefits"
                        description="Why leading European organizations choose Berget AI"
                        maxWidth="lg"
                    />

                    {/* Feature Cards - Temporarily commented out until FeatureCard is recreated */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-20">
                        <FeatureCard
                            icon={Lock}
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
                            icon={Heart}
                            iconColor="text-white"
                            title="Developer Friendly"
                            description="Designed for developers, by developers"
                            features={[
                                "OpenAI-compatible API",
                                "Extensive documentation",
                                "Active community",
                                "Fast support response"
                            ]}
                            variant="default"
                        />
                        <FeatureCard
                            icon={Leaf}
                            iconColor="text-white"
                            title="Sustainable AI"
                            description="Lower your carbon footprint"
                            features={[
                                "Renewable energy powered",
                                "Carbon-neutral operations",
                                "Energy-efficient hardware",
                                "Transparent reporting"
                            ]}
                            variant="default"
                        />
                    </div> */}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        title="Start Building Today"
                        description="Join the growing community of developers building on Berget AI"
                        size="lg"
                    />
                    <div className="flex gap-4 justify-center mt-8">
                        <Button size="lg">Create Account</Button>
                        <Button size="lg" variant="outline">
                            Talk to Sales
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
};

/**
 * Simple Landing Page
 */
export const SimpleLandingPage: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <main className="min-h-screen">
            {/* Hero */}
            <HeroBlock
                title="Build Faster with Berget AI"
                description="The simplest way to add AI to your applications"
                actions={
                    <>
                        <Button size="lg">Start Free Trial</Button>
                        <Button size="lg" variant="ghost">
                            See Demo →
                        </Button>
                    </>
                }
            />

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        title="Ready to build?"
                        description="Start your free trial today"
                    />
                    <div className="flex justify-center mt-8">
                        <Button size="lg">Get Started</Button>
                    </div>
                </div>
            </section>
        </main>
    )
};
