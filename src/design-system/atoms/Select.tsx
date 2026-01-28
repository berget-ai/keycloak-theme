import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { ChevronDown } from "lucide-react";

const selectVariants = cva(
    "flex w-full items-center justify-between rounded-xl border bg-white/5 px-4 py-3 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "border-white/20 hover:bg-white/10",
                primary: "border-primary/50 bg-primary/10 hover:bg-primary/20",
                subtle: "border-white/10 hover:bg-white/10",
                muted: "border-white/5 hover:bg-white/10"
            },
            size: {
                sm: "px-3 py-2 text-xs",
                default: "px-4 py-3 text-sm",
                lg: "px-5 py-4 text-base"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

export interface SelectOption {
    /** Value of the option */
    value: string;
    /** Label to display */
    label: string;
    /** Whether the option is disabled */
    disabled?: boolean;
}

export interface SelectProps
    extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
        VariantProps<typeof selectVariants> {
    /** Label text to display above the select */
    label?: string;
    /** Description text to display below the label */
    description?: string;
    /** Error message to display */
    error?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Options to display */
    options: SelectOption[];
    /** Icon to display on the right side */
    icon?: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            className,
            variant,
            size,
            label,
            description,
            error,
            placeholder,
            options,
            icon,
            id,
            disabled,
            value,
            ...props
        },
        ref
    ) => {
        const selectId = id || React.useId();
        const errorId = `${selectId}-error`;
        const descriptionId = `${selectId}-description`;

        return (
            <div className="flex flex-col gap-2">
                {label && (
                    <label
                        htmlFor={selectId}
                        className={cn(
                            "text-sm font-medium leading-none",
                            disabled ? "text-white/40 cursor-not-allowed" : "text-white",
                            error && "text-red-400"
                        )}
                    >
                        {label}
                    </label>
                )}

                <div className="relative">
                    <select
                        ref={ref}
                        id={selectId}
                        disabled={disabled}
                        aria-invalid={!!error}
                        aria-describedby={cn(
                            error && errorId,
                            description && descriptionId
                        )}
                        className={cn(
                            selectVariants({ variant, size }),
                            "appearance-none pr-10",
                            error && "border-red-500/50 bg-red-500/10",
                            disabled && "cursor-not-allowed",
                            className
                        )}
                        value={value}
                        {...props}
                    >
                        {placeholder && (
                            <option value="" disabled>
                                {placeholder}
                            </option>
                        )}
                        {options.map(option => (
                            <option
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        {icon || (
                            <ChevronDown
                                className={cn(
                                    "text-white/60",
                                    size === "sm" && "w-4 h-4",
                                    size === "default" && "w-5 h-5",
                                    size === "lg" && "w-6 h-6"
                                )}
                                strokeWidth={1}
                            />
                        )}
                    </div>
                </div>

                {description && (
                    <p id={descriptionId} className="text-xs text-white/60">
                        {description}
                    </p>
                )}

                {error && (
                    <p id={errorId} className="text-xs text-red-400">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);
Select.displayName = "Select";

export { Select, selectVariants };
