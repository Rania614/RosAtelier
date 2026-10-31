import type { Metadata } from "next";
import { getExperience } from "@/lib/data";
import { PageIntro } from "@/components/ui/page-intro";
import { Timeline } from "@/components/experience/timeline";
import { ContactBand } from "@/components/sections/contact-band";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Client engagements, education and training — Rania Abdelnasser's journey of building and learning.",
  alternates: { canonical: "/experience" },
};

export default async function ExperiencePage() {
  const items = await getExperience();
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title={
          <>
            A journey of <em className="italic text-plum">building</em> &amp; learning
          </>
        }
        intro="Client engagements, education and training — the path that shaped how I build."
      >
        <div className="mt-10">
          <ButtonLink href={siteConfig.resumeUrl} variant="outline">
            Download Resume
          </ButtonLink>
        </div>
      </PageIntro>
      <section aria-label="Timeline" className="pb-24 md:pb-32">
        <div className="container-atelier">
          <div className="border-t border-ink/12 pt-14 md:pt-20 lg:pl-[8.333%]">
            <Timeline items={items} />
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
