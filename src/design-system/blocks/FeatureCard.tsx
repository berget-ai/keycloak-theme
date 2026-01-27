import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Check, LucideIcon } from "lucide-react";
import { Card } from "../primitives/Card";

const featureCardVariants = cva("", {
    variants: {
        variant: {
            default: "",
            moss: "bg-[#52B788]/5 border-[hsl(var(--border-moss))] hover:bg-[#52B788]/10",
            sage: "bg-[#74C69D]/5 border-[hsl(var(--border-sage))] hover:bg-[#74C69D]/10",
            earth: "bg-[#2D6A4F]/5 border-[hsl(var(--border-earth))] hover:bg-[#2D6A4F]/10",
            stone: "bg-[hsl(var(--primary))]/5 border-[hsl(var(--border-stone))] hover:bg-[hsl(var(--primary))]/10"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

export interface FeatureCardProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
        VariantProps<typeof featureCardVariants> {
    /**
     * Icon component from lucide-react
     */
    icon?: LucideIcon;
    /**
     * Icon color
     */
    iconColor?: string;
    /**
     * Card title
     */
    title: string;
    /**
     * Card description
     */
    description?: string;
    /**
     * List of features/items
     */
    features?: string[];
    /**
     * Show checkmarks for features
     */
    showCheckmarks?: boolean;
}

/**
 * Feature Card Component
 *
 * Card for displaying features with icon, title, description, and feature list.
 * Built on Panel component for consistency.
 *
 * **Variants:**
 * - `default` - Standard panel styling
 * - `moss` - Moss green tint (#52B788)
 * - `sage` - Sage green tint (#74C69D)
 * - `earth` - Earth tone tint (#2D6A4F)
 * - `stone` - Berget Stone tint
 *
 * **Border System:**
 * Uses semantic border tokens:
 * - default: `--border` (standard)
 * - moss: `--border-moss` (moss green)
 * - sage: `--border-sage` (sage green)
 * - earth: `--border-earth` (earth tone)
 * - stone: `--border-stone` (berget stone)
 *
 * **Design System Role:**
 * FeatureCard extends Panel with opinionated structure for feature showcases.
 * Used throughout marketing pages for consistent feature presentation.
 *
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={Cloud}
 *   iconColor="text-[#52B788]"
 *   title="Serverless Inference"
 *   description="Deploy AI models without managing infrastructure"
 *   features={["Auto-scaling", "Pay per use", "EU regions"]}
 *   variant="moss"
 * />
 * ```
 */
const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
    (
        {
            className,
            variant,
            icon: Icon,
            iconColor = "text-white",
            title,
            description,
            features,
            showCheckmarks = true,
            ...props
        },
        ref
    ) => {
        return (
            <Card
                ref={ref}
                variant="highlight"
                className={cn(
                    "flex flex-col items-start gap-6 px-10 py-12 transition-colors group backdrop-blur-[10px]",
                    featureCardVariants({ variant }),
                    className
                )}
                {...props}
            >
                {Icon && (
                    <div>
                        <Icon
                            className={cn("w-[28px] h-[28px]", iconColor)}
                            strokeWidth={1}
                        />
                    </div>
                )}

                <h3 className="text-[20px] leading-[26px] font-normal font-[\'Ovo\'] tracking-[-1px] text-white">
                    {title}
                </h3>

                {description && (
                    <p className="text-[14px] leading-[30px] font-normal font-[\'DM_Sans\'] text-white/80">
                        {description}
                    </p>
                )}

                {features && features.length > 0 && (
                    <ul className="flex flex-col gap-3 w-full">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                {showCheckmarks && (
                                    <div className="w-[18px] h-[18px] flex items-center justify-center flex-shrink-0">
                                        <div className="w-[6px] h-[6px] rounded-full bg-white/60" />
                                    </div>
                                )}
                                <span className="text-[12px] leading-[20px] font-normal font-[\'DM_Sans\'] text-white/80 flex-1">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                <h3 className="text-[30px] leading-[36px] font-normal font-['Ovo'] tracking-[-0.8px] text-white">
                    {title}
                </h3>

                {description && (
                    <p className="text-[14px] leading-[24px] font-normal font-['DM_Sans'] text-white/80">
                        {description}
                    </p>
                )}

                {features && features.length > 0 && (
                    <ul className="flex flex-col gap-3 w-full">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                {showCheckmarks && (
                                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                                        <Check
                                            className="w-4 h-4 text-white"
                                            strokeWidth={1.3}
                                        />
                                    </div>
                                )}
                                <span className="text-[14px] leading-[20px] font-normal font-['DM_Sans'] text-white/80 flex-1">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </Card>
        );
    }
);
FeatureCard.displayName = "FeatureCard";

export { FeatureCard, featureCardVariants };
