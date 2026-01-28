import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const stackVariants = cva("flex", {
    variants: {
        direction: {
            vertical: "flex-col",
            horizontal: "flex-row"
        },
        spacing: {
            none: "gap-0",
            xs: "gap-1",
            sm: "gap-2",
            md: "gap-4",
            lg: "gap-6",
            xl: "gap-8",
            "2xl": "gap-12"
        },
        align: {
            start: "items-start",
            center: "items-center",
            end: "items-end",
            stretch: "items-stretch",
            baseline: "items-baseline"
        },
        justify: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
            around: "justify-around",
            evenly: "justify-evenly"
        }
    },
    defaultVariants: {
        direction: "vertical",
        spacing: "md",
        align: "stretch",
        justify: "start"
    }
});

export interface StackProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof stackVariants> {}

/**
 * Stack Component
 *
 * Flexbox-based layout for consistent spacing between elements.
 *
 * **Direction:**
 * - `vertical` - Stack items vertically (default)
 * - `horizontal` - Stack items horizontally
 *
 * **Spacing:**
 * - `none` - No gap (0)
 * - `xs` - Extra small (4px)
 * - `sm` - Small (8px)
 * - `md` - Medium (16px, default)
 * - `lg` - Large (24px)
 * - `xl` - Extra large (32px)
 * - `2xl` - 2X large (48px)
 *
 * **Alignment:**
 * - `start` - Align to start
 * - `center` - Center alignment
 * - `end` - Align to end
 * - `stretch` - Stretch items (default)
 * - `baseline` - Baseline alignment
 *
 * **Justify:**
 * - `start` - Justify to start (default)
 * - `center` - Center justify
 * - `end` - Justify to end
 * - `between` - Space between
 * - `around` - Space around
 * - `evenly` - Space evenly
 *
 * **Use Cases:**
 * - Form layouts
 * - Card content
 * - Navigation items
 * - Button groups
 * - List layouts
 *
 * @example
 * ```tsx
 * <Stack spacing="lg">
 *   <h1>Title</h1>
 *   <p>Paragraph with consistent spacing</p>
 *   <Button>Action</Button>
 * </Stack>
 * ```
 */
const Stack = React.forwardRef<HTMLDivElement, StackProps>(
    ({ className, direction, spacing, align, justify, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                stackVariants({ direction, spacing, align, justify }),
                className
            )}
            {...props}
        />
    )
);
Stack.displayName = "Stack";

export { Stack, stackVariants };
