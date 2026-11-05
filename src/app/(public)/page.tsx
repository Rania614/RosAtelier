import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { ProofStrip } from "@/components/sections/proof-strip";
import { WhyMe } from "@/components/sections/why-me";
import { HowIWork } from "@/components/sections/how-i-work";
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
      <HowIWork />
      <WhyMe />
      <Philosophy />
      <TechStack />
      <Journey />
      <Testimonials />
      <ContactBand index="09" />
    </>
  );
}
