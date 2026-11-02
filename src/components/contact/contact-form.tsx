"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Mail } from "lucide-react";
import { contactSchema, inquiryTypes, submitContact, type ContactInput, type ContactResult } from "@/lib/contact";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-[14px] border bg-surface px-4 text-[0.9375rem] text-ink placeholder:text-ink/50 transition-colors focus:border-plum focus:outline-none focus:ring-4 focus:ring-blush";

export function ContactForm() {
  const [result, setResult] = useState<ContactResult | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema), mode: "onTouched" });

  const onSubmit = async (data: ContactInput) => {
    setResult(null);
    const r = await submitContact(data);
    setResult(r);
    if (r.status === "sent") reset();
  };

  const mailto = () => {
    const v = getValues();
    const subject = encodeURIComponent(`[${v.inquiry ?? "Inquiry"}] ${v.subject ?? ""}`.trim());
    const body = encodeURIComponent(`${v.message ?? ""}\n\n— ${v.name ?? ""}`);
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message} id="name">
          <input id="name" autoComplete="name" className={cn(fieldBase, "h-12", errors.name ? "border-plum" : "border-ink/15")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message} id="email">
          <input id="email" type="email" autoComplete="email" className={cn(fieldBase, "h-12", errors.email ? "border-plum" : "border-ink/15")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
        </Field>
      </div>

      <fieldset>
        <legend className="label-mono mb-3 text-ink/70">Inquiry type</legend>
        <div className="flex flex-wrap gap-2">
          {inquiryTypes.map((t) => (
            <label key={t} className="cursor-pointer">
              <input type="radio" value={t} className="peer sr-only" {...register("inquiry")} />
              <span className="inline-flex h-10 items-center rounded-full border border-ink/15 bg-surface px-4 text-sm font-medium text-ink/75 transition-colors peer-checked:border-plum peer-checked:bg-plum peer-checked:text-background peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-plum hover:border-plum/50">
                {t}
              </span>
            </label>
          ))}
        </div>
        {errors.inquiry ? <ErrorText id="inquiry-error">{errors.inquiry.message}</ErrorText> : null}
      </fieldset>

      <Field label="Subject" error={errors.subject?.message} id="subject">
        <input id="subject" className={cn(fieldBase, "h-12", errors.subject ? "border-plum" : "border-ink/15")} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-error" : undefined} {...register("subject")} />
      </Field>

      <Field label="Message" error={errors.message?.message} id="message">
        <textarea id="message" rows={6} className={cn(fieldBase, "resize-y py-3.5 leading-relaxed", errors.message ? "border-plum" : "border-ink/15")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} />
      </Field>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/70">All fields are required.</p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-plum px-7 font-semibold text-background transition-colors duration-300 hover:bg-ink disabled:opacity-60"
        >
          {isSubmitting ? <Loader2 aria-hidden className="size-4 animate-spin" /> : null}
          {isSubmitting ? "Sending…" : "Send message"}
        </button>
      </div>

      <div aria-live="polite">
        {result?.status === "sent" ? (
          <Notice tone="success" icon={<CheckCircle2 className="size-5" />} title="Message sent.">
            Thank you for reaching out — I&apos;ll reply as soon as I can.
          </Notice>
        ) : null}
        {result?.status === "error" ? (
          <Notice tone="error" icon={<AlertCircle className="size-5" />} title="Something went wrong.">
            {result.message} You can also email me at{" "}
            <a className="font-semibold underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </Notice>
        ) : null}
        {result?.status === "not-configured" ? (
          <Notice tone="info" icon={<Mail className="size-5" />} title="The form isn't connected yet — your message was not sent.">
            Online delivery is coming soon. In the meantime,{" "}
            <a className="font-semibold underline underline-offset-4" href={mailto()}>
              open it in your email app
            </a>{" "}
            with everything you&apos;ve written already filled in.
          </Notice>
        ) : null}
      </div>
    </form>
  );
}

function Field({ label, error, id, children }: { label: string; error?: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="label-mono mb-2.5 block text-ink/70">
        {label}
      </label>
      {children}
      {error ? <ErrorText id={`${id}-error`}>{error}</ErrorText> : null}
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm text-plum">
      <AlertCircle aria-hidden className="size-3.5" />
      {children}
    </p>
  );
}

function Notice({ tone, icon, title, children }: { tone: "success" | "error" | "info"; icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={cn(
        "flex gap-4 rounded-[18px] border p-5",
        tone === "success" && "border-plum/30 bg-blush/60",
        tone === "error" && "border-plum/50 bg-surface",
        tone === "info" && "border-dashed border-mauve/60 bg-blush/30",
      )}
    >
      <span aria-hidden className="mt-0.5 text-plum">
        {icon}
      </span>
      <div>
        <p className="font-semibold text-ink">{title}</p>
        <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink/70">{children}</p>
      </div>
    </div>
  );
}
