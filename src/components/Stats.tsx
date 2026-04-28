import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { label: "Claim Acceptance Rate", value: 99.9, suffix: "%", barWidth: 100, color: "from-primary to-red-400" },
  { label: "States Covered",        value: 10,   suffix: "",  barWidth: 40,  color: "from-secondary to-blue-500" },
  { label: "Specialties Served",    value: 75,   suffix: "+", barWidth: 80,  color: "from-accent to-teal-400" },
  { label: "Certified Coders",      value: 10,   suffix: "",  barWidth: 60,  color: "from-primary to-accent" },
];

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span>
      {count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              className="relative group"
            >
              {/* Hover glow */}
              <div className="absolute -inset-4 bg-slate-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Counter number */}
              <div className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tabular-nums`}>
                <Counter value={stat.value} suffix={stat.suffix} active={isInView} />
              </div>

              {/* Label */}
              <div className="text-xs font-bold text-secondary uppercase tracking-widest opacity-50 mb-4">
                {stat.label}
              </div>

              {/* Animated progress bar — scaleX keeps it on the GPU compositor */}
              <div className="h-[3px] w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.15,
                    duration: 1.2,
                    ease: [0.34, 1.12, 0.64, 1],
                  }}
                  style={{ transformOrigin: "0%", width: `${stat.barWidth}%` }}
                  className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
