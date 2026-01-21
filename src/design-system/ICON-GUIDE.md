# Icon System Guide

Icons in Berget Design System follow Scandinavian principles: **minimal, functional, and never distracting**.

## 🎨 Philosophy

> Icons should complement text, not compete with it. They guide the eye without stealing attention.

### Core Principles

1. **Monochrome** - Icons inherit text color, never standalone colors
2. **Contextual** - Icons follow their context (alert icons match alert color)
3. **Minimal** - Simple, clean designs without unnecessary detail
4. **Consistent** - Same icon for same meaning across the system
5. **Functional** - Every icon serves a purpose, never decorative

---

## 📦 Icon Library

We use **Lucide React** for all icons. Lucide provides clean, consistent icons that align with our design philosophy.

```bash
npm install lucide-react
```

```tsx
import { Cloud, AlertCircle, CheckCircle } from 'lucide-react'
```

---

## 🎯 Standard Icon Mappings

These are our **canonical icons** - always use these for consistency.

### Actions & Navigation

| Purpose | Icon | Usage |
|---------|------|-------|
| Close/Dismiss | `X` | Modal close, notification dismiss |
| Menu | `Menu` | Mobile navigation toggle |
| Search | `Search` | Search inputs and functionality |
| Settings | `Settings` | Configuration, preferences |
| Add/Create | `Plus` | Create new item, add to list |
| Edit | `Pencil` | Edit existing content |
| Delete | `Trash2` | Delete/remove items |
| Download | `Download` | File downloads |
| Upload | `Upload` | File uploads |
| Copy | `Copy` | Copy to clipboard |
| External Link | `ExternalLink` | Opens in new tab/window |
| Forward | `ArrowRight` | Next, continue, proceed |
| Back | `ArrowLeft` | Previous, go back |
| Expand | `ChevronDown` | Expand accordion/dropdown |
| Collapse | `ChevronUp` | Collapse accordion/dropdown |

### Status & Feedback

| Purpose | Icon | Usage |
|---------|------|-------|
| Success | `CheckCircle` | Success messages, completed |
| Error | `XCircle` | Error messages, failed |
| Warning | `AlertTriangle` | Warnings, caution |
| Info | `Info` | Informational messages |
| Help | `HelpCircle` | Help text, tooltips |
| Loading | `Loader2` | Loading states (with spin) |

### Features & Services (Marketing)

| Purpose | Icon | Usage |
|---------|------|-------|
| Cloud/Serverless | `Cloud` | Serverless features |
| Speed/Performance | `Zap` | Fast, performance |
| Security | `Shield` | Security, protection |
| Database | `Database` | Data storage, databases |
| AI/Bot | `Bot` | AI models, automation |
| Network | `Network` | Connectivity, networking |
| Server | `Server` | Infrastructure, compute |
| Code | `Code` | Developer features |
| Lock | `Lock` | Privacy, encryption |
| Globe | `Globe` | Global, worldwide |
| Users | `Users` | Team, collaboration |
| Heart | `Heart` | Favorite, like |
| Star | `Star` | Featured, premium |
| Sparkles | `Sparkles` | New, special |
| Leaf | `Leaf` | Sustainability, eco |

### Data & Content

| Purpose | Icon | Usage |
|---------|------|-------|
| Document | `FileText` | Documents, files |
| Image | `Image` | Images, photos |
| Video | `Video` | Video content |
| Calendar | `Calendar` | Dates, scheduling |
| Clock | `Clock` | Time, duration |
| Chart | `BarChart3` | Analytics, metrics |
| Filter | `Filter` | Filtering data |
| Sort | `ArrowUpDown` | Sorting lists |

---

## 🎨 Color & Style Rules

### Rule 1: Inherit Text Color (Default)

Icons should inherit the color of their surrounding text.

```tsx
// ✅ GOOD - Icon inherits text color
<div className="text-white">
  <Cloud className="w-5 h-5" />
  <span>Serverless Inference</span>
</div>

// ✅ GOOD - Icon inherits muted text color
<p className="text-muted-foreground">
  <Info className="w-4 h-4 inline" />
  Additional information
</p>

// ❌ BAD - Don't override with custom colors
<Cloud className="w-5 h-5 text-blue-500" />
```

### Rule 2: Context-Specific Colors

In specific contexts (alerts, badges), icons match the semantic color.

```tsx
// ✅ GOOD - Alert icons match alert variant
<Alert variant="success">
  <CheckCircle className="w-4 h-4" />  {/* Inherits green from alert */}
  <AlertTitle>Success</AlertTitle>
</Alert>

<Alert variant="destructive">
  <XCircle className="w-4 h-4" />  {/* Inherits red from alert */}
  <AlertTitle>Error</AlertTitle>
</Alert>

// ✅ GOOD - Status indicators
<Badge variant="success">
  <CheckCircle className="w-3 h-3" />
  Active
</Badge>
```

### Rule 3: Brand Colors for Marketing

