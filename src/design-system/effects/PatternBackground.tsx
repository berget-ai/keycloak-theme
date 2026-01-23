import * as React from "react";
import { cn } from "../../utils/cn";
export interface PatternBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    /**
     * Size of the pattern tiles in pixels
     * @default 48
     */
    tileSize?: 32 | 48;
}

/**
 * Pattern Background Component
 *
 * L-shaped pattern with small dots in corners repeated across the background.
 * Creates a subtle, structured grid effect.
 *
 * **Use Cases:**
 * - Technical interfaces
 * - Data visualization sections
 * - Form backgrounds
 * - Dashboard panels
 *
 * **Best For:**
 * - Clean, minimal aesthetics
 * - Technical/enterprise contexts
 * - Structured layouts
 *
 * **Combines Well With:**
 * - Cards and panels
 * - Data tables
 * - Form inputs
 *
 * @example
 * ```tsx
 * <PatternBackground tileSize={32}>
 *   <Dashboard />
 * </PatternBackground>
 * ```
 */
export const PatternBackground = React.forwardRef<HTMLDivElement, PatternBackgroundProps>(
    ({ children, className, tileSize = 48, ...props }, ref) => {
        // Pattern configurations for different tile sizes
        const patterns = {
            32: {
                size: "32px 32px",
                backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.05) 1.5px, transparent 1.5px),
                radial-gradient(circle at 30px 30px, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                radial-gradient(circle at 30px 0, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                radial-gradient(circle at 0 30px, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px),
                radial-gradient(circle at 31px 31px, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px),
                radial-gradient(circle at 1px 31px, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px),
                radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px),
                radial-gradient(circle at 31px 1px, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px)
            `
            },
            48: {
                size: "48px 48px",
                backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.05) 1.5px, transparent 1.5px),
                radial-gradient(circle at 46px 46px, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                radial-gradient(circle at 46px 0, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                radial-gradient(circle at 0 46px, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px),
                radial-gradient(circle at 47px 47px, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px),
                radial-gradient(circle at 1px 47px, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px),
                radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px),
                radial-gradient(circle at 47px 1px, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px)
            `
            }
        };

        const pattern = patterns[tileSize];

        return (
            <div
                ref={ref}
                className={cn("relative overflow-hidden bg-[#0A0A0A]", className)}
                {...props}
            >
                {/* Pattern overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: pattern.backgroundImage,
                        backgroundSize: pattern.size,
                        backgroundPosition: "0 0",
                        opacity: 0.4
                    }}
                />

                {/* Content */}
                <div className="relative z-10">{children}</div>
            </div>
        );
    }
);
PatternBackground.displayName = "PatternBackground";
