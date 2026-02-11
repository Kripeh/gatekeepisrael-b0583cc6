import { CheckCircle2, MapPin, Zap } from "lucide-react";

const caseStudies = [
  {
    title: "כרם משפחת רוזנאי - מושב לכיש",
    location: "לכיש, מחוז הדרום",
    problem: "כרם ענבים של 8 דונם סבל מפלישות לילה חוזרות של להקות חזירי בר. נזק מצטבר של כ-150,000 ₪ בשנה האחרונה.",
    solution: "התקנת 400 מטר גדר חשמלית עם 3 חוטים, מחולל מתח סולארי 10 ג'ול ומבודדים מקצועיים. תכנון אגרונומי של נתיבי הגישה.",
    results: [
      "אפס פלישות מזה 14 חודש",
      "חיסכון של 150,000 ₪ בשנה",
      "ROI של 4 חודשים בלבד",
      "שיפור באיכות האשכולות"
    ],
    testimonial: "אחרי שנה של לילות ללא שינה והרס של יבול שלם, הגדר של גייטכיפ השיבה לנו את השקט. אין יותר חזירים.",
    icon: Zap,
  },
  {
    title: "משק עגבניות - עמק הירדן",
    location: "עמק הירדן",
    problem: "משק עגבניות שרי בשטח של 12 דונם. נזקים חוזרים לחממות ולמערכות השקיה. חזירי בר גרמו לנזק של 80,000 ₪ בעונה אחת.",
    solution: "גדר היקפית של 600 מטר, 4 חוטים עם מרווחים מדויקים. מחולל 15 ג'ול לתנאי שטח מאתגרים. תכנון מיוחד לאיזורים עם מי קרקע.",
    results: [
      "95% ירידה בפלישות",
      "שיפור בתפוקה - עלייה של 12%",
      "אפס נזקים למערכות השקיה",
      "החזר השקעה תוך 5 חודשים"
    ],
    testimonial: "השקעה קטנה שהציל את העסק שלי. היה לי ספק אם זה יעבוד, אבל התוצאות מדברות בעד עצמן.",
    icon: CheckCircle2,
  },
  {
    title: "בית פרטי עם גינה - יישובי הכרמל",
    location: "חוף הכרמל",
    problem: "משפחה עם גינת ירק ו-3 ילדים קטנים. חזירים נכנסו לחצר 4 פעמים בחודש, הרסו את הגינה ויצרו מצב מסוכן לילדים.",
    solution: "גדר היקפית של 150 מטר סביב הגינה והחצר. מערכת קומפקטית עם מחולל 8 ג'ול ומתג כיבוי/הפעלה נוח.",
    results: [
      "אפס כניסות מזה 11 חודש",
      "הילדים יכולים לשחק בבטחה",
      "הגינה משגשגת",
      "שקט נפשי לכל המשפחה"
    ],
    testimonial: "לא האמנו שגדר יכולה לעשות הבדל כזה. עכשיו אנחנו ישנים בלילה וידענו שהילדים בטוחים.",
    icon: MapPin,
  },
];

const CaseStudies = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4"
            style={{ textWrap: 'balance' }}
          >
            פרויקטים אמיתיים,{" "}
            <span className="text-primary">תוצאות מוכחות</span>
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            סיפורי הצלחה של חקלאים ומשפחות שחזרו לישון בלילה
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <study.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{study.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{study.location}</span>
                  </div>
                </div>
              </div>

              {/* Problem */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-primary mb-2">האתגר</h4>
                <p className="text-muted-foreground" style={{ textWrap: 'pretty' }}>
                  {study.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-primary mb-2">הפתרון</h4>
                <p className="text-muted-foreground" style={{ textWrap: 'pretty' }}>
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-primary mb-3">התוצאות</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-secondary/50 border-r-4 border-primary rounded-lg p-5">
                <p className="text-foreground italic" style={{ textWrap: 'pretty' }}>
                  "{study.testimonial}"
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
