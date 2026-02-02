
# תוכנית: דף פתרונות ביתיים - /home-solutions

## סקירה כללית
יצירת דף חדש המיועד לקהל ביתי, עם מחשבון מחיר מותאם, הסברים על המערכת, ועידוד להתקשר.

---

## נוסחת מחירים (לפי הנתונים שלך)

| היקף | מחיר בסיס | טווח (±1,000₪) |
|------|-----------|----------------|
| 200 מ' | 2,700₪ | 1,700-3,700₪ |
| 300 מ' | 3,000₪ | 2,000-4,000₪ |
| 400 מ' | 3,500₪ | 2,500-4,500₪ |

**תוספות:**
- דורבנים/שועלים: +700₪ לחלקה
- התקנה: +2,000₪ (מוצג בנפרד)

**נוסחה לינארית משוערת:** `basePrice = 1,300 + (perimeter * 5.5)`

---

## מבנה הדף

```text
┌─────────────────────────────────────────────────────────────┐
│  Header (PersistentHeader - קיים)                           │
├─────────────────────────────────────────────────────────────┤
│  HomeHeroSection                                            │
│  "חזירים בגינה? שומרים על הבית"                             │
│  [התקשר עכשיו] [מחשבון מחיר]                                │
├─────────────────────────────────────────────────────────────┤
│  HomeWhySection - למה גדר חשמלית לבית?                      │
│  • בטוח לילדים ולחיות מחמד                                  │
│  • לא פוגע במראה הגינה                                      │
│  • פתרון קבוע ללא רעלים                                     │
├─────────────────────────────────────────────────────────────┤
│  HomePriceCalculator                                        │
│  [שם*] [טלפון*] [היקף חצר במטרים]                          │
│  [שערים] [סוג מזיק: חזירים/דורבנים/שועלים]                 │
│  → תוצאה: ציוד בלבד + עם התקנה                             │
├─────────────────────────────────────────────────────────────┤
│  HomeHowItWorks - איך המערכת עובדת?                         │
│  הסבר פשוט וברור למשתמש ביתי                                │
├─────────────────────────────────────────────────────────────┤
│  HomeFAQSection - שאלות נפוצות (גרסה ביתית)                 │
│  שאלות על בטיחות, תחזוקה, חיות מחמד                         │
├─────────────────────────────────────────────────────────────┤
│  CTA סופי + Footer                                          │
└─────────────────────────────────────────────────────────────┘
```

---

## קבצים חדשים

### 1. `src/pages/HomeSolutions.tsx`
הדף הראשי שמרכז את כל הקומפוננטות.

### 2. `src/components/home/HomeHeroSection.tsx`
- כותרת מותאמת לבית: "חזירים בגינה? שומרים על הבית"
- תמונת רקע ביתית (או שימוש בקיימת עם overlay שונה)
- CTAs: התקשר עכשיו + חשב מחיר

### 3. `src/components/home/HomeWhySection.tsx`
שלושה קלפים עם יתרונות לבית:
- בטוח למשפחה: "זרם נמוך, שוק קצר - בטוח לילדים ולכלבים"
- מראה נקי: "חוטים דקים שכמעט לא נראים"
- פתרון ירוק: "ללא רעלים, ידידותי לסביבה"

### 4. `src/components/home/HomePriceCalculator.tsx`
מחשבון מותאם עם:
- שם + טלפון (חובה)
- היקף חצר במטרים (עם הסבר שזה חשוב לדיוק)
- כמות שערים
- סוג מזיק (חזירים/דורבנים/שועלים)
- תוצאה כפולה: **ציוד בלבד** + **עם התקנה**
- שמירה לטבלת leads עם שדה lead_type חדש

### 5. `src/components/home/HomeHowItWorks.tsx`
הסבר פשוט על המערכת:
- פולסים קצרים - מרתיעים בלי לפגוע
- מתח סולארי או חשמלי
- תחזוקה מינימלית

### 6. `src/components/home/HomeFAQSection.tsx`
שאלות נפוצות ביתיות:
- "האם זה בטוח לכלב שלי?"
- "מה קורה אם ילד נוגע?"
- "כמה עולה התחזוקה?"
- "האם זה פוגע במראה הגינה?"

---

## עדכונים לקבצים קיימים

### `src/App.tsx`
הוספת route חדש:
```tsx
import HomeSolutions from "./pages/HomeSolutions";
// ...
<Route path="/home-solutions" element={<HomeSolutions />} />
```

### `public/sitemap.xml`
הוספת הדף החדש.

---

## שינוי בסיס הנתונים

הוספת עמודה `lead_type` לטבלת `leads` להבחנה בין לידים:
- `agricultural` - חקלאי (ברירת מחדל)
- `residential` - ביתי

```sql
ALTER TABLE leads 
ADD COLUMN lead_type TEXT DEFAULT 'agricultural' 
CHECK (lead_type IN ('agricultural', 'residential'));
```

---

## חישוב מחיר מפורט

```typescript
const calculatePrice = (perimeter: number, gates: number, pests: string[]) => {
  // נוסחה לינארית: 1,300 + (היקף × 5.5)
  const basePrice = 1300 + (perimeter * 5.5);
  
  // תוספת דורבנים/שועלים: +700₪
  const pestBonus = pests.includes("porcupines") || pests.includes("foxes") ? 700 : 0;
  
  // שערים: +800₪ לשער (כמו במחשבון הקיים)
  const gatesCost = gates * 800;
  
  const equipmentPrice = Math.round(basePrice + pestBonus + gatesCost);
  const installationPrice = equipmentPrice + 2000;
  
  return {
    equipmentMin: equipmentPrice - 1000,
    equipmentMax: equipmentPrice + 1000,
    withInstallationMin: installationPrice - 1000,
    withInstallationMax: installationPrice + 1000,
  };
};
```

---

## טון ומסרים

| חקלאי | ביתי |
|-------|------|
| "מחסלים לך את החלקה" | "שומרים על הגינה" |
| יבולים, פרנסה | משפחה, שקט נפשי |
| מאות/אלפי מטרים | עשרות-מאות מטרים |

---

## SEO

- **URL**: `/home-solutions`
- **Title**: "גדר חשמלית ביתית נגד חזירים | הגנה על הגינה | גייטקיפ"
- **Description**: "הגנו על הגינה מחזירים, דורבנים ושועלים עם גדר חשמלית ביתית. בטוח לילדים ולחיות מחמד. קבלו הצעת מחיר תוך 30 שניות."

---

## סיכום קבצים

| קובץ | פעולה |
|------|-------|
| `src/pages/HomeSolutions.tsx` | חדש |
| `src/components/home/HomeHeroSection.tsx` | חדש |
| `src/components/home/HomeWhySection.tsx` | חדש |
| `src/components/home/HomePriceCalculator.tsx` | חדש |
| `src/components/home/HomeHowItWorks.tsx` | חדש |
| `src/components/home/HomeFAQSection.tsx` | חדש |
| `src/App.tsx` | עדכון routing |
| `public/sitemap.xml` | הוספת דף |
| Database migration | הוספת עמודה lead_type |
