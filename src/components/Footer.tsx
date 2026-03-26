import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const icons = { Github, Linkedin, Mail, Phone };

const Footer = ({ footerMessage, socialLinks }) => {
  const message = footerMessage.message;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-3">Portfolio</h3>
            <p className="text-muted-foreground leading-relaxed">{message}</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center lg:justify-start space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = icons[social.icon as keyof typeof icons];
              if (!Icon) return null;

              return (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Back to Top */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="group hover:bg-primary/10 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              العودة للأعلى
            </Button>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-primary my-8 opacity-50"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground flex items-center justify-center flex-wrap gap-1">
            © 2025 جميع الحقوق محفوظة – يوسف حمدي
          </p>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full"
            animate={{ y: [-10, 10, -10], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-20 w-1 h-1 bg-accent/40 rounded-full"
            animate={{ y: [5, -15, 5], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
