import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function MatrixSlide() {
  const { matrix } = presentationData

  return (
    <SlideContainer id={matrix.id} accent="slate">
      <div className="space-y-10">
        <SectionTitle
          eyebrow={matrix.eyebrow}
          title={matrix.title}
          description={matrix.description}
        />
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
          <div className="grid grid-cols-1 bg-slate-950/50 lg:grid-cols-[0.8fr_1fr_1fr_1fr]">
            <div className="border-b border-white/10 p-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 lg:border-b-0 lg:border-r">
              Nivel
            </div>
            <div className="border-b border-white/10 p-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 lg:border-b-0 lg:border-r">
              Indicadores
            </div>
            <div className="border-b border-white/10 p-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 lg:border-b-0 lg:border-r">
              Medios de verificación
            </div>
            <div className="p-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Supuestos
            </div>
          </div>
          {matrix.rows.map((row) => (
            <div
              key={row.level}
              className="grid grid-cols-1 border-t border-white/10 bg-white/[0.03] lg:grid-cols-[0.8fr_1fr_1fr_1fr]"
            >
              <div className="border-b border-white/10 p-4 font-heading text-xl text-white lg:border-b-0 lg:border-r">
                {row.level}
              </div>
              <div className="border-b border-white/10 p-4 text-sm leading-7 text-slate-300 lg:border-b-0 lg:border-r">
                {row.indicator}
              </div>
              <div className="border-b border-white/10 p-4 text-sm leading-7 text-slate-300 lg:border-b-0 lg:border-r">
                {row.verification}
              </div>
              <div className="p-4 text-sm leading-7 text-slate-300">
                {row.assumption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  )
}
