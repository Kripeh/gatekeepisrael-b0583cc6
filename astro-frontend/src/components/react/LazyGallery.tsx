import { useState, useEffect, useRef } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface LazyGalleryProps {
  images: GalleryImage[];
}

const LazyGallery = ({ images }: LazyGalleryProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px', // Start loading 50px before entering viewport
      threshold: 0.01,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = imageRefs.current.indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            setLoadedImages((prev) => new Set(prev).add(index));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {images.map((image, index) => (
        <figure
          key={index}
          ref={(el) => {
            imageRefs.current[index] = el;
          }}
          className="relative rounded-xl overflow-hidden group bg-secondary/50 aspect-square"
        >
          {loadedImages.has(index) ? (
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              width={600}
              height={600}
              loading="lazy"
            />
          ) : (
            /* Skeleton placeholder */
            <div className="w-full h-full flex items-center justify-center bg-muted/20 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground/30"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
          )}
        </figure>
      ))}
    </div>
  );
};

export default LazyGallery;
