# גייטקיפ – Astro SSG Frontend

פרויקט Astro שמייצר HTML סטטי מלא מקבצי JSON של Lovable.

## ארכיטקטורה

```
Lovable (CMS)          →    JSON Files    →    Astro (SSG)    →    Static HTML
עריכה דרך prompts    public/api/pages/     Build-time render     100% SEO
```

## התקנה

```bash
cd astro-frontend
npm install
```

## פיתוח

```bash
npm run dev      # שרת פיתוח מקומי
npm run build    # בניית אתר סטטי
npm run preview  # צפייה בבנייה
```

## מבנה הקבצים

```
astro-frontend/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro         # Layout בסיסי - <head>, header, footer
│   │   └── ServicePageLayout.astro  # Layout לדפי שירות עם breadcrumbs
│   ├── components/
│   │   ├── Header.astro             # ניווט desktop + mobile drawer
│   │   ├── Footer.astro             # פוטר עם לינקים
│   │   ├── Breadcrumbs.astro        # breadcrumbs + JSON-LD schema
│   │   └── FloatingWhatsApp.astro   # כפתור WhatsApp צף
│   ├── pages/
│   │   ├── index.astro              # דף הבית
│   │   ├── pricing.astro            # מחירון
│   │   ├── installation.astro       # התקנה
│   │   ├── solar-fence.astro        # גדר סולארית
│   │   ├── why-electric-fence.astro # למה גדר חשמלית
│   │   ├── home-solutions.astro     # פתרונות לבית
│   │   ├── service-areas.astro      # אזורי שירות
│   │   ├── 404.astro                # עמוד שגיאה
│   │   └── blog/
│   │       ├── index.astro                      # רשימת מאמרים
│   │       ├── boar_history_israel.astro         # מאמר חזירי בר
│   │       └── electrical_fence_technology.astro # מאמר טכנולוגיה
│   └── styles/
│       └── global.css               # CSS + Tailwind (זהה ל-Lovable)
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## עקרונות SEO

| עיקרון | מימוש |
|--------|-------|
| תוכן ב-HTML | כל הטקסט נבנה ב-build time, גלוי ב-View Source |
| Canonical URLs | HTTPS, non-www, ללא trailing slash |
| Structured Data | JSON-LD ישירות ב-`<head>` (לא דרך JS) |
| Breadcrumbs | BreadcrumbList schema + HTML ויזואלי |
| Internal Links | כל דף מכיל קישורים פנימיים |
| Meta Tags | title, description, keywords, robots ב-HTML |
| Open Graph | og:title, og:description, og:url |
| Sitemap | נוצר אוטומטית עם @astrojs/sitemap |
| Redirects | 301 redirect מוגדר ב-astro.config.mjs |

## סנכרון תוכן

### Option A: Import ישיר (מומלץ ל-monorepo)
הדפים מייבאים את ה-JSON ישירות מ-`public/api/pages/`:
```astro
import pageData from '../../../public/api/pages/pricing.json';
```

### Option B: סנכרון ידני (עבור repos נפרדים)
```bash
npm run sync-content
```
מעתיק את קבצי ה-JSON לתיקייה מקומית.

## הוספת דף חדש

1. **ב-Lovable**: צור קובץ JSON חדש ב-`public/api/pages/new-page.json`
2. **ב-Astro**: צור `src/pages/new-page.astro`:
```astro
---
import ServicePageLayout from '../layouts/ServicePageLayout.astro';
import pageData from '../../../public/api/pages/new-page.json';
const page = pageData;
---
<ServicePageLayout
  title={page.seo.title}
  description={page.seo.description}
  canonical={page.seo.canonical}
  breadcrumbs={page.breadcrumbs}
  structuredData={page.structuredData}
>
  <h1>{page.h1}</h1>
  <!-- Render sections from page.sections -->
</ServicePageLayout>
```
3. עדכן את `_manifest.json` עם הדף החדש

## העיצוב

העיצוב **זהה לחלוטין** ל-Lovable:
- אותו `global.css` עם CSS variables
- אותו `tailwind.config` עם design tokens
- אותן קלאסים של Tailwind
- RTL, פונט Heebo, ערכת צבעים Dark Forest Green

## Deploy

### Vercel
```bash
npx vercel --prod
```

### Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### Cloudflare Pages
חבר את ה-repo ל-Cloudflare Pages עם:
- Build command: `npm run build`
- Output directory: `dist`

## אסט (נכסים סטטיים)

העתק את הקבצים הבאים מ-Lovable ל-`public/`:
- `logo.png` (מ-`src/assets/logo.png`)
- `favicon.svg`, `favicon.ico`, `favicon-96x96.png`
- `apple-touch-icon.png`
- `web-app-manifest-*.png`
- `site.webmanifest`
- `robots.txt`
