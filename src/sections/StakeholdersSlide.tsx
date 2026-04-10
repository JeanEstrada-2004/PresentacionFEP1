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
        <div className="grid gap-5 md:grid-cols-2">
          {stakeholders.groups.map((group, index) => (
            <article
              key={group.role}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Actor {index + 1}
              </p>
              <h3 className="mt-4 font-heading text-2xl text-white">{group.role}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {group.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SlideContainer>
  )
}
