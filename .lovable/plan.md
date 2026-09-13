# Kajal Weds Saurabh — Wedding Invitation

## Goal
Build a complete, mobile-first digital wedding invitation for Kajal Kedia and Saurabh Gupta, preserving bride-first wording everywhere and using the confirmed 2026 schedule exactly.

## Experience
- Create a cinematic full-screen invitation cover with an ivory paper feel, floral frame, staged name reveal, and an **Open Invitation** transition.
- Continue into a single elegant scrolling invitation with hero, live IST countdown, couple introduction, love-story timeline, celebrations, gallery, venue, RSVP, sharing, and closing sections.
- Use the supplied ivory, blush, sage, olive, gold, and dark-brown palette with Cormorant Garamond headings and a clean sans-serif body font.
- Build reusable floral motifs and tasteful motion, while honoring reduced-motion preferences.

## Content and interactions
- Add one typed wedding configuration as the source for names, branding, dates, venues, events, photos, bios, music, story, and gallery.
- Render the five events in the exact requested order, with reusable event cards.
- Provide Google Calendar links and downloadable `.ics` files with exact Asia/Kolkata times, practical default durations, venue, address, and descriptions.
- Generate Google Maps directions from configured addresses.
- Add an accessible gallery lightbox with previous/next/close controls, keyboard navigation, swipe gestures, lazy loading, and image fallbacks.
- Start looping music only after the invitation is opened; include play/pause and graceful missing-file handling.
- Add WhatsApp sharing using the exact supplied message and the current invitation URL.

## RSVP and Cloud
- Enable Lovable Cloud for persistent RSVPs.
- Create an `rsvps` table with validation and secure insert-only guest access; grant only the permissions required by its policies.
- Connect the RSVP form to the table with required-field validation, loading, success, and error states. No secret keys will be exposed.

## Assets
- No uploaded photos, reference video, or audio are currently available.
- Build polished floral artwork and non-personal visual placeholders that never impersonate the couple; configured bride, groom, gallery, preview image, favicon, and music paths remain easy to replace with real files later.
- Ensure missing photos and audio do not create broken UI or console errors.

## Technical implementation
- Add Motion for React and use it for the invitation reveal and scroll animations.
- Split the page into the requested focused components, while keeping the home page as the single invitation route.
- Define all visual values as semantic tokens in the global design system; keep controls accessible and touch-friendly.
- Add route-level title, description, Open Graph title/description/type, and Twitter card metadata. Include a preview image only when a suitable final asset exists.

## Verification
- Check compilation and browser console/runtime output.
- Test opening transition, countdown, event ordering, all calendar/download/map/share actions, lightbox keyboard/swipe behavior, RSVP success/error handling, and music fallback.
- Visually test 320, 375, 390, 412, 768, and desktop widths for overflow, clipping, readability, tap targets, and section transitions.
- Prepare the invitation for publishing; publishing itself will only occur when explicitly requested.
