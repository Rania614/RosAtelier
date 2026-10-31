import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getAdjacentProjects, getProjectBySlug, getProjectSlugs } from "@/lib/data";
import type { CaseStudyBlock, Project } from "@/types/project";
import { ProjectCover } from "@/components/projects/project-cover";
import { CaseStudyBlocks } from "@/components/projects/case-study-blocks";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { TechIcon } from "@/components/ui/tech-icon";

export async function generateStaticParams() {
  return (await getProjectSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.name, description: project.description },
  };
}

/** Blocks shown when a project has no full case study yet — built only from its verified fields. */
function fallbackBlocks(project: Project): CaseStudyBlock[] {
  return [
    {
      type: "text",
      id: "contribution",
      eyebrow: "My contribution",
      title: project.role,
      body: [project.description],
    },
    {
      type: "placeholder",
      id: "case-study",
      eyebrow: "Case study",
      title: "Full write-up in preparation",
      note: "A detailed case study — context, challenges, architecture and outcomes — will be published here.",
    },
  ];
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  const { next, previous } = await getAdjacentProjects(project.slug);
  const blocks = project.caseStudy?.blocks ?? fallbackBlocks(project);

  const meta = [
    { label: "Role", value: project.role },
    { label: "Context", value: project.context },
    { label: "Period", value: project.period ?? "—" },
    { label: "Category", value: project.category },
  ];

  return (
    <article>
      {/* Masthead */}
      <header className="relative overflow-hidden pb-12 pt-28 md:pb-16 md:pt-40">
        <div aria-hidden className="pointer-events-none absolute -right-[15%] -top-[25%] h-[110%] w-[55%] rounded-full bg-blush/60 blur-[120px]" />
        <div className="container-atelier relative">
          <Link href="/projects" className="label-mono group inline-flex items-center gap-2 text-ink/60 hover:text-plum">
            <ArrowLeft aria-hidden className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            All projects
          </Link>
          <div className="grid-atelier mt-10 items-end gap-y-8">
            <Reveal className="col-span-full lg:col-span-8">
              <p className="label-mono text-mauve">
                {String(project.order).padStart(2, "0")} · {project.category}
              </p>
              <h1 className="mt-4 font-serif text-[3rem] leading-[0.98] tracking-[-0.03em] text-ink md:text-[5rem] lg:text-[6rem]">
                {project.name}
              </h1>
              <p className="mt-5 max-w-2xl font-serif text-[1.5rem] italic leading-snug text-plum md:text-[1.875rem]">
                {project.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="col-span-full flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              {project.links.live ? <ButtonLink href={project.links.live}>Live demo</ButtonLink> : null}
              {project.links.github ? (
                <ButtonLink href={project.links.github} variant="outline" icon={<TechIcon name="github" className="size-4" />}>
                  View source
                </ButtonLink>
              ) : null}
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/12 pt-6 md:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="label-mono text-mauve">{m.label}</dt>
                  <dd className="mt-2 text-[0.9375rem] font-medium text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      <div className="container-atelier">
        <Reveal>
          <ProjectCover
            project={project}
            priority
            sizes="100vw"
            className="aspect-[4/3] rounded-[26px] border border-ink/10 md:aspect-[16/8]"
          />
        </Reveal>
      </div>

      {/* Overview */}
      <section aria-labelledby="overview-title" className="py-20 md:py-28">
        <div className="container-atelier grid-atelier gap-y-6">
          <div className="col-span-full lg:col-span-4">
            <h2 id="overview-title" className="label-mono flex items-center gap-3 border-t border-ink/12 pt-4 text-mauve">
              Overview
            </h2>
          </div>
          <Reveal className="col-span-full lg:col-span-8">
            <p className="font-serif text-[1.625rem] leading-[1.3] tracking-[-0.01em] text-ink md:text-[2.125rem]">
              {project.caseStudy?.overview ?? project.description}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="container-atelier pb-20 md:pb-28">
        <CaseStudyBlocks blocks={blocks} />

        {/* Technology stack */}
        <Reveal className="mt-20 md:mt-28">
          <section aria-labelledby="stack-heading" className="grid-atelier gap-y-6">
            <div className="col-span-full lg:col-span-4">
              <p className="label-mono border-t border-ink/12 pt-4 text-mauve">Technology stack</p>
            </div>
            <div className="col-span-full lg:col-span-8">
              <h2 id="stack-heading" className="sr-only">
                Technology stack
              </h2>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <li key={t} className="rounded-full border border-ink/12 bg-surface px-4 py-2 font-mono text-[0.8125rem] text-ink">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>
      </div>

      {/* Next / previous */}
      <nav aria-label="More projects" className="border-t border-ink/12">
        <div className="container-atelier grid md:grid-cols-[1fr_2fr]">
          <Link
            href={`/projects/${previous.slug}`}
            className="group flex flex-col justify-center gap-2 border-b border-ink/12 py-8 md:border-b-0 md:border-r md:py-14 md:pr-10"
          >
            <span className="label-mono flex items-center gap-2 text-mauve">
              <ArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-0.5" /> Previous
            </span>
            <span className="font-serif text-2xl text-ink group-hover:text-plum">{previous.name}</span>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group flex items-center justify-between gap-6 py-10 md:py-14 md:pl-10">
            <span>
              <span className="label-mono flex items-center gap-2 text-mauve">Next project</span>
              <span className="mt-3 block font-serif text-[2.25rem] leading-none tracking-[-0.02em] text-ink transition-colors group-hover:text-plum md:text-[3.5rem]">
                {next.name}
              </span>
            </span>
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-all duration-300 group-hover:border-plum group-hover:bg-plum group-hover:text-background md:size-20">
              <ArrowRight aria-hidden className="size-5 md:size-6" />
            </span>
          </Link>
        </div>
      </nav>

      <div className="bg-blush/45">
        <div className="container-atelier flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <p className="font-serif text-[1.75rem] leading-tight text-ink md:text-[2.25rem]">
            Have a project with similar challenges?
          </p>
          <ButtonLink href="/contact" icon={<ArrowUpRight aria-hidden className="size-4" />}>
            Let&apos;s talk
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
