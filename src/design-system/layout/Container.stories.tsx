import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'
import { Panel } from '../primitives/Panel'

const meta = {
  title: 'Utilities/Container',
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

// Demo content component - console style with Panel
const DemoContent = () => (
  <Panel variant="default" padding="lg" radius="lg">
    <div className="relative z-10">
      <h2 className="text-2xl font-medium mb-4">Container Content</h2>
      <p className="text-white/60 mb-4">
        This content is centered with consistent horizontal padding. Resize the browser window 
        to see how the container responds to different screen sizes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Panel variant="elevated" padding="md" radius="default" bokeh={false}>
          <div className="relative z-10">
            <h3 className="font-medium mb-2">Feature 1</h3>
            <p className="text-sm text-white/60">Description here</p>
          </div>
        </Panel>
        <Panel variant="elevated" padding="md" radius="default" bokeh={false}>
          <div className="relative z-10">
            <h3 className="font-medium mb-2">Feature 2</h3>
            <p className="text-sm text-white/60">Description here</p>
          </div>
        </Panel>
        <Panel variant="elevated" padding="md" radius="default" bokeh={false}>
          <div className="relative z-10">
            <h3 className="font-medium mb-2">Feature 3</h3>
            <p className="text-sm text-white/60">Description here</p>
          </div>
        </Panel>
      </div>
    </div>
  </Panel>
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
        <Panel variant="default" padding="md" radius="lg" bokeh={false}>
          <div className="relative z-10">
            <p className="text-sm font-medium">Small (max-w-3xl / 768px)</p>
          </div>
        </Panel>
      </Container>
      
      <Container size="md">
        <Panel variant="default" padding="md" radius="lg" bokeh={false}>
          <div className="relative z-10">
            <p className="text-sm font-medium">Medium (max-w-5xl / 1024px)</p>
          </div>
        </Panel>
      </Container>
      
      <Container size="lg">
        <Panel variant="default" padding="md" radius="lg" bokeh={false}>
          <div className="relative z-10">
            <p className="text-sm font-medium">Large (max-w-7xl / 1280px)</p>
          </div>
        </Panel>
      </Container>
      
      <Container size="xl">
        <Panel variant="default" padding="md" radius="lg" bokeh={false}>
          <div className="relative z-10">
            <p className="text-sm font-medium">Extra Large (max-w-[1400px])</p>
          </div>
        </Panel>
      </Container>
      
      <Container size="full">
        <Panel variant="default" padding="md" radius="lg" bokeh={false}>
          <div className="relative z-10">
            <p className="text-sm font-medium">Full Width (max-w-full)</p>
          </div>
        </Panel>
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
              <Panel key={i} variant="default" padding="lg" radius="lg" bokeh={false}>
                <div className="relative z-10">
                  <h3 className="text-sm font-medium text-white/40 mb-2">Metric {i + 1}</h3>
                  <p className="text-3xl font-medium">1,234</p>
                </div>
              </Panel>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Panel variant="default" padding="lg" radius="lg">
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                      <span className="text-white/60">Activity item {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
            
            <Panel variant="default" padding="lg" radius="lg">
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-4">Usage Stats</h3>
                <div className="h-[200px] flex items-center justify-center text-white/60">
                  Chart placeholder
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </Container>
    </div>
  ),
}
