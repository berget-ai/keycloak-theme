import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'

const meta = {
  title: 'Design System/Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Container component for consistent page width and padding across the application.

**Design Principles:**
- Centered content with max-width constraints
- Responsive horizontal padding
- Mobile-first approach
- Consistent spacing system

**When to Use:**
- Page wrappers for main content
- Section boundaries
- Content that needs consistent max-width
- Responsive layouts

**Best Practices:**
- Use appropriate size for content type
- Combine with Stack for vertical spacing
- Consider full-width for edge-to-edge designs
- Use sm size for reading-focused content (articles, docs)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
  },
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

// Demo content component
const DemoContent = () => (
  <div className="bg-white/5 border border-[hsl(var(--border))] rounded-lg p-8">
    <h2 className="text-2xl font-medium mb-4">Container Content</h2>
    <p className="text-muted-foreground mb-4">
      This content is centered with consistent horizontal padding. Resize the browser window 
      to see how the container responds to different screen sizes.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white/5 rounded p-4">
        <h3 className="font-medium mb-2">Feature 1</h3>
        <p className="text-sm text-muted-foreground">Description here</p>
      </div>
      <div className="bg-white/5 rounded p-4">
        <h3 className="font-medium mb-2">Feature 2</h3>
        <p className="text-sm text-muted-foreground">Description here</p>
      </div>
      <div className="bg-white/5 rounded p-4">
        <h3 className="font-medium mb-2">Feature 3</h3>
        <p className="text-sm text-muted-foreground">Description here</p>
      </div>
    </div>
  </div>
)

/**
 * Small container (768px) - Perfect for articles and reading-focused content
 */
export const Small: Story = {
  render: () => (
    <div className="min-h-screen bg-background py-12">
      <Container size="sm">
        <DemoContent />
      </Container>
    </div>
  ),
}

/**
 * Medium container (1024px) - Good for standard content pages
 */
export const Medium: Story = {
  render: () => (
    <div className="min-h-screen bg-background py-12">
      <Container size="md">
        <DemoContent />
      </Container>
    </div>
  ),
}

/**
 * Large container (1280px) - Default size for most pages
 */
export const Large: Story = {
  render: () => (
    <div className="min-h-screen bg-background py-12">
      <Container size="lg">
        <DemoContent />
      </Container>
    </div>
  ),
}

/**
 * Extra Large container (1400px) - For wide layouts and dashboards
 */
export const ExtraLarge: Story = {
  render: () => (
    <div className="min-h-screen bg-background py-12">
      <Container size="xl">
        <DemoContent />
      </Container>
    </div>
  ),
}

/**
 * Full width - For edge-to-edge layouts
 */
export const FullWidth: Story = {
  render: () => (
    <div className="min-h-screen bg-background py-12">
      <Container size="full">
        <DemoContent />
      </Container>
    </div>
  ),
}

/**
 * Comparison - Shows all sizes side by side
 */
export const AllSizes: Story = {
  render: () => (
    <div className="min-h-screen bg-background py-12 space-y-8">
      <Container size="sm">
        <div className="bg-primary/10 border border-[hsl(var(--border-moss))] rounded-lg p-4">
          <p className="text-sm font-medium">Small (max-w-3xl / 768px)</p>
        </div>
      </Container>
      
      <Container size="md">
        <div className="bg-secondary/10 border border-[hsl(var(--border-sage))] rounded-lg p-4">
          <p className="text-sm font-medium">Medium (max-w-5xl / 1024px)</p>
        </div>
      </Container>
      
      <Container size="lg">
        <div className="bg-accent/10 border border-[hsl(var(--border-earth))] rounded-lg p-4">
          <p className="text-sm font-medium">Large (max-w-7xl / 1280px)</p>
        </div>
      </Container>
      
      <Container size="xl">
        <div className="bg-[#52B788]/10 border border-[hsl(var(--border-info))] rounded-lg p-4">
          <p className="text-sm font-medium">Extra Large (max-w-[1400px])</p>
        </div>
      </Container>
      
      <Container size="full">
        <div className="bg-[#FBB034]/10 border border-[hsl(var(--border-warning))] rounded-lg p-4">
          <p className="text-sm font-medium">Full Width (max-w-full)</p>
        </div>
      </Container>
    </div>
  ),
}

/**
 * Article Layout - Typical blog post or documentation page
 */
export const ArticleLayout: Story = {
  render: () => (
    <div className="min-h-screen bg-background py-12">
      <Container size="sm">
        <article className="space-y-6">
          <header>
            <h1 className="text-4xl font-serif mb-2">Getting Started with Berget AI</h1>
            <p className="text-muted-foreground">
              Published on January 21, 2026 · 5 min read
            </p>
          </header>
          
          <div className="prose prose-invert max-w-none space-y-4">
            <p>
              This is an example of an article layout using the small container size.
              The narrow width improves readability for long-form content.
            </p>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris.
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">Section Heading</h2>
            
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>
      </Container>
    </div>
  ),
}

/**
 * Dashboard Layout - Wide layout for data-heavy interfaces
 */
export const DashboardLayout: Story = {
  render: () => (
    <div className="min-h-screen bg-background py-8">
      <Container size="xl">
        <div className="space-y-6">
          <header>
            <h1 className="text-3xl font-medium mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Overview of your AI deployments</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white/5 border border-[hsl(var(--border))] rounded-lg p-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Metric {i + 1}</h3>
                <p className="text-3xl font-medium">1,234</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-[hsl(var(--border))] rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--success))]" />
                    <span className="text-muted-foreground">Activity item {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 border border-[hsl(var(--border))] rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Usage Stats</h3>
              <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                Chart placeholder
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  ),
}
