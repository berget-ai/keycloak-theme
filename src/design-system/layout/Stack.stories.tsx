import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from './Stack'
import { Button } from '../primitives/Button'
import { Card } from '../primitives/Card'
import { Badge } from '../primitives/Badge'

const meta = {
  title: 'Design System/Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Stack component for consistent spacing between elements using flexbox.

**Design Principles:**
- Consistent spacing system
- Flexible alignment options
- Simple and predictable layout
- Composable with other components

**When to Use:**
- Form layouts
- Card content
- Button groups
- Navigation items
- Any list of related elements

**Best Practices:**
- Use semantic spacing (md for most cases)
- Combine direction and alignment for complex layouts
- Nest stacks for 2D layouts
- Consider responsive behavior
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
  },
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

// Demo boxes
const DemoBox = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-primary/20 border border-[hsl(var(--border-moss))] rounded-lg px-4 py-3 ${className}`}>
    {children}
  </div>
)

/**
 * Vertical Stack (Default) - Items stacked vertically
 */
export const Vertical: Story = {
  render: () => (
    <Stack>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </Stack>
  ),
}

/**
 * Horizontal Stack - Items arranged horizontally
 */
export const Horizontal: Story = {
  render: () => (
    <Stack direction="horizontal">
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </Stack>
  ),
}

/**
 * Spacing Variants - Different gap sizes
 */
export const SpacingVariants: Story = {
  render: () => (
    <Stack spacing="lg">
      <div>
        <p className="text-sm text-muted-foreground mb-2">None (gap-0)</p>
        <Stack spacing="none" direction="horizontal">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">XS (gap-1 / 4px)</p>
        <Stack spacing="xs" direction="horizontal">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">SM (gap-2 / 8px)</p>
        <Stack spacing="sm" direction="horizontal">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">MD (gap-4 / 16px, default)</p>
        <Stack spacing="md" direction="horizontal">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">LG (gap-6 / 24px)</p>
        <Stack spacing="lg" direction="horizontal">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">XL (gap-8 / 32px)</p>
        <Stack spacing="xl" direction="horizontal">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
    </Stack>
  ),
}

/**
 * Alignment Options - Different item alignments
 */
export const AlignmentOptions: Story = {
  render: () => (
    <Stack spacing="lg">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Start</p>
        <Stack direction="horizontal" align="start" className="h-24 bg-white/5 rounded-lg p-4">
          <DemoBox className="h-8">Short</DemoBox>
          <DemoBox className="h-16">Tall</DemoBox>
          <DemoBox className="h-12">Medium</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">Center</p>
        <Stack direction="horizontal" align="center" className="h-24 bg-white/5 rounded-lg p-4">
          <DemoBox className="h-8">Short</DemoBox>
          <DemoBox className="h-16">Tall</DemoBox>
          <DemoBox className="h-12">Medium</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">End</p>
        <Stack direction="horizontal" align="end" className="h-24 bg-white/5 rounded-lg p-4">
          <DemoBox className="h-8">Short</DemoBox>
          <DemoBox className="h-16">Tall</DemoBox>
          <DemoBox className="h-12">Medium</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">Stretch</p>
        <Stack direction="horizontal" align="stretch" className="h-24 bg-white/5 rounded-lg p-4">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </Stack>
      </div>
    </Stack>
  ),
}

/**
 * Justify Options - Different justification alignments
 */
export const JustifyOptions: Story = {
  render: () => (
    <Stack spacing="lg">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Start (default)</p>
        <Stack direction="horizontal" justify="start" className="bg-white/5 rounded-lg p-4">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">Center</p>
        <Stack direction="horizontal" justify="center" className="bg-white/5 rounded-lg p-4">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">End</p>
        <Stack direction="horizontal" justify="end" className="bg-white/5 rounded-lg p-4">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">Between</p>
        <Stack direction="horizontal" justify="between" className="bg-white/5 rounded-lg p-4">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">Around</p>
        <Stack direction="horizontal" justify="around" className="bg-white/5 rounded-lg p-4">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-2">Evenly</p>
        <Stack direction="horizontal" justify="evenly" className="bg-white/5 rounded-lg p-4">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
    </Stack>
  ),
}

/**
 * Button Group - Common use case for horizontal stacks
 */
export const ButtonGroup: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="sm">
      <Button variant="default">Save</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="ghost">Delete</Button>
    </Stack>
  ),
}

/**
 * Form Layout - Common use case for vertical stacks
 */
export const FormLayout: Story = {
  render: () => (
    <Stack spacing="lg" className="w-[350px]">
      <div>
        <label className="text-sm font-medium mb-2 block">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      
      <div>
        <label className="text-sm font-medium mb-2 block">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      
      <Stack direction="horizontal" justify="between" align="center">
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" />
          Remember me
        </label>
        <Button>Sign In</Button>
      </Stack>
    </Stack>
  ),
}

/**
 * Card Content - Using stack inside cards
 */
export const CardContent: Story = {
  render: () => (
    <Card className="w-[350px] p-6">
      <Stack spacing="lg">
        <Stack spacing="sm">
          <h3 className="text-xl font-medium">GPT-4 Turbo</h3>
          <p className="text-sm text-muted-foreground">
            Most capable model with 128K context window
          </p>
        </Stack>
        
        <Stack direction="horizontal" spacing="sm">
          <Badge variant="success">Active</Badge>
          <Badge variant="outline">EU Region</Badge>
        </Stack>
        
        <div className="h-px bg-[hsl(var(--border))]" />
        
        <Stack spacing="sm">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Requests</span>
            <span className="font-medium">1,234</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Latency</span>
            <span className="font-medium">234ms</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Success Rate</span>
            <span className="font-medium">99.9%</span>
          </div>
        </Stack>
        
        <Button variant="outline" className="w-full">View Details</Button>
      </Stack>
    </Card>
  ),
}

/**
 * Navigation - Horizontal navigation items
 */
export const Navigation: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="sm" align="center">
      <Button variant="ghost">Dashboard</Button>
      <Button variant="ghost">Models</Button>
      <Button variant="ghost">Deployments</Button>
      <Button variant="ghost">Analytics</Button>
      <div className="h-6 w-px bg-[hsl(var(--border))]" />
      <Button variant="ghost">Settings</Button>
    </Stack>
  ),
}

/**
 * Nested Stacks - Creating 2D layouts
 */
export const NestedStacks: Story = {
  render: () => (
    <Stack spacing="lg" className="w-[600px]">
      <Stack direction="horizontal" justify="between" align="center">
        <h2 className="text-xl font-medium">AI Models</h2>
        <Button variant="default">Deploy New</Button>
      </Stack>
      
      <Stack spacing="md">
        {Array.from({ length: 3 }).map((_, i) => (
          <Stack key={i} direction="horizontal" justify="between" align="center" className="p-4 bg-white/5 rounded-lg">
            <Stack spacing="xs">
              <p className="font-medium">Model {i + 1}</p>
              <p className="text-sm text-muted-foreground">Last deployed 2 days ago</p>
            </Stack>
            
            <Stack direction="horizontal" spacing="sm" align="center">
              <Badge variant="success">Active</Badge>
              <Button variant="ghost" size="sm">Configure</Button>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  ),
}
