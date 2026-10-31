import type { ExperienceItem } from "@/types/experience";

/**
 * Experience & journey — newest first.
 * Entries with `period.placeholder: true` show an "editable" marker until confirmed.
 */
export const experience: ExperienceItem[] = [
  {
    id: "freelance",
    kind: "Freelance",
    title: "Freelance Software Development",
    organization: "Independent",
    period: { label: "Dates to confirm", placeholder: true },
    summary:
      "Independent client engagements across web and mobile — from frontend builds and API integration to end-to-end full-stack platforms.",
    technologies: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "React Native"],
  },
  {
    id: "pinnacle",
    kind: "Engagement",
    title: "Full-Stack Developer (Freelance)",
    organization: "Pinnacle Academic Publishing",
    period: { label: "Mar 2026 — Sep 2026" },
    summary:
      "Built and maintained an academic publishing and peer-review platform end to end: manuscript workflows, role-based access, DOI and payment integration, and production maintenance.",
    projectSlug: "pinnacle-academic-publishing",
  },
  {
    id: "property",
    kind: "Engagement",
    title: "Frontend Developer (Freelance)",
    organization: "Property Management System · Saudi client",
    period: { label: "Jan 2026 — Apr 2026" },
    summary: "Designed and built the frontend of a property management system and integrated it with the backend.",
    projectSlug: "property-management-system",
  },
  {
    id: "hixa",
    kind: "Engagement",
    title: "Frontend Developer (Freelance)",
    organization: "HIXA · Saudi client",
    period: { label: "Sep 2025 — Dec 2025" },
    summary:
      "Designed and built four role-specific dashboards and a landing page for an engineering management platform, plus frontend–backend integration.",
    projectSlug: "hixa",
  },
  {
    id: "iti",
    kind: "Training",
    title: "Intensive Training Program",
    organization: "Information Technology Institute (ITI)",
    period: { label: "Dates to confirm", placeholder: true },
    summary: "A four-month intensive software development program. Certifications to be listed here.",
    highlights: ["Certifications — to be added"],
  },
  {
    id: "aast",
    kind: "Education",
    title: "B.Sc. Computer Science",
    organization: "Arab Academy for Science, Technology & Maritime Transport (AAST)",
    period: { label: "2019 — 2024" },
    summary: "Foundations in computer science, software engineering and systems.",
  },
];
