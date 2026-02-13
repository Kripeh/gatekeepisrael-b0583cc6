import { Phone, Calculator } from "lucide-react";
import { useEffect, useState } from "react";

const PHONE_LINK = "tel:+972508585310";
const HERO_BG_URL = "https://sqxmgqqtcgkjztpvhzzr.supabase.co/storage/v1/object/public/images/heroImageNew";

const HomeHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <img 
          src={HERO_BG_URL} 
          alt="גדר חשמלית ביתית נגד חזירים - הגנה על הגינה והבית | גייטקיפ" 
          className="w-full h-[120%] object-cover will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        />
        {/* Warmer Overlay for Home Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Home-focused Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-5 py-2.5 rounded-full mb-6">
            <span className="font-bold text-sm text-balance">
              🏡 פתרונות הגנה לבית ולגינה - בטוח לילדים ולחיות מחמד
            </span>
          </div>

          {/* Main Headline - Home Focus */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            <span className="text-primary">חזירים בגינה?</span>
            <br />
            <span className="text-foreground">שומרים על הבית!</span>
          </h1>

          {/* Sub-headline - Family focused */}
          <p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ textWrap: 'pretty' }}
          >
            נמאס לך לקום בבוקר לגינה הרוסה?{" "}
            <strong className="text-foreground">גדר חשמלית ביתית</strong> עוצרת חזירים, דורבנים ושועלים - 
            {" "}<span className="text-primary font-semibold">בטוח למשפחה, ידידותי לסביבה</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA - Call */}
            <a 
              href={PHONE_LINK} 
              className="btn-cta-glow inline-flex items-center gap-3 px-8 py-5 md:px-12 md:py-6 rounded-xl text-xl md:text-2xl"
            >
              <Phone className="w-7 h-7 animate-bounce-subtle" />
              <span>התקשר עכשיו</span>
            </a>

            {/* Secondary CTA - Calculator */}
            <a 
              href="#calculator" 
              className="inline-flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 rounded-xl text-lg md:text-xl font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Calculator className="w-6 h-6" />
              <span>חשב מחיר לחצר שלך</span>
            </a>
          </div>

          {/* Trust Line */}
          <p className="mt-8 text-muted-foreground text-sm">
            ✓ התקנה מקצועית תוך ימים ספורים &nbsp;•&nbsp; ✓ אחריות מלאה &nbsp;•&nbsp; ✓ מאות בתים מרוצים
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HomeHeroSection;
