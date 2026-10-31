import { ArrowDown, Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { AvailabilityDot } from "@/components/navigation/availability-dot";
import { HeroHeadline } from "./hero-headline";
import { PortraitComposition } from "./portrait-composition";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pb-16 pt-24 md:pb-20 md:pt-32 lg:pt-36">
      {/* Soft ivory → blush wash, kept to the right so ivory stays dominant */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] -top-[10%] h-[85%] w-[70%] rounded-full bg-blush/70 blur-[120px] lg:-right-[8%]"
      />
      {/* Vertical running head — desktop only */}
      <p
        aria-hidden
        className="label-mono absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-left text-mauve/70 xl:block"
      >
        {siteConfig.brand} — Portfolio
      </p>

      <div className="container-atelier relative">
        <div className="grid-atelier items-end gap-y-12">
          <div className="col-span-full lg:col-span-7 lg:pb-6">
            <Reveal y={10} className="flex flex-wrap items-center gap-x-4 gap-y-2 text-mauve">
              <span className="label-mono text-plum">(01)</span>
              <span aria-hidden className="hidden h-px w-10 bg-mauve/50 sm:block" />
              <span className="label-mono">
                {siteConfig.title} / {siteConfig.discipline}
              </span>
            </Reveal>

            <HeroHeadline />

            <Reveal delay={0.25} className="mt-7 max-w-[34rem] md:mt-9">
              <p className="text-[1.0625rem] leading-[1.7] text-ink/75 md:text-lg">
                I design and build scalable web applications, robust backend systems, and meaningful digital
                products — combining engineering with product thinking.
              </p>
            </Reveal>

            <Reveal delay={0.32} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href="/projects" icon={<ArrowDown aria-hidden className="size-4 -rotate-90 transition-transform duration-300 group-hover/btn:translate-x-0.5" />}>
                Explore My Work
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Let&apos;s Collaborate
              </ButtonLink>
              <a
                href={siteConfig.resumeUrl}
                className="group inline-flex h-12 items-center justify-center gap-2 px-2 text-[0.9375rem] font-semibold text-ink sm:justify-start"
              >
                <Download aria-hidden className="size-4 text-plum transition-transform duration-300 group-hover:translate-y-0.5" />
                <span className="link-underline pb-0.5">Download Resume</span>
              </a>
            </Reveal>
          </div>

          <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-span-5 lg:col-start-8">
            <PortraitComposition />
          </div>
        </div>

        {/* Colophon row — reads like a magazine masthead */}
        <Reveal delay={0.45} className="mt-16 md:mt-20">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/12 pt-6 md:grid-cols-12">
            <div className="md:col-span-3">
              <dt className="label-mono text-mauve">Based in</dt>
              <dd className="mt-2 font-serif text-xl text-ink">{siteConfig.location}</dd>
            </div>
            <div className="md:col-span-3">
              <dt className="label-mono text-mauve">Focus</dt>
              <dd className="mt-2 font-serif text-xl text-ink">Web apps &amp; systems</dd>
            </div>
            <div className="col-span-2 md:col-span-4">
              <dt className="label-mono flex items-center gap-2 text-mauve">
                <AvailabilityDot /> Availability
              </dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink/80">{siteConfig.availability.long}</dd>
            </div>
            <div className="col-span-2 hidden items-end justify-end md:col-span-2 md:flex">
              <a href="#statement" className="label-mono group flex items-center gap-2 text-ink/60 hover:text-plum">
                Scroll
                <ArrowDown aria-hidden className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
