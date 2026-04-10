import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function AgendaSlide() {
  const { agenda, sequence } = presentationData

  return (
    <SlideContainer id={agenda.id} accent="slate">
      <div className="space-y-10">
        <SectionTitle
          eyebrow={agenda.eyebrow}
          title={agenda.title}
          description={agenda.description}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {sequence.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/25 hover:bg-white/[0.06]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                {item.shortLabel}
              </p>
              <h3 className="mt-4 font-heading text-xl text-white">{item.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Placeholder para desarrollar el contenido final de esta sección
                sin modificar la estructura de navegación.
              </p>
            </article>
          ))}
        </div>
      </div>
    </SlideContainer>
  )
}
