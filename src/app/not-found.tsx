import { ButtonLink } from "@/components/ui/button-link";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function NotFound() {
  return (
    <>
    <SiteHeader />
    <main id="main">
    <section className="flex min-h-[80vh] items-center pt-24">
      <div className="container-atelier">
        <p className="label-mono text-plum">404 · Page not found</p>
        <h1 className="mt-5 max-w-3xl font-serif text-[3rem] leading-[1.04] tracking-[-0.02em] text-ink md:text-[5rem]">
          This page took a <span className="text-plum">creative detour.</span>
        </h1>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/projects" variant="outline">
            See the work
          </ButtonLink>
        </div>
      </div>
    </section>
    </main>
    <SiteFooter />
    </>
  );
}
