import { Link } from "react-router-dom";
import {
  Battery,
  BookText,
  MapPin,
  Home,
  Tractor,
  DollarSign,
} from "lucide-react";

interface SolutionCard {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  links: Array<{ label: string; href: string }>;
  gradient: string;
}

const solutions: SolutionCard[] = [
  {
    icon: Battery,
    title: "מוצרים",
    subtitle: "ציוד מקצועי לגידור",
    gradient: "from-green-500/10 to-emerald-500/10",
    links: [
      { label: "מחוללי מתח סולאריים", href: "/products/solar-energizers" },
      { label: "מבודדים ורכיבי גידור", href: "/products/insulators" },
      { label: "מכשור מדידה ובדיקה", href: "/products/testing-equipment" },
    ],
  },
  {
    icon: BookText,
    title: "מדריכים",
    subtitle: "למד על גדרות חשמליות",
    gradient: "from-blue-500/10 to-cyan-500/10",
    links: [
      { label: "למה גדר חשמלית?", href: "/why-electric-fence" },
      { label: "מדריך חזירי בר", href: "/blog/boar_history_israel" },
      { label: "מפרט טכנולוגי", href: "/blog/electrical_fence_technology" },
      { label: "כל המאמרים", href: "/blog" },
    ],
  },
  {
    icon: MapPin,
    title: "אזורי שירות",
    subtitle: "התקנה בכל הארץ",
    gradient: "from-purple-500/10 to-pink-500/10",
    links: [
      { label: "מפת כיסוי ארצית", href: "/service-areas" },
      { label: "חיפה והקריות", href: "/regions/haifa" },
      { label: "חוף הכרמל", href: "/regions/carmel-coast" },
      { label: "עמק הירדן", href: "/regions/jordan-valley" },
    ],
  },
  {
    icon: Home,
    title: "לבעלי בתים",
    subtitle: "הגנה על הגינה והחצר",
    gradient: "from-orange-500/10 to-amber-500/10",
    links: [
      { label: "פתרונות לגינה ולחצר", href: "/home-solutions" },
      { label: "גדר סולארית לבית", href: "/solar-fence" },
      { label: "מחירון למגורים", href: "/pricing" },
    ],
  },
  {
    icon: Tractor,
    title: "לחקלאים",
    subtitle: "מיגון מקצועי לשטחים",
    gradient: "from-teal-500/10 to-green-500/10",
    links: [
      { label: "התקנה מקצועית", href: "/installation" },
      { label: "גדר סולארית לשטח", href: "/solar-fence" },
      { label: "מחירון חקלאי", href: "/pricing" },
    ],
  },
  {
    icon: DollarSign,
    title: "מחירים",
    subtitle: "שקיפות מלאה",
    gradient: "from-rose-500/10 to-red-500/10",
    links: [
      { label: "מחירון מלא", href: "/pricing" },
      { label: "מחשבון הצעת מחיר", href: "/#calculator" },
      { label: "השוואת ROI", href: "/#roi" },
    ],
  },
];

const DiscoverSolutions = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-5 py-2.5 rounded-full mb-4">
            <span className="font-bold text-sm">🎯 גלה את כל הפתרונות</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4"
            style={{ textWrap: 'balance' }}
          >
            הפתרון המושלם{" "}
            <span className="text-primary">לכל צורך</span>
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            מוצרים, שירותים, מדריכים ומידע - הכל במקום אחד
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <article
              key={index}
              className={`group relative bg-gradient-to-br ${solution.gradient} border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <solution.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {solution.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {solution.subtitle}
              </p>

              {/* Links */}
              <div className="space-y-2">
                {solution.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.href}
                    className="block text-sm font-medium text-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
                    style={{ direction: 'rtl' }}
                  >
                    ← {link.label}
                  </Link>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            לא מצאת מה שחיפשת?{" "}
            <Link to="/blog" className="text-primary font-semibold hover:underline">
              עבור לבלוג
            </Link>
            {" "}או{" "}
            <a href="tel:+972508585310" className="text-primary font-semibold hover:underline">
              התקשר אלינו
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSolutions;
