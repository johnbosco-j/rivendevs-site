import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

// Riven TV keeps its own look here (night blue, frosted glass, Bricolage + Geist), the same
// way it looks on the TV. It inherits the Riven site's spacing and container only.
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-tv-display", display: "swap" });
const text = Geist({ subsets: ["latin"], variable: "--font-tv-text", display: "swap" });

const REPO = "https://github.com/johnbosco-j/riven-tv";
const RELEASE = `${REPO}/releases/latest`;

export const metadata: Metadata = {
  title: "Riven TV — a calm home screen for Android TV and Google TV",
  description:
    "Riven TV replaces the ad-filled TV home screen with a quiet one: your apps in full colour, a frosted dock, and its own Wi-Fi, Bluetooth, sound and display screens. Free and open source, by Riven.",
  alternates: { canonical: "/products/riven-tv" },
  openGraph: {
    type: "website",
    url: "/products/riven-tv",
    title: "Riven TV — your TV, calm again",
    description: "A calm, fast, ad-free home screen for Android TV 8+ and Google TV. Made by Riven.",
    images: [{ url: "/products/riven-tv/home.jpg", width: 1600, height: 900, alt: "Riven TV home screen" }],
  },
  twitter: { card: "summary_large_image", title: "Riven TV — your TV, calm again", images: ["/products/riven-tv/home.jpg"] },
};

const glass = "border border-white/[0.12] bg-white/[0.06] shadow-[inset_0_1px_0_rgb(255_255_255/0.14)] backdrop-blur-xl";

const features = [
  { title: "A calm Home", body: "Greeting, a thin clock, the focused app's name over a glow in its colour, a frosted dock, and one glass highlight that springs from tile to tile." },
  { title: "Every app, your order", body: "All your apps in full colour, using each app's own TV banner. Hold OK to move, remove, hide or uninstall. New installs wait on Home with a progress ring." },
  { title: "Its own Settings", body: "Wi‑Fi (scan, join, on/off), Bluetooth (find, pair, unpair), inputs, sound, picture & display, network, storage, apps and system — designed like the rest." },
  { title: "Remote, mapped", body: "Source opens Inputs, Menu opens app options, 1–9 open your apps, and four colour keys do whatever you choose. There's a key tester too." },
  { title: "Made yours", body: "Seven backgrounds, including Night sky and one that follows the focused app; seven Google Fonts pairings; dock and card sizes; colour or mono icons." },
  { title: "Fast on old TVs", body: "Effects levels (Full, Balanced, Lightest), one cached background layer instead of seven, shadows only where your eye is. Built and tuned on a 2019 TV." },
];

const gallery = [
  { src: "/products/riven-tv/settings-wifi.jpg", caption: "Wi‑Fi, inside Riven", alt: "Riven's Wi-Fi screen listing nearby networks" },
  { src: "/products/riven-tv/settings-display.jpg", caption: "What your TV can actually play", alt: "Picture and display screen showing which video formats the TV can decode" },
  { src: "/products/riven-tv/editorial.jpg", caption: "Night sky with Instrument Serif", alt: "Home screen in Instrument Serif over a night sky with a crescent moon" },
  { src: "/products/riven-tv/screensaver.jpg", caption: "Riven Ambient screensaver", alt: "Aurora screensaver with a large clock" },
  { src: "/products/riven-tv/options.jpg", caption: "Hold OK for options", alt: "Options sheet for an app: open, move, remove, hide, app info, uninstall" },
  { src: "/products/riven-tv/settings-storage.jpg", caption: "Free up memory in one press", alt: "Storage and memory screen with a Free up memory action" },
];

function Primary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-medium text-tv-night transition-transform duration-1 ease-out hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-[0.98]">
      {children} <span aria-hidden="true">↗</span><span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

