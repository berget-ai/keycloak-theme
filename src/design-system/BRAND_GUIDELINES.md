# Berget AI Brand Guidelines - Design System Implementation

Detta dokument beskriver hur Berget AI's brand guidelines är implementerade i designsystemet.

## 🎨 Färgpalett

### Primära Färger (från brand-guidelines.md)

```css
/* Bakgrund */
--background: #1A1A1A (0 0% 10%)

/* Primär Grön (Primary Green) */
--berget-moss: #52B788 (151 29% 49%) 
/* Används för: primära knappar, accenter, nyckel-UI-element */

/* Sekundär Grön (Secondary Green) */
--berget-sage: #74C69D (151 33% 62%)
/* Används för: gradienter, sekundära element, hover-states */

/* Accent Guld (Accent Gold) */
--accent: #FFB700 (45 100% 50%)
/* Används sparsamt för: highlights, CTA, speciella element */

/* Berget Stone (vår egen komplettering) */
--berget-stone: #E5DDD5 (45 15% 88%)
/* Används för: ljusa accenter, kontrast mot mörk bakgrund */
```

### Textfärger

```css
/* Primär text */
color: #FFFFFF (100% opacity)

/* Sekundär text */
color: rgba(255, 255, 255, 0.6) (60% opacity)

/* Tertiär text */
color: rgba(255, 255, 255, 0.4) (40% opacity)
```

### Funktionella Färger

```css
--success: #22C55E
--error: #FF0033
--warning: #F59E0B
--info: #3B82F6
```

## 📝 Typografi

### Fonter

**Headings (h1-h6):**
- Font: Ovo (serif)
- Weight: 400 (font-medium i vårt system)
- Letter spacing: -0.04em (vårt system) vs -0.05em (guidelines)
- Features: 'ss01', 'ss02', 'cv01', 'cv02'

**Body Text & UI:**
- Font: DM Sans (sans-serif)
- Features: 'ss01', 'ss02', 'cv01', 'cv02'
- Clean, modern, läsbar

### Font Sizes

Från guidelines:
```
H1: 2.25rem (36px) - font-medium
H2: 1.5rem (24px) - font-medium  
H3: 1.25rem (20px) - font-medium
Body: 1rem (16px)
Small: 0.875rem (14px)
Micro: 0.75rem (12px)
```

## 🎭 Gradienter

### Primär Gradient
```css
background: linear-gradient(to-br, #52B788, #74C69D);
```
**Användning:** Knappar, kort, feature highlights

### Accent Gradient
```css
background: linear-gradient(to-b, #52B788, #74C69D, #FFB700);
```
**Användning:** Hero sections, viktiga UI-element, bakgrunder

## 🖼️ Visuella Effekter

### Grid Pattern
- Storlek: 24px × 24px
- Färg: rgba(229, 221, 213, 0.02) (vita linjer)
- Syfte: Textur och djup utan distraktion

**Implementation:**
```tsx
<GridBackground gridSize={24} opacity={0.02} />
```

### Bokeh Effect
- Mjuka, suddiga cirkulära element
- Opacity: 0.15-0.3
- Användning: Sparsamt, atmosfärisk känsla

**Implementation:**
```tsx
<Card withBokeh>...</Card>
```

### Network Visualization
- Animerade noder och kopplingar
- Representerar AI-kopplingar och dataflöde
- Subtil, stör inte läsbarhet

**Implementation:**
```tsx
<NetworkBackground opacity={0.4} nodeCount={50} />
```

## 🎯 UI-Komponenter

### Cards
```
Border radius: 0.75rem (12px i guidelines) → 1rem (16px i vårt system)
Border: 1px solid rgba(255, 255, 255, 0.1)
Backdrop blur: blur(16px i guidelines) → blur(20px i vårt system)
```

**Hover effects:**
- Slight elevation
- Border brightening
- Subtle transform (-translate-y-1)

