"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import type { Project, ProjectCategory } from "@/types/project";
import { cn } from "@/lib/utils";
import { ProjectGrid } from "./project-grid";

interface Props {
  projects: Project[];
  categories: ProjectCategory[];
}

/**
 * Category filter + search. State lives in the URL (?category=…&q=…) so any
 * filtered view can be shared or bookmarked.
 */
export function ProjectsExplorer({ projects, categories }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const active = params.get("category") ?? "All";
  const query = params.get("q") ?? "";

  const setParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCategory = active === "All" || p.category === active;
      const haystack = [p.name, p.tagline, p.description, p.context, ...p.technologies].join(" ").toLowerCase();
      return inCategory && (!q || haystack.includes(q));
    });
  }, [projects, active, query]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    projects.forEach((p) => (map[p.category] = (map[p.category] ?? 0) + 1));
    return map;
  }, [projects]);

  return (
    <div>
      <div className="flex flex-col gap-5 border-y border-ink/12 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter projects by category" className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 lg:pb-0">
          {["All", ...categories].map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isActive}
                onClick={() => setParam("category", cat === "All" ? null : cat)}
                className={cn(
                  "inline-flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors duration-300",
                  isActive ? "bg-plum text-background" : "text-ink/70 hover:bg-blush hover:text-ink",
                )}
              >
                {cat}
                <span className={cn("font-mono text-[0.6875rem]", isActive ? "text-background/70" : "text-mauve")}>
                  {counts[cat] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
        <label className="relative flex h-11 w-full items-center lg:w-72">
          <span className="sr-only">Search projects</span>
          <Search aria-hidden className="pointer-events-none absolute left-4 size-4 text-mauve" />
          <input
            type="search"
            value={query}
            onChange={(e) => setParam("q", e.target.value || null)}
            placeholder="Search by name or technology"
            className="h-full w-full rounded-full border border-ink/15 bg-surface pl-11 pr-10 text-sm text-ink placeholder:text-ink/40 focus:border-plum focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setParam("q", null)}
              className="absolute right-2 flex size-7 items-center justify-center rounded-full text-ink/60 hover:bg-blush"
            >
              <X aria-hidden className="size-4" />
              <span className="sr-only">Clear search</span>
            </button>
          ) : null}
        </label>
      </div>

      <p aria-live="polite" className="label-mono mt-6 text-ink/50">
        Showing {filtered.length} of {projects.length} projects
      </p>

      {filtered.length ? (
        <ProjectGrid projects={filtered} />
      ) : (
        <div className="mt-12 rounded-[22px] border border-dashed border-ink/20 px-6 py-16 text-center">
          <p className="font-serif text-2xl italic text-ink">Nothing here yet.</p>
          <p className="mt-2 text-sm text-ink/60">Try another category or search term.</p>
          <button
            type="button"
            onClick={() => router.replace(pathname, { scroll: false })}
            className="mt-6 text-sm font-semibold text-plum underline underline-offset-4"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
