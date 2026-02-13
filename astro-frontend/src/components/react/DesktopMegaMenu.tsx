import { useState } from "react";
import {
  Wrench,
  Package,
  BookOpen,
  MapPin,
  ChevronDown,
  Home,
  Receipt
} from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
  description?: string;
}

interface MenuCategory {
  title: string;
  icon: React.ElementType;
  href?: string; // Optional href for clickable categories like "בלוג"
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    title: "שירותים",
    icon: Wrench,
    items: [
      { label: "גדר חשמלית לחקלאות", href: "/installation", description: "הגנה על מטעים וכרמים" },
      { label: "גדר חשמלית ביתית", href: "/home-solutions", description: "הגנה על הגינה והחצר" },
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
    title: "בלוג",
    icon: BookOpen,
    href: "/blog",
    items: [
      { label: "למה גדר חשמלית?", href: "/blog/why-electric-fence", description: "השוואת פתרונות" },
      { label: "גדר חשמלית סולארית", href: "/blog/solar-fence", description: "פתרון ללא חיבור לחשמל" },
      { label: "התקנת גדר חשמלית - מדריך", href: "/blog/installation-guide", description: "מדריך שלב אחר שלב" },
      { label: "משבר חזירי הבר", href: "/blog/boar-history-israel", description: "הבעיה והפתרונות" },
      { label: "מפרט טכנולוגי", href: "/blog/electrical-fence-technology", description: "פרטים הנדסיים" },
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
    setTimeout(() => {
      if (!isHovering) {
        setActiveMenu(null);
      }
    }, 100);
  };

  return (
    <nav className="hidden lg:flex items-center gap-1" aria-label="ניווט ראשי">
      {/* Home Link */}
      <a
        href="/"
        className="flex items-center gap-2 px-4 py-2 text-base font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>דף הבית</span>
      </a>

      {/* Pricing Link (Standalone) */}
      <a
        href="/pricing"
        className="flex items-center gap-2 px-4 py-2 text-base font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
      >
        <Receipt className="w-4 h-4" />
        <span>מחירון</span>
      </a>

      {/* Menu Categories */}
      {menuCategories.map((category) => (
        <div
          key={category.title}
          className="relative"
          onMouseEnter={() => handleMouseEnter(category.title)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Category Button/Link */}
          {category.href ? (
            <a
              href={category.href}
              className={`flex items-center gap-2 px-4 py-2 text-base font-semibold rounded-lg transition-colors ${
                activeMenu === category.title
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.title}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeMenu === category.title ? "rotate-180" : ""
                }`}
              />
            </a>
          ) : (
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
          )}

          {/* Dropdown Menu */}
          {activeMenu === category.title && (
            <div
              className="absolute top-full right-0 mt-1 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl shadow-green-500/10 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setActiveMenu(null);
              }}
            >
              <div className="p-2">
                {category.items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors group"
                    onClick={() => setActiveMenu(null)}
                  >
                    <div className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {item.label}
                    </div>
                    {item.description && (
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                        {item.description}
                      </div>
                    )}
                  </a>
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
