import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function StakeholdersSlide() {
  const { stakeholders } = presentationData

  return (
    <SlideContainer id={stakeholders.id} accent="slate">
      <div className="space-y-10">
        <SectionTitle
          eyebrow={stakeholders.eyebrow}
          title={stakeholders.title}
          description={stakeholders.description}
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {stakeholders.groups.map((group, index) => (
            <article
              key={group.title}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="absolute right-5 top-5 font-heading text-6xl text-white/6">
                0{index + 1}
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                {group.stance}
              </p>
              <h3 className="mt-4 font-heading text-3xl text-white">
                {group.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.actors.map((actor) => (
                  <div
                    key={actor}
                    className="rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-3 text-sm leading-6 text-slate-200"
                  >
                    {actor}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SlideContainer>
  )
}
