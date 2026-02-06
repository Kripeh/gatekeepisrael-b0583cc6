import { Phone, CheckCircle, AlertCircle, Calculator, Info } from "lucide-react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const PHONE_LINK = "tel:+972508585310";
const PHONE_DISPLAY = "050-858-5310";

const Pricing = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "כמה עולה גדר חשמלית נגד חזירי בר?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "המחיר נע בין 10-20 ₪ למטר רץ עבור פרויקטים מ-1000 מטר ומעלה. גדר בסיסית 10-15 ₪/מ', גדר גבוהה 15-20 ₪/מ', גדר גבוהה משופרת 20-25 ₪/מ'. המחיר כולל חומרים, התקנה ואחריות."
        }
      },
      {
        "@type": "Question",
        "name": "מה כלול במחיר?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "המחיר כולל: עמודים, חוטים מוליכים, בקר (אנרגייזר), מבודדים, התקנה מקצועית, בדיקות ואחריות על החומרים והעבודה."
        }
      }
    ]
  };

  return (
    <ServicePageLayout
      title="מחיר גדר חשמלית לחזירי בר | גייטקיפ"
      description="מחירון גדרות חשמליות נגד חזירי בר. מ-10 ₪ למטר לפרויקטים מ-1000 מ' ומעלה. כולל חומרים, התקנה ואחריות. קבל הצעת מחיר מדויקת תוך 24 שעות"
      keywords="מחיר גדר חשמלית, עלות גדר חזירי בר, מחירון גדרות חשמליות, הצעת מחיר גדר"
      canonicalPath="/pricing"
      breadcrumbs={[{ label: "מחירון" }]}
      schemaMarkup={schemaMarkup}
    >
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Calculator className="w-5 h-5" />
              <span className="font-medium">מחירון שקוף ואמין</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 text-balance">
              מחיר גדר חשמלית לחזירי בר - מה משפיע על העלות?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              אנחנו מאמינים בשקיפות מלאה. כאן תמצאו את כל המידע על מחירים, מה כלול ומה משפיע על העלות הסופית
            </p>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/#calculator"
              className="block bg-primary/10 hover:bg-primary/15 border border-primary/30 rounded-2xl p-6 md:p-8 text-center transition-colors group"
            >
              <Calculator className="w-8 h-8 text-primary mx-auto mb-3" />
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                רוצה לבדוק כמה זה יעלה בשטח שלך?
              </h2>
              <p className="text-muted-foreground mb-4">
                השתמש במחשבון המחירים שלנו לקבלת הערכה מיידית
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:underline">
                למחשבון המחירים ←
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Price Ranges */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              טווחי מחירים
            </h2>
            <div className="bg-card p-8 rounded-2xl border border-primary/20 border-2 text-center mb-8">
              <p className="text-3xl md:text-4xl font-black text-primary mb-2">
                10-20 ₪ למטר רץ
              </p>
              <p className="text-muted-foreground">
                כולל כל החומרים, ההתקנה והאחריות
              </p>
              <div className="mt-4 p-4 bg-muted/50 rounded-xl border border-border">
                <div className="flex items-center justify-center gap-2 text-amber-500 mb-2">
                  <Info className="w-5 h-5" />
                  <span className="font-semibold">שימו לב</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  המחירים רלוונטיים לפרויקטים מ-1000 מטר ומעלה.{" "}
                  <a href={PHONE_LINK} className="text-primary hover:underline font-medium">
                    להיקף קטן יותר - התקשרו לייעוץ
                  </a>
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2">גדר בסיסית</h3>
                <p className="text-2xl font-bold text-primary mb-2">10-15 ₪/מ'</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• גדר סטנדרטית</li>
                  <li>• מתאימה לרוב השטחים</li>
                  <li>• הגנה יעילה מחזירי בר</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2">גדר גבוהה</h3>
                <p className="text-2xl font-bold text-primary mb-2">15-20 ₪/מ'</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• גובה מוגבר</li>
                  <li>• הגנה משופרת</li>
                  <li>• לשטחים עם לחץ גבוה</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-primary/50 border-2">
                <h3 className="font-bold text-lg mb-2">גדר גבוהה משופרת</h3>
                <p className="text-2xl font-bold text-primary mb-2">20-25 ₪/מ'</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• בזנטים לאורך כל הגדר</li>
                  <li>• חומרים עמידים יותר</li>
                  <li>• הגנה מקסימלית</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              מה משפיע על המחיר?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-4">אורך הגדר</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  ככל שהגדר ארוכה יותר, המחיר למטר יורד. פרויקטים גדולים מעל 500 מטר מקבלים הנחת כמות.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-4">חוזק המערכת</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  תלוי בסוג הגדר שנבחר - גדר בסיסית, גבוהה או גבוהה משופרת עם בזנטים וחומרים עמידים יותר.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-4">סוג המזיק</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  התאמה לסוג המזיק - חזירי בר, דורבנים, שועלים ועוד. כל מזיק דורש גובה וחוזק שונים.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-4">כמות שערים</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  כל שער דורש ציוד נוסף וחיבורים מיוחדים. מומלץ לתכנן מראש את כל נקודות הכניסה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              מה כלול במחיר?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  חומרים
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>עמודים מגולוונים/פיברגלס</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>חוטים מוליכים איכותיים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>בקר (אנרגייזר) עם אחריות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>מבודדים ומחברים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>שלטי אזהרה כנדרש בחוק</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  שירות
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>סקר שטח מקדים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>התקנה מקצועית</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>בדיקות מתח וביצועים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>הדרכה על תפעול ותחזוקה</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>אחריות על חומרים ועבודה</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cheap Fences Fail */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border border-destructive/30">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0" />
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">
                    למה גדרות זולות נכשלות?
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    ראינו הרבה חקלאים שקנו "גדרות זולות" ונאלצו להחליף אותן תוך שנה-שנתיים. הבעיות הנפוצות:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      <span>עמודים חלודים - לא מגולוונים כראוי</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      <span>חוטים נקרעים - חומר באיכות נמוכה</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      <span>בקר נשרף - לא מתאים לעומס</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      <span>התקנה רשלנית - פערים שחזירים מנצלים</span>
                    </li>
                  </ul>
                  <p className="mt-4 font-medium">
                    השקעה נכונה פעם אחת עדיפה על תיקונים אינסופיים.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Quote CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center bg-card p-8 md:p-12 rounded-2xl border-2 border-primary/30">
            <h2 className="text-2xl md:text-4xl font-black mb-6 text-foreground">
              קבל הצעת מחיר מדויקת תוך 24 שעות
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              התקשר עכשיו או השאר פרטים - ניצור קשר במהרה עם הצעה מפורטת ושקופה
            </p>
            <a 
              href={PHONE_LINK}
              className="btn-cta-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>{PHONE_DISPLAY}</span>
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
              <Link to="/installation" className="text-primary hover:underline">תהליך ההתקנה</Link>
              <Link to="/solar-fence" className="text-primary hover:underline">גדר סולארית</Link>
              <Link to="/why-electric-fence" className="text-primary hover:underline">למה גדר חשמלית?</Link>
              <Link to="/home-solutions" className="text-primary hover:underline">פתרונות לבית פרטי</Link>
              <Link to="/service-areas" className="text-primary hover:underline">אזורי שירות</Link>
              <Link to="/wild-boar-electric-fence-protection" className="text-primary hover:underline">מדריך חזירי בר</Link>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default Pricing;
