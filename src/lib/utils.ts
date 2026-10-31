import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Two-digit editorial index: 1 → "01" */
export function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function isExternal(href: string) {
  return /^(https?:|mailto:)/.test(href);
}
