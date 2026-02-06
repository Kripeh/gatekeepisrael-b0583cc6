import logo from "@/assets/logo.png";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE_LINK = "tel:+972508585310";

const footerLinks = [
  { label: "דף הבית", href: "/" },
  { label: "התקנת גדר חשמלית", href: "/installation" },
  { label: "גדר סולארית", href: "/solar-fence" },
  { label: "פתרונות לבית", href: "/home-solutions" },
  { label: "מחירון", href: "/pricing" },
  { label: "למה גדר חשמלית?", href: "/why-electric-fence" },
  { label: "אזורי שירות", href: "/service-areas" },
  { label: "בלוג", href: "/blog" },
];

const Footer = () => {
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
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm md:text-base"
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href={PHONE_LINK}
                className="text-primary font-bold hover:underline text-sm md:text-base"
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
              © 2026 גייטקיפ. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
