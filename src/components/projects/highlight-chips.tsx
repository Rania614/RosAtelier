import { cn } from "@/lib/utils";

/** Verified proof points ("20+ production bugs fixed") as quiet, scannable chips. */
export function HighlightChips({ items, className, tone = "light" }: { items?: string[]; className?: string; tone?: "light" | "blush" }) {
  if (!items?.length) return null;
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((h) => (
        <li
          key={h}
          className={cn(
            "rounded-full px-3 py-1 text-[0.8125rem] font-semibold text-plum",
            tone === "blush" ? "bg-blush" : "border border-plum/20 bg-surface",
          )}
        >
          {h}
        </li>
      ))}
    </ul>
  );
}
