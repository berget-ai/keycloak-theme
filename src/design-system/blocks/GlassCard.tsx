import React from "react";

interface GlassCardProps {
    children?: React.ReactNode;
    className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
    return (
        <div className={`relative group ${className}`}>
            <div
                className="
                relative
                w-full
                min-h-[200px]
                p-10
                rounded-[16px]
                overflow-hidden
                backdrop-blur-xl
                border border-transparent
                transition-all duration-500
                shadow-[inset_0_2px_0_0_rgba(255,255,255,0.3)]
                bg-[rgba(26,26,26,0.2)]
            "
            >
                {children}
            </div>
        </div>
    );
};

export default GlassCard;
