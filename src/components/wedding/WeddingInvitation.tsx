import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Flower2,
  Heart,
  MapPin,
  Music2,
  Pause,
  Play,
  Send,
  Share2,
  Sparkles,
  VolumeX,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingConfig, type WeddingEvent } from "@/config/wedding";
import { submitRsvp } from "@/lib/rsvp.functions";
import floralPortrait from "@/assets/wedding-floral-portrait.jpg";
import venueImage from "@/assets/venue-illustration.jpg";
import mehndiImage from "@/assets/gallery-mehndi.jpg";
import detailImage from "@/assets/gallery-details.jpg";
import varmalaImage from "@/assets/gallery-varmala.jpg";
import haldiImage from "@/assets/gallery-haldi.jpg";

const galleryImages = [
  { src: mehndiImage, alt: "Intricate bridal mehndi and floral jewellery" },
  { src: detailImage, alt: "Wedding stationery with roses and gold details" },
  { src: varmalaImage, alt: "Ivory and blush varmala garlands" },
  { src: haldiImage, alt: "Haldi celebration with marigolds and brass vessels" },
  { src: venueImage, alt: "Illuminated Indian wedding venue at dusk" },
  { src: floralPortrait, alt: "Ivory wedding stationery with a floral border" },
];

const reveal = { initial: { opacity: 0, y: 26 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } };

function utcStamp(event: WeddingEvent, minutes = 0) {
  const [year = 2026, month = 1, day = 1] = event.date.split("-").map(Number);
  const [hour = 0, minute = 0] = event.startTime.split(":").map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day, hour - 5, minute - 30 + minutes));
  return utc.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function calendarDetails(event: WeddingEvent) {
  const duration = event.id === "varmala" ? 180 : 120;
  return {
    title: `${event.name} — ${weddingConfig.branding.title}`,
    start: utcStamp(event),
    end: utcStamp(event, duration),
    location: `${event.venue}, ${event.address}`,
    details: event.description,
  };
}

export function FloralDecoration({ className = "" }: { className?: string }) {
  return <Flower2 aria-hidden="true" className={`text-gold ${className}`} strokeWidth={1.2} />;
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <motion.header {...reveal} className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <FloralDecoration className="mx-auto mb-4 size-8" />
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.header>
  );
}

export function InvitationOpening({ onOpen }: { onOpen: () => void }) {
  const reduce = useReducedMotion();
  const item = (delay: number) => ({ initial: { opacity: 0, y: reduce ? 0 : 12 }, animate: { opacity: 1, y: 0 }, transition: { delay: reduce ? 0 : delay, duration: 0.8 } });
  return (
    <motion.div className="invitation-cover" exit={{ opacity: 0, scale: reduce ? 1 : 1.025 }} transition={{ duration: 0.8 }}>
      <motion.img src={floralPortrait} alt="" aria-hidden="true" className="cover-art" initial={{ opacity: 0, scale: reduce ? 1 : 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduce ? 0 : 1.8 }} />
      <div className="cover-content">
        <motion.p {...item(0.35)} className="eyebrow">Together with their families</motion.p>
        <motion.p {...item(0.7)} className="cover-invite">Invite you to celebrate the wedding of</motion.p>
        <motion.h1 {...item(1.05)} className="cover-name">KAJAL KEDIA</motion.h1>
        <motion.span {...item(1.4)} className="cover-ampersand">&</motion.span>
        <motion.h2 {...item(1.7)} className="cover-name">SAURABH GUPTA</motion.h2>
        <motion.div {...item(2.05)} className="cover-mark"><span />{weddingConfig.branding.title.toUpperCase()}<span /></motion.div>
        <motion.p {...item(2.3)} className="cover-date">13–14 DECEMBER 2026 · DARBHANGA</motion.p>
        <motion.div {...item(2.6)}>
          <Button variant="wedding" size="lg" onClick={onOpen}>Open Invitation <Heart /></Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="welcome" className="hero-section">
      <img src={floralPortrait} alt="" aria-hidden="true" className="hero-art" width={1280} height={1600} />
      <motion.div {...reveal} className="hero-content">
        <p className="eyebrow">The beginning of forever</p>
        <p className="hero-monogram">K <span>&</span> S</p>
        <h1>{weddingConfig.branding.title}</h1>
        <p className="hero-copy">Together with their families<br />request the pleasure of your company</p>
        <div className="ornament"><span /> <Flower2 /> <span /></div>
        <p className="hero-date">13–14 DECEMBER 2026</p>
        <p className="eyebrow">Darbhanga</p>
      </motion.div>
      <a className="scroll-cue" href="#countdown" aria-label="Scroll to countdown"><ChevronDown /></a>
    </section>
  );
}

