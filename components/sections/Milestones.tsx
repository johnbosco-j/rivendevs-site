import Image from "next/image";
import { SectionHeader } from "@/components/ui/AccentHeading";
import { Chip } from "@/components/ui/Chip";
import { milestones, milestonesSection } from "@/content/milestones";

export function Milestones() {
  return (
    <section id="milestones" aria-labelledby="milestones-title" className="relative section-divider section-y">
      <div className="container-x">
        <SectionHeader id="milestones-title" label={milestonesSection.label} heading={milestonesSection.heading} intro={milestonesSection.intro} />

        <div className="mt-14 grid gap-6 md:mt-20">
          {milestones.map((m, idx) => {
            const [lead, ...rest] = m.photos;
            return (
              <article
                key={m.id}
                aria-labelledby={`milestone-${m.id}`}
                className="card reveal grid gap-8 overflow-hidden p-6 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-12"
                style={{ ["--i" as string]: idx }}
              >
                <div className="flex flex-col lg:col-span-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Chip tone="live">{m.result}</Chip>
                    <Chip tone="neutral">{m.date}</Chip>
                  </div>
                  <p className="micro mt-6">{m.event}</p>
                  <h3 id={`milestone-${m.id}`} className="mt-3 text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[34px]">
                    {m.title}
                  </h3>
                  <p className="mt-4 text-muted">{m.body}</p>

                  <dl className="mt-8 grid gap-5 border-t border-line pt-8 sm:grid-cols-2">
                    <div>
                      <dt className="micro">Prize</dt>
                      <dd className="mt-2 font-mono text-[22px] text-ink">{m.prize}</dd>
                    </div>
                    <div>
                      <dt className="micro">Where</dt>
                      <dd className="mt-2 text-[15px] text-muted">{m.place}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="micro">Team · {m.representing}</dt>
                      <dd className="mt-3 flex flex-wrap gap-2">
                        {m.people.map((p) => (
                          <span key={p} className="rounded-full border border-line px-3 py-1 text-[14px] text-ink/90">
                            {p}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="grid content-start gap-3 self-start lg:col-span-7 lg:grid-cols-6">
                  {lead && (
                    <figure className="overflow-hidden rounded-card border border-line bg-bg lg:col-span-6">
                      <Image src={lead.src} width={lead.width} height={lead.height} alt={lead.alt} sizes="(min-width: 1024px) 680px, 100vw" className="h-auto w-full object-cover" />
                    </figure>
                  )}
                  {rest.map((p) => (
                    <figure key={p.src} className="overflow-hidden rounded-card border border-line bg-bg lg:col-span-2">
                      <Image src={p.src} width={p.width} height={p.height} alt={p.alt} sizes="(min-width: 1024px) 220px, 33vw" className="aspect-[4/3] size-full object-cover" />
                    </figure>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
