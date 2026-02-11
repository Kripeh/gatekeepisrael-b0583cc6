import logo from "@/assets/logo.png";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE_LINK = "tel:+972508585310";

const Footer = () => {
  const footerNavigation = [
    {
      title: "שירותים",
      links: [
        { label: "התקנת גדר חשמלית", href: "/installation" },
        { label: "גדר סולארית", href: "/solar-fence" },
        { label: "מחירון", href: "/pricing" },
        { label: "פתרונות לבית", href: "/home-solutions" },
      ],
    },
    {
      title: "מוצרים",
      links: [
        { label: "מחוללי מתח סולאריים", href: "/products/solar-energizers" },
        { label: "מבודדים ורכיבים", href: "/products/insulators" },
        { label: "מכשור מדידה", href: "/products/testing-equipment" },
      ],
    },
    {
      title: "מידע ולמידה",
      links: [
        { label: "למה גדר חשמלית?", href: "/why-electric-fence" },
        { label: "בלוג חזירי בר", href: "/blog/boar_history_israel" },
        { label: "מפרט טכנולוגי", href: "/blog/electrical_fence_technology" },
        { label: "כל הבלוג", href: "/blog" },
      ],
    },
    {
      title: "אזורי שירות",
      links: [
        { label: "כל אזורי השירות", href: "/service-areas" },
        { label: "חיפה והקריות", href: "/regional/haifa" },
        { label: "חוף הכרמל", href: "/regional/carmel" },
        { label: "עמק הירדן", href: "/regional/jordan-valley" },
      ],
    },
  ];

  return (
    <footer className="py-12 bg-card border-t border-border pb-28 md:pb-12">
      {/* Schema.org Markup for Site Navigation */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          name: "Footer Navigation",
          url: "https://gatekeepisrael.com",
        })}
      </script>

      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Logo and Navigation Grid */}
          <div className="mb-8">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <img src={logo} alt="גייטקיפ" className="h-16 w-auto" />
            </div>

            {/* Navigation Grid - 4 Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {footerNavigation.map((column, idx) => (
                <div key={idx}>
                  <h3 className="text-foreground font-bold text-sm mb-4">{column.title}</h3>
                  <nav className="flex flex-col gap-2">
                    {column.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="text-center py-6 border-y border-border">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">שירות ותמיכה 24/7</span>
              </div>
              <a
                href={PHONE_LINK}
                className="text-primary font-bold hover:underline text-lg"
              >
                050-858-5310
              </a>
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
