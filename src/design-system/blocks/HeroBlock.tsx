import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { LucideIcon } from 'lucide-react'

const heroBlockVariants = cva(
  'relative overflow-hidden min-h-[70vh] flex items-center',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-b from-background to-background/50',
        moss: 'bg-gradient-to-b from-[#2D6A4F]/30 via-background to-background',
        gradient: 'bg-gradient-to-br from-[#2D6A4F]/20 via-background to-[#40916C]/10',
      },
      withGrid: {
        true: '[&>div:first-child]:bg-grid-white/5 [&>div:first-child]:bg-[size:32px_32px]',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      withGrid: true,
    },
  }
)

export interface HeroBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroBlockVariants> {
  /**
   * Optional icon for the tagline badge
   */
  taglineIcon?: LucideIcon
  /**
   * Tagline text (appears in badge)
   */
  tagline?: string
  /**
   * Main hero title
   */
  title: string
  /**
   * Hero description
   */
  description: string
  /**
   * Call-to-action buttons
   */
  actions?: React.ReactNode
}

/**
 * Hero Block Component
 * 
 * Full-width hero section with optional grid background, tagline, title, description, and CTAs.
 * Based on the pattern from why-berget and other landing pages.
 * 
 * **Variants:**
 * - `default` - Simple gradient
 * - `moss` - Green gradient overlay
 * - `gradient` - Diagonal gradient
 * 
 * **Features:**
 * - Optional grid background
 * - Tagline badge with optional icon
 * - Responsive sizing
 * - CTA button slots
 * 
 * **Use Cases:**
 * - Page heroes
 * - Landing page intros
 * - Feature announcements
 * - Product showcases
 * 
 * @example
 * ```tsx
 * <HeroBlock
 *   tagline="Built for Europe"
 *   taglineIcon={Shield}
 *   title="European AI Infrastructure"
 *   description="Deploy and scale AI models with data residency in Europe"
 *   variant="moss"
 *   actions={
 *     <>
 *       <Button size="lg">Get Started</Button>
 *       <Button size="lg" variant="outline">Learn More</Button>
 *     </>
 *   }
 * />
 * ```
 */
const HeroBlock = React.forwardRef<HTMLDivElement, HeroBlockProps>(
  (
    {
      className,
      variant,
      withGrid,
      taglineIcon: TaglineIcon,
      tagline,
      title,
      description,
      actions,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(heroBlockVariants({ variant, withGrid }), className)}
        {...props}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {withGrid && (
            <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px]" />
          )}
          {variant === 'moss' && (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,106,79,0.15)_0%,transparent_70%)]" />
          )}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {tagline && (
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#40916C]/15 text-[#52B788] mb-6">
                {TaglineIcon && <TaglineIcon className="w-4 h-4 mr-2" />}
                <span className="text-sm font-medium">{tagline}</span>
              </div>
            )}

            <h1 className="text-5xl font-medium mb-6 leading-tight">{title}</h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {description}
            </p>

            {actions && (
              <div className="flex flex-wrap gap-4 justify-center">{actions}</div>
            )}
          </div>
        </div>
      </div>
    )
  }
)
HeroBlock.displayName = 'HeroBlock'

export { HeroBlock, heroBlockVariants }
