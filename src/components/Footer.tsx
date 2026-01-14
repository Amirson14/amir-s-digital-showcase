import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-muted-foreground text-sm flex items-center gap-2">
            נבנה עם <Heart className="w-4 h-4 text-primary" fill="currentColor" /> על ידי{" "}
            <span className="text-foreground font-semibold">אמיר גרינברג</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} כל הזכויות שמורות
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
