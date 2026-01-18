import { Clock, Shield, Zap } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "זמינות מיידית",
    description: "אנחנו יודעים שהנזק קורה עכשיו. צוות שטח מגיע תוך 24-48 שעות.",
    highlight: "מענה בכל שעה",
  },
  {
    icon: Shield,
    title: "מומחיות במיגון חקלאי",
    description: "מערכות מותאמות ספציפית לחזירי בר וחיות גדולות. פולסים בעוצמה גבוהה.",
    highlight: "15+ שנות ניסיון",
  },
  {
    icon: Zap,
    title: "עמידות מקסימלית",
    description: "ציוד תקני שעומד בעומסים קיצוניים. בזנטים מגולוונים, מוליכות איכותיות והארקה מקצועית.",
    highlight: "אחריות מלאה",
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
