"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { translations, type Lang } from "@/lib/translations";

const icons = [
  // e-Power / Lightning bolt
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#FFD700" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Business / Briefcase
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="14" rx="2" stroke="#FFD700" strokeWidth="1.8" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#FFD700" strokeWidth="1.8" />
    <line x1="12" y1="12" x2="12" y2="16" stroke="#FFD700" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="#FFD700" strokeWidth="1.8" />
  </svg>,
  // Long distance / Route
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#FFD700" strokeWidth="1.8" />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#FFD700" strokeWidth="1.8" />
  </svg>,
  // Events / Star
  <svg key="4" width="28" height="28" viewBox="0 0 24 24" fill="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="#FFD700" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

interface ServicesProps {
  lang: Lang;
}

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang].services;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="relative bg-[#050505] py-32 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,215,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-yellow-500 text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
            — {t.title} —
          </span>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-yellow-500/10 rounded-2xl overflow-hidden border border-yellow-500/10">
          {t.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              className="relative group bg-[#080808] p-10 hover:bg-[#0E0E0E] transition-colors duration-300 cursor-default"
            >
              {/* Neon top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              {/* Icon */}
              <div className="mb-6 inline-flex p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors">
                {icons[i]}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl mb-3 tracking-wide group-hover:text-yellow-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                {item.desc}
              </p>

              {/* Number */}
              <span className="absolute bottom-6 right-8 text-6xl font-black text-yellow-500/5 group-hover:text-yellow-500/10 transition-colors select-none">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
