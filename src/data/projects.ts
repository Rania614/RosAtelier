import type { Project, ProjectImage } from "@/types/project";

/**
 * Screenshots of the live, public pages (captured Nov 2026 from the URLs below).
 * Only public pages — nothing behind a login, no client data.
 */
const shots = {
  pinnacleHome: {
    src: "/images/projects/pinnacle-academic-publishing/home.jpg",
    alt: "Pinnacle Academic Publishing homepage: “Publishing Excellence in Oncology Research” hero with journal highlights",
    width: 734,
    height: 459,
    caption: "Public homepage",
    source: "https://pinnacle-academic.com/",
  },
  pinnacleSignIn: {
    src: "/images/projects/pinnacle-academic-publishing/sign-in.jpg",
    alt: "Pinnacle Academic Publishing submission portal sign-in page",
    width: 800,
    height: 500,
    caption: "Submission portal — sign in",
    source: "https://pinnacle-academic.com/login",
  },
  hixaHome: {
    src: "/images/projects/hixa/home.jpg",
    alt: "HIXA landing page in Arabic: construction and engineering hero with service categories",
    width: 800,
    height: 500,
    caption: "Public landing page",
    source: "https://hixa.com.sa/",
  },
  ayadiHome: {
    src: "/images/projects/ayadi-al-khair/home.jpg",
    alt: "Ayadi Al-Khair homepage in Arabic introducing the association's care services for cancer patients",
    width: 800,
    height: 500,
    caption: "Public homepage",
    source: "https://ayadi-alkhair.org/",
  },
  yozersiefHome: {
    src: "/images/projects/yozersief/home.jpg",
    alt: "Yozersief homepage in Arabic: “مطبوعات تحكي قصتك” hero with printed hoodies, caps and a mug",
    width: 800,
    height: 500,
    caption: "Public homepage",
    source: "https://yozersief.vercel.app/",
  },
  yozersiefOrder: {
    src: "/images/projects/yozersief/order.jpg",
    alt: "Yozersief five-step order flow, step one: choosing who the order is for and which product to print",
    width: 792,
    height: 495,
    caption: "Ordering flow — step 1 of 5",
    source: "https://yozersief.vercel.app/order",
  },
  hrmsLeaveManagement: {
    src: "/images/projects/hr-management-system/leave-management.jpg",
    alt: "HR Management System design in Arabic: the HR manager's leave management table with status chips and summary cards",
    width: 1440,
    height: 1024,
    caption: "HR manager · Leave management",
  },
  hrmsTeamRequests: {
    src: "/images/projects/hr-management-system/team-requests.jpg",
    alt: "Direct manager's team leave requests with approve and reject actions",
    width: 1440,
    height: 1024,
    caption: "Direct manager · Team leave requests",
  },
  hrmsRequestApproved: {
    src: "/images/projects/hr-management-system/request-approved.jpg",
    alt: "Leave request detail after approval: request details, balance after approval and the request timeline",
    width: 1440,
    height: 1024,
    caption: "Direct manager · Request approved",
  },
  hrmsNewRequest: {
    src: "/images/projects/hr-management-system/new-request.jpg",
    alt: "Employee's new leave request form with live balance and what happens after submitting",
    width: 1440,
    height: 1116,
    caption: "Employee · New leave request",
  },
  hrmsMyLeaves: {
    src: "/images/projects/hr-management-system/my-leaves.jpg",
    alt: "Employee's leave dashboard with balances by leave type and request history",
    width: 1440,
    height: 1024,
    caption: "Employee · My leaves",
  },
  hrmsLogin: {
    src: "/images/projects/hr-management-system/login.jpg",
    alt: "Arabic RTL sign-in screen with demo role shortcuts for the prototype",
    width: 1440,
    height: 1024,
    caption: "Authentication · Sign in",
  },
  hrmsPrototypeGuide: {
    src: "/images/projects/hr-management-system/prototype-guide.jpg",
    alt: "Interactive prototype guide: enter as one of four roles and start any of seven flows",
    width: 1440,
    height: 1100,
    caption: "Prototype guide · 4 roles, 7 flows",
  },
  hrmsAdminScreens: {
    src: "/images/projects/hr-management-system/admin-screens.jpg",
    alt: "Four admin screens side by side: add user, user management, roles and permissions matrix, and system settings",
    width: 3200,
    height: 790,
    caption: "Admin · Users, roles & permissions, settings",
  },
} satisfies Record<string, ProjectImage>;

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
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    featured: true,
    order: 1,
    highlights: ["Built end to end", "20+ production bugs fixed", "4 user roles"],
    story: {
      challenge:
        "An academic publisher needed one platform to run its journals — from submission and peer review to publication — and to stay dependable once real authors and editors were using it.",
      built: [
        "The frontend (React, Vite, Tailwind CSS) and the backend (Node.js, Express.js, Prisma, PostgreSQL, REST APIs).",
        "Role-based access with manuscript submission and review workflows for Admin, Author, Editor and Reviewer.",
        "Crossref/DOI integration for published articles, SMTP email with Nodemailer, and a payment gateway.",
        "Production deployment, then monthly development and maintenance after delivery.",
      ],
      results: [
        "Live in production at pinnacle-academic.com.",
        "Ran a production audit and fixed 20+ production bugs.",
        "Kept improving the UI/UX after launch.",
      ],
    },
    cover: { motif: "journal", tone: "blush", image: shots.pinnacleHome },
    screenshots: [shots.pinnacleHome, shots.pinnacleSignIn],
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
              solution:
                "Structured manuscript workflows that keep each submission's status clear to everyone involved.",
            },
            {
              challenge: "Published research needs persistent, citable identifiers.",
              solution: "DOI integration as part of the publishing process.",
            },
            {
              challenge: "A live platform has to stay dependable after launch.",
              solution:
                "Continued production maintenance: diagnosing issues, shipping fixes and improving the experience.",
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
            { name: "Integrations", detail: "Crossref/DOI · payment gateway · SMTP email (Nodemailer)" },
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
      ],
    },
  },
  {
    slug: "hr-management-system",
    name: "HR Management System",
    tagline: "An enterprise HR platform designed in Figma — four roles, one Arabic-first interface.",
    description:
      "An enterprise Human Resource Management System that centralises employee records and streamlines everyday HR work in one web platform. I designed the interface and experience end to end: 11 core screens, user flows for four roles, a reusable component system and interactive prototypes.",
    category: "UI/UX Design",
    context: "Freelance · Enterprise SaaS",
    role: "UI/UX Designer (Freelance)",
    period: "31 Oct 2026 · 10 days",
    technologies: ["Figma", "Auto Layout", "Components", "Variables", "Prototyping"],
    highlights: ["11 core screens", "4 user roles", "Arabic RTL · bilingual"],
    story: {
      challenge:
        "Design one HR platform for four very different users — Admin, HR Manager, Direct Manager and Employee — that stays consistent and easy to use in an Arabic-first, right-to-left interface.",
      built: [
        "11 core screens across employee, department, admin and leave management, attendance, authentication and role-based dashboards.",
        "User flows for four roles, including the full leave journey: the employee requests, the direct manager approves or rejects, and the employee sees the result.",
        "Authentication and role-based navigation: sign in, validation and error states, password recovery and reset.",
        "A reusable component system with consistent spacing, typography and visual hierarchy, built with Auto Layout and Variables.",
        "Arabic RTL interfaces with bilingual support.",
      ],
      results: [
        "An interactive Figma prototype: enter as any of the four roles and walk through seven flows — authentication, employees, attendance, leave, payroll, performance and reports.",
      ],
    },
    featured: true,
    order: 5,
    cover: { motif: "dashboard", tone: "blush", image: shots.hrmsLeaveManagement },
    screensSource: "design",
    screenshots: [
      shots.hrmsLeaveManagement,
      shots.hrmsAdminScreens,
      shots.hrmsTeamRequests,
      shots.hrmsRequestApproved,
      shots.hrmsNewRequest,
      shots.hrmsMyLeaves,
      shots.hrmsLogin,
      shots.hrmsPrototypeGuide,
    ],
    links: {},
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
    highlights: ["4 role-based dashboards", "Landing page", "Saudi client"],
    story: {
      challenge:
        "An engineering services platform serving four very different users — admins, engineers, clients and companies — each needing a workspace built around their own tasks.",
      built: [
        "Designed and built the frontend in React, in a MERN environment.",
        "Four role-specific dashboards: Admin, Engineer, Client and Company.",
        "The public landing page.",
        "Frontend–backend integration with the API built by another developer.",
      ],
      results: ["Live at hixa.com.sa."],
    },
    cover: { motif: "dashboard", tone: "plum", image: shots.hixaHome },
    screenshots: [shots.hixaHome],
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
    highlights: ["Built end to end", "4 user roles", "Arabic RTL"],
    story: {
      challenge:
        "A charity caring for cancer patients needed to receive, review and track patient support requests across staff with different responsibilities.",
      built: [
        "A patient management system, frontend and backend, with React, TypeScript, Express.js, Prisma and PostgreSQL.",
        "Role-based access for Administrator, Doctor, Medical Reviewer and Employee.",
        "Workflows to manage and track patient support requests.",
        "An Arabic, right-to-left interface.",
      ],
      results: ["Live at ayadi-alkhair.org."],
    },
    cover: { motif: "clinic", tone: "blush", image: shots.ayadiHome },
    screenshots: [shots.ayadiHome],
    // The public homepage; /requests is only visible after signing in.
    links: { live: "https://ayadi-alkhair.org/" },
  },
  {
    slug: "yozersief",
    name: "Yozersief",
    tagline: "A custom-printing storefront with a guided ordering flow — 1st place at IEEE Aswan SB's Build & Brand.",
    description:
      "A website for Yozersief, a custom-printing brand, built by a team of three in a three-day competition: Build & Brand, organised by IEEE Aswan SB, where our team won first place in the User Persona competition. I built the customer-facing frontend — the guided ordering flow where customers choose a product and upload their own design — and designed social media posts for the brand.",
    category: "Frontend",
    context: "Competition · IEEE Aswan SB · 1st place",
    role: "Frontend Developer (team of three)",
    period: "22 — 24 Oct 2026",
    // Project stack, from the team repo's README.
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    featured: true,
    order: 4,
    highlights: ["1st place · IEEE", "Built in 3 days", "Team of 3"],
    story: {
      challenge:
        "Take a custom-printing brand from idea to a working website in a three-day competition: identity, storefront, ordering, tracking and a staff dashboard.",
      built: [
        "The customer-facing ordering flow: five guided steps from choosing a product to uploading your own design.",
        "Social media post designs for the brand.",
        "Worked in a team of three; teammates built the staff dashboard.",
      ],
      results: [
        "1st place in the User Persona competition at Build & Brand, organised by IEEE Aswan SB.",
        "Live at yozersief.vercel.app.",
      ],
    },
    cover: { motif: "mobile", tone: "blush", image: shots.yozersiefHome },
    screenshots: [shots.yozersiefHome, shots.yozersiefOrder],
    links: { live: "https://yozersief.vercel.app/" },
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
    featured: false,
    order: 6,
    highlights: ["Mobile app + admin + landing", "Training project"],
    story: {
      challenge:
        "A concept for a real estate platform that needed three surfaces working together: a mobile app for users, an admin dashboard and a marketing landing page.",
      built: [
        "The mobile app with React Native and Expo.",
        "An admin dashboard.",
        "A Next.js landing page.",
        "A Supabase backend.",
      ],
    },
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
    technologies: ["React", "REST APIs"],
    featured: false,
    order: 7,
    highlights: ["200+ contracts managed", "Saudi client"],
    story: {
      challenge: "A real estate office needed a clear dashboard to manage its properties and contracts.",
      built: [
        "Designed and built the React frontend of a real estate and property management dashboard.",
        "Frontend–backend integration with the API built by another developer.",
      ],
      results: ["Used to manage 200+ contracts."],
    },
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
    technologies: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "dnd-kit"],
    featured: false,
    order: 8,
    highlights: ["Drag-and-drop board", "Code-reviewed PRs"],
    story: {
      challenge:
        "A project management dashboard — projects, epics, tasks and members — built from Figma designs in a team that shipped through pull requests and code review.",
      built: [
        "A task board with drag-and-drop across eight statuses; each move is saved to the server before the board updates, so it never shows a change that wasn't stored.",
        "Numbered pages on desktop and infinite scroll on mobile, from one endpoint.",
        "Epic search that runs on the server across every page, debounced to one request per pause in typing.",
        "Sign-up, login with remember-me, password reset and member invitations, plus build-time checks that stop a misconfigured deployment.",
      ],
      results: [
        "Worked in feature branches with pull requests and code review, reviewed teammates' work and gave weekly technical presentations.",
      ],
    },
    cover: { motif: "code", tone: "plum" },
    links: { github: "https://github.com/Rania614/rafiq-frontend" },
  },
];
