import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOHead = ({ title, description, keywords, canonicalPath, canonicalUrl, structuredData }: SEOHeadProps) => {
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

    // Set canonical URL if provided (either full URL or path)
    const finalCanonicalUrl = canonicalUrl || (canonicalPath ? `https://gatekeepisrael.com${canonicalPath}` : null);
    if (finalCanonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", finalCanonicalUrl);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", finalCanonicalUrl);
        document.head.appendChild(canonical);
      }
    }

    // Add structured data (JSON-LD) if provided
    let scriptTag: HTMLScriptElement | null = null;
    if (structuredData) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.text = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }

    // Cleanup function to restore original values
    return () => {
      document.title = "גייטקיפ - גדרות חשמליות נגד חזירי בר | הגנה מקצועית לשטחים חקלאיים";
      if (scriptTag) {
        document.head.removeChild(scriptTag);
      }
    };
  }, [title, description, keywords, canonicalPath, canonicalUrl, structuredData]);

  return null;
};

export default SEOHead;
