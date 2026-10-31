import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function Statement() {
  return (
    <section id="statement" aria-labelledby="statement-title" className="scroll-mt-24 py-24 md:py-32 lg:py-40">
      <div className="container-atelier">
        <div className="grid-atelier gap-y-10">
          <Reveal className="col-span-full flex items-center gap-4 border-t border-ink/12 pt-4 text-mauve">
            <span className="label-mono">02</span>
            <span aria-hidden className="h-px w-8 bg-mauve/50" />
            <span className="label-mono">Personal statement</span>
          </Reveal>

          <Reveal className="col-span-full lg:col-span-4">
            <h2
              id="statement-title"
              className="font-serif text-[2.25rem] leading-[1.05] tracking-[-0.02em] text-ink md:text-[2.75rem]"
            >
              More than code.
              <em className="mt-1 block italic text-plum">A thoughtful approach to building.</em>
            </h2>
          </Reveal>

          <div className="col-span-full lg:col-span-7 lg:col-start-6">
            <Reveal>
              <blockquote className="relative font-serif text-[1.75rem] leading-[1.22] tracking-[-0.015em] text-ink md:text-[2.4rem] lg:text-[2.75rem]">
                <span aria-hidden className="absolute -left-1 -top-8 font-serif text-[5rem] leading-none text-rose md:-left-12 md:-top-6">
                  &ldquo;
                </span>
                I believe great software is more than code. It&apos;s the result of{" "}
                <em className="italic text-plum">thoughtful decisions</em>, meaningful design, and engineering that
                makes a difference.
              </blockquote>
            </Reveal>

            <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
              <Reveal delay={0.05}>
                <p className="text-[1.0625rem] leading-[1.75] text-ink/75">
                  <span className="font-semibold text-ink">I&apos;m {siteConfig.name},</span> a software engineer based in {siteConfig.location}. I work across the
                  stack — from interfaces people enjoy using to the APIs, data models and integrations that keep them
                  dependable.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-[1.0625rem] leading-[1.75] text-ink/75">
                  I care about the decisions behind a product as much as the code: understanding the workflow, shaping
                  the structure, and staying with a system after launch to keep it healthy.
                </p>
                <ButtonLink href="/about" variant="ghost" className="mt-6 h-auto">
                  <span className="link-underline pb-0.5">More about me</span>
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
