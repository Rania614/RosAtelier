import Image from "next/image";
import type { CaseStudyBlock } from "@/types/project";
import { Reveal } from "@/components/ui/reveal";
import { pad } from "@/lib/utils";

/**
 * Renders a list of flexible case-study blocks. New block types are added to the
 * `CaseStudyBlock` union and handled here — pages never change.
 */
export function CaseStudyBlocks({ blocks }: { blocks: CaseStudyBlock[] }) {
  return (
    <div className="space-y-20 md:space-y-28">
      {blocks.map((block, i) => (
        <Reveal key={block.id}>
          <section aria-labelledby={`block-${block.id}`} className="grid-atelier gap-y-6">
            <div className="col-span-full lg:col-span-4">
              <div className="flex items-center gap-3 border-t border-ink/12 pt-4 text-plum lg:sticky lg:top-28">
                <span className="label-mono text-plum">{pad(i + 1)}</span>
                <span aria-hidden className="h-px w-6 bg-mauve/50" />
                <span className="label-mono">{block.eyebrow}</span>
              </div>
            </div>
            <div className="col-span-full lg:col-span-8">
              <h2
                id={`block-${block.id}`}
                className="font-serif text-[2rem] leading-[1.08] tracking-[-0.02em] text-ink md:text-[2.75rem]"
              >
                {block.title}
              </h2>
              <div className="mt-8">
                <BlockBody block={block} />
              </div>
            </div>
          </section>
        </Reveal>
      ))}
    </div>
  );
}

function BlockBody({ block }: { block: CaseStudyBlock }) {
  switch (block.type) {
    case "text":
      return (
        <div className="max-w-2xl space-y-5 text-[1.0625rem] leading-[1.75] text-ink/75">
          {block.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      );
    case "list":
      return (
        <ul className="grid gap-px overflow-hidden rounded-[18px] border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {block.items.map((item, i) => (
            <li key={item.title} className="flex gap-4 bg-surface p-6 sm:[&:last-child:nth-child(odd)]:col-span-2">
              <span className="label-mono pt-1 text-plum">{pad(i + 1)}</span>
              <div>
                <p className="font-serif text-xl text-ink">{item.title}</p>
                {item.body ? <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink/70">{item.body}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      );
    case "pairs":
      return (
        <ol className="space-y-4">
          {block.pairs.map((pair, i) => (
            <li key={pair.challenge} className="grid overflow-hidden rounded-[18px] border border-ink/10 md:grid-cols-2">
              <div className="bg-blush/60 p-6 md:p-7">
                <p className="label-mono text-plum">Challenge {pad(i + 1)}</p>
                <p className="mt-3 font-serif text-[1.25rem] leading-snug text-ink">{pair.challenge}</p>
              </div>
              <div className="bg-surface p-6 md:p-7">
                <p className="label-mono text-plum">Solution</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">{pair.solution}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "architecture":
      return (
        <div>
          <ol className="relative space-y-3">
            {block.layers.map((layer, i) => (
              <li
                key={layer.name}
                className="relative flex flex-col gap-1 rounded-[14px] border border-ink/10 bg-surface px-6 py-5 sm:flex-row sm:items-center sm:gap-6"
                style={{ marginLeft: `${Math.min(i, 3) * 4}%` }}
              >
                <span className="label-mono w-28 shrink-0 text-plum">{layer.name}</span>
                <span className="text-[0.9375rem] text-ink/75">{layer.detail}</span>
                {i < block.layers.length - 1 ? (
                  <span aria-hidden className="absolute -bottom-3 left-10 z-10 h-3 w-px bg-mauve" />
                ) : null}
              </li>
            ))}
          </ol>
          {block.note ? <p className="label-mono mt-5 text-ink/70">{block.note}</p> : null}
        </div>
      );
    case "gallery":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {block.images.map((img) => (
            <figure key={img.src}>
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="rounded-[18px] border border-ink/10" />
              {img.caption ? <figcaption className="label-mono mt-3 text-ink/70">{img.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      );
    case "placeholder":
      return (
        <div className="flex items-center gap-4 rounded-[18px] border border-dashed border-mauve/50 bg-blush/30 px-6 py-8">
          <span aria-hidden className="font-serif text-3xl text-rose">✦</span>
          <p className="text-[0.9375rem] text-ink/70">{block.note}</p>
        </div>
      );
  }
}
