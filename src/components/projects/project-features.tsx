import type { Project } from "@/types/project";
import { Reveal } from "@/components/ui/reveal";

/** Problems solved and standout features, each tagged with the skills it demonstrates. */
export function ProjectFeatures({ project }: { project: Project }) {
  const features = project.features;
  if (!features?.length) return null;
  return (
    <Reveal className="mb-20 md:mb-28">
      <section aria-labelledby="features-title" className="grid-atelier gap-y-8">
        <div className="col-span-full lg:col-span-4">
          <h2 id="features-title" className="label-mono border-t border-ink/12 pt-4 text-plum">
            Problems solved &amp; skills shown
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
            What makes this project work, and the skills behind each part.
          </p>
        </div>
        <ol className="col-span-full grid gap-4 md:grid-cols-2 lg:col-span-8">
          {features.map((f, i) => (
            <li
              key={f.title}
              className="flex flex-col rounded-[20px] border border-ink/10 bg-surface p-6 transition-colors duration-300 hover:border-plum/35 md:p-7"
            >
              <span className="font-mono text-[0.75rem] text-plum">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-serif text-[1.3125rem] leading-snug text-ink">{f.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">{f.body}</p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Skills">
                {f.skills.map((s) => (
                  <li key={s} className="rounded-full bg-blush/70 px-3 py-1 font-mono text-[0.6875rem] tracking-wide text-plum">
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </Reveal>
  );
}
