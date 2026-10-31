/** Small status indicator. A single soft halo — no looping animation. */
export function AvailabilityDot() {
  return (
    <span aria-hidden className="relative inline-flex size-2.5 items-center justify-center">
      <span className="absolute inset-0 rounded-full bg-mauve/30" />
      <span className="relative size-1.5 rounded-full bg-plum" />
    </span>
  );
}
