import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";

/**
 * Hero portrait composition — an arched frame with layered line art and floating
 * technical labels.
 *
 * REPLACING THE PORTRAIT: add /public/images/portrait.jpg and set
 * `siteConfig.portrait = "/images/portrait.jpg"`. The placeholder below disappears automatically.
 */
export function PortraitComposition() {
  return (
    <div className="relative mx-auto w-full max-w-[21rem] pb-10 pl-6 pr-6 pt-8 sm:max-w-[26rem] lg:ml-auto lg:mr-0 lg:max-w-none lg:pl-10 lg:pr-4">
      {/* Organic blush shape behind the arch */}
      <svg
        aria-hidden
        viewBox="0 0 400 460"
        className="absolute -right-2 top-0 h-[92%] w-[88%] text-blush"
        fill="currentColor"
      >
        <path d="M232 14c74 6 150 58 160 146 10 86-26 132-38 196-13 70-70 104-146 98C123 448 46 404 20 330-8 250 36 212 50 148 66 72 150 7 232 14Z" />
      </svg>

      {/* Fine line-art orbit */}
      <svg aria-hidden viewBox="0 0 200 200" className="absolute -left-1 bottom-6 w-[46%] text-rose" fill="none">
        <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="74" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 5" />
      </svg>

      <Reveal y={24} className="relative">
        <figure className="relative aspect-[4/5] overflow-hidden rounded-b-[26px] rounded-t-[999px] border border-ink/10 bg-blush shadow-[0_40px_80px_-48px_rgba(52,43,51,.55)]">
          {siteConfig.portrait ? (
            <Image
              src={siteConfig.portrait}
              alt={`Illustrated portrait of ${siteConfig.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 34vw, (min-width: 768px) 60vw, 90vw"
              className="object-cover"
            />
          ) : (
            <PortraitPlaceholder />
          )}
        </figure>
      </Reveal>

      {/* Floating technical labels */}
      <Reveal delay={0.5} y={10} className="absolute left-0 top-[18%] sm:-left-2">
        <span className="label-mono inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface/95 px-3 py-2 text-ink shadow-[0_12px_30px_-18px_rgba(52,43,51,.5)]">
          <span aria-hidden className="size-1.5 rounded-[2px] bg-plum" />
          TypeScript · strict
        </span>
      </Reveal>

      <Reveal delay={0.6} y={10} className="absolute -right-1 top-[30%] hidden min-[400px]:block lg:-right-4">
        <div className="rounded-[14px] border border-ink/10 bg-surface/95 px-4 py-3.5 font-mono text-[0.6875rem] leading-[1.7] text-ink/80 shadow-[0_18px_40px_-22px_rgba(52,43,51,.55)]">
          <p>
            <span className="text-plum">const</span> atelier = {"{"}
          </p>
          <p className="pl-3">
            mind: <span className="text-plum">&quot;imaginative&quot;</span>,
          </p>
          <p className="pl-3">
            method: <span className="text-plum">&quot;engineering&quot;</span>,
          </p>
          <p>{"};"}</p>
        </div>
      </Reveal>

      <Reveal delay={0.7} y={10} className="absolute bottom-0 left-[8%] sm:left-[4%]">
        <RoundBadge />
      </Reveal>

      <Reveal delay={0.75} y={8} className="absolute right-[6%] top-[4%] lg:right-[10%]">
        <span className="label-mono rounded-full bg-ink px-3 py-1.5 text-background">GET /ideas · 200</span>
      </Reveal>
    </div>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,#FFFFFF_0%,var(--blush)_45%,var(--dusty-rose)_120%)]" />
      {/* Contour lines suggesting a silhouette without depicting anyone */}
      <svg aria-hidden viewBox="0 0 320 400" className="absolute inset-0 h-full w-full text-mauve/45" fill="none">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M${40 - i * 6} 400 C ${60 - i * 4} ${300 - i * 6}, ${110 - i * 3} ${262 - i * 4}, 160 ${262 - i * 4} S ${260 + i * 4} ${300 - i * 6}, ${280 + i * 6} 400`}
            stroke="currentColor"
            strokeWidth="0.8"
          />
        ))}
        <ellipse cx="160" cy="176" rx="54" ry="64" stroke="currentColor" strokeWidth="0.8" />
        <ellipse cx="160" cy="176" rx="42" ry="52" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.5 4" />
      </svg>
      <span
        aria-hidden
        className="absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 font-serif text-[7rem] leading-none text-plum/80"
      >
        R
      </span>
      <figcaption className="label-mono absolute bottom-5 right-5 text-right text-ink/70">
        Portrait
        <br />
        <span className="text-ink/70">placeholder</span>
      </figcaption>
    </div>
  );
}

function RoundBadge() {
  const text = "ROSÉ ATELIER · SOFTWARE ENGINEERING · ";
  return (
    <span className="relative flex size-[6.5rem] items-center justify-center rounded-full bg-background shadow-[0_14px_30px_-20px_rgba(52,43,51,.6)] md:size-28">
      <svg aria-hidden viewBox="0 0 120 120" className="absolute inset-0 h-full w-full text-plum">
        <defs>
          <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text className="font-mono" fontSize="8.6" letterSpacing="1.6" fill="currentColor">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <svg aria-hidden viewBox="0 0 24 24" className="size-6 text-plum" fill="currentColor">
        <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0Z" />
      </svg>
      <span className="sr-only">{siteConfig.brand}</span>
    </span>
  );
}
