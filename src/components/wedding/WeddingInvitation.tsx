import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  DoorOpen,
  Flower2,
  Heart,
  MapPin,
  Music2,
  Pause,
  Play,
  Share2,
  Sparkles,
  VolumeX,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingConfig, type WeddingEvent } from "@/config/wedding";
import doorImage from "@/assets/wedding-door-illustration.jpg.asset.json";
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
  const [knocked, setKnocked] = useState(false);
  const item = (delay: number) => ({ initial: { opacity: 0, y: reduce ? 0 : 12 }, animate: { opacity: 1, y: 0 }, transition: { delay: reduce ? 0 : delay, duration: 0.8 } });
  const handleKnock = () => setKnocked(true);
  return (
    <motion.div className="invitation-cover door-cover" exit={{ opacity: 0, scale: reduce ? 1 : 1.035 }} transition={{ duration: 0.9 }}>
      <motion.img src={doorImage.url} alt="Ornate golden-trimmed wooden Indian wedding doors decorated with ivory and blush flower garlands, lanterns, and fairy lights" className="door-art" initial={{ opacity: 0, scale: reduce ? 1 : 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduce ? 0 : 1.5 }} />
      <div className="door-vignette" aria-hidden="true" />
      <div className="door-scene">
        <div className="door-frame" aria-hidden="true"><span /><span /></div>
        <div className="door-content">
          <motion.p {...item(0.25)} className="door-kicker">A little knock opens a lifetime</motion.p>
          <AnimatePresence mode="wait">
            {!knocked ? (
              <motion.div key="knock" className="knock-prompt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -12 }}>
                <p className="door-invite">You are warmly invited</p>
                <p className="knock-count" aria-live="polite">Knock on the door to enter</p>
                <motion.button type="button" className="door-knock" onClick={handleKnock} aria-label="Knock on the wedding door" {...(!reduce ? { whileTap: { scale: 0.95 } } : {})} transition={{ duration: 0.15 }}>
                  <span className="door-knock-ring" aria-hidden="true" />
                  <span className="door-knock-label">Knock</span>
                </motion.button>
                <p className="door-hint">Tap to reveal the names</p>
              </motion.div>
            ) : (
              <motion.div key="names" className="door-names" initial={{ opacity: 0, y: reduce ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduce ? 0 : 0.8 }}>
                <p className="door-invite">The door is open to love</p>
                <h1 className="door-name">KAJAL KEDIA</h1>
                <span className="door-ampersand">&amp;</span>
                <h2 className="door-name">SAURABH GUPTA</h2>
                <div className="door-mark"><span />{weddingConfig.branding.title.toUpperCase()}<span /></div>
                <p className="door-date">13–14 DECEMBER 2026 · DARBHANGA</p>
                <Button variant="wedding" size="lg" onClick={onOpen}>Open Invitation <DoorOpen /></Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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

export function CoupleSection() {
  return (
    <section className="content-section couple-section">
      <SectionHeading title="THE COUPLE" />
      <div className="couple-grid">
        {[weddingConfig.bride, weddingConfig.groom].map((person, index) => (
          <motion.article {...reveal} key={person.name} className="person">
            <div className="portrait-frame"><img src={person.image} alt={`${person.name}, ${index === 0 ? "the bride" : "the groom"}`} loading="lazy" /></div>
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

export function AutoScrollControl({ active }: { active: boolean }) {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [started, setStarted] = useState(false);
  const frame = useRef<number | null>(null);
  const lastTime = useRef<number | null>(null);

  useEffect(() => {
    if (!active || reduce) return;
    const timer = window.setTimeout(() => setStarted(true), 1600);
    return () => window.clearTimeout(timer);
  }, [active, reduce]);

  useEffect(() => {
    if (!active || reduce || paused || !started) {
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
      frame.current = null;
      lastTime.current = null;
      return;
    }

    const scroll = (time: number) => {
      if (lastTime.current === null) lastTime.current = time;
      const elapsed = Math.min(time - lastTime.current, 80);
      lastTime.current = time;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll - 2) {
        setPaused(true);
        return;
      }
      window.scrollBy(0, (18 * elapsed) / 1000);
      frame.current = window.requestAnimationFrame(scroll);
    };

    frame.current = window.requestAnimationFrame(scroll);
    return () => {
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, [active, paused, reduce, started]);

  if (!active || reduce) return null;
  return <div className="auto-scroll-control"><Button variant="glass" size="sm" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>{paused ? <Play /> : <Pause />}<span>{paused ? "Resume scroll" : "Pause scroll"}</span></Button></div>;
}

export function ClosingSection() {
  return <section className="closing-section"><img src={floralPortrait} alt="" aria-hidden="true" loading="lazy" width={1280} height={1600} /><motion.div {...reveal}><Heart className="mx-auto size-7 text-rose" fill="currentColor" /><p>Your presence is the greatest gift.</p><p>We look forward to celebrating with you.</p><h2>{weddingConfig.branding.title}</h2><p className="closing-date">13–14 DECEMBER 2026</p><p className="with-love">With love,<br /><strong>THE FAMILIES</strong></p><WhatsAppShare /></motion.div></section>;
}

export default function WeddingInvitation() {
  const [opened, setOpened] = useState(false);
  const open = () => { setOpened(true); window.setTimeout(() => document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" }), 700); };
  return <><AnimatePresence>{!opened && <InvitationOpening onOpen={open} />}</AnimatePresence><main aria-hidden={!opened} className={opened ? "invitation-main is-open" : "invitation-main"}><HeroSection /><CountdownTimer /><CoupleSection /><LoveStory /><EventsSection /><Gallery /><VenueSection /><ClosingSection /></main><AutoScrollControl active={opened} /><MusicPlayer shouldPlay={opened} /></>;
}
