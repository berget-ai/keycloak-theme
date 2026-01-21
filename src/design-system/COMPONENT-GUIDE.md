# Component Selection Guide

This guide helps you choose the right component for your use case.

## 📦 Surface Components: Panel vs Card vs FeatureCard

Understanding when to use each surface component is crucial for consistency.

### Component Hierarchy

```
Panel (Base)
├── Card (Structured Content)
│   ├── CardHeader
│   ├── CardTitle
│   ├── CardDescription
│   ├── CardContent
│   └── CardFooter
└── FeatureCard (Marketing Features)
```

---

## 🎨 Panel - The Foundation

**What it is:**
Panel is the base component for all card-like surfaces. It provides consistent styling without imposing structure.

**When to use Panel:**
- ✅ You need a simple container with consistent styling
- ✅ You want full control over the internal layout
- ✅ You're building a custom component that needs a surface
- ✅ Content doesn't fit the Card structure (header/content/footer)

**When NOT to use Panel:**
- ❌ You need structured sections (use Card instead)
- ❌ You're displaying features with icon/title/list (use FeatureCard)
- ❌ You just need spacing (use Stack or Container instead)

### Panel Examples

```tsx
// ✅ GOOD - Simple notification
<Panel variant="outline" padding="md">
  <div className="flex items-center gap-3">
    <CheckIcon />
    <span>Operation successful</span>
  </div>
</Panel>

// ✅ GOOD - Custom dashboard widget
<Panel variant="elevated" padding="lg">
  <div className="flex justify-between items-center mb-4">
    <h3>API Calls</h3>
    <span className="text-2xl">📊</span>
  </div>
  <div className="text-3xl font-medium">1,234,567</div>
</Panel>

// ✅ GOOD - Image container
<Panel variant="flat" padding="none">
  <img src="/image.jpg" className="rounded-2xl" />
</Panel>

// ❌ BAD - Structured content (use Card instead)
<Panel>
  <div className="p-6">
    <h2>Title</h2>
    <p>Description</p>
  </div>
  <div className="p-6 pt-0">
    Content
  </div>
  <div className="p-6 pt-0">
    <button>Action</button>
  </div>
</Panel>
```

### Panel Variants

| Variant | Use Case | Visual |
|---------|----------|--------|
| `default` | Standard container with border | Border + Background |
| `glass` | Overlay, modal, floating elements | Backdrop blur + Border |
| `elevated` | Interactive cards, clickable items | Shadow + Hover lift |
| `flat` | Subtle containers, nested panels | Background only |
| `outline` | Lightweight containers | Border only |

---

## 📋 Card - Structured Content

**What it is:**
Card extends Panel with opinionated structure: Header, Title, Description, Content, Footer.

**When to use Card:**
- ✅ Content has a clear title and description
- ✅ You need structured sections (header, body, footer)
- ✅ Content follows the card pattern (common in dashboards)
- ✅ You want semantic HTML structure

**When NOT to use Card:**
- ❌ Content doesn't have a title (use Panel)
- ❌ You're displaying a feature list with icon (use FeatureCard)
- ❌ Layout is too custom for the card structure (use Panel)

### Card Examples

```tsx
// ✅ GOOD - Dashboard card with structure
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Recent Activity</CardTitle>
    <CardDescription>Your latest actions</CardDescription>
  </CardHeader>
  <CardContent>
    <ActivityList items={activities} />
  </CardContent>
  <CardFooter>
    <Button variant="outline">View All</Button>
  </CardFooter>
</Card>

// ✅ GOOD - Settings panel
<Card>
  <CardHeader>
    <CardTitle>API Configuration</CardTitle>
    <CardDescription>Configure your API endpoint</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <Input label="API Key" />
      <Input label="Endpoint URL" />
    </form>
  </CardContent>
</Card>

// ✅ GOOD - Product card
<Card variant="elevated" withBokeh>
  <CardHeader>
    <CardTitle>GPT-4 Turbo</CardTitle>
    <CardDescription>Most capable model</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <p>128K context window</p>
      <p>JSON mode support</p>
    </div>
  </CardContent>
  <CardFooter>
    <Button>Deploy</Button>
  </CardFooter>
</Card>

// ❌ BAD - Feature showcase (use FeatureCard)
<Card>
  <CardContent>
    <CloudIcon />
    <h3>Serverless Inference</h3>
    <ul>
      <li>Auto-scaling</li>
      <li>Pay per use</li>
    </ul>
  </CardContent>
</Card>
```

### Card Composition

