import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function ConclusionsSlide() {
  const { conclusions } = presentationData

  return (
    <SlideContainer id={conclusions.id} accent="steel">
      <div className="space-y-8">
        <SectionTitle
          eyebrow={conclusions.eyebrow}
          title={conclusions.title}
          description={conclusions.description}
        />

        <div className="rounded-[2rem] border border-cyan-300/15 bg-cyan-300/8 px-5 py-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
            Cierre ejecutivo
          </p>
          <p className="mt-3 text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
            La alternativa A concentra la mejor respuesta técnica y estratégica
            para incrementar la valorización industrial del mineral de hierro en
            Pampa del Pongo.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {conclusions.blocks.map((block, index) => (
            <article
              key={block.title}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6"
            >
              <div className="absolute right-5 top-4 font-heading text-6xl text-white/6">
                0{index + 1}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                {block.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-200 sm:leading-8">
                {block.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SlideContainer>
  )
}
