import PersistentHeader from "@/components/PersistentHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import { Shield, Zap, CheckCircle, Phone, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE_LINK = "tel:+972508585310";

const ProductInsulators = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="מבודדים ורכיבי גידור לגדר חשמלית | אביזרים מקצועיים | גייטקיפ"
        description="מבודדים, מתלים, שערים ואביזרי גידור מקצועיים לגדרות חשמליות. איכות גבוהה, עמידות לאורך זמן. התקנה מקצועית בכל הארץ. ☎ 050-858-5310"
        keywords="מבודדים לגדר חשמלית, רכיבי גידור חשמלי, מתלים לגדר, שער לגדר חשמלית, אביזרי גדר חשמלית, מבודדים פלסטיק, מבודדים קרמיים"
        canonicalUrl="https://gatekeepisrael.com/products/insulators"
      />
      <PersistentHeader />
      <Breadcrumbs
        items={[
          { label: "מוצרים", href: "/pricing" },
          { label: "מבודדים ורכיבי גידור" }
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-5 py-2.5 rounded-full mb-6">
                <Shield className="w-5 h-5" />
                <span className="font-bold">אביזרים מקצועיים</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-tight mb-6" style={{ textWrap: 'balance' }}>
                מבודדים ורכיבי גידור{" "}
                <span className="text-primary">לגדר חשמלית</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" style={{ textWrap: 'pretty' }}>
                מגוון מלא של אביזרים איכוtiים לבניית והרחבת גדרות חשמליות מקצועיות
              </p>
            </div>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                למה <span className="text-primary">רכיבים איכותיים?</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">עמידות מקסימלית</h3>
                  <p className="text-muted-foreground">חומרים איכוtiים עמידים בפני UV, קרינה ותנאי מזג אוויר קשים.</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">בידוד מושלם</h3>
                  <p className="text-muted-foreground">מניעת דליפות מתח והבטחת ביצועי הגדר לאורך זמן.</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Wrench className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">התקנה קלה</h3>
                  <p className="text-muted-foreground">עיצוב ארגונומי להתקנה מהירה ופשוטה בכל סוג שטח.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                <span className="text-primary">מוצרים</span> זמינים
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Insulators */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">מבודדים</h3>
                    <p className="text-muted-foreground">מגוון מבודדים לכל סוגי הגידור</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "מבודדי פלסטיק מחוזק UV",
                      "מבודדי קרמיקה למתח גבוה",
                      "מבודדי פינה וקצה",
                      "מבודדים לעמודי עץ ומתכת",
                      "מבודדים לחוטי רב-גידים"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-black text-primary mb-2">החל מ-1.5 ₪/יחידה</div>
                  <p className="text-xs text-muted-foreground">מחיר משתנה לפי כמות וסוג</p>
                </div>

                {/* Gates & Handles */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">שערים וידיות</h3>
                    <p className="text-muted-foreground">פתרונות מעבר בטוחים וידידותיים</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "ידית שער מבודדת סטנדרט",
                      "ידית שער קפיצית Premium",
                      "ערכת שער מלאה כולל קפיצים",
                      "שער אוניברסלי לכל סוגי הגדרות",
                      "מתלים ומחברים מבודדים"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-black text-primary mb-2">150-450 ₪/יחידה</div>
                  <p className="text-xs text-muted-foreground">לפי סוג ומפרט</p>
                </div>

                {/* Wire & Connections */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">חוטים וחיבורים</h3>
                    <p className="text-muted-foreground">חומרי גלם איכותיים להולכת מתח</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "חוט פוליווייר (Polywire) 250m",
                      "חוט רב-גידים מגולוון",
                      "סרט גידור רוחב 20/40 מ\"מ",
                      "מחברי חוטים וקליפסים",
                      "שומרי מתח ומתחים"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-black text-primary mb-2">250-850 ₪/גליל</div>
                  <p className="text-xs text-muted-foreground">מחיר לפי סוג ואורך</p>
                </div>

                {/* Posts & Anchors */}
                <div className="bg-card border-2 border-primary rounded-2xl p-8">
                  <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-br-lg">
                    פופולרי
                  </div>
                  <div className="mt-4 mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">עמודים ועיגונים</h3>
                    <p className="text-muted-foreground">בסיס איתן לגדר יציבה</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "עמודי פיברגלס 120-180 ס\"מ",
                      "עמודי מתכת מגולוונים",
                      "יתדות הארקה מקצועיות",
                      "מערכות עיגון ומתיחה",
                      "בסיסים ומייצבים"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-black text-primary mb-2">35-180 ₪/יחידה</div>
                  <p className="text-xs text-muted-foreground">מחיר לפי סוג וגובה</p>
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
                    { label: "חומרי גלם", value: "פלסטיק מחוזק UV, קרמיקה, מתכת מגולוונת" },
                    { label: "עמידות למתח", value: "עד 20,000 וולט" },
                    { label: "טווח טמפרטורות", value: "-30°C עד +70°C" },
                    { label: "עמידות UV", value: "מוגן מפני קרינה - לא מתפרק בשמש" },
                    { label: "עמידות מכנית", value: "מתאים לתנאי שטח קשים" },
                    { label: "תקינה", value: "עומד בתקני איכות בינלאומיים" },
                    { label: "אחריות", value: "שנתיים על פגמי ייצור" }
                  ].map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-border pb-3">
                      <span className="font-bold text-foreground">{spec.label}</span>
                      <span className="text-muted-foreground text-left max-w-xs">{spec.value}</span>
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
                צריכים <span className="text-primary">אביזרים לגדר?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                נייעץ לכם בבחירת הרכיבים המתאימים בדיוק לצרכים שלכם
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
                  <Link to="/products/solar-energizers" className="text-primary font-semibold hover:underline">
                    מחוללי מתח סולאריים
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link to="/products/testing-equipment" className="text-primary font-semibold hover:underline">
                    מכשור מדידה למתח גבוה
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link to="/pricing" className="text-primary font-semibold hover:underline">
                    כל המוצרים והמחירים
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

export default ProductInsulators;
