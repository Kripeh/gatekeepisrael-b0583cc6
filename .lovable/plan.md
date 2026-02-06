

## העברת מאמרים לנתיבי בלוג חדשים + הקמת עמוד בלוג

### סקירה כללית
העברת המאמר הקיים מ-`/wild-boar-electric-fence-protection` ל-`/blog/boar_history_israel`, שינוי נתיב המאמר הטכני החדש ל-`/blog/electrical_fence_technology`, והקמת עמוד אינדקס בלוג ב-`/blog`.

**חשוב:** מכיוון שהנתיב הישן `/wild-boar-electric-fence-protection` כבר נמצא בסייטמאפ ואולי אינדקס של גוגל, נוסיף redirect (301) דרך React כדי לשמור על ה-SEO equity.

---

### שלב 1: הקמת עמוד אינדקס בלוג (`/blog`)

יצירת עמוד חדש שמציג את כל המאמרים בכרטיסי תצוגה מקדימה:
- כותרת H1: "בלוג גייטקיפ | מדריכים מקצועיים לגידור חשמלי"
- כרטיס לכל מאמר עם: כותרת, תיאור קצר, תאריך, זמן קריאה, ולינק "קרא עוד"
- SEOHead עם canonical, OG tags
- Breadcrumbs: דף הבית > בלוג
- JSON-LD schema מסוג CollectionPage

**קובץ חדש:** `src/pages/Blog.tsx`

---

### שלב 2: יצירת המאמר הטכני החדש (`/blog/electrical_fence_technology`)

מאמר מלא המבוסס על המסמך שהועלה - "ארכיטקטורה הנדסית ומפרט טכנולוגי". יכלול:
- H1 ממוקד מילות מפתח
- סקציות H2/H3 היררכיות (פיזיקת Energizer, טכנולוגיית Ultra-Low Impedance, מערכת סולארית, הארקה, בטיחות)
- תוכן עניינים עם anchor links
- טבלאות אינטראקטיביות (פרמטרים טכניים, השוואת מערכות)
- Internal links לדפי שירות
- מקורות בתחתית (Collapsible dropdown)
- רכיב "קריאה נוספת" (RelatedArticles)
- Article JSON-LD + Person author + knowsAbout
- Breadcrumbs: דף הבית > בלוג > ארכיטקטורה הנדסית
- Canonical: `https://gatekeepisrael.com/blog/electrical_fence_technology`

**קובץ חדש:** `src/pages/BlogTechnicalFencing.tsx`

---

### שלב 3: רכיב "קריאה נוספת" משותף

רכיב React שמציג מאמרים קשורים בסוף כל מאמר בלוג - כדי ליצור Content Cluster ולהאריך זמן שהייה.

**קובץ חדש:** `src/components/RelatedArticles.tsx`

---

### שלב 4: עדכון המאמר הקיים (BlogWildBoar)

- שינוי canonical מ-`/wild-boar-electric-fence-protection` ל-`/blog/boar_history_israel`
- עדכון Breadcrumbs: דף הבית > בלוג > משבר חזירי הבר
- עדכון Article schema עם `mainEntityOfPage` לנתיב החדש
- עדכון Article schema עם Person author + knowsAbout
- הוספת רכיב RelatedArticles בתחתית
- עדכון כל הלינקים הפנימיים בתוך המאמר

---

### שלב 5: עדכון Routing ב-App.tsx

- הוספת נתיבים: `/blog`, `/blog/electrical_fence_technology`, `/blog/boar_history_israel`
- הוספת redirect מ-`/wild-boar-electric-fence-protection` ל-`/blog/boar_history_israel` (באמצעות `Navigate` של React Router) לשמירה על SEO equity מהאינדוקס הקיים
- הסרת הנתיב הישן כ-route עצמאי

---

### שלב 6: עדכון ניווט (כל הנקודות)

| קובץ | שינוי |
|---|---|
| `src/components/PersistentHeader.tsx` | שינוי לינק "בלוג" ל-`/blog` |
| `src/components/Navigation.tsx` | שינוי "בלוג: חזירי בר" ל-"בלוג" עם href `/blog` |
| `src/components/Footer.tsx` | שינוי לינק הבלוג ל-`/blog` |

---

### שלב 7: עדכון SSR Fallback ב-index.html

- עדכון לינק הבלוג ב-nav הסטטי מ-`/wild-boar-electric-fence-protection` ל-`/blog`
- עדכון לינק הבלוג בסקציית "השירותים שלנו" ל-`/blog`
- עדכון SiteNavigationElement schema ל-`/blog`

---

### שלב 8: עדכון Sitemap

- הסרת `/wild-boar-electric-fence-protection` 
- הוספת `/blog` (priority 0.8)
- הוספת `/blog/boar_history_israel` (priority 0.8)
- הוספת `/blog/electrical_fence_technology` (priority 0.8)

---

### פירוט טכני

**קבצים חדשים (3):**

| קובץ | תיאור |
|---|---|
| `src/pages/Blog.tsx` | עמוד אינדקס הבלוג עם כרטיסי תצוגה מקדימה |
| `src/pages/BlogTechnicalFencing.tsx` | המאמר הטכני החדש |
| `src/components/RelatedArticles.tsx` | רכיב "קריאה נוספת" משותף |

**קבצים שישתנו (7):**

| קובץ | שינוי |
|---|---|
| `src/App.tsx` | הוספת routes חדשים + redirect מהנתיב הישן |
| `src/pages/BlogWildBoar.tsx` | עדכון canonical, breadcrumbs, schema, הוספת RelatedArticles |
| `src/components/PersistentHeader.tsx` | לינק בלוג ל-`/blog` |
| `src/components/Navigation.tsx` | לינק בלוג ל-`/blog` |
| `src/components/Footer.tsx` | לינק בלוג ל-`/blog` |
| `index.html` | עדכון SSR nav + SiteNavigationElement schema |
| `public/sitemap.xml` | החלפת URL ישן + הוספת 3 URLs חדשים |

**נתיבים סופיים:**

```text
/blog                            -> עמוד אינדקס הבלוג
/blog/boar_history_israel        -> המאמר על חזירי בר (הועבר)
/blog/electrical_fence_technology -> המאמר הטכני החדש
/wild-boar-electric-fence-protection -> redirect 301 ל-/blog/boar_history_israel
```

**עקרונות SEO:**
- Redirect מהנתיב הישן לשמירה על link equity
- Canonical tags מדויקים בכל דף
- Article schema עם Person author + knowsAbout
- Breadcrumbs מקושרים ל-BreadcrumbList schema
- Internal linking בין כל המאמרים (Content Cluster)
- מקורות מלאים בתחתית כל מאמר
- טבלה השוואתית אינטראקטיבית במאמר הטכני

