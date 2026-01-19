import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "972508585310";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שלח הודעה בוואטסאפ"
      className="fixed bottom-24 left-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
};

export default FloatingWhatsApp;
