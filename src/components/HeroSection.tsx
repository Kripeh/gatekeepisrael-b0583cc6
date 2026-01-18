import { Phone, AlertTriangle, Calculator } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const PHONE_LINK = "tel:+972508585310";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="שטח חקלאי" className="w-full h-full object-cover" />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/65" />
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
            <span className="text-primary font-semibold">גדר חשמלית איכותית ומקצועית</span> - הכל על פי תקן.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA - Call */}
            <a href={PHONE_LINK} className="btn-cta-glow inline-flex items-center gap-3 px-8 py-5 md:px-12 md:py-6 rounded-xl text-xl md:text-2xl pulse-urgent">
              <Phone className="w-7 h-7 animate-bounce-subtle" />
              <span>התקשר עכשיו לתיאום בשטח</span>
            </a>

            {/* Secondary CTA - Calculator */}
            <a href="#calculator" className="inline-flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 rounded-xl text-lg md:text-xl font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Calculator className="w-6 h-6" />
              <span>חשב הצעת מחיר</span>
            </a>
          </div>

          {/* Trust Line */}
          
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default HeroSection;