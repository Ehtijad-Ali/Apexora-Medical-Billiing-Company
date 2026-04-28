import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { 
  TrendingUp, 
  DollarSign, 
  Percent, 
  ArrowRight, 
  Calculator, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from "recharts";

export default function RevenueCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(100000);
  const [denialRate, setDenialRate] = useState(15);
  const [isCalculating, setIsCalculating] = useState(false);

  const results = useMemo(() => {
    // Current annual revenue
    const currentAnnual = monthlyRevenue * 12;
    // Current lost revenue due to denials
    const currentLost = currentAnnual * (denialRate / 100);
    
    // With our solution: 
    // 1. Denial rate drops to ~1%
    // 2. Collection efficiency increases by ~5%
    const newDenialRate = 1;
    const efficiencyGain = 0.05;
    
    const potentialRecovered = currentLost * (1 - (newDenialRate / denialRate));
    const efficiencyIncrease = currentAnnual * efficiencyGain;
    const totalAnnualGain = potentialRecovered + efficiencyIncrease;
    const newAnnualTotal = currentAnnual + totalAnnualGain;
    
    return {
      currentAnnual,
      totalAnnualGain,
      newAnnualTotal,
      monthlyGain: totalAnnualGain / 12,
      percentageIncrease: (totalAnnualGain / currentAnnual) * 100
    };
  }, [monthlyRevenue, denialRate]);

  const chartData = [
    { name: "Current Revenue", value: results.currentAnnual, fill: "#0a192f" },
    { name: "With Our Solution", value: results.newAnnualTotal, fill: "#C1121F" }
  ];

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 800);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(193,18,31,0.03)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6"
          >
            <Sparkles size={16} />
            AI-Powered ROI Estimator
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Calculate Your <span className="text-primary">Revenue Growth</span>
          </h2>
          <p className="text-slate-500 text-lg">
            See how much more your practice could be collecting with our precision-driven billing solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Inputs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="space-y-8">
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-secondary mb-4">
                  <DollarSign size={16} className="text-primary" />
                  Average Monthly Revenue
                </label>
                <input 
                  type="range" 
                  min="10000" 
                  max="1000000" 
                  step="10000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-4">
                  <span className="text-xs font-bold text-slate-400">$10K</span>
                  <span className="text-xl font-bold text-primary font-mono">
                    ${monthlyRevenue.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-slate-400">$1M</span>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-secondary mb-4">
                  <Percent size={16} className="text-primary" />
                  Current Denial Rate
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  step="1"
                  value={denialRate}
                  onChange={(e) => setDenialRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-4">
                  <span className="text-xs font-bold text-slate-400">1%</span>
                  <span className="text-xl font-bold text-primary font-mono">
                    {denialRate}%
                  </span>
                  <span className="text-xs font-bold text-slate-400">30%</span>
                </div>
              </div>

              <button 
                onClick={handleCalculate}
                className="w-full bg-secondary text-white py-4 rounded-xl font-bold shadow-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
              >
                {isCalculating ? "Calculating..." : "Update ROI Estimate"}
                <Calculator size={18} className="group-hover:rotate-12 transition-transform" />
              </button>

              <div className="pt-8 border-t border-slate-50">
                <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-2xl border border-accent/10">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-1" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our estimates are based on historical performance data showing an average **99.9% clean claim rate** and **5-15% increase** in overall collections for new clients.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Annual Revenue Gain</div>
                <div className="text-4xl font-bold text-primary mb-2">
                  ${results.totalAnnualGain.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <div className="text-sm font-bold text-accent flex items-center gap-1">
                  <TrendingUp size={14} />
                  +{results.percentageIncrease.toFixed(1)}% Increase
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Monthly Cash Flow Increase</div>
                <div className="text-4xl font-bold text-secondary mb-2">
                  ${results.monthlyGain.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <div className="text-sm font-bold text-slate-400 italic">
                  Recovered from denials & inefficiencies
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-[400px]">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-bold text-secondary">Projected Annual Revenue</h4>
                <div className="flex gap-4 text-xs font-bold">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-secondary rounded-full" />
                    <span>Current</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span>Projected</span>
                  </div>
                </div>
              </div>
              
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                    tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                  />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ 
                      borderRadius: '16px', 
                      border: 'none', 
                      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                      padding: '12px 16px'
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Annual Revenue"]}
                  />
                  <Bar 
                    dataKey="value" 
                    radius={[10, 10, 0, 0]} 
                    barSize={60}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group"
              >
                Get Your Full Practice Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
