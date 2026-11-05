import { contactSchema } from "@/lib/contact";
import { siteConfig } from "@/config/site";

/**
 * Contact form → email, sent through Resend (https://resend.com).
 *
 * Environment variables (set them in Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY     required. Without it the form says honestly that it isn't connected.
 *   CONTACT_TO_EMAIL   optional. Where messages go; defaults to the email in site config.
 *   CONTACT_FROM_EMAIL optional. Sender; defaults to Resend's test sender, which can only
 *                      deliver to the email the Resend account was created with.
 */

// Best-effort limit: 5 messages per IP every 10 minutes (per server instance).
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > LIMIT;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ status: "not-configured" }, { status: 503 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ status: "error", message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill the "company" field; bots usually do.
  if (body && typeof body === "object" && "company" in body && (body as { company?: unknown }).company) {
    return Response.json({ status: "sent" });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ status: "error", message: "Please check the form fields." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { status: "error", message: "Too many messages in a short time. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  const { name, email, inquiry, subject, message } = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio contact <onboarding@resend.dev>";

  const text = [
    `New message from your portfolio`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Inquiry: ${inquiry}`,
    `Subject: ${subject}`,
    ``,
    message,
    ``,
    `— Reply to this email to answer ${name} directly.`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#342b33">
      <p style="margin:0 0 16px;color:#7a5571;font-size:12px;letter-spacing:.08em;text-transform:uppercase">New message from your portfolio</p>
      <table style="border-collapse:collapse;margin-bottom:16px">
        <tr><td style="padding:2px 16px 2px 0;color:#8a7f88">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:2px 16px 2px 0;color:#8a7f88">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:2px 16px 2px 0;color:#8a7f88">Inquiry</td><td>${escapeHtml(inquiry)}</td></tr>
        <tr><td style="padding:2px 16px 2px 0;color:#8a7f88">Subject</td><td>${escapeHtml(subject)}</td></tr>
      </table>
      <div style="white-space:pre-wrap;padding:16px;background:#f6ece9;border-radius:12px">${escapeHtml(message)}</div>
      <p style="margin-top:16px;color:#8a7f88;font-size:13px">Reply to this email to answer ${escapeHtml(name)} directly.</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio · ${inquiry}] ${subject}`,
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error("Resend error", res.status, await res.text().catch(() => ""));
      return Response.json(
        { status: "error", message: "The message could not be delivered right now." },
        { status: 502 },
      );
    }
    return Response.json({ status: "sent" });
  } catch (err) {
    console.error("Contact delivery failed", err);
    return Response.json({ status: "error", message: "The message could not be delivered right now." }, { status: 502 });
  }
}
