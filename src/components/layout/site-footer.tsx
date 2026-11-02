import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/data/navigation";
import { Wordmark } from "@/components/navigation/wordmark";
import { CurrentYear } from "./current-year";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background">
      <div className="container-atelier py-14 md:py-16">
        <div className="grid-atelier gap-y-10">
          <div className="col-span-full md:col-span-4 lg:col-span-5">
            <Wordmark tone="light" className="text-[2.25rem]" />
            <p className="mt-5 max-w-sm font-serif text-xl leading-snug text-background/75">
              {siteConfig.brandStatement}
            </p>
          </div>
          <nav aria-label="Footer" className="col-span-2 md:col-span-2 lg:col-span-2 lg:col-start-8">
            <p className="label-mono mb-4 text-background/75">Index</p>
            <ul className="space-y-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-background/80 hover:text-background">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <p className="label-mono mb-4 text-background/75">Elsewhere</p>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="link-underline text-background/80 hover:text-background">
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${siteConfig.email}`} className="link-underline text-background/80 hover:text-background">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-full flex items-end lg:col-span-1 lg:justify-end">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-sm text-background/80 hover:text-background"
            >
              <span className="flex size-10 items-center justify-center rounded-full border border-background/25 transition-colors group-hover:border-background">
                <ArrowUp aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </span>
              <span className="lg:sr-only">Back to top</span>
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-background/15 pt-6 text-background/75 md:flex-row md:items-center md:justify-between">
          <p className="label-mono">
            © <CurrentYear /> {siteConfig.name} · {siteConfig.brand}
          </p>
          <p className="label-mono">Designed &amp; engineered with care · {siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
