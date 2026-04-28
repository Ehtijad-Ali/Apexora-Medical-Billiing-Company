import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { X, GraduationCap } from "lucide-react";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
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
            className="relative w-full max-w-3xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-4 md:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-secondary">Course Enrollment</h2>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest leading-none mt-1">Join our 2-Month Intensive Program</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white hover:bg-slate-100 rounded-full text-secondary shadow-sm transition-all border border-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content area that handles scrolling for the whole modal content */}
            <div className="flex-1 w-full bg-slate-50 overflow-y-auto">
              <div className="w-full" style={{ height: "1000px" }}>
                <iframe 
                  src="https://docs.google.com/forms/d/1fq3R_pRtVkrJbdiOl_CGPwi_Sdmx6S0okaGNmYUMzMg/viewform?embedded=true" 
                  className="w-full h-full border-0"
                  title="Google Form Enrollment"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
