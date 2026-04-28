import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, ArrowRight, Calculator, DollarSign, TrendingUp, PieChart } from "lucide-react";

export default function Comparison() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [revenue, setRevenue] = useState(100000);
  
  const inHouseCost = revenue * 0.12; // 12% overhead for in-house
  const apexoraCost = revenue * 0.07; // 7% fee for Apexora
  const savings = inHouseCost - apexoraCost;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Comparison</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            In-House vs. Professional Billing
          </h3>
          <p className="text-slate-500 text-lg">
            See why outsourcing to Apexora is the smarter choice for your practice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Unique Effect: Center Divider Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden lg:block" />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 rounded-3xl border border-slate-200 hover:border-red-100 transition-colors"
          >
            <h4 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                <X size={20} />
              </div>
              In-House Billing
            </h4>
            <ul className="space-y-6">
              {[
                "Higher staffing & benefit costs",
                "Continuous training burden",
                "Slower follow-up on denials",
                "Inconsistent collection rates",
                "Software & hardware overhead",
                "Vulnerability to staff turnover"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-500">
                  <X size={18} className="text-red-400 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -z-10" 
            />
            
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <Check size={20} />
              </div>
              Apexora Medical Billing
            </h4>
            <ul className="space-y-6">
              {[
                "Expert certified coders",
                "Faster reimbursements",
                "Reduced denial rates",
                "Scalable nationwide support",
                "Real-time reporting access",
                "Significantly lower overhead"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <Check size={18} className="text-accent mt-1 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <button 
                onClick={() => setShowCalculator(true)}
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
              >
                Calculate Your Savings <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Savings Calculator Modal */}
      <AnimatePresence>
        {showCalculator && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCalculator(false)}
              className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2rem] overflow-hidden shadow-2xl p-6 md:p-10"
            >
              <button 
                onClick={() => setShowCalculator(false)}
                className="absolute top-5 right-5 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X size={18} className="text-slate-500" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <Calculator size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary">Savings Calculator</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Estimate your annual ROI</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                    <label className="text-sm font-bold text-secondary">Monthly Revenue</label>
                    <div className="relative w-full sm:w-40">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</div>
                      <input 
                        type="number" 
                        value={revenue}
                        onChange={(e) => setRevenue(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full pl-7 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg font-bold text-secondary text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="10000" 
                    max="1000000" 
                    step="10000"
                    value={revenue}
                    onChange={(e) => setRevenue(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">In-House Cost</div>
                    <div className="text-lg font-bold text-secondary">${(inHouseCost * 12).toLocaleString()}</div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                    <div className="text-[10px] text-primary font-bold uppercase mb-1">Apexora Cost</div>
                    <div className="text-lg font-bold text-primary">${(apexoraCost * 12).toLocaleString()}</div>
                  </div>
                </div>

                <div className="p-5 bg-secondary text-white rounded-2xl shadow-xl shadow-secondary/20 flex justify-between items-center">
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Annual Savings</div>
                    <div className="text-2xl font-bold text-accent">${(savings * 12).toLocaleString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Practice Health</div>
                    <div className="text-lg font-bold text-primary">
                      {revenue > 500000 ? "94" : revenue > 100000 ? "82" : "76"}/100
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm shrink-0">
                    <TrendingUp size={16} />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Our experts typically increase collection rates by <strong>15-20%</strong> through aggressive denial management.
                  </p>
                </div>

                <button 
                  onClick={() => setShowCalculator(false)}
                  className="w-full bg-primary text-white py-3.5 rounded-xl font-bold shadow-xl shadow-primary/20 hover:bg-red-700 transition-all text-sm"
                >
                  Get Full Analysis
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

