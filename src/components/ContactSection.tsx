import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "טלפון",
    value: "050-280-1140",
    href: "tel:0502801140",
  },
  {
    icon: Mail,
    label: "אימייל",
    value: "gr.amir@gmail.com",
    href: "mailto:gr.amir@gmail.com",
  },
  {
    icon: MapPin,
    label: "מיקום",
    value: "חולון, ישראל",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amir-greenberg-97b054101/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-card/50 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm mb-4 block">
            צור קשר
          </span>
          <h2 className="section-title">
            בואו <span className="text-gradient-gold">נדבר</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            מחפשים יועץ AI או מומחה איכות? אשמח לשמוע על הפרויקט שלכם
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const Wrapper = item.href ? "a" : "div";
              const wrapperProps = item.href
                ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined }
                : {};

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className="card-dark p-6 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 group block"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-muted-foreground text-sm mb-1">{item.label}</h3>
                    <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="mailto:gr.amir@gmail.com?subject=פנייה מהאתר - שיחת ייעוץ"
              className="btn-gold text-lg inline-block"
            >
              קבעו שיחת ייעוץ
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
