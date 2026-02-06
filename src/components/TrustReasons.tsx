import { useState } from "react";
import { Zap, Shield, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    icon: Zap,
    title: "טכנולוגיה מוכחת",
    description: "עשרות אלפי מטרים של גדרות עמידות ומוצלחות.",
  },
  {
    icon: Shield,
    title: "עמידות בתנאי שטח",
    description: "חומרים עמידים בפני שמש, גשם וקורוזיה. תוכננו במיוחד לאקלים הישראלי ולאתגרים של השטח החקלאי.",
  },
  {
    icon: Headphones,
    title: "ליווי מקצועי",
    description: "צוות מומחים זמין לכל שאלה ותמיכה. מהתכנון הראשוני ועד האחריות המלאה – אנחנו איתך בכל שלב.",
  },
];

const TrustReasons = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ textWrap: 'balance' }}
          >
            למה לבחור{" "}
            <span className="text-primary">בגייטקיפ?</span>
          </h2>
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            פתרונות מיגון מקצועיים שמגינים על הפרנסה שלך
          </p>
        </div>

        {/* Trust Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="group relative card-forest rounded-2xl p-8 md:p-10 text-center cursor-pointer overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(142_76%_45%/0.15)] min-h-[280px] md:min-h-[320px]"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                <reason.icon className="w-10 h-10 text-primary" />
              </div>

              {/* Title - Always Visible */}
              <h3 
                className="text-xl md:text-2xl font-black text-foreground mb-4 transition-all duration-500"
                style={{ textWrap: 'balance' }}
              >
                {reason.title}
              </h3>

              {/* Description - Desktop: Hover reveal, Mobile: Click expand */}
              <div 
                className={`
                  transition-all duration-500 ease-out
                  md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0
                  ${expandedCard === index ? 'opacity-100 translate-y-0 max-h-40' : 'opacity-0 translate-y-4 max-h-0 md:max-h-40'}
                  overflow-hidden
                `}
              >
                <p 
                  className="text-muted-foreground leading-relaxed"
                  style={{ textWrap: 'pretty' }}
                >
                  {reason.description}
                </p>
              </div>

              {/* Mobile indicator */}
              <div className="md:hidden mt-4 text-primary/60 text-sm font-medium">
                {expandedCard === index ? 'לחץ לסגירה' : 'לחץ לפרטים'}
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Internal Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
          <Link to="/installation" className="text-primary font-semibold hover:underline">תהליך ההתקנה שלנו</Link>
          <Link to="/solar-fence" className="text-primary font-semibold hover:underline">גדר סולארית לשטחים ללא חשמל</Link>
          <Link to="/service-areas" className="text-primary font-semibold hover:underline">אזורי שירות בכל הארץ</Link>
        </div>
      </div>
    </section>
  );
};

export default TrustReasons;
