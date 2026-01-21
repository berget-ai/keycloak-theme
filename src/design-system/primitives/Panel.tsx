import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const panelVariants = cva(
  'rounded-2xl transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-[hsl(var(--card))] border border-[hsl(var(--border))]',
        glass: 'bg-[hsl(var(--card))]/40 liquid-glass border border-[hsl(var(--border))]',
        elevated: 'bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-lg hover:shadow-xl hover:-translate-y-1',
        flat: 'bg-[hsl(var(--card))]',
        outline: 'bg-transparent border border-[hsl(var(--border))]',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
)

export interface PanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof panelVariants> {
  /**
   * Content to render inside the panel
   */
  children: React.ReactNode
}

/**
 * Panel Component
 * 
 * Base container component for all card-like surfaces.
 * Provides consistent styling for containers, cards, and panels.
 * 
 * **Variants:**
 * - `default` - Standard panel with border
 * - `glass` - Liquid Glass morphism with refraction effect (Chromium) / backdrop blur (fallback)
 * - `elevated` - Shadow with hover lift effect
 * - `flat` - No border, subtle background
 * - `outline` - Transparent with border only
 * 
 * **Padding:**
 * - `none` - No padding (for custom layouts)
 * - `sm` - Small padding (16px)
 * - `md` - Medium padding (24px, default)
 * - `lg` - Large padding (32px)
 * 
 * **Border System:**
 * Panel uses semantic border tokens from the design system:
 * - `--border` - Default subtle border
 * - Automatically adapts to light/dark theme
 * - Consistent across all panel-based components
 * 
 * **Design System Role:**
 * Panel is the foundational component for all surfaces. Other components
 * like Card, FeatureCard, and custom containers should build upon Panel
 * for consistency.
 * 
 * @example
 * ```tsx
 * // Basic panel
 * <Panel>Content</Panel>
 * 
 * // Glass effect with custom padding
 * <Panel variant="glass" padding="lg">
 *   Content with glass morphism
 * </Panel>
 * 
 * // Elevated card with hover effect
 * <Panel variant="elevated">
 *   Interactive content
 * </Panel>
 * ```
 */
const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ className, variant, padding, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(panelVariants({ variant, padding }), className)}
      {...props}
    >
      {children}
    </div>
  )
)
Panel.displayName = 'Panel'

export { Panel, panelVariants }
