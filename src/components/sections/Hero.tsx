"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { translations, type Lang } from "@/lib/translations";

const CarScene = dynamic(() => import("@/components/3d/CarScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

interface HeroProps {
  lang: Lang;
  onQuoteClick: () => void;
}

export default function Hero({ lang, onQuoteClick }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-[#050505]"
    >
      {/* 3D Scene — full background */}
      <div className="absolute inset-0 z-0">
        <CarScene />
      </div>

      {/* Gradient overlay bottom */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />

      {/* Left gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050505]/70 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="h-px w-8 bg-yellow-500" />
          <span className="text-yellow-400 text-xs font-semibold tracking-[0.25em] uppercase">
            {t.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-black leading-none mb-4 text-[clamp(3rem,9vw,7rem)]"
          style={{
            fontFamily: "var(--font-orbitron), sans-serif",
            background: "linear-gradient(135deg, #FFD700 0%, #CA8A04 50%, #FFD700 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 30px rgba(202,138,4,0.5))",
          }}
        >
          {t.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-sm md:text-base text-gray-300 tracking-[0.15em] uppercase mb-2 font-medium"
        >
          {t.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-gray-500 text-sm mb-10 tracking-wide"
        >
          {t.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={onQuoteClick}
            className="group relative bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded text-sm tracking-widest transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">{t.cta}</span>
            <div className="absolute inset-0 bg-yellow-300 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </button>

          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-yellow-500/40 hover:border-yellow-500 text-yellow-400 hover:text-yellow-300 font-medium px-8 py-4 rounded text-sm tracking-widest transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            {t.ctaSecondary}
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex gap-10 mt-16"
        >
          {[
            { value: "24/7", label: "Disponible" },
            { value: "100%", label: "Électrique" },
            { value: "5★", label: "Service" },
          ].map((stat) => (
            <div key={stat.value} className="flex flex-col">
              <span className="text-2xl font-black text-yellow-400">{stat.value}</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-yellow-500/60 to-transparent animate-pulse" />
        <span className="text-[10px] text-gray-600 tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>

      {/* Phone number */}
      <motion.a
        href="tel:0749892465"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 right-8 z-20 flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer group"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-yellow-500">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.52 10 19.79 19.79 0 01.14 1.36a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 6.93a16 16 0 006.08 6.08l1.02-1.02a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-sm font-medium tracking-wider">07.49.89.24.65</span>
      </motion.a>
    </section>
  );
}
