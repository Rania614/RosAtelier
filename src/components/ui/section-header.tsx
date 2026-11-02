import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  tone?: "dark" | "light";
  id?: string;
}

/**
 * Editorial section opener: running index + eyebrow on a hairline, then a large serif title.
 * The index ("02") ties every section into one magazine-like system.
 */
export function SectionHeader({ index, eyebrow, title, intro, className, tone = "dark", id }: Props) {
  const light = tone === "light";
  return (
    <header className={cn("grid-atelier gap-y-6", className)}>
      <div
        className={cn(
          "col-span-full flex items-center gap-4 border-t pt-4",
          light ? "border-background/20 text-background/70" : "hairline text-plum",
        )}
      >
        <span className="label-mono">{index}</span>
        <span aria-hidden className={cn("h-px w-8", light ? "bg-background/30" : "bg-mauve/50")} />
        <span className="label-mono">{eyebrow}</span>
      </div>
      <h2
        id={id}
        className={cn(
          "col-span-full font-serif text-[2.5rem] leading-[1.02] tracking-[-0.02em] md:col-span-6 md:text-[3.5rem] lg:col-span-7 lg:text-[4.5rem]",
          light ? "text-background" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <div
          className={cn(
            "col-span-full max-w-md self-end text-base leading-relaxed md:col-span-4 md:col-start-5 lg:col-span-4 lg:col-start-9",
            light ? "text-background/75" : "text-ink/70",
          )}
        >
          {intro}
        </div>
      ) : null}
    </header>
  );
}
