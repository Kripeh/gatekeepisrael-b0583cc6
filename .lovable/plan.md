
# תוכנית: עדכון Favicon מלא

## סקירה
עדכון כל קבצי ה-favicon וה-manifest לחבילה החדשה שהעלית - כולל תמיכה ב-SVG, ICO, מספר גדלי PNG, ו-PWA icons.

---

## קבצים להעתקה ל-public/

| קובץ מקור | יעד | תיאור |
|-----------|-----|-------|
| `favicon.ico` | `public/favicon.ico` | Favicon קלאסי לדפדפנים ישנים |
| `favicon.svg` | `public/favicon.svg` | Favicon וקטורי (איכות מושלמת בכל גודל) |
| `favicon-96x96.png` | `public/favicon-96x96.png` | PNG בגודל סטנדרטי |
| `apple-touch-icon.png` | `public/apple-touch-icon.png` | עבור מכשירי iOS |
| `web-app-manifest-192x192.png` | `public/web-app-manifest-192x192.png` | אייקון PWA קטן |
| `web-app-manifest-512x512.png` | `public/web-app-manifest-512x512.png` | אייקון PWA גדול |

---

## עדכון index.html

שורות 32-34 יוחלפו ל:

```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/manifest.json" />
```

---

## עדכון public/manifest.json

```json
{
  "name": "גייטקיפ - גדרות חשמליות נגד חזירי בר",
  "short_name": "גייטקיפ",
  "description": "גדרות חשמליות מקצועיות להגנה על שטחים חקלאיים מפני חזירי בר",
  "icons": [
    {
      "src": "/web-app-manifest-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/web-app-manifest-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "theme_color": "#16a34a",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": "/",
  "scope": "/",
  "dir": "rtl",
  "lang": "he",
  "orientation": "portrait-primary"
}
```

---

## עדכון Schema Markup (index.html)

שורות 68 ו-87 - שינוי הלוגו והתמונה מ-`favicon.png` ל-`favicon.svg`:
- `"image": "https://gatekeepisrael.com/favicon.svg"`
- `"logo": "https://gatekeepisrael.com/favicon.svg"`

---

## ניקוי

- מחיקת `public/favicon.png` - כבר לא נדרש

---

## פרטים טכניים

### סדר עדיפות ב-browsers:
1. SVG - דפדפנים מודרניים (איכות מושלמת, scalable)
2. PNG 96x96 - fallback לדפדפנים שלא תומכים SVG
3. ICO - Internet Explorer ודפדפנים ישנים

### תמיכה ב-iOS:
- `apple-touch-icon.png` - מוצג כשמשתמש מוסיף לדף הבית

### PWA Icons:
- 192x192 - נדרש לאייקון בגודל קטן
- 512x512 - נדרש להתקנה ו-splash screen
- `purpose: maskable` - מאפשר לדפדפן לחתוך לצורת עיגול/ריבוע מעוגל

---

## סיכום פעולות

1. העתקת 6 קבצי favicon לתיקיית public
2. עדכון תגיות link ב-index.html
3. עדכון manifest.json עם האייקונים החדשים
4. עדכון לוגו ב-Schema Markup
5. מחיקת favicon.png הישן
