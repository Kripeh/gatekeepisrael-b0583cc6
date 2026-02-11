import PersistentHeader from "@/components/PersistentHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import { MapPin, Shield, Clock, Award, Phone, CheckCircle, Mountain } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE_LINK = "tel:+972508585310";

const RegionalJordan = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="גדר חשמלית בעמק הירדן | בית שאן, טבריה, הגלבוע | גייטקיפ"
        description="פתרונות גידור חשמלי מקצועיים לעמק הירדן - הגנה על משקים חקלאיים, מטעים ומושבים מבעלי חיים. שירות מקומי ואמין. ☎ 050-858-5310"
        keywords="גדר חשמלית עמק הירדן, גדר חשמלית בית שאן, גדר חשמלית טבריה, גדר חקלאית עמק הירדן, הגנה על מטעים, גדר נגד חזירים עמק בית שאן"
        canonicalUrl="https://gatekeepisrael.com/regional/jordan-valley"
      />
      <PersistentHeader />
      <Breadcrumbs
        items={[
          { label: "אזורי שירות", href: "/service-areas" },
          { label: "עמק הירדן" }
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-5 py-2.5 rounded-full mb-6">
                <Mountain className="w-5 h-5" />
                <span className="font-bold">שירות מקצועי לעמק הירדן</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-tight mb-6" style={{ textWrap: 'balance' }}>
                גדר חשמלית{" "}
                <span className="text-primary">בעמק הירדן</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" style={{ textWrap: 'pretty' }}>
                פתרונות גידור חקלאיים לעמק - מבית שאן ועד הכנרת
              </p>
            </div>
          </div>
        </section>

        {/* Local Context */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                <span className="text-primary">האתגר החקלאי</span> בעמק
              </h2>
              <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                <p className="text-lg text-muted-foreground mb-4">
                  עמק הירדן הוא אזור חקלאי אינטנסיבי עם משקים, מטעים, חוות בקר ועופות, וכרמים. האזור מתמודד עם אתגרים ייחודיים: חזירי בר מהרי הגלבוע והגולן, זאבים, תנים, וציפורים המזיקות ליבולים.
                </p>
                <p className="text-lg text-muted-foreground">
                  <strong className="text-foreground">גדרות חשמליות</strong> נותנות מענה יעיל במיוחד בתנאי העמק: עומדות בחום הקיצי, מתאימות לשטחים גדולים, וחסכוניות לטווח ארוך.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">אזורי השירות</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>עמק בית שאן - בית שאן, טירת צבי, מסילות</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>הגלבוע - מעלה גלבוע, עין חרוד, גבעת אבני</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>עמק יזרעאל - עפולה, נהלל, מרחביה</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>הכנרת - טבריה, כנרת, דגניה</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>הירדן הצפוני - כפר רופין, מבואות הירדן</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>בקעת בית שאן והגלבוע המזרחי</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">תחומי התמחות</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>הגנה על מטעי תמרים ובננות</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>גידור רפתות וחוות עופות</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>הגנה על גידולי שטח</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>מכלאות בקר וכבשים</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>משקי דייגים ואקווקלצ'ר</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>משקי אורגניים וחקלאות מדויקת</span>
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
                למה לבחור בנו <span className="text-primary">בעמק הירדן?</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Mountain className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">התמחות חקלאית</h3>
                  <p className="text-sm text-muted-foreground">ניסיון רב במשקים ומטעים</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">זמינות גבוהה</h3>
                  <p className="text-sm text-muted-foreground">מענה מהיר לכל עמק הירדן</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">ניסיון מוכח</h3>
                  <p className="text-sm text-muted-foreground">עבודות בעשרות משקים באזור</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">עמידות בתנאי קיצון</h3>
                  <p className="text-sm text-muted-foreground">מערכות המותאמות לחום העמק</p>
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
                <span className="text-primary">פרויקטים</span> בעמק
              </h2>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">מטע תמרים בבקעת בית שאן</h3>
                      <p className="text-sm text-muted-foreground mb-3">התקנה: ספטמבר 2024 | שטח: 25 דונם</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "חזירי בר הרסו לנו מערכות השקייה ופגעו בעצי התמר הצעירים. התקנו גדר חשמלית היקפית עם שני מחוללים של 15 ג'ול. 1,200 מטר גידור מקצועי. הפתרון עבד מעולה - אפס נזקים מאז. גייטקיפ עשו עבודה מקצועית והמחיר היה הוגן."
                  </p>
                  <p className="text-foreground font-semibold mt-3">- משה, מטע תמרי הבקעה</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">רפת בעמק יזרעאל</h3>
                      <p className="text-sm text-muted-foreground mb-3">התקנה: נובמבר 2024 | שטח: 18 דונם</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "נדרש לנו גידור היקפי לרפת ומכלאות הבקר. גייטקיפ התקינו מערכת מלאה עם מחולל רשת 15 ג'ול, 800 מטר גדר ו-3 שערים גדולים. המערכת עומדת בעומסים, עובדת בכל מזג אוויר ונותנת לנו שקט נפשי. מומלץ ביותר!"
                  </p>
                  <p className="text-foreground font-semibold mt-3">- רפת שיתופית, מושב נהלל</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">חוות עופות ליד בית שאן</h3>
                      <p className="text-sm text-muted-foreground mb-3">התקנה: מרץ 2024 | שטח: 12 דונם</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "הזאבים והשועלים היו בעיה קבועה. גייטקיפ התקינו גדר היקפית עם מתח גבוה במיוחד. התקנה מהירה, אחריות מלאה, ושירות תחזוקה מצוין. מאז - אפס פריצות ואפס נזקים. החווה מוגנת לחלוטין."
                  </p>
                  <p className="text-foreground font-semibold mt-3">- דני, חוות העמק</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">משק אורגני בגלבוע</h3>
                      <p className="text-sm text-muted-foreground mb-3">התקנה: יוני 2024 | שטח: 8 דונם</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "כמשק אורגני רצינו פתרון ירוק ויעיל. קיבלנו מערכת סולארית מלאה - מחולל 10 ג'ול, 400 מטר גידור, ושני שערים. המערכת עובדת מצוין גם בימים מעוננים. אפס עלויות תפעול ושקט מוחלט מחזירים."
                  </p>
                  <p className="text-foreground font-semibold mt-3">- משפחת שרון, אדמה חיה</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agricultural Solutions */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
                <span className="text-primary">פתרונות</span> חקלאיים
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">מטעים</h3>
                  <p className="text-muted-foreground mb-3">תמרים, בננות, פקאן, זיתים</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• גידור היקפי מקיף</li>
                    <li>• מחוללים 10-15 ג'ול</li>
                    <li>• מתאים לשטחים גדולים</li>
                    <li>• עמידות לתנאי שטח</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">רפתות וחוות</h3>
                  <p className="text-muted-foreground mb-3">בקר, כבשים, עופות</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• מערכות מתח גבוה</li>
                    <li>• שערים רחבים למעבר ציוד</li>
                    <li>• התנגדות לעומסים</li>
                    <li>• מערכות ניטור</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">גידולי שטח</h3>
                  <p className="text-muted-foreground mb-3">תבואות, ירקות, פרחים</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• גידור זמני/קבוע</li>
                    <li>• מערכות ניידות</li>
                    <li>• התאמה לעונות</li>
                    <li>• עלות אפקטיבית</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">אקווקלצ'ר</h3>
                  <p className="text-muted-foreground mb-3">בריכות דגים ורבייה</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• הגנה מציפורים ותנים</li>
                    <li>• מערכות עמידות במים</li>
                    <li>• פתרונות ייחודיים</li>
                    <li>• תחזוקה מתמשכת</li>
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
                מוכנים <span className="text-primary">להגן על המשק?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                התקשרו עכשיו לייעוץ חקלאי מקצועי והצעת מחיר לעמק הירדן
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
                  <span>מחירון חקלאי</span>
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
                <h3 className="font-bold text-foreground mb-3">דפים קשורים</h3>
                <div className="flex flex-wrap gap-3">
                  <Link to="/regional/haifa" className="text-primary font-semibold hover:underline">
                    חיפה והקריות
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link to="/regional/carmel" className="text-primary font-semibold hover:underline">
                    חוף הכרמל
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

export default RegionalJordan;
