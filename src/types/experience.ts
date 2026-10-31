export type ExperienceKind = "Freelance" | "Engagement" | "Education" | "Training";

export interface ExperienceItem {
  id: string;
  kind: ExperienceKind;
  title: string;
  organization: string;
  /** Display string. Use `placeholder: true` while a date is still unconfirmed. */
  period: { label: string; placeholder?: boolean };
  summary: string;
  highlights?: string[];
  technologies?: string[];
  projectSlug?: string;
}
