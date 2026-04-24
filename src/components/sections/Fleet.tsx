"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { translations, type Lang } from "@/lib/translations";

const CarScene = dynamic(() => import("@/components/3d/CarScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

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

          {/* Right: 3D car */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[420px] rounded-2xl overflow-hidden border border-yellow-500/10"
            style={{ background: "radial-gradient(ellipse at center, #0A0800 0%, #030303 70%)" }}
          >
            <CarScene />
            {/* Label */}
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
