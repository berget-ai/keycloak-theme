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
    children: (
      <div>
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