```tsx
<Card>
  <CardHeader>        {/* Optional: Title area */}
    <CardTitle />     {/* Main heading */}
    <CardDescription /> {/* Supporting text */}
  </CardHeader>
  
  <CardContent>       {/* Required: Main content */}
    {/* Your content here */}
  </CardContent>
  
  <CardFooter>        {/* Optional: Actions */}
    {/* Buttons, links, metadata */}
  </CardFooter>
</Card>
```

---

## ⚡ FeatureCard - Marketing Features

**What it is:**
FeatureCard extends Panel with opinionated structure for showcasing features: Icon, Title, Description, Feature list.

**When to use FeatureCard:**
- ✅ Displaying product features on marketing pages
- ✅ Content has: icon + title + description + bullet points
- ✅ Part of a 3-column feature grid (common pattern)
- ✅ Using brand color variants (moss, sage, earth)

**When NOT to use FeatureCard:**
- ❌ Dashboard or app UI (use Card or Panel)
- ❌ No feature list needed (use Card or Panel)
- ❌ Needs footer with actions (use Card)

### FeatureCard Examples

```tsx
// ✅ GOOD - Product feature showcase
<FeatureCard
  icon={Cloud}
  iconColor="text-[#52B788]"
  title="Serverless Inference"
  description="Deploy AI models without managing infrastructure"
  features={[
    "Auto-scaling based on demand",
    "Pay only for what you use",
    "EU-based infrastructure"
  ]}
  variant="moss"
/>

// ✅ GOOD - Benefits section
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <FeatureCard
    icon={Shield}
    title="GDPR Compliant"
    description="Full European data sovereignty"
    features={["Data stays in EU", "Privacy by design", "Regular audits"]}
    variant="default"
  />
  {/* More feature cards... */}
</div>

// ✅ GOOD - Without feature list
<FeatureCard
  icon={Zap}
  title="Lightning Fast"
  description="Sub-100ms response times for all your inference needs"
  variant="sage"
/>

// ❌ BAD - Dashboard metric (use Panel or Card)
<FeatureCard
  title="API Requests"
  description="1,234,567 this month"
  features={["+12.3% from last month"]}
/>

// ❌ BAD - Has action buttons (use Card with CardFooter)
<FeatureCard
  icon={Cloud}
  title="Deploy Model"
  description="Get started"
  features={["Step 1", "Step 2"]}
  // No way to add <Button> - use Card instead!
/>
```

### FeatureCard Variants

Themed variants for brand consistency:

| Variant | Color | Use Case |
|---------|-------|----------|
| `default` | Standard | Neutral features |
| `moss` | #52B788 | Primary features, nature/eco themes |
| `sage` | #74C69D | Secondary features, softer emphasis |
| `earth` | #2D6A4F | Grounded features, stability themes |
| `stone` | Stone | Premium features, subtle elegance |

---

## 🎯 Decision Tree

### Start Here: What are you building?

```
Need a surface/container?
│
├─ Is it a simple container with custom layout?
│  └─ Use PANEL
│     Examples: Notification, Custom widget, Image container
│
├─ Does it have structured sections (header/content/footer)?
│  └─ Use CARD
│     Examples: Dashboard card, Settings panel, Product info
│
└─ Is it a feature showcase with icon + title + bullets?
   └─ Use FEATURECARD
      Examples: Product features, Benefits grid, Capability list
```

### Visual Guide

```
┌─────────────────────────────────────┐
│ PANEL - Full control                │
│                                     │
│ [Your custom layout here]          │
│                                     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ CARD - Structured sections          │
├─────────────────────────────────────┤
│ Header:                             │
│   Title                             │
│   Description                       │
├─────────────────────────────────────┤
│ Content:                            │
│   [Main content area]               │
├─────────────────────────────────────┤
│ Footer:                             │
│   [Actions/metadata]                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ FEATURECARD - Feature showcase      │
│                                     │
│  🎨 Icon                            │
│                                     │
│  Feature Title                      │
│  Brief description text             │
│                                     │
│  ✓ Feature bullet 1                │
│  ✓ Feature bullet 2                │
│  ✓ Feature bullet 3                │
│                                     │
└─────────────────────────────────────┘
```

---

## 📝 Real-World Examples

### Dashboard Screen

```tsx
function Dashboard() {
  return (
    <Container>
      <h1>Dashboard</h1>
      
      {/* Metrics - Use Panel for custom layout */}
      <div className="grid grid-cols-3 gap-4">
        <Panel variant="elevated" padding="lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-muted">API Calls</p>
              <p className="text-3xl font-medium">1.2M</p>
            </div>
            <span className="text-3xl">📊</span>
          </div>
        </Panel>
        {/* More metric panels... */}
      </div>
      
      {/* Activity - Use Card for structured content */}
      <Card variant="default">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest deployments</CardDescription>
        </CardHeader>
        <CardContent>
          <ActivityList />
        </CardContent>
        <CardFooter>
          <Button variant="outline">View All</Button>
        </CardFooter>
      </Card>
    </Container>
  )
}
```

