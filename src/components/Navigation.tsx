 import { useState } from "react";
 import { Menu, X, Phone, ChevronDown } from "lucide-react";
 import { NavLink } from "@/components/NavLink";
 import { useIsMobile } from "@/hooks/use-mobile";
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
   { label: "למה גדר חשמלית?", href: "/why-electric-fence" },
   { label: "אזורי שירות", href: "/service-areas" },
 ];
 
 const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false);
   const isMobile = useIsMobile();
 
   const closeMenu = () => setIsOpen(false);
 
   // Desktop Navigation
   if (!isMobile) {
     return (
       <nav className="hidden md:flex items-center gap-1">
         {navLinks.map((link) => (
           <NavLink
             key={link.href}
             to={link.href}
             className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
             activeClassName="text-primary font-bold bg-primary/10"
           >
             {link.label}
           </NavLink>
         ))}
       </nav>
     );
   }
 
   // Mobile Navigation
   return (
     <Sheet open={isOpen} onOpenChange={setIsOpen}>
       <SheetTrigger asChild>
         <button
           className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
           aria-label="פתח תפריט"
         >
           <Menu className="w-6 h-6" />
         </button>
       </SheetTrigger>
       <SheetContent side="right" className="w-full sm:w-80 p-0">
         <SheetHeader className="p-4 border-b border-border">
           <div className="flex items-center justify-between">
             <img src={logo} alt="גייטקיפ" className="h-12 w-auto" />
             <SheetTitle className="sr-only">תפריט ניווט</SheetTitle>
           </div>
         </SheetHeader>
         
         <nav className="flex flex-col p-4">
           {navLinks.map((link) => (
             <NavLink
               key={link.href}
               to={link.href}
               onClick={closeMenu}
               className="py-4 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors rounded-lg border-b border-border/50 last:border-b-0"
               activeClassName="text-primary font-bold bg-primary/10"
             >
               {link.label}
             </NavLink>
           ))}
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