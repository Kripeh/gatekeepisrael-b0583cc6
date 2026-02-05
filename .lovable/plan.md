
# תוכנית שיפור SEO מקיפה לאתר גייטקיפ

## סקירת מצב נוכחי

**מה עשוי טוב:**
- JSON-LD Structured Data (LocalBusiness, Service, FAQPage)
- Open Graph & Twitter Cards
- Sitemap עם 6 דפים
- דפי נחיתה נפרדים עם SEOHead דינמי
- Alt tags לתמונות בעברית

**בעיות קריטיות שזוהו:**
- אי-התאמה בין דומיינים (lovable.app מול gatekeepisrael.com)
- דף הבית חסר SEOHead component
- חסר rating בביקורות ל-Review Schema

---

## שלב 1: תיקון בעיות קריטיות (עדיפות גבוהה)

### 1.1 תיאום דומיינים
| קובץ | שינוי |
|------|-------|
| `index.html` | עדכון canonical ו-og:url ל-`https://gatekeepisrael.com/` |
| `public/robots.txt` | עדכון sitemap URL ל-`https://gatekeepisrael.com/sitemap.xml` |
| `index.html` | עדכון URL ב-JSON-LD LocalBusiness |

### 1.2 הוספת SEOHead לדף הבית
| קובץ | שינוי |
|------|-------|
| `src/pages/Index.tsx` | הוספת SEOHead component עם כותרת, תיאור ו-Structured Data |

---

## שלב 2: העשרת Structured Data

### 2.1 הוספת עמודה rating לביקורות
פעולה: Migration להוספת עמודת `rating` (1-5) לטבלת testimonials

### 2.2 הוספת Review Schema
| קובץ | שינוי |
|------|-------|
| `src/pages/Index.tsx` | הוספת AggregateRating schema עם ממוצע דירוגים מהביקורות |

### 2.3 הוספת BreadcrumbList Schema
| קובץ | שינוי |
|------|-------|
| `src/components/Breadcrumbs.tsx` | הוספת JSON-LD BreadcrumbList לכל דף |

### 2.4 שיפור Organization Schema
| קובץ | שינוי |
|------|-------|
| `index.html` | הוספת Organization schema עם לוגו, sameAs (לינקים חברתיים), contactPoint |

---

## שלב 3: שיפור ביצועים (Core Web Vitals)

### 3.1 Lazy Loading לתמונות
| קובץ | שינוי |
|------|-------|
| `src/components/HeroSection.tsx` | שימוש ב-`loading="eager"` לתמונת Hero (LCP) |
| `src/components/ProjectGallery.tsx` | הוספת `loading="lazy"` לתמונות גלריה |
| דפי נחיתה | הוספת lazy loading לתמונות שמתחת ל-fold |

### 3.2 יצירת Web App Manifest
| קובץ | פעולה |
|------|-------|
| `public/manifest.json` | יצירה חדשה עם כל גדלי האייקונים |
| `index.html` | הוספת link ל-manifest |

### 3.3 Preload Critical Assets
| קובץ | שינוי |
|------|-------|
| `index.html` | הוספת preload לתמונת Hero הראשית |

---

## שלב 4: הוספת תוכן ודפים

### 4.1 דף אזורי שירות (Local SEO)
| קובץ | פעולה |
|------|-------|
| `src/pages/ServiceAreas.tsx` | דף חדש עם רשימת אזורים: גליל, שפלה, נגב וכו' |
| `src/App.tsx` | הוספת נתיב `/service-areas` |
| `public/sitemap.xml` | הוספת הדף החדש |

### 4.2 דף בלוג/מאמרים (אופציונלי לעתיד)
תשתית לבלוג עם מאמרים על:
- "איך לזהות נזקי חזירי בר"
- "תחזוקת גדר חשמלית - מדריך מלא"
- "השוואת שיטות הגנה מחזירים"

---

## שלב 5: עדכון OG Image

### 5.1 העלאת OG Image חדש
| פעולה | פירוט |
|------|-------|
| העלאה ל-Storage | יצירת תמונה 1200x630 עם הלוגו החדש |
| `index.html` | עדכון og:image ו-twitter:image ל-URL החדש |

---

## סיכום שינויים לפי קובץ

| קובץ | פעולות |
|------|--------|
| `index.html` | תיקון דומיינים, הוספת manifest link, preload, Organization schema |
| `public/robots.txt` | עדכון sitemap URL |
| `public/sitemap.xml` | הוספת דף service-areas |
| `public/manifest.json` | יצירה חדשה |
| `src/pages/Index.tsx` | הוספת SEOHead עם AggregateRating |
| `src/components/Breadcrumbs.tsx` | הוספת BreadcrumbList JSON-LD |
| `src/components/HeroSection.tsx` | loading="eager" |
| `src/pages/ServiceAreas.tsx` | דף חדש |
| `src/App.tsx` | נתיב חדש |
| DB Migration | הוספת עמודת rating לביקורות |

---

## פרטים טכניים

### דוגמת BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "דף הבית", "item": "https://gatekeepisrael.com/"},
    {"@type": "ListItem", "position": 2, "name": "התקנה", "item": "https://gatekeepisrael.com/installation"}
  ]
}
```

### דוגמת AggregateRating Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "גייטקיפ",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5"
  }
}
```

### דוגמת manifest.json
```json
{
  "name": "גייטקיפ - גדרות חשמליות",
  "short_name": "גייטקיפ",
  "icons": [
    {"src": "/favicon.png", "sizes": "512x512", "type": "image/png"}
  ],
  "theme_color": "#16a34a",
  "background_color": "#0a0a0a",
  "display": "standalone",
  "start_url": "/",
  "dir": "rtl",
  "lang": "he"
}
```

---

## סדר ביצוע מומלץ

1. **תיקון דומיינים** (קריטי - משפיע על אינדוקס)
2. **הוספת SEOHead לדף הבית**
3. **יצירת manifest.json**
4. **הוספת BreadcrumbList Schema**
5. **DB Migration + AggregateRating**
6. **אופטימיזציית תמונות**
7. **דף אזורי שירות**
8. **עדכון OG Image**
