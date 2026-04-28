import { motion, AnimatePresence } from "motion/react";
import React, { useState, useRef } from "react";
import { Zap, AlertCircle, DollarSign, ShieldCheck, BarChart3, TrendingDown, X, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    id: "processing",
    title: "Faster Claim Processing",
    icon: <Zap className="text-primary" />,
    description: "Our streamlined workflows and automated systems ensure your claims are submitted and processed in record time.",
    details: "We utilize advanced electronic submission systems and real-time tracking to ensure your claims reach payers instantly. Our automated scrubbing process identifies potential issues before submission, leading to significantly faster processing times and quicker reimbursements for your practice.",
    features: ["Electronic Data Interchange (EDI)", "Real-time Claim Tracking", "Automated Scrubbing", "Priority Submission"],
    color: "bg-red-50"
  },
  {
    id: "errors",
    title: "Reduced Billing Errors",
    icon: <AlertCircle className="text-primary" />,
    description: "Certified coders and multi-level audits minimize mistakes, leading to a 99.9% clean claim rate.",
    details: "Our team of AAPC-certified coders performs rigorous multi-level audits on every claim. By staying updated with the latest ICD-10 and CPT changes, we ensure maximum accuracy and compliance, which translates to fewer denials and more consistent revenue.",
    features: ["AAPC Certified Coders", "Multi-level Audit Process", "ICD-10/CPT Updates", "99.9% Clean Claim Rate"],
    color: "bg-slate-50"
  },
  {
    id: "cashflow",
    title: "Improved Cash Flow",
    icon: <DollarSign className="text-primary" />,
    description: "Accelerate your revenue cycle and reduce aging A/R with our aggressive follow-up strategies.",
    details: "We focus on reducing your Days in A/R by implementing aggressive follow-up strategies. Our team monitors every claim status and proactively addresses any delays, ensuring that your practice maintains a healthy and predictable cash flow.",
    features: ["A/R Days Reduction", "Aggressive Follow-up", "Denial Analysis", "Predictable Revenue"],
    color: "bg-red-50"
  },
  {
    id: "hipaa",
    title: "HIPAA-Compliant Solutions",
    icon: <ShieldCheck className="text-primary" />,
    description: "State-of-the-art security protocols ensure all patient data remains protected and compliant with federal laws.",
    details: "Security is our top priority. We employ enterprise-grade encryption and strict access controls to protect sensitive patient information. Our processes are fully HIPAA-compliant, giving you peace of mind that your data is safe and secure.",
    features: ["Data Encryption", "Strict Access Controls", "Regular Security Audits", "Full HIPAA Compliance"],
    color: "bg-slate-50"
  },
  {
    id: "reporting",
    title: "Real-Time Reporting Access",
    icon: <BarChart3 className="text-primary" />,
    description: "Access comprehensive financial dashboards and performance metrics anytime, anywhere.",
    details: "Gain complete transparency into your practice's financial performance with our real-time reporting dashboards. Track key metrics, monitor collection rates, and access detailed financial reports at your convenience from any device.",
    features: ["Financial Dashboards", "Performance Metrics", "Custom Reports", "24/7 Online Access"],
    color: "bg-red-50"
  },
  {
    id: "costs",
    title: "Lower Operational Costs",
    icon: <TrendingDown className="text-primary" />,
    description: "Eliminate the overhead of in-house billing staff, training, and software maintenance.",
    details: "Outsourcing your billing to Apexora eliminates the high costs associated with recruiting, training, and managing in-house staff. You also save on expensive billing software and hardware maintenance, allowing you to reinvest those savings back into your practice.",
    features: ["No Staffing Overhead", "Reduced Software Costs", "Scalable Solutions", "Higher Profitability"],
    color: "bg-slate-50"
  }
];

function FlipCard(props: any) {
  const { benefit, index, onLearnMore } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group h-80 perspective-1000"
    >
      <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        {/* Front */}
        <div className={`absolute inset-0 backface-hidden rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl border border-slate-100 ${benefit.color}`}>
          <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6">
            {benefit.icon}
          </div>
          <h3 className="text-xl font-bold text-secondary">{benefit.title}</h3>
          <div className="mt-6 text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-1">
            Hover to learn more
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-secondary text-white shadow-xl">
          <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {benefit.description}
          </p>
          <button 
            onClick={() => onLearnMore(benefit)}
            className="text-accent font-bold text-sm hover:underline"
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Benefits() {
  const [selectedBenefit, setSelectedBenefit] = useState<typeof benefits[0] | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleLearnMore = (benefit: typeof benefits[0]) => {
    setSelectedBenefit(benefit);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Unique Effect: Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-10 left-10 animate-bounce"><Zap size={100} /></div>
        <div className="absolute bottom-20 right-20 animate-pulse"><DollarSign size={120} /></div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2"><ShieldCheck size={80} /></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Precision-Driven Billing for Modern Healthcare
          </h3>
          <p className="text-slate-500 text-lg">
            We combine industry expertise with advanced technology to deliver measurable results for your practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <FlipCard key={i} benefit={benefit} index={i} onLearnMore={handleLearnMore} />
          ))}
        </div>

        {/* Benefit Detail Section */}
        <AnimatePresence mode="wait">
          {selectedBenefit && (
            <motion.div
              ref={detailRef}
              key={selectedBenefit.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-20 p-10 bg-white rounded-[3rem] border border-slate-200 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6">
                <button 
                  onClick={() => setSelectedBenefit(null)}
                  className="p-3 bg-slate-50 rounded-full shadow-md hover:bg-slate-100 transition-colors"
                >
                  <X size={24} className="text-slate-400" />
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mb-8">
                    {selectedBenefit.icon}
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">{selectedBenefit.title}</h4>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {selectedBenefit.details}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#contact"
                      className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-red-700 transition-all"
                    >
                      Partner With Us
                    </a>
                    <button 
                      onClick={() => setSelectedBenefit(null)}
                      className="px-8 py-4 rounded-full font-bold text-secondary border border-slate-200 hover:bg-slate-50 transition-all"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {selectedBenefit.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4"
                    >
                      <CheckCircle2 className="text-accent" size={24} />
                      <span className="font-bold text-secondary">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
