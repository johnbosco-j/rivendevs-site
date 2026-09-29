import type { Metadata } from "next";
import Link from "next/link";
import { Monogram, Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Page not found — ${site.name}`,
  robots: { index: false, follow: true },
};

/** Branded 404: the orbit motif, one clear way back. */
export default function NotFound() {
  return (
    <main className="relative isolate grid min-h-[100svh] place-items-center overflow-hidden px-6 text-center">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 size-[min(760px,140vw)] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgb(255_106_26/0.16),transparent_70%)]" />
        <svg viewBox="-104 -104 208 208" className="spin-120 absolute inset-[12%] size-[76%] overflow-visible">
          <circle r="100" fill="none" className="stroke-orange" strokeOpacity="0.25" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <circle
            r="100"
            fill="none"
            className="stroke-orange"
            strokeOpacity="0.7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="120 628"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="relative flex flex-col items-center">
        <Link href="/" className="flex items-center gap-3 rounded-full" aria-label={`${site.name} — home`}>
          <Monogram size={36} />
          <Wordmark className="text-[30px] leading-none" />
        </Link>

        <p className="micro mt-12 flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-orange" />
          Error 404
        </p>
        <h1 className="mt-5 max-w-[16ch] text-h2">
          This page drifted <em className="accent">out</em> of orbit.
        </h1>
        <p className="mt-6 max-w-[46ch] font-modern text-[17px] font-light leading-relaxed text-ink/80">
          The link is broken or the page has moved. Everything we&rsquo;ve built is one step away.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/#products" variant="secondary">
            See our products
          </Button>
        </div>
      </div>
    </main>
  );
}
