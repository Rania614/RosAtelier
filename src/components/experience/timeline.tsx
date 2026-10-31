import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ExperienceItem } from "@/types/experience";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** Vertical editorial timeline. Placeholder dates are visibly marked as editable. */
export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative">
      <span aria-hidden className="absolute bottom-2 left-[0.3rem] top-2 w-px bg-ink/12 md:left-[13.5rem]" />
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.id}
          delay={i * 0.04}
          className="relative grid grid-cols-1 gap-3 pb-12 pl-8 last:pb-0 md:grid-cols-[13.5rem_1fr] md:gap-0 md:pl-0"
        >
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-1.5 size-[0.65rem] rounded-full border md:left-[13.5rem] md:-translate-x-[0.3rem]",
              item.kind === "Education" || item.kind === "Training"
                ? "border-plum bg-background"
                : "border-plum bg-plum",
            )}
          />
          <div className="md:pr-10 md:text-right">
            <p
              className={cn(
                "label-mono",
                item.period.placeholder ? "inline-block rounded-sm border border-dashed border-mauve/60 px-1.5 py-0.5 text-mauve" : "text-plum",
              )}
            >
              {item.period.label}
            </p>
            <p className="label-mono mt-2 text-ink/45">{item.kind}</p>
          </div>
          <div className="md:pl-12">
            <h3 className="font-serif text-[1.5rem] leading-tight tracking-[-0.01em] text-ink md:text-[1.75rem]">
              {item.title}
            </h3>
            <p className="mt-1 text-[0.9375rem] font-medium text-ink/60">{item.organization}</p>
            <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink/75">{item.summary}</p>
            {item.technologies?.length ? (
              <p className="mt-3 font-mono text-[0.75rem] text-plum">{item.technologies.join("  /  ")}</p>
            ) : null}
            {item.projectSlug ? (
              <Link
                href={`/projects/${item.projectSlug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-plum"
              >
                <span className="link-underline">View project</span>
                <ArrowUpRight aria-hidden className="size-4" />
              </Link>
            ) : null}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
