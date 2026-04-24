import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppMessage(data: Record<string, string>): string {
  return encodeURIComponent(
    `🚗 *Demande de devis CyberDrive*\n\n` +
    `👤 *Nom :* ${data.firstname} ${data.lastname}\n` +
    `📱 *Téléphone :* ${data.phone}\n` +
    `📅 *Date :* ${data.date} à ${data.time}\n` +
    `📍 *Départ :* ${data.from}\n` +
    `🏁 *Arrivée :* ${data.to}\n` +
    `👥 *Passagers :* ${data.passengers}\n` +
    `🧳 *Bagages :* ${data.luggage}`
  );
}

export function formatEmailBody(data: Record<string, string>): string {
  return encodeURIComponent(
    `Demande de devis CyberDrive\n\n` +
    `Nom : ${data.firstname} ${data.lastname}\n` +
    `Téléphone : ${data.phone}\n` +
    `Date : ${data.date} à ${data.time}\n` +
    `Départ : ${data.from}\n` +
    `Arrivée : ${data.to}\n` +
    `Passagers : ${data.passengers}\n` +
    `Bagages : ${data.luggage}`
  );
}
