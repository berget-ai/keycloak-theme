import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg hover:bg-[hsl(var(--primary))]/90 hover:shadow-xl hover:-translate-y-0.5",
                primary:
                    "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] shadow-lg hover:bg-[hsl(var(--secondary))]/90 hover:shadow-xl hover:-translate-y-0.5",
                secondary:
                    "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] shadow hover:bg-[hsl(var(--accent))]/80",
                outline:
                    "border-2 border-[hsl(var(--border))] bg-transparent hover:bg-[hsl(var(--accent))]/10 hover:border-[hsl(var(--accent))]",
                ghost: "hover:bg-[hsl(var(--accent))]/10 hover:text-[hsl(var(--accent-foreground))]",
                destructive:
                    "bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] shadow-sm hover:bg-[hsl(var(--destructive))]/90",
                link: "text-[hsl(var(--primary))] underline-offset-4 hover:underline"
            },
            size: {
                default: "h-11 px-5 py-2.5",
                sm: "h-9 px-3 text-xs",
                lg: "h-12 px-8 text-base",
                icon: "h-11 w-11"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    /**
     * Change the component to a Slot component that merges props.
     * Useful for wrapping components like Next.js Link or React Router Link.
     */
    asChild?: boolean;
}

/**
 * Button Component
 *
 * Versatile button with multiple variants and sizes.
 * Follows Scandinavian design principles with natural colors and smooth interactions.
 *
 * **Variants:**
 * - `default` - Primary Berget Stone button (beige)
 * - `primary` - Moss green button
 * - `secondary` - Sage green button
 * - `outline` - Transparent with border
 * - `ghost` - Transparent, hover effect only
 * - `destructive` - Red for dangerous actions
 * - `link` - Styled as a link
 *
 * **Sizes:**
 * - `sm` - Small (36px height)
 * - `default` - Medium (44px height)
 * - `lg` - Large (48px height)
 * - `icon` - Square for icon-only buttons
 *
 * **Border System:**
 * Outline variant uses semantic `--border` token that adapts to theme.
 *
 * **Composition:**
 * Supports `asChild` prop for composition with other components like links.
 *
 * @example
 * ```tsx
 * // Basic button
 * <Button>Click me</Button>
 *
 * // Different variants
 * <Button variant="primary" size="lg">Large Primary</Button>
 * <Button variant="outline">Outlined</Button>
 *
 * // As link (with React Router)
 * <Button asChild>
 *   <Link to="/products">View Products</Link>
 * </Button>
 *
 * // Disabled state
 * <Button disabled>Disabled</Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