function Secondary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-medium text-white transition-transform duration-1 ease-out hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${glass}`}>
      {children} <span aria-hidden="true">↗</span><span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export default function RivenTvPage() {
  return (
    <div className={`${display.variable} ${text.variable} relative isolate min-h-screen overflow-hidden bg-tv-night font-tvtext text-white`}>
      {/* the same soft light fields the TV draws, tinted night blue */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 size-[900px] rounded-full bg-[radial-gradient(closest-side,rgb(58_91_199/0.45),transparent)]" />
        <div className="absolute -left-60 top-[38rem] size-[800px] rounded-full bg-[radial-gradient(closest-side,rgb(91_75_255/0.22),transparent)]" />
        <div className="absolute bottom-0 right-0 size-[700px] rounded-full bg-[radial-gradient(closest-side,rgb(19_196_163/0.12),transparent)]" />
      </div>

      <header className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="rounded-full text-[14px] text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          ← Riven
        </Link>
        <p className="flex items-center gap-2.5 font-tvdisplay text-[18px] font-semibold tracking-[-0.02em]">
          <span aria-hidden="true" className="size-2.5 rotate-45 border-[1.5px] border-white" /> Riven TV
        </p>
        <a href={RELEASE} target="_blank" rel="noopener noreferrer" className={`hidden h-10 items-center rounded-full px-5 text-[14px] font-medium sm:inline-flex ${glass} hover:bg-white hover:text-tv-night`}>
          Download
        </a>
      </header>

      <main id="main" tabIndex={-1} className="focus:outline-none">
        {/* hero */}
        <section className="container-x pb-20 pt-12 md:pt-20">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/60">Android TV 8+ · Google TV · Free & open source</p>
          <h1 className="mt-6 max-w-4xl font-tvdisplay text-[clamp(52px,8.5vw,120px)] font-semibold leading-[0.95] tracking-[-0.045em]">
            Your TV, <em className="font-serif font-normal italic tracking-[-0.01em]">calm</em> again.
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-white/75 md:text-[20px]">
            Riven TV replaces the ad-filled home screen with a quiet one: your apps in full colour, a frosted dock, and
            Riven&apos;s own screens for Wi‑Fi, Bluetooth, sound and display. Built to feel fast on the TV you already own.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Primary href={RELEASE}>Download Riven TV 2.0</Primary>
            <Secondary href={REPO}>View on GitHub</Secondary>
          </div>

          <figure className="relative mt-16 md:mt-24">
            <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-[48px] bg-[radial-gradient(closest-side,rgb(58_91_199/0.35),transparent)] blur-2xl" />
            <div className={`overflow-hidden rounded-[28px] p-2 md:p-3 ${glass}`}>
              <Image src="/products/riven-tv/home.jpg" width={1600} height={900} priority sizes="(min-width: 1240px) 1200px, 100vw"
                alt="Riven TV home: greeting, clock, the focused app's name over a red glow, and a frosted dock with YouTube, Play Store, TV and Settings"
                className="h-auto w-full rounded-[20px]" />
            </div>
            <figcaption className="mt-4 text-center text-[13px] text-white/50">Real screenshot, 1080p. Background colour follows whichever app is focused.</figcaption>
          </figure>
        </section>

        {/* features */}
        <section aria-labelledby="inside" className="container-x py-20 md:py-28">
          <h2 id="inside" className="font-tvdisplay text-[clamp(36px,5vw,60px)] font-semibold leading-none tracking-[-0.04em]">What&apos;s inside</h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <li key={f.title} className={`group rounded-[22px] p-7 transition-transform duration-2 ease-out hover:-translate-y-1 hover:scale-[1.02] ${glass}`}>
                <p className="font-tvdisplay text-[22px] font-semibold tracking-[-0.02em]">{f.title}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">{f.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* gallery */}
        <section aria-labelledby="screens" className="container-x py-20 md:py-28">
          <h2 id="screens" className="font-tvdisplay text-[clamp(36px,5vw,60px)] font-semibold leading-none tracking-[-0.04em]">On screen</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {gallery.map((g) => (
              <figure key={g.src}>
                <div className={`overflow-hidden rounded-[22px] p-1.5 ${glass}`}>
                  <Image src={g.src} width={1600} height={900} alt={g.alt} sizes="(min-width: 768px) 600px, 100vw" className="h-auto w-full rounded-[16px]" />
                </div>
                <figcaption className="mt-3 text-[14px] text-white/60">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* the write-up */}
        <section aria-labelledby="story" className="container-x py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <h2 id="story" className="font-tvdisplay text-[clamp(36px,5vw,60px)] font-semibold leading-none tracking-[-0.04em] lg:col-span-4">
              Why we built it
            </h2>
            <div className="space-y-6 text-[17px] leading-relaxed text-white/75 lg:col-span-8">
              <p>
                It started with one TV: a 2019 Thomson 65&Prime; running Android TV 8, with a quad‑core chip, a Mali‑T860
                GPU and 2.5&nbsp;GB of memory. Its home screen was slow, full of sponsored rows and apps nobody asked for.
                Replacing Android wasn&apos;t possible (locked bootloader), so we replaced everything you see instead.
              </p>
              <p>
                Riven TV is a launcher written in Kotlin and Jetpack Compose. It draws its whole interface on a 960×540
                canvas scaled to the panel, so it looks the same at 1080p and 4K. Wi‑Fi, Bluetooth and sound are handled
                inside Riven where Android allows it; date, language and reset open the TV&apos;s own screens because they
                need system permission.
              </p>
              <p>
                Then we made it fast. Profiling with <code className="font-mono text-[15px] text-white">dumpsys gfxinfo</code> showed
                every frame repainting seven full‑screen layers. Now the background is painted once per colour change into a
                tiny image the GPU simply stretches, only the focused card casts a shadow, and moving focus no longer rebuilds
                every tile. Median frame time on an Android 8 emulator went from <strong className="text-white">93&nbsp;ms to 27–53&nbsp;ms</strong> (best run to a heavily loaded host).
              </p>
              <p className="text-white/55">
                Honest limits: a launcher can&apos;t add 8K to a 4K TV — video is decoded by the TV&apos;s chip. Riven shows you
                exactly what yours can play, under Settings → Picture &amp; display.
              </p>
            </div>
          </div>
        </section>

        {/* install */}
        <section aria-labelledby="install" className="container-x py-20 md:py-28">
          <h2 id="install" className="font-tvdisplay text-[clamp(36px,5vw,60px)] font-semibold leading-none tracking-[-0.04em]">Install in five minutes</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className={`rounded-[22px] p-7 md:p-9 ${glass}`}>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/60">From a pen drive</p>
              <ol className="mt-6 list-decimal space-y-3 pl-5 text-[15px] leading-relaxed text-white/80 marker:text-white/40">
                <li>Download the APK from the <a className="underline decoration-white/30 underline-offset-4 hover:decoration-white" href={RELEASE} target="_blank" rel="noopener noreferrer">latest release ↗</a> and copy it to a USB drive.</li>
                <li>On the TV, install a file manager such as X‑plore from Play Store and allow it under Security &amp; restrictions → Unknown sources.</li>
                <li>Open the drive, choose the APK, press Install, then Open.</li>
                <li>Press <b className="text-white">Set as Home</b> in Riven and turn on <b className="text-white">Riven Home button</b>.</li>
              </ol>
            </div>
            <div className={`rounded-[22px] p-7 md:p-9 ${glass}`}>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/60">Over Wi‑Fi, with ADB</p>
              <p className="mt-6 text-[15px] leading-relaxed text-white/80">Turn on USB debugging in Developer options, then from the repo on your computer:</p>
              <pre className="mt-4 overflow-x-auto rounded-[14px] bg-black/40 p-4 font-mono text-[13px] leading-relaxed text-white/90"><code>{`./riven.sh setup <tv-ip>   # install, make Home, screensaver
