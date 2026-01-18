import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const PHONE_LINK = "tel:+972508585310";

const PersistentHeader = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container py-3">
        <div className="flex items-center justify-between w-full">
          {/* Logo - Fixed to right */}
          <div className="flex-shrink-0">
            <img src={logo} alt="גייטקיפ" className="h-16 md:h-20 w-auto" />
          </div>

          {/* CTA Button - Fixed to left */}
          <a 
            href={PHONE_LINK} 
            className="btn-cta-glow flex-shrink-0 flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-bold pulse-urgent"
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6 animate-bounce-subtle" />
            <span>שיחת ייעוץ מיידית</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default PersistentHeader;