### Marketing Page

```tsx
function ProductsPage() {
  return (
    <>
      <HeroBlock title="Our Products" />
      
      {/* Features - Use FeatureCard for marketing */}
      <section className="py-24">
        <Container>
          <SectionHeader 
            title="Key Features"
            description="Everything you need to deploy AI"
          />
          
          <div className="grid grid-cols-3 gap-8 mt-16">
            <FeatureCard
              icon={Cloud}
              title="Serverless"
              description="No infrastructure management"
              features={["Auto-scaling", "Pay per use", "EU regions"]}
              variant="moss"
            />
            <FeatureCard
              icon={Zap}
              title="Fast"
              description="Sub-100ms response times"
              features={["Edge locations", "CDN", "Optimized"]}
              variant="sage"
            />
            <FeatureCard
              icon={Shield}
              title="Secure"
              description="GDPR compliant infrastructure"
              features={["EU data", "Encrypted", "Audited"]}
              variant="earth"
            />
          </div>
        </Container>
      </section>
    </>
  )
}
```

### Settings Page

```tsx
function SettingsPage() {
  return (
    <Container>
      <h1>Settings</h1>
      
      {/* Settings sections - Use Card */}
      <Stack spacing="lg">
        <Card>
          <CardHeader>
            <CardTitle>API Configuration</CardTitle>
            <CardDescription>
              Configure your API endpoint and authentication
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input label="API Key" type="password" />
              <Input label="Endpoint URL" />
            </form>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Choose how you want to be notified
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Notification settings */}
          </CardContent>
        </Card>
      </Stack>
    </Container>
  )
}
```

---

## 🚫 Common Mistakes

### ❌ Using Card when Panel would be simpler

```tsx
// ❌ BAD - Unnecessary Card structure
<Card>
  <CardContent>
    <p>Simple message here</p>
  </CardContent>
</Card>

// ✅ GOOD - Just use Panel
<Panel>
  <p>Simple message here</p>
</Panel>
```

### ❌ Using Panel when Card structure helps

```tsx
// ❌ BAD - Manually creating card structure
<Panel>
  <div className="p-6">
    <h2 className="text-2xl font-medium">Title</h2>
    <p className="text-sm text-muted">Description</p>
  </div>
  <div className="p-6 pt-0">
    Content here
  </div>
</Panel>

// ✅ GOOD - Use Card's built-in structure
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### ❌ Using FeatureCard outside marketing context

```tsx
// ❌ BAD - FeatureCard in dashboard
<FeatureCard
  title="User Settings"
  features={["Email", "Password", "Profile"]}
/>

// ✅ GOOD - Card in dashboard
<Card>
  <CardHeader>
    <CardTitle>User Settings</CardTitle>
  </CardHeader>
  <CardContent>
    <SettingsForm />
  </CardContent>
</Card>
```

---

## 💡 Pro Tips

### Tip 1: Start with Panel, upgrade if needed

```tsx
// Start simple
<Panel>Simple content</Panel>

// Need structure? Upgrade to Card
<Card>
  <CardHeader>...</CardHeader>
  <CardContent>Simple content</CardContent>
</Card>
```

### Tip 2: Combine components

```tsx
// FeatureCard in a Card for complex layouts
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Product Features</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-2 gap-4">
      <FeatureCard icon={Cloud} title="Feature 1" variant="moss" />
      <FeatureCard icon={Zap} title="Feature 2" variant="sage" />
    </div>
  </CardContent>
</Card>
```

### Tip 3: Use Panel for custom designs

```tsx
// Building something unique? Use Panel
<Panel variant="glass" padding="lg">
  <div className="relative">
    <BackgroundEffect />
    <CustomLayout />
  </div>
</Panel>
```

---

## ✅ Quick Reference

| Need... | Use | Example |
|---------|-----|---------|
| Simple container | `Panel` | Notification, widget |
| Structured sections | `Card` | Dashboard card, settings |
| Marketing feature | `FeatureCard` | Product features grid |
| Custom layout | `Panel` | Image container, custom UI |
| Title + content + actions | `Card` | Modal, form panel |
| Icon + title + bullets | `FeatureCard` | Benefits section |

---

**Remember:** When in doubt, start with Panel. You can always upgrade to Card or FeatureCard if you need more structure!
