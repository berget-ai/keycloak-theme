import * as React from "react";
import { cn } from "../../utils/cn";

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * List items
     */
    children: React.ReactNode;
}

/**
 * List Component
 *
 * Container for list items with console-style spacing and borders.
 *
 * @example
 * ```tsx
 * <List>
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 * </List>
 * ```
 */
export const List = React.forwardRef<HTMLDivElement, ListProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn("flex flex-col", className)} {...props}>
            {children}
        </div>
    )
);
List.displayName = "List";

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Icon to display on the left
     */
    icon?: React.ReactNode;
    /**
     * Main content
     */
    children: React.ReactNode;
    /**
     * Whether the item is clickable/interactive
     */
    interactive?: boolean;
}

/**
 * ListItem Component
 *
 * Individual list item with icon, hover state, and console-style borders.
 *
 * @example
 * ```tsx
 * <ListItem icon={<Key />}>
 *   <div>
 *     <h3>API Key: Production</h3>
 *     <p>Plan: api-usage-eur</p>
 *   </div>
 * </ListItem>
 * ```
 */
export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
    ({ className, icon, children, interactive = true, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex items-center gap-4 px-6 py-5 border-t border-[hsl(var(--border))]",
                "first:border-t-0",
                interactive &&
                    "transition-all duration-200 hover:bg-white/[0.02] cursor-pointer",
                className
            )}
            {...props}
        >
            {icon && (
                <div className="flex-shrink-0 flex items-center justify-center">
                    {icon}
                </div>
            )}
            <div className="flex-1 min-w-0">{children}</div>
        </div>
    )
);
ListItem.displayName = "ListItem";

export interface ListHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Header content (usually column labels)
     */
    children: React.ReactNode;
}

/**
 * ListHeader Component
 *
 * Header row for list with column labels.
 *
 * @example
 * ```tsx
 * <ListHeader>
 *   <div className="flex gap-4">
 *     <span className="flex-1">Name</span>
 *     <span className="w-32">Created</span>
 *     <span className="w-32">Last Used</span>
 *   </div>
 * </ListHeader>
 * ```
 */
export const ListHeader = React.forwardRef<HTMLDivElement, ListHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "px-6 py-4 text-sm text-white/40 border-b border-[hsl(var(--border))]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
);
ListHeader.displayName = "ListHeader";
