

## תוכנית לשיפור אינדוקס גוגל

### הבעיה

גוגל מתקשה לאנדקס את כל דפי האתר. ניתוח מעמיק של הקוד חושף שלוש בעיות מרכזיות:

1. **קישורים פנימיים חלשים** - דף הבית הראשי (Index) לא מכיל אף קישור פנימי לדפים אחרים. דפים רבים מקשרים רק ל-3 מתוך 7 דפים.
2. **Sitemap סטטי** - תאריכי `lastmod` קבועים ולא מתעדכנים, מה שמאותת לגוגל שאין שינויים.
3. **SSR Fallback חלקי** - התוכן הסטטי ב-`index.html` חסר קישורים לבלוג ולדף אזורי שירות, וגם ה-SiteNavigationElement schema חסר את הבלוג.

---

### שלב 1: שיפור קישורים פנימיים בדף הבית (הכי קריטי)

דף הבית הראשי (`/`) הוא הדף שגוגל סורק ראשון, אבל הוא לא מכיל אף `<Link>` לדפים הפנימיים. זה הגורם המרכזי לבעיית האינדוקס.

**שינויים:**

- **FAQSection.tsx** - הוספת פסקת סיכום מתחת לאקורדיון עם קישורים טבעיים:
  - "למידע נוסף על **התקנת גדר חשמלית**" (קישור ל-/installation)
  - "ראו את **המחירון המלא**" (קישור ל-/pricing)
  - "למה **גדר חשמלית** עדיפה?" (קישור ל-/why-electric-fence)

- **TrustReasons.tsx** - הוספת שורת קישורים בתחתית הסקציה:
  - "עוד על **תהליך ההתקנה**" (קישור ל-/installation)
  - "**גדר סולארית** לשטחים ללא חשמל" (קישור ל-/solar-fence)
  - "ראו **אזורי שירות**" (קישור ל-/service-areas)

- **AboutSection.tsx** - הוספת שורת קישורים בתחתית:
  - "קראו את **המדריך המקיף** שלנו על חזירי בר" (קישור לבלוג)
  - "**פתרונות לבית פרטי**" (קישור ל-/home-solutions)

### שלב 2: שיפור קישורים פנימיים בדפי השירות

כל דף שירות מכיל סקציית "קישורים נוספים" בתחתית, אבל היא חלקית. נרחיב אותה:

- **Installation.tsx** - הוספת: home-solutions, service-areas, blog
- **SolarFence.tsx** - הוספת: home-solutions, service-areas, blog
- **Pricing.tsx** - הוספת: home-solutions, service-areas, blog
- **WhyElectricFence.tsx** - הוספת: home-solutions, service-areas, blog
- **ServiceAreas.tsx** - הוספת סקציית קישורים: installation, solar-fence, why-electric-fence, home-solutions, blog
- **HomeSolutions.tsx** - הוספת סקציית קישורים (חדשה): installation, solar-fence, pricing, blog

### שלב 3: עדכון SSR Fallback ו-Schema ב-index.html

- **SiteNavigationElement** - הוספת הבלוג ל-Schema:
```text
{
  "@type": "SiteNavigationElement",
  "name": "בלוג: חזירי בר",
  "url": "https://gatekeepisrael.com/wild-boar-electric-fence-protection"
}
```

- **SSR Fallback Content** - הוספת קישור לבלוג ולאזורי שירות בתוך סקציית "השירותים שלנו"

### שלב 4: עדכון Sitemap דינמי

עדכון תאריכי `lastmod` בכל דפי ה-Sitemap לתאריך הנוכחי (2026-02-06) כדי לאותת לגוגל שכל הדפים עודכנו.

---

### פרטים טכניים

**קבצים שישתנו:**

| קובץ | שינוי |
|---|---|
| `src/components/FAQSection.tsx` | הוספת סקציית קישורים פנימיים מתחת לאקורדיון |
| `src/components/TrustReasons.tsx` | הוספת שורת קישורים בתחתית |
| `src/components/AboutSection.tsx` | הוספת שורת קישורים בתחתית |
| `src/pages/Installation.tsx` | הרחבת סקציית קישורים |
| `src/pages/SolarFence.tsx` | הרחבת סקציית קישורים |
| `src/pages/Pricing.tsx` | הרחבת סקציית קישורים |
| `src/pages/WhyElectricFence.tsx` | הרחבת סקציית קישורים |
| `src/pages/ServiceAreas.tsx` | הוספת סקציית קישורים |
| `src/pages/HomeSolutions.tsx` | הוספת סקציית קישורים |
| `index.html` | עדכון SiteNavigationElement + SSR fallback links |
| `public/sitemap.xml` | עדכון כל תאריכי lastmod ל-2026-02-06 |

**עקרונות:**
- כל הקישורים יהיו טבעיים ובהקשר (לא רק רשימה יבשה)
- אנכור טקסט עשיר במילות מפתח בעברית
- שימוש ב-`<Link>` של React Router (לא `<a>`) לקישורים פנימיים
- שמירה על עיצוב קיים ושפה עיצובית אחידה

