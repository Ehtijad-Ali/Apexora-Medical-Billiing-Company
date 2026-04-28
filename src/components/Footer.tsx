import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

interface FooterProps {
  onShowPrivacy: () => void;
}

const services = [
  "Medical Billing & Coding",
  "Accounts Receivable",
  "Credentialing & Contracting",
  "Out of Network Negotiation",
  "Prior & Retro Authorization",
  "Eligibility Verification",
];

const quickLinks = ["Home", "About Us", "Our Team", "Specialties", "Why Choose Us", "FAQ", "Contact"];

export default function Footer({ onShowPrivacy }: FooterProps) {
  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      {/* ── SVG wave top border ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[72px]"
        >
          <path
            d="M0,72 C240,20 480,0 720,28 C960,56 1200,20 1440,0 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Subtle decorative glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-7">
              <div className="bg-white p-2 rounded-xl shadow-sm">
                <img
                  src="https://i.ibb.co/KjqgY0J2/Whats-App-Image-2026-04-05-at-10-26-17-PM.jpg"
                  alt="Apexora Medical Billing Logo"
                  className="h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              At Apexora Medical Billing Company, we deliver customized, reliable, and efficient billing services to healthcare providers nationwide.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook size={16} />, label: "Facebook" },
                { icon: <Instagram size={16} />, label: "Instagram" },
                { icon: <Linkedin size={16} />, label: "LinkedIn" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-slate-400 text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-base mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-400 text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-6">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Phone size={15} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Call Us</div>
                  <a href="tel:+923122277448" className="text-sm font-bold hover:text-primary transition-colors">
                    +92 312 2277448
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Mail size={15} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Email Us</div>
                  <a href="mailto:info@apexoramedicalbilling.com" className="text-sm font-bold hover:text-primary transition-colors break-all">
                    info@apexoramedicalbilling.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <MapPin size={15} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Location</div>
                  <div className="text-sm font-bold">Zulfiqarabad, Gilgit-Baltistan, Pakistan</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="mb-14 rounded-3xl overflow-hidden shadow-2xl border border-white/5 h-[280px] relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403.94466967713043!2d74.35473054145753!3d35.90885527304088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e64908c8d08aed%3A0xb0c9dc655d2ce6a0!2sApexora%20Medical%20Billing%20Company!5e0!3m2!1sen!2s!4v1776117228019!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Apexora Medical Billing Company location"
            className="grayscale invert opacity-60 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 pointer-events-none border-8 border-secondary/20 rounded-3xl" />
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Apexora Medical Billing Company. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs text-slate-500">
            <button
              onClick={onShowPrivacy}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