In marketing contexts (FeatureCard, hero sections), icons can use brand colors.

```tsx
// ✅ GOOD - Marketing feature with brand color
<FeatureCard
  icon={Cloud}
  iconColor="text-[#52B788]"  // Moss green for emphasis
  title="Serverless"
  variant="moss"
/>

// ✅ GOOD - Different features get different brand colors
<FeatureCard icon={Zap} iconColor="text-[#74C69D]" />  // Sage
<FeatureCard icon={Shield} iconColor="text-[#FFB700]" />  // Gold
```

**Approved Brand Colors for Icons:**
- `text-[#52B788]` - Moss green (primary)
- `text-[#74C69D]` - Sage green (secondary)
- `text-[#FFB700]` - Gold (accent)
- `text-white` - White (on dark backgrounds)

### Rule 4: Never Use Backgrounds or Borders

Icons should be clean and minimal - no backgrounds, no borders.

```tsx
// ❌ BAD - Don't add backgrounds
<div className="bg-blue-500 p-2 rounded">
  <Cloud className="w-5 h-5" />
</div>

// ❌ BAD - Don't add borders
<Cloud className="w-5 h-5 border border-white rounded-full p-2" />

// ✅ GOOD - Clean, no decoration
<Cloud className="w-5 h-5" />

// ✅ GOOD - Container can have bg, icon stays clean
<div className="bg-[#52B788]/10 p-4 rounded-xl">
  <Cloud className="w-8 h-8 text-[#52B788]" />
  <h3>Feature Title</h3>
</div>
```

---

## 📏 Sizing Guidelines

### Size Scale

Use consistent sizes across the system:

| Size | Class | Use Case |
|------|-------|----------|
| 12px | `w-3 h-3` | Inline with small text, badges |
| 16px | `w-4 h-4` | Inline with body text, alerts |
| 20px | `w-5 h-5` | Buttons, navigation |
| 24px | `w-6 h-6` | Emphasized elements |
| 32px | `w-8 h-8` | Feature cards, large UI |
| 48px | `w-12 h-12` | Hero sections, marketing |

### Examples

```tsx
// Small - Inline with text
<span className="text-sm">
  <Info className="w-3 h-3 inline mr-1" />
  Learn more
</span>

// Medium - Buttons
<Button>
  <Plus className="w-5 h-5 mr-2" />
  Add Item
</Button>

// Large - Feature cards
<FeatureCard icon={Cloud} /> {/* Uses w-8 h-8 internally */}

// Extra Large - Hero sections
<div className="hero">
  <Sparkles className="w-12 h-12 mb-4" />
  <h1>New Feature</h1>
</div>
```

---

## 🎯 Usage Patterns

### Pattern 1: Alerts & Messages

Always use semantic icons that match the message type.

```tsx
// Success
<Alert variant="success">
  <CheckCircle className="w-4 h-4" />
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Operation completed</AlertDescription>
</Alert>

// Error
<Alert variant="destructive">
  <XCircle className="w-4 h-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong</AlertDescription>
</Alert>

// Warning
<Alert variant="warning">
  <AlertTriangle className="w-4 h-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Please review</AlertDescription>
</Alert>

// Info
<Alert variant="info">
  <Info className="w-4 h-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>Please note</AlertDescription>
</Alert>
```

### Pattern 2: Buttons with Icons

Icons in buttons should be subtle and support the text.

```tsx
// Leading icon
<Button>
  <Plus className="w-4 h-4 mr-2" />
  Create New
</Button>

// Trailing icon
<Button variant="outline">
  Learn More
  <ArrowRight className="w-4 h-4 ml-2" />
</Button>

// Icon only (with aria-label)
<Button size="icon" aria-label="Close">
  <X className="w-5 h-5" />
</Button>
```

### Pattern 3: Feature Cards (Marketing)

Icons here can use brand colors for emphasis.

```tsx
<FeatureCard
  icon={Cloud}
  iconColor="text-[#52B788]"
  title="Serverless Inference"
  description="Deploy without infrastructure"
  variant="moss"
/>

// Icon is larger (w-8 h-8) and uses brand color
// Matches the card's theme color
```

### Pattern 4: Status Indicators

Use consistent icons for status across the system.

```tsx
// Active status
<Badge variant="success">
  <CheckCircle className="w-3 h-3 mr-1" />
  Active
</Badge>

// Pending status
<Badge variant="warning">
  <Clock className="w-3 h-3 mr-1" />
  Pending
</Badge>

// Failed status
<Badge variant="destructive">
  <XCircle className="w-3 h-3 mr-1" />
  Failed
</Badge>
```

### Pattern 5: Navigation

Clear, consistent navigation icons.

```tsx
// Primary navigation
<nav>
  <Button variant="ghost">
    <Home className="w-5 h-5 mr-2" />
    Dashboard
  </Button>
  <Button variant="ghost">
    <Database className="w-5 h-5 mr-2" />
    Models
  </Button>
  <Button variant="ghost">
    <Settings className="w-5 h-5 mr-2" />
    Settings
  </Button>
</nav>

// Breadcrumb
<div className="flex items-center gap-2">
  <Home className="w-4 h-4" />
  <ChevronRight className="w-4 h-4 text-muted-foreground" />
  <span>Products</span>
</div>
```

