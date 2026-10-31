"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { cn, pad } from "@/lib/utils";
import { Wordmark } from "./wordmark";
import { AvailabilityDot } from "./availability-dot";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on route change; lock scroll while it is open.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-atelier",
          scrolled || open
            ? open
              ? "border-ink/10 bg-background"
              : "border-ink/10 bg-background/85 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-plum focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <div className="container-atelier flex h-16 items-center justify-between md:h-[4.5rem]">
          <Wordmark />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="link-underline pb-1 text-[0.9375rem] font-medium text-ink/80 transition-colors hover:text-ink aria-[current=page]:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            {siteConfig.availability.isAvailable ? (
              <span className="hidden items-center gap-2 text-ink/70 md:flex">
                <AvailabilityDot />
                <span className="label-mono">{siteConfig.availability.short}</span>
              </span>
            ) : null}
            <a
              href={siteConfig.resumeUrl}
              className="hidden h-10 items-center rounded-full border border-ink/20 px-4.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-plum hover:bg-plum hover:text-background sm:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="relative flex size-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span aria-hidden className="relative block h-2.5 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-px w-5 bg-ink transition-transform duration-300 ease-atelier",
                    open && "translate-y-[5px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 right-0 h-px w-3.5 bg-ink transition-all duration-300 ease-atelier",
                    open && "w-5 -translate-y-[5px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise trap this fixed panel. */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-background md:top-[4.5rem] lg:hidden"
          >
            <nav aria-label="Mobile" className="container-atelier flex flex-1 flex-col pb-10 pt-8">
              <ul className="flex flex-col">
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.05, ease: EASE }}
                    className="border-b border-ink/10"
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className="flex items-baseline justify-between py-5 font-serif text-[2.5rem] leading-none tracking-[-0.02em] text-ink aria-[current=page]:italic aria-[current=page]:text-plum"
                    >
                      {item.label}
                      <span className="label-mono text-mauve">{pad(i + 1)}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-6 pt-10">
                <span className="flex items-center gap-2 text-ink/70">
                  <AvailabilityDot />
                  <span className="label-mono">{siteConfig.availability.long}</span>
                </span>
                <a
                  href={siteConfig.resumeUrl}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-plum font-semibold text-background"
                >
                  Download Resume
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
