import { Quote, Phone } from "lucide-react";

const PHONE_LINK = "tel:+972508585310";

const testimonials = [
  {
    quote: "מאז שהתקנו את גייטקיפ, לא נכנס חזיר אחד למטע. ההשקעה החזירה את עצמה תוך עונה אחת.",
    name: "אבי כהן",
    location: "מושב שדה ורבורג, השרון",
    role: "מגדל אבוקדו",
  },
  {
    quote: "הגיעו עם ציוד מקצועי, סיימו תוך יומיים, והכי חשוב – הבעיה נפתרה. מומלץ בחום.",
    name: "יוסי לוי",
    location: "קיבוץ מרום גולן",
    role: "מגדל ענבים",
  },
  {
    quote: "ניסינו הכל לפני גייטקיפ. גדר רגילה, מלכודות, כלום לא עבד. הגדר החשמלית הייתה הפתרון היחיד שבאמת עצר אותם.",
    name: "משה דוד",
    location: "מושב כפר יהושע",
    role: "מגדל ירקות",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ textWrap: 'balance' }}
          >
            השטח שלהם{" "}
            <span className="text-primary text-glow">כבר מוגן</span>
          </h2>
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            חקלאים מכל הארץ בחרו בגייטקיפ – וזה מה שיש להם להגיד
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-forest rounded-2xl p-8 relative group hover:border-primary/50 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-6 w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Quote */}
              <blockquote 
                className="text-foreground text-lg leading-relaxed mb-6 mt-4"
                style={{ textWrap: 'pretty' }}
              >
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-primary text-sm font-semibold">{testimonial.role}</p>
                <p className="text-muted-foreground text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p 
            className="text-muted-foreground text-lg mb-4"
            style={{ textWrap: 'pretty' }}
          >
            מוכן להגן על השטח שלך גם? דבר איתנו עוד היום
          </p>
          <a 
            href={PHONE_LINK} 
            className="btn-cta-glow inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-black pulse-urgent"
          >
            <Phone className="w-6 h-6 animate-bounce-subtle" />
            <span>התקשר עכשיו</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
