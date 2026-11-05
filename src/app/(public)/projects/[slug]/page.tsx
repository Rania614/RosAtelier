import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getAdjacentProjects, getProjectBySlug, getProjectSlugs } from "@/lib/data";
import type { Project } from "@/types/project";
import { HighlightChips } from "@/components/projects/highlight-chips";
import { ProjectStory } from "@/components/projects/project-story";
import { ProjectSection } from "@/components/projects/project-section";
import { ProjectFeatures } from "@/components/projects/project-features";
import { siteConfig } from "@/config/site";
import { ProjectCover } from "@/components/projects/project-cover";
import { CaseStudyBlocks } from "@/components/projects/case-study-blocks";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { TechIcon } from "@/components/ui/tech-icon";
import { BrowserFrame } from "@/components/projects/browser-frame";

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

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  const { next, previous } = await getAdjacentProjects(project.slug);
  const blocks = project.caseStudy?.blocks ?? [];

  // Sections are numbered in the order they appear, so the page reads 01, 02, 03… with no gaps.
  const sections: { key: string; render: (index: number) => ReactNode }[] = [];
  if (project.story) sections.push({ key: "story", render: (n) => <ProjectStory project={project} index={n} /> });
  if (project.features?.length) sections.push({ key: "features", render: (n) => <ProjectFeatures project={project} index={n} /> });
  if (project.screenshots?.some((img) => img.src !== project.cover.image?.src))
    sections.push({ key: "screens", render: (n) => <Screens project={project} index={n} /> });
  blocks.forEach((block) =>
    sections.push({ key: block.id, render: (n) => <CaseStudyBlocks blocks={[block]} startIndex={n} /> }),
  );
  sections.push({ key: "stack", render: (n) => <Stack project={project} index={n} /> });

  const meta = [
    { label: "Role", value: project.role },
    { label: "Context", value: project.context },
    { label: "Period", value: project.period ?? "—" },
    { label: "Category", value: project.category },
  ];

  return (
    <article>
      {/* Masthead */}
      <header className="relative overflow-hidden pb-12 pt-28 md:pb-14 md:pt-36">
        <div aria-hidden className="pointer-events-none absolute -right-[15%] -top-[25%] h-[110%] w-[55%] rounded-full bg-blush/60 blur-[120px]" />
        <div className="container-atelier relative">
          <Link href="/projects" className="label-mono group inline-flex items-center gap-2 text-ink/70 hover:text-plum">
            <ArrowLeft aria-hidden className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            All projects
          </Link>
          <div className="grid-atelier mt-10 items-end gap-y-8">
            <Reveal className="col-span-full lg:col-span-8">
              <p className="label-mono text-plum">
                {String(project.order).padStart(2, "0")} · {project.category}
              </p>
              <h1 className="mt-4 max-w-4xl font-serif text-[2.75rem] leading-[1.05] tracking-[-0.02em] text-ink md:text-[4rem] lg:text-[4.75rem]">
                {project.name}
              </h1>
              <p className="mt-6 max-w-2xl text-[1.125rem] leading-relaxed text-ink/75 md:text-[1.3125rem]">
                {project.tagline}
              </p>
              <HighlightChips items={project.highlights} tone="blush" className="mt-6" />
            </Reveal>
            <Reveal delay={0.1} className="col-span-full flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              {project.links.live ? <ButtonLink href={project.links.live}>Visit live site</ButtonLink> : null}
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
                  <dt className="label-mono text-plum">{m.label}</dt>
                  <dd className="mt-2 text-[0.9375rem] font-medium text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      <div className="container-atelier">
        <Reveal>
          <ProjectCover project={project} priority variant="hero" className="rounded-[26px] border border-ink/10" />
          {project.cover.image ? (
            <p className="label-mono mt-4 text-ink/70">
              {project.cover.image.caption} ·{" "}
              {project.screensSource === "design"
                ? "designed in Figma — all names and data are fictional"
                : project.screensSource === "app"
                  ? "from the app, shown with demo data — no client data"
                  : "captured from the live site — signed-in dashboards are not shown"}
            </p>
          ) : null}
        </Reveal>
      </div>

      <div className="container-atelier space-y-24 pb-24 pt-20 md:space-y-32 md:pb-32 md:pt-28">
        {sections.map(({ key, render }, i) => (
          <div key={key}>{render(i + 1)}</div>
        ))}
      </div>

      {/* Next / previous */}
      <nav aria-label="More projects" className="border-t border-ink/12">
        <div className="container-atelier grid md:grid-cols-[1fr_2fr]">
          <Link
            href={`/projects/${previous.slug}`}
            className="group flex flex-col justify-center gap-2 border-b border-ink/12 py-8 md:border-b-0 md:border-r md:py-14 md:pr-10"
          >
            <span className="label-mono flex items-center gap-2 text-plum">
              <ArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-0.5" /> Previous
            </span>
            <span className="font-serif text-2xl text-ink group-hover:text-plum">{previous.name}</span>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group flex items-center justify-between gap-6 py-10 md:py-14 md:pl-10">
            <span>
              <span className="label-mono flex items-center gap-2 text-plum">Next project</span>
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
          <div>
            <p className="font-serif text-[1.75rem] leading-tight text-ink md:text-[2.25rem]">
              Need something like {project.name}?
            </p>
            <p className="mt-2 max-w-xl text-[0.9875rem] leading-relaxed text-ink/75">
              I can build it with you, from first screen to production. Hiring? My résumé has the full picture.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=freelance" icon={<ArrowUpRight aria-hidden className="size-4" />}>
              Start a project
            </ButtonLink>
            <ButtonLink href={siteConfig.resumeUrl} variant="outline">
              Download résumé
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}

