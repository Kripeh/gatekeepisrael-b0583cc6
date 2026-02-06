import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const blogArticles = [
  {
    title: "משבר חזירי הבר בישראל ופתרונות גידור מתקדמים",
    description: "מדריך מקיף על משבר חזירי הבר בישראל – נזקים לחקלאות ובתים, סכנות בריאותיות, ופתרון הגדר החשמלית כהרתעה יעילה לבתים פרטיים ושטחים חקלאיים.",
    href: "/blog/boar_history_israel",
    date: "2026-02-06",
    dateLabel: "פברואר 2026",
    readTime: "12 דקות",
  },
  {
    title: "ארכיטקטורה הנדסית ומפרט טכנולוגי של מערכות גידור חשמלי מתקדמות",
    description: "מפרט הנדסי מעמיק הכולל פיזיקת Energizer, טכנולוגיית Ultra-Low Impedance, מערכת סולארית אוטונומית, מנגנון הארקה והתאמתו לסוג הקרקע, ובטיחות חשמלית.",
    href: "/blog/electrical_fence_technology",
    date: "2026-02-06",
    dateLabel: "פברואר 2026",
    readTime: "15 דקות",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "בלוג גייטקיפ | מדריכים מקצועיים לגידור חשמלי",
  "description": "מאמרים מקצועיים בנושא גידור חשמלי, חזירי בר, מפרטים טכניים והגנה על שטחים חקלאיים ובתים פרטיים.",
  "url": "https://gatekeepisrael.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "גייטקיפ",
    "url": "https://gatekeepisrael.com"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": blogArticles.map((article, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://gatekeepisrael.com${article.href}`,
      "name": article.title
    }))
  }
};

const Blog = () => {
  const breadcrumbs = [{ label: "בלוג" }];

  return (
    <ServicePageLayout
      title="בלוג גייטקיפ | מדריכים מקצועיים לגידור חשמלי"
      description="מאמרים מקצועיים על גידור חשמלי, חזירי בר, מפרטים טכניים והגנה על שטחים חקלאיים. מדריכים שיעזרו לכם להגן על הנכס."
      keywords="בלוג גידור חשמלי, מאמרים חזירי בר, מדריך גדר חשמלית, טכנולוגיית גידור"
      canonicalPath="/blog"
      breadcrumbs={breadcrumbs}
      schemaMarkup={collectionSchema}
    >
      <section className="py-8 md:py-12">
        <div className="container max-w-4xl">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              בלוג גייטקיפ | מדריכים מקצועיים לגידור חשמלי
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              מאמרים מקצועיים, מדריכים טכניים ומחקרים עדכניים בנושא גידור חשמלי, הגנה מפני חזירי בר ופתרונות מיגון מתקדמים לחקלאות ולבית.
            </p>
          </header>

          <div className="grid gap-6">
            {blogArticles.map((article) => (
              <Link
                key={article.href}
                to={article.href}
                className="group block bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {article.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={article.date}>{article.dateLabel}</time>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>זמן קריאה: {article.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-primary font-medium mr-auto">
                    <span>קרא עוד</span>
                    <ArrowLeft className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default Blog;
