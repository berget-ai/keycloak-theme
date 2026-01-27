import type { Meta, StoryObj } from "@storybook/react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "./Card";
import { Button } from "./Button";
import { Database, Shield, Zap } from "lucide-react";

/**
 * Card component showcasing all variants in the Berget Design System.
 */
const meta = {
    title: "Molecules/Card",
    component: Card,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
The Card component is a flexible container for grouping related content and actions.

**Features:**
- Multiple variants (default, glass, elevated, flat)
- Customizable padding
- Optional Bokeh animated background effect
- Composed subcomponents (Header, Title, Description, Content, Footer)
- Smooth transitions and hover effects
        `
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["highlight", "glass", "solid"],
            description: "Visual style variant of the card"
        }
    }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default card with standard styling
 */
export const Default: Story = {
    args: {
        variant: "highlight",
        children: (
            <>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>
                        A description of what this card contains
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">
                        This is the main content area of the card. You can put any content
                        here.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant="primary">Action</Button>
                </CardFooter>
            </>
        )
    }
};

/**
 * Highlight variant with dark glass and radial gradient
 */
export const Highlight: Story = {
    args: {
        variant: "highlight",
        children: (
            <>
                <CardHeader>
                    <CardTitle>Highlight Card</CardTitle>
                    <CardDescription>Dark glass with subtle gradient</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">
                        The highlight variant features a dark glass background with a
                        subtle radial gradient and top highlight.
                    </p>
                </CardContent>
            </>
        )
    }
};

/**
 * Glass morphism variant with backdrop blur
 */
export const Glass: Story = {
    args: {
        children: ""
    },
    render: () => (
        <div
            className="relative min-h-[400px] w-full flex items-center justify-center p-8"
            style={{
                background:
                    "linear-gradient(135deg, #1B4332 0%, #0D3B25 50%, #081F15 100%)",
                backgroundSize: "400% 400%"
            }}
        >
            {/* Decorative elements to show blur effect */}
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#74C69D] opacity-60" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#E5DDD5] opacity-40" />
            <div className="absolute top-1/2 right-20 w-24 h-24 rounded-full bg-[#52B788] opacity-50" />

            <Card variant="glass" className="relative z-10 max-w-md items-center">
                <CardHeader>
                    <CardTitle>Glass Card</CardTitle>
                    <CardDescription>With backdrop blur and transparency</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">
                        The glass variant creates a beautiful frosted glass effect with
                        backdrop-blur. Notice how the background elements behind the card
                        are blurred.
                    </p>
                </CardContent>
            </Card>
        </div>
    ),
    parameters: {
        layout: "fullscreen"
    }
};

/**
 * Solid variant with dark background
 */
export const Solid: Story = {
    args: {
        variant: "solid",
        children: (
            <>
                <CardHeader>
                    <CardTitle>Solid Card</CardTitle>
                    <CardDescription>Solid dark background with gradient</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">
                        The solid variant features a solid dark background with a subtle
                        radial gradient and top highlight.
                    </p>
                </CardContent>
            </>
        )
    }
};

/**
 * Feature card with icon
 */
export const FeatureCard: Story = {
    args: {
        variant: "glass",
        children: (
            <>
                <CardHeader>
                    <div className="w-12 h-12  flex items-center justify-center mb-4">
                        <Zap className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <CardTitle>Lightning Fast</CardTitle>
                    <CardDescription>Optimized for performance</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        Built with modern technologies for blazing fast performance.
                    </p>
                </CardContent>
            </>
        )
    }
};

/**
 * Grid of feature cards
 */
export const FeatureGrid: Story = {
    args: {
        children: ""
    },
    render: () => (
        <div
            className="relative p-8 min-h-[500px] flex items-center justify-center"
            style={{
                background:
                    "linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #52B788 100%)"
            }}
        >
            {/* Decorative background elements */}
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#74C69D] opacity-20 blur-3xl" />
            <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-[#E5DDD5] opacity-15 blur-2xl" />

            <div className="grid grid-cols-3 gap-4 w-[900px] relative z-10">
                <Card
                    variant="glass"
                    className="group hover:border-[hsl(var(--secondary))]/50"
                >
                    <CardHeader>
                        <div className="w-12 h-12  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Shield className="w-7 h-7 text-white" strokeWidth={2} />
                        </div>
                        <CardTitle>Secure</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">
                            Enterprise-grade security built in
                        </p>
                    </CardContent>
                </Card>

                <Card
                    variant="glass"
                    className="group hover:border-[hsl(var(--secondary))]/50"
                >
                    <CardHeader>
                        <div className="w-12 h-12  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Zap className="w-7 h-7 text-white" strokeWidth={2} />
                        </div>
                        <CardTitle>Fast</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">
                            Optimized for performance
                        </p>
                    </CardContent>
                </Card>

                <Card
                    variant="glass"
                    className="group hover:border-[hsl(var(--secondary))]/50"
                >
                    <CardHeader>
                        <div className="w-12 h-12  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Database className="w-7 h-7 text-white" strokeWidth={2} />
                        </div>
                        <CardTitle>Scalable</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">
                            Grows with your needs
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    ),
    parameters: {
        layout: "fullscreen"
    }
};

/**
 * All card variants showcase
 */
export const AllVariants: Story = {
    args: {
        children: ""
    },
    render: () => (
        <div className="flex flex-col gap-6 w-[400px]">
            <Card variant="highlight">
                <CardHeader>
                    <CardTitle>Highlight</CardTitle>
                    <CardDescription>Dark glass gradient</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">Subtle radial gradient overlay</p>
                </CardContent>
            </Card>

            <Card variant="glass">
                <CardHeader>
                    <CardTitle>Glass</CardTitle>
                    <CardDescription>Frosted glass effect</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">Backdrop blur for a modern look</p>
                </CardContent>
            </Card>

            <Card variant="solid">
                <CardHeader>
                    <CardTitle>Solid</CardTitle>
                    <CardDescription>Solid dark background</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">Solid background with gradient accent</p>
                </CardContent>
            </Card>
        </div>
    )
};
