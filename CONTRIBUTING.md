# Contributing to Berget Design System

Thank you for contributing to Berget Design System! This guide will help you create world-class, consistent components.

## Philosophy

Our design system is built on these core principles:

### 1. **Consistency Above All**
Every component should feel like it belongs to the same family. Consistent patterns make the entire system stronger.

### 2. **Composition Over Duplication**
Build on existing components rather than recreating styling. If you need a panel-like surface, extend `Panel`.

### 3. **Minimal API Surface**
Fewer props = easier to use = better developer experience. Only expose what's truly needed.

### 4. **Documentation is Code**
Well-documented components are as important as well-written code. Every component must have clear, helpful documentation.

## Component Structure

### Directory Organization

```
design-system/
├── primitives/      # Base components (Button, Panel, Input, Badge, etc.)
├── layout/          # Layout & spacing (Container, Stack)
├── blocks/          # Composed marketing blocks (FeatureCard, HeroBlock)
├── effects/         # Visual effects (backgrounds, animations)
├── templates/       # Complete templates (EmailTemplate)
└── tokens/          # Design tokens (colors, typography, spacing)
```

> 💡 **Choosing the right component?** See [COMPONENT-GUIDE.md](src/design-system/COMPONENT-GUIDE.md) for detailed guidance on Panel vs Card vs FeatureCard.

### When to Create a New Component

#### Create a **Primitive** when:
- It's a fundamental UI element
- It will be reused across many contexts
- It has minimal dependencies
- Examples: Button, Input, Badge, Panel

#### Create a **Block** when:
- It combines primitives in an opinionated way
- It's used in specific marketing/content contexts  
- It represents a common pattern from the website
- Examples: FeatureCard, HeroBlock, SectionHeader

#### Create a **Template** when:
- It's a complete, self-contained layout
- It's used for specific outputs (emails, documents)
- Examples: EmailTemplate

## Component Template

### File Structure

Every component needs two files:
1. `Component.tsx` - The component implementation
2. `Component.stories.tsx` - Storybook documentation

### Component Implementation Template

```tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const componentVariants = cva(
  'base-classes-here',
  {
    variants: {
      variant: {
        default: 'default-classes',
        // Add more variants
      },
      size: {
        sm: 'small-classes',
        md: 'medium-classes',
        lg: 'large-classes',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  /**
   * Additional props with clear descriptions
   */
  children: React.ReactNode
}

/**
 * Component Name
 * 
 * One-line description of what this component does.
 * 
 * **Variants:**
 * - `default` - Description of default variant
 * - `primary` - Description of primary variant
 * 
 * **Sizes:**
 * - `sm` - Small size description
 * - `md` - Medium size (default)
 * - `lg` - Large size description
 * 
 * **Design System Role:**
 * Explain where this fits in the system and when to use it.
 * 
 * @example
 * ```tsx
 * <Component variant="default" size="md">
 *   Content
 * </Component>
 * ```
 */
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(componentVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </div>
  )
)
Component.displayName = 'Component'

export { Component, componentVariants }
```

## Naming Conventions

### Variant Naming

#### Primitives (Button, Badge, Alert, Input)
Use **semantic names** that describe the intent:
- `default` - Standard/primary appearance
- `primary` - Main call-to-action
- `secondary` - Less prominent action
- `outline` - Outlined style
- `ghost` - Minimal style
- `destructive` - Dangerous/delete actions
- `success` - Success states
- `warning` - Warning states
- `info` - Informational states

