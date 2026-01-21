import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta = {
  title: 'Design System/Primitives/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Official Berget AI logo component.

**Design Principles:**
- Maintains aspect ratio
- Scalable vector graphics
- Two variants for different backgrounds
- Consistent brand representation

**When to Use:**
- Navigation headers
- Email templates
- Marketing materials
- Authentication pages
- Footer branding

**Brand Guidelines:**
- Use light variant on dark backgrounds
- Use dark variant on light backgrounds
- Maintain clear space around logo
- Do not distort or modify the logo shape
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'range', min: 24, max: 200, step: 8 },
    },
    variant: {
      control: 'select',
      options: ['light', 'dark'],
    },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Light variant for dark backgrounds (default)
 */
export const Light: Story = {
  args: {
    size: 48,
    variant: 'light',
  },
}

/**
 * Dark variant for light backgrounds
 */
export const Dark: Story = {
  args: {
    size: 48,
    variant: 'dark',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
}

/**
 * Small size (24px) - For compact headers or favicons
 */
export const Small: Story = {
  args: {
    size: 24,
    variant: 'light',
  },
}

/**
 * Medium size (48px) - Default size for most uses
 */
export const Medium: Story = {
  args: {
    size: 48,
    variant: 'light',
  },
}

/**
 * Large size (96px) - For hero sections or featured placements
 */
export const Large: Story = {
  args: {
    size: 96,
    variant: 'light',
  },
}

/**
 * Extra Large size (160px) - For landing pages or splash screens
 */
export const ExtraLarge: Story = {
  args: {
    size: 160,
    variant: 'light',
  },
}

/**
 * Size Comparison - All sizes side by side
 */
export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-end gap-8">
      <div className="text-center">
        <Logo size={24} variant="light" />
        <p className="text-xs text-muted-foreground mt-2">24px</p>
      </div>
      <div className="text-center">
        <Logo size={32} variant="light" />
        <p className="text-xs text-muted-foreground mt-2">32px</p>
      </div>
      <div className="text-center">
        <Logo size={48} variant="light" />
        <p className="text-xs text-muted-foreground mt-2">48px</p>
      </div>
      <div className="text-center">
        <Logo size={64} variant="light" />
        <p className="text-xs text-muted-foreground mt-2">64px</p>
      </div>
      <div className="text-center">
        <Logo size={96} variant="light" />
        <p className="text-xs text-muted-foreground mt-2">96px</p>
      </div>
    </div>
  ),
}

/**
 * In Navigation Header
 */
export const InNavigation: Story = {
  render: () => (
    <div className="w-full bg-background border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size={32} variant="light" />
          <span className="text-lg font-medium">Berget AI</span>
        </div>
        <nav className="flex gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Dashboard
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Models
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Docs
          </a>
        </nav>
      </div>
    </div>
  ),
}

/**
 * Login Page
 */
export const LoginPage: Story = {
  render: () => (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Logo size={64} variant="light" />
          </div>
          <h1 className="text-2xl font-medium">Welcome to Berget AI</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
            <button className="w-full h-10 rounded-md bg-primary text-primary-foreground font-medium">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

/**
 * Hero Section
 */
export const HeroSection: Story = {
  render: () => (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="text-center space-y-8 max-w-3xl">
        <div className="flex justify-center">
          <Logo size={120} variant="light" />
        </div>
        <h1 className="text-5xl font-serif font-medium">
          European AI Infrastructure
        </h1>
        <p className="text-xl text-muted-foreground">
          Deploy and scale AI models with data residency in Europe. 
          GDPR compliant, sovereign, and powerful.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium">
            Get Started
          </button>
          <button className="h-12 px-8 rounded-md border border-input hover:bg-white/5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

/**
 * Footer Branding
 */
export const FooterBranding: Story = {
  render: () => (
    <footer className="w-full bg-background border-t border-white/10 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={32} variant="light" />
              <span className="text-lg font-medium">Berget AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              European AI infrastructure for the modern era.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#">Models</a></li>
              <li><a href="#">Deployments</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-sm text-muted-foreground text-center">
          © 2026 Berget AI. All rights reserved.
        </div>
      </div>
    </footer>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

/**
 * Variant Comparison - Light vs Dark
 */
export const VariantComparison: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-background p-8 rounded-lg border border-white/10">
        <p className="text-sm text-muted-foreground mb-4">Light (on dark bg)</p>
        <Logo size={64} variant="light" />
      </div>
      <div className="bg-white p-8 rounded-lg">
        <p className="text-sm text-gray-600 mb-4">Dark (on light bg)</p>
        <Logo size={64} variant="dark" />
      </div>
    </div>
  ),
}
