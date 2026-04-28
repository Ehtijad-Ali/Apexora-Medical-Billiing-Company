import { motion } from "motion/react";
import { 
  Search, 
  FileEdit, 
  Send, 
  ShieldAlert, 
  CreditCard, 
  LineChart 
} from "lucide-react";

const steps = [
  {
    title: "Eligibility Verification",
    description: "We verify patient coverage and benefits before the visit to prevent front-end denials.",
    icon: <Search size={24} />,
  },
  {
    title: "Coding & Charge Entry",
    description: "Certified coders translate services into accurate codes and enter charges with precision.",
    icon: <FileEdit size={24} />,
  },
  {
    title: "Clean Claim Submission",
    description: "Claims are scrubbed for errors and submitted electronically for faster processing.",
    icon: <Send size={24} />,
  },
  {
    title: "Denial Management",
    description: "Our team aggressively follows up on any denials or aging A/R to recover revenue.",
    icon: <ShieldAlert size={24} />,
  },
  {
    title: "Payment Posting",
    description: "Payments are accurately posted and reconciled against your bank deposits.",
    icon: <CreditCard size={24} />,
  },
  {
    title: "Performance Reporting",
    description: "Detailed analytics and insights to help you optimize your practice's performance.",
    icon: <LineChart size={24} />,
  }
];

export default function Timeline() {
  return (
    <section className="py-24 bg-secondary text-white overflow-hidden relative">
      {/* Unique Effect: Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <motion.div 
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent h-1/2"
        />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(193,18,31,0.1)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Process</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">
            The Revenue Cycle, Perfected
          </h3>
          <p className="text-slate-400 text-lg">
            A seamless, end-to-end workflow designed to maximize your collections and minimize delays.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-secondary/80 rounded-2xl flex items-center justify-center mb-6 border border-white/5 shadow-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300 relative z-10">
                  <div className="text-primary group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full text-secondary text-[10px] font-bold flex items-center justify-center shadow-lg">
                    0{i + 1}
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
