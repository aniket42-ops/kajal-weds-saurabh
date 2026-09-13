import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const rsvpSchema = z.object({
  guestName: z.string().trim().min(1).max(100),
  contact: z.string().trim().min(3).max(255),
  guestCount: z.number().int().min(1).max(20),
  attendance: z.enum(["attending", "not-attending"]),
  message: z.string().trim().max(1000),
});

export const submitRsvp = createServerFn({ method: "POST" })
  .inputValidator((data) => rsvpSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("rsvps").insert({
      guest_name: data.guestName,
      contact: data.contact,
      guest_count: data.guestCount,
      attendance: data.attendance,
      message: data.message,
    });
    if (error) throw new Error("We couldn't save your response. Please try again.");
    return { success: true };
  });
