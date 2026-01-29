import * as React from "react";
import { cn } from "../../utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Input Component
 *
 * Text input field for forms and user input.
 *
 * **Features:**
 * - Clean Scandinavian design
 * - Dark theme optimized
 * - Accessible with proper focus states
 * - Full HTML input attributes support
 *
 * **Use Cases:**
 * - Text input
 * - Email input
 * - Password input
 * - Number input
 * - Search fields
 * - Any single-line text entry
 *
 * **Accessibility:**
 * - Always use with a label
 * - Include placeholder for hints (not as label replacement)
 * - Provide clear error messages
 * - Ensure sufficient color contrast
 * - Support keyboard navigation
 *
 * @example
 * ```tsx
 * <Input
 *   type="email"
 *   placeholder="you@example.com"
 *   aria-label="Email address"
 * />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
