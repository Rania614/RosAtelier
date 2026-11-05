import type { Project, ProjectImage } from "@/types/project";

/**
 * Screenshots of the live, public pages (captured Nov 2026 from the URLs below).
 * Only public pages — nothing behind a login, no client data.
 */
const shots = {
  pinnacleHome: {
    src: "/images/projects/pinnacle-academic-publishing/full-page.jpg",
    alt: "Pinnacle Academic Publishing homepage, full page: hero, the two journals, about the publisher and the submission portal",
    width: 1440,
    height: 2827,
    caption: "Public homepage",
    source: "https://pinnacle-academic.com/",
    fullPage: true,
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
    src: "/images/projects/hixa/platform-full-page.jpg",
    alt: "HIXA platform page in Arabic, full page: hero, the community of partners, experts and clients, and FAQs",
    width: 1440,
    height: 2349,
    caption: "Platform page",
    source: "https://hixa.com.sa/platform",
    fullPage: true,
  },
  ayadiHome: {
    src: "/images/projects/ayadi-al-khair/mobile-mockup.jpg",
    alt: "Ayadi Al-Khair on two phones: the Arabic homepage and the care services section",
    width: 1600,
    height: 1200,
    caption: "Public homepage on mobile",
    mockup: true,
  },
  ayadiMobile2: {
    src: "/images/projects/ayadi-al-khair/mobile-mockup-2.jpg",
    alt: "Ayadi Al-Khair on two phones: the Arabic sign-up form and the admin navigation menu",
    width: 1600,
    height: 1200,
    caption: "Sign-up and admin menu on mobile",
    mockup: true,
  },
  yozersiefHome: {
    src: "/images/projects/yozersief/full-page.jpg",
    alt: "Yozersief homepage in Arabic, full page: hero, products, why choose us, how ordering works, gallery and testimonials",
    width: 1440,
    height: 5012,
    caption: "Public homepage",
    source: "https://yozersief.vercel.app/",
    fullPage: true,
  },
  yozersiefOrder: {
    src: "/images/projects/yozersief/order.jpg",
    alt: "Yozersief five-step order flow, step one: choosing who the order is for and which product to print",
    width: 792,
    height: 495,
    caption: "Ordering flow — step 1 of 5",
    source: "https://yozersief.vercel.app/order",
  },
  propertyOverview: {
    src: "/images/projects/property-management-system/overview.jpg",
    alt: "Property management system overview in Arabic: the six main modules — dashboard, properties, contracts, entitlements, collection and accounting, users",
    width: 1600,
    height: 1000,
    caption: "Overview of the six modules",
    mockup: true,
  },
  propertyDashboard: {
    src: "/images/projects/property-management-system/dashboard.jpg",
    alt: "Property management dashboard in Arabic: total properties, active contracts, open enforcement cases, collection rate, amounts due vs collected and a collection progress bar",
    width: 1600,
    height: 1000,
    caption: "Dashboard",
  },
  propertyProperties: {
    src: "/images/projects/property-management-system/properties.jpg",
    alt: "Properties screen in Arabic: unit totals, filters by property name, type and owner, and a table with national short address codes and unit breakdowns",
    width: 1600,
    height: 1178,
    caption: "Properties",
  },
  propertyContracts: {
    src: "/images/projects/property-management-system/contracts.jpg",
    alt: "Contracts screen in Arabic: contract totals, filters by property, unit and tenant, and a table with late amounts, grace periods, Hijri dates and status tags",
    width: 1600,
    height: 1311,
    caption: "Contracts",
  },
  propertyEntitlements: {
    src: "/images/projects/property-management-system/entitlements.jpg",
    alt: "Entitlements schedule in Arabic: office commission, service fees, pre-contract rent and net rent per contract, grouped by colour",
    width: 1600,
    height: 1111,
    caption: "Entitlements schedule",
  },
  propertyCollection: {
    src: "/images/projects/property-management-system/collection.jpg",
    alt: "Collection and accounting screen in Arabic: total arrears, total due, late contracts and inline entry of payment date and collected amount per unit",
    width: 1600,
    height: 1111,
    caption: "Collection & accounting",
  },
  propertyUsers: {
    src: "/images/projects/property-management-system/users.jpg",
    alt: "Users screen in Arabic: invite users, owner and accountant counts, pending invitations and a users table with roles and attached documents",
    width: 1600,
    height: 1000,
    caption: "Users & invitations",
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
    order: 3,
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
    features: [
      {
        title: "Two journals, one submission portal",
        body: "Both journals run on a single shared submission and peer-review portal; the “Submit Manuscript” button pre-selects the right journal, so there is one system to maintain instead of two.",
        skills: ["System design", "Reusable architecture"],
      },
      {
        title: "A six-step submission wizard",
        body: "Authors submit through six guided steps instead of one long form, then follow their manuscript's status as it moves through review.",
        skills: ["Multi-step forms", "React", "UX flow"],
      },
      {
        title: "Fair pricing applied automatically",
        body: "Authors from low- and middle-income countries get a 70% APC discount, assessed automatically during submission — a business rule handled in the product, not by email.",
        skills: ["Business logic", "Payments"],
      },
      {
        title: "Four roles on the same manuscript",
        body: "Author, Editor, Reviewer and Admin each get their own workspace and permissions, while the manuscript's journey stays consistent from submission to publication.",
        skills: ["RBAC", "Node.js", "Prisma", "PostgreSQL"],
      },
      {
        title: "Editors manage content without a developer",
        body: "Admins manage articles with PDF upload and keep each journal's Editor-in-Chief profile up to date themselves.",
        skills: ["Admin tooling", "File upload"],
      },
      {
        title: "Integrated with the services publishing needs",
        body: "Crossref/DOI for published articles, a payment gateway and SMTP email through Nodemailer.",
        skills: ["Third-party APIs", "Express.js"],
      },
      {
        title: "Kept it dependable in production",
        body: "Audited the live platform, fixed 20+ production bugs and kept improving the UI/UX under a monthly maintenance contract.",
        skills: ["Debugging", "Production support"],
      },
    ],
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
    order: 2,
    features: [
      {
        title: "Working days are counted for you",
        body: "The leave request calculates working days on its own, leaving out weekends and official holidays, so employees don't do the maths and HR doesn't correct it.",
        skills: ["Business rules", "Form design"],
      },
      {
        title: "Managers see conflicts before they approve",
        body: "Before approving, the direct manager sees who in the team is already off in the same period, plus the employee's balance before and after the request.",
        skills: ["Decision support", "Information hierarchy"],
      },
      {
        title: "Everyone knows where a request stands",
        body: "A request timeline — submitted, under manager review, employee notified — removes the “did anyone see my request?” messages.",
        skills: ["User flows", "Status design"],
      },
      {
        title: "Four roles, one consistent system",
        body: "A permissions matrix defines what Admin, HR Manager, Direct Manager and Employee can do, and the interface adapts to each role from one component library.",
        skills: ["RBAC design", "Design systems", "Auto Layout"],
      },
      {
        title: "Every state is designed, not just the happy path",
        body: "Sign-in covers validation, error, success and loading states; password reset enforces strength rules; the prototype has role shortcuts so a reviewer can try every flow in minutes.",
        skills: ["Edge cases", "Prototyping", "Arabic RTL"],
      },
    ],
    cover: { motif: "dashboard", tone: "blush", image: shots.hrmsLeaveManagement },
    screensSource: "design",
    screenshots: [
      shots.hrmsLeaveManagement,
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
    order: 7,
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
    features: [
      {
        title: "Four users, four workspaces",
        body: "Admin, Engineer, Client and Company each get a dashboard built around their own tasks instead of one crowded screen for everyone.",
        skills: ["Information architecture", "React"],
      },
      {
        title: "Integrated with another developer's API",
        body: "Connected the frontend to a backend built by another developer, working from the API to keep both sides in sync.",
        skills: ["REST APIs", "Collaboration"],
      },
      {
        title: "The public face, too",
        body: "Designed and built the landing page that presents the platform, live at hixa.com.sa.",
        skills: ["UI design", "Frontend"],
      },
    ],
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
    order: 4,
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
    features: [
      {
        title: "Each role sees only its own work",
        body: "Role-based access for Administrator, Doctor, Medical Reviewer and Employee. Admins get patients, team, requests, appointments, employee orders and permissions, finance, notifications, archive and settings in one menu.",
        skills: ["RBAC", "Express.js", "Prisma"],
      },
      {
        title: "Data is checked before it reaches the team",
        body: "Sign-up validates a 14-digit national ID and a password of at least 8 characters, so staff don't spend time on incomplete or mistyped records.",
        skills: ["Form validation", "TypeScript"],
      },
      {
        title: "Made for people on their phones",
        body: "On mobile, a bottom bar puts location, WhatsApp and inquiries one tap away — the actions patients and their families need most.",
        skills: ["Responsive design", "Mobile UX"],
      },
      {
        title: "Built end to end, Arabic-first",
        body: "Frontend and backend — React, TypeScript, Express.js, Prisma and PostgreSQL — with a right-to-left Arabic interface.",
        skills: ["Full-stack", "Arabic RTL", "PostgreSQL"],
      },
    ],
    cover: { motif: "clinic", tone: "blush", image: shots.ayadiHome },
    screenshots: [shots.ayadiHome, shots.ayadiMobile2],
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
    order: 1,
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
    features: [
      {
        title: "A five-step order flow that doesn't lose your work",
        body: "Choosing, details, design, your info, review — the order is split into five guided steps, and what the customer enters is kept while they move back and forth between steps.",
        skills: ["Multi-step forms", "State management", "UX flow"],
      },
      {
        title: "Customers upload their own design",
        body: "The flow lets a customer pick a product and attach their own artwork, so a custom-print order can be placed without a back-and-forth on WhatsApp.",
        skills: ["File upload", "Next.js", "TypeScript"],
      },
      {
        title: "From idea to live site in three days",
        body: "Built with a team of three under competition deadlines, splitting the work so the storefront and the staff dashboard could ship together — and won first place.",
        skills: ["Teamwork", "Shipping under pressure", "Git"],
      },
    ],
    cover: { motif: "mobile", tone: "blush", image: shots.yozersiefHome },
    screenshots: [shots.yozersiefHome, shots.yozersiefOrder],
    links: { live: "https://yozersief.vercel.app/" },
  },
  // Nuzzul is hidden for now. To show it again, remove the "// " in front of each line below.
  // {
  //   slug: "nuzzul",
  //   name: "Nuzzul",
  //   tagline: "A real estate platform concept — mobile app and admin dashboard.",
  //   description:
  //     "A real estate platform concept built as a training project: a React Native mobile application with an admin dashboard and a Next.js landing page, backed by Supabase.",
  //   category: "Mobile",
  //   context: "Training project",
  //   role: "Mobile & Frontend Developer",
  //   technologies: ["React Native", "Expo", "Supabase", "Next.js"],
  //   featured: false,
  //   order: 6,
  //   highlights: ["Mobile app + admin + landing", "Training project"],
  //   story: {
  //     challenge:
  //       "A concept for a real estate platform that needed three surfaces working together: a mobile app for users, an admin dashboard and a marketing landing page.",
  //     built: [
  //       "The mobile app with React Native and Expo.",
  //       "An admin dashboard.",
  //       "A Next.js landing page.",
  //       "A Supabase backend.",
  //     ],
  //   },
  //   cover: { motif: "mobile", tone: "blush" },
  //   links: {},
  // },
  {
    slug: "property-management-system",
    name: "Property Management System",
    tagline: "A property, contracts and collection dashboard for a Saudi real estate office.",
    description:
      "A real estate and property management system. I designed and built the frontend and handled its integration with the backend, which was developed by another engineer.",
    category: "Frontend",
    context: "Freelance · Saudi client",
    role: "Frontend Developer (Freelance)",
    period: "Jan 2026 — Apr 2026",
    technologies: ["React", "REST APIs"],
    featured: false,
    order: 6,
    highlights: ["200+ contracts managed", "Saudi client", "Designed with the client"],
    story: {
      challenge:
        "A real estate office in Saudi Arabia needed one place to manage properties, units, owners and contracts, and to follow entitlements, monthly collection and enforcement cases.",
      built: [
        "Designed the screens and refined them with the client until they matched how the office works.",
        "Built the React frontend: dashboard, properties, contracts, entitlements, collection and accounting, and users.",
        "Frontend–backend integration with the API built by another developer.",
      ],
      results: ["Used to manage 200+ contracts."],
    },
    features: [
      {
        title: "The numbers the owner asks about, first",
        body: "The dashboard opens on what matters: properties, active contracts, open enforcement cases, collection rate, and amounts due vs collected with a progress bar for what's left.",
        skills: ["Dashboard design", "Data visualisation"],
      },
      {
        title: "Find any contract in seconds",
        body: "Contracts can be searched and filtered by property, unit number and tenant. Late amounts stand out in red, and status tags flag expired contracts and enforcement cases.",
        skills: ["Search & filters", "Tables", "UX"],
      },
      {
        title: "Built for how a Saudi office works",
        body: "Hijri dates alongside Gregorian ones, grace periods per contract, amounts in riyal and each property's national short address code.",
        skills: ["Localisation", "Arabic RTL", "Business analysis"],
      },
      {
        title: "A complex fee schedule, made readable",
        body: "The entitlements schedule breaks every contract into office commission, service fees, pre-contract rent and net rent, with colour-grouped columns so a wide table stays easy to scan.",
        skills: ["Data-heavy UI", "Information hierarchy"],
      },
      {
        title: "Record payments where you see them",
        body: "Accountants enter the payment date and collected amount right in the collection table, next to totals for arrears and late contracts.",
        skills: ["Inline editing", "Forms"],
      },
      {
        title: "Invite the team with the right role",
        body: "Users are invited by email as owners, accountants or admins, with pending invitations tracked and ID numbers masked on screen.",
        skills: ["RBAC", "Privacy by design"],
      },
      {
        title: "Shaped with the client, screen by screen",
        body: "I kept refining the screens with the client until the design fit their real needs — then built it in React and integrated it with the backend.",
        skills: ["Client collaboration", "Iteration", "REST APIs"],
      },
    ],
    cover: { motif: "property", tone: "ivory", image: shots.propertyDashboard },
    screensSource: "app",
    screenshots: [
      shots.propertyDashboard,
      shots.propertyOverview,
      shots.propertyContracts,
      shots.propertyEntitlements,
      shots.propertyCollection,
      shots.propertyProperties,
      shots.propertyUsers,
    ],
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
    order: 5,
    highlights: ["Drag-and-drop board", "Code-reviewed PRs"],
    story: {
      challenge:
        "A project management dashboard — projects, epics, tasks and members — built from Figma designs in a team that shipped through pull requests and code review.",
      built: [
        "A project management dashboard in Next.js, TypeScript, Redux Toolkit and Tailwind CSS, built from Figma designs.",
        "A drag-and-drop task board, responsive pagination, server-side search and complete account flows.",
      ],
      results: [
        "Worked in feature branches with pull requests and code review, reviewed teammates' work and gave weekly technical presentations.",
      ],
    },
    features: [
      {
        title: "A board that never lies",
        body: "Tasks drag and drop across eight statuses, and each move is saved to the server before the board updates — so it never shows a change that wasn't stored.",
        skills: ["dnd-kit", "Redux Toolkit", "Data consistency"],
      },
      {
        title: "Right pagination for each screen",
        body: "Numbered pages on desktop and infinite scroll on mobile, both from the same endpoint.",
        skills: ["Responsive UX", "API design"],
      },
      {
        title: "Search that doesn't flood the server",
        body: "Epic search runs on the server across every page and is debounced to one request per pause in typing.",
        skills: ["Performance", "Debouncing"],
      },
      {
        title: "Mistakes caught before deployment",
        body: "Environment variables are validated at build time, so a misconfigured deployment fails early instead of breaking in production.",
        skills: ["Build tooling", "Reliability"],
      },
      {
        title: "Complete account flows",
        body: "Sign-up, login with remember-me, password reset and member invitations.",
        skills: ["Authentication", "Next.js"],
      },
    ],
    cover: { motif: "code", tone: "plum" },
    links: { github: "https://github.com/Rania614/rafiq-frontend" },
  },
];
