# Design Brief — Momo Shop Showcase

## Tone & Purpose
Business-to-business pitch website for local momo shops. Demonstrates digital presence value to shop owners. Warm, authentic, food-forward, energetic.

## Differentiation
Full-page hero with food photography + bold geometric typography. Card-based menu system with dietary badges. Testimonial proof visible above fold. Repeating CTAs (header + hero + sections). Premium food retail aesthetic that converts shop owners.

## Color Palette

| Name | OKLCH | Purpose |
|------|-------|---------|
| Primary (Terracotta) | 0.55 0.22 25 | Spice-forward, appetizing, main branding |
| Accent (Golden) | 0.65 0.22 55 | Food photography complement, highlights |
| Secondary (Warm Cream) | 0.95 0.04 70 | Food backgrounds, premium feel |
| Muted (Beige) | 0.92 0.01 70 | Secondary sections, breathing room |
| Foreground (Deep Brown) | 0.2 0.02 32 | Text, high contrast on cream |

## Typography

| Role | Font | Scale | Usage |
|------|------|-------|-------|
| Display | Bricolage Grotesque | 3.5xl–5xl | Headings, hero tagline, section titles |
| Body | General Sans | 1rem–1.25rem | Menu descriptions, testimonials, body text |
| Mono | System Mono | 0.875rem | Code (if needed) |

## Structural Zones

| Zone | Background | Treatment | Purpose |
|------|-----------|-----------|---------|
| Header | `bg-secondary` | `border-b border-border` | Sticky, logo + nav + CTA |
| Hero | Image overlay | Text on darkened image | Full-width hero with CTA |
| Menu | `bg-background` | Card grid, white cards with `shadow-card` | Category tabs, item cards |
| Reviews | `bg-muted` | Card layout, `shadow-elevated` | Testimonials with stars |
| Footer | `bg-muted` | `border-t border-border` | Contact form, hours, location |

## Component Patterns
- **Button Primary**: `bg-primary text-primary-foreground` with hover opacity
- **Button Secondary**: `bg-secondary text-secondary-foreground` with outline
- **Card**: `bg-card shadow-card rounded-lg` with `p-4` or `p-6`
- **Badge**: `bg-accent/10 text-accent rounded-full` for dietary labels (Veg/Vegan/Spicy)
- **Input**: `bg-input border border-border rounded-lg` with focus ring

## Motion & Transitions
- **Smooth transitions**: All interactive elements use `transition-smooth` (0.3s cubic-bezier)
- **Hover states**: Buttons scale slightly (98%), cards lift shadow on hover
- **Entrance animations**: Staggered card reveals on scroll (optional, defer to frontend)

## Responsive Breakpoints
- Mobile-first design
- `sm: 640px` — tablet adjustments
- `md: 768px` — desktop layout
- `lg: 1024px` — wider layouts

## Dark Mode
Full dark mode support with warm undertones. Primary becomes `0.75 0.22 25`, backgrounds darken to `0.15 0.01 25`. Accent adjusts to `0.72 0.22 55` for readability.

## Constraints & Anti-Patterns
- NO generic food site clichés (orange/green, Pinterest filters, calendar icons)
- NO scattered animations or bouncy effects
- NO flat white cards on flat white background; always use border or shadow
- NO oversized buttons or oversaturated colors
- All text contrast AA+ compliant

## Signature Detail
Geometric, bold serif-free typography that speaks to food shop owners directly. Warm terracotta primary against cream backgrounds creates appetite and trust simultaneously. Food photography is hero, not decoration.
