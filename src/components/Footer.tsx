import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border pb-24 md:pb-8">
      <div className="container">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="גייטקיפ" className="h-10 w-auto" />
          </div>
          
          <p className="text-muted-foreground text-sm mb-2">
            מיגון חקלאי מקצועי | גדרות חשמליות לחזירי בר
          </p>
          
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} גייטקיפ. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
