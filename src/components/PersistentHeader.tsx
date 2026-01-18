import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const PHONE_NUMBER = "1-800-GATEKEEP";
const PHONE_LINK = "tel:+972501234567";

const PersistentHeader = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="גייטקיפ" className="h-14 md:h-16 w-auto" />
        </div>

        {/* CTA Button */}
        <a
          href={PHONE_LINK}
          className="btn-cta-glow flex items-center gap-2 px-4 py-3 md:px-6 md:py-3 rounded-lg text-sm md:text-base pulse-urgent"
        >
          <Phone className="w-5 h-5 animate-bounce-subtle" />
          <span className="hidden sm:inline">שיחת ייעוץ מיידית:</span>
          <span className="font-black">{PHONE_NUMBER}</span>
        </a>
      </div>
    </header>
  );
};

export default PersistentHeader;
