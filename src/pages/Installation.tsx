import { Phone, CheckCircle, Clock, Shield, Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const PHONE_LINK = "tel:+972508585310";
const PHONE_DISPLAY = "050-858-5310";

const Installation = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "התקנת גדר חשמלית נגד חזירי בר",
    "provider": {
      "@type": "LocalBusiness",
      "name": "גייטקיפ",
      "telephone": "+972508585310"
    },
    "description": "התקנה מקצועית של גדרות חשמליות נגד חזירי בר. שירות מהיר בכל הארץ עם אחריות מלאה.",
    "areaServed": "Israel"
  };

  return (
    <ServicePageLayout
      title="התקנת גדר חשמלית נגד חזירי בר | גייטקיפ"
      description="התקנה מקצועית של גדרות חשמליות נגד חזירי בר. שירות מהיר בכל הארץ. אחריות מלאה. התקשרו עכשיו"
      keywords="התקנת גדר חשמלית, גדר חשמלית חזירי בר, התקנת גדר חקלאית, הגנה מחזירי בר"
      canonicalPath="/installation"
      breadcrumbs={[{ label: "התקנת גדר חשמלית" }]}
      schemaMarkup={schemaMarkup}
    >
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6 text-balance">
              התקנת גדר חשמלית מקצועית נגד חזירי בר
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              צוות מומחים עם נסיון התקנה של עשרות קילומטרים
            </p>
            <a 
              href={PHONE_LINK}
              className="btn-cta-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold"
            >
              <Phone className="w-6 h-6" />
              <span>התקשר לייעוץ חינם - {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* What We Install */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              מה אנחנו מתקינים - פרטים טכניים
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">מתח וחשמל</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>מתח של 5,000-10,000 וולט - מספיק להרתעה יעילה</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>זרם נמוך (מיליאמפרים בודדים) - בטוח לאדם ולבעלי חיים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>בקר אנרגייזר איכותי עם אחריות יצרן</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">חומרים ומבנה</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>עמודי ברזל מגולוון או פיברגלס עמידים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>מרווח בין עמודים: 8-12 מטר (בהתאם לטופוגרפיה)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>חוטים מוליכים באיכות גבוהה עם ציפוי UV</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              תהליך ההתקנה - צעד אחר צעד
            </h2>
            <div className="space-y-6">
              {[
                { step: 1, title: "סקר שטח חינם", description: "מגיעים לשטח, מודדים, מזהים אתגרים ומתכננים את המסלול האופטימלי" },
                { step: 2, title: "הצעת מחיר מפורטת", description: "מקבלים הצעה שקופה הכוללת את כל הפריטים, העבודה והאחריות" },
                { step: 3, title: "הכנת התשתית על ידי הלקוח", description: "גיזום עשבייה על היקף החלקה ובחירת מיקום למערכת" },
                { step: 4, title: "התקנה ומסירה", description: "התקנה מקצועית, בדיקות מתח בכל הנקודות, הדרכה על תפעול ותחזוקה", time: "יום אחד" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-card p-6 rounded-2xl border border-border">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      {item.time && (
                        <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                          {item.time}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              <Clock className="inline w-5 h-5 ml-2" />
              זמן התקנה: יום אחד | לחלקות גדולות במיוחד: 2-3 ימים
            </p>
          </div>
        </div>
      </section>

      {/* Why Professional Installation */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              למה התקנה מקצועית חשובה?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">בטיחות מלאה</h3>
                <p className="text-muted-foreground text-sm">
                  התקנה לפי תקנים, הארקה נכונה ובדיקות בטיחות מקיפות
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">יעילות מקסימלית</h3>
                <p className="text-muted-foreground text-sm">
                  מיקום נכון של חוטים וגובה מותאם לחזירי בר
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">אחריות מלאה</h3>
                <p className="text-muted-foreground text-sm">
                  אחריות על החומרים והעבודה, כולל שירות ותחזוקה
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              מחירים שקופים
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              כל פרויקט הוא ייחודי. המחיר תלוי באורך הגדר, סוג הקרקע והציוד הנדרש.
            </p>
            <div className="bg-card p-8 rounded-2xl border border-border mb-8">
              <p className="text-2xl font-bold text-primary mb-2">
                טווח מחירים: 10-25 ₪ למטר רץ
              </p>
              <p className="text-muted-foreground">
                כולל חומרים, עבודה ואחריות
              </p>
            </div>
            <Link 
              to="/pricing"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              למידע מפורט על מחירים
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              דוגמאות להתקנות מוצלחות
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl overflow-hidden border border-border">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">תמונת פרויקט - כרם במושב לכיש</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">כרם יין - מושב לכיש</h3>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• אורך גדר: 850 מטר</li>
                    <li>• זמן התקנה: יומיים</li>
                    <li>• תוצאה: אפס פריצות מאז ההתקנה</li>
                  </ul>
                </div>
              </div>
              <div className="bg-card rounded-2xl overflow-hidden border border-border">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">תמונת פרויקט - מטע אבוקדו</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">מטע אבוקדו - עמק יזרעאל</h3>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• אורך גדר: 1,200 מטר</li>
                    <li>• זמן התקנה: 3 ימים</li>
                    <li>• תוצאה: הפסקת נזקים של עשרות אלפי שקלים בשנה</li>
                  </ul>
                </div>
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
              מוכנים להתחיל?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              התקשרו עכשיו לקבלת סקר שטח וייעוץ חינם. אנחנו זמינים בכל יום
            </p>
            <a 
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/90 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>התקשר לייעוץ חינם - {PHONE_DISPLAY}</span>
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
              <Link to="/solar-fence" className="text-primary hover:underline">גדר חשמלית סולארית</Link>
              <Link to="/pricing" className="text-primary hover:underline">מחירון מלא</Link>
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

export default Installation;
