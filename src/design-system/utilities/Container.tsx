import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
    variants: {
        size: {
            sm: "max-w-3xl",
            md: "max-w-5xl",
            lg: "max-w-7xl",
            xl: "max-w-[1400px]",
            full: "max-w-full"
        }
    },
    defaultVariants: {
        size: "lg"
    }
});

export interface ContainerProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof containerVariants> {}

/**
 * Container Component
 *
 * Responsive container for consistent page width and padding.
 *
 * **Sizes:**
 * - `sm` - 768px max width (for narrow content like articles)
 * - `md` - 1024px max width (for standard content)
 * - `lg` - 1280px max width (default, for most pages)
 * - `xl` - 1400px max width (for wide layouts)
 * - `full` - Full width (for edge-to-edge layouts)
 *
 * **Features:**
 * - Responsive horizontal padding
 * - Centered content
 * - Consistent max-widths
 * - Mobile-first design
 *
 * **Use Cases:**
 * - Page wrappers
 * - Section containers
 * - Content boundaries
 * - Responsive layouts
 *
 * @example
 * ```tsx
 * <Container>
 *   <h1>Page Content</h1>
 *   <p>This content is centered and has consistent padding.</p>
 * </Container>
 * ```
 */
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, size, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(containerVariants({ size }), className)}
            {...props}
        />
    )
);
Container.displayName = "Container";

export { Container, containerVariants };
