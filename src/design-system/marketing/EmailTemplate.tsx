import * as React from 'react'
import { cn } from '../../utils/cn'

export interface EmailTemplateProps {
  /**
   * Email subject/title
   */
  title?: string
  /**
   * Preheader text (shown in email client preview)
   */
  preheader?: string
  /**
   * Main content
   */
  children: React.ReactNode
  /**
   * Footer content
   */
  footer?: React.ReactNode
  /**
   * Logo URL
   */
  logoUrl?: string
  /**
   * Company name
   */
  companyName?: string
}

/**
 * Email Template Component
 * 
 * HTML email template with Berget branding.
 * Renders email-safe HTML that works across email clients.
 * 
 * **Features:**
 * - Email client compatible
 * - Dark theme design
 * - Responsive layout
 * - Berget branding
 * 
 * **Use Cases:**
 * - Transactional emails
 * - Newsletters
 * - Marketing campaigns
 * - System notifications
 * 
 * @example
 * ```tsx
 * <EmailTemplate
 *   title="Welcome to Berget"
 *   preheader="Get started with your account"
 * >
 *   <h1>Welcome!</h1>
 *   <p>Thanks for signing up...</p>
 *   <EmailButton href="https://berget.ai/login">
 *     Get Started
 *   </EmailButton>
 * </EmailTemplate>
 * ```
 */
export const EmailTemplate = React.forwardRef<HTMLDivElement, EmailTemplateProps>(
  (
    {
      title,
      preheader,
      children,
      footer,
      logoUrl = 'https://berget.ai/logo-white.png',
      companyName = 'Berget AI',
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="min-h-screen bg-[#0a0a0a] py-10 px-4"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        {/* Preheader (hidden but used by email clients) */}
        {preheader && (
          <div
            style={{
              display: 'none',
              fontSize: '1px',
              color: '#0a0a0a',
              lineHeight: '1px',
              maxHeight: 0,
              maxWidth: 0,
              opacity: 0,
              overflow: 'hidden',
            }}
          >
            {preheader}
          </div>
        )}

        {/* Main Container */}
        <div className="max-w-[600px] mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <img
              src={logoUrl}
              alt={companyName}
              className="inline-block w-12 h-12"
              width={48}
              height={48}
            />
          </div>

          {/* Card */}
          <div
            className="rounded-2xl border border-white/10 p-10"
            style={{
              background:
                'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(32, 32, 32, 0.9) 100%)',
            }}
          >
            {title && (
              <h1
                className="text-3xl font-medium text-white mb-6 text-center"
                style={{ margin: '0 0 24px 0' }}
              >
                {title}
              </h1>
            )}

            <div className="text-white text-[15px] leading-relaxed">
              {children}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-white/40 text-sm">
            {footer || (
              <>
                <p style={{ margin: '0 0 8px 0' }}>
                  &copy; {new Date().getFullYear()} {companyName}. All rights
                  reserved.
                </p>
                <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255, 255, 255, 0.3)' }}>
                  European AI Infrastructure
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
)
EmailTemplate.displayName = 'EmailTemplate'

export interface EmailButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Button text
   */
  children: React.ReactNode
  /**
   * Link URL
   */
  href: string
  /**
   * Variant style
   */
  variant?: 'primary' | 'secondary'
}

/**
 * Email Button Component
 * 
 * Email-safe button that works across all email clients.
 */
export const EmailButton = React.forwardRef<HTMLAnchorElement, EmailButtonProps>(
  ({ children, href, variant = 'primary', className, ...props }, ref) => {
    return (
      <div className="text-center my-6">
        <a
          ref={ref}
          href={href}
          className={cn(
            'inline-block px-8 py-3.5 rounded-lg font-medium text-[15px] no-underline transition-colors',
            variant === 'primary' &&
              'bg-white text-black hover:bg-white/90',
            variant === 'secondary' &&
              'bg-[hsl(var(--secondary))] text-white hover:bg-[hsl(var(--secondary))]/90',
            className
          )}
          style={{
            textDecoration: 'none',
            display: 'inline-block',
          }}
          {...props}
        >
          {children}
        </a>
      </div>
    )
  }
)
EmailButton.displayName = 'EmailButton'

export interface EmailSectionProps {
  /**
   * Section content
   */
  children: React.ReactNode
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Email Section Component
 * 
 * Wrapper for email content sections with proper spacing.
 */
export const EmailSection = React.forwardRef<HTMLDivElement, EmailSectionProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn('mb-6', className)}>
        {children}
      </div>
    )
  }
)
EmailSection.displayName = 'EmailSection'