./riven.sh debloat --apply # disable bloat (reversible)
./riven.sh restore         # undo everything`}</code></pre>
              <p className="mt-4 text-[13px] text-white/55">Every change is a reversible <code className="font-mono">pm disable-user</code>; nothing is uninstalled.</p>
            </div>
          </div>
        </section>

        {/* specs */}
        <section aria-labelledby="specs" className="container-x pb-24 pt-8">
          <h2 id="specs" className="sr-only">Details</h2>
          <dl className={`grid gap-6 rounded-[22px] p-7 sm:grid-cols-2 md:grid-cols-4 md:p-9 ${glass}`}>
            {[
              ["Runs on", "Android TV 8.0+ · Google TV"],
              ["Size", "2.5 MB APK"],
              ["Built with", "Kotlin · Jetpack Compose"],
              ["Licence", "MIT, open source"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/50">{k}</dt>
                <dd className="mt-2 text-[16px] text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="container-x flex flex-col gap-4 border-t border-white/10 py-10 text-[13px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Riven TV · made by <Link href="/" className="text-white/80 hover:text-white">Riven</Link> · designed and built by <span className="text-white/80">Johnbosco J</span>
        </p>
        <p>
          Thomson debloat list from <a className="hover:text-white" href="https://github.com/Gathin23/cleanyourtv" target="_blank" rel="noopener noreferrer">CleanYourTV ↗</a> · Not affiliated with Google or Thomson
        </p>
      </footer>
    </div>
  );
}
