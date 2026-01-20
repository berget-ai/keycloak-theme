import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border-border',
        info: 'border-blue-500/50 bg-blue-500/10 text-blue-500 [&>svg]:text-blue-500',
        success: 'border-green-500/50 bg-green-500/10 text-green-500 [&>svg]:text-green-500',
        warning: 'border-yellow-500/50 bg-yellow-500/10 text-yellow-500 [&>svg]:text-yellow-500',
        destructive:
          'border-destructive/50 bg-destructive/10 text-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

/**
 * Alert Component
 * 
 * Display important messages and notifications to users.
 * 
 * **Variants:**
 * - `default` - Neutral informational alert
 * - `info` - Blue informational alert
 * - `success` - Green success alert
 * - `warning` - Yellow warning alert
 * - `destructive` - Red error/danger alert
 * 
 * **Use Cases:**
 * - System notifications
 * - Form validation messages
 * - Status updates
 * - Important announcements
 * - Error messages
 * 
 * **Accessibility:**
 * - Use appropriate semantic HTML
 * - Include icons for visual reinforcement
 * - Ensure sufficient color contrast
 * - Consider aria-live regions for dynamic alerts
 * 
 * @example
 * ```tsx
 * <Alert variant="info">
 *   <AlertTitle>Info</AlertTitle>
 *   <AlertDescription>
 *     Your changes have been saved.
 *   </AlertDescription>
 * </Alert>
 * ```
 */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
)
Alert.displayName = 'Alert'

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * Alert Title Component
 * 
 * Title/heading for alert messages.
 */
const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  )
)
AlertTitle.displayName = 'AlertTitle'

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * Alert Description Component
 * 
 * Description/body text for alert messages.
 */
const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription, alertVariants }
