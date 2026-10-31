import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { SelectedWork } from "@/components/sections/selected-work";
import { Philosophy } from "@/components/sections/philosophy";
import { TechStack } from "@/components/sections/tech-stack";
import { Journey } from "@/components/sections/journey";
import { BeyondCode } from "@/components/sections/beyond-code";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactBand } from "@/components/sections/contact-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <SelectedWork />
      <Philosophy />
      <TechStack />
      <Journey />
      <BeyondCode />
      <Testimonials />
      <ContactBand index="09" />
    </>
  );
}
