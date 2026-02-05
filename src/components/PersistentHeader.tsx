import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import Navigation from "@/components/Navigation";

const PHONE_LINK = "tel:+972508585310";

const PersistentHeader = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="w-[85%] max-w-none mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Fixed to right */}
          <img src={logo} alt="גייטקיפ" className="h-16 md:h-20 w-auto flex-shrink-0" />

          {/* Navigation - Center */}
          <Navigation />

          {/* CTA Button - Fixed to left */}
          <a 
            href={PHONE_LINK} 
            className="btn-cta-glow hidden md:flex flex-shrink-0 items-center gap-2 px-5 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-bold"
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