import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ArrowRight, Download, Loader2, Mail, Plus } from 'lucide-react'

/**
 * Button component showcasing all variants and sizes in the Berget Design System.
 * 
 * The Button component is the primary interaction element, designed with Scandinavian
 * principles in mind - clean, functional, and beautiful.
 */
const meta = {
  title: 'Design System/Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Button component is a versatile, accessible button with multiple variants and sizes.
It supports all native button attributes and can be used with the \`asChild\` prop for
composition with other components.

**Features:**
- Multiple variants (default, primary, secondary, outline, ghost, destructive, link)
- Three sizes (sm, default, lg)
- Icon support
- Loading states
- Disabled states
- Full keyboard accessibility
- Smooth hover and focus transitions
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'icon'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as Slot component for composition',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default button with Berget stone/beige color - the primary brand color
 */
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
}

/**
 * Primary button with moss green color - for main call-to-actions
 */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

/**
 * Secondary button with sage green color
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

/**
 * Outline button - transparent with border
 */
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
}

/**
 * Ghost button - minimal style, hover effect only
 */
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}

/**
 * Destructive button - for dangerous actions like delete
 */
export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
}

/**
 * Link button - styled as an underlined link
 */
export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
}

/**
 * Small size button
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
}

/**
 * Large size button
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
}

/**
 * Button with leading icon
 */
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" />
        Send Email
      </>
    ),
  },
}

/**
 * Button with trailing icon
 */
export const WithTrailingIcon: Story = {
  args: {
    children: (
      <>
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </>
    ),
    variant: 'primary',
  },
}

/**
 * Icon-only button
 */
export const IconOnly: Story = {
  args: {
    children: <Plus className="h-4 w-4" />,
    size: 'icon',
    variant: 'outline',
  },
}

/**
 * Loading state button
 */
export const Loading: Story = {
  args: {
    children: (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </>
    ),
    disabled: true,
  },
}

/**
 * Disabled button
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

/**
 * Showcase of all variants
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        <Button variant="default">Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      
      <div className="border-t border-[hsl(var(--border))] pt-4">
        <h3 className="text-sm font-medium text-white/60 mb-3">With Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="primary">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="border-t border-[hsl(var(--border))] pt-4">
        <h3 className="text-sm font-medium text-white/60 mb-3">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div className="border-t border-[hsl(var(--border))] pt-4">
        <h3 className="text-sm font-medium text-white/60 mb-3">States</h3>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="primary">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading
          </Button>
        </div>
      </div>
    </div>
  ),
}
