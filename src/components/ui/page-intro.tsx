import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/** Opening masthead for inner pages. */
export function PageIntro({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 md:pb-20 md:pt-44">
      <div aria-hidden className="pointer-events-none absolute -right-[15%] -top-[30%] h-[120%] w-[55%] rounded-full bg-blush/60 blur-[120px]" />
      <div className="container-atelier relative">
        <Reveal y={10} className="flex items-center gap-4 text-plum">
          <span className="label-mono text-plum">{eyebrow}</span>
          <span aria-hidden className="h-px w-10 bg-mauve/50" />
          <span className="label-mono">Rosé Atelier</span>
        </Reveal>
        <div className="grid-atelier mt-6 items-end gap-y-8">
          <Reveal className="col-span-full lg:col-span-8">
            <h1 className="font-serif text-[3rem] leading-[1.04] tracking-[-0.02em] text-ink md:text-[5rem] lg:text-[6rem]">
              {title}
            </h1>
          </Reveal>
          {intro ? (
            <Reveal delay={0.1} className="col-span-full md:col-span-5 lg:col-span-4">
              <div className="text-[1.0625rem] leading-relaxed text-ink/70">{intro}</div>
            </Reveal>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
