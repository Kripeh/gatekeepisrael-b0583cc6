import { Zap, Battery, Sun, Settings, Cable, Columns3 } from "lucide-react";

const components = [
  {
    icon: Zap,
    title: "מחולל מתח (אנרגייזר)",
    description: "לב המערכת – מייצר פולסים חשמליים קצרים שמרתיעים חיות בר. מתוכנן לעבודה רציפה בתנאי שטח ומזג אוויר משתנים.",
  },
  {
    icon: Battery,
    title: "מצבר (סוללה)",
    description: "סוללה עמידה שמאחסנת אנרגיה מהפאנל הסולארי ומספקת חשמל למערכת 24 שעות ביממה, כולל בלילה ובימים מעוננים.",
  },
  {
    icon: Sun,
    title: "פאנל סולארי",
    description: "פאנל קומפקטי שטוען את המצבר מאנרגיית השמש. מבטיח פעולה עצמאית ללא תלות ברשת החשמל ובלי עלויות חשמל שוטפות.",
  },
  {
    icon: Settings,
    title: "בקר טעינה",
    description: "מנהל את טעינת המצבר מהפאנל הסולארי, מגן על הסוללה מפני טעינת יתר ומאריך את חיי המערכת.",
  },
  {
    icon: Cable,
    title: "חוטים ובידודים",
    description: "שלושה חוטי פלדה דקים עם בידודים איכותיים שמבטיחים מעבר זרם תקין ועמידות בגשם, רוח ושמש.",
  },
  {
    icon: Columns3,
    title: "עמודים",
    description: "עמודי תמיכה מותאמים אישית לסוג הקרקע ולמראה הגינה. ניתן לבחור מפיברגלס, מתכת או עץ.",
  },
];

const HomeComponentsDetail = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30" id="components">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4"
              style={{ textWrap: "balance" }}
            >
              הרכיבים של{" "}
              <span className="text-primary">המערכת</span>
            </h2>
            <p
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
              style={{ textWrap: "pretty" }}
            >
              כל רכיב תוכנן לעמידות, אמינות ותחזוקה מינימלית
            </p>
          </div>

          {/* Components Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary/15 text-primary rounded-lg flex items-center justify-center mb-4">
                  <component.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {component.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed text-sm"
                  style={{ textWrap: "pretty" }}
                >
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponentsDetail;
