# Pure CSS Variables Migration Guide

**Status**: All Tailwind CSS dependencies have been removed. The site now uses pure CSS custom properties (variables) defined in `app/globals.css`.

## Overview

The entire styling system has been converted from Tailwind CSS utility classes to pure CSS custom properties. This gives you:
- ✅ **Full control** over styling without framework constraints
- ✅ **Smaller bundle** (no Tailwind framework)
- ✅ **Faster build times** (no Tailwind processing)
- ✅ **Clean HTML** (fewer utility classes in markup)
- ✅ **Easy customization** (just change CSS variables)

## Available CSS Variables

### Colors

```css
/* Brand Colors */
--primary-blue: #0A2E50;
--primary-blue-light: #1e69a0;
--primary-blue-dark: #062a40;

--secondary-green: #7BC043;
--secondary-green-light: #95c861;
--secondary-green-dark: #6aa833;

--tertiary-teal: #0F96A0;
--tertiary-teal-light: #57c3d3;
--tertiary-teal-dark: #0b5f70;

--accent-orange: #E84427;
--accent-orange-light: #f48453;
--accent-orange-dark: #c9381f;

--neutral-slate: #4492B0;
--neutral-white: #FFFFFF;
--neutral-black: #000000;

/* Grayscale */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
```

### Spacing

```css
--spacing-0: 0;
--spacing-1: 0.25rem;
--spacing-2: 0.5rem;
--spacing-3: 0.75rem;
--spacing-4: 1rem;
--spacing-6: 1.5rem;
--spacing-8: 2rem;
--spacing-12: 3rem;
--spacing-16: 4rem;
--spacing-20: 5rem;
--spacing-24: 6rem;
```

### Typography

```css
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

/* Font Sizes */
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;
--font-size-4xl: 2.25rem;
--font-size-5xl: 3rem;
--font-size-6xl: 3.75rem;

/* Font Weights */
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Border Radius

```css
--radius-none: 0;
--radius-sm: 0.125rem;
--radius-base: 0.25rem;
--radius-md: 0.375rem;
--radius-lg: 0.5rem;
--radius-xl: 0.75rem;
--radius-2xl: 1rem;
--radius-3xl: 1.5rem;
--radius-full: 9999px;
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### Transitions

```css
--transition-fast: 150ms ease-out;
--transition-base: 300ms ease-out;
--transition-slow: 500ms ease-out;
```

## Pre-built CSS Classes

Instead of Tailwind utility classes, use these pre-built classes in your HTML:

### Text Utilities

```html
<p class="text-3xl font-bold text-primary">Large Primary Heading</p>
<p class="text-sm text-gray-600">Small gray text</p>
<p class="text-lg font-semibold text-accent">Orange accent text</p>
```

### Background Utilities

```html
<div class="bg-primary">Blue background</div>
<div class="bg-secondary">Green background</div>
<div class="bg-primary-gradient">Gradient background</div>
```

### Spacing Utilities

```html
<div class="p-6">Padding all sides</div>
<div class="px-8 py-4">Horizontal padding 8, vertical padding 4</div>
<div class="mb-6">Margin bottom</div>
<div class="py-12">Vertical padding</div>
```

### Layout Utilities

```html
<div class="flex items-center justify-between gap-4">
  <span>Item 1</span>
  <span>Item 2</span>
</div>

<div class="flex flex-col gap-6">
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

### Button Utilities

```html
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>
<button class="btn-accent">Accent Button</button>
```

### Card Utilities

```html
<div class="card">
  <h3 class="text-2xl font-bold text-primary mb-4">Card Title</h3>
  <p class="text-gray-600">Card content</p>
</div>
```

## How to Use CSS Variables in Custom CSS

For any custom styling in component files, use the CSS variables:

```css
/* In a component's style block */
.my-custom-element {
  background-color: var(--primary-blue);
  color: var(--neutral-white);
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  font-size: var(--font-size-lg);
  transition: all var(--transition-base);
}

.my-custom-element:hover {
  background-color: var(--primary-blue-light);
  transform: translateY(-2px);
}
```

## Migration from Tailwind Classes

### Before (Tailwind)
```jsx
export default function Button() {
  return (
    <button className="px-6 py-3 bg-primary-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-primary-blue-700 transition-all duration-300">
      Click me
    </button>
  );
}
```

### After (CSS Variables)
```jsx
export default function Button() {
  return (
    <button className="btn-primary">
      Click me
    </button>
  );
}
```

Or with custom styling:

```jsx
import styles from './Button.module.css';

export default function Button() {
  return (
    <button className={styles.button}>
      Click me
    </button>
  );
}
```

```css
/* Button.module.css */
.button {
  padding: var(--spacing-3) var(--spacing-6);
  background-color: var(--primary-blue);
  color: var(--neutral-white);
  border-radius: var(--radius-lg);
  font-weight: var(--font-weight-semibold);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: var(--primary-blue-light);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

## Responsive Design

Use CSS media queries instead of Tailwind breakpoints:

```css
/* Mobile first */
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-4);
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-6);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-8);
  }
}
```

## Dark Mode

Dark mode is handled via CSS media queries. Variables automatically adjust:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --gray-50: #1f2937;
    --gray-100: #111827;
    /* ... other adjustments ... */
  }
}
```

To add dark mode styles to a component:

```css
.card {
  background-color: var(--neutral-white);
  color: var(--gray-900);
}

@media (prefers-color-scheme: dark) {
  .card {
    background-color: var(--gray-800);
    color: var(--gray-100);
  }
}
```

## Customizing Variables

To change a color globally, edit `app/globals.css`:

```css
:root {
  --primary-blue: #0A2E50;  /* Change this value */
  /* All components using var(--primary-blue) update automatically */
}
```

## Available Pre-built Animations

```css
.animate-fade-in       /* Fade in */
.animate-slide-up      /* Slide up and fade in */
.animate-slide-in-left /* Slide in from left */
.animate-slide-in-right /* Slide in from right */
.animate-scale-in      /* Scale in */
.animate-pulse-slow    /* Slow pulse */
.animate-float         /* Floating animation */
```

## Package Dependencies Removed

- ✅ **Tailwind CSS** removed from `package.json`
- ✅ **PostCSS Tailwind plugin** configuration simplified
- ✅ **Build times** significantly faster

## Summary

The styling system is now completely decoupled from Tailwind CSS. All styling is handled through:

1. **CSS Custom Properties (Variables)** - For colors, spacing, typography, etc.
2. **Pre-built CSS Classes** - For common patterns (buttons, cards, layouts)
3. **CSS Modules** - For component-specific styling
4. **Inline Styles** - For dynamic styling based on props

This gives you maximum flexibility while keeping the codebase clean and maintainable.
