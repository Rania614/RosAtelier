/**
 * Central site configuration.
 * ────────────────────────────────────────────────────────────────
 * Everything personal (name, links, availability, SEO) lives here.
 * Values marked `TODO` are placeholders — replace them before launch.
 */

export const siteConfig = {
  brand: "Rosé Atelier",
  wordmark: "rania",
  name: "Rania Abdelnasser",
  title: "Software Engineer",
  discipline: "Full-Stack Development",
  location: "Egypt",
  brandStatement: "An imaginative mind. An engineering mindset. A world of possibilities.",

  availability: {
    isAvailable: true,
    short: "Available for work",
    long: "Open to remote opportunities and freelance collaborations.",
  },

  // TODO: replace with your real contact address before publishing.
  email: "hello@example.com",

  /** Résumé PDF served from /public. Replace the file (same name) to update it. */
  resumeUrl: "/resume.pdf",

  /**
   * TODO: drop a portrait at /public/images/portrait.jpg (4:5, at least 1200×1500)
   * and set this to "/images/portrait.jpg". While `null`, an editorial placeholder renders.
   */
  portrait: null as string | null,

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rania-abdelnasser" },
    { label: "GitHub", href: "https://github.com/Rania614" },
  ],

  seo: {
    siteUrl: "https://rosatelier.vercel.app",
    defaultTitle: "Rania Abdelnasser — Software Engineer",
    titleTemplate: "%s — Rania Abdelnasser",
    description:
      "Rania Abdelnasser is a software engineer in Egypt building scalable web applications, robust backend systems and thoughtful digital products.",
    locale: "en_US",
  },
} as const;

export type SiteConfig = typeof siteConfig;
