import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function AlternativesSlide() {
  const { alternatives } = presentationData

  return (
    <SlideContainer id={alternatives.id} accent="amber">
      <div className="space-y-10">
        <SectionTitle
          eyebrow={alternatives.eyebrow}
          title={alternatives.title}
          description={alternatives.description}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {alternatives.options.map((option) => (
            <article
              key={option.name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="font-heading text-2xl text-white">{option.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {option.focus}
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-slate-500">
                Espacio reservado para criterios de costo, impacto y factibilidad
              </p>
            </article>
          ))}
        </div>
      </div>
    </SlideContainer>
  )
}
