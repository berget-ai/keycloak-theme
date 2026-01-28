import React from "react";
import { Check } from "lucide-react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | React.ReactNode;
    description?: string;
    error?: boolean;
}

const Checkbox = ({
    label,
    description,
    className = "",
    id,
    error = false,
    ...props
}: CheckboxProps) => {
    return (
        <div className="flex items-start gap-2 group">
            <div className="relative flex items-center">
                <input type="checkbox" id={id} className="peer sr-only" {...props} />
                <div
                    className={`h-4 w-4 shrink-0 rounded border transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 
          disabled:cursor-not-allowed disabled:opacity-50 
          ${props.checked ? "bg-white border-white" : error ? "border-red-500/70 group-hover:border-red-500" : "border-white/20 group-hover:border-white/50"}
          ${className}`}
                >
                    {props.checked && (
                        <Check className="h-3 w-3 text-black animate-fadeIn" />
                    )}
                </div>
            </div>
            {(label || description) && (
                <div className="grid gap-1.5 leading-none">
                    {label && (
                        <label
                            htmlFor={id}
                            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 
                ${error ? "text-red-400" : ""}`}
                        >
                            {label}
                        </label>
                    )}
                    {description && (
                        <p className="text-xs text-white/60">{description}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Checkbox;
