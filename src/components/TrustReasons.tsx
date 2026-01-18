import { Phone, Award, Users } from "lucide-react";

const reasons = [
  {
    icon: Phone,
    title: "זמינות מקסימלית",
    description: "תמיד כאן בשבילכם - בין אם זו התקנה דחופה או שאלה קטנה בשישי בצהריים.",
    highlight: "24/7 לרשותכם",
  },
  {
    icon: Award,
    title: "איכות בלי פשרות",
    description: "חומרים מהשורה הראשונה ועבודה מקצועית שעומדת במבחן השטח והזמן.",
    highlight: "תקן ואחריות",
  },
  {
    icon: Users,
    title: "עסק של מילואימניקים",
    description: "כמו בצבא - אחריות, מסירות ועמידה במילה. אנחנו יודעים מה זה להגן על מה שחשוב.",
    highlight: "ערכים בשטח",
  },
];

const TrustReasons = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            למה לבחור{" "}
            <span className="text-primary text-glow">בגייטקיפ?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            הוותיקים שעוצרים את החזירים - לא רק מרחיקים אותם
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card-forest rounded-2xl p-6 md:p-8 text-center group hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Highlight Badge */}
              <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full mb-4">
                {reason.highlight}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black text-foreground mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustReasons;
