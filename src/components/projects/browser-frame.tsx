import Image from "next/image";
import type { ProjectImage } from "@/types/project";
import { cn } from "@/lib/utils";

/**
 * A quiet browser window around a real screenshot. The address bar shows the page
 * the screenshot was captured from, so every image is traceable to its live source.
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
        "overflow-hidden rounded-[10px] bg-surface shadow-[0_30px_60px_-30px_rgba(52,43,51,.55),0_0_0_1px_rgba(52,43,51,.08)]",
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
        <span aria-hidden className="w-[2.6rem]" />
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full bg-blush"
      />
    </div>
  );
}
