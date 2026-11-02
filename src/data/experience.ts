import type { ExperienceItem } from "@/types/experience";

/**
 * Experience & journey — newest first.
 * Entries with `period.placeholder: true` show an "editable" marker until confirmed.
 */
export const experience: ExperienceItem[] = [
  {
    id: "hrms",
    kind: "Freelance",
    title: "UI/UX Designer (Freelance)",
    organization: "HR Management System (HRMS) · Enterprise SaaS",
    period: { label: "31 Oct 2026 · 10 days" },
    summary:
      "Designing an enterprise HR platform in Figma: 11 core screens, user flows for four roles (Admin, HR Manager, Direct Manager, Employee), authentication and role-based navigation, reusable components, and Arabic RTL interfaces with bilingual support — with interactive prototypes of the key workflows.",
    technologies: ["Figma", "Auto Layout", "Components", "Variables", "Prototyping"],
    projectSlug: "hr-management-system",
  },
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
    id: "pinnacle",
    kind: "Freelance",
    title: "Full-Stack Developer (Freelance)",
    organization: "Pinnacle Academic Publishing",
    period: { label: "Mar 2026 — Sep 2026" },
    summary:
      "Built an academic publishing platform end to end — React frontend, Node.js/Express API, Prisma and PostgreSQL — with role-based manuscript workflows, DOI and payment integration. Deployed it to production, then ran a production audit and fixed 20+ production bugs.",
    projectSlug: "pinnacle-academic-publishing",
  },
  {
    id: "ayadi",
    kind: "Freelance",
    title: "Full-Stack Developer (Freelance)",
    organization: "Ayadi Al-Khair Charity Association",
    period: { label: "May 2026 — Jul 2026" },
    summary:
      "Built a patient management system end to end with React, TypeScript, Express.js, Prisma and PostgreSQL, with role-based access for Administrators, Doctors, Medical Reviewers and Employees.",
    projectSlug: "ayadi-al-khair",
  },
  {
    id: "rafiq",
    kind: "Internship",
    title: "Frontend Developer Trainee",
    organization: "Rafiq",
    period: { label: "Jun 2026 — Jul 2026" },
    summary:
      "Implemented a management dashboard from Figma designs with Next.js and TypeScript. Worked in feature branches with pull requests and code review, reviewed teammates' work and gave weekly technical presentations in an Agile team.",
    projectSlug: "rafiq-frontend",
  },
  {
    id: "linkedtrust",
    kind: "Internship",
    title: "Frontend Developer Intern",
    organization: "LinkedTrust",
    period: { label: "Feb 2026 — Jun 2026" },
    summary:
      "Built React and TypeScript UI components following Atomic Design for an enterprise design system, in a shared production codebase with feature branches and pull-request review.",
  },
  {
    id: "property",
    kind: "Freelance",
    title: "Frontend Developer (Freelance)",
    organization: "Real estate office · Saudi Arabia",
    period: { label: "Jan 2026 — Apr 2026" },
    summary:
      "Designed and built the React frontend of a property management dashboard managing 200+ contracts, and integrated it with the backend built by another developer.",
    projectSlug: "property-management-system",
  },
  {
    id: "afaq-ware",
    kind: "Internship",
    title: "Frontend Developer Intern",
    organization: "Afaq Ware",
    period: { label: "Feb 2026 — Apr 2026" },
    summary: "Built reusable React components from Figma designs and documented their component APIs.",
  },
  {
    id: "hixa",
    kind: "Freelance",
    title: "Frontend Developer (Freelance)",
    organization: "HIXA Engineering Services Platform · Saudi Arabia",
    period: { label: "Sep 2025 — Dec 2025" },
    summary:
      "Designed and built the frontend: four role-specific dashboards (Admin, Engineer, Client, Company) and the landing page, plus frontend–backend integration.",
    projectSlug: "hixa",
  },
  {
    id: "mostaql",
    kind: "Freelance",
    title: "React Native Developer (Freelance)",
    organization: "Furniture e-commerce app · Mostaql client",
    period: { label: "Jun 2025" },
    summary: "Rebuilt the app's mobile screens from Figma designs in React Native, focused on UI implementation.",
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
