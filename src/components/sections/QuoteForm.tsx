"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { translations, type Lang } from "@/lib/translations";
import { formatWhatsAppMessage, formatEmailBody } from "@/lib/utils";

interface QuoteFormProps {
  lang: Lang;
  onClose: () => void;
}

type FormData = {
  firstname: string;
  lastname: string;
  phone: string;
  date: string;
  time: string;
  from: string;
  to: string;
  passengers: string;
  luggage: string;
};

const INITIAL: FormData = {
  firstname: "", lastname: "", phone: "", date: "",
  time: "", from: "", to: "", passengers: "1", luggage: "0",
};

export default function QuoteForm({ lang, onClose }: QuoteFormProps) {
  const t = translations[lang].form;
  const [form, setForm] = useState<FormData>(INITIAL);
  const [sent, setSent] = useState(false);

  const update = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const sendWhatsApp = () => {
    const msg = formatWhatsAppMessage(form as unknown as Record<string, string>);
    window.open(`https://wa.me/33749892465?text=${msg}`, "_blank");
    setSent(true);
  };

  const sendEmail = () => {
    const subject = encodeURIComponent("Demande de devis CyberDrive");
    const body = formatEmailBody(form as unknown as Record<string, string>);
    window.open(`mailto:contact@cyberdrive.fr?subject=${subject}&body=${body}`);
    setSent(true);
  };

  const inputClass =
    "w-full bg-[#0E0E0E] border border-gray-800 focus:border-yellow-500 text-white placeholder-gray-600 rounded px-4 py-3 text-sm outline-none transition-colors duration-200";

  const labelClass = "block text-xs text-gray-500 uppercase tracking-widest mb-1.5 font-medium";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative w-full max-w-2xl bg-[#080808] border border-yellow-500/20 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Top bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 bg-[#080808] border-b border-yellow-500/10">
            <div>
              <h2 className="text-white font-black text-xl tracking-wide">{t.title}</h2>
              <p className="text-gray-500 text-xs mt-0.5">{t.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-yellow-400 transition-colors cursor-pointer p-1"
              aria-label="Fermer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Gold top accent line */}
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20 px-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-white font-bold text-lg mb-2">{t.success}</p>
              <p className="text-gray-500 text-sm">07.49.89.24.65</p>
              <button
                onClick={onClose}
                className="mt-8 text-yellow-400 hover:text-yellow-300 text-sm cursor-pointer underline underline-offset-4"
              >
                Fermer
              </button>
            </motion.div>
          ) : (
            <div className="px-8 py-8 space-y-6">
              {/* Row 1: Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>{t.fields.firstname}</label>
                  <input className={inputClass} type="text" placeholder="Jean" value={form.firstname} onChange={update("firstname")} />
                </div>
                <div>
                  <label className={labelClass}>{t.fields.lastname}</label>
                  <input className={inputClass} type="text" placeholder="Dupont" value={form.lastname} onChange={update("lastname")} />
                </div>
              </div>

              {/* Row 2: Phone */}
              <div>
                <label className={labelClass}>{t.fields.phone}</label>
                <input className={inputClass} type="tel" placeholder="+33 6 00 00 00 00" value={form.phone} onChange={update("phone")} />
              </div>

              {/* Row 3: Date / Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>{t.fields.date}</label>
                  <input className={inputClass} type="date" value={form.date} onChange={update("date")} />
                </div>
                <div>
                  <label className={labelClass}>{t.fields.time}</label>
                  <input className={inputClass} type="time" value={form.time} onChange={update("time")} />
                </div>
              </div>

              {/* Row 4: Departure */}
              <div>
                <label className={labelClass}>{t.fields.from}</label>
                <input className={inputClass} type="text" placeholder="15 Rue de la Paix, Paris" value={form.from} onChange={update("from")} />
              </div>

              {/* Row 5: Arrival */}
              <div>
                <label className={labelClass}>{t.fields.to}</label>
                <input className={inputClass} type="text" placeholder="Aéroport Charles de Gaulle" value={form.to} onChange={update("to")} />
              </div>

              {/* Row 6: Passengers / Luggage */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>{t.fields.passengers}</label>
                  <select className={inputClass} value={form.passengers} onChange={update("passengers")}>
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{t.fields.luggage}</label>
                  <select className={inputClass} value={form.luggage} onChange={update("luggage")}>
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {/* WhatsApp */}
                <button
                  onClick={sendWhatsApp}
                  className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DAA57] text-white font-bold py-4 rounded text-sm tracking-wide transition-colors cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.whatsapp}
                </button>

                {/* Email */}
                <button
                  onClick={sendEmail}
                  className="flex-1 flex items-center justify-center gap-3 border border-yellow-500/40 hover:border-yellow-500 text-yellow-400 hover:text-yellow-300 font-bold py-4 rounded text-sm tracking-wide transition-all cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" />
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  {t.email}
                </button>
              </div>

              <p className="text-center text-gray-600 text-xs pt-2">
                Tel: 07.49.89.24.65 — Réponse garantie sous 30 min
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
