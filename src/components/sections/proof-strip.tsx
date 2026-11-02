import Link from "next/link";
import { proof } from "@/data/proof";
import { Reveal } from "@/components/ui/reveal";

/** "Proof, not promises" — verified numbers right under the hero, each linking to its project. */
export function ProofStrip() {
  return (
    <section aria-labelledby="proof-title" className="border-y border-ink/10 bg-surface">
      <div className="container-atelier py-10 md:py-12">
        <h2 id="proof-title" className="label-mono text-plum">
          Proof, not promises
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
          {proof.map((p, i) => (
            <Reveal as="li" key={p.label} delay={i * 0.05}>
              <Link href={p.href} className="group block">
                <span className="block font-serif text-[2.75rem] leading-none tracking-[-0.02em] text-plum md:text-[3.25rem]">
                  {p.value}
                </span>
                <span className="mt-3 block text-[0.9375rem] leading-snug text-ink/80 group-hover:text-ink">{p.label}</span>
                {p.source ? <span className="label-mono mt-2 block text-ink/70">{p.source} →</span> : null}
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
