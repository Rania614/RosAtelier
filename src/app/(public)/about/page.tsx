import type { Metadata } from "next";
import { about } from "@/data/about";
import { getCapabilities } from "@/lib/data";
import { siteConfig } from "@/config/site";
import { PageIntro } from "@/components/ui/page-intro";
import { AboutRow } from "@/components/about/about-row";
import { ContactBand } from "@/components/sections/contact-band";
import { BeyondCode } from "@/components/sections/beyond-code";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — software engineer in ${siteConfig.location}: background, engineering philosophy, education and goals.`,
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  const capabilities = await getCapabilities();
  return (
    <>
      <PageIntro
        eyebrow="About Rania"
        title={
          <>
            An imaginative mind. <span className="text-plum">An engineering mindset.</span>
          </>
        }
        intro="A world of possibilities — and a careful way of turning them into software. Here is a little more about how I think and work."
      />

      <div className="container-atelier pb-10">
        <AboutRow index="01" label="Introduction" title="Hello, I'm Rania.">
          <div className="grid gap-6 text-[1.0625rem] leading-[1.75] text-ink/75 md:grid-cols-2 md:gap-10">
            {about.introduction.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </AboutRow>

        <AboutRow index="02" label="Engineering philosophy" title={<>Build it <span className="text-plum">thoughtfully</span>, keep it healthy.</>}>
          <ol className="grid gap-px overflow-hidden rounded-[18px] border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {capabilities.map((c) => (
              <li key={c.id} className="bg-surface p-6 md:p-7">
                <span className="font-serif text-2xl text-plum">{c.numeral}</span>
                <p className="mt-3 font-serif text-xl text-ink">{c.title}</p>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink/70">{c.summary}</p>
              </li>
            ))}
          </ol>
        </AboutRow>

        <AboutRow index="03" label="Personal story" title="From first principles to production.">
          <div className="max-w-2xl space-y-5 text-[1.0625rem] leading-[1.75] text-ink/75">
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </AboutRow>

        <AboutRow index="04" label="Technical interests">
          <ul className="flex flex-wrap gap-2.5">
            {about.interests.map((i) => (
              <li key={i} className="rounded-full border border-ink/12 bg-surface px-5 py-2.5 text-[0.9375rem] font-medium text-ink">
                {i}
              </li>
            ))}
          </ul>
        </AboutRow>

        <AboutRow index="05" label="Education & certifications">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="label-mono mb-4 text-ink/70">Education</p>
              {about.education.map((e) => (
                <div key={e.title}>
                  <p className="label-mono text-plum">{e.period}</p>
                  <p className="mt-2 font-serif text-2xl text-ink">{e.title}</p>
                  <p className="mt-1 text-[0.9375rem] text-ink/70">{e.org}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="label-mono mb-4 text-ink/70">Certifications</p>
              <ul className="space-y-3">
                {about.certifications.map((c) => (
                  <li
                    key={c.title}
                    className={cn(
                      "rounded-[14px] px-5 py-4",
                      c.placeholder ? "border border-dashed border-mauve/50 bg-blush/30" : "border border-ink/10 bg-surface",
                    )}
                  >
                    <p className="font-medium text-ink">{c.title}</p>
                    <p className="label-mono mt-1 text-plum">{c.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AboutRow>

        <AboutRow index="06" label="Career goals">
          <p className="max-w-3xl font-serif text-[1.625rem] leading-[1.3] text-ink md:text-[2.125rem]">{about.goals}</p>
        </AboutRow>
      </div>

      <BeyondCode />
      <ContactBand />
    </>
  );
}
