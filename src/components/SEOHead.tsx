import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  canonicalUrl?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEOHead = ({ title, description, keywords, canonicalPath, canonicalUrl, structuredData, noIndex = false }: SEOHeadProps) => {
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

    // Set robots meta tag - ensure pages are indexable unless specifically set to noIndex
    let metaRobots = document.querySelector('meta[name="robots"]');
    const robotsContent = noIndex ? "noindex, follow" : "index, follow";
    if (metaRobots) {
      metaRobots.setAttribute("content", robotsContent);
    } else {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      metaRobots.setAttribute("content", robotsContent);
      document.head.appendChild(metaRobots);
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

    // Update Open Graph meta tags
    const updateOGMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      }
    };

    updateOGMeta("og:title", title);
    updateOGMeta("og:description", description);
    if (finalCanonicalUrl) {
      updateOGMeta("og:url", finalCanonicalUrl);
    }

    // Update Twitter meta tags
    const updateTwitterMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      }
    };

    updateTwitterMeta("twitter:title", title);
    updateTwitterMeta("twitter:description", description);

    // Add structured data (JSON-LD) if provided
    let scriptTag: HTMLScriptElement | null = null;
    let removedFAQScript: { element: HTMLScriptElement; content: string } | null = null;
    
    if (structuredData) {
      // If adding FAQPage, first remove any existing FAQPage from index.html to prevent duplicates
      const structuredDataObj = structuredData as { "@type"?: string };
      if (structuredDataObj["@type"] === "FAQPage") {
        const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
        existingScripts.forEach((script) => {
          try {
            const content = JSON.parse(script.textContent || "");
            if (content["@type"] === "FAQPage") {
              removedFAQScript = { 
                element: script as HTMLScriptElement, 
                content: script.textContent || "" 
              };
              script.remove();
            }
          } catch (e) {
            // Ignore parsing errors
          }
        });
      }
      
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.text = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }

    // Cleanup function to restore original values
    return () => {
      document.title = "גייטקיפ - גדרות חשמליות נגד חזירי בר | הגנה מקצועית לשטחים חקלאיים";
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
      // Restore the original FAQPage if it was removed
      if (removedFAQScript) {
        const restoredScript = document.createElement("script");
        restoredScript.type = "application/ld+json";
        restoredScript.text = removedFAQScript.content;
        document.head.appendChild(restoredScript);
      }
    };
  }, [title, description, keywords, canonicalPath, canonicalUrl, structuredData, noIndex]);

  return null;
};

export default SEOHead;
