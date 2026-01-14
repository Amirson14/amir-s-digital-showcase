import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Play, X } from "lucide-react";

const projects = [
  {
    title: "AI Agents Development Platform",
    description: "פלטפורמה להקמה ופיתוח של AI Agents מתקדמים לארגונים",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["Python", "LLMs", "RAG", "FastAPI"],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "QA Automation Framework",
    description: "תשתית אוטומציה מקיפה ב-Playwright לבדיקות E2E ו-API",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    tags: ["TypeScript", "Playwright", "Node.js", "CI/CD"],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    github: "https://github.com",
  },
  {
    title: "Big Data Testing Suite",
    description: "מערכת בדיקות לפלטפורמות Big Data מורכבות",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    tags: ["Python", "SQL", "MongoDB", "ETL"],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    live: "https://example.com",
  },
  {
    title: "Real Estate Analytics Tool",
    description: "כלי ניתוח שוק נדל\"ן עם תחזיות מבוססות ML",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tags: ["React", "Python", "Machine Learning", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm mb-4 block">
            פרויקטים נבחרים
          </span>
          <h2 className="section-title">
            <span className="text-gradient-gold">העבודות</span> שלי
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            מבחר פרויקטים המייצגים את הניסיון והמומחיות שלי בתחומי האיכות והבינה המלאכותית
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group card-dark overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                
                {/* Play button overlay */}
                {project.demoVideo && (
                  <button
                    onClick={() => setSelectedVideo(project.demoVideo)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg animate-glow-pulse">
                      <Play className="w-6 h-6 text-primary-foreground mr-[-2px]" fill="currentColor" />
                    </div>
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">קוד</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">צפייה</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 left-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo}
              className="w-full h-full rounded-xl"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
