import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

/** Two clear paths: recruiters hiring for a role, and clients with a project. */
export function HireCards({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const linkedin = siteConfig.socials.find((s) => s.label === "LinkedIn")?.href;
  const card = cn("flex flex-col rounded-[22px] p-7 md:p-8", dark ? "bg-background/8 ring-1 ring-background/15" : "bg-blush/70");
  return (
    <div className={cn("grid gap-6 md:grid-cols-2", className)}>
      <div className={card}>
        <p className={cn("label-mono", dark ? "text-background/80" : "text-plum")}>Hiring?</p>
        <p className={cn("mt-3 font-serif text-[1.625rem] leading-tight", dark ? "text-background" : "text-ink")}>
          Frontend and full-stack (React / Node.js) roles — remote or in Egypt.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={siteConfig.resumeUrl} variant={dark ? "light" : "primary"} size="sm">
            Download résumé
          </ButtonLink>
          {linkedin ? (
            <ButtonLink href={linkedin} variant={dark ? "outline-light" : "outline"} size="sm">
              LinkedIn
            </ButtonLink>
          ) : null}
        </div>
      </div>
      <div className={card}>
        <p className={cn("label-mono", dark ? "text-background/80" : "text-plum")}>Have a project?</p>
        <p className={cn("mt-3 font-serif text-[1.625rem] leading-tight", dark ? "text-background" : "text-ink")}>
          Dashboards, web apps and business platforms — from first screen to production.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/contact?type=freelance" variant={dark ? "light" : "primary"} size="sm">
            Start a project
          </ButtonLink>
          <ButtonLink href={`mailto:${siteConfig.email}`} variant={dark ? "outline-light" : "outline"} size="sm" icon={false}>
            Email me
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
