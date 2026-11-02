import { Check } from "lucide-react";
import type { Project } from "@/types/project";
import { Reveal } from "@/components/ui/reveal";

/** The challenge → what I built → results, laid out so a recruiter can scan it in seconds. */
export function ProjectStory({ project }: { project: Project }) {
  const story = project.story;
  if (!story) return null;
  return (
    <Reveal>
      <section aria-labelledby="story-title" className="grid-atelier gap-y-8">
        <h2 id="story-title" className="sr-only">
          Project at a glance
        </h2>
        <div className="col-span-full rounded-[22px] bg-blush/60 p-7 md:col-span-8 md:p-9 lg:col-span-4">
          <p className="label-mono text-plum">The challenge</p>
          <p className="mt-4 font-serif text-[1.375rem] leading-snug text-ink md:text-[1.5rem]">{story.challenge}</p>
        </div>
        <div className="col-span-full md:col-span-8 lg:col-span-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="label-mono border-t border-ink/12 pt-4 text-plum">What I built</p>
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
                <p className="label-mono border-t border-ink/12 pt-4 text-plum">Results</p>
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
        </div>
      </section>
    </Reveal>
  );
}
