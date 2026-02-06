import { Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import Navigation from "@/components/Navigation";

const PHONE_LINK = "tel:+972508585310";

const NAV_LINKS = [
  { to: "/", label: "דף הבית" },
  { to: "/installation", label: "התקנת גדר חשמלית" },
  { to: "/solar-fence", label: "גדר סולארית" },
  { to: "/home-solutions", label: "פתרונות לבית" },
  { to: "/pricing", label: "מחירון" },
  { to: "/why-electric-fence", label: "למה גדר חשמלית?" },
  { to: "/service-areas", label: "אזורי שירות" },
  { to: "/wild-boar-electric-fence-protection", label: "בלוג" },
];

const PersistentHeader = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Fixed to right */}
          <Link to="/">
            <img src={logo} alt="גייטקיפ" className="h-12 md:h-16 w-auto flex-shrink-0" />
          </Link>

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
            
            {/* Hamburger Menu - Mobile only */}
            <div className="lg:hidden">
              <Navigation />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Bar - Visible for SEO & Sitelinks */}
      <nav className="hidden lg:block border-t border-border/50 bg-background/80" aria-label="ניווט ראשי">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-1 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.to
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default PersistentHeader;