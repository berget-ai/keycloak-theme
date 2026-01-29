import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Check } from "lucide-react";

const checkboxVariants = cva(
    "inline-flex items-center justify-center rounded-md border transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-opacity-20 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "border-white/20 bg-white/5 hover:bg-white/10",
                primary: "border-primary/50 bg-primary/10 hover:bg-primary/20",
                subtle: "border-white/10 bg-white/5 hover:bg-white/10",
                muted: "border-white/5 bg-white/5 hover:bg-white/10"
            },
            size: {
                sm: "w-4 h-4",
                default: "w-5 h-5",
                lg: "w-6 h-6"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

export interface CheckboxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
        VariantProps<typeof checkboxVariants> {
    /** Label text to display next to the checkbox */
    label?: string;
    /** Description text to display below the label */
    description?: string;
    /** Error message to display */
    error?: string;
    /** Custom icon to show when checked */
    checkedIcon?: React.ReactNode;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            className,
            variant,
            size,
            label,
            description,
            error,
            checkedIcon,
            id,
            disabled,
            defaultChecked,
            ...props
        },
        ref
    ) => {
        const checkboxId = id || React.useId();
        const errorId = `${checkboxId}-error`;
        const [isChecked, setIsChecked] = React.useState(defaultChecked || false);

        return (
            <div className="flex items-start gap-3">
                <div className="relative flex items-start pt-0.5">
                    <input
                        ref={ref}
                        type="checkbox"
                        id={checkboxId}
                        disabled={disabled}
                        aria-invalid={!!error}
                        aria-describedby={error ? errorId : undefined}
                        className="peer sr-only"
                        checked={isChecked}
                        onChange={e => setIsChecked(e.target.checked)}
                        {...props}
                    />
                    <label
                        htmlFor={checkboxId}
                        className={cn(
                            checkboxVariants({ variant, size }),
                            isChecked && "border-primary",
                            error && "border-red-500/50 bg-red-500/10",
                            "cursor-pointer",
                            disabled && "cursor-not-allowed pointer-events-none",
                            className
                        )}
                    >
                        {checkedIcon ? (
                            <span
                                className={cn(
                                    "transition-opacity",
                                    isChecked ? "opacity-100" : "opacity-0"
                                )}
                            >
                                {checkedIcon}
                            </span>
                        ) : (
                            <Check
                                className={cn(
                                    "transition-opacity",
                                    isChecked ? "opacity-100" : "opacity-0",
                                    size === "sm" && "w-3 h-3",
                                    size === "default" && "w-3.5 h-3.5",
                                    size === "lg" && "w-4 h-4",
                                    "text-white"
                                )}
                                strokeWidth={2}
                            />
                        )}
                    </label>
                </div>

                {(label || description || error) && (
                    <div className="flex flex-col gap-1">
                        {label && (
                            <label
                                htmlFor={checkboxId}
                                className={cn(
                                    "text-sm font-medium leading-none",
                                    disabled
                                        ? "text-white/40 cursor-not-allowed"
                                        : "text-white cursor-pointer",
                                    error && "text-red-400"
                                )}
                            >
                                {label}
                            </label>
                        )}
                        {description && (
                            <p className="text-xs text-white/60">{description}</p>
                        )}
                        {error && (
                            <p id={errorId} className="text-xs text-red-400">
                                {error}
                            </p>
                        )}
                    </div>
                )}
            </div>
        );
    }
);
Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
