import { AlertTriangle, Phone } from "lucide-react";

const PHONE_LINK = "tel:+972501234567";

const UrgencyBanner = () => {
  return (
    <section className="py-12 md:py-16 bg-destructive/10 border-y border-destructive/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-black text-foreground">
              כל לילה שאתה מחכה = עוד נזק ליבול
            </h2>
          </div>
          
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            חזירי בר לא מחכים. הם פועלים כל לילה, הורסים שדות שלמים בפשיטה אחת.
            <br />
            <strong className="text-foreground">הגדר החשמלית היא ההשקעה הכי משתלמת שתעשה השנה.</strong>
          </p>

          <a
            href={PHONE_LINK}
            className="btn-cta-glow inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg md:text-xl pulse-urgent"
          >
            <Phone className="w-6 h-6 animate-bounce-subtle" />
            <span>הזמן סקר שטח - התקשר עכשיו</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UrgencyBanner;
