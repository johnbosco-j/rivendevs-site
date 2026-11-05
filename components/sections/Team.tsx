import { SectionHeader } from "@/components/ui/AccentHeading";
import { team, teamSection } from "@/content/team";

export function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="relative section-divider section-y">
      <div className="container-x">
        <SectionHeader id="team-title" label={teamSection.label} heading={teamSection.heading} intro={teamSection.intro} />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 md:gap-6 lg:grid-cols-3">
          {team.map((m, i) => (
            <li
              key={m.name}
              className={`card card-hover reveal flex flex-col gap-6 p-6 transition-transform duration-2 ease-out md:p-7 ${m.founder ? "border-line-strong" : ""}`}
              style={{ ["--i" as string]: i }}
            >
              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className={`grid size-14 place-items-center rounded-full border font-serif text-[24px] leading-none ${m.founder ? "border-orange text-ink" : "border-line-strong text-muted"}`}
                >
                  {m.initials}
                </span>
                {m.founder && <span className="micro">Founder</span>}
              </div>
              <div>
                <p className="text-[22px] font-semibold leading-tight tracking-[-0.02em]">{m.name}</p>
                <p className="mt-1 font-serif text-[18px] italic text-muted">{m.role}</p>
                <p className="mt-4 text-[15px] text-muted">{m.focus}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
