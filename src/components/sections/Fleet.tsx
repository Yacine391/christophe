"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { translations, type Lang } from "@/lib/translations";

interface FleetProps {
  lang: Lang;
  onQuoteClick: () => void;
}

export default function Fleet({ lang, onQuoteClick }: FleetProps) {
  const t = translations[lang].fleet;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="fleet" className="relative bg-[#030303] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-yellow-500 text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
              — {t.title} —
            </span>
            <h2
              className="text-5xl md:text-6xl font-black mb-6 leading-tight"
              style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #999 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.subtitle}
            </h2>

            <div className="space-y-4 mt-10">
              {t.specs.map((spec, i) => (
                <motion.div
                  key={spec}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-px bg-yellow-500" />
                  <span className="text-gray-300 font-medium">{spec}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              onClick={onQuoteClick}
              className="mt-12 group flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded text-sm tracking-widest transition-all cursor-pointer"
            >
              <span>Réserver maintenant</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right: CSS car visual — no second Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[420px] rounded-2xl overflow-hidden border border-yellow-500/10"
            style={{ background: "radial-gradient(ellipse at 60% 50%, #1a1200 0%, #030303 70%)" }}
          >
            {/* Neon underglow reflection */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(202,138,4,0.25) 0%, transparent 70%)" }}
            />

            {/* Car silhouette SVG — Mercedes S-Class side profile */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 520 200"
                className="w-full max-w-[480px] drop-shadow-[0_0_24px_rgba(202,138,4,0.5)]"
                fill="none"
              >
                {/* Body */}
                <path
                  d="M60 130 L60 100 Q70 68 120 58 L180 50 Q220 40 260 38 Q300 36 340 42 L390 52 Q430 62 450 80 L460 100 L460 130 Z"
                  fill="#111111" stroke="#CA8A04" strokeWidth="1.5"
                />
                {/* Roof */}
                <path
                  d="M150 58 Q180 28 220 22 L300 20 Q340 20 370 30 L395 52"
                  fill="none" stroke="#888" strokeWidth="1.2"
                />
                {/* Windshield */}
                <path
                  d="M155 57 Q178 30 215 24 L215 57 Z"
                  fill="#001122" stroke="#444" strokeWidth="0.8"
                />
                {/* Rear window */}
                <path
                  d="M370 30 L392 52 L345 52 L345 28 Z"
                  fill="#001122" stroke="#444" strokeWidth="0.8"
                />
                {/* Side windows */}
                <path
                  d="M218 24 L342 24 L342 54 L218 54 Z"
                  fill="#001122" stroke="#444" strokeWidth="0.8" rx="2"
                />
                {/* Door line */}
                <line x1="278" y1="54" x2="278" y2="128" stroke="#333" strokeWidth="0.8" />
                {/* Chrome belt */}
                <line x1="63" y1="90" x2="455" y2="90" stroke="#888" strokeWidth="1" />
                {/* Grille */}
                <rect x="455" y="92" width="8" height="28" rx="1" fill="#222" stroke="#CA8A04" strokeWidth="0.8" />
                {/* Headlight */}
                <rect x="452" y="88" width="12" height="10" rx="2" fill="#E8F4FF" opacity="0.9" />
                <rect x="452" y="100" width="12" height="3" rx="1" fill="#FFD700" opacity="0.8" />
                {/* Taillight */}
                <rect x="56" y="92" width="10" height="18" rx="2" fill="#FF1010" opacity="0.9" />
                {/* Neon underglow line */}
                <line x1="70" y1="131" x2="450" y2="131" stroke="#FFD700" strokeWidth="2.5" opacity="0.9"
                  style={{ filter: "drop-shadow(0 0 6px #FFD700)" }}
                />
                {/* Front wheel */}
                <circle cx="370" cy="147" r="28" fill="#111" stroke="#555" strokeWidth="2" />
                <circle cx="370" cy="147" r="18" fill="#222" stroke="#888" strokeWidth="1.5" />
                <circle cx="370" cy="147" r="8" fill="#444" stroke="#AAA" strokeWidth="1" />
                {/* Front wheel neon */}
                <circle cx="370" cy="147" r="28" fill="none" stroke="#FFD700" strokeWidth="1"
                  strokeDasharray="4 4" opacity="0.6"
                  style={{ filter: "drop-shadow(0 0 4px #FFD700)" }}
                />
                {/* Rear wheel */}
                <circle cx="148" cy="147" r="28" fill="#111" stroke="#555" strokeWidth="2" />
                <circle cx="148" cy="147" r="18" fill="#222" stroke="#888" strokeWidth="1.5" />
                <circle cx="148" cy="147" r="8" fill="#444" stroke="#AAA" strokeWidth="1" />
                {/* Rear wheel neon */}
                <circle cx="148" cy="147" r="28" fill="none" stroke="#FFD700" strokeWidth="1"
                  strokeDasharray="4 4" opacity="0.6"
                  style={{ filter: "drop-shadow(0 0 4px #FFD700)" }}
                />
                {/* Ground reflection */}
                <ellipse cx="260" cy="178" rx="200" ry="8" fill="#CA8A04" opacity="0.08" />
              </svg>
            </div>

            {/* Animated scan line */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-yellow-400/20 pointer-events-none"
              animate={{ top: ["20%", "85%", "20%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Labels */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
              <div>
                <div className="text-yellow-400 text-xs tracking-widest uppercase font-semibold">Mercedes</div>
                <div className="text-white font-black text-2xl tracking-wider">Classe S</div>
              </div>
              <div className="text-right">
                <div className="text-gray-500 text-xs tracking-wide">e-Power</div>
                <div className="text-yellow-400 text-xs font-medium">100% Électrique</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
