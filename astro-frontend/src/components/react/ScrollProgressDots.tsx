import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'דף הבית' },
  { id: 'discover', label: 'פתרונות' },
  { id: 'team-gallery', label: 'הצוות' },
  { id: 'story', label: 'הסיפור' },
  { id: 'testimonials', label: 'המלצות' },
  { id: 'trust', label: 'למה אנחנו' },
  { id: 'faq', label: 'שאלות' },
];

const ScrollProgressDots = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      aria-label="ניווט מהיר בעמוד"
    >
      <div className="flex flex-col gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center"
            aria-label={`עבור ל${section.label}`}
          >
            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-primary scale-150 shadow-lg shadow-primary/50'
                  : 'bg-muted-foreground/30 hover:bg-primary/50 hover:scale-125'
              }`}
            />

            {/* Label tooltip */}
            <span
              className={`absolute right-6 whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-primary text-primary-foreground opacity-100 translate-x-0'
                  : 'bg-card border border-border text-foreground opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ScrollProgressDots;
