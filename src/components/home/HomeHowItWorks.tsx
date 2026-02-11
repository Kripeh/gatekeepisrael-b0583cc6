import { Zap, Sun, Settings } from "lucide-react";

const steps = [
  {
    icon: Zap,
    title: "פולסים מרתיעים",
    description: "המערכת שולחת פולסים חשמליים קצרים - מספיק לגרום לחזיר להתרחק, אך לא מזיקים לבני אדם או לחיות מחמד.",
  },
  {
    icon: Sun,
    title: "אנרגיה סולארית או חשמל",
    description: "בחר בין מערכת סולארית עצמאית לגמרי לבין חיבור לרשת החשמל הביתית. שתי האפשרויות אמינות ויעילות.",
  },
  {
    icon: Settings,
    title: "תחזוקה מינימלית",
    description: "פעם בחודש - גיזום עשבייה ובדיקה קצרה. אנחנו נלמד אותך בדיוק מה לעשות.",
  },
];

const HomeHowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ textWrap: 'balance' }}
          >
            איך המערכת{" "}
            <span className="text-primary">עובדת?</span>
          </h2>
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            הסבר פשוט על הטכנולוגיה שתגן על הגינה שלך
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center"
            >
              {/* Step Number */}
              <div className="absolute -top-4 right-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="card-forest rounded-2xl p-8 pt-10 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/15 text-primary mb-5">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorks;