#### Blocks (FeatureCard, HeroBlock)
Use **color/theme names** from Berget palette:
- `default` - Standard appearance
- `moss` - Moss green (#52B788)
- `sage` - Sage green (#74C69D)
- `earth` - Earth tone (#2D6A4F)
- `stone` - Berget Stone (#E5DDD5)

**Rationale:** Primitives are used everywhere and need semantic meaning. Blocks are tied to Berget branding and can use our color names.

### File Naming

- **Components:** `PascalCase.tsx` (e.g., `Button.tsx`, `FeatureCard.tsx`)
- **Stories:** `PascalCase.stories.tsx` (e.g., `Button.stories.tsx`)
- **Utilities:** `camelCase.ts` (e.g., `cn.ts`)

## Documentation Standards

### JSDoc Format

Every component must have:

1. **One-line description** - What does this do?
2. **Detailed description** (optional) - When/how to use it
3. **Variants section** - List all variants with descriptions
4. **Sizes section** (if applicable) - List all sizes
5. **Design System Role** - Where does this fit? When to use it?
6. **Example code** - At least one clear example

### Example:

```tsx
/**
 * Button Component
 * 
 * Versatile button with multiple variants and sizes.
 * 
 * **Variants:**
 * - `default` - Primary Berget Stone button
 * - `primary` - Moss green button
 * 
 * **Sizes:**
 * - `sm` - Small (36px height)
 * - `default` - Medium (44px height)
 * 
 * **Design System Role:**
 * Button is the primary action component. Use for all clickable actions.
 * For links, use the `asChild` prop with your routing solution.
 * 
 * @example
 * ```tsx
 * <Button variant="primary">Click me</Button>
 * ```
 */
```

## Storybook Stories

### Story Structure

Each component needs these stories:

1. **Default** - The default configuration
2. **All Variants** - Show each variant
3. **All Sizes** (if applicable) - Show each size
4. **Real-world Examples** - 2-3 practical usage examples
5. **Composition Examples** (if applicable) - How it works with other components

### Story Template

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Component } from './Component'

const meta = {
  title: 'Design System/Category/Component',
  component: Component,
  parameters: {
    layout: 'centered', // or 'fullscreen'
    docs: {
      description: {
        component: `
Detailed component description here.

## When to Use
- List specific use cases
- Provide context

## Design Principles
- Explain design decisions
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary'],
    },
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Content',
  },
}

// Add more stories...
```

## Composition Patterns

### Extending Base Components

When creating a specialized component, extend existing primitives:

```tsx
// ✅ GOOD - Extends Panel
const FeatureCard = ({ icon, title, features, ...props }) => (
  <Panel variant="outline" {...props}>
    {icon && <Icon />}
    <h3>{title}</h3>
    <FeatureList features={features} />
  </Panel>
)

// ❌ BAD - Duplicates Panel styling
const FeatureCard = ({ icon, title, features, ...props }) => (
  <div className="rounded-2xl border p-6 bg-card">
    {/* ... */}
  </div>
)
```

### Composition with asChild

For components that need to wrap other elements (like links), use the `asChild` pattern:

```tsx
export interface ButtonProps {
  asChild?: boolean
  // other props...
}

const Button = ({ asChild, ...props }) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp {...props} />
}

// Usage:
<Button asChild>
  <Link to="/products">View Products</Link>
</Button>
```

## Testing Checklist

Before submitting a component:

- [ ] Component has TypeScript types
- [ ] Component uses `React.forwardRef`
- [ ] Component has JSDoc documentation
- [ ] All variants are documented
- [ ] Storybook stories are complete
- [ ] Stories show real-world examples
- [ ] Component builds on existing primitives (if applicable)
- [ ] Naming follows conventions
- [ ] Accessibility attributes are included
- [ ] Component compiles without TypeScript errors

## Icons

**Always follow the icon system.** See [ICON-GUIDE.md](src/design-system/ICON-GUIDE.md) for complete guidelines.

### Quick Rules

```tsx
// ✅ GOOD - Icon inherits text color
<div className="text-white">
  <Cloud className="w-5 h-5" />
  <span>Serverless</span>
</div>

// ✅ GOOD - Brand color in marketing context
<FeatureCard icon={Cloud} iconColor="text-[#52B788]" />

// ✅ GOOD - Semantic icon in alert
<Alert variant="success">
  <CheckCircle className="w-4 h-4" />  {/* Inherits green */}
</Alert>

// ❌ BAD - Random colors
<Cloud className="text-purple-500" />

// ❌ BAD - Backgrounds on icons
<div className="bg-blue-500 rounded-full p-2">
  <Cloud />
</div>
```

### Standard Icons (Always use these)

- Success: `CheckCircle`
- Error: `XCircle`
- Warning: `AlertTriangle`
- Info: `Info`
- Cloud/Serverless: `Cloud`
- Speed: `Zap`
- Security: `Shield`
- Close: `X`
- Add: `Plus`

See full list in [ICON-GUIDE.md](src/design-system/ICON-GUIDE.md).

---

## Color & Border Usage

### Colors

Use design tokens, not hardcoded colors:

```tsx
// ✅ GOOD - Uses design tokens
className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"

// ✅ ALSO GOOD - Uses Berget color names for blocks
className="bg-[#52B788]/5"

// ❌ BAD - Hardcoded random colors
className="bg-blue-500 text-white"
```

### Borders - Semantic System

**ALWAYS use semantic border tokens.** Never hardcode border colors.

#### Base Borders (for panels, cards, containers)

```tsx
// ✅ GOOD - Default border
className="border border-[hsl(var(--border))]"

// ✅ GOOD - Hover state
className="hover:border-[hsl(var(--border-hover))]"

// ✅ GOOD - Stronger border
className="border border-[hsl(var(--border-strong))]"

// ❌ BAD - Hardcoded
className="border border-white/10"  // Don't do this!
```

#### Themed Borders (for branded blocks)

Use themed borders for components with brand color variants:

```tsx
// ✅ GOOD - Moss variant
className="border-[hsl(var(--border-moss))]"

// ✅ GOOD - Sage variant
className="border-[hsl(var(--border-sage))]"

// ✅ GOOD - Earth variant
className="border-[hsl(var(--border-earth))]"

// ✅ GOOD - Stone variant
className="border-[hsl(var(--border-stone))]"

// ❌ BAD - Hardcoded green
className="border-[#74C69D]/20"  // Don't do this!
```

#### State Borders (for alerts, badges, status)

Use state borders for success/warning/error/info states:

```tsx
// ✅ GOOD - Success state
className="border-[hsl(var(--border-success))]"

// ✅ GOOD - Warning state
className="border-[hsl(var(--border-warning))]"

// ✅ GOOD - Error state
className="border-[hsl(var(--border-destructive))]"

// ✅ GOOD - Info state
className="border-[hsl(var(--border-info))]"

// ❌ BAD - Hardcoded colors
className="border-green-500/50"  // Don't do this!
```

#### Quick Reference

| Use Case | Token | Example |
|----------|-------|---------|
| Default panel | `--border` | `<Panel>` |
| Hover state | `--border-hover` | Interactive cards |
| Moss themed | `--border-moss` | `<FeatureCard variant="moss">` |
| Sage themed | `--border-sage` | `<FeatureCard variant="sage">` |
| Earth themed | `--border-earth` | `<FeatureCard variant="earth">` |
| Stone themed | `--border-stone` | `<FeatureCard variant="stone">` |
| Success message | `--border-success` | `<Alert variant="success">` |
| Warning message | `--border-warning` | `<Alert variant="warning">` |
| Error message | `--border-destructive` | `<Alert variant="destructive">` |
| Info message | `--border-info` | `<Alert variant="info">` |

**Benefits:**
- ✅ Automatic theme support (light/dark)
- ✅ Consistent across all components
- ✅ Easy to update globally
- ✅ Semantic and clear intent

## Accessibility Requirements

Every component must:

1. **Use semantic HTML** - `button` for buttons, `nav` for navigation, etc.
2. **Include ARIA attributes** - When semantic HTML isn't enough
3. **Support keyboard navigation** - Tab, Enter, Escape, arrows
4. **Have sufficient contrast** - Follow WCAG 2.1 AA guidelines
5. **Work with screen readers** - Test with VoiceOver/NVDA

## Git Commit Messages

Use conventional commits:

```bash
feat: add new Component
fix: resolve Component accessibility issue
refactor: simplify Component API
docs: update Component documentation
style: format Component code
```

## Questions?

If you're unsure about:
- Where a component should live
- What to name a variant
- How to structure documentation

Look at existing components like `Button`, `Panel`, or `FeatureCard` as references, or ask the team!

---

**Remember:** Consistency creates confidence. Every component should feel like it belongs to the Berget family.
