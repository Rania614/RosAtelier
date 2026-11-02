import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects, getProjects } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/**
 * Asymmetrical editorial grid. Positions cycle through this layout so adding or
 * removing featured projects never breaks the composition.
 */
const layout = [
  { cls: "lg:col-span-7", aspect: "wide" as const },
  { cls: "md:mt-28 lg:col-span-5 lg:col-start-8 lg:mt-40", aspect: "tall" as const },
  { cls: "lg:col-span-5 lg:col-start-1 lg:-mt-10", aspect: "tall" as const },
  { cls: "md:mt-28 lg:col-span-6 lg:col-start-7 lg:mt-32", aspect: "wide" as const },
  { cls: "md:col-span-8 lg:col-span-6 lg:col-start-4", aspect: "wide" as const },
];

export async function SelectedWork() {
  const [featured, all] = await Promise.all([getFeaturedProjects(), getProjects()]);
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-24 pb-24 md:pb-32 lg:pb-40">
      <div className="container-atelier">
        <SectionHeader
          id="work-title"
          index="03"
          eyebrow="Featured projects"
          title={
            <>
              Selected <span className="text-plum">Work</span>
            </>
          }
          intro="Some problems I've solved, products I've built, and ideas I've brought to life."
        />

        <div className="grid-atelier mt-14 gap-y-16 md:mt-20 md:gap-y-20">
          {featured.map((project, i) => {
            const slot = layout[i % layout.length];
            return (
              <Reveal key={project.slug} className={cn("col-span-full md:col-span-4", slot.cls)}>
                <ProjectCard project={project} index={project.order} aspect={slot.aspect} />
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-20 md:mt-28">
          <Link
            href="/projects"
            className="group flex items-end justify-between gap-6 border-y border-ink/12 py-8 md:py-10"
          >
            <span>
              <span className="label-mono block text-plum">Archive · {all.length} projects</span>
              <span className="mt-3 block font-serif text-[2rem] leading-none tracking-[-0.02em] text-ink transition-colors group-hover:text-plum md:text-[3.25rem]">
                View all <span>projects</span>
              </span>
            </span>
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-all duration-300 ease-atelier group-hover:border-plum group-hover:bg-plum group-hover:text-background md:size-20">
              <ArrowRight aria-hidden className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 md:size-6" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
