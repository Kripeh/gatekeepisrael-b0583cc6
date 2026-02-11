import PersistentHeader from "@/components/PersistentHeader";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import { Activity, Gauge, AlertTriangle, Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE_LINK = "tel:+972508585310";

const ProductTestingEquipment = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="מכשור מדידה למתח גבוה | בודקי גדר חשמלית | מד מתח | גייטקיפ"
        description="מכשירי בדיקה ומדידה מקצועיים לגדרות חשמליות. מדי מתח, בודקי קו, מכשירי אבחון. תחזוקה מקצועית של הגדר. ☎ 050-858-5310"
        keywords="מד מתח לגדר חשמלית, בודק גדר חשמלית, מכשיר מדידה למתח גבוה, Fault Finder, בדיקת מתח גדר, תחזוקת גדר חשמלית"
        canonicalUrl="https://gatekeepisrael.com/products/testing-equipment"
      />
      <PersistentHeader />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-5 py-2.5 rounded-full mb-6">
                <Activity className="w-5 h-5" />
                <span className="font-bold">כלי מדידה מקצועיים</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-tight mb-6" style={{ textWrap: 'balance' }}>
                מכשור בדיקה ומדידה{" "}
                <span className="text-primary">לגדרות חשמליות</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" style={{ textWrap: 'pretty' }}>
                אבחון מדויק, תחזוקה יעילה - וודאו שהגדר שלכם עובדת במתח מלא
              </p>
            </div>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                למה <span className="text-primary">חשוב לבדוק?</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Gauge className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">מתח אופטימלי</h3>
                  <p className="text-muted-foreground">וודאו שהגדר מספקת מתח מספיק להרתעה אפקטיבית של בעלי החיים.</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">איתור תקלות</h3>
                  <p className="text-muted-foreground">זהו במהירות נקודות קצר, חוטים פגומים ובעיות בבידוד.</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Activity className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">תחזוקה מונעת</h3>
                  <p className="text-muted-foreground">גלו בעיות לפני שהן הופכות לנזק גדול או כשל מערכתי.</p>
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
                <span className="text-primary">מכשירי הבדיקה</span> שלנו
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Digital Voltage Tester */}
                <div className="bg-card border-2 border-primary rounded-2xl p-8">
                  <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-br-lg">
                    מומלץ
                  </div>
                  <div className="mt-4 mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">מד מתח דיגיטלי</h3>
                    <p className="text-muted-foreground">מדידה מדויקת של מתח הגדר בכל נקודה</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "תצוגה דיגיטלית גדולה וברורה",
                      "טווח מדידה: 0-10,000V",
                      "אינדיקציה ויזואלית (LED)",
                      "צליל התראה למתח נמוך",
                      "חיסכון באנרגיה - כיבוי אוטומטי",
                      "עמיד למים ולאבק (IP54)"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-3xl font-black text-primary mb-2">450-650 ₪</div>
                  <p className="text-xs text-muted-foreground">כולל סוללות ונרתיק</p>
                </div>

                {/* Fault Finder */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="mt-4 mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Fault Finder</h3>
                    <p className="text-muted-foreground">מכשיר מתקדם לאיתור קצרים ותקלות</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "איתור קצרים לאורך הקו",
                      "זיהוי צמחיה גבוהה/גדר נמוכה",
                      "מפה חזותית של הבעיה",
                      "חיווי קולי מתקרב למקור",
                      "מתאים לקווים עד 20 ק\"מ",
                      "אידיאלי לשטחים גדולים"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-3xl font-black text-primary mb-2">1,200-1,800 ₪</div>
                  <p className="text-xs text-muted-foreground">מכשיר מקצועי לחקלאים</p>
                </div>

                {/* Simple LED Tester */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">בודק LED פשוט</h3>
                    <p className="text-muted-foreground">בדיקה מהירה ובסיסית</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "5 נוריות LED לעוצמת מתח",
                      "ללא סוללות - מופעל מהגדר",
                      "קל משקל וקומפקטי",
                      "עמיד במיוחד לשטח",
                      "אידיאלי לבדיקות יומיות",
                      "מחיר אטרקטיבי"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-3xl font-black text-primary mb-2">120-200 ₪</div>
                  <p className="text-xs text-muted-foreground">פשוט וזול</p>
                </div>

                {/* Multimeter Pro */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">מולטימטר מקצועי</h3>
                    <p className="text-muted-foreground">מדידת מתח, זרם והתנגדות</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "מדידת מתח עד 15,000V",
                      "מדידת זרם דליפה",
                      "בדיקת התנגדות קו",
                      "זיכרון למדידות קודמות",
                      "חיבור Bluetooth לסמארטפון",
                      "תוכנה לניתוח נתונים"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-3xl font-black text-primary mb-2">2,200-3,000 ₪</div>
                  <p className="text-xs text-muted-foreground">רמה מקצועית ביותר</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                איך <span className="text-primary">משתמשים?</span>
              </h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">הכנה</h3>
                      <p className="text-muted-foreground">הפעילו את המכשיר וודאו שהסוללה טעונה. התקרבו לגדר בזהירות.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">חיבור</h3>
                      <p className="text-muted-foreground">חברו את החיישן לחוט הגדר. הקרקע צריכה להיות במגע עם האדמה.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">קריאה</h3>
                      <p className="text-muted-foreground">קראו את ערך המתח בתצוגה. מתח תקין: 4,000-10,000 וולט.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">אבחון</h3>
                      <p className="text-muted-foreground">מתח נמוך? בדקו קצרים, צמחייה, חיבורים רופפים ומצב הסוללה/מחולל.</p>
                    </div>
                  </div>
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
                צריכים <span className="text-primary">מכשיר בדיקה?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                נעזור לכם לבחור את הציוד המתאים לצרכי התחזוקה שלכם
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
                  <Link to="/products/insulators" className="text-primary font-semibold hover:underline">
                    מבודדים ורכיבי גידור
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link to="/maintenance" className="text-primary font-semibold hover:underline">
                    שירותי תחזוקה
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

export default ProductTestingEquipment;
