export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      services: "Services",
      fleet: "Flotte",
      about: "À propos",
      contact: "Contact",
      quote: "Devis gratuit",
    },
    hero: {
      badge: "Transport Premium • Île-de-France",
      title: "CYBERDRIVE",
      subtitle: "e-Power · Transport Business · Longue Distance · Évènements",
      cta: "Demander un devis",
      ctaSecondary: "Découvrir",
      tagline: "Votre chauffeur privé, disponible 24h/7j",
    },
    services: {
      title: "Nos Services",
      subtitle: "Une flotte électrique premium pour tous vos déplacements",
      items: [
        {
          title: "e-Power",
          desc: "Véhicules 100% électriques pour des trajets silencieux et écologiques.",
        },
        {
          title: "Transport Business",
          desc: "Transferts aéroport, gare, réunions d'affaires. Ponctualité garantie.",
        },
        {
          title: "Longue Distance",
          desc: "Paris, province, Europe. Confort absolu pour vos longs voyages.",
        },
        {
          title: "Évènements",
          desc: "Mariages, soirées VIP, concerts. Une expérience inoubliable.",
        },
      ],
    },
    fleet: {
      title: "Notre Flotte",
      subtitle: "Mercedes Classe S — Le summum du luxe",
      specs: ["Électrique / Hybride", "Intérieur cuir", "Wifi à bord", "Eau & snacks offerts"],
    },
    form: {
      title: "Demander un Devis",
      subtitle: "Réponse sous 30 minutes via WhatsApp ou email",
      fields: {
        firstname: "Prénom",
        lastname: "Nom",
        phone: "Téléphone",
        date: "Date du trajet",
        time: "Heure de départ",
        from: "Adresse de départ",
        to: "Adresse d'arrivée",
        passengers: "Nombre de passagers",
        luggage: "Nombre de bagages",
      },
      submit: "Envoyer ma demande",
      whatsapp: "Envoyer via WhatsApp",
      email: "Envoyer par email",
      success: "Demande envoyée ! Nous vous répondons sous 30 minutes.",
    },
    footer: {
      tagline: "Transport de luxe nouvelle génération",
      rights: "Tous droits réservés",
      phone: "07.49.89.24.65",
      legal: "Mentions légales",
    },
  },
  en: {
    nav: {
      services: "Services",
      fleet: "Fleet",
      about: "About",
      contact: "Contact",
      quote: "Free Quote",
    },
    hero: {
      badge: "Premium Transport • Île-de-France",
      title: "CYBERDRIVE",
      subtitle: "e-Power · Business Travel · Long Distance · Events",
      cta: "Request a quote",
      ctaSecondary: "Discover",
      tagline: "Your private chauffeur, available 24/7",
    },
    services: {
      title: "Our Services",
      subtitle: "A premium electric fleet for all your journeys",
      items: [
        {
          title: "e-Power",
          desc: "100% electric vehicles for silent, eco-friendly rides.",
        },
        {
          title: "Business Travel",
          desc: "Airport, train station, business meetings. Punctuality guaranteed.",
        },
        {
          title: "Long Distance",
          desc: "Paris, province, Europe. Absolute comfort for long journeys.",
        },
        {
          title: "Events",
          desc: "Weddings, VIP evenings, concerts. An unforgettable experience.",
        },
      ],
    },
    fleet: {
      title: "Our Fleet",
      subtitle: "Mercedes S-Class — The pinnacle of luxury",
      specs: ["Electric / Hybrid", "Leather interior", "On-board WiFi", "Water & snacks included"],
    },
    form: {
      title: "Request a Quote",
      subtitle: "Response within 30 minutes via WhatsApp or email",
      fields: {
        firstname: "First name",
        lastname: "Last name",
        phone: "Phone",
        date: "Trip date",
        time: "Departure time",
        from: "Departure address",
        to: "Arrival address",
        passengers: "Number of passengers",
        luggage: "Number of bags",
      },
      submit: "Send my request",
      whatsapp: "Send via WhatsApp",
      email: "Send by email",
      success: "Request sent! We'll reply within 30 minutes.",
    },
    footer: {
      tagline: "Next-generation luxury transport",
      rights: "All rights reserved",
      phone: "07.49.89.24.65",
      legal: "Legal notice",
    },
  },
} as const;
