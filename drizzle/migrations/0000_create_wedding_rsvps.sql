CREATE TABLE public.rsvps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_name TEXT NOT NULL CHECK (char_length(guest_name) BETWEEN 1 AND 100),
  contact TEXT NOT NULL CHECK (char_length(contact) BETWEEN 3 AND 255),
  guest_count INTEGER NOT NULL CHECK (guest_count BETWEEN 1 AND 20),
  attendance TEXT NOT NULL CHECK (attendance IN ('attending', 'not-attending')),
  message TEXT NOT NULL DEFAULT '' CHECK (char_length(message) <= 1000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.rsvps TO anon, authenticated;
GRANT ALL ON public.rsvps TO service_role;

ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Guests can submit wedding RSVPs"
ON public.rsvps
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(guest_name) BETWEEN 1 AND 100
  AND char_length(contact) BETWEEN 3 AND 255
  AND guest_count BETWEEN 1 AND 20
  AND attendance IN ('attending', 'not-attending')
  AND char_length(message) <= 1000
);