"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Renders the visitor's current year; falls back to the build year during prerender. */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => BUILD_YEAR,
  );
  return <>{year}</>;
}

// Injected in next.config.ts at build time.
const BUILD_YEAR = Number(process.env.NEXT_PUBLIC_BUILD_YEAR);
