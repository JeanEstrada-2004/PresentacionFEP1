import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function ConclusionsSlide() {
  const { conclusions } = presentationData

  return (
    <SlideContainer id={conclusions.id} accent="steel">
      <div className="space-y-10">
        <SectionTitle
          eyebrow={conclusions.eyebrow}
          title={conclusions.title}
          description={conclusions.description}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {conclusions.bullets.map((bullet, index) => (
            <article
              key={bullet}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Punto {index + 1}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{bullet}</p>
            </article>
          ))}
        </div>
      </div>
    </SlideContainer>
  )
}
