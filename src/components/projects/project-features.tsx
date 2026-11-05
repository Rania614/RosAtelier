import type { Project } from "@/types/project";
import { ProjectSection } from "@/components/projects/project-section";

/** Problems solved and standout features, each tagged with the skills it demonstrates. */
export function ProjectFeatures({ project, index }: { project: Project; index: number }) {
  const features = project.features;
  if (!features?.length) return null;
  return (
    <ProjectSection
      id="features"
      index={index}
      eyebrow="Problems solved"
      title="What makes it work, and the skills behind it"
    >
      <ol className="grid gap-4 md:grid-cols-2">
        {features.map((f, i) => (
          <li
            key={f.title}
            className="flex flex-col rounded-[20px] border border-ink/10 bg-surface p-6 transition-colors duration-300 hover:border-plum/35 md:p-7 md:[&:last-child:nth-child(odd)]:col-span-2"
          >
            <span className="font-mono text-[0.75rem] text-plum">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 font-serif text-[1.3125rem] leading-snug text-ink">{f.title}</h3>
            <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink/75">{f.body}</p>
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
    </ProjectSection>
  );
}
