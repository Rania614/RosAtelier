import type { BeyondItem } from "@/types/content";
import { getBeyond } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const styles = [
  { card: "bg-surface", rotate: "lg:-rotate-[1.4deg]", offset: "" },
  { card: "bg-blush", rotate: "lg:rotate-[1.2deg]", offset: "lg:mt-16" },
  { card: "bg-plum text-background", rotate: "lg:-rotate-[0.8deg]", offset: "lg:mt-4" },
  { card: "bg-surface", rotate: "lg:rotate-[1.6deg]", offset: "lg:mt-20" },
];

export async function BeyondCode() {
  const items = await getBeyond();
  return (
    <section aria-labelledby="beyond-title" className="overflow-hidden py-24 md:py-32 lg:py-36">
      <div className="container-atelier">
        <SectionHeader
          id="beyond-title"
          index="07"
          eyebrow="Beyond the code"
          title={
            <>
              A Little More <em className="italic text-plum">About Me</em>
            </>
          }
          intro="The curiosity that happens between projects — and quietly shapes the work."
        />

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-7">
          {items.map((item, i) => {
            const s = styles[i % styles.length];
            const dark = s.card.includes("bg-plum");
            return (
              <Reveal as="li" key={item.id} delay={i * 0.06} className={cn(s.offset)}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-[18px] border p-7 shadow-[0_24px_50px_-40px_rgba(52,43,51,.5)] transition-transform duration-500 ease-atelier hover:rotate-0",
                    dark ? "border-transparent" : "border-ink/8",
                    s.card,
                    s.rotate,
                  )}
                >
                  {/* washi tape */}
                  <span
                    aria-hidden
                    className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-3deg] rounded-[3px] bg-rose/60"
                  />
                  <BeyondMotif motif={item.motif} className={dark ? "text-rose" : "text-mauve"} />
                  <p className={cn("mt-8 font-serif text-[0.95rem] italic", dark ? "text-rose" : "text-mauve")}>
                    — {item.note}
                  </p>
                  <h3 className="mt-2 font-serif text-[1.5rem] leading-tight tracking-[-0.01em]">{item.title}</h3>
                  <p className={cn("mt-3 text-[0.9375rem] leading-relaxed", dark ? "text-background/80" : "text-ink/70")}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function BeyondMotif({ motif, className }: { motif: BeyondItem["motif"]; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg aria-hidden viewBox="0 0 64 48" className={cn("h-12 w-16", className)}>
      {motif === "sketch" && (
        <g {...common}>
          <path d="M4 38c8-14 14-22 22-18s4 14 12 12 10-16 22-20" />
          <path d="M44 6l8 8-20 20-10 2 2-10Z" />
        </g>
      )}
      {motif === "book" && (
        <g {...common}>
          <path d="M6 10c8-3 18-3 26 3 8-6 18-6 26-3v30c-8-3-18-3-26 3-8-6-18-6-26-3Z" />
          <path d="M32 13v30M12 18h12M12 24h10M40 18h12M40 24h8" />
        </g>
      )}
      {motif === "palette" && (
        <g {...common}>
          <path d="M32 6C18 6 8 15 8 26s9 16 16 16c4 0 5-3 4-6s1-6 5-6h7c8 0 16-4 16-11C56 12 45 6 32 6Z" />
          <circle cx="20" cy="22" r="2.5" />
          <circle cx="30" cy="15" r="2.5" />
          <circle cx="42" cy="17" r="2.5" />
        </g>
      )}
      {motif === "flask" && (
        <g {...common}>
          <path d="M26 6h12M28 6v12L16 40c-1 3 1 4 4 4h24c3 0 5-1 4-4L36 18V6" />
          <path d="M21 32h22" />
          <circle cx="29" cy="37" r="1.5" />
          <circle cx="37" cy="27" r="1" />
        </g>
      )}
    </svg>
  );
}
