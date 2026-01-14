import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "Playwright", icon: "🎭" },
  { name: "AI/LLMs", icon: "🤖" },
  { name: "SQL", icon: "🗄️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Cypress", icon: "🌲" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute inset-4 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl" />
              
              <img
                src={profilePhoto}
                alt="אמיר גרינברג"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-primary/30"
              >
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">שנות ניסיון</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium tracking-widest text-sm mb-4 block">
              אודות
            </span>
            <h2 className="section-title">
              <span className="text-gradient-gold">הסיפור</span> שלי
            </h2>

            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed mb-8">
              <p>
                עם למעלה מ-15 שנות ניסיון בתעשיית הטכנולוגיה, אני מומחה לאיכות תוכנה ובינה מלאכותית. 
                התחלתי את דרכי כמפתח QA בצה"ל, שם הקמתי תשתיות בדיקות למערכות קריטיות.
              </p>
              <p>
                כיום אני משמש כמרצה וליווי פיתוח AI באוניברסיטת בן גוריון ובמכללת ניו מדיה, 
                ומייעץ לחברות טכנולוגיה מובילות בתחומי הבינה המלאכותית והאיכות.
              </p>
              <p>
                <span className="text-primary font-semibold">המשימה שלי:</span> להביא מצוינות לכל פרויקט, 
                תוך שילוב חדשנות טכנולוגית עם גישה אנושית.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                טכנולוגיות וכלים
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <span>{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="card-dark p-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    B.Sc. ניהול טכנולוגיה ומערכות מידע
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    מכון טכנולוגי חולון (HIT) | ממוצע 90
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
