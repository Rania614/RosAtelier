import type { Testimonial } from "@/types/content";

/**
 * Testimonials.
 * Placeholders are NEVER rendered publicly — the section hides itself until at least one
 * entry has `placeholder: false`. Add only real, approved words with the person's consent.
 */
export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    quote: "[Placeholder] A short, real quote from a client or collaborator goes here.",
    author: "[Name]",
    role: "[Role, Company]",
    placeholder: true,
  },
  {
    id: "placeholder-2",
    quote: "[Placeholder] A second real quote, approved by its author.",
    author: "[Name]",
    role: "[Role, Company]",
    placeholder: true,
  },
];
