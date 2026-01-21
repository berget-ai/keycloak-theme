import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Badge component for displaying small status indicators and labels.

**Design Principles:**
- Small and unobtrusive
- Clear semantic variants
- Consistent with Berget color palette
- Accessible color contrast

**When to Use:**
- Status indicators (Active, Pending, Failed)
- Feature flags (New, Beta, Premium)
- Tags and categories
- Notification counts
- Labels and metadata

**Accessibility:**
- Uses semantic colors with sufficient contrast
- Text should be concise and meaningful
- Consider aria-label for icon-only badges
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'accent',
        'destructive',
        'outline',
        'success',
        'warning',
        'info',
      ],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default badge with Berget Stone styling
 */
export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

/**
 * Secondary variant with Moss green
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

/**
 * Accent variant with Sage green
 */
export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Accent',
  },
}

/**
 * Destructive variant for errors
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Error',
  },
}

/**
 * Outline variant
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

/**
 * Success variant for positive states
 */
export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}

/**
 * Warning variant for caution states
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
}

/**
 * Info variant for informational states
 */
export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
}

/**
 * Status Indicators
 * Common use case: showing system or resource status
 */
export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="destructive">Failed</Badge>
      <Badge variant="info">Processing</Badge>
      <Badge variant="outline">Inactive</Badge>
    </div>
  ),
}

/**
 * Feature Flags
 * Common use case: highlighting new or special features
 */
export const FeatureFlags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="accent">New</Badge>
      <Badge variant="warning">Beta</Badge>
      <Badge variant="secondary">Premium</Badge>
      <Badge variant="info">Coming Soon</Badge>
    </div>
  ),
}

/**
 * Tags and Categories
 * Common use case: categorizing content
 */
export const TagsAndCategories: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline">React</Badge>
      <Badge variant="outline">TypeScript</Badge>
      <Badge variant="outline">Design System</Badge>
      <Badge variant="outline">Components</Badge>
    </div>
  ),
}

/**
 * Notification Counts
 * Common use case: showing unread counts or notifications
 */
export const NotificationCounts: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Messages</span>
        <Badge variant="destructive">3</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Notifications</span>
        <Badge variant="secondary">12</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Updates</span>
        <Badge variant="info">5</Badge>
      </div>
    </div>
  ),
}

/**
 * All Variants
 * Shows all available badge variants
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">Outline</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
      </div>
    </div>
  ),
}
