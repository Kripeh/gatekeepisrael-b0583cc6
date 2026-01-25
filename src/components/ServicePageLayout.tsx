import { ReactNode } from "react";
import PersistentHeader from "./PersistentHeader";
import Footer from "./Footer";
import StickyMobileFooter from "./StickyMobileFooter";
import FloatingWhatsApp from "./FloatingWhatsApp";
import Breadcrumbs from "./Breadcrumbs";
import SEOHead from "./SEOHead";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServicePageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords?: string;
  canonicalPath: string;
  breadcrumbs: BreadcrumbItem[];
  schemaMarkup?: object;
}

const ServicePageLayout = ({
  children,
  title,
  description,
  keywords,
  canonicalPath,
  breadcrumbs,
  schemaMarkup,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={title} 
        description={description} 
        keywords={keywords}
        canonicalPath={canonicalPath}
      />
      
      {/* Schema Markup */}
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      )}
      
      <PersistentHeader />
      
      <main className="pt-24 md:pt-28">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        {children}
      </main>
      
      <Footer />
      <StickyMobileFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default ServicePageLayout;
