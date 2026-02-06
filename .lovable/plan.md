# Astro SSG Migration Plan — Full SEO + Design Parity

## Architecture Overview

```
JSON Files (CMS) → Astro SSG → Static HTML + React Islands
```

- **Static HTML**: All content (headings, text, FAQs, lists) rendered at build time
- **React Islands**: Only interactive elements (calculators, dynamic testimonials)
- **CSS**: Shared design system via `global.css` + `tailwind.config.mjs`

---

## Component Classification

### ✅ STATIC (Astro-only, pure HTML at build)

| Component | Source | Notes |
|-----------|--------|-------|
| Header (desktop nav) | `Header.astro` | ✅ Done - vanilla JS for mobile drawer |
| Footer | `Footer.astro` | ✅ Done |
| Breadcrumbs | `Breadcrumbs.astro` | ✅ Done |
| FloatingWhatsApp | `FloatingWhatsApp.astro` | ✅ Done |
| HeroSection (agri) | `index.json` | Static HTML, parallax as optional CSS/JS |
| HomeHeroSection (residential) | `home-solutions.json` | Static HTML |
| TrustReasons | `index.json → trust` | Static cards, CSS hover effects |
| AboutSection | `index.json → about` | Static team/values/story/gallery |
| UrgencyBanner | `index.json → urgency` | Static CTA banner |
| HomeWhySection | `home-solutions.json → benefits` | Static benefit cards |
| HomeHowItWorks | `home-solutions.json → how-it-works` | Static step cards |
| All service pages | Respective JSON files | Static HTML content |
| Blog articles | Blog JSON files | Static HTML content |
| FAQ sections | All JSON files | Static `<details>` elements |
| Internal links | All JSON files | Static anchor links |

### ⚛️ REACT ISLANDS (client-side interactive)

| Component | Why React? | Hydration |
|-----------|------------|-----------|
| PriceEstimator | Supabase writes, multi-step form, validation, toast | `client:visible` |
| HomePriceCalculator | Same for residential | `client:visible` |
| Testimonials | Fetches random data from Supabase | `client:visible` |

### 🔀 HYBRID (Static content + CSS animation)

| Element | Static Part | Enhancement |
|---------|------------|-------------|
| Hero parallax | Static `<img>` + content | Vanilla JS scroll listener |
| Trust card hover | All content always visible | CSS `transition-all duration-500` |
| Phone bounce icon | Static SVG icon | CSS `animate-bounce-subtle` |
| Mobile nav drawer | Static nav in HTML | Vanilla JS toggle |
| FAQ chevron | Static `<details><summary>` | CSS `group-open:rotate-180` |

---

## Page Implementation Status

| Page | Status | React Islands |
|------|--------|---------------|
| `/` (agri home) | ⬜ Needs full redesign | PriceEstimator, Testimonials |
| `/home-solutions` | ⬜ Needs full redesign | HomePriceCalculator |
| `/pricing` | ⬜ Needs full redesign | None |
| `/installation` | ⬜ Needs full redesign | None |
| `/solar-fence` | ⬜ Needs full redesign | None |
| `/why-electric-fence` | ⬜ Needs full redesign | Testimonials (optional) |
| `/service-areas` | ✅ Done | None |
| `/blog` | ⬜ Needs full redesign | None |
| `/blog/boar_history_israel` | ⬜ Basic | None |
| `/blog/electrical_fence_technology` | ⬜ Basic | None |
| `/404` | ✅ Done | None |

---

## SEO Checklist (per page)

- [x] `<title>` from JSON `seo.title`
- [x] `<meta description>` from JSON `seo.description`
- [x] `<link rel="canonical">` no trailing slash
- [x] Open Graph + Twitter tags
- [x] JSON-LD structured data
- [x] Single `<h1>` per page
- [x] All FAQ Q&A in raw HTML source
- [x] All internal links in HTML source
- [x] Semantic HTML elements

## Design Parity Checklist

- [x] Dark Forest Green theme (HSL variables)
- [x] Heebo font family
- [x] RTL direction
- [x] `btn-cta-glow` gradient buttons
- [x] `card-forest` card styling
- [x] `animate-bounce-subtle` phone animation
- [x] Trust card hover/expand effects
- [x] Gallery grid with hover zoom
- [x] Urgency banner styling
- [x] FAQ details/summary with chevron
- [x] Responsive grids
