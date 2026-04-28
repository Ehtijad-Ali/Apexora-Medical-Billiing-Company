import { motion } from "motion/react";
import { GraduationCap, Clock, CheckCircle2, ArrowRight, BookOpen, Users, Award } from "lucide-react";

const trainingFeatures = [
  {
    icon: <BookOpen className="text-primary" />,
    title: "Medical Billing Mastery",
    description: "Comprehensive coverage of ICD-10, CPT coding, and claim submission workflows."
  },
  {
    icon: <Users className="text-primary" />,
    title: "6+ Specialized Modules",
    description: "Deep dives into AR management, credentialing, eligibility, and more."
  },
  {
    icon: <Award className="text-primary" />,
    title: "Certification Ready",
    description: "Practical training designed to prepare you for industry-standard certifications."
  }
];

interface TrainingProps {
  onEnroll: () => void;
}

export default function Training({ onEnroll }: TrainingProps) {
  return (
    <section id="training" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
              <GraduationCap size={16} />
              Professional Career Training
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
              Launch Your Career with Our <span className="text-primary">2-Month Intensive</span> Training
            </h2>
            
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Apexora is proud to offer a specialized 2-month training program designed to turn beginners into medical billing experts. Our curriculum covers the core essentials and 6+ advanced modules to ensure you're job-ready.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Hands-on experience with real billing software",
                "Expert-led sessions on compliance & HIPAA",
                "Resume building & interview preparation",
                "Guaranteed practical knowledge of 6+ RCM domains"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-accent shrink-0" />
                  <span className="text-slate-600 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={onEnroll}
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-slate-800 transition-all group"
            >
              Enroll Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Clock className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Duration</div>
                  <div className="text-xl font-bold text-secondary">2 Months Intensive</div>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                A fast-track program designed for maximum retention and practical skill application in just 8 weeks.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {trainingFeatures.slice(0, 2).map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-secondary mb-2">{feature.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-secondary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-tl-full -z-10" />
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-primary" />
                What You'll Learn
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  "Medical Billing",
                  "AR Management",
                  "Credentialing",
                  "Denial Handling",
                  "CPT/ICD-10",
                  "Patient Billing",
                  "Audit Support"
                ].map((item, i) => (
                  <div key={i} className="text-xs text-slate-300 flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    {item}
                  </div>
                ))}
                <div className="text-xs text-primary font-bold">+ More</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
