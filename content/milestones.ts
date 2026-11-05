import type { Heading } from "./site";

export type Photo = { src: string; width: number; height: number; alt: string };

export type Milestone = {
  id: string;
  date: string;
  event: string;
  place: string;
  title: string;
  /** Shown large, e.g. the placing. */
  result: string;
  prize: string;
  body: string;
  people: string[];
  representing: string;
  photos: Photo[];
};

export const milestonesSection: { label: string; heading: Heading; intro: string } = {
  label: "Milestones",
  heading: { before: "First wins,", accent: "together", after: "." },
  intro: "Our first outing as RivenDevs, at IIT Madras. Two first prizes in one day.",
};

export const milestones: Milestone[] = [
  {
    id: "think2impact-2026",
    date: "4 November 2026",
    event: "PALS Think2Impact 2026 — Industry Problem Solving Workshop",
    place: "Indian Institute of Technology Madras",
    title: "SAFER: Smart Allocation Framework for Emergency Response",
    result: "1st prize · IT Engineering",
    prize: "₹5,000",
    body:
      "Our first hackathon as RivenDevs. We built SAFER to get emergency resources to the right place faster, a real-world response problem set by industry, and took first place in the IT Engineering track, with a ₹5,000 prize for the team.",
    people: ["Johnbosco J", "Joel Nitin M", "Jeffrey Figo J", "Joe Naren A"],
    representing: "Loyola-ICAM College of Engineering and Technology",
    photos: [
      { src: "/milestones/pals-1.jpg", width: 1600, height: 1200, alt: "Team RivenDevs receiving the first-prize cheque at PALS Think2Impact, IIT Madras" },
      { src: "/milestones/pals-5.jpg", width: 1600, height: 1200, alt: "Johnbosco, Joel, Jeffrey and Joe with their certificates and laptops on the steps at IIT Madras" },
      { src: "/milestones/pals-6.jpg", width: 1131, height: 1600, alt: "PALS Think2Impact winners announcement: RivenDevs, Loyola-ICAM, first in IT Engineering" },
      { src: "/milestones/pals-3.jpg", width: 1600, height: 1200, alt: "All Think2Impact winners and PALS members together on stage at IIT Madras" },
    ],
  },
  {
    id: "pals-quiz-2026",
    date: "November 2026",
    event: "PALS Quiz",
    place: "Indian Institute of Technology Madras",
    title: "Quiz champions for LICET",
    result: "1st prize",
    prize: "₹2,000",
    body:
      "Johnbosco, LICET's student leader, teamed up with classmate and close friend Bharanidharan to represent the college in the PALS quiz, and won it, taking home a ₹2,000 cash prize.",
    people: ["Johnbosco J", "Bharanidharan"],
    representing: "Loyola-ICAM College of Engineering and Technology (LICET)",
    photos: [
      { src: "/milestones/pals-4.jpg", width: 1600, height: 1200, alt: "Johnbosco and Bharanidharan receiving the quiz first prize at IIT Madras" },
    ],
  },
];
