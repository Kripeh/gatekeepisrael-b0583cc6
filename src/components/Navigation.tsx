 import { useState } from "react";
import { Menu, Phone } from "lucide-react";
 import { NavLink } from "@/components/NavLink";
 import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
 } from "@/components/ui/sheet";
 import logo from "@/assets/logo.png";
 
 const PHONE_LINK = "tel:+972508585310";
 
const navLinks = [
  { label: "דף הבית", href: "/" },
  { label: "התקנת גדר חשמלית", href: "/installation" },
  { label: "גדר סולארית", href: "/solar-fence" },
  { label: "פתרונות לבית", href: "/home-solutions" },
  { label: "מחירון", href: "/pricing" },
  { label: "מחשבון מחיר", href: "/#calculator" },
  { label: "למה גדר חשמלית?", href: "/why-electric-fence" },
  { label: "אזורי שירות", href: "/service-areas" },
  { label: "בלוג", href: "/blog" },
];

const productLinks = [
  { label: "מחוללי מתח סולאריים", href: "/products/solar-energizers" },
  { label: "מבודדים ורכיבי גידור", href: "/products/insulators" },
  { label: "מכשור מדידה", href: "/products/testing-equipment" },
];

const regionalLinks = [
  { label: "חיפה והקריות", href: "/regions/haifa" },
  { label: "חוף הכרמל", href: "/regions/carmel-coast" },
  { label: "עמק הירדן", href: "/regions/jordan-valley" },
];
 
 const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false);
 
   const closeMenu = () => setIsOpen(false);
 
   return (
     <Sheet open={isOpen} onOpenChange={setIsOpen}>
       <SheetTrigger asChild>
         <button
          className="p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
           aria-label="פתח תפריט"
         >
           <Menu className="w-6 h-6" />
         </button>
       </SheetTrigger>
      <SheetContent side="right" className="w-80 p-0">
         <SheetHeader className="p-4 border-b border-border">
           <div className="flex items-center justify-between">
             <img src={logo} alt="גייטקיפ" className="h-12 w-auto" />
             <SheetTitle className="sr-only">תפריט ניווט</SheetTitle>
           </div>
         </SheetHeader>
         
         <nav className="flex flex-col p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
           {/* Main Navigation */}
           {navLinks.map((link) => (
             <NavLink
               key={link.href}
               to={link.href}
               onClick={closeMenu}
              className="py-3 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors rounded-lg"
               activeClassName="text-primary font-bold bg-primary/10"
             >
               {link.label}
             </NavLink>
           ))}

           {/* Product Section */}
           <div className="mt-4 pt-4 border-t border-border">
             <div className="px-4 mb-2 text-sm font-bold text-muted-foreground">מוצרים</div>
             {productLinks.map((link) => (
               <NavLink
                 key={link.href}
                 to={link.href}
                 onClick={closeMenu}
                 className="py-2 px-4 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors rounded-lg"
                 activeClassName="text-primary font-bold bg-primary/10"
               >
                 {link.label}
               </NavLink>
             ))}
           </div>

           {/* Regional Section */}
           <div className="mt-4 pt-4 border-t border-border">
             <div className="px-4 mb-2 text-sm font-bold text-muted-foreground">אזורי שירות</div>
             {regionalLinks.map((link) => (
               <NavLink
                 key={link.href}
                 to={link.href}
                 onClick={closeMenu}
                 className="py-2 px-4 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors rounded-lg"
                 activeClassName="text-primary font-bold bg-primary/10"
               >
                 {link.label}
               </NavLink>
             ))}
           </div>
         </nav>
 
         <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-background">
           <a
             href={PHONE_LINK}
             className="btn-cta-glow flex items-center justify-center gap-2 w-full py-4 rounded-xl text-lg font-bold"
             onClick={closeMenu}
           >
             <Phone className="w-5 h-5" />
             <span>שיחת ייעוץ מיידית</span>
           </a>
         </div>
       </SheetContent>
     </Sheet>
   );
 };
 
 export default Navigation;