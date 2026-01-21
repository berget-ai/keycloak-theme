import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Badge } from './Badge'

const meta = {
  title: 'Design System/Primitives/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Input component for text entry in forms and user interfaces.

**Design Principles:**
- Clean and minimal appearance
- Clear focus states
- Consistent sizing and spacing
- Dark theme optimized

**When to Use:**
- Single-line text entry
- Email addresses
- Passwords
- Numbers
- Search fields
- Any form input

**Best Practices:**
- Always pair with a visible label
- Use placeholder text for hints, not as labels
- Provide clear validation feedback
- Consider input type for mobile keyboards
- Use appropriate autocomplete attributes

**Accessibility:**
- Use semantic HTML input types
- Include aria-label or associated label element
- Provide error messages with aria-describedby
- Ensure keyboard navigation works
- Maintain sufficient color contrast
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default text input
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

/**
 * Email input with appropriate type
 */
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'you@example.com',
  },
}

/**
 * Password input
 */
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
}

/**
 * Search input
 */
export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
}

/**
 * Number input
 */
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 100,
  },
}

/**
 * Disabled input
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    value: 'Cannot edit this',
  },
}

/**
 * With Label
 * Best practice: always use labels with inputs
 */
export const WithLabel: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <label htmlFor="email-input" className="text-sm font-medium text-foreground">
        Email Address
      </label>
      <Input id="email-input" type="email" placeholder="you@example.com" />
    </div>
  ),
}

/**
 * With Helper Text
 * Provide additional context or instructions
 */
export const WithHelperText: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <label htmlFor="username-input" className="text-sm font-medium text-foreground">
        Username
      </label>
      <Input id="username-input" type="text" placeholder="johndoe" />
      <p className="text-sm text-muted-foreground">
        Choose a unique username. Only letters, numbers, and underscores.
      </p>
    </div>
  ),
}

/**
 * With Error State
 * Show validation errors clearly
 */
export const WithError: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <label htmlFor="error-input" className="text-sm font-medium text-foreground">
        Email Address
      </label>
      <Input
        id="error-input"
        type="email"
        placeholder="you@example.com"
        className="border-destructive focus-visible:ring-destructive"
        aria-invalid="true"
        aria-describedby="error-message"
      />
      <p id="error-message" className="text-sm text-destructive">
        Please enter a valid email address.
      </p>
    </div>
  ),
}

/**
 * With Success State
 * Show successful validation
 */
export const WithSuccess: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <label htmlFor="success-input" className="text-sm font-medium text-foreground">
        Email Address
      </label>
      <Input
        id="success-input"
        type="email"
        value="user@example.com"
        className="border-[hsl(var(--border-success))] focus-visible:ring-[hsl(var(--success))]"
      />
      <p className="text-sm text-[hsl(var(--success))]">
        ✓ Email address is valid.
      </p>
    </div>
  ),
}

/**
 * With Badge Label
 * Combine with badges for additional context
 */
export const WithBadgeLabel: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <div className="flex items-center gap-2">
        <label htmlFor="api-key-input" className="text-sm font-medium text-foreground">
          API Key
        </label>
        <Badge variant="warning">Required</Badge>
      </div>
      <Input id="api-key-input" type="password" placeholder="sk_live_..." />
    </div>
  ),
}

/**
 * Login Form
 * Common use case: authentication forms
 */
export const LoginForm: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div className="space-y-2">
        <label htmlFor="login-email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <Input id="login-email" type="email" placeholder="you@example.com" />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="login-password" className="text-sm font-medium text-foreground">
          Password
        </label>
        <Input id="login-password" type="password" placeholder="••••••••" />
      </div>
    </div>
  ),
}

/**
 * Registration Form
 * Common use case: user registration
 */
export const RegistrationForm: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div className="space-y-2">
        <label htmlFor="reg-name" className="text-sm font-medium text-foreground">
          Full Name
        </label>
        <Input id="reg-name" type="text" placeholder="John Doe" />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="reg-email" className="text-sm font-medium text-foreground">
          Email Address
        </label>
        <Input id="reg-email" type="email" placeholder="you@example.com" />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="reg-company" className="text-sm font-medium text-foreground">
          Company
        </label>
        <Input id="reg-company" type="text" placeholder="Acme Inc." />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="reg-password" className="text-sm font-medium text-foreground">
          Password
        </label>
        <Input id="reg-password" type="password" placeholder="••••••••" />
        <p className="text-sm text-muted-foreground">
          At least 8 characters with numbers and symbols.
        </p>
      </div>
    </div>
  ),
}

/**
 * API Configuration
 * Common use case: technical settings
 */
export const APIConfiguration: Story = {
  render: () => (
    <div className="w-[450px] space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="api-endpoint" className="text-sm font-medium text-foreground">
            API Endpoint
          </label>
          <Badge variant="outline">Optional</Badge>
        </div>
        <Input
          id="api-endpoint"
          type="url"
          placeholder="https://api.berget.ai/v1"
          defaultValue="https://api.berget.ai/v1"
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="api-key-config" className="text-sm font-medium text-foreground">
            API Key
          </label>
          <Badge variant="destructive">Required</Badge>
        </div>
        <Input
          id="api-key-config"
          type="password"
          placeholder="sk_live_..."
        />
        <p className="text-sm text-muted-foreground">
          Find your API key in the dashboard under Settings → API Keys.
        </p>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="api-timeout" className="text-sm font-medium text-foreground">
          Timeout (seconds)
        </label>
        <Input
          id="api-timeout"
          type="number"
          placeholder="30"
          defaultValue="30"
          min="1"
          max="300"
        />
      </div>
    </div>
  ),
}

/**
 * Search Bar
 * Common use case: search functionality
 */
export const SearchBar: Story = {
  render: () => (
    <div className="w-[500px]">
      <Input
        type="search"
        placeholder="Search models, documentation, or deployments..."
        className="w-full"
      />
    </div>
  ),
}

/**
 * Input Sizes
 * Different input widths for various contexts
 */
export const InputSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Small (w-[200px])</label>
        <Input placeholder="Small input" className="w-[200px]" />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Medium (w-[350px])</label>
        <Input placeholder="Medium input" className="w-[350px]" />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Large (w-[500px])</label>
        <Input placeholder="Large input" className="w-[500px]" />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Full Width (w-full)</label>
        <Input placeholder="Full width input" className="w-full" />
      </div>
    </div>
  ),
}
