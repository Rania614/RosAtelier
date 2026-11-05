import { PanelsTopLeft, Workflow, DatabaseZap, Rocket, type LucideIcon } from "lucide-react";
import { getCapabilities } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  frontend: PanelsTopLeft,
  backend: Workflow,
  data: DatabaseZap,
  delivery: Rocket,
};

export async function Philosophy() {
  const capabilities = await getCapabilities();
  return (
    <section aria-labelledby="philosophy-title" className="relative py-24 md:py-32 lg:py-36">
      <div className="container-atelier">
        <SectionHeader
          id="philosophy-title"
          index="06"
          eyebrow="Engineering philosophy"
          title={
            <>
              How I Approach <span className="text-plum">Engineering</span>
            </>
          }
          intro="Four disciplines I bring together on every product — so the interface, the logic underneath and the system in production all hold up."
        />

        <ol className="mt-14 grid grid-cols-1 border-t border-ink/12 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => {
            const Icon = icons[cap.id] ?? PanelsTopLeft;
            const highlight = i === 1;
            return (
              <Reveal
                as="li"
                key={cap.id}
                delay={i * 0.06}
                className={cn(
                  "relative flex flex-col border-b border-ink/12 px-1 py-10 md:px-8 md:py-12 lg:min-h-[26rem] lg:border-b-0",
                  "md:odd:border-r lg:border-r lg:last:border-r-0 md:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r",
                  highlight && "md:bg-blush/60",
                )}
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-[2.75rem] leading-none text-plum md:text-[3.25rem]">{cap.numeral}</span>
                  <Icon aria-hidden strokeWidth={1.25} className="size-7 text-plum" />
                </div>
                <h3 className="mt-6 font-serif text-[1.625rem] md:mt-10 leading-tight tracking-[-0.01em] text-ink lg:mt-auto">
                  {cap.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/70">{cap.summary}</p>
                <ul className="mt-6 space-y-1.5 border-t border-ink/10 pt-5">
                  {cap.focus.map((f) => (
                    <li key={f} className="label-mono flex items-center gap-2 text-ink/70">
                      <span aria-hidden className="h-px w-3 bg-mauve" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
