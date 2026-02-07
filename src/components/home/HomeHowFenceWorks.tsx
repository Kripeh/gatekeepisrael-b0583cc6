import { Shield, Zap, Sun, Clock, MapPin } from "lucide-react";

const keyPoints = [
  {
    icon: Zap,
    title: "3 חוטים מרתיעים",
    description: "שלושה חוטי פלדה דקים ושקופים כמעט, נמתחים בגבהים שונים ליצירת מחסום אפקטיבי נגד חזירים, דורבנים ושועלים.",
  },
  {
    icon: Sun,
    title: "עמודים לבחירתך",
    description: "עמודי תמיכה מותאמים לסוג השטח והעדפת הלקוח – מפיברגלס, מתכת או עץ. משתלבים בטבעיות בגינה.",
  },
  {
    icon: Clock,
    title: "עצמאית לחלוטין",
    description: "המערכת אינה דורשת חיבור לרשת החשמל. פאנל סולארי קטן טוען את המצבר, והמערכת עובדת 24/7 – גם בלילה ובימי חורף.",
  },
  {
    icon: Shield,
    title: "בטוחה למשפחה",
    description: "המערכת שולחת פולסים קצרים של מתח גבוה בזרם נמוך מאוד. כמו חשמל סטטי חזק – מרתיע חיות אך אינו מסוכן לילדים או לחיות מחמד.",
  },
];

const HomeHowFenceWorks = () => {
  return (
    <section className="py-16 md:py-24" id="how-fence-works">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4"
              style={{ textWrap: "balance" }}
            >
              איך עובדת הגדר{" "}
              <span className="text-primary">הביתית?</span>
            </h2>
            <p
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
              style={{ textWrap: "pretty" }}
            >
              מערכת פשוטה, אמינה ובטוחה - מוכנה לעבודה תוך יום אחד
            </p>
          </div>

          {/* Intro Callout */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10">
            <p
              className="text-foreground leading-relaxed text-lg text-center"
              style={{ textWrap: "pretty" }}
            >
              הגדר החשמלית הביתית שלנו מבוססת על שלושה חוטי פלדה דקים הנמתחים על גבי עמודים לבחירת הלקוח. המערכת פועלת באופן עצמאי לחלוטין על אנרגיה סולארית – אין צורך בחיבור לחשמל ואין צורך במתיחת כבל.
            </p>
          </div>

          {/* Key Points Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className="card-forest rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/15 text-primary rounded-full flex items-center justify-center">
                    <point.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p
                      className="text-muted-foreground leading-relaxed"
                      style={{ textWrap: "pretty" }}
                    >
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Highlights */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
            <div className="flex items-center gap-2 text-primary font-bold">
              <Clock className="w-5 h-5" />
              <span>התקנה ביום אחד</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold">
              <MapPin className="w-5 h-5" />
              <span>שירות בכל הארץ</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold">
              <Shield className="w-5 h-5" />
              <span>בטוח למשפחה</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowFenceWorks;