function Stack({ project, index }: { project: Project; index: number }) {
  return (
    <ProjectSection id="stack" index={index} eyebrow="Technology" title="Built with">
      <ul className="flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <li key={t} className="rounded-full border border-ink/12 bg-surface px-4 py-2 font-mono text-[0.8125rem] text-ink">
            {t}
          </li>
        ))}
      </ul>
    </ProjectSection>
  );
}

const screensCopy = {
  live: { eyebrow: "Live screens", title: "From the live site", note: "Captured from the public site. Signed-in dashboards and client data are not shown." },
  design: { eyebrow: "Design screens", title: "From the Figma design", note: "From the Figma design and prototype. All names and data are fictional demo content." },
  app: { eyebrow: "App screens", title: "Inside the app", note: "Screens from the app, shown with demo data. No client data is shown." },
} as const;

/** Real screenshots, each labelled with where it came from. */
function Screens({ project, index }: { project: Project; index: number }) {
  // The cover screenshot is already shown above, so only list the others here.
  const shots = (project.screenshots ?? []).filter((img) => img.src !== project.cover.image?.src);
  const copy = screensCopy[project.screensSource ?? "live"];
  return (
    <ProjectSection id="screens" index={index} eyebrow={copy.eyebrow} title={copy.title} note={copy.note}>
      <div className="grid items-start gap-8 md:grid-cols-2">
          {shots.map((img, i) => (
            <figure key={img.src} className={shots.length === 1 || (shots.length % 2 === 1 && i === 0) ? "md:col-span-2" : undefined}>
              {img.mockup ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 1024px) 640px, 92vw"
                  className="mx-auto h-auto w-full max-w-[640px] rounded-[18px]"
                />
              ) : (
                <div className="rounded-[18px] bg-blush/70 p-2.5 md:p-3.5">
                  <BrowserFrame image={img} sizes="(min-width: 1024px) 760px, 92vw" />
                </div>
              )}
              <figcaption className="label-mono mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-ink/70">
                {img.caption ? <span>{img.caption}</span> : null}
                <a
                  href={img.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1 text-plum"
                >
                  Full size
                  <ArrowUpRight aria-hidden className="size-3" />
                  <span className="sr-only">: {img.alt} (opens in a new tab)</span>
                </a>
              </figcaption>
            </figure>
          ))}
      </div>
    </ProjectSection>
  );
}
