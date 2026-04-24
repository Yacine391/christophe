"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { translations, type Lang } from "@/lib/translations";

interface NavbarProps {
  lang: Lang;
  onLangChange: (l: Lang) => void;
  onQuoteClick: () => void;
}

export default function Navbar({ lang, onLangChange, onQuoteClick }: NavbarProps) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-yellow-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-yellow-400">
            <path
              d="M14 2L24 8V20L14 26L4 20V8L14 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M9 14L13 18L19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-bold text-base text-white group-hover:text-yellow-400 transition-colors" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
            CYBER<span className="text-yellow-400">DRIVE</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: t.services, id: "services" },
            { label: t.fleet, id: "fleet" },
            { label: t.contact, id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <button
            onClick={() => onLangChange(lang === "fr" ? "en" : "fr")}
            className="text-xs font-medium text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer tracking-widest border border-gray-700 hover:border-yellow-500/50 rounded px-2 py-1"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          {/* CTA */}
          <button
            onClick={onQuoteClick}
            className="hidden md:block bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded transition-all duration-200 cursor-pointer tracking-wide"
          >
            {t.quote}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer p-1 text-gray-300 hover:text-yellow-400"
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open ? (
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-yellow-500/20 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {[
                { label: t.services, id: "services" },
                { label: t.fleet, id: "fleet" },
                { label: t.contact, id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer py-1"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => { setOpen(false); onQuoteClick(); }}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded mt-2 cursor-pointer"
              >
                {t.quote}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
