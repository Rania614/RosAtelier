import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";

/** Editorial headings. Self-hosted so builds never depend on a font CDN. */
export const playfair = localFont({
  src: [
    { path: "../fonts/playfair-display-latin-wght-normal.woff2", style: "normal", weight: "400 900" },
    { path: "../fonts/playfair-display-latin-wght-italic.woff2", style: "italic", weight: "400 900" },
  ],
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

/** Body, navigation and UI. */
export const manrope = localFont({
  src: [{ path: "../fonts/manrope-latin-wght-normal.woff2", style: "normal", weight: "200 800" }],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

/** Technical labels and metadata. */
export const geistMono = GeistMono;
