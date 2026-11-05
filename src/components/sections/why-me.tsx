import { reasons } from "@/data/proof";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { HireCards } from "./hire-cards";

export function WhyMe() {
  return (
    <section aria-labelledby="why-title" className="pb-24 md:pb-32">
      <div className="container-atelier">
        <SectionHeader
          id="why-title"
          index="05"
          eyebrow="Why work with me"
          title={
            <>
              What you get when <span className="text-plum">we work together</span>
            </>
          }
          intro="Whether you're hiring for your team or need a product built — here's what I bring, backed by real projects."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-[22px] border border-ink/10 bg-ink/10 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 0.05} className="flex flex-col bg-surface p-7 md:p-8">
              <span className="font-mono text-[0.75rem] text-plum">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-serif text-[1.5rem] leading-tight text-ink">{r.title}</h3>
              <p className="mt-3 flex-1 text-[0.9875rem] leading-relaxed text-ink/75">{r.body}</p>
              <p className="label-mono mt-6 border-t border-ink/10 pt-4 text-plum">Proof: {r.proof}</p>
            </Reveal>
          ))}
          <Reveal as="li" delay={0.25} className="flex flex-col justify-between bg-plum p-7 text-background md:p-8">
            <p className="font-serif text-[1.75rem] leading-tight">Let&apos;s build your next product.</p>
            <p className="mt-3 text-[0.9875rem] leading-relaxed text-background/80">
              Tell me what you need — I&apos;ll reply with how I&apos;d approach it.
            </p>
            <a
              href="/contact?type=freelance"
              className="mt-6 inline-flex h-11 w-fit items-center rounded-full bg-background px-5 text-sm font-semibold text-ink transition-colors hover:bg-blush"
            >
              Start a project →
            </a>
          </Reveal>
        </ol>
        <HireCards className="mt-6" />
      </div>
    </section>
  );
}
