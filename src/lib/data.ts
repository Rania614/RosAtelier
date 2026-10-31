/**
 * Data-access layer.
 * ────────────────────────────────────────────────────────────────
 * UI components never import from /data directly — they call these functions.
 * To move to the CMS, swap these implementations for Prisma queries; the
 * signatures (async, typed) already match a database-backed source.
 */
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { techStack, capabilities } from "@/data/skills";
import { testimonials } from "@/data/testimonials";
import { beyond } from "@/data/beyond";
import type { Project, ProjectCategory } from "@/types/project";

const byOrder = (a: Project, b: Project) => a.order - b.order;

export async function getProjects(): Promise<Project[]> {
  return [...projects].sort(byOrder);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug);
}

export async function getProjectSlugs(): Promise<string[]> {
  return (await getProjects()).map((p) => p.slug);
}

export async function getAdjacentProjects(slug: string) {
  const list = await getProjects();
  const i = list.findIndex((p) => p.slug === slug);
  return {
    previous: i > 0 ? list[i - 1] : list[list.length - 1],
    next: i < list.length - 1 ? list[i + 1] : list[0],
  };
}

export async function getProjectCategories(): Promise<ProjectCategory[]> {
  const set = new Set((await getProjects()).map((p) => p.category));
  return [...set];
}

export async function getExperience() {
  return experience;
}

export async function getTechStack() {
  return techStack;
}

export async function getCapabilities() {
  return capabilities;
}

export async function getBeyond() {
  return beyond;
}

/** Only real, approved testimonials are ever returned for public rendering. */
export async function getPublicTestimonials() {
  return testimonials.filter((t) => !t.placeholder);
}
