import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight, Activity } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Specialties", href: "#specialties" },
  { name: "About", href: "#about" },
  { name: "Training", href: "#training" },
  { name: "Why Us", href: "#why-us" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 lg:top-10 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "lg:top-0 py-3 bg-white/80 backdrop-blur-lg shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/KjqgY0J2/Whats-App-Image-2026-04-05-at-10-26-17-PM.jpg" 
            alt="Apexora Medical Billing Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 + 0.2, duration: 0.5 }}
              onClick={() => handleNavLinkClick()}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden lg:block"
        >
          <a 
            href="#contact"
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-red-700 transition-all hover:scale-105 flex items-center gap-2"
          >
            Let's Connect
            <ChevronRight size={16} />
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => handleNavLinkClick()}
                  className="text-lg font-medium text-secondary hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold mt-4"
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
