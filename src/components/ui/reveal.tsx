"use client";

import { motion, type HTMLMotionProps } from "motion/react";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
  as?: "div" | "li" | "section" | "article";
}

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Gentle fade-and-rise on first scroll into view.
 * Under prefers-reduced-motion, <MotionProvider> (reducedMotion="user") removes the movement
 * and keeps only a soft fade.
 */
export function Reveal({ delay = 0, y = 18, as = "div", children, ...rest }: RevealProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.45, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
