import type { ExperienceItem } from "@/types/experience";

/**
 * Experience & journey — newest first.
 * Entries with `period.placeholder: true` show an "editable" marker until confirmed.
 */
export const experience: ExperienceItem[] = [
  {
    id: "build-and-brand",
    kind: "Competition",
    title: "Frontend Developer — 1st place, User Persona competition",
    organization: "Build & Brand · IEEE Aswan SB",
    period: { label: "22 — 24 Oct 2026" },
    summary:
      "Team of three building a custom-printing website from idea to launch. I built the customer-facing ordering flow, where customers choose a product and upload their own design.",
    projectSlug: "yozersief",
  },
  {
    id: "freelance",
    kind: "Freelance",
    title: "Freelance Software Development",
    organization: "Independent",
    period: { label: "Jun 2025 — Sep 2026" },
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
    title: "Front-End & Cross-Platform Mobile Application Development",
    organization: "Information Technology Institute (ITI)",
    period: { label: "2025" },
    summary:
      "A four-month intensive training program in front-end and cross-platform mobile development. Graduation project: Elevante, which I led as team lead.",
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
