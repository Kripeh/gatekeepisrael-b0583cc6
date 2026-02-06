 import PersistentHeader from "@/components/PersistentHeader";
 import Footer from "@/components/Footer";
 import StickyMobileFooter from "@/components/StickyMobileFooter";
 import FloatingWhatsApp from "@/components/FloatingWhatsApp";
 import Breadcrumbs from "@/components/Breadcrumbs";
 import SEOHead from "@/components/SEOHead";
 import { Phone, MapPin, Check, ArrowLeft } from "lucide-react";
 import { Link } from "react-router-dom";
 
 const PHONE_LINK = "tel:+972508585310";
 
 const regions = [
   {
     name: "הגליל והצפון",
     areas: ["רמת הגולן", "גליל עליון", "גליל תחתון", "עמק יזרעאל", "עמק בית שאן"],
     description: "אזורים חקלאיים עשירים הסובלים מפגיעות תכופות של חזירי בר. אנו מספקים שירות מהיר לכל אזור הצפון.",
     crops: ["כרמי יין", "מטעי פרי", "שדות תבואה"],
   },
   {
     name: "השרון והמרכז",
     areas: ["עמק חפר", "השרון", "מישור החוף", "שפלת יהודה"],
     description: "מטעי הדרים ואבוקדו באזור המרכז זקוקים להגנה מיוחדת. צוות גייטקיפ מתמחה בפתרונות מותאמים לסוגי הקרקע השונים.",
     crops: ["מטעי הדרים", "אבוקדו", "ירקות"],
   },
   {
     name: "השפלה והדרום",
     areas: ["הנגב הצפוני", "שפלת יהודה", "עוטף עזה", "באר שבע והסביבה"],
     description: "אזורי הדרום מציגים אתגרים ייחודיים. אנו מתמחים במערכות סולאריות עצמאיות לאזורים מרוחקים מרשת החשמל.",
     crops: ["פרדסים", "שדות ירקות", "חממות"],
   },
   {
     name: "הכרמל והחוף",
     areas: ["הכרמל", "זכרון יעקב", "חיפה והסביבה", "עמק הזבולון"],
     description: "טופוגרפיה הררית דורשת תכנון מדויק. אנו מתאימים את פתרונות הגידור לתנאי השטח המאתגרים.",
     crops: ["כרמי יין", "מטעי זית", "חקלאות הררית"],
   },
 ];
 
 const ServiceAreas = () => {
   const structuredData = {
     "@context": "https://schema.org",
     "@type": "Service",
     "name": "התקנת גדרות חשמליות נגד חזירי בר",
     "provider": {
       "@type": "LocalBusiness",
       "name": "גייטקיפ",
       "telephone": "+972-50-858-5310",
     },
     "areaServed": regions.map(region => ({
       "@type": "Place",
       "name": region.name,
       "containedInPlace": {
         "@type": "Country",
         "name": "ישראל"
       }
     })),
     "serviceType": "התקנת גדרות חשמליות",
   };
 
   return (
     <div className="min-h-screen bg-background">
      <SEOHead
        title="אזורי שירות | גייטקיפ - גדרות חשמליות בכל הארץ"
        description="גייטקיפ מספקת שירותי התקנת גדרות חשמליות נגד חזירי בר בכל רחבי הארץ: גליל, שרון, נגב, שפלה ועוד. התקשרו להצעת מחיר!"
        keywords="גדר חשמלית גליל, גדר חשמלית שרון, גדר חשמלית נגב, התקנת גדר חשמלית צפון, גדר נגד חזירי בר דרום"
        canonicalPath="/service-areas"
        structuredData={structuredData}
      />
       <PersistentHeader />
 
       <main className="pt-24">
         {/* Hero Section */}
         <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-20">
           <div className="container">
             <Breadcrumbs items={[{ label: "אזורי שירות" }]} />
             
             <div className="max-w-4xl mx-auto text-center mt-8">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
                 גייטקיפ מגיעה{" "}
                 <span className="text-primary text-glow">לכל מקום בארץ</span>
               </h1>
               <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                 מהגליל ועד הנגב, אנחנו מתקינים גדרות חשמליות מקצועיות נגד חזירי בר. 
                 צוות המומחים שלנו מכיר את האתגרים הייחודיים של כל אזור ומספק פתרונות מותאמים.
               </p>
               <a 
                 href={PHONE_LINK} 
                 className="btn-cta-glow inline-flex items-center gap-3 px-8 py-5 rounded-xl text-xl"
               >
                 <Phone className="w-6 h-6" />
                 <span>התקשר עכשיו לייעוץ חינם</span>
               </a>
             </div>
           </div>
         </section>
 
         {/* Regions Grid */}
         <section className="py-16 md:py-24">
           <div className="container">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
               {regions.map((region, index) => (
                 <div
                   key={index}
                   className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
                 >
                   <div className="flex items-center gap-3 mb-4">
                     <MapPin className="w-6 h-6 text-primary" />
                     <h2 className="text-2xl font-bold text-foreground">{region.name}</h2>
                   </div>
                   
                   <p className="text-muted-foreground mb-6">{region.description}</p>
                   
                   <div className="mb-6">
                     <h3 className="font-semibold text-foreground mb-3">אזורים:</h3>
                     <div className="flex flex-wrap gap-2">
                       {region.areas.map((area, i) => (
                         <span
                           key={i}
                           className="bg-secondary/50 text-sm px-3 py-1 rounded-full text-foreground"
                         >
                           {area}
                         </span>
                       ))}
                     </div>
                   </div>
                   
                   <div>
                     <h3 className="font-semibold text-foreground mb-3">סוגי גידולים נפוצים:</h3>
                     <ul className="space-y-2">
                       {region.crops.map((crop, i) => (
                         <li key={i} className="flex items-center gap-2 text-muted-foreground">
                           <Check className="w-4 h-4 text-primary" />
                           {crop}
                         </li>
                       ))}
                     </ul>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </section>
 
         {/* CTA Section */}
         <section className="py-16 bg-primary/10">
           <div className="container">
             <div className="max-w-3xl mx-auto text-center">
               <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                 לא מצאת את האזור שלך?
               </h2>
               <p className="text-lg text-muted-foreground mb-8">
                 אנחנו מגיעים לכל מקום בישראל! התקשר אלינו ונבדוק איך אפשר לעזור לך.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <a 
                   href={PHONE_LINK} 
                   className="btn-cta-glow inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg"
                 >
                   <Phone className="w-5 h-5" />
                   <span>050-858-5310</span>
                 </a>
                 <Link
                   to="/pricing"
                   className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
                 >
                   <span>לחישוב הצעת מחיר</span>
                   <ArrowLeft className="w-5 h-5" />
                 </Link>
               </div>
             </div>
           </div>
      </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg font-bold mb-4">קישורים נוספים:</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/installation" className="text-primary hover:underline">התקנת גדר חשמלית</Link>
                <Link to="/solar-fence" className="text-primary hover:underline">גדר סולארית</Link>
                <Link to="/pricing" className="text-primary hover:underline">מחירון מלא</Link>
                <Link to="/why-electric-fence" className="text-primary hover:underline">למה גדר חשמלית?</Link>
                <Link to="/home-solutions" className="text-primary hover:underline">פתרונות לבית פרטי</Link>
                <Link to="/wild-boar-electric-fence-protection" className="text-primary hover:underline">מדריך חזירי בר</Link>
              </div>
            </div>
          </div>
        </section>
       </main>
 
       <Footer />
       <StickyMobileFooter />
       <FloatingWhatsApp />
     </div>
   );
 };
 
 export default ServiceAreas;