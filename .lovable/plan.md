

## סקירת הבעיות

### בעיה 1: הגלילה לא מתאפסת בעת מעבר בין דפים
כשמשתמש לוחץ על קישור לעמוד אחר, העמוד החדש נטען אבל הוא נשאר באותו מיקום גלילה במקום לעלות לראש העמוד. זו בעיה נפוצה באפליקציות React Router.

### בעיה 2: גוגל מוביל לדף שגוי
הקישור הראשי בגוגל מוביל לדף "פתרונות לבית" במקום לדף הבית החקלאי הראשי. הבעיה נובעת ככל הנראה מכך שגוגל תפס את דף home-solutions כדף הבית, אולי בגלל שהוא היה בולט יותר בזמן הסריקה.

---

## תוכנית התיקון

### שלב 1: הוספת רכיב ScrollToTop גלובלי

אצור רכיב חדש `ScrollToTop.tsx` שמאזין לשינויים בנתיב (URL) ומגלל אוטומטית לראש העמוד:

```text
src/components/ScrollToTop.tsx
├── useEffect שמאזין לשינויי location
├── window.scrollTo(0, 0) בכל שינוי נתיב
└── return null (רכיב בלי תצוגה)
```

### שלב 2: שילוב הרכיב ב-App.tsx

אוסיף את הרכיב בתוך ה-BrowserRouter כדי שיפעל על כל ניווט באתר.

### שלב 3: חיזוק ה-SEO של דף הבית החקלאי

כדי להבטיח שגוגל יבין שהדף הראשי הוא `/` (החקלאי) ולא `/home-solutions`:

1. **אימות Canonical URL** - אוודא שדף הבית מגדיר את הכתובת `https://gatekeepisrael.com/` כ-canonical
2. **בדיקת sitemap.xml** - אוודא שדף הבית נמצא ראשון עם עדיפות 1.0
3. **בדיקת index.html** - הקישורים ב-SSR Fallback כבר מכוונים נכון לדף הראשי

---

## פרטים טכניים

### קובץ חדש: `src/components/ScrollToTop.tsx`

```typescript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
```

### עדכון: `src/App.tsx`

```typescript
// הוספת import
import ScrollToTop from "@/components/ScrollToTop";

// בתוך BrowserRouter, לפני Routes
<BrowserRouter>
  <ScrollToTop />
  <Routes>
    {/* ... */}
  </Routes>
</BrowserRouter>
```

### בדיקת sitemap.xml

אוודא שהמבנה נכון:
- דף הבית (`/`) עם priority 1.0 ראשון ברשימה
- דף home-solutions עם priority נמוך יותר (0.8)

---

## לגבי בעיית גוגל

השינוי בגוגל לוקח זמן להתעדכן. לאחר התיקונים:
1. גוגל יסרוק מחדש את האתר
2. יראה שה-canonical URL הנכון הוא `https://gatekeepisrael.com/`
3. בהדרגה יעדכן את התוצאות

אם רוצים לזרז, אפשר לבקש אינדוקס מחדש דרך Google Search Console.

