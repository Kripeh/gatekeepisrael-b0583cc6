import { Zap, ShieldCheck, Sprout, GraduationCap, Wrench, Users } from "lucide-react";
import aboutVineyard from "@/assets/about-vineyard.jpg";
const STORAGE_BASE = "https://sqxmgqqtcgkjztpvhzzr.supabase.co/storage/v1/object/public/images";

const teamMembers = [
  {
    name: "ענבר ויואב",
    role: "שורשים ואגרונומיה",
    description: "דור שלישי למגדלי ענבים בלכיש. ענבר הוא סטודנט לאגרונומיה בפקולטה לחקלאות, מביא את ההבנה העמוקה של הצמח והשטח.",
    icon: Sprout,
  },
  {
    name: "אפיק",
    role: "כוח הביצוע",
    description: "קבלן שלד ממושב שדה משה. מומחה לתשתיות וקונסטרוקציה, האיש שמוודא שכל גדר עומדת איתנה מול כל אתגר.",
    icon: Wrench,
  },
  {
    name: "אמיתי",
    role: "הנדסה וביטחון",
    description: "המוח הטכנולוגי שלנו. סטודנט להנדסת חשמל וחשמלאי מנוסה. הצטרף אלינו לאחר 4 סבבי מילואים קרביים במלחמה כדי להבטיח אפס תקלות בשטח.",
    icon: Zap,
  },
  {
    name: "הצוות שלנו",
    role: "משמעת ודיוק",
    description: "כל העובדים הם חיילים משוחררים משירות קרבי, המביאים משמעת, דיוק ועבודה קשה לכל פרויקט.",
    icon: Users,
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "ותיקי צבא",
    description: "כולנו בוגרי שירות קרבי",
  },
  {
    icon: GraduationCap,
    title: "מצוינות אקדמית",
    description: "סטודנטים להנדסה ואגרונומיה",
  },
  {
    icon: Sprout,
    title: "ניסיון שטח",
    description: "דור שלישי לחקלאות",
  },
];

const galleryImages = [
  { 
    src: `${STORAGE_BASE}/projects/PHOTO-2026-01-22-13-54-27.jpg`,
    alt: "פרויקט התקנה 1",
    label: "עבודה בשטח",
    span: "row-span-2"
  },
  { 
    src: `${STORAGE_BASE}/projects/197543FE-1C3D-4552-81CB-D561C3EB79CA.JPG`,
    alt: "פרויקט התקנה 2",
    label: "התקנת גדר",
    span: "" 
  },
  { 
    src: `${STORAGE_BASE}/projects/PHOTO-2026-01-22-12-43-50.jpg`,
    alt: "פרויקט התקנה 3",
    label: "הצוות בפעולה",
    span: "" 
  },
  { 
    src: `${STORAGE_BASE}/projects/IMG_7536.jpg`,
    alt: "פרויקט התקנה 4",
    label: "מערכת מותקנת",
    span: "" 
  },
  { 
    src: `${STORAGE_BASE}/projects/IMG_7540.jpg`,
    alt: "פרויקט התקנה 5",
    label: "גדר חשמלית",
    span: "col-span-2"
  },
  { 
    src: `${STORAGE_BASE}/projects/IMG_8123.jpg`,
    alt: "פרויקט התקנה 6",
    label: "התקנה בשטח",
    span: "row-span-2"
  },
  { 
    src: `${STORAGE_BASE}/projects/IMG_7454.jpg`,
    alt: "פרויקט התקנה 7",
    label: "עבודת צוות",
    span: "" 
  },
  { 
    src: `${STORAGE_BASE}/projects/IMG_7152.jpg`,
    alt: "פרויקט התקנה 8",
    label: "פרויקט גמור",
    span: "" 
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4"
            style={{ textWrap: 'balance' }}
          >
            מגינים על הבית, שומרים על האדמה:{" "}
            <span className="text-primary text-glow">הסיפור שמאחורי הגדר</span>
          </h2>
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            שילוב של מורשת חקלאית, הנדסה מתקדמת וערכים של שירות קרבי.
          </p>
        </div>

        {/* Story Section - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-primary rounded-full" />
                <h3 className="text-2xl font-bold text-foreground">הסיפור שלנו</h3>
              </div>
              <p 
                className="text-lg text-muted-foreground leading-relaxed"
                style={{ textWrap: 'pretty' }}
              >
                הכל התחיל במשק רוזנאי במושב לכיש. דור שלישי למגדלי ענבים, ראינו מקרוב איך לילה אחד של פלישת חזירי בר יכול להרוס עבודה של שנה שלמה. הפתרון הראשון נבנה עבור סבא גדי - גדר חשמלית חכמה שהחזירה למשק את השקט.
              </p>
              <p 
                className="text-lg text-muted-foreground leading-relaxed mt-4"
                style={{ textWrap: 'pretty' }}
              >
                מה שהתחיל כעזרה משפחתית, הפך מהר מאוד לבקשות של חקלאי המושב והאזור, והיום - <strong className="text-foreground">למשימה הלאומית שלנו:</strong> להגן על התוצרת החקלאית של ישראל עם הטכנולוגיה המתקדמת ביותר.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutVineyard} 
                alt="כרם במושב לכיש" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6 left-6">
                <div className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4">
                  <p className="text-sm font-medium text-primary">מושב לכיש</p>
                  <p className="text-muted-foreground text-sm">משק רוזנאי - דור שלישי לגידול ענבים</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Bar */}
        <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            הכירו את <span className="text-primary">הצוות</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <member.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                <p 
                  className="text-sm text-muted-foreground leading-relaxed"
                  style={{ textWrap: 'pretty' }}
                >
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery - Masonry Style */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            הצוות <span className="text-primary">בפעולה</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative rounded-xl overflow-hidden group bg-secondary/50 aspect-[4/3]"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
