import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What specialties do you support?",
    answer: "We support over 75 specialties including Primary Care, Pediatrics, Cardiology, Radiology, Oncology, Behavioral Health, and more. Our certified coders have specific expertise in your field's unique billing requirements."
  },
  {
    question: "Are your services HIPAA compliant?",
    answer: "Yes, absolutely. We maintain the highest standards of HIPAA compliance with enterprise-grade encryption, secure data centers, and regular security audits to protect all patient information."
  },
  {
    question: "Can you help reduce claim denials?",
    answer: "Reducing denials is one of our core strengths. Our clean claim rate is 99.9%, achieved through rigorous front-end scrubbing, certified coding expertise, and proactive denial management workflows."
  },
  {
    question: "Do you work with providers in all 50 states?",
    answer: "Yes, Apexora serves healthcare providers across the entire United States. We stay up-to-date with state-specific regulations and payer requirements nationwide."
  },
  {
    question: "Do you provide credentialing and contracting?",
    answer: "Yes, we offer full-service provider credentialing and payer contract management to help you join insurance panels and maintain your provider status without the administrative headache."
  },
  {
    question: "How quickly can onboarding begin?",
    answer: "Onboarding can typically begin within 7-14 business days. We have a streamlined implementation process designed to minimize disruption to your practice while we set up your account."
  },
  {
    question: "What is your pricing model?",
    answer: "We typically operate on a percentage-of-collections basis, meaning we only get paid when you do. This aligns our incentives perfectly with your practice's financial success."
  },
  {
    question: "Can you integrate with my current EMR/EHR?",
    answer: "We have experience integrating with over 50 different EMR/EHR systems. Our technical team works to ensure seamless data flow between your clinical and billing workflows."
  }
];

function FAQItem(props: any) {
  const { faq, index } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-6 rounded-2xl text-left flex justify-between items-center transition-all duration-300 ${
          isOpen ? "bg-secondary text-white shadow-xl scale-[1.02]" : "bg-white text-secondary border border-slate-100 hover:bg-slate-50"
        }`}
      >
        <span className="font-bold text-lg">{faq.question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-primary rotate-180" : "bg-slate-100"}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 text-slate-500 leading-relaxed font-medium">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 italic">FAQ</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Common Questions
          </h3>
          <p className="text-slate-500 text-lg font-medium">
            Everything you need to know about partnering with Apexora.
          </p>
        </div>

        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
