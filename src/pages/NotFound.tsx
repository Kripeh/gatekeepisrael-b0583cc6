import { useLocation, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <SEOHead
        title="404 - הדף לא נמצא | גייטקיפ"
        description="מצטערים, הדף שחיפשת לא נמצא. חזרו לדף הבית של גייטקיפ - גדרות חשמליות נגד חזירי בר."
        canonicalUrl="https://gatekeepisrael.com/"
      />
      {/* Tell search engines not to index 404 pages */}
      <meta name="robots" content="noindex, follow" />
      <div className="flex min-h-screen items-center justify-center bg-muted" dir="rtl">
        <div className="text-center p-8">
          <h1 className="mb-4 text-6xl font-black text-primary">404</h1>
          <p className="mb-6 text-2xl font-bold text-foreground">הדף לא נמצא</p>
          <p className="mb-8 text-lg text-muted-foreground">
            מצטערים, הדף שחיפשת לא קיים או הועבר למקום אחר.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