export function CountdownTimer() {
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false });
  useEffect(() => {
    const update = () => {
      const diff = new Date("2026-12-14T21:00:00+05:30").getTime() - Date.now();
      if (diff <= 0) return setRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
      setRemaining({ days: Math.floor(diff / 86400000), hours: Math.floor((diff / 3600000) % 24), minutes: Math.floor((diff / 60000) % 60), seconds: Math.floor((diff / 1000) % 60), expired: false });
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <section id="countdown" className="countdown-section content-section">
      <SectionHeading title="COUNTING DOWN TO FOREVER" />
      {remaining.expired ? <p className="countdown-complete">Today, our forever begins.</p> : (
        <motion.div {...reveal} className="countdown-grid" aria-live="polite">
          {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
            <div key={unit} className="countdown-item"><strong>{String(remaining[unit]).padStart(2, "0")}</strong><span>{unit}</span></div>
          ))}
        </motion.div>
      )}
      <p className="countdown-target">Varmala · 14 December 2026 · 9:00 PM IST</p>
    </section>
  );
}

function PortraitPlaceholder({ initial, label }: { initial: string; label: string }) {
  return <div className="portrait-placeholder" role="img" aria-label={`${label} photo placeholder`}><span>{initial}</span><small>Photo coming soon</small></div>;
}

