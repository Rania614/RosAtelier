import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PageIntro } from "@/components/ui/page-intro";
import { ContactForm } from "@/components/contact/contact-form";
import { AvailabilityDot } from "@/components/navigation/availability-dot";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} about job opportunities, freelance projects or collaborations.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Let&apos;s create something <em className="italic text-plum">meaningful.</em>
          </>
        }
        intro="Open to exciting opportunities, meaningful collaborations, and ambitious digital projects."
      />
      <section aria-label="Contact form" className="pb-24 md:pb-32">
        <div className="container-atelier grid-atelier gap-y-12 border-t border-ink/12 pt-14 md:pt-20">
          <Reveal className="col-span-full lg:col-span-4">
            <div className="space-y-10 lg:sticky lg:top-28">
              <div>
                <p className="label-mono flex items-center gap-2 text-mauve">
                  <AvailabilityDot /> Availability
                </p>
                <p className="mt-3 font-serif text-2xl leading-snug text-ink">{siteConfig.availability.long}</p>
              </div>
              <div>
                <p className="label-mono text-mauve">Direct</p>
                <a href={`mailto:${siteConfig.email}`} className="mt-3 inline-flex items-center gap-2 text-ink hover:text-plum">
                  <Mail aria-hidden className="size-4" />
                  <span className="link-underline font-medium">{siteConfig.email}</span>
                </a>
              </div>
              <div>
                <p className="label-mono text-mauve">Elsewhere</p>
                <ul className="mt-3 space-y-2">
                  {siteConfig.socials.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noreferrer" className="link-underline font-medium text-ink hover:text-plum">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label-mono text-mauve">Based in</p>
                <p className="mt-3 font-medium text-ink">{siteConfig.location} · working remotely</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="col-span-full lg:col-span-7 lg:col-start-6">
            <div className="rounded-[26px] border border-ink/10 bg-background p-6 shadow-[0_40px_80px_-60px_rgba(52,43,51,.5)] md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
