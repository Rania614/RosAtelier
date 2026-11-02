import type { Testimonial } from "@/types/content";
import { getPublicTestimonials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-[22px] border border-ink/10 bg-surface p-8 md:p-10">
      <span aria-hidden className="font-serif text-[4rem] leading-[0.6] text-rose">
        &ldquo;
      </span>
      <blockquote className="mt-4 flex-1 font-serif text-[1.375rem] leading-snug text-ink">{t.quote}</blockquote>
      <figcaption className="mt-8 border-t border-ink/10 pt-5">
        <p className="font-semibold text-ink">{t.author}</p>
        <p className="label-mono mt-1 text-plum">{t.role}</p>
      </figcaption>
    </figure>
  );
}

/** Renders nothing until real, approved testimonials exist (see data/testimonials.ts). */
export async function Testimonials() {
  const items = await getPublicTestimonials();
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="kind-words-title" className="py-24 md:py-32">
      <div className="container-atelier">
        <SectionHeader
          id="kind-words-title"
          index="08"
          eyebrow="Testimonials"
          title={
            <>
              Kind Words &amp; <span className="text-plum">Collaborations</span>
            </>
          }
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 md:mt-20">
          {items.map((t, i) => (
            <Reveal as="li" key={t.id} delay={i * 0.06}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
