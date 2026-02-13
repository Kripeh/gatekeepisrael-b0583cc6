import PersistentHeader from "@/components/PersistentHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import { Sun, Zap, Battery, Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE_LINK = "tel:+972508585310";

const ProductSolarEnergizers = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="מחוללי מתח סולאריים לגדר חשמלית | אנרגיה ירוקה | גייטקיפ"
        description="מחוללי מתח סולאריים מקצועיים לגדרות חשמליות. אפס חשבונות חשמל, אמינות מקסימלית. התקנה מקצועית בכל הארץ. ☎ 050-858-5310"
        keywords="מחולל מתח סולארי, גדר חשמלית סולארית, מחולל חשמלי לגדר, אנרגיה סולארית לחקלאות, מחולל 12 וולט, גדר חשמלית ללא חשמל"
        canonicalUrl="https://gatekeepisrael.com/products/solar-energizers"
      />
      <PersistentHeader />
      <Breadcrumbs
        items={[
          { label: "מוצרים", href: "/pricing" },
          { label: "מחוללי מתח סולאריים" }
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-5 py-2.5 rounded-full mb-6">
                <Sun className="w-5 h-5" />
                <span className="font-bold">אנרגיה ירוקה וחסכונית</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-tight mb-6" style={{ textWrap: 'balance' }}>
                מחוללי מתח סולאריים{" "}
                <span className="text-primary">לגדרות חשמליות</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" style={{ textWrap: 'pretty' }}>
                פתרון מתקדם ללא חיבור לחשמל - מתח גבוה מובטח גם באזורים מרוחקים
              </p>
            </div>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                למה <span className="text-primary">מערכת סולארית?</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Sun className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">אפס עלויות חשמל</h3>
                  <p className="text-muted-foreground">אנרגיה חינם מהשמש. אין חיבור לרשת, אין חשבונות.</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">אמינות מקסימלית</h3>
                  <p className="text-muted-foreground">עובד 24/7 גם בימים מעוננים. סוללה גיבוי לעד 21 ימים.</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Battery className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">גמישות בהתקנה</h3>
                  <p className="text-muted-foreground">מושלם לאזורים מרוחקים ללא תשתית חשמל.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Options */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                <span className="text-primary">מחוללי המתח</span> שלנו
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Product 1 */}
                <div className="bg-card border-2 border-primary rounded-2xl p-8">
                  <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-br-lg">
                    מומלץ
                  </div>
                  <div className="mt-4 mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">מחולל 10 ג'ול</h3>
                    <p className="text-muted-foreground">מושלם למשקים בינוניים (עד 8 דונם)</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "פאנל סולארי 20W",
                      "סוללה 12V 7Ah",
                      "מתח יציאה: 10,000V",
                      "טווח: עד 10 ק\"מ חוטים",
                      "גיבוי סוללה: 14 ימים"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-3xl font-black text-primary mb-2">2,500-3,200 ₪</div>
                  <p className="text-xs text-muted-foreground">כולל התקנה מקצועית</p>
                </div>

                {/* Product 2 */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="mt-4 mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">מחולל 15 ג'ול</h3>
                    <p className="text-muted-foreground">לשטחים גדולים ותנאים מאתגרים</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "פאנל סולארי 30W",
                      "סוללה 12V 12Ah",
                      "מתח יציאה: 15,000V",
                      "טווח: עד 20 ק\"מ חוטים",
                      "גיבוי סוללה: 21 ימים"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-3xl font-black text-primary mb-2">3,800-4,500 ₪</div>
                  <p className="text-xs text-muted-foreground">כולל התקנה מקצועית</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                מפרט <span className="text-primary">טכני</span>
              </h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="space-y-4">
                  {[
                    { label: "טכנולוגיה", value: "PWM - Pulse Width Modulation" },
                    { label: "תדירות פולס", value: "1 פולס לשנייה" },
                    { label: "זמן פולס", value: "0.3 אלפית שנייה" },
                    { label: "צריכת אנרגיה", value: "פחות מ-250mA" },
                    { label: "עמידות", value: "IP65 - עמיד למים וחול" },
                    { label: "טמפרטורת עבודה", value: "-20°C עד +50°C" },
                    { label: "אחריות", value: "3 שנים מלאות" }
                  ].map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-border pb-3">
                      <span className="font-bold text-foreground">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                מוכנים לעבור <span className="text-primary">לסולארי?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                נעזור לכם לבחור את המחולל המתאים לשטח שלכם
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-black bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <span>התקשר לייעוץ - 050-858-5310</span>
                </a>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-black border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <span>לכל המוצרים</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-3">מוצרים קשורים</h3>
                <div className="flex flex-wrap gap-3">
                  <Link to="/products/insulators" className="text-primary font-semibold hover:underline">
                    מבודדים ורכיבי גידור
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link to="/products/testing-equipment" className="text-primary font-semibold hover:underline">
                    מכשור מדידה למתח גבוה
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link to="/solar-fence" className="text-primary font-semibold hover:underline">
                    גדר סולארית מלאה
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default ProductSolarEnergizers;
