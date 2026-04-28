import { motion } from "motion/react";
import { ChevronRight, Shield, Globe, Headset, Activity, FileText } from "lucide-react";

const trustBadges = [
  { icon: <Shield size={16} />, text: "HIPAA Compliant" },
  { icon: <Globe size={16} />, text: "Operating in 10 States" },
  { icon: <Headset size={16} />, text: "Certified Coding Experts" },
];

const barHeights = [40, 70, 45, 90, 65, 80, 55];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-50"
    >
      {/* ── Dot grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none dot-pattern"
        aria-hidden="true"
      />
      {/* Gradient fade on dot grid edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-transparent to-white pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

      {/* ── Background accent blobs ── */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/80 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── Floating animated orb ── */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 w-full">

        {/* ── Left column — Copy ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6"
          >
            <Activity size={15} className="animate-pulse" />
            99.9% Claim Acceptance Rate
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65 }}
            className="text-5xl lg:text-[4.25rem] font-bold text-secondary leading-[1.1] mb-5"
          >
            Maximize Revenue.{" "}
            <br />
            <span className="text-primary">Minimize Admin.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-xl font-semibold text-slate-500 mb-6"
          >
            Medical Billing, Simplified.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-base text-slate-500 max-w-xl mb-10 leading-relaxed"
          >
            At{" "}
            <span className="text-secondary font-bold">
              Apexora Medical Billing Company
            </span>
            , we deliver customized, reliable, and efficient billing services
            to healthcare providers. Our full-service solutions streamline
            operations, ensure compliance, and accelerate cash flow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/30 hover:bg-red-700 transition-all hover:scale-105 active:scale-100 flex items-center justify-center gap-2"
            >
              Book Free Consultation
              <ChevronRight size={18} />
            </a>
            <a
              href="#services"
              className="bg-white text-secondary border border-slate-200 px-8 py-4 rounded-full font-bold shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            {trustBadges.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400 font-medium">
                <span className="text-accent">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right column — Dashboard Mockup ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative hidden sm:block"
        >
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-slate-200/60 rounded-full -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135%] h-[135%] border border-slate-200/30 rounded-full -z-10" />

          {/* Dashboard card */}
          <div className="relative z-20 bg-white rounded-3xl shadow-2xl shadow-slate-200/80 border border-slate-100 p-6 overflow-hidden">
            {/* Window chrome */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Revenue Dashboard
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <div className="text-[10px] text-slate-400 mb-1 font-medium">Total Revenue</div>
                  <div className="text-xl font-bold text-secondary">$142,500</div>
                  <div className="text-[10px] text-green-600 font-bold mt-0.5">↑ 12.5% this month</div>
                </div>
                <div className="p-4 bg-primary/5 rounded-2xl">
                  <div className="text-[10px] text-slate-400 mb-1 font-medium">Claims Processed</div>
                  <div className="text-xl font-bold text-secondary">1,284</div>
                  <div className="text-[10px] text-primary font-bold mt-0.5">99.9% Acceptance</div>
                </div>
              </div>

              {/* Bar chart — scaleY from bottom keeps GPU compositing, no layout recalc */}
              <div className="h-28 w-full bg-slate-50 rounded-2xl flex items-end justify-between px-4 pb-3 gap-2">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.9 + i * 0.07, duration: 0.45, ease: "easeOut" }}
                    style={{ height: `${h}%`, transformOrigin: "bottom" }}
                    className="flex-1 bg-primary/20 rounded-t-md relative group cursor-default"
                  >
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-t-md" />
                  </motion.div>
                ))}
              </div>

              {/* Status row */}
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                <span className="text-xs font-bold text-green-700">All systems operational — 0 pending denials</span>
              </div>
            </div>
          </div>

          {/* Floating badge — new claim */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-9 -left-9 z-30 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <FileText size={18} />
            </div>
            <div>
              <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">New Claim</div>
              <div className="text-sm font-bold text-secondary">Accepted Instantly</div>
            </div>
          </motion.div>

          {/* Floating badge — HIPAA */}
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-5 -right-5 z-30 bg-secondary p-4 rounded-2xl shadow-xl flex items-center gap-3 text-white"
          >
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <Shield size={18} className="text-primary" />
            </div>
            <div>
              <div className="text-[9px] text-white/50 font-bold uppercase tracking-widest">Security</div>
              <div className="text-sm font-bold">HIPAA Certified</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
