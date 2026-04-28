import React, { useRef } from "react";

// Cached event coordinates for the RAF callback
let _pendingX = 0;
let _pendingY = 0;
import { motion } from "motion/react";
import {
  ShieldCheck,
  BarChart,
  UserCheck,
  AlertTriangle,
  Layers,
  Map,
  Eye,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    title: "HIPAA-Compliant Security",
    description: "Enterprise-grade encryption and security protocols to protect sensitive patient data.",
    icon: <ShieldCheck size={24} />,
    className: "lg:col-span-2 lg:row-span-1 bg-secondary text-white",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    title: "Real-Time Analytics",
    description: "Live dashboards tracking your revenue performance at every step.",
    icon: <BarChart size={24} />,
    className: "lg:col-span-1 lg:row-span-1 bg-white",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    title: "Dedicated Account Management",
    description: "Your own personal expert available 24/7 for any billing needs.",
    icon: <UserCheck size={24} />,
    className: "lg:col-span-1 lg:row-span-2 bg-red-50",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Denial Prevention",
    description: "Proactive workflows to catch errors before submission.",
    icon: <AlertTriangle size={24} />,
    className: "lg:col-span-1 lg:row-span-1 bg-white",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Multi-Specialty Expertise",
    description: "Certified coders for over 75 medical specialties nationwide.",
    icon: <Layers size={24} />,
    className: "lg:col-span-2 lg:row-span-1 bg-white",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    title: "Nationwide Support",
    description: "Serving providers across 10+ states with local expertise.",
    icon: <Map size={24} />,
    className: "lg:col-span-1 lg:row-span-1 bg-secondary text-white",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    title: "24/7 Monitoring",
    description: "Continuous claim tracking and real-time status updates.",
    icon: <Eye size={24} />,
    className: "lg:col-span-1 lg:row-span-1 bg-white",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Custom Dashboards",
    description: "Tailored reporting built for your specific practice needs.",
    icon: <LayoutDashboard size={24} />,
    className: "lg:col-span-1 lg:row-span-1 bg-white",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

export default function Features() {
  const gridRef = useRef<HTMLDivElement>(null);
  const rafRef  = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Snapshot coords before the synthetic event is recycled
    _pendingX = e.clientX;
    _pendingY = e.clientY;

    if (rafRef.current !== null) return; // already scheduled — skip
    rafRef.current = requestAnimationFrame(() => {
      const rect = gridRef.current?.getBoundingClientRect();
      if (rect) {
        gridRef.current!.style.setProperty("--mouse-x", `${_pendingX - rect.left}px`);
        gridRef.current!.style.setProperty("--mouse-y", `${_pendingY - rect.top}px`);
      }
      rafRef.current = null;
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    gridRef.current?.style.setProperty("--mouse-x", "-9999px");
    gridRef.current?.style.setProperty("--mouse-y", "-9999px");
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="section-label mb-4">Advanced Features</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Built for Performance &amp; Scale
          </h3>
          <p className="text-slate-500 text-lg">
            Experience the Apexora difference with our cutting-edge billing technology and expert workflows.
          </p>
        </motion.div>

        {/* Spotlight grid */}
        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="feature-spotlight grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[180px]"
          style={{ "--mouse-x": "-9999px", "--mouse-y": "-9999px" } as React.CSSProperties}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative z-10 p-7 rounded-3xl border border-slate-100/80 shadow-sm flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg ${feature.className}`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${feature.iconBg} ${feature.iconColor}`}>
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 leading-tight">{feature.title}</h4>
                <p className={`text-sm leading-relaxed ${feature.className.includes("secondary") ? "text-slate-400" : "text-slate-500"}`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