### Buttons
```
Border radius: 0.75rem (12px)
Padding: 0.75rem 1.5rem (12px 24px)
```

**Vårt system:**
```
Border radius: 0.75rem → 1rem (xl)
Default padding: h-11 px-5 py-2.5
Small: h-9 px-3
Large: h-12 px-8
```

### Ikoner (Lucide)

**Storlekar:**
- Small: 16px (text-level)
- Medium: 20px (buttons, UI)
- Large: 24px (features, navigation)
- XL: 32px+ (hero, features)

**Stil:**
- Stroke width: 1.5px
- Rounded caps/joins
- Consistent padding

## 🎬 Animationer

### Principer
1. Subtil och målmedveten
2. Snabb och responsiv
3. Smooth easing: cubic-bezier(0.4, 0, 0.2, 1)

### Timing
```css
/* Fast interactions */
duration: 150-200ms

/* Standard transitions */
duration: 200-300ms

/* Emphasis animations */
duration: 300-500ms
```

**Vårt system använder:**
- Button/Card hover: 300ms
- Bokeh float: 20s
- Slide transitions: 500ms

### Motion
- Prefer transforms över opacity
- Konsistent riktning för relaterade element
- Behåll spatial relationships

## ♿ Accessibility (WCAG 2.1 AA)

✅ Kontrast:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum

✅ Interactive elements:
- Tydliga focus states
- Ring-2 ring-offset-2 på fokus

✅ Färg:
- Använd aldrig endast färg för att förmedla mening
- Ikoner + text, inte bara färgkodning

✅ Screen readers:
- Semantisk HTML
- ARIA-attribut där nödvändigt
- Keyboard navigation

## 📐 Mappning: Guidelines → Design System

| Guideline | Design System Implementation |
|-----------|------------------------------|
| Primary Green (#52B788) | `--secondary` (used for CTAs) |
| Secondary Green (#74C69D) | `--accent` |
| Accent Gold (#FFB700) | Används i gradienter |
| Stone (#E5DDD5) | `--primary` (vår tillägg) |
| Ovo (serif) | h1, h2, h3, h4, h5, h6 |
| DM Sans (sans-serif) | body, buttons, UI |
| Grid 24px | GridBackground component |
| Bokeh effect | Card withBokeh prop |
| Network viz | NetworkBackground component |

## 🔄 Avvikelser från Guidelines

### Justerade värden:
1. **Border radius**: 0.75rem → 1rem (rundare för mjukare känsla)
2. **Backdrop blur**: 16px → 20px (mer frostat glas)
3. **Letter spacing**: -0.05em → -0.04em (lite mer andrum)

### Tillägg:
1. **Berget Stone** (#E5DDD5) - ljus accent som komplement
2. **Light theme** - dark + light theme support
3. **Stepper/Wizard** - komplex komponent för multi-step flows

## 📚 Använda Komponenter

```tsx
// Primära färger
<Button variant="primary">    // Moss green #52B788
<Button variant="secondary">  // Sage green #74C69D
<Button variant="default">    // Stone beige #E5DDD5

// Bakgrunder
<GridBackground />            // 24px grid
<GradientBackground variant="berget" />  // Grön gradient
<NetworkBackground />         // Animerat nätverk

// Cards med effekter
<Card variant="glass" withBokeh />

// Marketing
<PricingCards />
<BlogGrid />
<EmailTemplate />
```

## ✅ Brand Compliance Checklist

- [ ] Använder Ovo för alla rubriker
- [ ] Använder DM Sans för all body text
- [ ] Primär grön (#52B788) för huvudsakliga CTAs
- [ ] Grid pattern (24px) på lämpliga bakgrunder
- [ ] Bokeh-effekt används sparsamt (opacity 0.15-0.3)
- [ ] Border radius minst 0.75rem
- [ ] Animationer 150-500ms
- [ ] WCAG 2.1 AA kontrast upprätthålls
- [ ] Focus states på alla interaktiva element
