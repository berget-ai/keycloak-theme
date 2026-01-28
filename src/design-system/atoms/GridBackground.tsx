import * as React from "react";
import { cn } from "../../utils/cn";

export interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Grid size in pixels
     * @default 24
     */
    gridSize?: number;
    /**
     * Grid line opacity (0-1)
     * @default 0.02
     */
    opacity?: number;
    /**
     * Grid line color in HSL format
     * @default "229, 221, 213" (Berget Stone)
     */
    color?: string;
    /**
     * Children to render on top of the grid
     */
    children?: React.ReactNode;
}

/**
 * Grid Background Component
 *
 * Subtle grid pattern background used across the Berget Design System.
 * Creates a sense of structure and precision without being distracting.
 *
 * **Use Cases:**
 * - Application layouts (console, dashboards)
 * - Content pages where you want subtle structure
 * - Behind cards and content areas
 *
 * **Best For:**
 * - Professional/technical contexts
 * - Data-heavy interfaces
 * - Administrative pages
 *
 * @example
 * ```tsx
 * <GridBackground>
 *   <div>Your content here</div>
 * </GridBackground>
 *
 * <GridBackground gridSize={32} opacity={0.05}>
 *   <div>Larger, more visible grid</div>
 * </GridBackground>
 * ```
 */
export const GridBackground = React.forwardRef<HTMLDivElement, GridBackgroundProps>(
    (
        {
            gridSize = 24,
            opacity = 0.02,
            color = "229, 221, 213",
            children,
            className,
            style,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn("relative min-h-screen", className)}
                style={{
                    backgroundImage: `
            linear-gradient(to bottom, rgba(${color}, ${opacity}) 1px, transparent 1px),
            linear-gradient(to right, rgba(${color}, ${opacity}) 1px, transparent 1px)
          `,
                    backgroundSize: `${gridSize}px ${gridSize}px`,
                    ...style
                }}
                {...props}
            >
                {children}
            </div>
        );
    }
);
GridBackground.displayName = "GridBackground";
