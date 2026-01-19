# Updated Color System Guide

## Overview
Your website's color palette has been updated to use a modern, tech-forward design system. All components now support the new color variables.

## Color Palette

### Primary - Deep Circuit Blue
- **Hex:** `#0A2E50`
- **Usage:** Navigation bars, primary buttons, hero text
- **Tailwind Classes:** `text-primary-blue-*`, `bg-primary-blue-*`, `border-primary-blue-*`
- **CSS Variable:** `rgb(var(--primary-deep-circuit-blue))`

### Secondary - Bio-Digital Green
- **Hex:** `#7BC043`
- **Usage:** Secondary CTAs, success states, growth icons
- **Tailwind Classes:** `text-secondary-green-*`, `bg-secondary-green-*`, `border-secondary-green-*`
- **CSS Variable:** `rgb(var(--secondary-bio-digital-green))`

### Tertiary - Data Stream Teal
- **Hex:** `#0F96A0`
- **Usage:** Accents, hover states, graphic overlays
- **Tailwind Classes:** `text-tertiary-teal-*`, `bg-tertiary-teal-*`, `border-tertiary-teal-*`
- **CSS Variable:** `rgb(var(--tertiary-data-stream-teal))`

### Accent - Innovation Orange
- **Hex:** `#E84427`
- **Usage:** High-attention alerts, "Book a Demo" buttons
- **Tailwind Classes:** `text-accent-orange-*`, `bg-accent-orange-*`, `border-accent-orange-*`
- **CSS Variable:** `rgb(var(--accent-innovation-orange))`

### Neutral - Slate Grey
- **Hex:** `#4492B0`
- **Usage:** Subheaders, descriptive text, borders
- **Tailwind Classes:** `text-neutral-slate-*`, `bg-neutral-slate-*`, `border-neutral-slate-*`
- **CSS Variable:** `rgb(var(--neutral-dark-slate-grey))`

### Neutral - Stark White
- **Hex:** `#FFFFFF`
- **Usage:** Backgrounds, clean whitespace
- **Tailwind Classes:** Standard Tailwind white

---

## How to Use in Components

### Method 1: Tailwind Classes (Recommended)

```tsx
// Buttons using primary color
<button className="bg-primary-blue-500 hover:bg-primary-blue-600 text-white px-6 py-2 rounded-lg">
  Primary Action
</button>

// Secondary action
<button className="bg-secondary-green-500 hover:bg-secondary-green-600 text-white px-6 py-2 rounded-lg">
  Success Action
</button>

// Text colors
<h1 className="text-primary-blue-500 text-4xl font-bold">Heading</h1>
<p className="text-neutral-slate-700 text-base">Descriptive text</p>

// Borders
<div className="border-2 border-tertiary-teal-500 rounded-lg p-4">
  Content with teal border
</div>

// Gradients (predefined)
<div className="bg-primary-gradient text-white p-8 rounded-lg">
  Gradient background
</div>
```

### Method 2: CSS Variables

```tsx
// Using in inline styles
<div style={{ 
  color: 'rgb(var(--primary-deep-circuit-blue))',
  backgroundColor: 'rgb(var(--accent-innovation-orange))'
}}>
  Custom styled content
</div>

// Using in custom CSS
export const MyComponent = styled.div`
  color: rgb(var(--primary-deep-circuit-blue));
  border: 2px solid rgb(var(--tertiary-data-stream-teal));
`;
```

### Method 3: Utility Classes from globals.css

```tsx
// Available utility classes
<div className="text-primary">Primary color text</div>
<div className="text-secondary">Secondary color text</div>
<div className="text-tertiary">Tertiary color text</div>
<div className="text-accent">Accent color text</div>

<div className="bg-primary-gradient">Primary gradient</div>
<div className="bg-secondary-gradient">Secondary gradient</div>
<div className="bg-tertiary-gradient">Tertiary gradient</div>
<div className="bg-accent-gradient">Accent gradient</div>

<div className="border-primary border-2">Primary border</div>
<div className="border-secondary border-2">Secondary border</div>
<div className="border-tertiary border-2">Tertiary border</div>
<div className="border-accent border-2">Accent border</div>
```

---

## Color Shade Variations

Each color has multiple shades (50, 100, 200, 300, ... 900) for flexibility:

