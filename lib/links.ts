import { LINKS } from "@/content/site";

/** Resolves the footer's symbolic link keys ("clareo", "wallloop", "github") to URLs. */
export function resolveHref(href: string): { href?: string; external: boolean } {
  if (href.startsWith("#")) return { href, external: false };
  if (href === "clareo") return { href: LINKS.clareo, external: true };
  if (href === "wallloop") return { href: LINKS.wallloop, external: true };
  if (href === "github") return { href: LINKS.github, external: true };
  return { href, external: /^https?:\/\//.test(href) };
}
