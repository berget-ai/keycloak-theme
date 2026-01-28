import * as React from "react";
import { cn } from "../../utils/cn";

export interface GrainyGradientBackgroundProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

/**
 * Grainy Gradient Background Component
 *
 * Artistic grainy gradient with multiple colored ellipses and blur overlay.
 * Creates organic, textured background perfect for creative sections.
 *
 * **Use Cases:**
 * - Creative hero sections
 * - About pages
 * - Feature showcases
 * - Landing page highlights
 *
 * **Best For:**
 * - Organic, natural aesthetics
 * - Creative pages
 * - Brand storytelling
 *
 * **Combines Well With:**
 * - Large typography
 * - Card overlays
 * - Minimal content
 *
 * @example
 * ```tsx
 * <GrainyGradientBackground>
 *   <Hero />
 * </GrainyGradientBackground>
 * ```
 */
export const GrainyGradientBackground = React.forwardRef<
    HTMLDivElement,
    GrainyGradientBackgroundProps
>(({ children, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("relative overflow-hidden bg-[#0A0A0A]", className)}
            {...props}
        >
            {/* Frame 4 with blur filter */}
            <div
                className="absolute inset-0"
                style={{
                    filter: "blur(70px)"
                }}
            >
                {/* Ellipse 5 */}
                <div
                    className="absolute"
                    style={
                        {
                            left: "60.11%",
                            right: "-33.49%",
                            top: "44.65%",
                            bottom: "8.81%",
                            transform: "matrix(-0.51, 0.86, -0.85, -0.52, 0, 0)"
                        } as React.CSSProperties
                    }
                >
                    <div
                        className="absolute inset-0 animate-float-slow"
                        style={
                            {
                                background: "#22714A",
                                borderRadius: "50%"
                            } as React.CSSProperties
                        }
                    />
                </div>

                {/* Ellipse 6 */}
                <div
                    className="absolute"
                    style={
                        {
                            left: "-2.66%",
                            right: "-14.25%",
                            top: "10%",
                            bottom: "28.42%",
                            transform: "matrix(0.99, 0.11, -0.11, 0.99, 0, 0)"
                        } as React.CSSProperties
                    }
                >
                    <div
                        className="absolute inset-0 animate-float-medium"
                        style={
                            {
                                background: "#22714A",
                                borderRadius: "50%"
                            } as React.CSSProperties
                        }
                    />
                </div>

                {/* Ellipse 2 */}
                <div
                    className="absolute"
                    style={
                        {
                            left: "35.22%",
                            right: "-16.46%",
                            top: "-32.33%",
                            bottom: "63.63%",
                            transform: "matrix(0.95, 0.3, -0.29, 0.96, 0, 0)"
                        } as React.CSSProperties
                    }
                >
                    <div
                        className="absolute inset-0 animate-float-slow"
                        style={
                            {
                                background: "#74C69D",
                                borderRadius: "50%"
                            } as React.CSSProperties
                        }
                    />
                </div>

                {/* Ellipse 3 */}
                <div
                    className="absolute"
                    style={
                        {
                            left: "-18.17%",
                            right: "38.23%",
                            top: "47.92%",
                            bottom: "5.34%",
                            transform: "matrix(0.91, -0.41, 0.4, 0.92, 0, 0)"
                        } as React.CSSProperties
                    }
                >
                    <div
                        className="absolute inset-0 animate-float-medium"
                        style={
                            {
                                background: "#52B788",
                                borderRadius: "50%"
                            } as React.CSSProperties
                        }
                    />
                </div>

                {/* Ellipse 1 */}
                <div
                    className="absolute"
                    style={
                        {
                            left: "-22.84%",
                            right: "40.78%",
                            top: "-20.62%",
                            bottom: "75.33%",
                            transform: "matrix(0.97, -0.25, 0.24, 0.97, 0, 0)"
                        } as React.CSSProperties
                    }
                >
                    <div
                        className="absolute inset-0 animate-float-fast"
                        style={
                            {
                                background: "#E5DDD5",
                                borderRadius: "50%"
                            } as React.CSSProperties
                        }
                    />
                </div>

                {/* Ellipse 4 */}
                <div
                    className="absolute"
                    style={
                        {
                            left: "-23.29%",
                            right: "67.49%",
                            top: "-12.3%",
                            bottom: "39.23%",
                            transform: "matrix(0.87, -0.49, 0.48, 0.88, 0, 0)"
                        } as React.CSSProperties
                    }
                >
                    <div
                        className="absolute inset-0 animate-float-fast"
                        style={
                            {
                                background: "#2D6A4F",
                                borderRadius: "50%"
                            } as React.CSSProperties
                        }
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
});
GrainyGradientBackground.displayName = "GrainyGradientBackground";
