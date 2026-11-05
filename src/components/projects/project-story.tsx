import { Check } from "lucide-react";
import type { Project } from "@/types/project";
import { ProjectSection } from "@/components/projects/project-section";

/** The challenge → what I built → results, laid out so a recruiter can scan it in seconds. */
export function ProjectStory({ project, index }: { project: Project; index: number }) {
  const story = project.story;
  if (!story) return null;
  return (
    <ProjectSection id="story" index={index} eyebrow="The brief" title="The challenge, and what I built">
      <p className="rounded-[20px] bg-blush/55 p-6 font-serif text-[1.25rem] leading-[1.45] text-ink md:p-8 md:text-[1.4375rem]">
        {story.challenge}
      </p>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <p className="label-mono text-plum">What I built</p>
          <ul className="mt-5 space-y-4">
            {story.built.map((b, i) => (
              <li key={b} className="grid grid-cols-[1.75rem_1fr] text-[0.9875rem] leading-relaxed text-ink/80">
                <span className="font-mono text-[0.75rem] leading-[1.9] text-plum">{String(i + 1).padStart(2, "0")}</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        {story.results?.length ? (
          <div>
            <p className="label-mono text-plum">Results</p>
            <ul className="mt-5 space-y-4">
              {story.results.map((r) => (
                <li key={r} className="flex gap-3 text-[0.9875rem] font-medium leading-relaxed text-ink">
                  <span aria-hidden className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-plum text-background">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </ProjectSection>
  );
}
