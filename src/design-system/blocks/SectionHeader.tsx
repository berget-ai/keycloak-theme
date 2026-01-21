import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const sectionHeaderVariants = cva('text-center', {
  variants: {
    alignment: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    size: {
      sm: '[&_h2]:text-2xl [&_h2]:md:text-3xl',
      md: '[&_h2]:text-3xl [&_h2]:md:text-4xl',
      lg: '[&_h2]:text-4xl [&_h2]:md:text-5xl',
    },
  },
  defaultVariants: {
    alignment: 'center',
    size: 'md',
  },
})

export interface SectionHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionHeaderVariants> {
  /**
   * Section title
   */
  title: string
  /**
   * Section description
   */
  description?: string
  /**
   * Optional tagline or badge text
   */
  tagline?: string
  /**
   * Maximum width for content
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-3xl',
  lg: 'max-w-4xl',
  xl: 'max-w-5xl',
  full: 'max-w-full',
}

/**
 * Section Header Component
 * 
 * Consistent section headers with title and description.
 * Based on the pattern used across products, why-berget, and other pages.
 * 
 * **Sizes:**
 * - `sm` - Small (2xl/3xl)
 * - `md` - Medium (3xl/4xl, default)
 * - `lg` - Large (4xl/5xl)
 * 
 * **Alignment:**
 * - `left` - Left aligned
 * - `center` - Center aligned (default)
 * - `right` - Right aligned
 * 
 * **Use Cases:**
 * - Section introductions
 * - Page headers
 * - Content dividers
 * - Feature section headers
 * 
 * @example
 * ```tsx
 * <SectionHeader
 *   title="Why Choose Berget"
 *   description="European AI infrastructure built for privacy and performance"
 *   tagline="Built for Europe"
 * />
 * ```
 */
const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      className,
      alignment,
      size,
      title,
      description,
      tagline,
      maxWidth = 'md',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          sectionHeaderVariants({ alignment, size }),
          maxWidthClasses[maxWidth],
          alignment === 'center' && 'mx-auto',
          className
        )}
        {...props}
      >
        {tagline && (
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#40916C]/15 text-[#52B788] mb-6 text-sm font-medium">
            {tagline}
          </div>
        )}

        <h2 className="font-medium mb-6 leading-tight">{title}</h2>

        {description && (
          <p className="text-lg text-white/60 leading-relaxed">{description}</p>
        )}
      </div>
    )
  }
)
SectionHeader.displayName = 'SectionHeader'

export { SectionHeader, sectionHeaderVariants }
