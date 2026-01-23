import type { Meta, StoryObj } from '@storybook/react'
import { Panel } from './Panel'

/**
 * Panel - the foundational component for all card-like surfaces.
 * 
 * Panel is the base building block. Card and other components extend Panel.
 * Use controls below to explore different variants and padding options.
 */
const meta = {
  title: 'Atoms/Panel',
  component: Panel,
  parameters: {
    docs: {
      description: {
        component: `
# Panel Component

The foundational component for all card-like surfaces in the design system.

**Why Panel Exists:**
- Single source of truth for surface styling
- Card, FeatureCard, and other components extend Panel
- DRY principle - define borders, backgrounds, shadows once
- Consistent behavior across all card-like components

**Variants:**
- \`default\` - Standard panel with border
- \`glass\` - Glassmorphism with backdrop blur
- \`elevated\` - Shadow and hover lift effect
- \`flat\` - No border, subtle background
- \`outline\` - Transparent with border only

**Padding Options:**
- \`none\`, \`sm\`, \`md\` (default), \`lg\`

**Use the Controls panel below** to experiment with different options.

**See also:** COMPONENT-GUIDE.md for when to use Panel vs Card vs FeatureCard.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'elevated', 'flat', 'outline'],
      description: 'Visual style variant',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal padding',
    },
    radius: {
      control: 'select',
      options: ['default', 'lg', 'xl'],
      description: 'Border radius size',
    },
    bokeh: {
      control: 'boolean',
      description: 'Enable subtle bokeh effect (default: true)',
    },
  },
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive panel - use Controls to change variant and padding
 */
export const Interactive: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    radius: 'default',
    bokeh: true,
    children: (
      <div className="relative z-10">
        <h3 className="font-medium mb-2">Panel Component</h3>
        <p className="text-sm text-muted-foreground">
          The foundational component for all card-like surfaces. Use the controls to explore variants.
        </p>
      </div>
    ),
  },
}

/**
 * All variants showcase
 */
export const AllVariants: Story = {
    args: {
        children: ""
    },
  render: () => (
    <div className="flex flex-col gap-4 w-[600px]">
      <Panel variant="default">
        <p className="text-sm font-medium">Default</p>
        <p className="text-sm text-white/60">Standard with border</p>
      </Panel>

      <Panel variant="glass">
        <p className="text-sm font-medium">Glass</p>
        <p className="text-sm text-white/60">Backdrop blur effect</p>
      </Panel>

      <Panel variant="elevated">
        <p className="text-sm font-medium">Elevated</p>
        <p className="text-sm text-white/60">Shadow and hover lift</p>
      </Panel>

      <Panel variant="flat">
        <p className="text-sm font-medium">Flat</p>
        <p className="text-sm text-white/60">No border</p>
      </Panel>

      <Panel variant="outline">
        <p className="text-sm font-medium">Outline</p>
        <p className="text-sm text-white/60">Transparent with border</p>
      </Panel>
    </div>
  ),
}

/**
 * Padding options
 */
export const PaddingOptions: Story = {
    args: {
        children: ""
    },
  render: () => (
    <div className="flex flex-col gap-4 w-[600px]">
      <Panel padding="none">
        <p className="text-sm">None - No padding</p>
      </Panel>
      <Panel padding="sm">
        <p className="text-sm">Small - Compact spacing</p>
      </Panel>
      <Panel padding="md">
        <p className="text-sm">Medium - Default comfortable spacing</p>
      </Panel>
      <Panel padding="lg">
        <p className="text-sm">Large - Generous spacing</p>
      </Panel>
    </div>
  ),
}

/**
 * Border radius variants - Console style with larger corners
 */
export const RadiusVariants: Story = {
    args: {
        children: ""
    },
  render: () => (
    <div className="flex flex-col gap-6 w-[600px]">
      <Panel radius="default" padding="lg">
        <div className="relative z-10">
          <p className="text-base font-medium mb-1">Default (rounded-2xl)</p>
          <p className="text-sm text-white/60">Standard 32px border radius</p>
        </div>
      </Panel>

      <Panel radius="lg" padding="lg">
        <div className="relative z-10">
          <p className="text-base font-medium mb-1">Large (rounded-3xl)</p>
          <p className="text-sm text-white/60">
            Larger 48px radius - perfect for stat cards
          </p>
        </div>
      </Panel>

      <Panel radius="xl" padding="lg">
        <div className="relative z-10">
          <p className="text-base font-medium mb-1">XL (rounded-[2rem])</p>
          <p className="text-sm text-white/60">
            Extra large 64px radius - for big content panels
          </p>
        </div>
      </Panel>
    </div>
  ),
}

/**
 * Bokeh effect comparison
 */
export const BokehEffect: Story = {
    args: {
        children: ""
    },
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <Panel bokeh={true} padding="lg" radius="lg">
        <div className="relative z-10">
          <p className="text-base font-medium mb-2">With Bokeh (Default)</p>
          <p className="text-sm text-white/60">
            Subtle organic floating lights create visual interest and depth
          </p>
        </div>
      </Panel>

      <Panel bokeh={false} padding="lg" radius="lg">
        <div className="relative z-10">
          <p className="text-base font-medium mb-2">Without Bokeh</p>
          <p className="text-sm text-white/60">
            Clean minimal look without animated effects
          </p>
        </div>
      </Panel>
    </div>
  ),
}
