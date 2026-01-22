import { Zap, ShieldCheck, Sprout, GraduationCap, Wrench, Users } from "lucide-react";
import aboutVineyard from "@/assets/about-vineyard.jpg";
import galleryHeritage from "@/assets/gallery-heritage.jpg";
import galleryController from "@/assets/gallery-controller.jpg";
import galleryTeam from "@/assets/gallery-team.jpg";
import galleryInstallation from "@/assets/gallery-installation.jpg";

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
  { src: galleryHeritage, alt: "תמונה היסטורית של המשק", span: "row-span-2" },
  { src: galleryController, alt: "בקר גדר חשמלית", span: "" },
  { src: galleryTeam, alt: "הצוות בכרם", span: "" },
  { src: galleryInstallation, alt: "התקנה בשטח", span: "col-span-2" },
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
            מהשטח <span className="text-primary">שלנו</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Heritage - tall */}
            <div className="relative rounded-xl overflow-hidden row-span-2 group">
              <img 
                src={galleryHeritage} 
                alt="תמונה היסטורית של המשק" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4">
                <p className="text-sm font-medium text-foreground">מורשת משפחתית</p>
                <p className="text-xs text-muted-foreground">משק רוזנאי, שנות ה-50</p>
              </div>
            </div>

            {/* Controller */}
            <div className="relative rounded-xl overflow-hidden group">
              <img 
                src={galleryController} 
                alt="בקר גדר חשמלית" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 right-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-medium text-foreground">טכנולוגיה מתקדמת</p>
              </div>
            </div>

            {/* Team */}
            <div className="relative rounded-xl overflow-hidden group">
              <img 
                src={galleryTeam} 
                alt="הצוות בכרם" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 right-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-medium text-foreground">הצוות שלנו</p>
              </div>
            </div>

            {/* Installation - wide */}
            <div className="relative rounded-xl overflow-hidden col-span-2 group">
              <img 
                src={galleryInstallation} 
                alt="התקנה בשטח" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 right-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-medium text-foreground">עבודה בשטח</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
