import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ClipboardCheck, 
  History, 
  UserPlus, 
  Handshake, 
  FileCheck, 
  SearchCheck,
  ArrowRight,
  ChevronRight,
  X,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

const services = [
  {
    id: "billing",
    title: "Medical Billing & Coding",
    description: "Accurate coding, clean claims, and faster reimbursements through precision-driven workflows.",
    icon: <ClipboardCheck />,
    details: "Our certified coders ensure every claim is optimized for maximum reimbursement while maintaining strict compliance. We use advanced scrubbing tools to catch errors before submission, reducing denial rates significantly.",
    features: ["ICD-10 & CPT Expertise", "Claim Scrubbing", "Electronic Submission", "Compliance Audits"]
  },
  {
    id: "ar",
    title: "Accounts Receivable",
    description: "Aggressive follow-up on aging claims, denials, and unpaid balances to recover every dollar.",
    icon: <History />,
    details: "We don't leave money on the table. Our A/R team works tirelessly to resolve denials and aging accounts. We analyze denial patterns to prevent future occurrences and ensure a steady cash flow for your practice.",
    features: ["Denial Management", "Old A/R Recovery", "Payer Follow-up", "Appeal Processing"]
  },
  {
    id: "credentialing",
    title: "Credentialing & Contracting",
    description: "Provider enrollment and payer contract management to expand your network reach.",
    icon: <UserPlus />,
    details: "Simplify the complex process of joining insurance panels and managing your provider contracts. We handle the paperwork, follow-ups, and re-credentialing so you can focus on patient care.",
    features: ["Payer Enrollment", "CAQH Management", "Contract Negotiation", "Re-credentialing"]
  },
  {
    id: "negotiation",
    title: "Out of Network Negotiation",
    description: "Optimize reimbursements for OON claims through expert negotiation strategies.",
    icon: <Handshake />,
    details: "Maximize your revenue from out-of-network services with our specialized negotiation team. We understand payer policies and use data-driven strategies to secure the highest possible reimbursements.",
    features: ["Single Case Agreements", "Payer Relations", "Data-Driven Strategy", "Maximized ROI"]
  },
  {
    id: "authorization",
    title: "Prior & Retro Authorization",
    description: "Faster approvals and retroactive resolution support to prevent front-end denials.",
    icon: <FileCheck />,
    details: "We handle the administrative burden of authorizations, ensuring your services are covered from the start. Our team works proactively to secure approvals and resolve any retroactive issues.",
    features: ["Pre-Auth Management", "Retroactive Approvals", "Clinical Documentation", "Status Tracking"]
  },
  {
    id: "eligibility",
    title: "Insurance Eligibility Verification",
    description: "Prevent denials with front-end validation of patient coverage and benefits.",
    icon: <SearchCheck />,
    details: "Real-time verification ensures you know exactly what's covered before the patient even walks in. We verify co-pays, deductibles, and coverage limits to reduce patient billing surprises.",
    features: ["Real-time Verification", "Benefit Breakdown", "Co-pay Calculation", "Coverage Alerts"]
  },
  {
    id: "audit",
    title: "Compliance & Audit Support",
    description: "Stay ahead of regulatory changes with proactive audits and compliance monitoring.",
    icon: <FileCheck />,
    details: "Our compliance team performs regular internal audits to ensure your practice adheres to all federal and state regulations. We provide detailed reports and corrective action plans to mitigate risk.",
    features: ["Internal Audits", "Risk Assessment", "Policy Development", "Regulatory Updates"]
  },
  {
    id: "reporting",
    title: "Advanced Financial Analytics",
    description: "Deep insights into your practice's financial health with custom reporting tools.",
    icon: <TrendingUp />,
    details: "Go beyond basic billing with our advanced analytics platform. We provide deep insights into your revenue cycle, identifying trends, opportunities for growth, and areas for improvement.",
    features: ["Custom Dashboards", "Trend Analysis", "KPI Tracking", "Predictive Modeling"]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [showAll, setShowAll] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  const displayedServices = showAll ? services : services.slice(0, 6);

  const handleLearnMore = (service: typeof services[0]) => {
    setSelectedService(service);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Unique Effect: Floating Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Comprehensive Revenue Cycle Management
          </h3>
          <p className="text-slate-500 text-lg">
            From clean claims to denial recovery, we help providers improve collections and reduce administrative burden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl border transition-all group service-card-hover ${
                selectedService?.id === service.id
                  ? "bg-secondary text-white border-secondary shadow-2xl"
                  : "bg-white text-secondary border-slate-100 shadow-xl shadow-slate-200/50"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                selectedService?.id === service.id 
                  ? "bg-primary text-white" 
                  : "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"
              }`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className={`text-sm leading-relaxed mb-6 ${
                selectedService?.id === service.id ? "text-slate-300" : "text-slate-500"
              }`}>
                {service.description}
              </p>
              <div className={`pt-6 border-t ${
                selectedService?.id === service.id ? "border-white/10" : "border-slate-50"
              }`}>
                <button 
                  onClick={() => handleLearnMore(service)}
                  className={`font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all ${
                    selectedService?.id === service.id ? "text-primary" : "text-primary"
                  }`}
                >
                  Learn More <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-slate-50 text-secondary font-bold rounded-full border border-slate-200 hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              Show 2 More Tools
            </button>
          </div>
        )}

        {/* Service Detail Section */}
        <AnimatePresence mode="wait">
          {selectedService && (
            <motion.div
              ref={detailsRef}
              key={selectedService.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="mt-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 transition-colors"
                >
                  <X size={24} className="text-slate-400" />
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mb-8">
                    {selectedService.icon}
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">{selectedService.title}</h4>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {selectedService.details}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#contact"
                      className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-red-700 transition-all"
                    >
                      Get Started
                    </a>
                    <button 
                      onClick={() => setSelectedService(null)}
                      className="px-8 py-4 rounded-full font-bold text-secondary border border-slate-200 hover:bg-white transition-all"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {selectedService.features?.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4"
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

        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="group inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
          >
            View All Solutions <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

