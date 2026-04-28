import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Specialties from "./components/Specialties";
import Features from "./components/Features";
import Comparison from "./components/Comparison";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import EnrollmentModal from "./components/EnrollmentModal";
import WhatsAppButton from "./components/WhatsAppButton";
import { motion, useScroll, useSpring, useMotionValueEvent, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";


function Reveal({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowBackToTop(v > 0.08);
  });

  // Lock body scroll when a modal is open
  React.useEffect(() => {
    const isOpen = showPrivacy || showEnrollment;
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [showPrivacy, showEnrollment]);

  return (
    <div className="relative">
      {/* ── Scroll progress bar ── */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
      />

      <TopBar />
      <Navbar />

      <main className="overflow-x-hidden">
        <div id="home">
          <Hero />
        </div>

        <Reveal>
          <Stats />
        </Reveal>

        <Reveal id="why-us">
          <Benefits />
        </Reveal>

        <Reveal id="services">
          <Services />
        </Reveal>

        <Reveal>
          <Timeline />
        </Reveal>

        <Reveal id="specialties">
          <Specialties />
        </Reveal>

        <Reveal>
          <Features />
        </Reveal>

        <Reveal>
          <Comparison />
        </Reveal>

        {/* ── CTA Banner ── */}
        <Reveal>
          <section className="py-24 relative overflow-hidden animated-gradient-bg">
            {/* Noise grain overlay */}
            <div
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
              }}
            />
            {/* Radial accent glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10 pointer-events-none" />
            {/* Decorative ring */}
            <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/[0.03] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white/70 border border-white/10 mb-6">
                  Free Consultation Available
                </span>
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Optimize Your <br />
                  <span className="text-primary">Revenue Cycle?</span>
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                  Schedule a free consultation with Apexora's experts and discover how we can accelerate your cash flow from day one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="bg-primary text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-primary/30 hover:bg-red-700 transition-all hover:scale-105 active:scale-100"
                  >
                    Schedule Now — It's Free
                  </a>
                  <a
                    href="tel:+923122277448"
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all"
                  >
                    Call +92 312 2277448
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </Reveal>

        <Reveal id="about">
          <About />
        </Reveal>

        <Reveal id="training">
          <Training onEnroll={() => setShowEnrollment(true)} />
        </Reveal>

        <Reveal id="faq">
          <FAQ />
        </Reveal>

        <Reveal id="contact">
          <Contact />
        </Reveal>
      </main>

      <Reveal>
        <Footer onShowPrivacy={() => setShowPrivacy(true)} />
      </Reveal>

      <WhatsAppButton />

      <PrivacyPolicy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <EnrollmentModal isOpen={showEnrollment} onClose={() => setShowEnrollment(false)} />

      {/* ── Back to Top ── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 lg:bottom-8 right-6 w-11 h-11 bg-secondary text-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:scale-110 transition-all z-50"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Sticky Mobile CTA ── */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full p-3 bg-white/90 backdrop-blur-lg border-t border-slate-100 z-50 flex gap-3">
        <a
          href="#contact"
          className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-center shadow-lg shadow-primary/20 text-sm"
        >
          Free Consultation
        </a>
        <a
          href="tel:+923122277448"
          className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center shrink-0"
          aria-label="Call us"
        >
          <Phone size={20} />
        </a>
      </div>
    </div>
  );
}
