import Image from "next/image";
import type { CoverMotif, Project, ProjectTone } from "@/types/project";
import { cn } from "@/lib/utils";
import { BrowserFrame } from "./browser-frame";

/**
 * Project cover. With `project.cover.image` (a real screenshot) it shows the page in a
 * browser frame on the project's tone; otherwise it renders an illustrated, palette-only
 * placeholder whose motif hints at the product type.
 */
export function ProjectCover({
  project,
  className,
  sizes = "(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw",
  priority,
  variant = "card",
}: {
  project: Project;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** "card": fills a fixed-ratio box. "hero": natural height, framed screenshot centred. */
  variant?: "card" | "hero";
}) {
  const { image, motif, tone } = project.cover;

  // Ready-made mockups (e.g. phones on a backdrop) are shown as they are.
  if (image?.mockup && variant === "hero") {
    return (
      <div className={cn("relative overflow-hidden", toneBg[tone], className)}>
        <div className="flex justify-center px-5 py-10 md:px-12 md:py-14">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 720px, 92vw"
            priority={priority}
            className="h-auto w-full max-w-[720px] rounded-[18px] shadow-[0_30px_60px_-30px_rgba(52,43,51,.55)]"
          />
        </div>
      </div>
    );
  }

  if (image?.mockup) {
    return (
      <div className={cn("relative overflow-hidden", toneBg[tone], className)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={variant === "hero" ? "(min-width: 1024px) 1200px, 100vw" : sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-atelier group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  if (image) {
    return (
      <div className={cn("relative overflow-hidden", toneBg[tone], className)}>
        <div
          className={cn(
            variant === "card"
              ? // The window rises from the bottom edge, leaving the top clear for the category badge.
                "absolute inset-x-[7%] top-[17%]"
              : "flex justify-center px-5 py-10 md:px-12 md:py-16",
          )}
        >
          <BrowserFrame
            image={image}
            sizes={variant === "hero" ? "(min-width: 1024px) 880px, 92vw" : sizes}
            priority={priority}
            className={cn(
              "w-full transition-transform duration-500 ease-atelier",
              variant === "card" ? "group-hover:-translate-y-1.5" : "max-w-[880px]",
            )}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", toneBg[tone], variant === "hero" && "aspect-[4/3] md:aspect-[16/8]", className)}>
      <svg
        role="img"
        aria-label={`Illustrated placeholder cover for ${project.name}`}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full transition-transform duration-700 ease-atelier group-hover:scale-[1.035]"
      >
        <Motif motif={motif} c={palette[tone]} />
      </svg>
    </div>
  );
}

const toneBg: Record<ProjectTone, string> = {
  ivory: "bg-surface",
  blush: "bg-blush",
  plum: "bg-plum",
};

type Colors = { panel: string; line: string; soft: string; accent: string; ink: string; deep: string };

const palette: Record<ProjectTone, Colors> = {
  ivory: { panel: "#FFFFFF", line: "#D7B4B5", soft: "#F1E5E3", accent: "#A87985", ink: "#342B33", deep: "#75536B" },
  blush: { panel: "#FFFFFF", line: "#D7B4B5", soft: "#FAF7F4", accent: "#A87985", ink: "#342B33", deep: "#75536B" },
  plum: { panel: "#FAF7F4", line: "#A87985", soft: "#A87985", accent: "#D7B4B5", ink: "#342B33", deep: "#F1E5E3" },
};

function Lines({ x, y, w, n, gap = 16, c, last = 0.6 }: { x: number; y: number; w: number; n: number; gap?: number; c: string; last?: number }) {
  return (
    <>
      {Array.from({ length: n }, (_, i) => (
        <rect key={i} x={x} y={y + i * gap} width={i === n - 1 ? w * last : w} height={5} rx={2.5} fill={c} />
      ))}
    </>
  );
}

function Motif({ motif, c }: { motif: CoverMotif; c: Colors }) {
  switch (motif) {
    case "journal":
      return (
        <g>
          <circle cx="640" cy="120" r="150" fill={c.soft} />
          <g transform="rotate(-7 330 330)">
            <rect x="210" y="120" width="300" height="400" rx="10" fill={c.panel} opacity=".55" />
          </g>
          <g transform="rotate(4 380 320)">
            <rect x="250" y="100" width="300" height="400" rx="10" fill={c.panel} />
            <rect x="282" y="138" width="90" height="8" rx="4" fill={c.accent} />
            <text x="282" y="200" fontFamily="Georgia, serif" fontSize="34" fill={c.ink}>
              Manuscript
            </text>
            <Lines x={282} y={232} w={236} n={4} c={c.line} />
            <rect x="282" y="318" width="236" height="70" rx="6" fill={c.soft} />
            <Lines x={298} y={336} w={150} n={2} c={c.line} />
            <Lines x={282} y={410} w={236} n={3} c={c.line} last={0.4} />
          </g>
          {/* Submission → review → publish */}
          <g transform="translate(120 520)">
            <line x1="0" y1="0" x2="560" y2="0" stroke={c.deep} strokeWidth="1.5" strokeDasharray="3 6" />
            {[0, 280, 560].map((x, i) => (
              <circle key={x} cx={x} cy="0" r={i === 1 ? 11 : 8} fill={i === 1 ? c.deep : c.panel} stroke={c.deep} strokeWidth="1.5" />
            ))}
          </g>
        </g>
      );
    case "dashboard":
      return (
        <g>
          <circle cx="120" cy="520" r="190" fill={c.soft} opacity=".6" />
          <rect x="110" y="90" width="580" height="420" rx="14" fill={c.panel} />
          <rect x="110" y="90" width="580" height="38" rx="14" fill={c.deep} opacity=".25" />
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={134 + i * 18} cy={109} r={5} fill={c.line} />
          ))}
          <rect x="128" y="146" width="120" height="346" rx="8" fill={c.deep} opacity=".18" />
          <Lines x={146} y={170} w={84} n={6} gap={26} c={c.line} last={0.7} />
          {/* Four role dashboards */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${268 + (i % 2) * 206} ${146 + Math.floor(i / 2) * 120})`}>
              <rect width="194" height="106" rx="10" fill={i === 0 ? c.line : c.soft} opacity={i === 0 ? 0.9 : 0.6} />
              <rect x="16" y="18" width="60" height="6" rx="3" fill={c.ink} opacity=".5" />
              <text x="16" y="70" fontFamily="Georgia, serif" fontSize="30" fill={c.ink} opacity=".85">
                {["Admin", "Engineer", "Client", "Company"][i]}
              </text>
            </g>
          ))}
          <g transform="translate(268 400)">
            {[52, 74, 40, 88, 64, 96, 58, 80, 70, 46, 84, 62].map((h, i) => (
              <rect key={i} x={i * 34} y={86 - h} width="20" height={h} rx="4" fill={i % 4 === 1 ? c.accent : c.line} opacity=".85" />
            ))}
          </g>
        </g>
      );
    case "clinic":
      return (
        <g>
          <circle cx="660" cy="470" r="200" fill={c.soft} />
          <rect x="90" y="110" width="400" height="400" rx="14" fill={c.panel} />
          <rect x="118" y="138" width="140" height="10" rx="5" fill={c.deep} />
          {/* Calendar grid */}
          {Array.from({ length: 28 }, (_, i) => (
            <rect
              key={i}
              x={118 + (i % 7) * 50}
              y={180 + Math.floor(i / 7) * 50}
              width="38"
              height="38"
              rx="8"
              fill={[3, 9, 17, 22].includes(i) ? c.deep : c.soft}
              opacity={[3, 9, 17, 22].includes(i) ? 0.85 : 1}
            />
          ))}
          <Lines x={118} y={410} w={340} n={4} gap={20} c={c.line} last={0.5} />
          {/* Request cards */}
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${430 + i * 14} ${150 + i * 104})`}>
              <rect width="270" height="86" rx="12" fill={c.panel} stroke={c.line} strokeWidth="1" />
              <circle cx="40" cy="43" r="18" fill={i === 0 ? c.accent : c.soft} />
              <rect x="72" y="28" width="120" height="7" rx="3.5" fill={c.ink} opacity=".7" />
              <rect x="72" y="46" width="80" height="6" rx="3" fill={c.line} />
              <rect x="200" y="32" width="52" height="22" rx="11" fill={c.soft} />
            </g>
          ))}
        </g>
      );
    case "mobile":
      return (
        <g>
          <circle cx="400" cy="320" r="230" fill={c.soft} opacity=".9" />
          {[
            { x: 210, y: 120, r: -8 },
            { x: 410, y: 80, r: 6 },
          ].map((p, i) => (
            <g key={i} transform={`rotate(${p.r} ${p.x + 90} ${p.y + 190})`}>
              <rect x={p.x} y={p.y} width="180" height="380" rx="30" fill={c.ink} />
              <rect x={p.x + 8} y={p.y + 8} width="164" height="364" rx="23" fill={c.panel} />
              <rect x={p.x + 64} y={p.y + 18} width="52" height="12" rx="6" fill={c.ink} />
              {i === 0 ? (
                <>
                  <rect x={p.x + 22} y={p.y + 50} width="136" height="120" rx="14" fill={c.line} />
                  <path
                    d={`M${p.x + 90} ${p.y + 88}c-12 0-20 9-20 20 0 15 20 32 20 32s20-17 20-32c0-11-8-20-20-20Z`}
                    fill={c.deep}
                  />
                  <circle cx={p.x + 90} cy={p.y + 108} r="6" fill={c.panel} />
                  <Lines x={p.x + 22} y={p.y + 190} w={136} n={3} c={c.line} />
                  <rect x={p.x + 22} y={p.y + 300} width="136" height="40" rx="20" fill={c.deep} />
                </>
              ) : (
                <>
                  {[0, 1, 2].map((k) => (
                    <g key={k} transform={`translate(${p.x + 18} ${p.y + 52 + k * 104})`}>
                      <rect width="144" height="92" rx="14" fill={k === 0 ? c.accent : c.soft} opacity={k === 0 ? 0.8 : 1} />
                      <rect x="12" y="62" width="70" height="7" rx="3.5" fill={c.ink} opacity=".6" />
                    </g>
                  ))}
                </>
              )}
            </g>
          ))}
        </g>
      );
    case "property":
      return (
        <g>
          <circle cx="160" cy="140" r="170" fill={c.soft} />
          {/* Floor plan */}
          <g transform="translate(250 110)" fill="none" stroke={c.deep} strokeWidth="2">
            <rect x="0" y="0" width="420" height="380" rx="6" fill={c.panel} />
            <path d="M0 160h170v220M170 0v110M250 0v160h170M250 230v150M250 230h90" />
            <path d="M170 110a50 50 0 0 1 50 50" strokeDasharray="3 5" />
          </g>
          <g transform="translate(250 110)">
            <rect x="20" y="20" width="130" height="120" rx="6" fill={c.line} opacity=".6" />
            <rect x="270" y="250" width="130" height="110" rx="6" fill={c.soft} />
            <text x="34" y="122" fontFamily="Georgia, serif" fontSize="26" fill={c.ink} opacity=".8">
              Unit A
            </text>
          </g>
          {/* Contract card */}
          <g transform="translate(100 380)">
            <rect width="230" height="140" rx="14" fill={c.panel} stroke={c.line} />
            <rect x="22" y="24" width="90" height="8" rx="4" fill={c.accent} />
            <Lines x={22} y={52} w={186} n={3} gap={18} c={c.line} />
            <rect x="22" y="104" width="70" height="20" rx="10" fill={c.deep} />
          </g>
        </g>
      );
    case "code":
      return (
        <g>
          <circle cx="650" cy="140" r="180" fill={c.soft} opacity=".55" />
          <rect x="110" y="110" width="500" height="380" rx="14" fill={c.ink} />
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={136 + i * 18} cy={134} r={5} fill={c.line} opacity=".7" />
          ))}
          {[
            [0, 120, c.accent],
            [1, 220, c.line],
            [1, 160, c.deep],
            [2, 190, c.accent],
            [2, 120, c.line],
            [1, 240, c.deep],
            [0, 90, c.accent],
            [1, 200, c.line],
            [2, 150, c.deep],
            [1, 110, c.line],
            [0, 60, c.accent],
          ].map(([indent, w, col], i) => (
            <rect
              key={i}
              x={140 + (indent as number) * 28}
              y={170 + i * 26}
              width={w as number}
              height="7"
              rx="3.5"
              fill={col as string}
              opacity=".85"
            />
          ))}
          {/* Component tree */}
          <g transform="translate(560 250)">
            <rect width="170" height="200" rx="14" fill={c.panel} />
            <g stroke={c.line} strokeWidth="1.5" fill="none">
              <path d="M40 50v100M40 90h40M40 150h40M80 90v30h30" />
            </g>
            <circle cx="40" cy="44" r="10" fill={c.accent} />
            <circle cx="88" cy="90" r="8" fill={c.line} />
            <circle cx="88" cy="150" r="8" fill={c.line} />
            <circle cx="118" cy="120" r="7" fill={c.accent} opacity=".7" />
          </g>
        </g>
      );
  }
}
