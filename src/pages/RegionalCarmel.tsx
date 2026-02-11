import PersistentHeader from "@/components/PersistentHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import { MapPin, Shield, Clock, Award, Phone, CheckCircle, Trees } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE_LINK = "tel:+972508585310";

const RegionalCarmel = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="גדר חשמלית ביישובי חוף הכרמל | זכרון, בנימינה, פרדס חנה | גייטקיפ"
        description="פתרונות גידור חשמלי מקצועיים לחוף הכרמל - זכרון יעקב, בנימינה, פרדס חנה, קיסריה והסביבה. הגנה מחזירי בר ובעלי חיים. ☎ 050-858-5310"
        keywords="גדר חשמלית זכרון יעקב, גדר חשמלית בנימינה, גדר חשמלית פרדס חנה, גדר חשמלית קיסריה, חזירי בר חוף הכרמל, גדר חשמלית עין הוד"
        canonicalUrl="https://gatekeepisrael.com/regional/carmel"
      />
      <PersistentHeader />
      <Breadcrumbs
        items={[
          { label: "אזורי שירות", href: "/service-areas" },
          { label: "חוף הכרמל" }
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-5 py-2.5 rounded-full mb-6">
                <Trees className="w-5 h-5" />
                <span className="font-bold">שירות מקצועי לחוף הכרמל</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-tight mb-6" style={{ textWrap: 'balance' }}>
                גדר חשמלית{" "}
                <span className="text-primary">ביישובי חוף הכרמל</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" style={{ textWrap: 'pretty' }}>
                הגנה אפקטיבית על בתים, חוות וכרמים - מזכרון יעקב ועד קיסריה
              </p>
            </div>
          </div>
        </section>

        {/* Local Context */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                <span className="text-primary">אתגרי הגידור</span> באזור
              </h2>
              <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                <p className="text-lg text-muted-foreground mb-4">
                  אזור חוף הכרמל משלב יישובים כפריים, חוות, כרמים ובתים פרטיים, כולם חשופים לפלישות של חיות בר - במיוחד חזירי בר מיער הכרמל וההרים. האזור מאופיין בשטחים חקלאיים פתוחים, גינות גדולות ופריסה גיאוגרפית רחבה.
                </p>
                <p className="text-lg text-muted-foreground">
                  <strong className="text-foreground">גדר חשמלית</strong> היא הפתרון האידיאלי - מתאימה לשטחים גדולים, חסכונית לאורך זמן, וניתנת להתאמה לכל סוג נכס.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">יישובים מרכזיים</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>זכרון יעקב ובנימינה-גבעת עדה</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>פרדס חנה-כרכור</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>קיסריה והסביבה</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>עין הוד, דור, נחשולים</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>מושבים - שדות יצחק, מעיין צבי</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>חוות וכרמים פרטיים</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">סוגי נכסים</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>בתים פרטיים עם גינות גדולות</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>כרמים ויקבים</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>חוות סוסים וחיות משק</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>משקי חקלאות אורגנית</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>חוות נופש ואירוח כפרי</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>מתקני תיירות וחינוך</span>
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
                למה לבחור בנו <span className="text-primary">בחוף הכרמל?</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">היכרות עם האזור</h3>
                  <p className="text-sm text-muted-foreground">מכירים את השטח והאתגרים הייחודיים</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">זמינות מהירה</h3>
                  <p className="text-sm text-muted-foreground">שירות מהיר לכל אזור חוף הכרמל</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">התמחות כפרית</h3>
                  <p className="text-sm text-muted-foreground">ניסיון בחוות, כרמים ומשקים</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">פתרונות מותאמים</h3>
                  <p className="text-sm text-muted-foreground">גדרות לכל סוג שטח וצורך</p>
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
                <span className="text-primary">פרויקטים מוצלחים</span> באזור
              </h2>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">יקב בוטיק בזכרון יעקב</h3>
                      <p className="text-sm text-muted-foreground mb-3">התקנה: אוגוסט 2024 | שטח: 4 דונם</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "חזירי בר גרמו נזקים משמעותיים לגפנים. התקנו גדר חשמלית סולארית המקיפה את כל הכרם. מערכת 15 ג'ול עם 400 מטר גידור. מאז ההתקנה - אפס נזקים. היקב מוגן לחלוטין והיבול התאושש. שירות מקצועי ואמין!"
                  </p>
                  <p className="text-foreground font-semibold mt-3">- משפחת לוי, יקב הכרמים</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">חוות סוסים בבנימינה</h3>
                      <p className="text-sm text-muted-foreground mb-3">התקנה: ינואר 2025 | שטח: 10 דונם</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "הזאבים והחזירים איימו על הסוסים והציוד. גייטקיפ התקינו מערכת מקיפה עם מחולל 15 ג'ול ושני שערים גדולים. התוצאה מדהימה - החיות מוגנות לחלוטין והחווה פועלת בשקט. השקעה שמשתלמת."
                  </p>
                  <p className="text-foreground font-semibold mt-3">- ליאת, חוות הסוסים שבעמק</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">בית פרטי בפרדס חנה</h3>
                      <p className="text-sm text-muted-foreground mb-3">התקנה: דצמבר 2024 | שטח: דונם וחצי</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "הגינה הגדולה שלנו סבלה מפלישות ליליות של חזירים. ההתקנה הייתה מהירה, מקצועית וללא טרטורים. הגדר מתמזגת יפה עם הנוף, לא מפריעה ומגנה בצורה מושלמת. ממליץ בחום!"
                  </p>
                  <p className="text-foreground font-semibold mt-3">- משפחת דוד, שכונת החוות</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">משק אורגני בעין הוד</h3>
                      <p className="text-sm text-muted-foreground mb-3">התקנה: מרץ 2024 | שטח: 6 דונם</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "כמשק אורגני היינו צריכים פתרון ידידותי לסביבה. הגדר החשמלית הסולארית היא מושלמת - אפס זיהום, אפס כימיקלים, הגנה מלאה. החזירים למדו במהירות להתרחק והמשק שלנו מוגן."
                  </p>
                  <p className="text-foreground font-semibold mt-3">- נועם, משק אדמה טובה</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                <span className="text-primary">פתרונות</span> לכל צורך
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">בתים פרטיים</h3>
                  <p className="text-muted-foreground mb-3">מערכות קומפקטיות למגרשים של 0.5-2 דונם</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• מחולל 10 ג'ול סולארי</li>
                    <li>• 100-200 מטר גידור</li>
                    <li>• שער כניסה מבודד</li>
                    <li>• התקנה תוך יום אחד</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">חוות וכרמים</h3>
                  <p className="text-muted-foreground mb-3">מערכות מתקדמות לשטחים של 5-20 דונם</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• מחולל 15 ג'ול רשת/סולארי</li>
                    <li>• עד 1,000 מטר גידור</li>
                    <li>• מספר שערים ומעברים</li>
                    <li>• ניטור ותחזוקה</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">משקי חקלאות</h3>
                  <p className="text-muted-foreground mb-3">פתרונות תעשייתיים למשקים גדולים</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• מחוללים מרובים</li>
                    <li>• גידור היקפי מלא</li>
                    <li>• מערכות השקיה משולבות</li>
                    <li>• תחזוקה שנתית</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">חוות אירוח</h3>
                  <p className="text-muted-foreground mb-3">הגנה + אסתטיקה למתקני תיירות</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• גידור דיסקרטי ויפה</li>
                    <li>• אזורי מעבר מוגנים</li>
                    <li>• שילוט בטיחות</li>
                    <li>• תמיכה 24/7</li>
                  </ul>
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
                מוכנים <span className="text-primary">להגן על הנכס?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                התקשרו עכשיו לייעוץ חינם והצעת מחיר מותאמת לאזור חוף הכרמל
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
                  <Link to="/regional/haifa" className="text-primary font-semibold hover:underline">
                    חיפה והקריות
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link to="/regional/jordan-valley" className="text-primary font-semibold hover:underline">
                    עמק הירדן
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link to="/agriculture" className="text-primary font-semibold hover:underline">
                    פתרונות חקלאיים
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

export default RegionalCarmel;
