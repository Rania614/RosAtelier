import type { Project } from "@/types/project";

/**
 * Projects — the single source of project content.
 * ────────────────────────────────────────────────────────────────
 * Rules for editing:
 *  • Only verified, publicly shareable facts. No invented metrics, URLs or client claims.
 *  • `links.live` / `links.github` only for real public URLs — leave undefined otherwise.
 *  • `order` controls display order; `featured` controls the homepage selection.
 *  • Real screenshots: add `cover.image` (and gallery images) — the illustrated cover is
 *    only a placeholder until then.
 */
export const projects: Project[] = [
  {
    slug: "pinnacle-academic-publishing",
    name: "Pinnacle Academic Publishing",
    tagline: "An academic journal publishing and peer-review platform.",
    description:
      "A full-stack platform for running academic journals — from manuscript submission through peer review to publication, with role-based access, DOI integration and online payments.",
    category: "Full-Stack",
    context: "Freelance",
    role: "Full-Stack Developer (Freelance)",
    period: "Mar 2026 — Sep 2026",
    technologies: ["React", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    featured: true,
    order: 1,
    cover: { motif: "journal", tone: "blush" },
    links: { caseStudy: true, live: "https://pinnacle-academic.com/login" },
    caseStudy: {
      overview:
        "Pinnacle Academic Publishing needed a single platform to run its journals: receiving manuscripts, coordinating peer review, publishing accepted work and keeping the system healthy in production. I was responsible for the platform end to end, frontend and backend.",
      blocks: [
        {
          type: "text",
          id: "context",
          eyebrow: "Context",
          title: "One platform for the whole publishing lifecycle",
          body: [
            "Academic publishing involves several people acting on the same manuscript at different stages — authors submit, editors coordinate, reviewers assess and administrators oversee the journal.",
            "The platform had to give each of them a clear, focused workspace while keeping the manuscript's journey consistent from first submission to published article.",
          ],
        },
        {
          type: "list",
          id: "contribution",
          eyebrow: "My contribution",
          title: "Responsible end to end",
          items: [
            { title: "Full-stack development", body: "Frontend interface and backend services." },
            { title: "Manuscript workflows", body: "Submission and peer-review flows across every stage." },
            { title: "Role-based access", body: "Distinct permissions for Admin, Author, Editor and Reviewer." },
            { title: "DOI integration", body: "Persistent identifiers for published articles." },
            { title: "Payment integration", body: "Online payments connected to the publishing flow." },
            { title: "Production maintenance", body: "Ongoing fixes, improvements and monitoring after launch." },
          ],
        },
        {
          type: "pairs",
          id: "challenges",
          eyebrow: "Challenges & solutions",
          title: "Where the engineering lived",
          pairs: [
            {
              challenge: "Four roles act on the same manuscript, each needing different visibility and actions.",
              solution: "Role-based access that defines what every role can see and do at each stage of the workflow.",
            },
            {
              challenge: "A manuscript passes through many steps — submission, review, revision and decision.",
              solution: "Structured manuscript workflows that keep each submission's status clear to everyone involved.",
            },
            {
              challenge: "Published research needs persistent, citable identifiers.",
              solution: "DOI integration as part of the publishing process.",
            },
            {
              challenge: "A live platform has to stay dependable after launch.",
              solution: "Continued production maintenance: diagnosing issues, shipping fixes and improving the experience.",
            },
          ],
        },
        {
          type: "architecture",
          id: "architecture",
          eyebrow: "System architecture",
          title: "A simplified view of the stack",
          layers: [
            { name: "Client", detail: "React interface with role-specific workspaces" },
            { name: "API", detail: "Node.js & Express.js services and business logic" },
            { name: "Data", detail: "Prisma ORM over PostgreSQL" },
            { name: "Integrations", detail: "DOI registration · payment gateway" },
          ],
          note: "Simplified overview for public presentation.",
        },
        {
          type: "list",
          id: "features",
          eyebrow: "Key features",
          title: "What the platform does",
          items: [
            { title: "Manuscript submission" },
            { title: "Peer-review workflow" },
            { title: "Role-specific workspaces" },
            { title: "DOI integration" },
            { title: "Online payments" },
          ],
        },
        {
          type: "placeholder",
          id: "gallery",
          eyebrow: "Gallery",
          title: "Interface screenshots",
          note: "Screenshots will be added once they are approved for public sharing.",
        },
        {
          type: "placeholder",
          id: "impact",
          eyebrow: "Results & impact",
          title: "Outcomes",
          note: "Only verified outcomes will be published here.",
        },
      ],
    },
  },
  {
    slug: "hixa",
    name: "HIXA",
    tagline: "An engineering management system with role-specific dashboards.",
    description:
      "A multi-dashboard enterprise platform. I designed and built the frontend — four role-specific dashboards for Admin, Engineer, Client and Company, plus the landing page — and handled frontend–backend integration.",
    category: "Frontend",
    context: "Freelance · Saudi client",
    role: "Frontend Developer (Freelance)",
    period: "Sep 2025 — Dec 2025",
    technologies: ["React", "REST APIs"],
    featured: true,
    order: 2,
    cover: { motif: "dashboard", tone: "plum" },
    links: { live: "https://hixa.com.sa/" },
  },
  {
    slug: "ayadi-al-khair",
    name: "Ayadi Al-Khair",
    tagline: "A clinic and patient management platform.",
    description:
      "A patient management system for a charity association that tracks patient support requests, with role-based access for Administrators, Doctors, Medical Reviewers and Employees. Built end to end.",
    category: "Full-Stack",
    context: "Freelance · Charity association",
    role: "Full-Stack Developer (Freelance)",
    period: "May 2026 — Jul 2026",
    technologies: ["React", "TypeScript", "Express.js", "Prisma", "PostgreSQL"],
    featured: true,
    order: 3,
    cover: { motif: "clinic", tone: "ivory" },
    links: { live: "https://ayadi-alkhair.org/requests" },
  },
  {
    slug: "nuzzul",
    name: "Nuzzul",
    tagline: "A real estate platform concept — mobile app and admin dashboard.",
    description:
      "A real estate platform concept built as a training project: a React Native mobile application with an admin dashboard and a Next.js landing page, backed by Supabase.",
    category: "Mobile",
    context: "Training project",
    role: "Mobile & Frontend Developer",
    technologies: ["React Native", "Expo", "Supabase", "Next.js"],
    featured: true,
    order: 4,
    cover: { motif: "mobile", tone: "blush" },
    links: {},
  },
  {
    slug: "property-management-system",
    name: "Property Management System",
    tagline: "Property management software for a Saudi client.",
    description:
      "A real estate and property management system. I designed and built the frontend and handled its integration with the backend, which was developed by another engineer.",
    category: "Frontend",
    context: "Freelance · Saudi client",
    role: "Frontend Developer (Freelance)",
    period: "Jan 2026 — Apr 2026",
    technologies: ["Frontend engineering", "API integration"],
    featured: false,
    order: 5,
    cover: { motif: "property", tone: "ivory" },
    links: {},
  },
  {
    slug: "rafiq-frontend",
    name: "Rafiq Frontend",
    tagline: "A management dashboard built as a frontend engineering showcase.",
    description:
      "A management dashboard built during the Rafiq training programme, with code review along the way — a frontend engineering showcase in Next.js, TypeScript and Redux Toolkit.",
    category: "Training",
    context: "Training project",
    role: "Frontend Developer Trainee",
    period: "Jun 2026 — Jul 2026",
    technologies: ["Next.js", "React", "TypeScript", "Redux Toolkit"],
    featured: false,
    order: 6,
    cover: { motif: "code", tone: "plum" },
    links: { github: "https://github.com/Rania614/rafiq-frontend" },
  },
];
