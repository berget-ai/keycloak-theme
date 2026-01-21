import type { Meta, StoryObj } from '@storybook/react'
import { GridBackground } from './GridBackground'
import { GradientBackground } from './GradientBackground'
import { NetworkBackground } from './NetworkBackground'

/**
 * Background components showcasing different background styles in the Berget Design System.
 * 
 * See BACKGROUNDS.md for complete usage guide.
 */
const meta = {
  title: 'Utilities/Backgrounds',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Berget Design System provides four main background types:

1. **Solid Dark** - Pure dark background for focused work
2. **Grid** - Subtle grid pattern for structure
3. **Gradient** - Colorful gradients for marketing/hero sections
4. **Network** - Animated network for tech/enterprise feel

See the individual stories and BACKGROUNDS.md for detailed usage guidelines.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

/**
 * Solid Dark Background
 * 
 * The default background for most application interfaces.
 * Pure dark (#1A1A1A) without any patterns or effects.
 */
export const SolidDark: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-[hsl(var(--background))] flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl mb-4">Solid Dark Background</h1>
        <p className="text-[hsl(var(--muted-foreground))] mb-8">
          Pure dark background (#1A1A1A) for focused, distraction-free interfaces.
          Use in dashboards, forms, and admin pages.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/5 p-6 rounded-lg border border-[hsl(var(--border))]">
            <div className="text-sm text-white/60">Sample Card 1</div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-[hsl(var(--border))]">
            <div className="text-sm text-white/60">Sample Card 2</div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-[hsl(var(--border))]">
            <div className="text-sm text-white/60">Sample Card 3</div>
          </div>
        </div>
      </div>
    </div>
  ),
}

/**
 * Grid Background - Default
 * 
 * Subtle grid pattern that adds structure without distraction.
 * Perfect for technical interfaces and dashboards.
 */
export const GridDefault: StoryObj = {
  render: () => (
    <GridBackground className="bg-[hsl(var(--background))] flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl mb-4">Grid Background</h1>
        <p className="text-[hsl(var(--muted-foreground))] mb-8">
          Subtle 24×24px grid with 2% opacity. Adds technical structure
          while staying minimal and focused.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/5 p-6 rounded-lg border border-[hsl(var(--border))]">
            <div className="text-sm text-white/60">Sample Card 1</div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-[hsl(var(--border))]">
            <div className="text-sm text-white/60">Sample Card 2</div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-[hsl(var(--border))]">
            <div className="text-sm text-white/60">Sample Card 3</div>
          </div>
        </div>
      </div>
    </GridBackground>
  ),
}

/**
 * Grid Background - Visible
 * 
 * More pronounced grid for when you want structure to be obvious.
 */
export const GridVisible: StoryObj = {
  render: () => (
    <GridBackground 
      opacity={0.05}
      className="bg-[hsl(var(--background))] flex items-center justify-center"
    >
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl mb-4">Visible Grid</h1>
        <p className="text-[hsl(var(--muted-foreground))] mb-8">
          Same grid but with 5% opacity - more visible structure.
          Use sparingly, primarily for design-focused contexts.
        </p>
      </div>
    </GridBackground>
  ),
}

/**
 * Grid Background - Large
 * 
 * Larger grid size (48px) for more breathing room.
 */
export const GridLarge: StoryObj = {
  render: () => (
    <GridBackground 
      gridSize={48}
      opacity={0.03}
      className="bg-[hsl(var(--background))] flex items-center justify-center"
    >
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl mb-4">Large Grid</h1>
        <p className="text-[hsl(var(--muted-foreground))] mb-8">
          48×48px grid for more spacious feeling.
        </p>
      </div>
    </GridBackground>
  ),
}

/**
 * Gradient Background - Berget
 * 
 * Brand gradient with Berget green colors.
 * Perfect for hero sections and marketing pages.
 */
export const GradientBerget: StoryObj = {
  render: () => (
    <GradientBackground variant="berget" className="flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl mb-4 text-white">Berget Gradient</h1>
        <p className="text-white/90 text-lg mb-8">
          Green gradient with Berget brand colors. Creates strong visual impact
          perfect for hero sections and landing pages.
        </p>
        <button className="bg-white text-[#2D6A4F] px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
          Call to Action
        </button>
      </div>
    </GradientBackground>
  ),
}

/**
 * Gradient Background - Warm
 * 
 * Warm earth tones for cozy, trustworthy feeling.
 */
