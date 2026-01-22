import logo from "@/assets/logo.png";
import { Phone, Shield, Award } from "lucide-react";

const PHONE_LINK = "tel:+972508585310";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-card border-t border-border pb-28 md:pb-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="גייטקיפ" className="h-16 w-auto" />
            </div>

            {/* Quick Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6">
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                גלריית פרויקטים
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                שאלות נפוצות
              </button>
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                מחשבון מחיר
              </button>
              <a 
                href={PHONE_LINK}
                className="text-primary font-bold hover:underline"
              >
                050-858-5310
              </a>
            </nav>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 py-6 border-y border-border">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">שירות ותמיכה 24/7</span>
            </div>
          </div>

          {/* Bottom */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-2">
              מיגון חקלאי מקצועי | גדרות חשמליות לחזירי בר
            </p>
            <p className="text-muted-foreground text-xs">
              © 2025 גייטקיפ. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
