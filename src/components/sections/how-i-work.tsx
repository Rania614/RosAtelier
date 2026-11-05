import { process } from "@/data/process";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

/** The client process: analysis and agreement come before code. */
export function HowIWork() {
  return (
    <section aria-labelledby="process-title" className="bg-surface py-24 md:py-32">
      <div className="container-atelier">
        <SectionHeader
          id="process-title"
          index="04"
          eyebrow="How I work"
          title={
            <>
              From your requirements <span className="text-plum">to the result you asked for</span>
            </>
          }
          intro="I don't start with code. I start with your business — and we agree on every step until the product does exactly what you need."
        />
        <ol className="relative mt-14 grid gap-10 md:mt-20 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <span aria-hidden className="absolute left-0 right-0 top-5 hidden h-px bg-plum/20 lg:block" />
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.06} className="relative">
              <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-plum/30 bg-surface font-mono text-sm text-plum">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-serif text-[1.375rem] leading-tight text-ink">{step.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
