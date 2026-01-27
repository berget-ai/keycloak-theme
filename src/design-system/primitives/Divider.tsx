import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const dividerVariants = cva("w-full border-0", {
    variants: {
        orientation: {
            horizontal: "border-t",
            vertical: "h-full border-l"
        },
        variant: {
            default: "border-white/10",
            subtle: "border-white/5",
            strong: "border-white/20",
            primary: "border-primary/50",
            muted: "border-white/5"
        },
        size: {
            thin: "border-t",
            medium: "border-t-2",
            thick: "border-t-4"
        }
    },
    defaultVariants: {
        orientation: "horizontal",
        variant: "default",
        size: "thin"
    }
});

export interface DividerProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof dividerVariants> {
    /** Text to display in the middle of the divider (only works with horizontal orientation) */
    label?: string;
    /** Position of the label (only applies when label is provided) */
    labelPosition?: "center" | "left" | "right";
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
    (
        {
            className,
            orientation,
            variant,
            size,
            label,
            labelPosition = "center",
            ...props
        },
        ref
    ) => {
        if (label) {
            return (
                <div
                    ref={ref}
                    className={cn("flex items-center w-full", className)}
                    {...props}
                >
                    {labelPosition !== "right" && (
                        <div
                            className={cn(
                                dividerVariants({
                                    orientation: "horizontal",
                                    variant,
                                    size
                                }),
                                "flex-1"
                            )}
                        />
                    )}
                    <span className="px-4 text-sm text-white/60 whitespace-nowrap">
                        {label}
                    </span>
                    {labelPosition !== "left" && (
                        <div
                            className={cn(
                                dividerVariants({
                                    orientation: "horizontal",
                                    variant,
                                    size
                                }),
                                "flex-1"
                            )}
                        />
                    )}
                </div>
            );
        }

        return (
            <div
                ref={ref}
                className={cn(dividerVariants({ orientation, variant, size }), className)}
                {...props}
            />
        );
    }
);
Divider.displayName = "Divider";

export { Divider, dividerVariants };
