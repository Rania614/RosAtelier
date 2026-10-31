# Rosé Atelier — Rania Abdelnasser

Personal portfolio for **Rania Abdelnasser, Software Engineer**. It's an editorial, feminine and technically credible site built with Next.js.

## Stack

- **Next.js 16** (App Router, Cache Components, Partial Prefetching) · **React 19** · **TypeScript (strict)**
- **Tailwind CSS v4**: design tokens live in `src/app/globals.css`
- **Motion** (`motion/react`) for entrance and hover motion, honouring `prefers-reduced-motion`
- **React Hook Form + Zod** for the contact form
- **Lucide** for UI icons, **simple-icons** for monochrome technology logos
- Self-hosted fonts: Playfair Display, Manrope and Geist Mono (no font CDN needed at build time)

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

Requires Node.js 20.9 or newer.

## Routes

| Route | What it is |
| --- | --- |
| `/` | Homepage: hero, statement, selected work, philosophy, stack, journey, beyond the code, testimonials (hidden until real), contact |
| `/projects` | All projects, with category filters and search kept in the URL (`?category=Frontend&q=react`) |
| `/projects/[slug]` | Case-study template (statically generated for every project) |
| `/about` | Introduction, philosophy, story, interests, education, certifications, goals |
| `/experience` | Full timeline |
| `/contact` | Validated contact form |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | SEO |

## Editing guide: where the content lives

All content is kept separate from presentation. **You should never need to edit a component to change text.**

| What | File |
| --- | --- |
| Name, title, email, socials, availability, résumé path, portrait, SEO | `src/config/site.ts` |
| Projects and case studies | `src/data/projects.ts` |
| Experience timeline | `src/data/experience.ts` |
| Tech stack and engineering capabilities | `src/data/skills.ts` |
| "A Little More About Me" cards | `src/data/beyond.ts` |
| About page text | `src/data/about.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Navigation | `src/data/navigation.ts` |

Components read data only through `src/lib/data.ts`. When the custom CMS (Next.js + Prisma + PostgreSQL + Cloudinary) arrives, swap those function bodies for database queries. The types in `src/types/*` already match a database-backed model (slugs, `featured`, `order`, flexible case-study blocks).

### Adding a project

1. Add an entry to `src/data/projects.ts` with a unique `slug`, `order` and `featured` flag.
2. Pick a placeholder cover `motif` (`journal`, `dashboard`, `clinic`, `mobile`, `property`, `code`) and `tone` (`ivory`, `blush`, `plum`), or add a real screenshot with `cover.image`.
3. Optionally add `caseStudy.blocks`. Block types are `text`, `list`, `pairs` (challenge/solution), `architecture`, `gallery` and `placeholder`. A project without a case study automatically gets a short page built from its verified fields.
4. Only set `links.live` and `links.github` to real public URLs.

## Placeholders to replace before launch

| Item | Where | Status |
| --- | --- | --- |
| Portrait | add `public/images/portrait.jpg` (4:5) and set `portrait` in `src/config/site.ts` | editorial placeholder renders |
| Résumé | replace `public/resume.pdf` | clearly labelled placeholder PDF |
| Contact email | `email` in `src/config/site.ts` | `hello@example.com` |
| Production domain | `seo.siteUrl` in `src/config/site.ts` | example domain |
| Contact form delivery | set `NEXT_PUBLIC_CONTACT_ENDPOINT` (an endpoint that accepts JSON POST) | until set, the form says honestly that it isn't connected and offers a pre-filled email instead |
| Freelance and ITI dates | `src/data/experience.ts` (`placeholder: true`) | shown as "Dates to confirm" with a dashed marker |
| Certifications | `src/data/about.ts` | marked "to be added" |
| Project screenshots | `cover.image` and `gallery` blocks | illustrated placeholder covers |
| Pinnacle results and impact | `src/data/projects.ts` | placeholder block; add only verified outcomes |
| Testimonials | `src/data/testimonials.ts` | placeholders never render; set `placeholder: false` only for real, approved quotes |

## Design system notes

- Palette (fixed): `#FAF7F4` background · `#FFFFFF` surface · `#F1E5E3` blush · `#D7B4B5` dusty rose · `#A87985` muted mauve · `#75536B` deep plum · `#342B33` ink plum. Use opacity for tints (`text-ink/70`) instead of adding new hues.
- Grid: 4 columns on mobile, 8 on tablet and 12 on desktop (`grid-atelier` utility).
- Each homepage section opens with a numbered mono label and a hairline (`SectionHeader`). This shared running index is what gives the site its magazine rhythm.
- Motion: 300–600 ms using the `ease-atelier` easing, entrance and hover only. Nothing loops.
"# Ros-Atelier" 
