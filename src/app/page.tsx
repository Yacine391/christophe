"use client";

import { useState } from "react";
import type { Lang } from "@/lib/translations";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Fleet from "@/components/sections/Fleet";
import QuoteForm from "@/components/sections/QuoteForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const [showForm, setShowForm] = useState(false);

  return (
    <main>
      <Navbar lang={lang} onLangChange={setLang} onQuoteClick={() => setShowForm(true)} />
      <Hero lang={lang} onQuoteClick={() => setShowForm(true)} />
      <Services lang={lang} />
      <Fleet lang={lang} onQuoteClick={() => setShowForm(true)} />
      <Footer lang={lang} />
      {showForm && <QuoteForm lang={lang} onClose={() => setShowForm(false)} />}
    </main>
  );
}
