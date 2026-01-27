import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const textareaVariants = cva(
    "flex w-full rounded-xl border bg-white/5 px-4 py-3 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 resize-y",
    {
        variants: {
            variant: {
                default: "border-white/20 hover:bg-white/10",
                primary: "border-primary/50 bg-primary/10 hover:bg-primary/20",
                subtle: "border-white/10 hover:bg-white/10",
                muted: "border-white/5 hover:bg-white/10"
            },
            size: {
                sm: "px-3 py-2 text-xs min-h-[60px]",
                default: "px-4 py-3 text-sm min-h-[80px]",
                lg: "px-5 py-4 text-base min-h-[120px]"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        VariantProps<typeof textareaVariants> {
    /** Label text to display above the textarea */
    label?: string;
    /** Description text to display below the label */
    description?: string;
    /** Error message to display */
    error?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Maximum number of characters allowed */
    maxLength?: number;
    /** Show character count */
    showCount?: boolean;
    /** Number of rows */
    rows?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            className,
            variant,
            size,
            label,
            description,
            error,
            placeholder,
            maxLength,
            showCount,
            rows,
            id,
            disabled,
            value,
            ...props
        },
        ref
    ) => {
        const textareaId = id || React.useId();
        const errorId = `${textareaId}-error`;
        const descriptionId = `${textareaId}-description`;
        const characterCount = typeof value === "string" ? value.length : 0;

        return (
            <div className="flex flex-col gap-2">
                {label && (
                    <label
                        htmlFor={textareaId}
                        className={cn(
                            "text-sm font-medium leading-none",
                            disabled ? "text-white/40 cursor-not-allowed" : "text-white",
                            error && "text-red-400"
                        )}
                    >
                        {label}
                    </label>
                )}

                <textarea
                    ref={ref}
                    id={textareaId}
                    disabled={disabled}
                    aria-invalid={!!error}
                    aria-describedby={cn(error && errorId, description && descriptionId)}
                    className={cn(
                        textareaVariants({ variant, size }),
                        error && "border-red-500/50 bg-red-500/10",
                        disabled && "cursor-not-allowed",
                        className
                    )}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    rows={rows}
                    value={value}
                    {...props}
                />

                {(description || error || (showCount && maxLength)) && (
                    <div className="flex items-center justify-between gap-2">
                        {description && (
                            <p id={descriptionId} className="text-xs text-white/60">
                                {description}
                            </p>
                        )}
                        {(error || (showCount && maxLength)) && (
                            <div className="flex items-center gap-2 ml-auto">
                                {showCount && maxLength && (
                                    <span
                                        className={cn(
                                            "text-xs",
                                            characterCount >= maxLength
                                                ? "text-red-400"
                                                : "text-white/60"
                                        )}
                                    >
                                        {characterCount}/{maxLength}
                                    </span>
                                )}
                                {error && (
                                    <p id={errorId} className="text-xs text-red-400">
                                        {error}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
