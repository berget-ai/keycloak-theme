import * as React from 'react'
import { cn } from '../../utils/cn'

export interface GradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Gradient variant
   * - berget: Green gradient (Berget brand colors)
   * - warm: Warm earth tones
   * - cool: Cool blue-green tones
   * - subtle: Very subtle dark gradient
   * @default "berget"
   */
  variant?: 'berget' | 'warm' | 'cool' | 'subtle'
  /**
   * Children to render on top of the gradient
   */
  children?: React.ReactNode
}

const gradientVariants = {
  berget: 'from-[#2D6A4F] via-[#40916C] to-[#52B788]',
  warm: 'from-[#342F2D] via-[#52433D] to-[#6B5442]',
  cool: 'from-[#1A3A3A] via-[#2D5555] to-[#40706F]',
  subtle: 'from-[#0A0A0A] via-[#121212] to-[#1A1A1A]',
}

/**
 * Gradient Background Component
 * 
 * Full-screen gradient background for hero sections and landing pages.
 * Creates visual impact and draws attention.
 * 
 * **Use Cases:**
 * - Hero sections
 * - Landing pages
 * - Marketing pages
 * - Feature showcases
 * 
 * **Best For:**
 * - First impressions
 * - Call-to-action sections
 * - Brand storytelling
 * 
 * **Combines Well With:**
 * - NetworkBackground (for tech/enterprise feel)
 * - Large typography
 * - CTAs and feature highlights
 * 
 * @example
 * ```tsx
 * <GradientBackground variant="berget">
 *   <Hero />
 * </GradientBackground>
 * 
 * <GradientBackground variant="subtle">
 *   <PricingSection />
 * </GradientBackground>
 * ```
 */
export const GradientBackground = React.forwardRef<HTMLDivElement, GradientBackgroundProps>(
  ({ variant = 'berget', children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative min-h-screen overflow-hidden bg-gradient-to-br',
          gradientVariants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GradientBackground.displayName = 'GradientBackground'
