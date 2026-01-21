# Berget Design System

A world-class, Scandinavian-inspired design system built with React, TypeScript, and Tailwind CSS.

## Philosophy

Berget Design System embodies Scandinavian design principles with a modern twist:

- **Minimalism** - Clean, uncluttered interfaces that breathe
- **Functionality** - Every element serves a purpose
- **Natural Colors** - Earth tones, moss greens, stone grays inspired by Nordic landscapes
- **Quality** - Meticulous attention to detail and craftsmanship
- **Consistency** - One visual language across all touchpoints
- **Timelessness** - Design that ages gracefully

## Core Principles

### 1. **Composition Over Duplication**
Components build upon each other. `Card` extends `Panel`. `FeatureCard` extends `Panel`. One source of truth for styling.

### 2. **Minimal API Surface**
Fewer props = easier to use. Only expose what's truly necessary.

### 3. **Semantic Naming**
- **Primitives:** Semantic names (`default`, `primary`, `destructive`)
- **Blocks:** Brand color names (`moss`, `sage`, `earth`, `stone`)

### 4. **Documentation is Code**
Every component is thoroughly documented with examples and guidance.

## Structure

```
design-system/
├── tokens/          # Design tokens (colors, typography, spacing)
├── primitives/      # Base components (Button, Panel, Input, Badge, etc.)
├── layout/          # Layout & spacing (Container, Stack)
├── blocks/          # Marketing blocks (FeatureCard, HeroBlock, SectionHeader)
├── effects/         # Visual effects (backgrounds, animations)
└── templates/       # Complete templates (EmailTemplate)
```

### Component Categories

#### **Primitives** - Foundation
Basic building blocks that everything else builds upon.

- `Panel` - Base for all card-like surfaces ⭐ **NEW**
- `Card` - Structured content containers (extends Panel)
- `Button` - Actions and interactions
- `Badge` - Status indicators and labels
- `Alert` - Important messages and notifications
- `Input` - Text input fields
- `Logo` - Official Berget branding

> 💡 **New to the system?** Read [COMPONENT-GUIDE.md](./COMPONENT-GUIDE.md) to understand when to use Panel vs Card vs FeatureCard.

#### **Layout** - Structure
Components for page structure and spacing.

- `Container` - Responsive page width constraints
- `Stack` - Consistent spacing between elements

#### **Blocks** - Compositions
Opinionated compositions for common marketing patterns.

- `FeatureCard` - Feature showcases (extends Panel)
- `HeroBlock` - Full-width hero sections
- `SectionHeader` - Consistent section headers

#### **Effects** - Visual Enhancement
Background effects and visual flourishes.

- `GridBackground` - Subtle grid pattern
- `GradientBackground` - Animated gradients
- `NetworkBackground` - Particle network animation

#### **Templates** - Complete Layouts
Fully structured templates for specific use cases.

- `EmailTemplate` - Transactional and marketing emails

## Quick Start

### Installation

```bash
npm install
```

### Import Components

```tsx
// Primitives
import { Button, Panel, Card, Badge, Alert, Input } from '@/design-system/primitives'

// Layout
import { Container, Stack } from '@/design-system/layout'

// Blocks
import { FeatureCard, HeroBlock, SectionHeader } from '@/design-system/blocks'

// Effects
import { GridBackground, GradientBackground } from '@/design-system/effects'
```

### Use Design Tokens

```tsx
// Import tokens CSS
import '@/design-system/tokens'

// Use CSS variables
<div className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
  Content
</div>
```

## Design Tokens

### Colors

