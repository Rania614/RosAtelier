import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social card, drawn from the brand palette. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#FAF7F4",
          color: "#342B33",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#A87985" }}>
          {siteConfig.title.toUpperCase()} / {siteConfig.discipline.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05, fontFamily: "serif" }}>
          <span>Turning complex ideas into</span>
          <span style={{ color: "#75536B" }}>thoughtful digital experiences.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 28 }}>
          <span style={{ fontFamily: "serif", fontStyle: "italic", fontSize: 48 }}>rania.</span>
          <span style={{ color: "#75536B" }}>{siteConfig.name} · {siteConfig.location}</span>
        </div>
      </div>
    ),
    size,
  );
}
