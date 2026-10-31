/**
 * Project & case-study content model.
 * Designed so the same shape can later come from PostgreSQL/Prisma via the CMS.
 */

export type ProjectCategory = "Full-Stack" | "Frontend" | "Mobile" | "Training";

/** Selects the illustrated placeholder cover until real screenshots exist. */
export type CoverMotif = "journal" | "dashboard" | "clinic" | "mobile" | "property" | "code";

export type ProjectTone = "ivory" | "blush" | "plum";

export interface ProjectImage {
  src: string; // e.g. Cloudinary URL later
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface ProjectLinks {
  caseStudy?: boolean; // internal /projects/[slug]
  live?: string; // only real, public URLs
  github?: string; // only real, public repositories
}

/** Flexible case-study blocks — rendered in order by <CaseStudyBlocks />. */
export type CaseStudyBlock =
  | { type: "text"; id: string; eyebrow: string; title: string; body: string[] }
  | { type: "list"; id: string; eyebrow: string; title: string; items: { title: string; body?: string }[] }
  | { type: "pairs"; id: string; eyebrow: string; title: string; pairs: { challenge: string; solution: string }[] }
  | { type: "architecture"; id: string; eyebrow: string; title: string; layers: { name: string; detail: string }[]; note?: string }
  | { type: "gallery"; id: string; eyebrow: string; title: string; images: ProjectImage[] }
  | { type: "placeholder"; id: string; eyebrow: string; title: string; note: string };

export interface Project {
  slug: string;
  name: string;
  tagline: string; // one line, used on cards
  description: string;
  category: ProjectCategory;
  /** Short context label, e.g. "Freelance · Saudi client". Only verified facts. */
  context: string;
  role: string;
  period?: string;
  technologies: string[];
  featured: boolean;
  order: number;
  cover: { motif: CoverMotif; tone: ProjectTone; image?: ProjectImage };
  links: ProjectLinks;
  caseStudy?: {
    overview: string;
    blocks: CaseStudyBlock[];
  };
}
