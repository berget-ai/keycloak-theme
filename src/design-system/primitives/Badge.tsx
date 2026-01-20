import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        accent:
          'border-transparent bg-accent text-accent-foreground hover:bg-accent/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground border-border',
        success:
          'border-transparent bg-green-500/10 text-green-500 border-green-500/20',
        warning:
          'border-transparent bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
        info:
          'border-transparent bg-blue-500/10 text-blue-500 border-blue-500/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Badge Component
 * 
 * Small status indicators and labels.
 * 
 * **Variants:**
 * - `default` - Primary Berget Stone badge
 * - `secondary` - Moss green badge
 * - `accent` - Sage green badge
 * - `destructive` - Error/danger badge
 * - `outline` - Outlined badge
 * - `success` - Success/positive badge
 * - `warning` - Warning/caution badge
 * - `info` - Informational badge
 * 
 * **Use Cases:**
 * - Status indicators (Active, Pending, Failed)
 * - Tags and labels
 * - Feature flags (New, Beta, Premium)
 * - Notifications counts
 * - Category labels
 * 
 * @example
 * ```tsx
 * <Badge>Default</Badge>
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning">Beta</Badge>
 * <Badge variant="destructive">Error</Badge>
 * ```
 */
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
