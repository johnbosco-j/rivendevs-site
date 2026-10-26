/**
 * Coded stand-in for a WallLoop screenshot: a desktop with a live wallpaper and
 * WallLoop's menu bar dropdown. Neutral greys only — WallLoop's rose stays on
 * WallLoop's own domain. Replace with a real screenshot via `screenshot` in
 * content/products.ts.
 */
const waves = [
  "M0 120 C 60 104, 120 136, 180 118 S 300 100, 360 116 S 480 132, 560 112",
  "M0 150 C 70 138, 130 164, 200 148 S 320 132, 390 150 S 500 164, 560 146",
  "M0 182 C 80 170, 150 194, 220 180 S 340 166, 410 182 S 510 194, 560 178",
];

function Wallpaper({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 240" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <circle cx="400" cy="76" r="34" className="fill-line-strong/60" />
      {waves.map((d, i) => (
        <path key={d} d={d} fill="none" className={i === 0 ? "stroke-muted/70" : "stroke-line-strong"} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

const rows = ["Previous", "Next", "Pause"];

export function WallLoopMock() {
  return (
    <div className="relative h-full overflow-hidden bg-bg text-[11px] text-muted" aria-hidden="true">
      <Wallpaper className="absolute inset-0 size-full" />

      {/* Menu bar */}
      <div className="relative flex items-center justify-end gap-3 border-b border-line bg-bg/70 px-3 py-1.5 font-mono text-[10px] text-faint">
        <span className="flex size-4 items-center justify-center rounded-full border border-ink/70">
          <span className="ml-px size-0 border-y-[3px] border-l-[5px] border-y-transparent border-l-ink/80" />
        </span>
        <span>Wi‑Fi</span>
        <span>10:24</span>
      </div>

      {/* WallLoop dropdown */}
      <div className="absolute right-3 top-9 w-[58%] max-w-[260px] rounded-card border border-line bg-surface/95 p-2.5 shadow-hairline sm:right-6">
        <div className="overflow-hidden rounded-lg border border-line bg-bg">
          <Wallpaper className="aspect-video w-full" />
        </div>
        <div className="mt-2.5 flex items-center justify-between px-1">
          <span className="truncate text-[12px] text-ink">Ocean drift</span>
          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase text-success">
            <span className="size-1.5 rounded-full bg-success" /> Playing
          </span>
        </div>
        <div className="mt-2 border-t border-line pt-1.5">
          {rows.map((r) => (
            <div key={r} className="flex items-center gap-2 rounded-md px-1.5 py-1">
              <span className="size-2 rounded-sm bg-line-strong" />
              <span>{r}</span>
            </div>
          ))}
        </div>
        <div className="mt-1 flex items-center justify-between border-t border-line px-1.5 pt-2">
          <span>Shuffle every</span>
          <span className="font-mono text-faint">1 hour</span>
        </div>
      </div>
    </div>
  );
}
