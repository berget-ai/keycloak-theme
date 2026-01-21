import * as React from 'react'
import { Check } from 'lucide-react'
import { cn } from '../../utils/cn'
import { Button } from '../primitives/Button'

export interface PricingTier {
  /**
   * Unique identifier for the plan
   */
  id: string
  /**
   * Display name of the plan
   */
  name: string
  /**
   * Short description of the plan
   */
  description: string
  /**
   * Price display (e.g., "Free", "$29/month", "Contact Sales")
   */
  price: string
  /**
   * List of features included in this plan
   */
  features: string[]
  /**
   * Whether this plan is recommended/highlighted
   */
  recommended?: boolean
  /**
   * CTA button text
   */
  ctaText?: string
  /**
   * CTA button variant
   */
  ctaVariant?: 'default' | 'primary' | 'secondary' | 'outline'
  /**
   * Optional callback when CTA is clicked
   */
  onCtaClick?: () => void
}

export interface PricingCardsProps {
  /**
   * Array of pricing tiers to display
   */
  tiers: PricingTier[]
  /**
   * Number of columns in the grid
   * @default 3
   */
  columns?: 2 | 3 | 4
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Pricing Cards Component
 * 
 * Displays pricing tiers in a responsive grid layout.
 * Perfect for SaaS pricing pages, subscription plans, and feature comparisons.
 * 
 * **Features:**
 * - Responsive grid (1 col mobile → 2/3/4 cols desktop)
 * - Highlighted "Recommended" plan
 * - Feature lists with checkmarks
 * - Customizable CTA buttons
 * - Glass morphism cards
 * 
 * **Use Cases:**
 * - SaaS pricing pages
 * - Subscription plan selection
 * - Product tier comparison
 * - Service package displays
 * 
 * @example
 * ```tsx
 * const tiers = [
 *   {
 *     id: 'free',
 *     name: 'Free',
 *     description: 'Perfect for trying out',
 *     price: '$0/month',
 *     features: ['Feature 1', 'Feature 2'],
 *     ctaText: 'Get Started',
 *   },
 *   {
 *     id: 'pro',
 *     name: 'Professional',
 *     description: 'For growing teams',
 *     price: '$29/month',
 *     features: ['Everything in Free', 'Feature 3', 'Feature 4'],
 *     recommended: true,
 *     ctaText: 'Start Trial',
 *   },
 * ]
 * 
 * <PricingCards tiers={tiers} columns={3} />
 * ```
 */
export const PricingCards = React.forwardRef<HTMLDivElement, PricingCardsProps>(
  ({ tiers, columns = 3, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'grid gap-6 md:gap-8',
          // Explicit classes so Tailwind compiles them
          columns === 2 && 'grid-cols-1 md:grid-cols-2',
          columns === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          columns === 4 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
          className
        )}
      >
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={cn(
              'relative rounded-2xl border backdrop-blur-xl p-6 md:p-8 transition-all duration-300',
              tier.recommended
                ? 'border-[hsl(var(--secondary))] bg-[hsl(var(--secondary))]/5 shadow-lg shadow-[hsl(var(--secondary))]/10 scale-105'
                : 'border-[hsl(var(--border))] bg-white/5 hover:border-[hsl(var(--border-hover))] hover:bg-white/10'
            )}
          >
            {tier.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] text-sm px-4 py-1.5 rounded-full font-medium shadow-lg">
                Recommended
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-medium mb-2">
                {tier.name}
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                {tier.description}
              </p>
              <div className="text-3xl md:text-4xl font-bold">
                {tier.price}
              </div>
            </div>

            <Button
              className="w-full mb-6"
              variant={tier.ctaVariant || (tier.recommended ? 'primary' : 'default')}
              onClick={tier.onCtaClick}
            >
              {tier.ctaText || 'Get Started'}
            </Button>

            <div className="space-y-3">
              {tier.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[hsl(var(--secondary))] shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
)
PricingCards.displayName = 'PricingCards'
