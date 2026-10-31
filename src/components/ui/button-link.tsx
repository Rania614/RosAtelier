import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "light" | "outline-light";
type Size = "md" | "sm";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold tracking-[-0.005em] whitespace-nowrap transition-[background-color,color,border-color,transform,box-shadow] duration-300 ease-atelier active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-plum text-background shadow-[0_1px_0_rgba(255,255,255,.15)_inset,0_10px_24px_-14px_rgba(52,43,51,.7)] hover:bg-ink",
  outline: "border border-ink/20 text-ink hover:border-plum hover:bg-surface",
  ghost: "text-ink hover:text-plum px-1!",
  light: "bg-background text-ink hover:bg-blush",
  "outline-light": "border border-background/30 text-background hover:border-background hover:bg-background/5",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.9375rem]",
  sm: "h-10 px-4.5 text-sm",
};

interface Props extends Omit<ComponentProps<typeof Link>, "href"> {
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode | false;
  download?: boolean;
}

/** Link styled as a button. External links open in a new tab automatically. */
export function ButtonLink({ href, variant = "primary", size = "md", icon, className, children, download, ...rest }: Props) {
  const external = isExternal(href) && !href.startsWith("mailto:");
  const iconNode =
    icon === false ? null : (icon ?? (
      <ArrowUpRight
        aria-hidden
        className="size-4 transition-transform duration-300 ease-atelier group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
      />
    ));
  const cls = cn(base, variants[variant], sizes[size], className);

  if (external || download || href.endsWith(".pdf")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...(download ? { download: "" } : {})}
      >
        {children}
        {iconNode}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
      {iconNode}
    </Link>
  );
}
