import { Phone, AlertTriangle } from "lucide-react";

const PHONE_LINK = "tel:+972501234567";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center pt-24 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/40 text-destructive px-4 py-2 rounded-full mb-6 animate-pulse">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-bold text-sm">הנזק מתרחש עכשיו - כל לילה נוסף הוא הפסד כספי</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight mb-6">
            חזירים{" "}
            <span className="text-primary text-glow">מחסלים</span>
            {" "}לך את הפרנסה?
            <br />
            <span className="text-primary text-glow">אנחנו עוצרים אותם היום.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            אל תחכה לפשיטה של הלילה. 
            <strong className="text-foreground"> גדר חשמלית מקצועית</strong> היא הפתרון היחיד שעובד.
            <br />
            <span className="text-primary font-semibold">בזנטים, מוליכות והארקה</span> - הכל על פי תקן.
          </p>

          {/* Primary CTA */}
          <a
            href={PHONE_LINK}
            className="btn-cta-glow inline-flex items-center gap-3 px-8 py-5 md:px-12 md:py-6 rounded-xl text-xl md:text-2xl pulse-urgent"
          >
            <Phone className="w-7 h-7 animate-bounce-subtle" />
            <span>התקשר עכשיו לתיאום בשטח</span>
          </a>

          {/* Trust Line */}
          <p className="mt-6 text-muted-foreground text-sm">
            🔒 ללא התחייבות • ✓ מענה מיידי • ⚡ התקנה תוך 48 שעות
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
