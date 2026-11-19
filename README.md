# Kajal's Grand Entrance

Project: Kajal Weds Saurabh — Premium Animated Indian Wedding Invitation 2026

Create a complete, premium, romantic, cinematic Indian wedding invitation website for one couple.

The website is being created from the bride's side. Kajal's name must always appear first.

IMPORTANT BRANDING RULE

Bride: Kajal Kedia

Groom: Saurabh Gupta

Main wedding branding:

KAJAL WEDS SAURABH

Never use "Saurabh Weds Kajal".

The wedding year is confirmed as 2026.

Create a beautiful digital wedding invitation inspired by the uploaded reference video. It should feel like a luxury animated wedding card, with elegant floral artwork, romantic typography, cinematic opening animations, and smooth scrolling.

The website must be mobile-first because guests will open it through WhatsApp.

1. Confirmed wedding information

Couple

Bride Name: Kajal Kedia

Groom Name: Saurabh Gupta

Wedding Title: Kajal Weds Saurabh

Wedding Year: 2026

City: Darbhanga, Bihar

Timezone: Asia/Kolkata

Main Wedding Date: 14 December 2026

Main Wedding Ceremony: Varmala, 9:00 PM

2. Exact event schedule

Use these exact dates, times, and venues. Do not change the event names or timings.

Event 1 — Mehndi

Event Name: Mehndi

Date: 13 December 2026

Time: 2:00 PM onwards

Venue: Home

Address: Hasan Chowk, Lal Bagh, Darbhanga

Description:
"An afternoon filled with mehndi, laughter, music, and beautiful memories."

Calendar start: 2026-12-13T14:00:00+05:30

The event is at home, not at the hotel.

Event 2 — Haldi

Event Name: Haldi

Date: 14 December 2026

Time: 8:00 AM

Venue: Mayna Hotel And Banquet

Address: Opposite Poonam Cinema Road, Darbhanga

Description:
"Let the celebrations begin with the vibrant colors of Haldi."

Calendar start: 2026-12-14T08:00:00+05:30

Event 3 — Bhaat

Event Name: Bhaat

Date: 14 December 2026

Time: 10:00 AM

Venue: Mayna Hotel And Banquet

Address: Opposite Poonam Cinema Road, Darbhanga

Description:
"A beautiful family celebration filled with love, blessings, and togetherness."

Calendar start: 2026-12-14T10:00:00+05:30

Event 4 — Tilak

Event Name: Tilak

Date: 14 December 2026

Time: 2:00 PM

Venue: Mayna Hotel And Banquet

Address: Opposite Poonam Cinema Road, Darbhanga

Description:
"An auspicious celebration of blessings, traditions, and family."

Calendar start: 2026-12-14T14:00:00+05:30

Event 5 — Varmala

Event Name: Varmala

Date: 14 December 2026

Time: 9:00 PM

Venue: Mayna Hotel And Banquet

Address: Opposite Poonam Cinema Road, Darbhanga

Description:
"Join us as Kajal and Saurabh begin their forever together."

Calendar start: 2026-12-14T21:00:00+05:30

This is the main wedding celebration and the countdown target.

3. Central wedding configuration

Create a single editable configuration file and use it throughout the application.

export const weddingConfig = {
  bride: {
    name: "Kajal Kedia",
    shortName: "Kajal",
    image: "/images/bride.jpg",
    bio: "Bride introduction goes here."
  },

  groom: {
    name: "Saurabh Gupta",
    shortName: "Saurabh",
    image: "/images/groom.jpg",
    bio: "Groom introduction goes here."
  },

  branding: {
    title: "Kajal Weds Saurabh",
    perspective: "bride-side"
  },

  wedding: {
    year: 2026,
    timezone: "Asia/Kolkata",
    city: "Darbhanga, Bihar",
    mainDate: "2026-12-14",
    mainTime: "21:00"
  },

  venues: {
    home: {
      name: "Home",
      address: "Hasan Chowk, Lal Bagh, Darbhanga"
    },

    hotel: {
      name: "Mayna Hotel And Banquet",
      address: "Opposite Poonam Cinema Road, Darbhanga"
    }
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
      description:
        "An afternoon filled with mehndi, laughter, music, and beautiful memories."
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
      description:
        "Let the celebrations begin with the vibrant colors of Haldi."
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
      description:
        "A beautiful family celebration filled with love, blessings, and togetherness."
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
      description:
        "An auspicious celebration of blessings, traditions, and family."
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
      description:
        "Join us as Kajal and Saurabh begin their forever together."
    }
  ],

  music: {
    enabled: true,
    src: "/audio/wedding-song.mp3"
  }
};


