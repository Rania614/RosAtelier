import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

/** Left label / right content row used throughout the About page. */
export function AboutRow({ index, label, title, children }: { index: string; label: string; title?: ReactNode; children: ReactNode }) {
  return (
    <Reveal>
      <section className="grid-atelier gap-y-6 border-t border-ink/12 py-14 md:py-20">
        <div className="col-span-full lg:col-span-4">
          <p className="flex items-center gap-3 text-plum">
            <span className="label-mono text-plum">{index}</span>
            <span aria-hidden className="h-px w-6 bg-mauve/50" />
            <span className="label-mono">{label}</span>
          </p>
        </div>
        <div className="col-span-full lg:col-span-8">
          {title ? (
            <h2 className="mb-8 font-serif text-[2rem] leading-[1.08] tracking-[-0.02em] text-ink md:text-[2.75rem]">{title}</h2>
          ) : null}
          {children}
        </div>
      </section>
    </Reveal>
  );
}
