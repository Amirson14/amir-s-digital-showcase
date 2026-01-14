import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, Users, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "מרצה ומנטור פיתוח AI",
    company: "אוניברסיטת בן גוריון ומכללת ניו מדיה",
    period: "2025 - היום",
    highlights: [
      "הוראת פיתוח AI Agents",
      "יישום מעשי של LLMs",
      "מתודולוגיות פיתוח מתקדמות",
    ],
    icon: Award,
  },
  {
    title: "AI Product Manager",
    company: "TA9",
    period: "2025 - היום",
    highlights: [
      "ניהול מוצרי AI חדשניים",
      "אסטרטגיית מוצר ופיתוח",
    ],
    icon: TrendingUp,
  },
  {
    title: "QA Team Lead",
    company: "TA9",
    period: "2023 - 2025",
    highlights: [
      "ניהול צוות של 3 מהנדסי QA בכירים",
      "אסטרטגיית בדיקות מקיפה - Manual, API, UI",
      "ניהול אוטומציה ב-Playwright + TypeScript",
      "צמצום זמני תיקון באגים ב-20%",
    ],
    icon: Users,
  },
  {
    title: "QA Engineer (Manual + Automation)",
    company: "LocalizeOS / Madlan",
    period: "2021 - 2023",
    highlights: [
      "QA יחיד בצוות פיתוח",
      "תכנון וכתיבת כל בדיקות הספרינט",
      "שיתוף פעולה הדוק עם צוות המוצר",
      "הגדלת שימור משתמשים ב-7%",
    ],
    icon: Briefcase,
  },
  {
    title: "Senior QA and System Analyst",
    company: "התעשייה האווירית (IAI) - אגף טילים",
    period: "2019 - 2021",
    highlights: [
      "ניתוח מערכות ואפיון פורמלי STD/STP",
      "פיתוח סקריפטים אוטומטיים ב-C#",
      "מסירת מוצרים ללקוחות בינלאומיים",
    ],
    icon: Briefcase,
  },
  {
    title: "ראש צוות QA",
    company: "IAI / אלביט מערכות",
    period: "2017 - 2019",
    highlights: [
      "ניהול צוות של 3-4 מהנדסי QA",
      "שילוב ניהול עם בדיקות ידיות",
      "פרויקטים מסווגים",
    ],
    icon: Users,
  },
  {
    title: "ראש QA - צה\"ל",
    company: "אגף טכנולוגיות, צה\"ל",
    period: "2010 - 2013",
    highlights: [
      "הקמת תשתיות QA למוצרים חדשים",
      "ניהול צוות מהנדסי QA",
      "פרס הצטיינות מהמפקד על הישגים יוצאי דופן",
    ],
    icon: Award,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-card/50 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm mb-4 block">
            ניסיון תעסוקתי
          </span>
          <h2 className="section-title">
            <span className="text-gradient-gold">המסע</span> המקצועי
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative mb-8 md:mr-16"
              >
                {/* Timeline dot */}
                <div className="absolute right-[-2.5rem] top-8 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg animate-glow-pulse hidden md:block" />

                <div className="card-dark p-6 hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <span className="text-primary font-medium text-sm px-3 py-1 bg-primary/10 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="flex items-start gap-2 text-foreground/80"
                          >
                            <span className="text-primary mt-1.5 text-xs">●</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
