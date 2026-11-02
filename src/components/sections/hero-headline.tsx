"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * "Turning complex ideas into thoughtful digital experiences." — typed out letter by letter.
 *
 * Layout never shifts: every character is always rendered, and the ones not yet typed are
 * simply transparent. Screen readers and search engines get the full sentence at once.
 * Under prefers-reduced-motion the headline appears complete.
 */
type Segment = { text: string; accent?: boolean };

const RAW: Segment[][] = [
  [{ text: "Turning complex" }],
  [{ text: "ideas into" }],
  [{ text: "thoughtful", accent: true }, { text: " digital" }],
  [{ text: "experiences." }],
];

// Pre-compute where each segment starts in the typing sequence.
let cursor = 0;
const LINES = RAW.map((line) =>
  line.map((seg) => {
    const start = cursor;
    cursor += seg.text.length;
    return { ...seg, start };
  }),
);

const FULL = RAW.map((l) => l.map((s) => s.text).join("")).join(" ");
const TOTAL = cursor;
const SPEED_MS = 45;
const START_DELAY_MS = 350;

export function HeroHeadline() {
  const [typed, setTyped] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    // Checked after mount so the server and first client render match.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setTyped(i);
      if (i < TOTAL) timer = setTimeout(tick, SPEED_MS);
    };
    timer = setTimeout(() => {
      if (prefersReduced) {
        setReduce(true);
        setTyped(TOTAL);
      } else tick();
    }, prefersReduced ? 0 : START_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const shown = reduce ? TOTAL : typed;
  const done = shown >= TOTAL;

  return (
    <h1
      id="hero-title"
      className="mt-6 font-serif text-[2.75rem] font-normal leading-[1.04] tracking-[-0.02em] text-ink min-[400px]:text-[3.1rem] sm:text-[4rem] md:mt-8 md:text-[5rem] lg:text-[4rem] xl:text-[5.5rem]"
    >
      <span className="sr-only">{FULL}</span>
      <span aria-hidden>
        {LINES.map((line, li) => (
          <span key={li} className="block">
            {line.map((seg, si) => {
              const { start } = seg;
              const visible = Math.max(0, Math.min(seg.text.length, shown - start));
              // The caret sits right after the last typed character.
              const caretHere = !done && shown > start && shown <= start + seg.text.length;
              return (
                <span key={si} className={cn(seg.accent && "text-plum")}>
                  {seg.text.slice(0, visible)}
                  {caretHere ? <Caret /> : null}
                  <span className="opacity-0">{seg.text.slice(visible)}</span>
                </span>
              );
            })}
            {done && li === LINES.length - 1 && !reduce ? <Caret blinking /> : null}
          </span>
        ))}
      </span>
    </h1>
  );
}

function Caret({ blinking = false }: { blinking?: boolean }) {
  return (
    // Zero-width wrapper, so the caret never pushes the text around.
    <span className="relative inline-block w-0">
      <span
        className={cn(
          "absolute bottom-[-0.12em] left-[0.04em] h-[0.9em] w-[0.055em] rounded-full bg-plum",
          blinking && "animate-caret",
        )}
      />
    </span>
  );
}