Use this configuration for all names, dates, events, countdown, calendar links, and venue information.

4. Design system

Use a premium Indian wedding aesthetic.

Colors:

Ivory: #FFF9F0

Warm cream: #F6EBDD

Blush pink: #E8B7B5

Dusty rose: #B9787A

Sage green: #8C9B83

Deep olive: #465447

Champagne gold: #C7A66A

Dark brown text: #40352F

Typography:

Cormorant Garamond or Playfair Display for names and headings.

Inter or Lato for body text.

Elegant serif styling for "Kajal Weds Saurabh".

Clean uppercase labels.

Use ivory and cream as primary backgrounds. Use blush, sage, and gold as accents.

The overall feel must be romantic, traditional, elegant, and luxurious.

5. Opening invitation screen

Create a full-screen invitation cover.

Display:

"Together with their families"

"Invite you to celebrate the wedding of"

"KAJAL KEDIA"

"&"

"SAURABH GUPTA"

"KAJAL WEDS SAURABH"

"13–14 DECEMBER 2026"

"DARBHANGA"

Button:

"Open Invitation"

Design:

Ivory paper-textured background.

Elegant floral frame.

Botanical leaves.

Soft blush flowers.

Champagne-gold details.

Premium serif typography.

Animation:

Ivory background appears.

Floral border reveals gradually.

Botanical leaves animate from the edges.

Invitation text fades in.

Bride's name reveals first.

"&" appears.

Groom's name reveals.

Wedding title appears.

Date and city fade in.

Open Invitation button appears.

On clicking Open Invitation:

Animate the cover away elegantly.

Reveal the main wedding website.

Start music only after user interaction.

Smoothly transition to the hero section.

Use Framer Motion.

6. Hero section

Display:

"THE BEGINNING OF FOREVER"

"KAJAL WEDS SAURABH"

"Together with their families"

"Request the pleasure of your company"

"13–14 DECEMBER 2026"

"DARBHANGA"

Use elegant typography, floral decorations, optional couple photo, and a subtle scroll indicator.

Animate text with fade-up and gentle floral reveals.

7. Countdown section

Title:

"COUNTING DOWN TO FOREVER"

Countdown target:

14 December 2026, 9:00 PM IST

Display:

Days.

Hours.

Minutes.

Seconds.

Use timezone Asia/Kolkata.

Update every second. Handle expired countdown gracefully.

Use elegant numbers, floral separators, and subtle animations.

8. Couple section

Title:

"THE COUPLE"

Bride:

"Kajal Kedia"

Groom:

"Saurabh Gupta"

Use uploaded couple photos, editable bios, floral photo frames, and premium serif typography.

Mobile layout: stacked.

Desktop layout: two columns.

Add smooth scroll reveal animations.

9. Love story section

Title:

"OUR STORY"

Subtitle:

"Two hearts, one beautiful journey."

Create an editable timeline:

The First Meeting.

The First Conversation.

The Beginning of Forever.

The Wedding Day.

Use scroll-based reveal animations and elegant botanical decorations.

10. Wedding celebrations section

Title:

"THE WEDDING CELEBRATIONS"

Subtitle:

"Join us in celebrating love, laughter, and togetherness."

Create five elegant event cards.

Display the exact event details provided in the wedding configuration.

Event order must be:

Mehndi — 13 December 2026, 2:00 PM onwards, Home.

Haldi — 14 December 2026, 8:00 AM, Mayna Hotel And Banquet.

Bhaat — 14 December 2026, 10:00 AM, Mayna Hotel And Banquet.

Tilak — 14 December 2026, 2:00 PM, Mayna Hotel And Banquet.

Varmala — 14 December 2026, 9:00 PM, Mayna Hotel And Banquet.

Each card must include:

Event name.

Date.

Time.

Venue.

Address.

Description.

Add to Calendar.

Get Directions.

Use reusable EventCard components.

11. Photo gallery

Title:

"MEMORIES OF US"

Subtitle:

"Some moments deserve to be remembered forever."

