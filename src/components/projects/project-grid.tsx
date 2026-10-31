import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";

/** Two-column editorial grid; the right column is offset for rhythm on large screens. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 md:gap-y-20 lg:gap-x-16">
      {projects.map((project, i) => (
        <li key={project.slug} className={cn(i % 2 === 1 && "md:mt-24")}>
          <ProjectCard project={project} index={project.order} aspect={i % 4 === 0 || i % 4 === 3 ? "wide" : "square"} priority={i < 2} />
        </li>
      ))}
    </ul>
  );
}
