import type { Meta, StoryObj } from '@storybook/react'
import { Panel } from './Panel'

const meta = {
  title: 'Atoms/Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Panel Component

The foundational component for all card-like surfaces in the design system.

## Philosophy

Panel serves as the base for all containers, cards, and surface components. By centralizing
panel styling, we ensure consistency across the entire design system.

## Usage

### As a base component
Other components like Card, FeatureCard, and custom containers should extend Panel:

\`\`\`tsx
// Card.tsx - builds on Panel
const Card = ({ children, ...props }) => (
  <Panel variant="default" {...props}>
    {children}
  </Panel>
)
\`\`\`

### Direct usage
Use Panel directly when you need a simple container:

\`\`\`tsx
<Panel variant="glass" padding="lg">
  Your content here
</Panel>
\`\`\`

## Design Principles

- **Consistency**: All surfaces share the same base styling
- **Flexibility**: Multiple variants for different use cases
- **Composability**: Easy to extend for specific needs
- **Performance**: Minimal CSS, leverages Tailwind
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'elevated', 'flat', 'outline'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default panel with border and standard padding
 */
export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-medium mb-2">Default Panel</h3>
        <p className="text-white/60">
          Standard panel with border and medium padding. This is the most commonly used variant.
        </p>
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[400px]">
      <Panel {...args} />
    </div>
  ),
}

/**
 * Glass morphism effect with backdrop blur
 */
export const Glass: Story = {
  args: {
    variant: 'glass',
    children: (
      <div>
        <h3 className="text-lg font-medium mb-2">Glass Panel</h3>
        <p className="text-white/60">
          Glass morphism effect with backdrop blur. Perfect for overlays and modals.
        </p>
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[400px]">
      <Panel {...args} />
    </div>
  ),
}

/**
 * Elevated panel with shadow and hover effect
 */
export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 className="text-lg font-medium mb-2">Elevated Panel</h3>
        <p className="text-white/60">
          Elevated with shadow and hover lift. Great for interactive cards.
        </p>
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[400px]">
      <Panel {...args} />
    </div>
  ),
}

/**
 * Flat panel without border
 */
export const Flat: Story = {
  args: {
    variant: 'flat',
    children: (
      <div>
        <h3 className="text-lg font-medium mb-2">Flat Panel</h3>
        <p className="text-white/60">Minimal panel without border. Subtle and clean.</p>
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[400px]">
      <Panel {...args} />
    </div>
  ),
}

/**
 * Outline panel - transparent with border only
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: (
      <div>
        <h3 className="text-lg font-medium mb-2">Outline Panel</h3>
        <p className="text-white/60">Transparent with border only. Lightweight appearance.</p>
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[400px]">
      <Panel {...args} />
    </div>
  ),
}

/**
 * Small padding
 */
export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <div>
        <h3 className="text-base font-medium mb-1">Compact Panel</h3>
        <p className="text-sm text-white/60">Small padding for compact layouts.</p>
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[350px]">
      <Panel {...args} />
    </div>
  ),
}

/**
 * Large padding
 */
export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <div>
        <h3 className="text-xl font-medium mb-3">Spacious Panel</h3>
        <p className="text-white/60">Large padding for emphasis and breathing room.</p>
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[450px]">
      <Panel {...args} />
    </div>
  ),
}

/**
 * No padding - full control over layout
 */
export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div className="p-6">
        <h3 className="text-lg font-medium mb-2">Custom Layout Panel</h3>
        <p className="text-white/60 mb-4">No padding - you control the spacing.</p>
        <div className="h-32 bg-[#52B788]/10 rounded-lg flex items-center justify-center">
          Custom content area
        </div>
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[400px]">
      <Panel {...args} />
    </div>
  ),
}

/**
 * All variants comparison
 */
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-6 max-w-2xl">
      <Panel variant="default">
        <h4 className="font-medium mb-2">Default</h4>
        <p className="text-sm text-white/60">Standard with border</p>
      </Panel>
      <Panel variant="glass">
        <h4 className="font-medium mb-2">Glass</h4>
        <p className="text-sm text-white/60">Backdrop blur effect</p>
      </Panel>
      <Panel variant="elevated">
        <h4 className="font-medium mb-2">Elevated</h4>
        <p className="text-sm text-white/60">Shadow with hover</p>
      </Panel>
      <Panel variant="flat">
        <h4 className="font-medium mb-2">Flat</h4>
        <p className="text-sm text-white/60">No border</p>
      </Panel>
      <Panel variant="outline">
        <h4 className="font-medium mb-2">Outline</h4>
        <p className="text-sm text-white/60">Border only</p>
      </Panel>
    </div>
  ),
}

/**
 * Real-world example: Dashboard card
 */
export const DashboardCard: Story = {
  render: () => (
    <div className="w-[350px]">
      <Panel variant="elevated" padding="lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">API Requests</h3>
          <span className="text-2xl">📊</span>
        </div>
        <div className="text-3xl font-medium mb-2">1,234,567</div>
        <p className="text-sm text-green-500">+12.3% from last month</p>
      </Panel>
    </div>
  ),
}

/**
 * Real-world example: Feature showcase
 */
export const FeatureShowcase: Story = {
  render: () => (
    <div className="w-[400px]">
      <Panel variant="glass" padding="lg">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center mb-4">
          <span className="text-2xl">⚡</span>
        </div>
        <h3 className="text-xl font-medium mb-3">Lightning Fast</h3>
        <p className="text-white/60 mb-4">
          Sub-100ms response times for all your AI inference needs. Optimized infrastructure
          across EU regions.
        </p>
        <ul className="space-y-2 text-sm text-white/80">
          <li>✓ Edge locations</li>
          <li>✓ Auto-scaling</li>
          <li>✓ CDN integration</li>
        </ul>
      </Panel>
    </div>
  ),
}

/**
 * Real-world example: Notification
 */
export const Notification: Story = {
  render: () => (
    <div className="w-[400px]">
      <Panel variant="outline" padding="md">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#52B788]/20 flex items-center justify-center flex-shrink-0">
            ✓
          </div>
          <div className="flex-1">
            <h4 className="font-medium mb-1">Deployment successful</h4>
            <p className="text-sm text-white/60">
              Your model is now live and receiving requests.
            </p>
          </div>
        </div>
      </Panel>
    </div>
  ),
}
