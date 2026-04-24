"use client";

import { translations, type Lang } from "@/lib/translations";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  return (
    <footer id="contact" className="bg-[#030303] border-t border-yellow-500/10 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="text-yellow-400">
                <path d="M14 2L24 8V20L14 26L4 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M9 14L13 18L19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-bold text-base tracking-widest text-white">
                CYBER<span className="text-yellow-400">DRIVE</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{t.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0749892465"
                  className="flex items-center gap-2 text-gray-500 hover:text-yellow-400 transition-colors text-sm cursor-pointer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.52 10 19.79 19.79 0 01.14 1.36a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 6.93a16 16 0 006.08 6.08l1.02-1.02a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {t.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33749892465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-[#25D366] transition-colors text-sm cursor-pointer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Business
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Services</h4>
            <ul className="space-y-2">
              {["e-Power", "Transport Business", "Longue Distance", "Évènements"].map((s) => (
                <li key={s} className="text-gray-600 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-yellow-500/50 rounded-full" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-yellow-500/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-xs">
            © 2025 CyberDrive — {t.rights}
          </p>
          <button className="text-gray-700 hover:text-gray-500 text-xs cursor-pointer transition-colors">
            {t.legal}
          </button>
        </div>
      </div>
    </footer>
  );
}