export function CoupleSection() {
  return (
    <section className="content-section couple-section">
      <SectionHeading title="THE COUPLE" />
      <div className="couple-grid">
        {[weddingConfig.bride, weddingConfig.groom].map((person, index) => (
          <motion.article {...reveal} key={person.name} className="person">
            <div className="portrait-frame"><PortraitPlaceholder initial={person.shortName.charAt(0)} label={person.name} /></div>
            <p className="eyebrow">{index === 0 ? "The Bride" : "The Groom"}</p>
            <h3>{person.name}</h3>
            <p>{person.bio}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function LoveStory() {
  return (
    <section className="content-section story-section">
      <SectionHeading title="OUR STORY" subtitle="Two hearts, one beautiful journey." />
      <div className="story-line">
        {weddingConfig.story.map((item, index) => (
          <motion.div {...reveal} key={item} className="story-item"><span>{String(index + 1).padStart(2, "0")}</span><Heart aria-hidden="true" /><h3>{item}</h3><p>{index === 3 ? "The day we begin our forever, surrounded by everyone we love." : "A cherished chapter in a story written with love, laughter, and grace."}</p></motion.div>
        ))}
      </div>
    </section>
  );
}

export function CalendarButton({ event, compact = false }: { event: WeddingEvent; compact?: boolean }) {
  const data = calendarDetails(event);
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(data.title)}&dates=${data.start}/${data.end}&details=${encodeURIComponent(data.details)}&location=${encodeURIComponent(data.location)}`;
  const downloadIcs = () => {
    const escape = (value: string) => value.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");
    const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Kajal Weds Saurabh//Wedding 2026//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT", `UID:${event.id}-2026@kajalwedssaurabh`, `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`, `DTSTART:${data.start}`, `DTEND:${data.end}`, `SUMMARY:${escape(data.title)}`, `DESCRIPTION:${escape(data.details)}`, `LOCATION:${escape(data.location)}`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = `${event.id}-kajal-saurabh.ics`; link.click(); URL.revokeObjectURL(url);
  };
  return (
    <div className={`calendar-actions ${compact ? "compact" : ""}`}>
      <Button variant="outline" size="sm" asChild><a href={googleUrl} target="_blank" rel="noreferrer"><CalendarDays /> Google</a></Button>
      <Button variant="ghost" size="icon" onClick={downloadIcs} aria-label={`Download ${event.name} calendar file`} title="Download calendar file"><Download /></Button>
    </div>
  );
}

export function EventCard({ event, featured }: { event: WeddingEvent; featured?: boolean }) {
  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${event.venue}, ${event.address}`)}`;
  return (
    <motion.article {...reveal} className={`event-card ${featured ? "featured" : ""}`}>
      {featured && <p className="event-featured"><Sparkles /> Main celebration</p>}
      <p className="event-number">{String(weddingConfig.events.findIndex((item) => item.id === event.id) + 1).padStart(2, "0")}</p>
      <h3>{event.name}</h3>
      <p className="event-date">{event.displayDate}<br /><strong>{event.time}</strong></p>
      <div className="event-divider" />
      <p className="event-venue"><MapPin /> <span><strong>{event.venue}</strong><small>{event.address}</small></span></p>
      <p className="event-description">{event.description}</p>
      <div className="event-actions"><CalendarButton event={event} /><Button variant="link" size="sm" asChild><a href={mapUrl} target="_blank" rel="noreferrer"><MapPin /> Directions</a></Button></div>
    </motion.article>
  );
}

export function EventsSection() {
  return <section className="content-section events-section"><SectionHeading title="THE WEDDING CELEBRATIONS" subtitle="Join us in celebrating love, laughter, and togetherness." /><div className="events-grid">{weddingConfig.events.map((event) => <EventCard key={event.id} event={event} featured={event.id === "varmala"} />)}</div></section>;
}

export function Lightbox({ index, onClose, onChange }: { index: number; onClose: () => void; onChange: (index: number) => void }) {
  const startX = useRef(0);
  const image = galleryImages[index];
  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange((index + 1) % galleryImages.length);
      if (event.key === "ArrowLeft") onChange((index - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", keydown); document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", keydown); document.body.style.overflow = ""; };
  }, [index, onChange, onClose]);
  if (!image) return null;
  return (
    <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Wedding gallery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onTouchStart={(event) => { const touch = event.touches.item(0); if (touch) startX.current = touch.clientX; }} onTouchEnd={(event) => { const touch = event.changedTouches.item(0); if (!touch) return; const delta = touch.clientX - startX.current; if (Math.abs(delta) > 50) onChange(delta < 0 ? (index + 1) % galleryImages.length : (index - 1 + galleryImages.length) % galleryImages.length); }}>
      <Button variant="glass" size="icon" className="lightbox-close" onClick={onClose} aria-label="Close gallery"><X /></Button>
      <Button variant="glass" size="icon" className="lightbox-prev" onClick={() => onChange((index - 1 + galleryImages.length) % galleryImages.length)} aria-label="Previous photo"><ChevronLeft /></Button>
      <motion.img key={image.src} src={image.src} alt={image.alt} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} />
      <Button variant="glass" size="icon" className="lightbox-next" onClick={() => onChange((index + 1) % galleryImages.length)} aria-label="Next photo"><ChevronRight /></Button>
      <p>{index + 1} / {galleryImages.length}</p>
    </motion.div>
  );
}

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <section className="content-section gallery-section">
      <SectionHeading title="MEMORIES OF US" subtitle="Some moments deserve to be remembered forever." />
      <div className="gallery-grid">{galleryImages.map((image, index) => <motion.button {...reveal} key={image.src} className="gallery-tile" onClick={() => setSelected(index)} aria-label={`Open photo ${index + 1}: ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy" width={index === 4 ? 1600 : index === 5 ? 1280 : 1000} height={index === 4 ? 1008 : index === 5 ? 1600 : 1250} /></motion.button>)}</div>
      <AnimatePresence>{selected !== null && <Lightbox index={selected} onClose={() => setSelected(null)} onChange={setSelected} />}</AnimatePresence>
    </section>
  );
}

export function VenueSection() {
  const main = weddingConfig.events[4];
  if (!main) return null;
  const hotelMap = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${weddingConfig.venues.hotel.name}, ${weddingConfig.venues.hotel.address}`)}`;
  return (
    <section className="venue-section">
      <div className="venue-image"><img src={venueImage} alt="Illustration of an illuminated Indian wedding venue" loading="lazy" width={1600} height={1008} /></div>
      <motion.div {...reveal} className="venue-content"><p className="eyebrow">The venue</p><FloralDecoration className="size-8" /><h2>{weddingConfig.venues.hotel.name}</h2><p><MapPin /> {weddingConfig.venues.hotel.address}</p><p className="venue-note">Located in the heart of Darbhanga. We recommend allowing extra travel time on the wedding evening.</p><div className="venue-actions"><Button variant="wedding" asChild><a href={hotelMap} target="_blank" rel="noreferrer"><MapPin /> Get Directions</a></Button><CalendarButton event={main} compact /></div><div className="home-note"><strong>Mehndi at Home</strong><span>Hasan Chowk, Lal Bagh, Darbhanga</span></div></motion.div>
    </section>
  );
}

export function RSVPForm() {
  const submit = useServerFn(submitRsvp);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setStatus("loading"); setError("");
    const form = new FormData(event.currentTarget);
    const guestName = String(form.get("guestName") ?? "").trim();
    const contact = String(form.get("contact") ?? "").trim();
    const guestCount = Number(form.get("guestCount"));
    const attendance = String(form.get("attendance"));
    const message = String(form.get("message") ?? "").trim();
    if (!guestName || contact.length < 3 || guestCount < 1 || guestCount > 20 || !["attending", "not-attending"].includes(attendance)) { setError("Please complete all required fields."); setStatus("error"); return; }
    try { await submit({ data: { guestName, contact, guestCount, attendance: attendance as "attending" | "not-attending", message } }); setStatus("success"); event.currentTarget.reset(); }
    catch { setError("We couldn't save your response. Please try again."); setStatus("error"); }
  };
  return (
    <section className="content-section rsvp-section"><SectionHeading title="YOUR PRESENCE MEANS THE WORLD TO US" /><motion.form {...reveal} onSubmit={handleSubmit} className="rsvp-form"><label>Guest name <input name="guestName" required maxLength={100} autoComplete="name" /></label><label>Phone or email <input name="contact" required minLength={3} maxLength={255} autoComplete="email" /></label><label>Number of guests <input name="guestCount" type="number" required min={1} max={20} defaultValue={1} /></label><fieldset><legend>Will you be joining us?</legend><label><input type="radio" name="attendance" value="attending" required /> Joyfully attending</label><label><input type="radio" name="attendance" value="not-attending" required /> Regretfully unable</label></fieldset><label>Your message <textarea name="message" maxLength={1000} rows={4} /></label><Button variant="wedding" size="lg" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending…" : "Send RSVP"}<Send /></Button><div className="form-status" aria-live="polite">{status === "success" && <p className="success">Thank you — your response has been received with love.</p>}{status === "error" && <p className="error">{error}</p>}</div></motion.form></section>
  );
}

