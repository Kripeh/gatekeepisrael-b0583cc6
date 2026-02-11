import { useEffect, useState } from 'react';

/**
 * Reading progress bar for blog articles
 * Shows a green progress bar at the top of the screen indicating reading progress
 */
export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(scrollPercent, 100));
    };

    // Update on scroll
    window.addEventListener('scroll', updateProgress, { passive: true });
    // Update on resize (in case content height changes)
    window.addEventListener('resize', updateProgress, { passive: true });
    // Initial update
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/80 z-[9999] transition-all duration-150 ease-out"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
