import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const cardVariants = cva(
    "relative overflow-hidden rounded-[16px] flex flex-col items-start",
    {
        variants: {
            variant: {
                highlight:
                    "bg-[rgba(26,26,26,0.4)] border border-[rgba(26,26,26,0.4)] backdrop-blur-[5px]",
                glass: "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] shadow-[0px_21px_14.6px_5px_rgba(0,0,0,0.24)] backdrop-blur-[10px]",
                solid: "bg-[#1A1A1A] border border-[rgba(26,26,26,0.4)] backdrop-blur-[5px]"
            }
        },
        defaultVariants: {
            variant: "highlight"
        }
    }
);

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardVariants> {
    /**
     * Add Bokeh effect background (legacy prop)
     * @deprecated
     */
    withBokeh?: boolean;
}

/**
 * Card Component
 *
 * Structured content container with optional sections.
 *
 * **Variants:**
 * - `default` - Standard panel styling with hover effect
 * - `highlight` - Dark glass with subtle radial gradient
 * - `glass` - Light glass morphism with shadow
 * - `solid` - Solid dark background with gradient accent
 * - `elevated` - Shadow with hover lift effect
 * - `flat` - No border, subtle background
 *
 * **Composition:**
 * Card is composed of:
 * - CardHeader (optional)
 * - CardTitle (in header)
 * - CardDescription (in header)
 * - CardContent (main area)
 * - CardFooter (optional)
 *
 * @example
 * ```tsx
 * <Card variant="highlight">
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *   </CardHeader>
 *   <CardContent>
 *     Main content goes here
 *   </CardContent>
 * </Card>
 * ```
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, withBokeh = false, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(cardVariants({ variant }), className)}
                {...props}
            >
                {(variant === "highlight" ||
                    variant === "glass" ||
                    variant === "solid") && (
                    <>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 top-[3px] h-[calc(100%-3px)] w-full bg-[radial-gradient(100%_100%_at_49.87%_0%,rgba(229,221,213,0.04)_0%,rgba(26,26,26,0)_100%)] pointer-events-none" />

                        {/* Top gradient highlight */}
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[radial-gradient(55.66%_112.5%_at_50%_0%,#E5DDD5_0%,rgba(229,221,213,0)_92.4%)] opacity-[0.3] pointer-events-none" />
                    </>
                )}
                <div className="relative z-10">{children}</div>
            </div>
        );
    }
);
Card.displayName = "Card";

/**
 * Card Header
 *
 * Container for card title and description.
 */
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex flex-col space-y-1.5 p-6", className)}
            {...props}
        />
    )
);
CardHeader.displayName = "CardHeader";

/**
 * Card Title
 *
 * Main heading for the card.
 */
const CardTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn("text-2xl font-medium leading-none tracking-tight", className)}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

/**
 * Card Description
 *
 * Supporting text for the card title.
 */
const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-[hsl(var(--muted-foreground))]", className)}
        {...props}
    />
));
CardDescription.displayName = "CardDescription";

/**
 * Card Content
 *
 * Main content area of the card.
 */
const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

/**
 * Card Footer
 *
 * Bottom section for actions or metadata.
 */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex items-center p-6 pt-0", className)}
            {...props}
        />
    )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
