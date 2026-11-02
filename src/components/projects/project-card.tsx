import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TechIcon } from "@/components/ui/tech-icon";
import { HighlightChips } from "./highlight-chips";
import type { Project } from "@/types/project";
import { cn, pad } from "@/lib/utils";
import { ProjectCover } from "./project-cover";

interface Props {
  project: Project;
  index: number;
  /** Cover proportion — drives the editorial rhythm of the grid. */
  aspect?: "wide" | "tall" | "square";
  headingLevel?: "h2" | "h3";
  className?: string;
  priority?: boolean;
}

const aspects = {
  wide: "aspect-[4/3] md:aspect-[16/11]",
  tall: "aspect-[4/3] md:aspect-[4/5]",
  square: "aspect-[4/3] md:aspect-square",
  screen: "aspect-[4/3] md:aspect-[5/4]",
};

/**
 * Editorial project card. The title link stretches over the whole card;
 * secondary links (live demo, GitHub) sit above it so they stay independently clickable.
 */
export function ProjectCard({ project, index, aspect = "wide", headingLevel = "h3", className, priority }: Props) {
  const Heading = headingLevel;
  // Real screenshots are landscape: give them a landscape box so they read at a useful size.
  const box = project.cover.image ? (aspect === "wide" ? aspects.wide : aspects.screen) : aspects[aspect];
  const hasFullStudy = Boolean(project.caseStudy);
  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div className="relative">
        <ProjectCover
          project={project}
          priority={priority}
          className={cn(
            "rounded-[22px] border border-ink/8 shadow-[0_1px_0_rgba(52,43,51,.04)] transition-shadow duration-500 group-hover:shadow-[0_40px_60px_-40px_rgba(52,43,51,.45)]",
            box,
          )}
        />
        <span className="label-mono absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1.5 text-ink backdrop-blur-sm">
          {project.category}
        </span>
        <span
          aria-hidden
          className="absolute bottom-4 right-4 flex size-12 scale-90 items-center justify-center rounded-full bg-ink text-background opacity-0 transition-all duration-300 ease-atelier group-hover:scale-100 group-hover:opacity-100"
        >
          <ArrowUpRight className="size-5" />
        </span>
      </div>

      <div className="mt-6 grid grid-cols-[auto_1fr] gap-x-5 md:mt-7">
        <span className="label-mono pt-2 text-plum">{pad(index)}</span>
        <div>
          <p className="label-mono text-ink/70">{project.context}</p>
          <Heading className="mt-2 font-serif text-[1.75rem] leading-[1.1] tracking-[-0.015em] text-ink md:text-[2rem]">
            <Link
              href={`/projects/${project.slug}`}
              className="outline-none after:absolute after:inset-0 after:rounded-[22px] after:content-[''] focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-plum"
            >
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-atelier group-hover:bg-[length:100%_1px]">
                {project.name}
              </span>
            </Link>
          </Heading>
          <p className="mt-3 max-w-md text-[0.9875rem] leading-relaxed text-ink/75">{project.tagline}</p>
          <HighlightChips items={project.highlights} className="mt-4" />

          <p className="mt-4 font-mono text-[0.75rem] leading-relaxed text-plum">
            {project.technologies.join("  /  ")}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold">
            <span className="inline-flex items-center gap-1.5 text-ink">
              {hasFullStudy || project.story ? "Read case study" : "View project"}
              <ArrowUpRight aria-hidden className="size-4 text-plum" />
            </span>
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="link-underline relative z-10 text-ink/70 hover:text-ink"
              >
                Live site
              </a>
            ) : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 inline-flex items-center gap-1.5 text-ink/70 hover:text-ink"
              >
                <TechIcon name="github" className="size-4" />
                <span className="link-underline">Source</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
