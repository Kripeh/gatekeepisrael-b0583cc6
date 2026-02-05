import { Link } from "react-router-dom";
import { ChevronLeft, Home } from "lucide-react";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  // Add BreadcrumbList JSON-LD structured data
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "דף הבית",
          "item": "https://gatekeepisrael.com/"
        },
        ...items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": item.label,
          "item": item.href 
            ? `https://gatekeepisrael.com${item.href}` 
            : `https://gatekeepisrael.com${window.location.pathname}`
        }))
      ]
    };

    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.text = JSON.stringify(breadcrumbSchema);
    scriptTag.id = "breadcrumb-schema";
    
    // Remove existing breadcrumb schema if present
    const existing = document.getElementById("breadcrumb-schema");
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(scriptTag);

    return () => {
      const tag = document.getElementById("breadcrumb-schema");
      if (tag) {
        tag.remove();
      }
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link 
            to="/" 
            className="flex items-center gap-1 hover:text-primary transition-colors"
            aria-label="דף הבית"
          >
            <Home className="w-4 h-4" />
            <span>דף הבית</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            {item.href ? (
              <Link 
                to={item.href} 
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
