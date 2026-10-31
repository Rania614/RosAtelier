import { z } from "zod";

export const inquiryTypes = ["Job opportunity", "Freelance project", "Collaboration", "Other"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  inquiry: z.enum(inquiryTypes, { message: "Please choose an inquiry type." }),
  subject: z.string().trim().min(3, "Please add a short subject.").max(120, "Keep the subject under 120 characters."),
  message: z.string().trim().min(20, "A little more detail helps — at least 20 characters.").max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactResult =
  | { status: "sent" }
  | { status: "error"; message: string }
  | { status: "not-configured" };

/**
 * Submission abstraction.
 * ────────────────────────────────────────────────────────────────
 * Set NEXT_PUBLIC_CONTACT_ENDPOINT to an API route or form service that accepts
 * JSON (POST). Until then the form reports honestly that it is not connected —
 * it never pretends a message was sent.
 */
export async function submitContact(data: ContactInput): Promise<ContactResult> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
  if (!endpoint) return { status: "not-configured" };
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) return { status: "error", message: `The server responded with ${res.status}.` };
    return { status: "sent" };
  } catch {
    return { status: "error", message: "The message could not be delivered. Please check your connection." };
  }
}
