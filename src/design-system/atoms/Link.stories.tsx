import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";
import { ArrowRight, Github, Twitter, Mail, FileText } from "lucide-react";

const meta = {
    title: "Atoms/Link",
    component: Link,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive link - use Controls to change variant and size
 */
export const Interactive: Story = {
    args: {
        href: "#",
        children: "Click me",
        variant: "default",
        size: "default"
    }
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="flex flex-col gap-6 w-[600px]">
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Variants
                </h3>
                <div className="flex flex-col gap-3">
                    <Link href="#" variant="default">
                        Default link
                    </Link>
                    <Link href="#" variant="primary">
                        Primary link (Berget Stone)
                    </Link>
                    <Link href="#" variant="secondary">
                        Secondary link (Moss Green)
                    </Link>
                    <Link href="#" variant="ghost">
                        Ghost link
                    </Link>
                    <Link href="#" variant="muted">
                        Muted link
                    </Link>
                    <Link href="#" variant="code">
                        Code link
                    </Link>
                </div>
            </div>

            <div className="border-t border-[hsl(var(--border))] pt-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Sizes</h3>
                <div className="flex flex-col gap-3">
                    <Link href="#" size="sm">
                        Small link
                    </Link>
                    <Link href="#" size="default">
                        Default size link
                    </Link>
                    <Link href="#" size="lg">
                        Large link
                    </Link>
                </div>
            </div>
        </div>
    )
};

/**
 * Links with icons
 */
export const WithIcons: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="flex flex-col gap-4 w-[600px]">
            <Link href="/next" icon={<ArrowRight className="w-4 h-4" />}>
                Next page
            </Link>
            <Link href="/docs" icon={<FileText className="w-4 h-4" />}>
                Documentation
            </Link>
            <Link href="/contact" icon={<Mail className="w-4 h-4" />}>
                Contact us
            </Link>
            <Link href="/github" icon={<Github className="w-4 h-4" />}>
                View on GitHub
            </Link>
            <Link href="/twitter" icon={<Twitter className="w-4 h-4" />}>
                Follow on Twitter
            </Link>
        </div>
    )
};

/**
 * External links
 */
export const ExternalLinks: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="flex flex-col gap-4 w-[600px]">
            <Link href="https://example.com" external>
                External link (automatic)
            </Link>
            <Link href="https://example.com" showExternalIcon>
                External link with icon
            </Link>
            <Link href="mailto:hello@example.com" showExternalIcon>
                Email link
            </Link>
            <Link href="tel:+1234567890" showExternalIcon>
                Phone link
            </Link>
            <Link
                href="https://github.com"
                icon={<Github className="w-4 h-4" />}
                showExternalIcon
            >
                GitHub with icon
            </Link>
        </div>
    )
};

/**
 * Links in context
 */
export const InContext: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="w-[800px] p-8 rounded-2xl bg-[rgba(26,26,26,0.4)] border border-[rgba(26,26,26,0.4)] backdrop-blur-[5px]">
            <h2 className="text-2xl font-medium mb-4">Welcome to Berget</h2>
            <p className="text-white/80 mb-4">
                We build beautiful, performant design systems for modern applications. Our
                components are crafted with Scandinavian minimalism and attention to
                detail.
            </p>
            <p className="text-white/80 mb-6">
                Learn more about our{" "}
                <Link href="/about" variant="primary">
                    philosophy
                </Link>{" "}
                or explore our{" "}
                <Link href="/components" variant="primary">
                    component library
                </Link>
                .
            </p>
            <div className="flex gap-4">
                <Link href="/docs" variant="code">
                    View Documentation
                </Link>
                <Link
                    href="/github"
                    icon={<Github className="w-4 h-4" />}
                    showExternalIcon
                >
                    GitHub
                </Link>
            </div>
        </div>
    )
};

/**
 * Navigation links
 */
export const Navigation: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="w-[800px] p-6 rounded-2xl bg-[rgba(26,26,26,0.4)] border border-[rgba(26,26,26,0.4)] backdrop-blur-[5px]">
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" variant="primary" size="lg">
                        Berget
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/products">Products</Link>
                        <Link href="/solutions">Solutions</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="/docs">Docs</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login" variant="ghost">
                        Login
                    </Link>
                    <Link href="/signup" variant="primary">
                        Sign up
                    </Link>
                </div>
            </nav>
        </div>
    )
};

