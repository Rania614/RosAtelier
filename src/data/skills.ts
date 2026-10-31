import type { TechGroup, Capability } from "@/types/content";

export const techStack: TechGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  { category: "Mobile", items: [{ name: "React Native", icon: "react" }, { name: "Expo", icon: "expo" }] },
  { category: "Backend", items: [{ name: "Node.js", icon: "nodejs" }, { name: "Express.js", icon: "express" }] },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Prisma", icon: "prisma" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  { category: "Styling", items: [{ name: "Tailwind CSS", icon: "tailwind" }, { name: "CSS", icon: "css" }] },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

export const capabilities: Capability[] = [
  {
    id: "frontend",
    numeral: "I",
    title: "Frontend Engineering",
    summary: "Interfaces, usability, performance, and responsive systems.",
    focus: ["Component architecture", "Accessibility", "Responsive layouts"],
  },
  {
    id: "backend",
    numeral: "II",
    title: "Backend Architecture",
    summary: "APIs, business logic, authentication, and data modeling.",
    focus: ["REST APIs", "Role-based access", "Domain logic"],
  },
  {
    id: "data",
    numeral: "III",
    title: "Data & Integrations",
    summary: "Database design, third-party services, and integrations.",
    focus: ["Relational modeling", "Prisma & PostgreSQL", "Payments & DOI"],
  },
  {
    id: "delivery",
    numeral: "IV",
    title: "Production & Delivery",
    summary: "Deployment, debugging, optimization, and maintenance.",
    focus: ["Deployment", "Production debugging", "Ongoing maintenance"],
  },
];
