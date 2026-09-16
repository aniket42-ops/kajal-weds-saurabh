import kajalPhoto from "@/assets/kajal-kedia.jpeg.asset.json";
import saurabhPhoto from "@/assets/saurabh-gupta.jpeg.asset.json";

export type WeddingEvent = {
  id: string;
  name: string;
  date: string;
  displayDate: string;
  time: string;
  startTime: string;
  venue: string;
  address: string;
  description: string;
};

export const weddingConfig = {
  bride: {
    name: "Kajal Kedia",
    shortName: "Kajal",
    image: kajalPhoto.url,
    bio: "With the love and blessings of her family, Kajal begins a beautiful new chapter.",
  },
  groom: {
    name: "Saurabh Gupta",
    shortName: "Saurabh",
    image: saurabhPhoto.url,
    bio: "Saurabh joins Kajal in celebrating a lifetime of love, laughter, and togetherness.",
  },
  branding: {
    title: "Kajal Weds Saurabh",
    perspective: "bride-side",
  },
  wedding: {
    year: 2026,
    timezone: "Asia/Kolkata",
    city: "Darbhanga, Bihar",
    mainDate: "2026-12-14",
    mainTime: "21:00",
  },
  venues: {
    home: { name: "Home", address: "Hasan Chowk, Lal Bagh, Darbhanga" },
    hotel: {
      name: "Mayna Hotel And Banquet",
      address: "Opposite Poonam Cinema Road, Darbhanga",
    },
  },
  events: [
    {
      id: "mehndi",
      name: "Mehndi",
      date: "2026-12-13",
      displayDate: "13 December 2026",
      time: "2:00 PM onwards",
      startTime: "14:00",
      venue: "Home",
      address: "Hasan Chowk, Lal Bagh, Darbhanga",
      description: "An afternoon filled with mehndi, laughter, music, and beautiful memories.",
    },
    {
      id: "haldi",
      name: "Haldi",
      date: "2026-12-14",
      displayDate: "14 December 2026",
      time: "8:00 AM",
      startTime: "08:00",
      venue: "Mayna Hotel And Banquet",
      address: "Opposite Poonam Cinema Road, Darbhanga",
      description: "Let the celebrations begin with the vibrant colors of Haldi.",
    },
    {
      id: "bhaat",
      name: "Bhaat",
      date: "2026-12-14",
      displayDate: "14 December 2026",
      time: "10:00 AM",
      startTime: "10:00",
      venue: "Mayna Hotel And Banquet",
      address: "Opposite Poonam Cinema Road, Darbhanga",
      description: "A beautiful family celebration filled with love, blessings, and togetherness.",
    },
    {
      id: "tilak",
      name: "Tilak",
      date: "2026-12-14",
      displayDate: "14 December 2026",
      time: "2:00 PM",
      startTime: "14:00",
      venue: "Mayna Hotel And Banquet",
      address: "Opposite Poonam Cinema Road, Darbhanga",
      description: "An auspicious celebration of blessings, traditions, and family.",
    },
    {
      id: "varmala",
      name: "Varmala",
      date: "2026-12-14",
      displayDate: "14 December 2026",
      time: "9:00 PM",
      startTime: "21:00",
      venue: "Mayna Hotel And Banquet",
      address: "Opposite Poonam Cinema Road, Darbhanga",
      description: "Join us as Kajal and Saurabh begin their forever together.",
    },
  ] satisfies WeddingEvent[],
  story: ["The First Meeting", "The First Conversation", "The Beginning of Forever", "The Wedding Day"],
  music: { enabled: true, src: "/audio/wedding-song.mp3" },
  sharing: {
    message:
      "You're invited to celebrate the wedding of Kajal Kedia & Saurabh Gupta 💍\n\nJoin us on 13–14 December 2026 in Darbhanga.\n\nWe can't wait to celebrate with you!",
  },
} as const;
