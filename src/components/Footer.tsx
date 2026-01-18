const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border pb-24 md:pb-8">
      <div className="container">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-black">ג</span>
            </div>
            <span className="text-lg font-black text-foreground">גייטקיפ</span>
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
