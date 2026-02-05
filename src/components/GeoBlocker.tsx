import { useState, useEffect, ReactNode } from "react";
import { Loader2, MapPin } from "lucide-react";
import { logger } from "@/lib/logger";

interface GeoBlockerProps {
  children: ReactNode;
}

const GeoBlocker = ({ children }: GeoBlockerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        // Using ip-api.com (free, no API key required) via HTTPS for security
        const response = await fetch("https://ip-api.com/json/?fields=countryCode");
        const data = await response.json();
        
        // Allow if user is in Israel
        setIsAllowed(data.countryCode === "IL");
      } catch (error) {
        // If geolocation fails, allow access (fail-open for better UX)
        logger.error("Geolocation check failed:", error);
        setIsAllowed(true);
      } finally {
        setIsLoading(false);
      }
    };

    checkLocation();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">טוען...</p>
        </div>
      </div>
    );
  }

  if (!isAllowed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6" dir="rtl">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-4">
            האתר זמין רק בישראל
          </h1>
          <p className="text-muted-foreground">
            שירותי גייטקיפ זמינים כרגע רק ללקוחות בישראל.
            <br />
            אם אתה נמצא בישראל ורואה הודעה זו בטעות, אנא צור קשר בטלפון:
          </p>
          <a 
            href="tel:+972508585310" 
            className="inline-block mt-4 text-primary font-bold text-lg hover:underline"
          >
            050-858-5310
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default GeoBlocker;
