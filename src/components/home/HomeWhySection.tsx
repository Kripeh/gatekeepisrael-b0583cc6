import { Shield, Eye, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "בטוח למשפחה",
    description: "זרם נמוך ופולסים קצרים - מרתיע חיות בר אך בטוח לילדים ולחיות מחמד. שוק קל שמלמד להתרחק.",
  },
  {
    icon: Eye,
    title: "לא פוגע במראה",
    description: "חוטים דקים ושקופים שכמעט לא נראים. הגינה שלך נשארת יפה ומוגנת מפני פלישות.",
  },
  {
    icon: Leaf,
    title: "פתרון ירוק",
    description: "ללא רעלים, ללא מלכודות אכזריות. פתרון אקולוגי שפשוט מרחיק את החיות בלי לפגוע בהן.",
  },
];

const HomeWhySection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ textWrap: 'balance' }}
          >
            למה גדר חשמלית{" "}
            <span className="text-primary text-glow">לבית?</span>
          </h2>
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            הפתרון האפקטיבי והבטוח ביותר להגנה על הגינה והחצר
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-forest rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 text-primary mb-6">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={{ textWrap: 'pretty' }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhySection;
