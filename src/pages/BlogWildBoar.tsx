import { Link } from "react-router-dom";
import { Phone, ArrowLeft, Calendar, Clock, User, BookOpen, ChevronDown } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const PHONE_LINK = "tel:+972508585310";

// Article Schema for Rich Results
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "משבר חזירי הבר בישראל ופתרונות גידור מתקדמים",
  "description": "מדריך מקיף על משבר חזירי הבר בישראל - נזקים לחקלאות, סכנות בריאותיות, ופתרון הגדר החשמלית כהרתעה יעילה לבתים פרטיים ושטחים חקלאיים.",
  "image": "https://gatekeepisrael.com/og-image.png",
  "author": {
    "@type": "Person",
    "name": "צוות גייטקיפ",
    "url": "https://gatekeepisrael.com",
    "knowsAbout": [
      "חזירי בר",
      "גידור חשמלי",
      "מיגון חקלאי",
      "הרתעת בעלי חיים",
      "אקולוגיה עירונית"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "גייטקיפ",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gatekeepisrael.com/logo.png"
    }
  },
  "datePublished": "2026-02-06",
  "dateModified": "2026-02-06",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://gatekeepisrael.com/blog/boar_history_israel"
  },
  "keywords": "חזירי בר, גדר חשמלית, נזקי חקלאות, מיגון בתים בחיפה, הרתעת חזירים, גידור חשמלי"
};