export function WhatsAppShare() {
  const share = () => { const url = window.location.href; window.open(`https://wa.me/?text=${encodeURIComponent(`${weddingConfig.sharing.message}\n\n${url}`)}`, "_blank", "noopener,noreferrer"); };
  return <Button variant="wedding" size="lg" onClick={share}><Share2 /> Share Invitation</Button>;
}

export function MusicPlayer({ shouldPlay }: { shouldPlay: boolean }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);
  useEffect(() => { if (shouldPlay && audio.current && available) audio.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); }, [shouldPlay, available]);
  const toggle = () => { if (!audio.current || !available) return; if (playing) { audio.current.pause(); setPlaying(false); } else audio.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); };
  if (!weddingConfig.music.enabled) return null;
  return <div className="music-player"><audio ref={audio} src={weddingConfig.music.src} loop preload="none" onError={() => { setAvailable(false); setPlaying(false); }} /><Button variant="floating" size="icon" onClick={toggle} aria-label={available ? (playing ? "Pause music" : "Play music") : "Music unavailable"} aria-pressed={playing} disabled={!available}>{!available ? <VolumeX /> : playing ? <Pause /> : <Play />}</Button><span>{available ? (playing ? "Music playing" : "Play music") : "Music unavailable"}</span></div>;
}

export function ClosingSection() {
  return <section className="closing-section"><img src={floralPortrait} alt="" aria-hidden="true" loading="lazy" width={1280} height={1600} /><motion.div {...reveal}><Heart className="mx-auto size-7 text-rose" fill="currentColor" /><p>Your presence is the greatest gift.</p><p>We look forward to celebrating with you.</p><h2>{weddingConfig.branding.title}</h2><p className="closing-date">13–14 DECEMBER 2026</p><p className="with-love">With love,<br /><strong>THE FAMILIES</strong></p><WhatsAppShare /></motion.div></section>;
}

export default function WeddingInvitation() {
  const [opened, setOpened] = useState(false);
  const open = () => { setOpened(true); window.setTimeout(() => document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" }), 700); };
  return <><AnimatePresence>{!opened && <InvitationOpening onOpen={open} />}</AnimatePresence><main aria-hidden={!opened} className={opened ? "invitation-main is-open" : "invitation-main"}><HeroSection /><CountdownTimer /><CoupleSection /><LoveStory /><EventsSection /><Gallery /><VenueSection /><RSVPForm /><ClosingSection /></main><MusicPlayer shouldPlay={opened} /></>;
}
