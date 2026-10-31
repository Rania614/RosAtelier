import { getExperience } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { Timeline } from "@/components/experience/timeline";
import { ButtonLink } from "@/components/ui/button-link";

export async function Journey() {
  const items = await getExperience();
  return (
    <section aria-labelledby="journey-title" className="bg-blush/45 py-24 md:py-32 lg:py-36">
      <div className="container-atelier">
        <SectionHeader
          id="journey-title"
          index="06"
          eyebrow="Experience & journey"
          title={
            <>
              A Journey of <em className="italic text-plum">Building</em> &amp; Learning
            </>
          }
          intro="Client engagements, education and training — the path that shaped how I build."
        />
        <div className="mt-14 md:mt-20 lg:pl-[8.333%]">
          <Timeline items={items} />
        </div>
        <div className="mt-14 md:mt-16 lg:pl-[8.333%]">
          <ButtonLink href="/experience" variant="outline">
            Full experience
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