const BlogWildBoar = () => {
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const breadcrumbs = [
    { label: "בלוג", href: "/blog" },
    { label: "משבר חזירי הבר ופתרונות גידור" },
  ];

  const sources = [
    { title: "מבקר המדינה: דו\"ח ביקורת על ניהול אוכלוסיות חזיר בר ותן ברשויות המקומיות", url: "https://www.mevaker.gov.il" },
    { title: "Local Authorities' Management of Wild Boar and Jackal Populations Within Their Jurisdictions", url: "https://www.mevaker.gov.il" },
    { title: "השפעת נבירה של חזירי בר בקרקע על חברת הצמחים העשבוניים - מחקר אקולוגי", url: null },
    { title: "ויקיפדיה - חזירי הבר בחיפה", url: "https://he.wikipedia.org/wiki/%D7%97%D7%96%D7%99%D7%A8%D7%99_%D7%94%D7%91%D7%A8_%D7%91%D7%97%D7%99%D7%A4%D7%94" },
    { title: "Wild Boar in the Technion Campus", url: "https://www.technion.ac.il" },
    { title: "Farmers helpless as wild boars ravage Arava communities - The Jerusalem Post", url: "https://www.jpost.com" },
    { title: "מועצה אזורית מטה יהודה - חיות בר", url: "https://www.mateh-yehuda.org.il" },
    { title: "דו\"ח המדינה: 865 חזירים דוללו, 24,000 פניות התקבלו, 1.3 מ' שקל לתביעות", url: null },
    { title: "גדר חשמלית קבועה/ניידת למניעת חדירת בע\"ח מזיקים - ציוד חקלאי גידור חשמלי", url: null },
    { title: "השפעות ואיומים אקולוגיים - חזיר בר כמפיץ זרעים בפארק רמת הנדיב", url: null },
    { title: "Wild boars are arriving in new neighborhoods - Haifa residents are concerned", url: null },
    { title: "An experiment was conducted at Tivon as part of the effort to find a solution to the wild boar problem", url: null },
    { title: "Electric Fencing for Serious Graziers - Rutherford County", url: "https://rutherford.ces.ncsu.edu" },
    { title: "Chart of animal voltage requirements for electric fence chargers - Speedrite", url: "https://www.valleyfarmsupply.com" },
    { title: "Electric Fence for Pigs and Hogs - Zareba Systems", url: "https://www.zarebasystems.com" },
    { title: "How to install an electric fence that is effective against wild boars", url: null },
    { title: "Electric Fencing for Pigs/Hogs - FenceFast Ltd.", url: "https://www.fencefast.ca" },
    { title: "עיריית חיפה - הקמת גדר למניעת כניסה של חזירי בר לשטח הפרטי", url: "https://www.haifa.muni.il" },
    { title: "עיריית חיפה - פרויקט לצמצום קונפליקט עם חזירי הבר בחיפה (סיכום אפריל 2025)", url: "https://www.haifa.muni.il" },
    { title: "עיריית חיפה - פרויקט לצמצום קונפליקט עם חזירי הבר בחיפה (סיכום יולי 2025)", url: "https://www.haifa.muni.il" },
    { title: "תחזית אוכלוסיית ישראל עד שנת 2030 - הלשכה המרכזית לסטטיסטיקה", url: "https://www.cbs.gov.il" },
  ];

  return (
    <ServicePageLayout
      title="משבר חזירי הבר בישראל | גדר חשמלית נגד חזירי בר - גייטקיפ"
      description="מדריך מקיף על משבר חזירי הבר בישראל - נזקים לחקלאות ובתים, סכנות בריאותיות, ופתרון הגדר החשמלית כהרתעה יעילה. מיגון בתים בחיפה והצפון."
      keywords="חזירי בר, גדר חשמלית, נזקי חקלאות, מיגון בתים בחיפה, גדר חשמלית נגד חזירים, הרתעת חזירי בר, גידור חשמלי לחקלאות"
      canonicalPath="/blog/boar_history_israel"
      breadcrumbs={breadcrumbs}
      schemaMarkup={articleSchema}
    >
      <article className="py-8 md:py-12">
        <div className="container max-w-4xl">
          {/* Article Header */}
          <header className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              משבר חזירי הבר בישראל ופתרונות גידור מתקדמים להגנה על הבית והשדה
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime="2026-02-06">פברואר 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>זמן קריאה: 12 דקות</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>מאת צוות גייטקיפ</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              הדינמיקה האקולוגית והחברתית במדינת ישראל בעשורים האחרונים עומדת בסימן קונפליקט הולך וגובר בין המרחב האנושי הבנוי לבין עולם החי. במוקד הסערה ניצב <strong>חזיר הבר</strong> (Sus scrofa) – מין שעבר תהליך מואץ של הסתגלות לחיים בקרבת בני אדם, והפך מאורח מזדמן למפגע קבוע המאיים על <Link to="/pricing" className="text-primary hover:underline font-medium">חקלאות</Link>, ביטחון אישי ובריאות הציבור.
            </p>
          </header>

          {/* CTA Banner */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  סובלים מחזירי בר? קבלו ייעוץ מקצועי חינם
                </h3>
                <p className="text-muted-foreground">
                  המומחים שלנו יסייעו לכם לבחור את הפתרון המתאים לבית או לשטח החקלאי
                </p>
              </div>
              <a href={PHONE_LINK} className="btn-cta-glow flex items-center gap-2 px-6 py-3 rounded-xl font-bold whitespace-nowrap">
                <Phone className="w-5 h-5" />
                <span>ייעוץ חינם</span>
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <nav className="bg-card border border-border rounded-xl p-6 mb-10">
            <h2 className="text-lg font-bold mb-4">תוכן העניינים</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#history" className="hover:text-primary transition-colors">השורשים ההיסטוריים של משבר חזירי הבר</a></li>
              <li><a href="#haifa" className="hover:text-primary transition-colors">הכרונולוגיה של השינוי בחיפה ובצפון</a></li>
              <li><a href="#damages" className="hover:text-primary transition-colors">המפה הגיאוגרפית של הנזקים</a></li>
              <li><a href="#agriculture" className="hover:text-primary transition-colors">המשבר בחקלאות: צפון הארץ, מטה יהודה והערבה</a></li>
              <li><a href="#health" className="hover:text-primary transition-colors">סכנות בריאותיות וביטחוניות</a></li>
              <li><a href="#failed-solutions" className="hover:text-primary transition-colors">מדוע שיטות העבר כשלו?</a></li>
              <li><a href="#electric-fence" className="hover:text-primary transition-colors">הפתרון המנצח: גדר חשמלית והרתעה פסיכולוגית</a></li>
              <li><a href="#specifications" className="hover:text-primary transition-colors">מפרט טכני מומלץ להתקנה</a></li>
              <li><a href="#strategy" className="hover:text-primary transition-colors">אסטרטגיה משולבת: סניטציה, חסימה ודילול ממוקד</a></li>
              <li><a href="#future" className="hover:text-primary transition-colors">הצפי לעתיד: היערכות ל-2030</a></li>
              <li><a href="#conclusions" className="hover:text-primary transition-colors">מסקנות והמלצות</a></li>
            </ul>
          </nav>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Section 1 */}
            <section id="history" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                השורשים ההיסטוריים של משבר חזירי הבר: מאזן הרמוני להתפרצות אוכלוסין
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ההיסטוריה של חזירי הבר בישראל היא סיפור של שגשוג תחת לחץ. בארבעים השנים האחרונות, צפיפות האוכלוסייה של המין זינקה באופן משמעותי בכל אזור הים התיכון, וישראל אינה יוצאת דופן במגמה זו.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                חזיר הבר הוא היונק היבשתי הטבעי הגדול ביותר ששרד בישראל לאחר היעלמותם של הטורפים הגדולים. עובדה זו, בשילוב עם יכולת ריבוי מרשימה, הפכה אותו ל"מין מתפרץ" – כזה שקצב גידולו עולה על כושר הנשיאה הטבעי של המערכת האקולוגית.
              </p>
            </section>

            {/* Section 2 */}
            <section id="haifa" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                הכרונולוגיה של השינוי בחיפה ובצפון
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                עד שנת 2006, שרר שיווי משקל יחסי בין תושבי השכונות בחיפה לבין חזירי הבר שחיו בוואדיות. המפגשים היו נדירים ונחשבו לאירועים מרגשים של טבע עירוני. אולם, נקודת המפנה חלה באותה שנה, כאשר החלו תצפיות עקביות של כניסת חזירים עמוק לתוך המרחב העירוני.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                הגורמים לכך היו מגוונים: החל מצמצום שטחי מחיה כתוצאה מפיתוח מואץ, ועד לזמינות גוברת של מזון אנושי ושאריות אשפה.
              </p>

              {/* Data Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-right font-bold">תקופה</th>
                      <th className="border border-border p-3 text-right font-bold">סטטוס התפוצה</th>
                      <th className="border border-border p-3 text-right font-bold">מאפייני הקונפליקט</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">לפני 2006</td>
                      <td className="border border-border p-3">פעילות מוגבלת לוואדיות ולשולי יערות</td>
                      <td className="border border-border p-3">שיווי משקל הרמוני; אירועים נדירים</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3">2006-2018</td>
                      <td className="border border-border p-3">חדירה הדרגתית לשכונות קצה</td>
                      <td className="border border-border p-3">תחילת היווצרות המטרד; עלייה בתלונות</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">2019-2025</td>
                      <td className="border border-border p-3">נוכחות קבועה בלב הערים</td>
                      <td className="border border-border p-3">התפרצות אוכלוסין; משבר לאומי</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="damages" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                המפה הגיאוגרפית של הנזקים: מחיפה ועד הערבה
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ניתוח הנתונים מהשנים האחרונות מצביע על כך שהבעיה לובשת צורות שונות בהתאם לטופוגרפיה ולאופי היישוב.
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                חיפה כמרכז המשבר העירוני
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                חיפה מהווה את המוקד הקיצוני ביותר של התופעה בישראל. בין השנים 2019 ל-2024, היקף הדיווחים על חזירי בר בחיפה היה גדול פי 29 מאשר בכל רשות מקומית אחרת שנבדקה. הנתונים מצביעים על כך שהחזירים אינם מסתפקים עוד בשכונות הצמודות לחורש, אלא חדרו ללב ליבו של המרחב הבנוי.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-right font-bold">שכונה בחיפה</th>
                      <th className="border border-border p-3 text-right font-bold">מספר פניות למוקד (2019-2024)</th>
                      <th className="border border-border p-3 text-right font-bold">אופי המטרד העיקרי</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">אחוזה</td>
                      <td className="border border-border p-3">2,382</td>
                      <td className="border border-border p-3">הפיכת פחים, נוכחות בגינות פרטיות</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3">נווה שאנן</td>
                      <td className="border border-border p-3">2,150</td>
                      <td className="border border-border p-3">נזק לגינות ציבוריות ופרטיות</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">מרכז הכרמל</td>
                      <td className="border border-border p-3">1,731</td>
                      <td className="border border-border p-3">חדירה למגרשי משחק</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3">כרמליה</td>
                      <td className="border border-border p-3">1,127</td>
                      <td className="border border-border p-3">נזק לרכבים ותשתיות</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                המשמעות הכלכלית עבור עיריית חיפה אדירה: העירייה שילמה למעלה מ-12.7 מיליון ש"ח על נזקי רכוש וגוף, והוציאה כ-1.3 מיליון ש"ח בגין ניסיונות טיפול בתופעה בתקופה זו.
              </p>
            </section>

            {/* Section 4 */}
            <section id="agriculture" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                המשבר בחקלאות: צפון הארץ, מטה יהודה והערבה
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                במגזר החקלאי, חזירי הבר מהווים איום קיומי על גידולים מסוימים. <strong>בצפון הארץ</strong>, עיקר הנזקים נרשמים במטעים, כרמים ופרדסים, שם החזירים אוכלים את הפרי, רומסים את היבולים ומשמידים מערכות השקיה יקרות.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>באזור מטה יהודה</strong>, הקרבה בין שמורות טבע לשטחים המעובדים יוצרת מצב שבו עיקר תזונתם של החזירים מתבססת על תוצרת חקלאית. החקלאים באזור זה מדווחים על פגיעה מתמשכת בפרנסה וקושי גובר להגן על השטחים באמצעים פאסיביים.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>בערבה</strong>, במיוחד במושבים עין תמר ונאות הכיכר, התופעה החריפה בשנתיים האחרונות (2024-2025). חזירי הבר באזור זה פיתחו דפוסי התנהגות אגרסיביים במיוחד. נרשמו מקרים של חדירה לתוך חממות סגורות על ידי קריעת הכיסויים, מה שמאפשר כניסת וירוסים ומזיקים נוספים ומוביל להפסדים של מאות אלפי שקלים.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                אם אתם מתמודדים עם נזקי חזירי בר בשטח חקלאי, <Link to="/installation" className="text-primary hover:underline font-medium">התקנת גדר חשמלית לחקלאות</Link> יכולה להיות הפתרון היעיל ביותר.
              </p>
            </section>

            {/* CTA Mid-article */}
            <div className="bg-accent/50 border border-accent rounded-2xl p-6 my-10 text-center">
              <h3 className="text-xl font-bold text-foreground mb-3">
                בעלי שטחים חקלאיים? הגנו על היבול שלכם עוד היום
              </h3>
              <p className="text-muted-foreground mb-4">
                קבלו הצעת מחיר מותאמת לגודל השטח ולסוג הגידולים
              </p>
              <a href={PHONE_LINK} className="btn-cta-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg">
                <Phone className="w-5 h-5" />
                <span>הזמינו ייעוץ להתקנת גדר חשמלית</span>
              </a>
            </div>

            {/* Section 5 */}
            <section id="health" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                סכנות בריאותיות וביטחוניות: מעבר לנזק הכלכלי
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                נוכחות חזירי הבר במרחב האנושי נושאת בחובה סיכונים שאינם מסתכמים רק בגינה הרוסה או בחממה קרועה.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                וקטורים להפצת מחלות (Zoonosis)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                חזירי הבר בחיפה ובאזורים אחרים נבדקו ונמצאו כנשאים של מחלות קשות העלולות לעבור לאדם ולחיות משק. בין ינואר 2022 למרץ 2024, דגימות הראו נוכחות של:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 mr-4">
                <li><strong>עכברת (Leptospirosis):</strong> מחלה זיהומית קשה העלולה לעבור לבני אדם דרך הפרשות החיה</li>
                <li><strong>פה וטלפיים:</strong> מחלה המאיימת להשבית את משק החי הישראלי ולגרום לנזקים כלכליים של מיליארדים</li>
                <li><strong>קדחת הבהרות ודבר הצאן:</strong> מחלות המצביעות על מצב תברואתי ירוד בממשק שבין חיות הבר לאדם</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                בטיחות בדרכים ותקיפות פיזיות
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                העלייה במספר המפגשים הובילה לעלייה במספר הפגיעות הגופניות. נקבות עם גורים נוטות להיות אגרסיביות במיוחד כאשר הן חשות מאוימות. בנוסף, חזירי הבר הם גורם משמעותי לתאונות דרכים, במיוחד בכבישים החוצים שטחים פתוחים בצפון ובכבישי חיפה. התנגשות עם חיה במשקל של 100 ק"ג ומעלה מסתיימת לרוב בנזק מוחלט לכלי הרכב ובפציעות לנוסעים.
              </p>
            </section>

            {/* Section 6 */}
            <section id="failed-solutions" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                ניתוח פתרונות: מדוע שיטות העבר כשלו?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                במשך שנים, הניסיון העיקרי לצמצום התופעה התמקד בדילול (Culling) באמצעות ציד או הרעלה. אולם, המחקרים והניסיון בשטח מוכיחים כי לרוב שיטות אלו מחטיאות את המטרה ואף מחמירות את המצב.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                פרדוקס הצייד
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                נמצא כי ציד אינטנסיבי עשוי להגביר את קצב הריבוי של חזירי הבר. כאשר הלחץ על האוכלוסייה גובר, החזירים מגיבים בבגרות מינית מוקדמת יותר ובהגדלת מספר הצאצאים בכל המלטה. דוח מבקר המדינה מ-2025 הביע חשש מפורש כי הדילול המסיבי שבוצע בחיפה באותה שנה יגרום לעלייה באוכלוסייה בטווח הארוך.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                הכשל של גדרות הרשת הפאסיביות
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                גדרות רשת רגילות, גם אם הן כוללות "שמלה" נגד חפירה או תיל דוקרני, אינן מהוות מכשול משמעותי עבור חזיר בר נחוש. החזיר הוא בעל אינטליגנציה גבוהה וכוח פיזי עצום; הוא לומד למצוא פרצות, לדחוף את הרשת או לחפור מתחתיה עד שיצליח.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                גדר פאסיבית אינה מייצרת הרתעה פסיכולוגית, אלא רק אתגר פיזי שהחזיר ינסה לפצח שוב ושוב.
              </p>
            </section>

            {/* Section 7 - Main Solution */}
            <section id="electric-fence" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                הפתרון המנצח: גדר חשמלית והרתעה פסיכולוגית
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                המעבר לשימוש ב<Link to="/why-electric-fence" className="text-primary hover:underline font-medium">גדר חשמלית</Link> מייצג שינוי פרדיגמה בניהול חיות בר. בניגוד למחסום פיזי, הגדר החשמלית פועלת על תודעת החיה.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                עקרון הפעולה והלמידה האינסטינקטיבית
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                גדר חשמלית אינה מיועדת לעצור את החיה בכוח פיזי, אלא "להעניש" אותה על המגע במחסום. המגע עם החוט המחושמל יוצר הלם חשמלי (מכת חשמל) קצר אך כואב מאוד, המקודד אצל החזיר כחוויה שלילית קיצונית שיש להימנע ממנה בכל מחיר.
              </p>

              <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6 mr-4">
                <li>
                  <strong>למידה חברתית:</strong> חזירי הבר הם חיות חברתיות החיות בעדרים. ברגע שהפרטים הבוגרים והמנהיגים לומדים שהגדר מסוכנת, הם מעבירים את המידע לצאצאים.
                </li>
                <li>
                  <strong>הרתעה ארוכת טווח:</strong> לאחר מספר התנסויות, החזירים ימנעו אפילו מלהתקרב לקו הגדר. הידע הזה הופך לכמעט "גנטי" בתוך הקבוצה, מה שמאפשר שמירה על שטח נקי מחזירים לאורך שנים.
                </li>
                <li>
                  <strong>סימביוזה ודו-קיום:</strong> שיטה זו אינה קטלנית ושומרת על מרחב המחיה של חיות הבר בטבע, תוך הגדרה ברורה של "התחום האסור" (הגינה או השדה) מול "התחום המותר" (הוואדי או היער).
                </li>
              </ul>

              {/* Comparison Table */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                השוואה טכנולוגית: גדר חשמלית מול גדר רשת
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border text-sm">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="border border-border p-3 text-right font-bold">מאפיין</th>
                      <th className="border border-border p-3 text-right font-bold text-primary">גדר חשמלית (אקטיבית)</th>
                      <th className="border border-border p-3 text-right font-bold">גדר רשת (פאסיבית)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">מנגנון מניעה</td>
                      <td className="border border-border p-3 bg-primary/5">הרתעה פסיכולוגית ולמידה</td>
                      <td className="border border-border p-3">חסימה פיזית בלבד</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-medium">יעילות נגד חפירה</td>
                      <td className="border border-border p-3 bg-primary/5">גבוהה מאוד (חוט תחתון מרתיע)</td>
                      <td className="border border-border p-3">נמוכה (ניתן לחפור מתחת)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">עלות התקנה</td>
                      <td className="border border-border p-3 bg-primary/5">זולה משמעותית</td>
                      <td className="border border-border p-3">יקרה עקב חומרים ותשתית</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-medium">גמישות וניידות</td>
                      <td className="border border-border p-3 bg-primary/5">קלה להתקנה מחדש ושינוי</td>
                      <td className="border border-border p-3">קבועה ומסורבלת</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">תחזוקה</td>
                      <td className="border border-border p-3 bg-primary/5">מינימלית (בדיקת מתח)</td>
                      <td className="border border-border p-3">גבוהה (תיקון פרצות וקריעות)</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-medium">השפעה על החיה</td>
                      <td className="border border-border p-3 bg-primary/5">הרתעה ללא נזק קבוע</td>
                      <td className="border border-border p-3">פציעות מהתיל, לכידה ברשת</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8 */}
            <section id="specifications" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                מפרט טכני מומלץ להתקנה
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                כדי שגדר חשמלית תספק הגנה מקסימלית <Link to="/home-solutions" className="text-primary hover:underline font-medium">בבתים פרטיים</Link> ובחקלאות, עליה לעמוד במפרט טכני מחמיר המותאם לפיזיולוגיה של חזיר הבר.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                1. מתח ואנרגיה (Voltage & Joules)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                חזיר הבר מוגן על ידי עור עבה ולעיתים גם בוץ המשמש כבידוד. לכן, נדרש מכשיר (Energizer) עוצמתי:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 mr-4">
                <li><strong>מתח מינימלי:</strong> לפחות 5,000 וולט (5,000V) על קו הגדר</li>
                <li><strong>עכבה נמוכה (Low Impedance):</strong> מומלץ להשתמש במכשירים המסוגלים להתגבר על אובדן מתח כתוצאה ממגע של צמחייה רטובה בחוטים</li>
                <li><strong>בקרת פעימות:</strong> המכשיר חייב להפיק פעימות קצרות (עד 0.0003 שניות) בתדירות של 35-65 פעימות בדקה כדי להבטיח בטיחות מקסימלית לבני אדם וחיות מחמד</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                2. סידור החוטים והגובה
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                מכיוון שהחזיר הוא חיה שנוטה לנבור בקרקע, החוט הראשון הוא הקריטי ביותר:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 mr-4">
                <li><strong>החוט התחתון:</strong> חייב להיות בגובה כ-15 ס"מ (6 אינץ') מהקרקע כדי למנוע דחיפת האף מתחת לגדר</li>
                <li><strong>מספר חוטים:</strong> עבור הגנה מלאה על מטעים או בתים פרטיים, מומלץ על מערכת של לפחות 3 חוטים, בגבהים של 15 ס"מ, 40 ס"מ ו-65 ס"מ</li>
                <li><strong>בחיפה ובערים:</strong> גובה הגידור הכולל במגרשים פרטיים צריך לנוע בין 1.1 ל-1.5 מטר בהתאם להנחיות העירוניות</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                3. מערכת ההארקה (The Grounding System)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                הסיבה העיקרית לכשל במערכות חשמליות היא הארקה לקויה. ללא הארקה טובה, המעגל החשמלי לא נסגר והחיה לא תקבל את מכת ההרתעה:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 mr-4">
                <li><strong>מוטות הארקה:</strong> יש להשתמש בלפחות שלושה מוטות פלדה מגולוונת או נחושת באורך 1.5 מטר, המרוחקים 3 מטרים זה מזה</li>
                <li><strong>לחות:</strong> באזורים יבשים, כמו הערבה, יש להשקות את אזור המוטות או להשתמש בשיטת "Hot/Ground" שבה חלק מהחוטים בגדר עצמה משמשים כהארקה</li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed">
                עבור מידע על מחירים ומפרטים מדויקים, בקרו ב<Link to="/pricing" className="text-primary hover:underline font-medium">עמוד המחירון</Link> שלנו או צרו קשר לייעוץ אישי.
              </p>
            </section>

            {/* Section 9 */}
            <section id="strategy" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                אסטרטגיה משולבת: סניטציה, חסימה ודילול ממוקד
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                הניסיון שנצבר בפרויקט המשותף של עיריית חיפה ורשות הטבע והגנים (ורט"ג) מלמד כי גידור לבדו אינו מספיק אם הוא לא מלווה בשינוי סביבתי.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                ניהול מקורות מזון (סניטציה)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                החזירים נכנסים ליישובים בחיפוש אחר מזון קל. פעולות הסניטציה ההכרחיות כוללות:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 mr-4">
                <li><strong>קיבוע פחי אשפה:</strong> שימוש בהתקנים המונעים מחזירים להפוך את הפחים</li>
                <li><strong>עצירת האכלה מכוונת:</strong> אכיפה קפדנית נגד תושבים המאכילים חזירי בר או משאירים מזון לחתולי רחוב ללא פיקוח</li>
                <li><strong>טיפול בביוב:</strong> תיקון נזילות מים וביוב המהווים מקור שתייה ומשיכה לחזירים בתקופות יובש</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                חסימת נתיבי חדירה – פרויקט הגידור
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                החזירים משתמשים בנתיבים טופוגרפיים קבועים. בחיפה וביישובי צפון הארץ, חסימה חכמה של נתיבי הכניסה הללו על ידי גדר היקפית ושערי בקר ייעודיים הוכיחה שניתן לצמצם את הנוכחות לרמה זניחה. פרויקט בטכניון שכלל 1,800 מטר של גדר הראה תוצאות מצוינות.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                גם <Link to="/solar-fence" className="text-primary hover:underline font-medium">גדר חשמלית סולארית</Link> יכולה להוות פתרון אידיאלי לאזורים ללא חיבור לחשמל.
              </p>
            </section>

            {/* Section 10 */}
            <section id="future" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                הצפי לעתיד: היערכות ל-2030
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                מגמות גידול האוכלוסייה בישראל מצביעות על כך שהחיכוך עם חזירי הבר רק ילך ויחריף. עד שנת 2030, אוכלוסיית ישראל צפויה להגיע לכ-10 מיליון נפש, מה שיגרום לצמצום נוסף בשטחים הפתוחים.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-8">
                המגמות הצפויות בניהול המשבר:
              </h3>
              <ol className="list-decimal list-inside text-muted-foreground space-y-3 mb-4 mr-4">
                <li><strong>איחוד סמכויות:</strong> צפוי מעבר לאחריות מדינתית ברורה יותר, שכן כיום הרשויות המקומיות חשות מופקרות להתמודד עם התופעה לבדן</li>
                <li><strong>טכנולוגיות חכמות:</strong> שילוב של חיישנים ומצלמות במעגל סגור על גבי הגדרות החשמליות כדי לזהות ניסיונות פריצה או תקלות בזמן אמת</li>
                <li><strong>שינוי נופי:</strong> מעבר לגינון עירוני "חסין חזירים" – שימוש בצמחים שאינם אטרקטיביים למאכל וצמצום שטחי דשא המזמינים נבירה</li>
                <li><strong>בקרה ביולוגית:</strong> המשך מחקר על שימוש באמצעי מניעה (Birth control) המפוזרים בפיתיונות כדי להוריד את קצב הריבוי ללא הרג</li>
              </ol>
            </section>

            {/* Section 11 - Conclusions */}
            <section id="conclusions" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                מסקנות והמלצות לבעלי בתים וחקלאים
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                משבר חזירי הבר בישראל הוא עובדה קיימת, אך הוא אינו גזרת גורל. מהנתונים והניתוח המקצועי עולה כי:
              </p>

              <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6 mr-4">
                <li>
                  <strong>אחריות הפרט:</strong> במצב שבו המדינה והרשויות מתקשות לספק פתרון קצה, על בעלי הבתים והחקלאים להשקיע במיגון עצמאי ואפקטיבי
                </li>
                <li>
                  <strong>הגדר החשמלית היא הפתרון היעיל ביותר:</strong> היא מספקת את רמת הביטחון הגבוהה ביותר בעלות הנמוכה ביותר, תוך יצירת הרתעה פסיכולוגית שנשמרת לאורך זמן
                </li>
                <li>
                  <strong>מקצועיות בהתקנה:</strong> הצלחת המערכת תלויה בדיוק טכני – החל מגובה החוטים ועד לאיכות ההארקה. התקנה חובבנית עלולה להוביל לכישלון וללמידה של החזיר שניתן לעקוף את המחסום
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-4">
                בעולם שבו הגבולות בין הטבע לעיר היטשטשו, הגידור החשמלי החכם אינו רק אמצעי הגנה, אלא הכלי המאפשר דו-קיום בכבוד בין האדם לבין חיות הבר, תוך שמירה על רכוש, פרנסה וביטחון אישי. ככל שנשכיל לאמץ פתרונות טכנולוגיים מבוססי מדע, כך נוכל להבטיח שהחזירים ישארו בוואדי – ואנחנו נוכל להמשיך ליהנות מהגינה ומהשדה בשקט.
              </p>
            </section>
          </div>

          {/* Final CTA */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              מוכנים להגן על הנכס שלכם מפני חזירי בר?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              צוות המומחים של גייטקיפ יבצע סקר מקצועי ויתאים עבורכם את פתרון הגידור המושלם – לבית או לשטח חקלאי
            </p>
            <a 
              href={PHONE_LINK} 
              className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-background/90 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>הזמינו ייעוץ להתקנת גדר חשמלית</span>
            </a>
            <p className="mt-4 text-sm opacity-75">
              או התקשרו ישירות: 050-858-5310
            </p>
          </div>

          {/* Sources Section */}
          <Collapsible
            open={sourcesOpen}
            onOpenChange={setSourcesOpen}
            className="mt-10 border border-border rounded-xl overflow-hidden"
          >
            <CollapsibleTrigger asChild>
              <button className="w-full flex items-center justify-between p-4 bg-card hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="font-bold text-foreground">מקורות ומחקרים ({sources.length})</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${sourcesOpen ? 'rotate-180' : ''}`} />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 pt-0 bg-card">
                <p className="text-sm text-muted-foreground mb-4">
                  המאמר מבוסס על מחקרים אקדמיים, דו"חות רשמיים ומידע מקצועי:
                </p>
                <ol className="space-y-2 text-sm">
                  {sources.map((source, index) => (
                    <li key={index} className="flex gap-2 text-muted-foreground">
                      <span className="font-medium text-foreground shrink-0">{index + 1}.</span>
                      {source.url ? (
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {source.title}
                        </a>
                      ) : (
                        <span>{source.title}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Related Articles */}
          <RelatedArticles currentPath="/blog/boar_history_israel" />

          {/* Back to Blog */}
          <div className="mt-10 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>חזרה לבלוג</span>
            </Link>
          </div>
        </div>
      </article>
    </ServicePageLayout>
  );
};

export default BlogWildBoar;
