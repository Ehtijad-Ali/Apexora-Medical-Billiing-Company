import { motion } from "motion/react";
import { CheckCircle2, Award, Users, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">About Us</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Your Trusted Partner in Revenue Cycle Management
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Medical Professionals" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-8 left-8">
                <div className="text-4xl font-bold text-white mb-1">Est. 2026</div>
                <div className="text-primary font-bold uppercase tracking-widest text-sm">Startup Innovation</div>
              </div>
            </div>
            
            {/* Floating Trust Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center gap-2"
            >
              <Award size={40} className="text-primary" />
              <div className="text-center">
                <div className="text-xl font-bold text-secondary">Certified</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Billing Experts</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              At <span className="text-secondary font-bold">Apexora Medical Billing Company</span>, we deliver customized, reliable, and efficient billing services to healthcare providers. Our full-service solutions streamline operations, ensure compliance, and accelerate cash flow.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: <Users size={20} />, title: "10+ Certified Coders", text: "Expertise in 75+ specialties" },
                { icon: <MapPin size={20} />, title: "Operating in 10 States", text: "Rapidly expanding network" },
                { icon: <CheckCircle2 size={20} />, title: "HIPAA Compliant", text: "Highest security standards" },
                { icon: <Award size={20} />, title: "99.9% Acceptance", text: "Precision claim processing" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-secondary text-sm">{item.title}</div>
                    <div className="text-xs text-slate-400">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#training"
              className="bg-secondary text-white px-8 py-4 rounded-full font-bold shadow-xl hover:opacity-90 transition-all inline-block"
            >
              View Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
