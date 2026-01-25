import { Phone, Sun, Battery, Leaf, MapPin, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const PHONE_LINK = "tel:+972508585310";
const PHONE_DISPLAY = "050-858-5310";

const SolarFence = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "גדר חשמלית סולארית נגד חזירי בר",
    "provider": {
      "@type": "LocalBusiness",
      "name": "גייטקיפ",
      "telephone": "+972508585310"
    },
    "description": "גדר חשמלית סולארית לשטחים מרוחקים ללא חיבור לרשת החשמל. פתרון ירוק וחסכוני.",
    "areaServed": "Israel"
  };

  return (
    <ServicePageLayout
      title="גדר חשמלית סולארית נגד חזירי בר | גייטקיפ"
      description="גדר חשמלית סולארית לחזירי בר - פתרון ללא חיבור חשמל. אידיאלי לשטחים מרוחקים. ללא עלויות חשמל. התקשרו לייעוץ חינם"
      keywords="גדר חשמלית סולארית, גדר סולארית חזירי בר, גדר ללא חשמל, גדר ירוקה"
      canonicalPath="/solar-fence"
      breadcrumbs={[{ label: "גדר חשמלית סולארית" }]}
      schemaMarkup={schemaMarkup}
    >
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sun className="w-5 h-5" />
              <span className="font-medium">פתרון ירוק ועצמאי</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 text-balance">
              גדר חשמלית סולארית - פתרון ללא חיבור חשמל
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              הגנה מלאה על השטח שלכם גם במקומות מרוחקים, ללא תלות ברשת החשמל ובלי עלויות חשמל חודשיות
            </p>
            <a 
              href={PHONE_LINK}
              className="btn-cta-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold"
            >
              <Phone className="w-6 h-6" />
              <span>בדוק התאמה לשטח שלך - {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits of Solar */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              יתרונות הגדר הסולארית
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Battery className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">אפס עלויות חשמל</h3>
                <p className="text-muted-foreground text-sm">
                  הגדר עובדת על אנרגיית השמש בלבד - חיסכון של מאות שקלים בשנה
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">עובדת בכל מקום</h3>
                <p className="text-muted-foreground text-sm">
                  מתאימה לשטחים מרוחקים ללא גישה לרשת החשמל
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">ידידותית לסביבה</h3>
                <p className="text-muted-foreground text-sm">
                  פתרון ירוק ובר קיימא - אנרגיה נקייה ומתחדשת
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              מפרט טכני
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <Sun className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">פאנל סולארי</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>הספק: 10-20 וואט (בהתאם לגודל המערכת)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>פאנל מונו-קריסטלי איכותי</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>עמידות ב-UV ותנאי מזג אוויר קשים</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <Battery className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">מצבר גיבוי</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>קיבולת: 12V / 7-12Ah</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>פעולה רציפה עד 3 שבועות ללא שמש</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>אורך חיים: 3-5 שנים</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">זמני פעולה</h3>
              <p className="text-muted-foreground">
                המערכת מספקת הגנה 24/7 - ביום נטענת מהשמש ובלילה עובדת על המצבר. 
                גם בימים מעוננים, המערכת ממשיכה לעבוד הודות לגיבוי המצבר.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              למי מתאימה גדר סולארית?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">שטחים מרוחקים</h3>
                  <p className="text-muted-foreground text-sm">מרעות, שטחים פתוחים ללא גישה לרשת החשמל</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">שטחים חקלאיים גדולים</h3>
                  <p className="text-muted-foreground text-sm">כרמים, מטעים ושדות שרחוקים מנקודת חשמל</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">אזורים ללא תשתית</h3>
                  <p className="text-muted-foreground text-sm">שטחים חדשים או אזורים בפריפריה</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">מי שרוצה לחסוך</h3>
                  <p className="text-muted-foreground text-sm">ללא עלויות חשמל חודשיות - חיסכון לטווח ארוך</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              השוואת עלויות: סולארית מול חיבור לרשת
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-2xl border border-border overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-right font-bold">פריט</th>
                    <th className="p-4 text-center font-bold">סולארית</th>
                    <th className="p-4 text-center font-bold">חיבור לרשת</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4">עלות התקנה ראשונית</td>
                    <td className="p-4 text-center">גבוהה יותר ב-15-20%</td>
                    <td className="p-4 text-center">סטנדרטית</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">עלות חשמל חודשית</td>
                    <td className="p-4 text-center text-primary font-bold">0 ₪</td>
                    <td className="p-4 text-center">50-150 ₪</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">עלות ב-5 שנים</td>
                    <td className="p-4 text-center text-primary font-bold">נמוכה יותר</td>
                    <td className="p-4 text-center">גבוהה יותר</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">תלות בתשתית</td>
                    <td className="p-4 text-center text-primary font-bold">עצמאית לחלוטין</td>
                    <td className="p-4 text-center">תלויה ברשת</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              * ההשקעה הראשונית מחזירה את עצמה תוך 2-3 שנים בממוצע
            </p>
          </div>
        </div>
      </section>

      {/* Installation Timeline */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              זמן התקנה
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              התקנת גדר סולארית דומה בזמן להתקנה רגילה - 1-3 ימי עבודה בהתאם לגודל השטח.
              הפאנל והמצבר מותקנים יחד עם הבקר ומתחילים לעבוד מיד.
            </p>
            <Link 
              to="/installation"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              קראו עוד על תהליך ההתקנה
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              התקנות סולאריות שלנו
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video bg-card rounded-2xl border border-border flex items-center justify-center">
                <span className="text-muted-foreground">תמונת התקנה סולארית - מטע בגליל</span>
              </div>
              <div className="aspect-video bg-card rounded-2xl border border-border flex items-center justify-center">
                <span className="text-muted-foreground">תמונת פאנל סולארי ובקר</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black mb-6">
              בדוק אם גדר סולארית מתאימה לשטח שלך
            </h2>
            <p className="text-lg opacity-90 mb-8">
              התקשר עכשיו לייעוץ חינם - נבדוק את התאמת השטח ונספק הצעת מחיר
            </p>
            <a 
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/90 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>התקשר עכשיו - {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold mb-4">קישורים נוספים:</h3>
            <div className="flex flex-wrap gap-4">
              <Link to="/installation" className="text-primary hover:underline">התקנת גדר חשמלית</Link>
              <Link to="/pricing" className="text-primary hover:underline">מחירון מלא</Link>
              <Link to="/why-electric-fence" className="text-primary hover:underline">למה גדר חשמלית?</Link>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default SolarFence;
