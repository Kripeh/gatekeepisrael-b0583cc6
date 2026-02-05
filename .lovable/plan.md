
# ניווט באתר + הסרת חסימות גיאוגרפיות

## 0. הסרת חסימות גיאוגרפיות (תיקון דחוף)

**בעיה:** הקובץ `src/components/GeoBlocker.tsx` עדיין קיים בפרויקט למרות שהוסר מ-App.tsx. צריך למחוק אותו לחלוטין.

**פעולה:** מחיקת הקובץ `src/components/GeoBlocker.tsx`

---

## 1. יצירת רכיב ניווט חדש

**קובץ חדש:** `src/components/Navigation.tsx`

**תכונות:**
- ניווט דסקטופ אופקי עם כל 7 העמודים
- תפריט המבורגר למובייל עם Sheet מלא מסך
- מצב "פעיל" לעמוד הנוכחי
- עיצוב תואם לערכת הצבעים הכהה של האתר

**קישורים בתפריט:**
| תווית | כתובת |
|--------|--------|
| דף הבית | `/` |
| התקנת גדר חשמלית | `/installation` |
| גדר סולארית | `/solar-fence` |
| פתרונות לבית | `/home-solutions` |
| מחירון | `/pricing` |
| למה גדר חשמלית? | `/why-electric-fence` |
| אזורי שירות | `/service-areas` |

---

## 2. עדכון ה-Header

**קובץ:** `src/components/PersistentHeader.tsx`

**שינויים:**
- הוספת רכיב Navigation בין הלוגו לכפתור CTA
- דסקטופ: הצגת קישורי ניווט אופקיים
- מובייל: הצגת כפתור המבורגר

**פריסה חדשה (RTL):**
```text
┌──────────────────────────────────────────────────────────────┐
│  [כפתור שיחת ייעוץ]   [ניווט אופקי / ☰]         [לוגו]      │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. עדכון ה-Footer

**קובץ:** `src/components/Footer.tsx`

**שינויים:**
- החלפת כפתורי scroll-to-section בקישורים לעמודים
- הוספת קישורים לכל העמודים הראשיים
- עדכון שנה מ-2025 ל-2026

**קישורים חדשים:**
- דף הבית, התקנה, גדר סולארית, פתרונות לבית
- מחירון, למה גדר חשמלית?, אזורי שירות

---

## 4. עדכון Sitemap

**קובץ:** `public/sitemap.xml`

**שינוי:** עדכון כל תאריכי `lastmod` ל-`2026-02-05`

---

## 5. הוספת Schema לניווט (SEO Sitelinks)

**קובץ:** `index.html`

**הוספה:** JSON-LD מסוג `SiteNavigationElement` שיעזור לגוגל להציג sitelinks בתוצאות החיפוש:

```text
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "גייטקיפ",
      "url": "https://gatekeepisrael.com/"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "דף הבית",
      "url": "https://gatekeepisrael.com/"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "מחירון",
      "url": "https://gatekeepisrael.com/pricing"
    },
    ... (כל 7 העמודים)
  ]
}
```

---

## סיכום קבצים

| קובץ | פעולה |
|------|-------|
| `src/components/GeoBlocker.tsx` | **מחיקה** |
| `src/components/Navigation.tsx` | יצירה חדשה |
| `src/components/PersistentHeader.tsx` | עדכון |
| `src/components/Footer.tsx` | עדכון |
| `public/sitemap.xml` | עדכון תאריכים |
| `index.html` | הוספת SiteNavigationElement schema |
