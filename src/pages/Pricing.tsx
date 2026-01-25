import { Phone, CheckCircle, AlertCircle, Calculator, ArrowLeft } from "lucide-react";
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
          "text": "המחיר נע בין 80-150 ₪ למטר רץ, תלוי באורך הגדר, סוג הקרקע והציוד הנדרש. המחיר כולל חומרים, התקנה ואחריות."
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
      description="מחירון גדרות חשמליות נגד חזירי בר. מ-80 ₪ למטר. כולל חומרים, התקנה ואחריות. קבל הצעת מחיר מדויקת תוך 24 שעות"
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

      {/* Price Ranges */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              טווחי מחירים
            </h2>
            <div className="bg-card p-8 rounded-2xl border border-primary/20 border-2 text-center mb-8">
              <p className="text-3xl md:text-4xl font-black text-primary mb-2">
                80-150 ₪ למטר רץ
              </p>
              <p className="text-muted-foreground">
                כולל כל החומרים, ההתקנה והאחריות
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2">גדר בסיסית</h3>
                <p className="text-2xl font-bold text-primary mb-2">80-100 ₪/מ'</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• קרקע ישרה ונגישה</li>
                  <li>• חיבור לרשת החשמל</li>
                  <li>• 2-3 חוטים</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-primary/50 border-2">
                <h3 className="font-bold text-lg mb-2">גדר סטנדרטית</h3>
                <p className="text-2xl font-bold text-primary mb-2">100-120 ₪/מ'</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• קרקע משתנה</li>
                  <li>• 4 חוטים</li>
                  <li>• שערים נוספים</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2">גדר מתקדמת</h3>
                <p className="text-2xl font-bold text-primary mb-2">120-150 ₪/מ'</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• קרקע קשה/סלעית</li>
                  <li>• מערכת סולארית</li>
                  <li>• ציוד פרימיום</li>
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
                <div className="bg-muted p-3 rounded-lg text-sm">
                  <strong>טיפ:</strong> מדידה מדויקת של ההיקף חוסכת כסף
                </div>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-4">סוג הקרקע</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  קרקע רכה וישרה = התקנה מהירה וזולה יותר. קרקע סלעית או משופעת דורשת יותר עבודה.
                </p>
                <div className="bg-muted p-3 rounded-lg text-sm">
                  <strong>טיפ:</strong> סקר שטח חינם מגלה את האתגרים מראש
                </div>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-4">סולארי או רשת</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  מערכת סולארית עולה יותר בהתקנה (15-20%) אבל חוסכת בחשמל לאורך זמן.
                </p>
                <Link to="/solar-fence" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
                  קראו עוד על גדר סולארית
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-4">כמות שערים</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  כל שער דורש ידית מיוחדת וחיבורים נוספים. מומלץ לתכנן מראש את כל נקודות הכניסה.
                </p>
                <div className="bg-muted p-3 rounded-lg text-sm">
                  <strong>מחיר ממוצע:</strong> 300-500 ₪ לשער
                </div>
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

      {/* Payment Options */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              אפשרויות תשלום
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              אנחנו מציעים גמישות בתשלום כדי להקל עליכם:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold mb-2">תשלום רגיל</h3>
                <p className="text-muted-foreground text-sm">50% מקדמה + 50% בסיום</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold mb-2">תשלומים</h3>
                <p className="text-muted-foreground text-sm">עד 3 תשלומים ללא ריבית</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold mb-2">כרטיס אשראי</h3>
                <p className="text-muted-foreground text-sm">כל כרטיסי האשראי</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Quote CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black mb-6">
              קבל הצעת מחיר מדויקת תוך 24 שעות
            </h2>
            <p className="text-lg opacity-90 mb-8">
              התקשר עכשיו או השאר פרטים - ניצור קשר במהרה עם הצעה מפורטת ושקופה
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
              <Link to="/installation" className="text-primary hover:underline">תהליך ההתקנה</Link>
              <Link to="/solar-fence" className="text-primary hover:underline">גדר סולארית</Link>
              <Link to="/why-electric-fence" className="text-primary hover:underline">למה גדר חשמלית?</Link>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default Pricing;