export const GradientWarm: StoryObj = {
  render: () => (
    <GradientBackground variant="warm" className="flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl mb-4 text-white">Warm Gradient</h1>
        <p className="text-white/90 text-lg mb-8">
          Warm earth tones. Perfect for sustainability, organic products,
          or creating a cozy, trustworthy feeling.
        </p>
      </div>
    </GradientBackground>
  ),
}

/**
 * Gradient Background - Cool
 * 
 * Cool blue-green tones for professional, tech feel.
 */
export const GradientCool: StoryObj = {
  render: () => (
    <GradientBackground variant="cool" className="flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl mb-4 text-white">Cool Gradient</h1>
        <p className="text-white/90 text-lg mb-8">
          Cool blue-green tones. Ideal for B2B, security, reliability,
          and professional/technical contexts.
        </p>
      </div>
    </GradientBackground>
  ),
}

/**
 * Gradient Background - Subtle
 * 
 * Very subtle dark gradient for sections that need gentle separation.
 */
export const GradientSubtle: StoryObj = {
  render: () => (
    <GradientBackground variant="subtle" className="flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl mb-4">Subtle Gradient</h1>
        <p className="text-[hsl(var(--muted-foreground))] mb-8">
          Barely-there gradient from very dark to slightly less dark.
          Perfect for pricing sections, FAQ, or footer areas.
        </p>
      </div>
    </GradientBackground>
  ),
}

/**
 * Network Background
 * 
 * Animated network of connected nodes.
 * Creates tech/enterprise aesthetic. CPU-intensive animation.
 */
export const NetworkAnimated: StoryObj = {
  render: () => (
    <div className="relative min-h-screen bg-[#1A1A1A] flex items-center justify-center">
      <NetworkBackground opacity={0.4} nodeCount={50} />
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-5xl mb-4 text-white">Network Background</h1>
        <p className="text-white/80 text-lg mb-8">
          Animated network of connected nodes with flowing particles.
          Perfect for tech/SaaS platforms, enterprise products, and conveying connectivity.
        </p>
        <div className="text-sm text-white/60">
          Watch the particles flow and sparks appear when they reach nodes
        </div>
      </div>
    </div>
  ),
}

/**
 * Combined: Gradient + Network (Hero Section)
 * 
 * The ultimate hero section background.
 * Combines gradient with animated network for maximum impact.
 */
export const CombinedHero: StoryObj = {
  render: () => (
    <GradientBackground variant="berget" className="flex items-center justify-center">
      <NetworkBackground opacity={0.3} nodeCount={40} />
      <div className="relative z-10 text-center max-w-3xl px-6">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-[hsl(var(--border-hover))] mb-6 backdrop-blur-sm">
          <span className="text-sm text-white/90">Maximum Visual Impact</span>
        </div>
        <h1 className="text-6xl mb-6 text-white font-light">
          Gradient + Network
        </h1>
        <p className="text-white/90 text-xl mb-10 leading-relaxed">
          The ultimate hero section background. Combines brand gradient
          with animated network for tech platforms and enterprise SaaS products.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-[#2D6A4F] px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors shadow-lg">
            Get Started
          </button>
          <button className="border-2 border-[hsl(var(--border-strong))] text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </GradientBackground>
  ),
}

/**
 * All Backgrounds Comparison
 * 
 * Side-by-side view of all background types.
 */
export const AllBackgrounds: StoryObj = {
  render: () => (
    <div className="grid grid-cols-2 gap-px bg-white/10">
      {/* Solid Dark */}
      <div className="min-h-[50vh] bg-[hsl(var(--background))] flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl mb-2">Solid Dark</h2>
          <p className="text-sm text-white/60">Pure focus</p>
        </div>
      </div>

      {/* Grid */}
      <GridBackground className="min-h-[50vh] bg-[hsl(var(--background))] flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl mb-2">Grid</h2>
          <p className="text-sm text-white/60">Structured</p>
        </div>
      </GridBackground>

      {/* Gradient */}
      <GradientBackground variant="berget" className="min-h-[50vh] flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl mb-2 text-white">Gradient</h2>
          <p className="text-sm text-white/80">Visual impact</p>
        </div>
      </GradientBackground>

      {/* Network */}
      <div className="relative min-h-[50vh] bg-[#1A1A1A] flex items-center justify-center p-8">
        <NetworkBackground opacity={0.4} nodeCount={30} />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl mb-2 text-white">Network</h2>
          <p className="text-sm text-white/60">Tech/Enterprise</p>
        </div>
      </div>
    </div>
  ),
}
