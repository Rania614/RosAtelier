import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { TechIcon } from "@/components/ui/tech-icon";

const socialIcon: Record<string, React.ReactNode> = {
  GitHub: <TechIcon name="github" className="size-4" />,
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
};

export function ContactBand({ index }: { index?: string }) {
  return (
    <section aria-labelledby="contact-band-title" className="relative overflow-hidden bg-plum text-background">
      {/* line-art arcs */}
      <svg aria-hidden viewBox="0 0 600 600" className="absolute -right-40 -top-40 w-[42rem] text-background/10" fill="none">
        <circle cx="300" cy="300" r="298" stroke="currentColor" />
        <circle cx="300" cy="300" r="220" stroke="currentColor" />
        <circle cx="300" cy="300" r="140" stroke="currentColor" strokeDasharray="2 6" />
      </svg>
      <div className="container-atelier relative py-24 md:py-32 lg:py-40">
        <div className="grid-atelier gap-y-10">
          <Reveal className="col-span-full flex items-center gap-4 border-t border-background/20 pt-4 text-background/70">
            {index ? (
              <>
                <span className="label-mono">{index}</span>
                <span aria-hidden className="h-px w-8 bg-background/30" />
              </>
            ) : null}
            <span className="label-mono">Contact</span>
          </Reveal>
          <Reveal className="col-span-full lg:col-span-9">
            <h2
              id="contact-band-title"
              className="font-serif text-[3rem] leading-[0.98] tracking-[-0.03em] md:text-[5rem] lg:text-[6.5rem]"
            >
              Let&apos;s create something <em className="italic text-rose">meaningful.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-full md:col-span-5 lg:col-span-5">
            <p className="text-lg leading-relaxed text-background/80">
              Open to exciting opportunities, meaningful collaborations, and ambitious digital projects.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="light">
                Let&apos;s Talk
              </ButtonLink>
              <ButtonLink href={siteConfig.resumeUrl} variant="outline-light">
                View Resume
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="col-span-full flex items-end md:col-span-3 md:col-start-6 lg:col-span-4 lg:col-start-9">
            <ul className="w-full divide-y divide-background/15 border-y border-background/15">
              {siteConfig.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-4 text-background/85 transition-colors hover:text-background"
                  >
                    <span className="flex items-center gap-3">
                      {socialIcon[s.label]}
                      <span className="font-medium">{s.label}</span>
                    </span>
                    <span className="label-mono text-background/50 transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center justify-between py-4 text-background/85 transition-colors hover:text-background"
                >
                  <span className="flex items-center gap-3">
                    <Mail aria-hidden className="size-4" />
                    <span className="font-medium">Email</span>
                  </span>
                  <span className="label-mono text-background/50 transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
