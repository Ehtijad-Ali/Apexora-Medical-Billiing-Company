import { motion, AnimatePresence } from "motion/react";
import { X, Shield, Lock, Eye, FileText } from "lucide-react";

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-secondary/95 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Shield size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-secondary">Privacy Policy</h2>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Last Updated: April 2026</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white hover:bg-slate-100 rounded-full text-secondary shadow-sm transition-all border border-slate-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10">
              <div className="prose prose-slate max-w-none">
                <section className="mb-10">
                  <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                    <Eye size={20} className="text-primary" />
                    1. Information We Collect
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Apexora Medical Billing Company ("we," "us," or "our") collects information to provide better services to all our clients. We collect information in the following ways:
                  </p>
                  <ul className="list-disc pl-6 text-slate-600 space-y-2">
                    <li><strong>Information you give us:</strong> For example, when you contact us via our website, we may ask for personal information, like your name, email address, telephone number, or practice details.</li>
                    <li><strong>Information we get from your use of our services:</strong> We may collect information about the services that you use and how you use them, like when you visit our website.</li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                    <Lock size={20} className="text-primary" />
                    2. How We Use Information
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect Apexora and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.
                  </p>
                </section>

                <section className="mb-10">
                  <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                    <Shield size={20} className="text-primary" />
                    3. HIPAA Compliance & Data Security
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    As a medical billing company, we take data security and HIPAA compliance with the utmost seriousness. We implement a variety of security measures to maintain the safety of your personal and practice information:
                  </p>
                  <ul className="list-disc pl-6 text-slate-600 space-y-2">
                    <li>Encrypted data transmission and storage.</li>
                    <li>Strict access controls to sensitive information.</li>
                    <li>Regular security audits and staff training on HIPAA regulations.</li>
                    <li>Secure physical and digital infrastructure.</li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                    <FileText size={20} className="text-primary" />
                    4. Information We Share
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We do not share personal information with companies, organizations and individuals outside of Apexora unless one of the following circumstances applies:
                  </p>
                  <ul className="list-disc pl-6 text-slate-600 space-y-2">
                    <li><strong>With your consent:</strong> We will share personal information with companies, organizations or individuals outside of Apexora when we have your consent to do so.</li>
                    <li><strong>For legal reasons:</strong> We will share personal information with companies, organizations or individuals outside of Apexora if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process or enforceable governmental request.</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-bold text-secondary mb-4">5. Contact Us</h3>
                  <p className="text-slate-600 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br />
                    <strong>Email:</strong> info@apexoramedicalbilling.com
                    <br />
                    <strong>Address:</strong> Zulfiqarabad, Gilgit-Baltistan, Pakistan
                  </p>
                </section>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button 
                onClick={onClose}
                className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
