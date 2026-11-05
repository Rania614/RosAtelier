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
 * Sends the form to /api/contact, which emails it to Rania (see src/app/api/contact/route.ts).
 * If the server isn't configured yet, the form says so honestly — it never pretends a message was sent.
 */
export async function submitContact(data: ContactInput & { company?: string }): Promise<ContactResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    const json = (await res.json().catch(() => null)) as ContactResult | null;
    if (json?.status === "not-configured") return json;
    if (res.ok && json?.status === "sent") return { status: "sent" };
    return {
      status: "error",
      message: json?.status === "error" ? json.message : `The server responded with ${res.status}.`,
    };
  } catch {
    return { status: "error", message: "The message could not be delivered. Please check your connection." };
  }
}
