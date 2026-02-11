import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Package,
  BookOpen,
  MapPin,
  ChevronDown,
  Home
} from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
  description?: string;
}

interface MenuCategory {
  title: string;
  icon: React.ElementType;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    title: "שירותים",
    icon: Wrench,
    items: [
      { label: "התקנת גדר חשמלית", href: "/installation", description: "התקנה מקצועית ומהירה" },
      { label: "גדר חשמלית סולארית", href: "/solar-fence", description: "פתרון ללא חיבור לחשמל" },
      { label: "מחירון ומחשבון", href: "/pricing", description: "מחירים שקופים והצעת מחיר" },
      { label: "פתרונות לבית", href: "/home-solutions", description: "הגנה על הגינה והחצר" },
    ],
  },
  {
    title: "מוצרים",
    icon: Package,
    items: [
      { label: "מחוללי מתח סולאריים", href: "/products/solar-energizers", description: "אנרגיה ירוקה וחסכונית" },
      { label: "מבודדים ורכיבי גידור", href: "/products/insulators", description: "אביזרים מקצועיים" },
      { label: "מכשור מדידה ובדיקה", href: "/products/testing-equipment", description: "כלי תחזוקה ואבחון" },
    ],
  },
  {
    title: "למד",
    icon: BookOpen,
    items: [
      { label: "למה גדר חשמלית?", href: "/why-electric-fence", description: "השוואת פתרונות" },
      { label: "משבר חזירי הבר", href: "/blog/boar_history_israel", description: "מדריך מקיף" },
      { label: "מפרט טכנולוגי", href: "/blog/electrical_fence_technology", description: "פרטים הנדסיים" },
      { label: "כל המאמרים", href: "/blog", description: "בלוג ומדריכים" },
    ],
  },
  {
    title: "אזורי שירות",
    icon: MapPin,
    items: [
      { label: "כיסוי ארצי", href: "/service-areas", description: "שירות בכל הארץ" },
      { label: "חיפה והקריות", href: "/regions/haifa", description: "צפון ומפרץ חיפה" },
      { label: "חוף הכרמל", href: "/regions/carmel-coast", description: "זכרון, בנימינה, קיסריה" },
      { label: "עמק הירדן", href: "/regions/jordan-valley", description: "בית שאן, טבריה, הגלבוע" },
    ],
  },
];

const DesktopMegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (title: string) => {
    setActiveMenu(title);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    // Add slight delay before closing
    setTimeout(() => {
      if (!isHovering) {
        setActiveMenu(null);
      }
    }, 100);
  };

  return (
    <nav className="hidden lg:flex items-center gap-1" aria-label="ניווט ראשי">
      {/* Home Link */}
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 text-base font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>דף הבית</span>
      </Link>

      {/* Menu Categories */}
      {menuCategories.map((category) => (
        <div
          key={category.title}
          className="relative"
          onMouseEnter={() => handleMouseEnter(category.title)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Category Button */}
          <button
            className={`flex items-center gap-2 px-4 py-2 text-base font-semibold rounded-lg transition-colors ${
              activeMenu === category.title
                ? "text-primary bg-primary/10"
                : "text-foreground hover:text-primary hover:bg-primary/5"
            }`}
            aria-expanded={activeMenu === category.title}
            aria-haspopup="true"
          >
            <category.icon className="w-4 h-4" />
            <span>{category.title}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                activeMenu === category.title ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {activeMenu === category.title && (
            <div
              className="absolute top-full right-0 mt-1 w-80 bg-card border border-border rounded-xl shadow-2xl shadow-primary/10 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setActiveMenu(null);
              }}
            >
              <div className="p-2">
                {category.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    onClick={() => setActiveMenu(null)}
                  >
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </div>
                    {item.description && (
                      <div className="text-sm text-muted-foreground mt-0.5">
                        {item.description}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopMegaMenu;
