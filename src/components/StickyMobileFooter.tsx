import { Phone } from "lucide-react";

const PHONE_LINK = "tel:+972501234567";

const StickyMobileFooter = () => {
  return (
    <a
      href={PHONE_LINK}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden btn-cta-glow flex items-center justify-center gap-3 py-4 rounded-t-xl pulse-urgent"
    >
      <Phone className="w-6 h-6 animate-bounce-subtle" />
      <span className="font-black text-lg">חייג עכשיו למחלקת מיגון חקלאי</span>
    </a>
  );
};

export default StickyMobileFooter;
