import Image from "next/image";
import type { ProjectImage } from "@/types/project";
import { cn } from "@/lib/utils";

/**
 * A quiet browser window around a real screenshot. The address bar shows the page
 * the screenshot was captured from, so every image is traceable to its live source.
 *
 * Full-page captures show one desktop screen (16:10). Hovering the card — or the frame —
 * scrolls slowly through the whole page, then glides back when the pointer leaves.
 */
export function BrowserFrame({
  image,
  sizes,
  priority,
  className,
}: {
  image: ProjectImage;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const host = image.source ? new URL(image.source).host.replace(/^www\./, "") : null;
  const path = image.source ? new URL(image.source).pathname.replace(/\/$/, "") : "";
  return (
    <div
      className={cn(
        "group/frame overflow-hidden rounded-[10px] bg-surface shadow-[0_30px_60px_-30px_rgba(52,43,51,.55),0_0_0_1px_rgba(52,43,51,.08)]",
        className,
      )}
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-ink/8 bg-surface px-3 md:h-8">
        <span aria-hidden className="size-2 rounded-full bg-ink/15" />
        <span aria-hidden className="size-2 rounded-full bg-ink/15" />
        <span aria-hidden className="size-2 rounded-full bg-ink/15" />
        {host ? (
          <span className="mx-auto max-w-[70%] truncate rounded-full bg-background px-3 py-0.5 font-mono text-[0.625rem] text-ink/70">
            {host}
            {path}
          </span>
        ) : null}
        {image.fullPage ? (
          <span className="hidden w-[2.6rem] text-right font-mono text-[0.5625rem] uppercase tracking-wider text-ink/50 [@media(hover:hover)]:inline">
            scroll
          </span>
        ) : (
          <span aria-hidden className="w-[2.6rem]" />
        )}
      </div>
      {image.fullPage ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-blush">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={sizes}
            priority={priority}
            className={cn(
              // top + translate move together, so the image ends exactly at its bottom edge.
              "absolute inset-x-0 top-0 block h-auto w-full translate-y-0",
              "transition-[top,translate] duration-[1200ms] ease-in-out",
              "group-hover:top-full group-hover:-translate-y-full group-hover:duration-[7000ms]",
              "group-hover/frame:top-full group-hover/frame:-translate-y-full group-hover/frame:duration-[7000ms]",
              "motion-reduce:transition-none motion-reduce:group-hover:top-0 motion-reduce:group-hover:translate-y-0",
              "motion-reduce:group-hover/frame:top-0 motion-reduce:group-hover/frame:translate-y-0",
            )}
          />
        </div>
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className="block h-auto w-full bg-blush"
        />
      )}
    </div>
  );
}