```tsx
// Primary Blue shades
text-primary-blue-50   // Lightest
text-primary-blue-100
text-primary-blue-200
text-primary-blue-500  // Main color
text-primary-blue-700
text-primary-blue-900  // Darkest

// Same for secondary, tertiary, accent, neutral
```

---

## Updated Files

### 1. `globals.css`
- Added CSS variables for all brand colors
- Added gradient utility classes
- Added text/border color utilities

### 2. `tailwind.config.js`
- Extended Tailwind color palette with new colors
- All colors have 50-900 shade variants
- Maintained legacy colors for backward compatibility

### 3. All Components
- Ready to use new color system
- Tailwind classes automatically available

---

## Migration Guide for Existing Code

### Before (Old Colors)
```tsx
<button className="bg-purple-600 hover:bg-purple-700">Click me</button>
<h2 className="text-indigo-500">Heading</h2>
```

### After (New Colors)
```tsx
<button className="bg-primary-blue-600 hover:bg-primary-blue-700">Click me</button>
<h2 className="text-primary-blue-500">Heading</h2>
```

### Quick Replace Map
| Old | New |
|-----|-----|
| `purple-*` | `primary-blue-*` |
| `indigo-*` | `primary-blue-*` |
| `blue-*` | `primary-blue-*` or `tertiary-teal-*` |
| `green-*` | `secondary-green-*` |
| `gray-*` / `slate-*` | `neutral-slate-*` |
| Gold/Orange highlights | `accent-orange-*` |

---

## Recommended Color Combinations

### For Buttons & CTAs
```tsx
// Primary action (Dark)
<button className="bg-primary-blue-600 hover:bg-primary-blue-700 text-white">
  Primary
</button>

// Secondary action (Green)
<button className="bg-secondary-green-500 hover:bg-secondary-green-600 text-white">
  Secondary
</button>

// Alert/Important (Orange)
<button className="bg-accent-orange-600 hover:bg-accent-orange-700 text-white">
  Book a Demo
</button>
```

### For Cards & Containers
```tsx
// Light background card
<div className="bg-gray-50 dark:bg-neutral-slate-900 border border-neutral-slate-200 dark:border-neutral-slate-700">

// Colored accent card
<div className="bg-primary-blue-50 dark:bg-primary-blue-900/30 border border-primary-blue-200 dark:border-primary-blue-800">

// With gradient
<div className="bg-gradient-to-r from-primary-blue-500 to-tertiary-teal-500 text-white">
```

### For Text
```tsx
// Headings
<h1 className="text-primary-blue-900">Main Heading</h1>

// Subheadings
<h2 className="text-neutral-slate-700">Subheading</h2>

// Body text
<p className="text-neutral-slate-600">Regular text</p>

// Accent text
<span className="text-accent-orange-600 font-semibold">Important</span>
```

---

## Testing Your Implementation

### Check Tailwind Classes
```bash
# Build the project to ensure Tailwind compiles new colors
npm run build

# Look for these in compiled CSS:
# .bg-primary-blue-500
# .text-secondary-green-600
# .border-tertiary-teal-700
```

### Visual Testing Checklist
- [ ] Navigation bar uses primary-blue
- [ ] Buttons use appropriate colors
- [ ] Hover states work correctly
- [ ] Gradients render smoothly
- [ ] Text contrast is accessible
- [ ] Dark mode colors look good
- [ ] Mobile appearance correct

---

## CSS Variables Reference

Add these to your custom CSS as needed:

```css
/* Use in any CSS */
div {
  color: rgb(var(--primary-deep-circuit-blue));
  background: rgb(var(--secondary-bio-digital-green));
  border-color: rgb(var(--tertiary-data-stream-teal));
}

/* With opacity */
div {
  background-color: rgba(var(--accent-innovation-orange), 0.1);
  border-color: rgba(var(--neutral-dark-slate-grey), 0.5);
}
```

---

## Dark Mode Support

All colors automatically adjust for dark mode via Tailwind:

```tsx
// Automatically switches colors in light/dark mode
<div className="bg-white dark:bg-slate-900 text-primary-blue-900 dark:text-primary-blue-50">
  Content
</div>
```

---

## Questions?

Refer to:
- **Tailwind Colors:** https://tailwindcss.com/docs/customizing-colors
- **Your Globals CSS:** Check `app/globals.css` for available utilities
- **Tailwind Config:** See `tailwind.config.js` for color definitions

