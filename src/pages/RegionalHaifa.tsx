import PersistentHeader from "@/components/PersistentHeader";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import { MapPin, Shield, Clock, Award, Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE_LINK = "tel:+972508585310";

const RegionalHaifa = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="גדר חשמלית נגד חזירי בר בחיפה | התקנה מקצועית | גייטקיפ"
        description="פתרונות גידור חשמלי מקצועיים לאזור חיפה והקריות. הגנה מוכחת נגד חזירי בר, התקנה מהירה וליווי מלא. שירות מקומי אמין. ☎ 050-858-5310"
        keywords="גדר חשמלית חיפה, חזירי בר חיפה, גדר נגד חזירים הקריות, הגנה מחזירי בר חיפה, גדר חשמלית קרית אתא, גדר חשמלית קרית ביאליק"
        canonicalUrl="https://gatekeepisrael.com/regional/haifa"
      />
      <PersistentHeader />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-5 py-2.5 rounded-full mb-6">
                <MapPin className="w-5 h-5" />
                <span className="font-bold">שירות מקומי בחיפה והקריות</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-tight mb-6" style={{ textWrap: 'balance' }}>
                גדר חשמלית נגד{" "}
                <span className="text-primary">חזירי בר בחיפה</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" style={{ textWrap: 'pretty' }}>
                הגנה אפקטיבית על בתים וגינות באזור חיפה, הקריות, נשר וסביבתה
              </p>
            </div>
          </div>
        </section>

        {/* Local Problem */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                <span className="text-primary">בעיית החזירים</span> בחיפה
              </h2>
              <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                <p className="text-lg text-muted-foreground mb-4">
                  אזור חיפה, הכרמל והקריות סובלים מפלישות תכופות של חזירי בר מהיער, בעיקר בשכונות הגובלות ביער הכרמל - רמות ויצחק שדה בחיפה, קרית אתא, קרית ביאליק, נשר והסביבה.
                </p>
                <p className="text-lg text-muted-foreground">
                  חזירים הורסים גינות, מסכנים תושבים ויוצרים נזקים כלכליים משמעותיים. <strong className="text-foreground">גדר חשמלית היא הפתרון היעיל ביותר</strong> שהוכח בעשרות מקרים באזור.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">אזורים בסיכון גבוה</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>שכונות רמות ויצחק שדה בחיפה</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>קרית אתא - אזור המושבה</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>קרית ביאליק - שכונות הצפון</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>נשר ועיר התחתית</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>קרית טבעון ורכסים</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">נזקים נפוצים</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>הרס גינות ומערכות השקיה</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>חפירות בדשא ובגינות</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>נזק לגדרות ומתקנים</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>איומים על ילדים ובעלי חיים</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>פגיעה בתחושת הביטחון</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                למה לבחור בנו <span className="text-primary">בחיפה?</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">שירות מקומי</h3>
                  <p className="text-sm text-muted-foreground">מכירים את האזור והבעיות המקומיות</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">זמינות גבוהה</h3>
                  <p className="text-sm text-muted-foreground">הגעה מהירה לכל אזור חיפה והקריות</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">ניסיון מוכח</h3>
                  <p className="text-sm text-muted-foreground">עשרות לקוחות מרוצים באזור</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">אחריות מלאה</h3>
                  <p className="text-sm text-muted-foreground">3 שנים + תחזוקה שוטפת</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                <span className="text-primary">סיפורי הצלחה</span> מהאזור
              </h2>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">בית פרטי בקרית אתא</h3>
                      <p className="text-sm text-muted-foreground mb-3">התקנה: ינואר 2025</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "חזירי בר היו מגיעים כל לילה והורסים את הגינה. אחרי ההתקנה של גדר חשמלית עם מחולל סולארי 10 ג'ול, הבעיה נפתרה לחלוטין. עברו כבר 6 חודשים ואף חזיר לא עבר את הגדר. השקעה שמשתלמת!"
                  </p>
                  <p className="text-foreground font-semibold mt-3">- משפחת כהן, רח' המושבה</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">גינה קהילתית בחיפה</h3>
                      <p className="text-sm text-muted-foreground mb-3">התקנה: מרץ 2024</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "הגינה הקהילתית בשכונת רמות סבלה מנזקים חוזרים. התקנו 200 מטר גדר חשמלית עם שער כניסה. מאז - שקט מוחלט. הגדר לא מפריעה לחיי היום-יום, והשירות של גייטקיפ היה מקצועי ואמין."
                  </p>
                  <p className="text-foreground font-semibold mt-3">- ועד הגינה הקהילתית</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">משק חקלאי בקרית ביאליק</h3>
                      <p className="text-sm text-muted-foreground mb-3">התקנה: נובמבר 2024</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "חזירים הרסו לנו יבול שלם בשנה שעברה. השנה התקנו גדר חשמלית מקצועית עם מערכת סולארית. לא רק שהחזירים נעלמו - גם חסכנו בעלויות חשמל. שירות מעולה והתקנה מהירה!"
                  </p>
                  <p className="text-foreground font-semibold mt-3">- משק לוי, קרית ביאליק</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Coverage */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                <span className="text-primary">כיסוי שירות</span> מלא
              </h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <p className="text-center text-lg text-muted-foreground mb-6">
                  אנחנו מספקים שירות מקצועי לכל אזור חיפה והקריות
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h3 className="font-bold text-foreground mb-2">חיפה</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>רמות ויצחק שדה</li>
                      <li>דניה וכרמליה</li>
                      <li>נווה שאנן</li>
                      <li>הכרמל המערבי</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-foreground mb-2">הקריות</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>קרית אתא</li>
                      <li>קרית ביאליק</li>
                      <li>קרית מוצקין</li>
                      <li>קרית ים</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-foreground mb-2">סביבה</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>נשר</li>
                      <li>טירת הכרמל</li>
                      <li>קרית טבעון</li>
                      <li>רכסים</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                מוכנים <span className="text-primary">להגן על הבית?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                התקשרו עכשיו לייעוץ חינם והצעת מחיר מותאמת לחיפה והקריות
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-black bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <span>התקשר עכשיו - 050-858-5310</span>
                </a>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-black border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <span>מחירון ומוצרים</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-3">אזורים נוספים</h3>
                <div className="flex flex-wrap gap-3">
                  <Link to="/regional/carmel" className="text-primary font-semibold hover:underline">
                    חוף הכרמל
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link to="/regional/jordan-valley" className="text-primary font-semibold hover:underline">
                    עמק הירדן
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link to="/wild-boar-protection" className="text-primary font-semibold hover:underline">
                    הגנה מחזירי בר
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

export default RegionalHaifa;
