import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { pad } from "@/lib/utils";

interface Props {
  id: string;
  index: number;
  eyebrow: string;
  title: string;
  /** Short helper line under the title. */
  note?: string;
  children: ReactNode;
}

/**
 * One section of a project page. Every section shares the same rhythm:
 * a numbered label on the left, a serif heading and the content on the right.
 */
export function ProjectSection({ id, index, eyebrow, title, note, children }: Props) {
  return (
    <Reveal>
      <section aria-labelledby={`${id}-title`} className="grid-atelier gap-y-6">
        <div className="col-span-full lg:col-span-4">
          <div className="flex items-center gap-3 border-t border-ink/12 pt-4 text-plum lg:sticky lg:top-28">
            <span className="label-mono">{pad(index)}</span>
            <span aria-hidden className="h-px w-6 bg-mauve/50" />
            <span className="label-mono">{eyebrow}</span>
          </div>
        </div>
        <div className="col-span-full lg:col-span-8">
          <h2
            id={`${id}-title`}
            className="font-serif text-[1.875rem] leading-[1.12] tracking-[-0.015em] text-ink md:text-[2.375rem]"
          >
            {title}
          </h2>
          {note ? <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink/65">{note}</p> : null}
          <div className="mt-8 md:mt-10">{children}</div>
        </div>
      </section>
    </Reveal>
  );
}
