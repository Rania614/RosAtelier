import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Editorial wordmark: "Rania." — serif with a plum full stop. */
export function Wordmark({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "font-serif text-[1.6rem] leading-none tracking-[-0.02em] transition-opacity hover:opacity-80",
        tone === "light" ? "text-background" : "text-ink",
        className,
      )}
    >
      {siteConfig.wordmark}
      <span className={tone === "light" ? "text-rose" : "text-plum"}>.</span>
    </Link>
  );
}
