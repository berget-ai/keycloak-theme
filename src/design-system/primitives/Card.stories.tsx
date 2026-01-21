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
  render: () => (
    <div 
      className="relative min-h-[400px] w-full flex items-center justify-center p-8"
      style={{
        background: 'linear-gradient(135deg, #52B788 0%, #2D6A4F 50%, #1B4332 100%)',
        backgroundSize: '400% 400%',
      }}
    >
      {/* Decorative elements to show blur effect */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#74C69D] opacity-60" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#E5DDD5] opacity-40" />
      <div className="absolute top-1/2 right-20 w-24 h-24 rounded-full bg-[#52B788] opacity-50" />
      
      <Card variant="glass" className="relative z-10 max-w-md">
        <CardHeader>
          <CardTitle>Glass Card</CardTitle>
          <CardDescription>
            With backdrop blur and transparency
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            The glass variant creates a beautiful frosted glass effect with backdrop-blur.
            Notice how the background elements behind the card are blurred.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
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
    <div 
      className="relative p-8 min-h-[500px] flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #52B788 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#74C69D] opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-[#E5DDD5] opacity-15 blur-2xl" />
      
      <div className="grid grid-cols-3 gap-4 w-[900px] relative z-10">
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
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
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
