import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { Check, LucideIcon } from 'lucide-react'

const featureCardVariants = cva(
  'p-6 rounded-xl border transition-colors group',
  {
    variants: {
      variant: {
        default:
          'bg-white/[0.02] border-white/10 hover:bg-white/[0.04]',
        moss:
          'bg-[#52B788]/5 border-[#74C69D]/20 hover:bg-[#52B788]/10',
        sage:
          'bg-[#74C69D]/5 border-[#74C69D]/20 hover:bg-[#74C69D]/10',
        earth:
          'bg-[#2D6A4F]/5 border-[#40916C]/20 hover:bg-[#2D6A4F]/10',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface FeatureCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureCardVariants> {
  /**
   * Icon component from lucide-react
   */
  icon?: LucideIcon
  /**
   * Icon color
   */
  iconColor?: string
  /**
   * Card title
   */
  title: string
  /**
   * Card description
   */
  description?: string
  /**
   * List of features/items
   */
  features?: string[]
  /**
   * Show checkmarks for features
   */
  showCheckmarks?: boolean
}

/**
 * Feature Card Component
 * 
 * Reusable card for displaying features with icon, title, description, and feature list.
 * Based on the pattern from products/why-berget pages.
 * 
 * **Variants:**
 * - `default` - Subtle white background
 * - `moss` - Moss green tint
 * - `sage` - Sage green tint
 * - `earth` - Earth tone tint
 * 
 * **Use Cases:**
 * - Product feature grids
 * - Benefits sections
 * - Service offerings
 * - Capability showcases
 * 
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={Cloud}
 *   iconColor="text-[#52B788]"
 *   title="Serverless Inference"
 *   description="Deploy AI models without managing infrastructure"
 *   features={["Auto-scaling", "Pay per use", "EU regions"]}
 *   variant="moss"
 * />
 * ```
 */
const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      className,
      variant,
      icon: Icon,
      iconColor = 'text-[#52B788]',
      title,
      description,
      features,
      showCheckmarks = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(featureCardVariants({ variant }), className)}
        {...props}
      >
        {Icon && (
          <div className="mb-4">
            <Icon className={cn('w-8 h-8', iconColor)} />
          </div>
        )}

        <h3 className="text-xl font-medium mb-3">{title}</h3>

        {description && (
          <p className="text-white/60 mb-4">{description}</p>
        )}

        {features && features.length > 0 && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                {showCheckmarks && (
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                )}
                <span className="text-sm text-white/80 flex-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
)
FeatureCard.displayName = 'FeatureCard'

export { FeatureCard, featureCardVariants }
