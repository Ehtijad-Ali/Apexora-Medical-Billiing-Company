import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Stethoscope, 
  Baby, 
  Heart, 
  Scan, 
  Dna, 
  Activity, 
  Bone, 
  Brain, 
  Sparkles, 
  Clock, 
  Users,
  Eye,
  Ear,
  Syringe,
  Microscope,
  Scissors,
  Thermometer,
  Plus,
  Minus
} from "lucide-react";

const specialties = [
  { name: "Primary Care", icon: <Stethoscope />, color: "bg-blue-50 text-blue-600" },
  { name: "Pediatric", icon: <Baby />, color: "bg-pink-50 text-pink-600" },
  { name: "Cardiology", icon: <Heart />, color: "bg-red-50 text-red-600" },
  { name: "Radiology", icon: <Scan />, color: "bg-purple-50 text-purple-600" },
  { name: "Oncology", icon: <Dna />, color: "bg-emerald-50 text-emerald-600" },
  { name: "Internal Medicine", icon: <Activity />, color: "bg-indigo-50 text-indigo-600" },
  { name: "Orthopedics", icon: <Bone />, color: "bg-orange-50 text-orange-600" },
  { name: "Behavioral Health", icon: <Brain />, color: "bg-teal-50 text-teal-600" },
  { name: "Dermatology", icon: <Sparkles />, color: "bg-rose-50 text-rose-600" },
  { name: "Urgent Care", icon: <Clock />, color: "bg-amber-50 text-amber-600" },
  { name: "Family Medicine", icon: <Users />, color: "bg-cyan-50 text-cyan-600" },
  { name: "Ophthalmology", icon: <Eye />, color: "bg-sky-50 text-sky-600" },
  { name: "Otolaryngology", icon: <Ear />, color: "bg-lime-50 text-lime-600" },
  { name: "Anesthesiology", icon: <Syringe />, color: "bg-violet-50 text-violet-600" },
  { name: "Pathology", icon: <Microscope />, color: "bg-fuchsia-50 text-fuchsia-600" },
  { name: "Surgery", icon: <Scissors />, color: "bg-slate-50 text-slate-600" },
  { name: "Emergency Medicine", icon: <Thermometer />, color: "bg-red-50 text-red-600" },
];

export default function Specialties() {
  const firstRow = specialties.slice(0, 9);
  const secondRow = specialties.slice(9);

  return (
    <section id="specialties" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Unique Effect: Floating Dots Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute rounded-full bg-primary/20"
            style={{ 
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <div className="max-w-3xl">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Specialties</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Expertise Across All Disciplines
          </h3>
          <p className="text-slate-500 text-lg">
            Our certified coders have deep expertise in over 75 specialties, ensuring accurate billing regardless of your practice focus.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* First Row: Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-4 whitespace-nowrap"
          >
            {[...firstRow, ...firstRow, ...firstRow].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center min-w-[180px] group/card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover/card:rotate-6 ${item.color}`}>
                  {item.icon}
                </div>
                <span className="font-bold text-secondary text-xs">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row: Right to Left */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [-1920, 0] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-4 whitespace-nowrap"
          >
            {[...secondRow, ...secondRow, ...secondRow].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center min-w-[180px] group/card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover/card:rotate-6 ${item.color}`}>
                  {item.icon}
                </div>
                <span className="font-bold text-secondary text-xs">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-primary/5 border border-primary/10 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center">
              <Plus size={24} />
            </div>
            <div>
              <div className="font-bold text-secondary">And 6+ More Specialties</div>
              <div className="text-xs text-slate-500">Covering all major medical and surgical disciplines</div>
            </div>
          </div>
          <a 
            href="#contact"
            className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all"
          >
            Check Your Specialty
          </a>
        </div>
      </div>
    </section>
  );
}
