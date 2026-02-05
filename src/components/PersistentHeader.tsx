import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import Navigation from "@/components/Navigation";

const PHONE_LINK = "tel:+972508585310";

const PersistentHeader = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Fixed to right */}
          <img src={logo} alt="גייטקיפ" className="h-12 md:h-16 w-auto flex-shrink-0" />

          {/* CTA Button + Navigation Menu - Fixed to left */}
          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href={PHONE_LINK} 
              className="btn-cta-glow flex-shrink-0 flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-bold"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">שיחת ייעוץ מיידית</span>
              <span className="sm:hidden">התקשר</span>
            </a>
            
            {/* Hamburger Menu */}
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default PersistentHeader;