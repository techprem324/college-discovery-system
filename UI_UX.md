# Design System & UI/UX Specifications — CampusIQ

## 1. Design Tokens & Color Palette

```typescript
export fontTokens = {
  fontFamily: 'Inter, sans-serif',
};

export const themeExtensions = {
  colors: {
    brand: {
      50: '#F0F7FF',
      100: '#E0EFFF',
      500: '#0066FF',
      600: '#0052CC',
      900: '#001A40',
    },
    surface: {
      subtle: '#F8FAFC',
      card: '#FFFFFF',
      border: '#E2E8F0',
      dark: '#0F172A',
    },
    metric: {
      safe: '#10B981',
      target: '#F59E0B',
      dream: '#8B5CF6',
      highlight: '#FEF3C7',
    }
  },
  borderRadius: {
    'subtle': '6px',
    'standard': '10px',
    'prominent': '16px',
  }
};
```

---

## 2. Micro-Animations & Interactivity

- **Compare Tray Slide-Up**: Floating drawer transitions smoothly onto the viewport using `animate-slide-up` with cubic-bezier timing.
- **Card Hover Effects**: College cards elevate with subtle shadow transitions (`hover:-translate-y-1 hover:shadow-xl`).
- **Metric Highlight Cell**: Winning metric cells in the comparison table are rendered with positive emerald badges and soft borders (`bg-emerald-50 border-emerald-300`).

---

## 3. Responsive Breakpoints

- **Desktop (> 1024px)**: 3-column listing layout with sticky sidebar filter panel, full side-by-side comparison grid, fixed bottom floating tray.
- **Mobile (< 768px)**: 1-column card stack, slide-over filter drawer, mobile bottom bar navigation (`MobileNav`).

---

## 4. Accessibility Guidelines (WCAG 2.1 AA)

- All form controls feature explicit Zod validation error labels.
- Interactive elements possess clear focus ring outlines (`focus-visible:ring-2 focus-visible:ring-brand-500`).
- Color contrast ratios exceed 4.5:1 for body copy and 3:1 for large display headers.
