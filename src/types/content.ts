export interface Capability {
  id: string;
  numeral: string;
  title: string;
  summary: string;
  focus: string[];
}

export interface TechItem {
  name: string;
  /** Key into the icon map in components/ui/tech-icon.tsx */
  icon: string;
}

export interface TechGroup {
  category: string;
  items: TechItem[];
}

export interface BeyondItem {
  id: string;
  title: string;
  note: string;
  body: string;
  motif: "sketch" | "book" | "palette" | "flask";
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  /** Placeholders never render publicly. Set to false only for real, approved quotes. */
  placeholder: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