/**
 * Breadcrumb links
 */
export const Breadcrumb: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="w-[800px] p-6 rounded-2xl bg-[rgba(26,26,26,0.4)] border border-[rgba(26,26,26,0.4)] backdrop-blur-[5px]">
            <nav className="flex items-center gap-2 text-sm">
                <Link href="/" variant="muted" size="sm">
                    Home
                </Link>
                <span className="text-white/40">/</span>
                <Link href="/docs" variant="muted" size="sm">
                    Documentation
                </Link>
                <span className="text-white/40">/</span>
                <Link href="/docs/components" variant="muted" size="sm">
                    Components
                </Link>
                <span className="text-white/40">/</span>
                <span className="text-white/60">Link</span>
            </nav>
        </div>
    )
};

/**
 * Footer links
 */
export const FooterLinks: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="w-[800px] p-8 rounded-2xl bg-[rgba(26,26,26,0.4)] border border-[rgba(26,26,26,0.4)] backdrop-blur-[5px]">
            <div className="grid grid-cols-4 gap-8">
                <div>
                    <h4 className="font-medium mb-4">Product</h4>
                    <div className="flex flex-col gap-2">
                        <Link href="/features" variant="muted" size="sm">
                            Features
                        </Link>
                        <Link href="/pricing" variant="muted" size="sm">
                            Pricing
                        </Link>
                        <Link href="/integrations" variant="muted" size="sm">
                            Integrations
                        </Link>
                        <Link href="/changelog" variant="muted" size="sm">
                            Changelog
                        </Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-medium mb-4">Resources</h4>
                    <div className="flex flex-col gap-2">
                        <Link href="/docs" variant="muted" size="sm">
                            Documentation
                        </Link>
                        <Link href="/blog" variant="muted" size="sm">
                            Blog
                        </Link>
                        <Link href="/tutorials" variant="muted" size="sm">
                            Tutorials
                        </Link>
                        <Link href="/api" variant="muted" size="sm">
                            API Reference
                        </Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-medium mb-4">Company</h4>
                    <div className="flex flex-col gap-2">
                        <Link href="/about" variant="muted" size="sm">
                            About
                        </Link>
                        <Link href="/careers" variant="muted" size="sm">
                            Careers
                        </Link>
                        <Link href="/contact" variant="muted" size="sm">
                            Contact
                        </Link>
                        <Link href="/press" variant="muted" size="sm">
                            Press
                        </Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-medium mb-4">Legal</h4>
                    <div className="flex flex-col gap-2">
                        <Link href="/privacy" variant="muted" size="sm">
                            Privacy
                        </Link>
                        <Link href="/terms" variant="muted" size="sm">
                            Terms
                        </Link>
                        <Link href="/security" variant="muted" size="sm">
                            Security
                        </Link>
                        <Link href="/cookies" variant="muted" size="sm">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

/**
 * Disabled state
 */
export const Disabled: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="flex flex-col gap-4 w-[600px]">
            <Link href="#" disabled>
                Disabled link
            </Link>
            <Link href="#" variant="primary" disabled>
                Disabled primary link
            </Link>
            <Link href="#" variant="code" disabled>
                Disabled code link
            </Link>
        </div>
    )
};

/**
 * Code documentation links
 */
export const CodeLinks: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="w-[800px] p-6 rounded-2xl bg-[rgba(26,26,26,0.4)] border border-[rgba(26,26,26,0.4)] backdrop-blur-[5px]">
            <h2 className="text-xl font-medium mb-4">Getting Started</h2>
            <p className="text-white/80 mb-4">Install the package using npm or yarn:</p>
            <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded-lg font-mono text-sm mb-4">
                <p className="text-white/60 mb-2"># Using npm</p>
                <p className="text-[hsl(var(--primary))]">
                    npm install @berget/design-system
                </p>
                <p className="text-white/60 mt-4 mb-2"># Using yarn</p>
                <p className="text-[hsl(var(--primary))]">
                    yarn add @berget/design-system
                </p>
            </div>
            <p className="text-white/80 mb-4">
                For more installation options, see the{" "}
                <Link href="/docs/installation" variant="code">
                    installation guide
                </Link>
                .
            </p>
            <p className="text-white/80">
                Check out our{" "}
                <Link href="/docs/components" variant="code">
                    component documentation
                </Link>{" "}
                for detailed usage examples.
            </p>
        </div>
    )
};
