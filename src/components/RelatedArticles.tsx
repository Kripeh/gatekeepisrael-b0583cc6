import { Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";

interface ArticlePreview {
  title: string;
  description: string;
  href: string;
  readTime: string;
}

const allArticles: ArticlePreview[] = [
  {
    title: "משבר חזירי הבר בישראל ופתרונות גידור מתקדמים",
    description: "מדריך מקיף על משבר חזירי הבר – נזקים לחקלאות, סכנות בריאותיות, ופתרון הגדר החשמלית.",
    href: "/blog/boar_history_israel",
    readTime: "12 דקות",
  },
  {
    title: "ארכיטקטורה הנדסית ומפרט טכנולוגי של מערכות גידור חשמלי",
    description: "מפרט הנדסי מעמיק: פיזיקת Energizer, טכנולוגיית Ultra-Low Impedance, מערכת סולארית והארקה.",
    href: "/blog/electrical_fence_technology",
    readTime: "15 דקות",
  },
];

interface RelatedArticlesProps {
  currentPath: string;
}

const RelatedArticles = ({ currentPath }: RelatedArticlesProps) => {
  const related = allArticles.filter((a) => a.href !== currentPath);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 border-t border-border pt-10">
      <h2 className="text-2xl font-bold text-foreground mb-6">קריאה נוספת</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {related.map((article) => (
          <Link
            key={article.href}
            to={article.href}
            className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all"
          >
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
              {article.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {article.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </div>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                <span>קרא עוד</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
