import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CyberDrive — Transport VTC Premium | e-Power • Business • Longue Distance",
  description:
    "CyberDrive, votre chauffeur privé premium en Île-de-France. Véhicules électriques de luxe. Transport aéroport, business, évènements. Réservation 24/7. Tél: 07.49.89.24.65",
  keywords: "VTC, chauffeur privé, transport luxe, voiture avec chauffeur, aéroport, Paris, Classe S, électrique",
  openGraph: {
    title: "CyberDrive — Transport VTC Premium",
    description: "Votre chauffeur privé premium disponible 24/7. Flotte électrique Mercedes Classe S.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${orbitron.variable} ${inter.variable}`}
    >
      <body className="bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