**Brand Colors:**
- `--berget-stone` (#E5DDD5) - Primary brand color
- `--berget-moss` (#52B788) - Nature accent, forest green
- `--berget-sage` (#74C69D) - Secondary green, soft sage
- `--berget-earth` (#2D6A4F) - Dark earth tone

**Semantic Colors:**
- Dark theme (default): `#0A0A0A` background (console-inspired deep black)
- Semantic tokens: `--primary`, `--secondary`, `--accent`, `--destructive`

### Typography

**Fonts:**
- **Headings:** Ovo (serif) - Classic, readable serif
- **Body:** DM Sans (sans-serif) - Modern, clean sans-serif

**Features:**
- OpenType features enabled (ss01, ss02, cv01, cv02)
- Optimized for screen rendering
- Consistent letter-spacing: -0.04em for headings

### Animations

- `bokeh-float` - Gentle floating effect
- `fadeIn` - Smooth fade and scale entrance
- `slideUp` - Slide up entrance
- `shimmer` - Loading shimmer effect
- `gradient-flow` - Flowing gradient animation

All animations: 150-500ms duration for responsiveness.

## Usage Examples

### Building a Feature Section

```tsx
import { Container, Stack } from '@/design-system/layout'
import { SectionHeader } from '@/design-system/blocks'
import { FeatureCard } from '@/design-system/blocks'
import { Cloud, Zap, Shield } from 'lucide-react'

function FeaturesSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          title="Why Choose Berget"
          description="European AI infrastructure built for privacy and performance"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={Cloud}
            title="Serverless"
            description="Deploy without infrastructure"
            features={["Auto-scaling", "Pay per use", "EU regions"]}
            variant="moss"
          />
          <FeatureCard
            icon={Zap}
            title="Fast"
            description="Sub-100ms inference"
            features={["Edge locations", "Optimized", "CDN"]}
            variant="sage"
          />
          <FeatureCard
            icon={Shield}
            title="Secure"
            description="GDPR compliant"
            features={["EU data", "Encrypted", "Audited"]}
            variant="earth"
          />
        </div>
      </Container>
    </section>
  )
}
```

### Creating a Landing Page

```tsx
import { HeroBlock, SectionHeader } from '@/design-system/blocks'
import { Button } from '@/design-system/primitives'
import { Shield } from 'lucide-react'

function LandingPage() {
  return (
    <main>
      <HeroBlock
        taglineIcon={Shield}
        tagline="Built for Europe"
        title="AI That Respects Your Data"
        description="The only AI platform designed for European organizations"
        variant="moss"
        actions={
          <>
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Book Demo</Button>
          </>
        }
      />
      
      {/* More sections... */}
    </main>
  )
}
```

### Using Panel as a Base

```tsx
import { Panel } from '@/design-system/primitives'

// Simple panel
function SimplePanel() {
  return (
    <Panel>
      Content
    </Panel>
  )
}

// Custom card extending Panel
function CustomCard({ title, children }) {
  return (
    <Panel variant="elevated" padding="lg">
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      {children}
    </Panel>
  )
}
```

## Development

### Run Storybook

```bash
npm run storybook
```

Visit `http://localhost:6006` to browse components.

### Create a New Component

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for detailed guidelines.

Quick template:

```tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const componentVariants = cva('base-classes', {
  variants: { /* ... */ },
  defaultVariants: { /* ... */ },
})

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  children: React.ReactNode
}

/**
 * Component Name
 * 
 * Description here.
 * 
 * @example
 * ```tsx
 * <Component>Content</Component>
 * ```
 */
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(componentVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  )
)
Component.displayName = 'Component'

export { Component, componentVariants }
```

## Best Practices

### ✅ Do

- Build on existing primitives (especially Panel)
- Use semantic variant names for primitives
- Use color names for blocks
- Include comprehensive JSDoc
- Create Storybook stories with real-world examples
- Test accessibility (keyboard, screen readers)
- Use design tokens, not hardcoded colors

### ❌ Don't

- Duplicate styling from existing components
- Mix semantic and color variant names
- Skip documentation
- Use random colors outside the palette
- Create overlapping components

## Accessibility

All components follow WAI-ARIA guidelines:

- Semantic HTML elements
- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- WCAG 2.1 AA color contrast

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Grid and Flexbox
- CSS Custom Properties
- No IE11 support

## Documentation

### For Contributors

- **[CONTRIBUTING.md](../../CONTRIBUTING.md)** - Complete contribution guide
  - Component structure and templates
  - Naming conventions
  - Documentation standards
  - Border system guidelines
  - Composition patterns
  - Testing checklist

### For Developers

- **[COMPONENT-GUIDE.md](./COMPONENT-GUIDE.md)** - Component selection guide
  - Panel vs Card vs FeatureCard explained
  - Decision trees and visual guides
  - Real-world examples
  - Common mistakes to avoid
  - Pro tips and best practices

- **[ICON-GUIDE.md](./ICON-GUIDE.md)** - Icon system guide
  - Philosophy: Icons complement, don't compete
  - Standard icon mappings (canonical choices)
  - Color and style rules
  - Sizing guidelines
  - Usage patterns and examples
  - Common mistakes to avoid

## License

MIT

---

**Built with ❤️ for European AI infrastructure**
