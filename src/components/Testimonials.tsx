import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our collections improved within 90 days and denials dropped significantly. The transition was seamless.",
    author: "Dr. Sarah Mitchell",
    specialty: "Primary Care Physician",
    rating: 5
  },
  {
    quote: "The team feels like an extension of our practice operations. Their communication is top-notch.",
    author: "James Wilson",
    specialty: "Practice Manager, Cardiology",
    rating: 5
  },
  {
    quote: "Fast communication, transparent reporting, and measurable ROI. Highly recommend their services.",
    author: "Dr. Robert Chen",
    specialty: "Radiology Group Director",
    rating: 5
  },
  {
    quote: "Apexora transformed our billing process. We've seen a 25% increase in revenue since partnering with them.",
    author: "Dr. Emily Parker",
    specialty: "Pediatrician",
    rating: 5
  },
  {
    quote: "The credentialing service saved us months of paperwork. They are true professionals in every sense.",
    author: "Michael Ross",
    specialty: "Clinic Administrator",
    rating: 5
  },
  {
    quote: "Their expertise in out-of-network negotiations is unmatched. We are finally getting paid what we deserve.",
    author: "Dr. David Miller",
    specialty: "Orthopedic Surgeon",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <div className="max-w-3xl">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Trusted by Providers Nationwide
          </h3>
          <p className="text-slate-500 text-lg">
            Hear from the practices that have transformed their revenue cycle with Apexora.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Single Row: Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -2880] }}
            transition={{ 
              duration: 80, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`${t.author}-${i}`}
                className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative group/card hover:border-primary/20 transition-all min-w-[400px] max-w-[450px] whitespace-normal"
              >
                <Quote className="absolute top-8 right-8 text-primary/10 group-hover/card:text-primary/20 transition-colors" size={48} />
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-lg italic mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold group-hover/card:bg-primary group-hover/card:text-white transition-all">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-secondary">{t.author}</div>
                    <div className="text-xs text-slate-400 font-medium">{t.specialty}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
