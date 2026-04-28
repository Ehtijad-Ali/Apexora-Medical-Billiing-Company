import { motion } from "motion/react";
import { Phone, Mail, Facebook, Instagram, Linkedin, ShieldCheck, Globe, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="hidden lg:block w-full bg-secondary text-white py-2 px-6 border-b border-white/5 relative z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-primary" />
            <span>+92 3122277448</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-primary" />
            <span>info@apexoramedicalbilling.com</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-accent" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe size={14} className="text-accent" />
              <span>Operating in 10 States</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-accent" />
              <span>Certified Coding Experts</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 border-l border-white/10 pl-6">
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={14} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={14} /></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
