/**
 * Central site configuration.
 * ────────────────────────────────────────────────────────────────
 * Everything personal (name, links, availability, SEO) lives here.
 * Values marked `TODO` are placeholders — replace them before launch.
 */

export const siteConfig = {
  wordmark: "Rania",
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

  email: "raniaabdelnasser93@gmail.com",

  /** Shown on the Contact page and in the contact section. `href` is the international tel: link. */
  phone: { display: "+20 115 301 0263", href: "tel:+201153010263" },

  /** Résumé PDF served from /public. Replace the file (same name) to update it. */
  resumeUrl: "/resume.pdf",

  /** Hero portrait (4:5). Set to `null` to show the editorial placeholder instead. */
  portrait: "/images/portrait-nile.jpg" as string | null,

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
