import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const panelVariants = cva(
  'relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
  {
    variants: {
      variant: {
        default: 'bg-[hsl(var(--card))]/40 backdrop-blur-xl border border-[hsl(var(--border))] panel-glow hover:panel-glow-hover hover:border-[hsl(var(--border-hover))] hover:-translate-y-0.5',
        glass: 'bg-[hsl(var(--card))]/40 liquid-glass border border-[hsl(var(--border))] panel-glow hover:panel-glow-hover hover:border-[hsl(var(--border-hover))]',
        elevated: 'bg-[hsl(var(--card))]/40 backdrop-blur-xl border border-[hsl(var(--border))] shadow-lg panel-glow hover:panel-glow-hover hover:shadow-xl hover:-translate-y-1 hover:border-[hsl(var(--border-hover))]',
        flat: 'bg-[hsl(var(--card))]/40 backdrop-blur-xl',
        outline: 'bg-transparent border border-[hsl(var(--border))] hover:border-[hsl(var(--border-hover))]',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      radius: {
        default: 'rounded-2xl',
        lg: 'rounded-3xl',
        xl: 'rounded-[2rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      radius: 'default',
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
  /**
   * Enable subtle bokeh effect (organic floating lights)
   * @default true
   */
  bokeh?: boolean
}

/**
 * Panel Component
 * 
 * Base container component for all card-like surfaces.
 * Provides consistent styling for containers, cards, and panels.
 * 
 * **Variants:**
 * - `default` - Console-style panel with backdrop blur and hover effect
 * - `glass` - Liquid Glass morphism with refraction effect (Chromium) / backdrop blur (fallback)
 * - `elevated` - Shadow with hover lift effect
 * - `flat` - No border, subtle background with blur
 * - `outline` - Transparent with border only
 * 
 * **Padding:**
 * - `none` - No padding (for custom layouts)
 * - `sm` - Small padding (16px)
 * - `md` - Medium padding (24px, default)
 * - `lg` - Large padding (32px)
 * 
 * **Radius:**
 * - `default` - Standard rounded corners (32px)
 * - `lg` - Large rounded corners (48px)
 * - `xl` - Extra large rounded corners (64px)
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
  ({ className, variant, padding, radius, bokeh = true, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(panelVariants({ variant, padding, radius }), className)}
      {...props}
    >
      {bokeh && (
        <div className="bokeh">
          {/* Top-left shimmer - creates the glow on border */}
          <div
            className="bokeh-circle"
            style={{
              width: '150px',
              height: '150px',
              top: '-20px',
              left: '-20px',
              '--color': 'rgba(229, 221, 213, 0.12)',
              animationDelay: '0s',
            } as React.CSSProperties}
          />
          {/* Center-left subtle glow */}
          <div
            className="bokeh-circle"
            style={{
              width: '120px',
              height: '120px',
              top: '40%',
              left: '10%',
              '--color': 'rgba(229, 221, 213, 0.06)',
              animationDelay: '5s',
            } as React.CSSProperties}
          />
          {/* Bottom-right accent */}
          <div
            className="bokeh-circle"
            style={{
              width: '100px',
              height: '100px',
              bottom: '10%',
              right: '15%',
              '--color': 'rgba(82, 183, 136, 0.08)',
              animationDelay: '10s',
            } as React.CSSProperties}
          />
        </div>
      )}
      {children}
    </div>
  )
)
Panel.displayName = 'Panel'

export { Panel, panelVariants }
