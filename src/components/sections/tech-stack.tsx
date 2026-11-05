import { getTechStack } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { TechIcon } from "@/components/ui/tech-icon";
import { pad } from "@/lib/utils";

export async function TechStack() {
  const groups = await getTechStack();
  return (
    <section aria-labelledby="stack-title" className="py-24 md:py-32 lg:py-36">
      <div className="container-atelier">
        <div className="grid-atelier gap-y-12">
          <div className="col-span-full lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-4 border-t border-ink/12 pt-4 text-plum">
                <span className="label-mono">07</span>
                <span aria-hidden className="h-px w-8 bg-mauve/50" />
                <span className="label-mono">Tech stack</span>
              </div>
              <h2
                id="stack-title"
                className="mt-6 font-serif text-[2.5rem] leading-[1.02] tracking-[-0.02em] text-ink md:text-[3.5rem]"
              >
                Tools of the <span className="text-plum">craft</span>
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-ink/70">
                The technologies I reach for day to day — chosen for reliability, clarity and how well they serve the
                product. I use AI tools to move faster, and review every line they suggest before it ships.
              </p>
            </div>
          </div>

          <dl className="col-span-full lg:col-span-8 lg:col-start-5">
            {groups.map((group, i) => (
              <Reveal
                key={group.category}
                delay={i * 0.04}
                className="grid grid-cols-1 gap-4 border-t border-ink/12 py-6 last:border-b sm:grid-cols-[11rem_1fr] sm:items-center md:py-7"
              >
                <dt className="flex items-baseline gap-3">
                  <span className="label-mono text-plum">{pad(i + 1)}</span>
                  <span className="font-serif text-[1.375rem] text-ink">{group.category}</span>
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-x-2 gap-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-surface py-2 pl-2.5 pr-4 text-[0.9375rem] font-medium text-ink transition-colors duration-300 hover:border-plum/40 hover:bg-blush/50"
                      >
                        <span className="flex size-7 items-center justify-center rounded-full bg-blush text-plum">
                          <TechIcon name={item.icon} className="size-3.5" />
                        </span>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
