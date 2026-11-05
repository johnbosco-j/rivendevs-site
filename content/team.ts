import type { Heading } from "./site";

export type Member = {
  name: string;
  role: string;
  /** One line on what they own. */
  focus: string;
  initials: string;
  founder?: boolean;
};

export const teamSection: { label: string; heading: Heading; intro: string } = {
  label: "Team",
  heading: { before: "Built on", accent: "friendship", after: "." },
  intro:
    "RivenDevs is the team behind Riven: classmates and close friends who build together, learn together and push each other to ship things that matter.",
};

export const team: Member[] = [
  {
    name: "Johnbosco J",
    role: "Founder & Lead Software Development Engineer",
    focus: "Vision, software architecture, AI/ML, backend and technical execution.",
    initials: "JJ",
    founder: true,
  },
  {
    name: "Joe Naren A",
    role: "Chief Marketing Officer",
    focus: "Marketing strategy, branding, growth, outreach and communications.",
    initials: "JN",
  },
  {
    name: "Jeffrey Figo J",
    role: "Chief Business Officer",
    focus: "Business strategy, partnerships and business development.",
    initials: "JF",
  },
  {
    name: "Joel Nitin M",
    role: "Head of Product Design & UI/UX",
    focus: "Product experience, UI/UX design and frontend development.",
    initials: "JM",
  },
  {
    name: "Daniel",
    role: "Chief Creative Officer",
    focus: "Creative direction, visual identity and social media.",
    initials: "D",
  },
  {
    name: "Asen Castro A",
    role: "Software Development Engineer",
    focus: "Software engineering and building reliable product solutions.",
    initials: "AC",
  },
];
