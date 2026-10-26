import { LINKS } from "./site";

export type ProductStatus = "Live" | "Beta" | "In development";

export type Product = {
  slug: string;
  name: string;
  status: ProductStatus;
  /** Where it runs, shown next to the status chip. */
  platforms: string;
  /** Domain ids from content/domains.ts */
  domains: string[];
  domainLabel: string;
  tagline: string;
  description: string;
  features: string[];
  stats?: { value: string; label: string; accent?: boolean }[];
  statsSource?: string;
  /** Product link (external or a redirecting short link). Undefined → CTA shows "coming soon". */
  href?: string;
  /** Address shown in the card's browser frame. */
  displayUrl?: string;
  cta: string;
  /** Optional real screenshot in /public. Without it the coded mock named by `mock` renders. */
  screenshot?: { src: string; width: number; height: number; alt: string };
  /** Coded stand-in shown until a real screenshot exists. Neutral greys only on Riven pages. */
  mock: "clareo" | "wallloop";
  disclaimer?: string;
  featured?: boolean;
};

// Newest first. The first product with `featured: true` gets the large card.
export const products: Product[] = [
  {
    slug: "wallloop",
    name: "WallLoop",
    status: "Beta",
    platforms: "macOS 14+",
    domains: [],
    domainLabel: "Desktop · macOS",
    tagline: "Your videos, alive on the desktop.",
    description:
      "WallLoop turns your own videos into a live, looping wallpaper on every Mac display — muted, hardware-decoded and quiet, living in the menu bar.",
    features: [
      "Plays MP4, MOV and M4V from folders you choose, on every display and every Space.",
      "Shuffle or in order, every 5 minutes to daily, with favorites and global shortcuts.",
      "Pauses itself on battery, in Low Power Mode, behind full-screen apps and when locked.",
      "Your lock screen shows a still from the video that was playing.",
      "No accounts, no tracking: your videos never leave your Mac. Free and open source.",
    ],
    stats: [
      { value: "~1.8%", label: "CPU while playing one video on one display", accent: true },
      { value: "0 bytes", label: "of your videos uploaded, ever" },
      { value: "6", label: "automatic pause triggers, from battery to the lock screen" },
    ],
    statsSource: "CPU: Activity Monitor, one H.264 video on a 1710×1112 display, Apple silicon MacBook, October 2026.",
    href: LINKS.wallloop,
    displayUrl: LINKS.wallloopDisplay,
    cta: "Visit WallLoop",
    mock: "wallloop",
    disclaimer: "Preview build: not yet notarized by Apple.",
  },
  {
    slug: "clareo",
    name: "Clareo",
    status: "Live",
    platforms: "Web + Desktop",
    domains: ["health", "ai-perception"],
    domainLabel: "Health & Wellbeing · AI",
    tagline: "Screen all day. Keep your eyes.",
    description:
      "Clareo watches for drowsiness, eye strain and bad posture through your webcam — privately, on your own device — and nudges you to blink, rest and take breaks at the right moment.",
    features: [
      "On-device detection: video never leaves your computer.",
      "Calibrates to your own eyes in 20 seconds and learns from your 👍 / 👎 on alerts.",
      "Works in dim rooms and on basic webcams with automatic low-light enhancement.",
      "Weekly analytics, trends and an AI coach that turns your numbers into habits.",
      "Break, 20-20-20 and posture reminders — as a web app and a desktop app.",
    ],
    // Update from Clareo's docs/DETECTION_ENGINE.md when new benchmarks land.
    stats: [
      { value: "97%+", label: "open/closed eye accuracy on labelled real-world photos", accent: true },
      { value: "1.2 s", label: "of closed eyes before the wake-up alarm sounds" },
      { value: "0 frames", label: "of video uploaded, ever" },
    ],
    statsSource: "Accuracy: leave-one-out test on labelled real-world photos. Source: Clareo detection-engine benchmarks.",
    href: LINKS.clareo,
    displayUrl: LINKS.clareoDisplay,
    cta: "Visit Clareo",
    mock: "clareo",
    // screenshot: { src: "/products/clareo/dashboard.png", width: 1600, height: 1000, alt: "Clareo dashboard showing blink rate, fatigue score and weekly trends" },
    disclaimer: "Clareo is a wellness tool, not a medical device.",
    featured: true,
  },
];
