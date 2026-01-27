import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const linkVariants = cva(
    "inline-flex items-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "text-white hover:text-white/80 underline underline-offset-4 hover:underline-offset-2",
                primary:
                    "text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/80 underline underline-offset-4 hover:underline-offset-2",
                secondary:
                    "text-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary))]/80 underline underline-offset-4 hover:underline-offset-2",
                ghost: "text-white/60 hover:text-white hover:underline underline-offset-4",
                muted: "text-white/40 hover:text-white/60",
                code: "text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/80 font-mono text-sm bg-[hsl(var(--primary))]/10 px-2 py-1 rounded hover:bg-[hsl(var(--primary))]/20"
            },
            size: {
                sm: "text-sm",
                default: "text-base",
                lg: "text-lg"
            },
            underline: {
                none: "no-underline hover:underline",
                always: "underline",
                hover: "no-underline hover:underline"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            underline: "hover"
        }
    }
);

export interface LinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof linkVariants> {
    /**
     * Link content
     */
    children: React.ReactNode;
    /**
     * Whether the link is external (adds rel="noopener noreferrer")
     */
    external?: boolean;
    /**
     * Icon to display after the text
     */
    icon?: React.ReactNode;
    /**
     * Whether to show external icon automatically
     */
    showExternalIcon?: boolean;
    /**
     * Whether the link is disabled
     */
    disabled?: boolean;
}

/**
 * Link Component
 *
 * Styled anchor links for navigation with multiple variants.
 * Follows Scandinavian design principles with clean, minimal styling.
 *
 * **Variants:**
 * - `default` - White text with underline on hover
 * - `primary` - Berget Stone color (beige)
 * - `secondary` - Moss green color
 * - `ghost` - Subtle, appears on hover
 * - `muted` - Low opacity, for less important links
 * - `code` - Code-style link with background
 *
 * **Sizes:**
 * - `sm` - Small text
 * - `default` - Base text size
 * - `lg` - Large text
 *
 * **Underline:**
 * - `none` - No underline
 * - `always` - Always underlined
 * - `hover` - Underline on hover (default)
 *
 * **Accessibility:**
 * - Keyboard accessible
 * - Focus visible state
 * - Screen reader friendly
 * - External link indicators
 *
 * @example
 * ```tsx
 * // Basic link
 * <Link href="/about">About</Link>
 *
 * // Primary variant
 * <Link href="/contact" variant="primary">Contact</Link>
 *
 * // Code style
 * <Link href="/docs" variant="code">Documentation</Link>
 *
 * // External link
 * <Link href="https://example.com" external>Example</Link>
 *
 * // With icon
 * <Link href="/next" icon={<ArrowRight />}>Next page</Link>
 *
 * // Disabled state
 * <Link href="#" disabled>Disabled link</Link>
 * ```
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    (
        {
            className,
            variant,
            size,
            underline,
            external = false,
            icon,
            showExternalIcon = false,
            disabled = false,
            children,
            ...props
        },
        ref
    ) => {
        // Check if href is external
        const isExternal =
            external ||
            (typeof props.href === "string" &&
                (props.href.startsWith("http://") ||
                    props.href.startsWith("https://") ||
                    props.href.startsWith("mailto:") ||
                    props.href.startsWith("tel:")));

        return (
            <a
                ref={ref}
                className={cn(linkVariants({ variant, size, underline }), className)}
                {...(disabled && {
                    "aria-disabled": true,
                    onClick: e => e.preventDefault()
                })}
                {...props}
                {...(isExternal &&
                    !disabled && {
                        rel: "noopener noreferrer",
                        target: "_blank"
                    })}
            >
                {children}
                {icon && <span className="inline-flex items-center">{icon}</span>}
                {showExternalIcon && isExternal && !disabled && (
                    <span
                        className="inline-flex items-center ml-1 opacity-60"
                        aria-hidden="true"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </span>
                )}
            </a>
        );
    }
);
Link.displayName = "Link";

export { Link, linkVariants };