---

## 🚫 Common Mistakes

### ❌ Don't: Use decorative icons

```tsx
// ❌ BAD - Icon doesn't add meaning
<h1>
  <Sparkles className="w-6 h-6" />
  Welcome
  <Sparkles className="w-6 h-6" />
</h1>

// ✅ GOOD - Icon has semantic meaning
<Alert variant="info">
  <Info className="w-4 h-4" />
  <AlertTitle>Welcome</AlertTitle>
</Alert>
```

### ❌ Don't: Mix icon styles

```tsx
// ❌ BAD - Inconsistent icons for same meaning
<Alert variant="success">
  <CheckCircle />  // One page uses CheckCircle
</Alert>

<Alert variant="success">
  <Check />  // Another page uses Check
</Alert>

// ✅ GOOD - Consistent icon usage
// Always use CheckCircle for success across the system
```

### ❌ Don't: Add arbitrary colors

```tsx
// ❌ BAD - Random colors
<Cloud className="w-8 h-8 text-purple-500" />
<Zap className="w-8 h-8 text-pink-400" />

// ✅ GOOD - Brand colors only
<Cloud className="w-8 h-8 text-[#52B788]" />
<Zap className="w-8 h-8 text-[#74C69D]" />
```

### ❌ Don't: Wrap icons unnecessarily

```tsx
// ❌ BAD - Unnecessary wrappers
<div className="icon-wrapper bg-blue-500 rounded-full p-3">
  <Cloud className="w-5 h-5" />
</div>

// ✅ GOOD - Clean, minimal
<Cloud className="w-5 h-5" />
```

---

## 📋 Icon Checklist

Before using an icon, ask:

- [ ] Does this icon serve a functional purpose?
- [ ] Am I using the standard icon for this purpose?
- [ ] Is the icon inheriting the correct text color?
- [ ] Is the size appropriate for the context?
- [ ] Have I avoided adding backgrounds or borders?
- [ ] Is this icon consistent with other uses in the system?

---

## 🎨 Brand Color Reference

When icons need emphasis (marketing contexts only):

```tsx
// Moss green - Primary features
<Cloud className="text-[#52B788]" />

// Sage green - Secondary features
<Zap className="text-[#74C69D]" />

// Gold - Premium/special features
<Star className="text-[#FFB700]" />

// Earth tone - Stability/foundation
<Shield className="text-[#2D6A4F]" />

// White - On dark backgrounds
<Icon className="text-white" />
```

---

## 💡 Pro Tips

### Tip 1: Use inline icons sparingly

```tsx
// ✅ GOOD - Icon adds clarity
<p>
  <Info className="w-4 h-4 inline mr-1" />
  Session expires in 5 minutes
</p>

// ❌ BAD - Icon is redundant
<p>
  <FileText className="w-4 h-4 inline mr-1" />
  This is a document that contains text
</p>
```

### Tip 2: Align icons with text baseline

```tsx
// ✅ GOOD - Vertically centered
<div className="flex items-center gap-2">
  <Cloud className="w-5 h-5" />
  <span>Serverless</span>
</div>

// ❌ BAD - Misaligned
<div>
  <Cloud className="w-5 h-5" />
  <span>Serverless</span>
</div>
```

### Tip 3: Animate sparingly

```tsx
// ✅ GOOD - Loading spinner
<Loader2 className="w-5 h-5 animate-spin" />

// ❌ BAD - Unnecessary animation
<Cloud className="w-5 h-5 animate-bounce" />
```

---

## 📦 Quick Import Reference

```tsx
// Essential icons - import these most often
import {
  // Actions
  X, Plus, Search, Settings, Menu,
  
  // Status
  CheckCircle, XCircle, AlertTriangle, Info,
  
  // Navigation
  ArrowRight, ArrowLeft, ChevronDown, ChevronUp,
  
  // Features (Marketing)
  Cloud, Zap, Shield, Database, Bot, Server,
  
  // Loading
  Loader2,
} from 'lucide-react'
```

---

## ✅ Summary

**Icons in Berget Design System should be:**
- ✅ Monochrome (inherit text color)
- ✅ Functional (serve a purpose)
- ✅ Consistent (same icon = same meaning)
- ✅ Minimal (no borders, no backgrounds)
- ✅ Appropriately sized (use size scale)
- ✅ Contextual (match semantic colors in alerts)

**Icons should NOT be:**
- ❌ Decorative
- ❌ Colorful (except approved brand colors in marketing)
- ❌ Wrapped in backgrounds
- ❌ Inconsistently sized
- ❌ Used just to "make it pretty"

---

**Remember:** Icons complement text, they don't compete with it. When in doubt, leave it out.
