import {
  siReact, siNextdotjs, siTypescript, siJavascript, siExpo, siNodedotjs, siExpress,
  siPostgresql, siPrisma, siMongodb, siTailwindcss, siCss, siGit, siGithub, siPostman, siVercel,
  siRedux, siSupabase, siFigma, siClaude, siCursor, siGithubcopilot,
} from "simple-icons";
import { cn } from "@/lib/utils";

const icons = {
  react: siReact, nextjs: siNextdotjs, typescript: siTypescript, javascript: siJavascript, expo: siExpo,
  nodejs: siNodedotjs, express: siExpress, postgresql: siPostgresql, prisma: siPrisma, mongodb: siMongodb,
  tailwind: siTailwindcss, css: siCss, git: siGit, github: siGithub, postman: siPostman, vercel: siVercel,
  redux: siRedux, supabase: siSupabase, figma: siFigma, claude: siClaude, cursor: siCursor, copilot: siGithubcopilot,
} as const;

export type TechIconKey = keyof typeof icons;

/** Monochrome brand glyph — tinted with currentColor so it stays inside the palette. */
export function TechIcon({ name, className }: { name: string; className?: string }) {
  const icon = icons[name as TechIconKey];
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("size-5 fill-current", className)}>
      <path d={icon.path} />
    </svg>
  );
}