Create an elegant gallery with:

6–20 uploaded photos.

Responsive layout.

Lightbox.

Previous and next buttons.

Close button.

Mobile touch support.

Keyboard accessibility.

Lazy loading.

Soft image reveal animations.

Use actual couple photos when uploaded.

12. Venue section

Title:

"THE VENUE"

Hotel:

"Mayna Hotel And Banquet"

Address:

"Opposite Poonam Cinema Road, Darbhanga"

Add:

Venue image placeholder.

Address.

Get Directions.

Add to Calendar.

Travel information.

For Mehndi, display:

"Home — Hasan Chowk, Lal Bagh, Darbhanga"

Generate Google Maps directions from the configured address.

13. RSVP section

Title:

"YOUR PRESENCE MEANS THE WORLD TO US"

Fields:

Guest name.

Phone or email.

Number of guests.

Attending / Not attending.

Message.

Validate required fields.

Show success and error messages.

Prepare Supabase integration using an rsvps table.

Do not expose secret keys.

14. Music player

Create a subtle music toggle.

Requirements:

No autoplay before user interaction.

Start music after Open Invitation.

Play/pause.

Loop.

Configurable local audio file.

Graceful missing audio handling.

Accessible mobile control.

15. WhatsApp sharing

Create a WhatsApp share button.

Use this message:

"You're invited to celebrate the wedding of Kajal Kedia & Saurabh Gupta 💍

Join us on 13–14 December 2026 in Darbhanga.

We can't wait to celebrate with you!"

Generate the share URL from the current website URL.

Use bride-first branding:

"Kajal Weds Saurabh"

16. Add to Calendar

Support:

Google Calendar.

Downloadable .ics file.

Use exact dates and times for all five events.

Use Asia/Kolkata timezone.

Each calendar event must include:

Event title.

Start date/time.

End date/time.

Venue.

Address.

Description.

17. Closing section

Display:

"Your presence is the greatest gift."

"We look forward to celebrating with you."

"KAJAL WEDS SAURABH"

"13–14 DECEMBER 2026"

"With love,"

"THE FAMILIES"

Use soft ivory background, floral border, elegant typography, and a Share Invitation button.

18. Technical requirements

Use React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

Create reusable components:

InvitationOpening.

HeroSection.

CountdownTimer.

CoupleSection.

LoveStory.

EventsSection.

EventCard.

Gallery.

Lightbox.

VenueSection.

RSVPForm.

MusicPlayer.

WhatsAppShare.

CalendarButton.

ClosingSection.

FloralDecoration.

Keep wedding details in one configuration file.

Respect prefers-reduced-motion.

Optimize images and lazy-load gallery photos.

19. Mobile-first testing

Test at:

320px.

375px.

390px.

412px.

768px.

Desktop.

Ensure:

No horizontal scrolling.

No overlapping text.

No clipped floral decorations.

Names are readable.

Countdown works.

Gallery works.

RSVP works.

Music toggle works.

Buttons are easy to tap.

20. SEO and sharing metadata

Page title:

"Kajal Weds Saurabh | Wedding Invitation 2026"

Description:

"Join us in celebrating the wedding of Kajal Kedia & Saurabh Gupta on 13–14 December 2026 in Darbhanga."

Open Graph title:

"Kajal Weds Saurabh 💍"

Open Graph description:

"You're invited to celebrate our wedding."

Add configurable preview image and favicon.

21. Deployment

Prepare the website for production deployment.

Check:

No broken images.

No console errors.

No missing assets.

All buttons work.

Calendar works.

Google Maps works.

WhatsApp works.

Music toggle works.

RSVP works after backend setup.

Mobile and desktop layouts are polished.

Publish through Lovable.

Make the website ready to share as a wedding invitation link.

22. Build order

Stage 1:
Opening cover, hero, countdown.

Stage 2:
Couple, love story, wedding events.

Stage 3:
Gallery, venue, closing.

Stage 4:
RSVP, music, WhatsApp, calendar.

Stage 5:
Animations and mobile responsiveness.

Stage 6:
Testing and deployment.

Start building the complete website now.

Prioritize premium visual quality, bride-first branding, beautiful typography, elegant floral design, and a cinematic wedding invitation experience.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kajal-weds-saurabh.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fd643073-82c4-48ed-8fd4-8261b4e3f930).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
