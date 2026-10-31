import type { BeyondItem } from "@/types/content";

/** "A Little More About Me" — edit freely; keep it personal but professional. */
export const beyond: BeyondItem[] = [
  {
    id: "creative",
    title: "Creative Exploration",
    note: "sketchbook",
    body: "Layout studies, type pairings and small visual experiments — ideas often start on paper long before they become components.",
    motif: "sketch",
  },
  {
    id: "learning",
    title: "Technical Learning",
    note: "reading list",
    body: "Going a layer deeper than the task needs: how a framework renders, how a query plans, why a pattern exists.",
    motif: "book",
  },
  {
    id: "design",
    title: "Design Inspiration",
    note: "moodboard",
    body: "Editorial magazines, fashion sites and well-crafted products — studying how restraint and detail create character.",
    motif: "palette",
  },
  {
    id: "experiments",
    title: "Personal Experiments",
    note: "side quests",
    body: "Small prototypes built just to understand something — a motion idea, an API, a different way to structure state.",
    motif: "flask",
  },
];
