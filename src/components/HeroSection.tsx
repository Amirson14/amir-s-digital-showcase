import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Linkedin, Download, Phone, Mail } from "lucide-react";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-70 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </motion.div>

      {/* Animated particles/dots background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [null, Math.random() * -200 - 100],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 container mx-auto px-6 text-center pt-20"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <motion.span 
            className="text-primary font-medium tracking-widest text-sm md:text-base inline-block"
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0.2em", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            AI & QUALITY CONSULTANT
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-rubikSpray mb-6 relative z-30"
        >
          <motion.span 
            className="text-foreground ml-4 inline-block drop-shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            אמיר
          </motion.span>
          <motion.span 
            className="text-gradient-teal inline-block drop-shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            גרינברג
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            מנהל מוצר AI וראש צוות QA עם מעל 14 שנות ניסיון. מומחה בהובלת אסטרטגיית AI, ניהול צוותים טכנולוגיים והטמעת מערכות מורכבות תוך שילוב חשיבה מוצרית ואנליטית להשגת יעדים עסקיים.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="https://www.linkedin.com/in/amir-greenberg-97b054101/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0077B5] hover:bg-[#006399] text-white rounded-md transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="/Amir-Greenberg-CV.pdf"
            download="Amir-Greenberg-CV.pdf"
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5" />
            <span>הורדת קו"ח</span>
          </motion.a>
          <motion.a
            href="https://wa.me/972502801140"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-primary/50 text-primary rounded-md hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5" />
            <span>050-2801140</span>
          </motion.a>
          <motion.a
            href="mailto:gr.amir@gmail.com"
            className="px-6 py-3 border border-primary/50 text-primary rounded-md hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            <span>gr.amir@gmail.com</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator with enhanced animation */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
