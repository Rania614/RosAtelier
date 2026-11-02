"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "Turning complex ideas into thoughtful digital experiences."
 * Each line rises out of a mask; "thoughtful" carries the plum accent.
 */
export function HeroHeadline() {
  const lines = [
    <>Turning complex</>,
    <>ideas into</>,
    <><span className="text-plum">thoughtful</span> digital</>,
    <>experiences.</>,
  ];
  return (
    <h1
      id="hero-title"
      className="mt-6 font-serif text-[2.75rem] font-normal leading-[1.04] tracking-[-0.02em] text-ink min-[400px]:text-[3.1rem] sm:text-[4rem] md:mt-8 md:text-[5rem] lg:text-[4rem] xl:text-[5.5rem]"
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 + i * 0.09, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
