import { useState } from "react";
import { X, MapPin, Layers } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    location: "מטע אבוקדו, עמק חפר",
    solution: "גידור היקפי מלא + 2 שערים",
    soil: "אדמה כבדה",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    location: "כרם יין, רמת הגולן",
    solution: "מערכת סולארית עצמאית",
    soil: "אדמה סלעית",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    location: "שדה תירס, עמק יזרעאל",
    solution: "גידור משולב עם חיישנים",
    soil: "אדמה קלה",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    location: "מטע הדרים, השרון",
    solution: "גידור מרובע + שער אוטומטי",
    soil: "אדמה כבדה",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80",
    location: "פרדס, הנגב הצפוני",
    solution: "מערכת הגנה רב-שכבתית",
    soil: "אדמה קלה",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
    location: "שדה ירקות, עמק בית שאן",
    solution: "גידור עם גיבוי סולארי",
    soil: "אדמה כבדה",
  },
];

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="py-20 md:py-28 bg-secondary/20" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ textWrap: 'balance' }}
          >
            גייטקיפ בפעולה:{" "}
            <span className="text-primary">פרויקטים מהשטח</span>
          </h2>
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            עבודות אמיתיות, תוצאות אמיתיות – הצצה לפרויקטים שהשלמנו בכל הארץ
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? 'md:row-span-2 aspect-[3/4]' : 'aspect-[4/3]'
              }`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.location}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay - Always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-bold">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Layers className="w-4 h-4" />
                    <span>{project.soil}</span>
                  </div>
                  <p className="text-sm text-primary mt-2 font-semibold">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Click hint */}
              <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                לחץ להגדלה
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-none">
          {selectedProject && (
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.location}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-bold text-xl">{selectedProject.location}</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>{selectedProject.soil}</span>
                  </div>
                  <span className="text-primary font-semibold">{selectedProject.solution}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectGallery;
