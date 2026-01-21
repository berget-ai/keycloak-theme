import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './Card'
import { Button } from './Button'
import { Database, Shield, Zap } from 'lucide-react'

/**
 * Card component showcasing all variants in the Berget Design System.
 */
const meta = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
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
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'elevated', 'flat'],
      description: 'Visual style variant of the card',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'default', 'lg'],
      description: 'Padding size',
    },
    withBokeh: {
      control: 'boolean',
      description: 'Enable animated Bokeh background effect',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default card with standard styling
 */
export const Default: Story = {
  args: {
    variant: 'default',
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
            This is the main content area of the card. You can put any content here.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="primary">Action</Button>
        </CardFooter>
      </>
    ),
  },
}

/**
 * Glass morphism variant with backdrop blur
 */
export const Glass: Story = {
  args: {
    variant: 'glass',
    children: (
      <>
        <CardHeader>
          <CardTitle>Glass Card</CardTitle>
          <CardDescription>
            With backdrop blur and transparency
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            The glass variant creates a beautiful frosted glass effect.
          </p>
        </CardContent>
      </>
    ),
  },
}

/**
 * Elevated card with shadow and hover effect
 */
export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>Hover to see the lift effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            This card lifts slightly on hover for interactive feedback.
          </p>
        </CardContent>
      </>
    ),
  },
}

/**
 * Flat card without border
 */
export const Flat: Story = {
  args: {
    variant: 'flat',
    children: (
      <>
        <CardHeader>
          <CardTitle>Flat Card</CardTitle>
          <CardDescription>Minimal styling</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">A minimalist card without borders.</p>
        </CardContent>
      </>
    ),
  },
}

/**
 * Card with Bokeh animated background effect
 */
export const WithBokeh: Story = {
  args: {
    variant: 'glass',
    withBokeh: true,
    children: (
      <>
        <CardHeader>
          <CardTitle>Bokeh Effect</CardTitle>
          <CardDescription>
            Subtle animated glow in the background
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            The Bokeh effect adds gentle, floating orbs of color in the background.
          </p>
        </CardContent>
      </>
    ),
  },
}

/**
 * Feature card with icon
 */
export const FeatureCard: Story = {
  args: {
    variant: 'glass',
    children: (
      <>
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-[hsl(var(--secondary))]/20 flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-[hsl(var(--secondary))]" />
          </div>
          <CardTitle>Lightning Fast</CardTitle>
          <CardDescription>
            Optimized for performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Built with modern technologies for blazing fast performance.
          </p>
        </CardContent>
      </>
    ),
  },
}

/**
 * Showcase of different padding sizes
 */
export const PaddingSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Card padding="none">
        <div className="p-4 bg-white/5">No padding wrapper</div>
      </Card>
      <Card padding="sm">
        <CardTitle>Small Padding</CardTitle>
      </Card>
      <Card padding="default">
        <CardTitle>Default Padding</CardTitle>
      </Card>
      <Card padding="lg">
        <CardTitle>Large Padding</CardTitle>
      </Card>
    </div>
  ),
}

/**
 * Grid of feature cards
 */
export const FeatureGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 w-[900px]">
      <Card variant="glass" className="group hover:border-[hsl(var(--secondary))]/50">
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-[hsl(var(--secondary))]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6 text-[hsl(var(--secondary))]" />
          </div>
          <CardTitle>Secure</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Enterprise-grade security built in
          </p>
        </CardContent>
      </Card>

      <Card variant="glass" className="group hover:border-[hsl(var(--secondary))]/50">
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-[hsl(var(--secondary))]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6 text-[hsl(var(--secondary))]" />
          </div>
          <CardTitle>Fast</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Optimized for performance
          </p>
        </CardContent>
      </Card>

      <Card variant="glass" className="group hover:border-[hsl(var(--secondary))]/50">
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-[hsl(var(--secondary))]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Database className="w-6 h-6 text-[hsl(var(--secondary))]" />
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
  ),
}

/**
 * All card variants showcase
 */
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 w-[800px]">
      <Card variant="default">
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Standard card styling</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">With subtle border and clean background</p>
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

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
          <CardDescription>Interactive hover effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Lifts on hover for feedback</p>
        </CardContent>
      </Card>

      <Card variant="glass" withBokeh>
        <CardHeader>
          <CardTitle>With Bokeh</CardTitle>
          <CardDescription>Animated background</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Subtle floating orbs of color</p>
        </CardContent>
      </Card>
    </div>
  ),
}
