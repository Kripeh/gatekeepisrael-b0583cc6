import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}

const SEOHead = ({ title, description, keywords, canonicalPath }: SEOHeadProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Set meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        metaKeywords.setAttribute("content", keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // Set canonical URL if provided
    if (canonicalPath) {
      let canonical = document.querySelector('link[rel="canonical"]');
      const canonicalUrl = `https://gatekeepisrael.lovable.app${canonicalPath}`;
      if (canonical) {
        canonical.setAttribute("href", canonicalUrl);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", canonicalUrl);
        document.head.appendChild(canonical);
      }
    }

    // Cleanup function to restore original values
    return () => {
      document.title = "גייטקיפ - גדרות חשמליות נגד חזירי בר | הגנה מקצועית לשטחים חקלאיים";
    };
  }, [title, description, keywords, canonicalPath]);

  return null;
};

export default SEOHead;
