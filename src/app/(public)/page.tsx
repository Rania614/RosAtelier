import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { ProofStrip } from "@/components/sections/proof-strip";
import { WhyMe } from "@/components/sections/why-me";
import { SelectedWork } from "@/components/sections/selected-work";
import { Philosophy } from "@/components/sections/philosophy";
import { TechStack } from "@/components/sections/tech-stack";
import { Journey } from "@/components/sections/journey";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactBand } from "@/components/sections/contact-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Statement />
      <SelectedWork />
      <WhyMe />
      <Philosophy />
      <TechStack />
      <Journey />
      <Testimonials />
      <ContactBand index="08" />
    </>
  );
}
