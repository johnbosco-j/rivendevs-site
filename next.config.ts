import type { NextConfig } from "next";
import { CLAREO_URL, WALLLOOP_URL } from "./content/site";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  // rivendevs.in/clareo → Clareo, rivendevs.in/wallloop → WallLoop (subdomains by default).
  // One link to share per product, one place to change it.
  async redirects() {
    return [
      { source: "/clareo", destination: CLAREO_URL, permanent: false },
      { source: "/wallloop", destination: WALLLOOP_URL, permanent: false },
      // Riven TV's page lives on this site; /tv is the short link to share.
      { source: "/tv", destination: "/products/riven-tv", permanent: false },
    ];
  },
};

export default nextConfig;
