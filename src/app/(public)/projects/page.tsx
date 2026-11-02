import type { Metadata } from "next";
import { Suspense } from "react";
import { getProjectCategories, getProjects } from "@/lib/data";
import { PageIntro } from "@/components/ui/page-intro";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ContactBand } from "@/components/sections/contact-band";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects by Rania Abdelnasser — full-stack platforms, frontend systems and mobile products.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const [projects, categories] = await Promise.all([getProjects(), getProjectCategories()]);
  return (
    <>
      <PageIntro
        eyebrow="Work"
        title={
          <>
            Selected <span className="text-plum">projects</span>
          </>
        }
        intro="Platforms, dashboards and mobile products — each one a set of problems worth solving carefully."
      />
      <section aria-label="Projects" className="pb-24 md:pb-32">
        <div className="container-atelier">
          <Suspense fallback={<ProjectGrid projects={projects} />}>
            <ProjectsExplorer projects={projects} categories={categories} />
          </Suspense>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
