import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { LucideIcon } from "lucide-react";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                accent: "border-transparent bg-accent text-accent-foreground hover:bg-accent/80",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground border-[hsl(var(--border))]",
                success:
                    "border-[hsl(var(--border-success))] bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]",
                warning:
                    "border-[hsl(var(--border-warning))] bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))]",
                info: "border-[hsl(var(--border-info))] bg-[hsl(var(--info))]/10 text-[hsl(var(--info))]",
                sage: "bg-[#52B788]/40 border-transparent text-[#74C69D] px-3 py-1"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {
    /**
     * Optional icon component from lucide-react
     */
    icon?: LucideIcon;
    /**
     * Gap between icon and text
     * @default 2
     */
    iconGap?: number;
}

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
 * - `sage` - Sage green badge with icon support (Figma spec)
 *
 * **Border System:**
 * Uses semantic border tokens for state variants:
 * - outline: `--border` (standard)
 * - success: `--border-success` (green)
 * - warning: `--border-warning` (yellow)
 * - info: `--border-info` (blue)
 *
 * **Icon Support:**
 * Badges can optionally include an icon from lucide-react.
 * The `sage` variant is designed for use with icons.
 *
 * **Use Cases:**
 * - Status indicators (Active, Pending, Failed)
 * - Tags and labels
 * - Feature flags (New, Beta, Premium)
 * - Notification counts
 * - Category labels
 * - Privacy indicators (e.g., "No data leaves Sweden")
 *
 * @example
 * ```tsx
 * // Basic badges
 * <Badge>Default</Badge>
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning">Beta</Badge>
 * <Badge variant="destructive">Error</Badge>
 *
 * // Badge with icon (sage variant)
 * <Badge variant="sage" icon={Shield}>
 *   No data leaves Sweden
 * </Badge>
 * ```
 */
function Badge({
    className,
    variant,
    icon: Icon,
    iconGap = 2,
    children,
    ...props
}: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props}>
            {Icon && (
                <Icon
                    className="w-4 h-4"
                    strokeWidth={1}
                    style={{ marginRight: `${iconGap * 0.25}rem` }}
                />
            )}
            {children}
        </div>
    );
}

export { Badge, badgeVariants };
