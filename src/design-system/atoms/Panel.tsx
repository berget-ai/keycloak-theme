import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const panelVariants = cva(
    "relative overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
    {
        variants: {
            variant: {
                highlight:
                    "bg-[rgba(26,26,26,0.4)] border border-[rgba(26,26,26,0.4)] backdrop-blur-[5px]",
                glass: "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] shadow-[0px_21px_14.6px_5px_rgba(0,0,0,0.24)] backdrop-blur-[10px]",
                solid: "bg-[#1A1A1A] border border-[rgba(26,26,26,0.4)] backdrop-blur-[5px]",
                dark: "bg-[rgba(26,26,26,0.6)] border border-[rgba(26,26,26,0.4)] backdrop-blur-[5px]"
            },
            padding: {
                none: "p-0",
                sm: "p-4",
                md: "p-6",
                lg: "p-8"
            },
            radius: {
                default: "rounded-2xl",
                lg: "rounded-3xl",
                xl: "rounded-[2rem]"
            }
        },
        defaultVariants: {
            variant: "highlight",
            padding: "md",
            radius: "default"
        }
    }
);

export interface PanelProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof panelVariants> {
    /**
     * Content to render inside the panel
     */
    children: React.ReactNode;
}

/**
 * Panel Component
 *
 * Base container component for all card-like surfaces.
 * Provides consistent styling for containers, cards, and panels.
 *
 * **Variants:**
 * - `highlight` - Dark glass with backdrop blur
 * - `glass` - Light glass morphism with shadow
 * - `solid` - Solid dark background
 * - `dark` - Semi-transparent dark background (60% opacity)
 *
 * **Padding:**
 * - `none` - No padding (for custom layouts)
 * - `sm` - Small padding (16px)
 * - `md` - Medium padding (24px, default)
 * - `lg` - Large padding (32px)
 *
 * **Radius:**
 * - `default` - Standard rounded corners (32px)
 * - `lg` - Large rounded corners (48px)
 * - `xl` - Extra large rounded corners (64px)
 *
 * **Design System Role:**
 * Panel is the foundational component for all surfaces. Other components
 * like Card, FeatureCard, and custom containers should build upon Panel
 * for consistency.
 *
 * @example
 * ```tsx
 * // Basic panel
 * <Panel>Content</Panel>
 *
 * // Glass effect with custom padding
 * <Panel variant="glass" padding="lg">
 *   Content with glass morphism
 * </Panel>
 *
 * // Solid dark panel
 * <Panel variant="solid">
 *   Interactive content
 * </Panel>
 * ```
 */
const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
    ({ className, variant, padding, radius, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(panelVariants({ variant, padding, radius }), className)}
            {...props}
        >
            {children}
        </div>
    )
);
Panel.displayName = "Panel";

export { Panel, panelVariants };
