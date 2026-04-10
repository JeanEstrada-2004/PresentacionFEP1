import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function ObjectivesSlide() {
  const { objectives } = presentationData

  return (
    <SlideContainer id={objectives.id} accent="steel">
      <div className="space-y-10">
        <SectionTitle
          eyebrow={objectives.eyebrow}
          title={objectives.title}
          description={objectives.description}
        />
        <div className="grid gap-5 xl:grid-cols-[1fr_0.9fr_1fr]">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="font-heading text-2xl text-white">Medios</h3>
            <div className="mt-5 space-y-4">
              {objectives.means.map((item) => (
                <p
                  key={item}
                  className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-sm leading-7 text-slate-300"
                >
                  {item}
                </p>
              ))}
            </div>
          </article>
          <article className="flex items-center rounded-3xl border border-cyan-300/20 bg-cyan-300/8 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Objetivo central
              </p>
              <p className="mt-4 font-heading text-3xl text-white">
                {objectives.core}
              </p>
            </div>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="font-heading text-2xl text-white">Fines</h3>
            <div className="mt-5 space-y-4">
              {objectives.ends.map((item) => (
                <p
                  key={item}
                  className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-sm leading-7 text-slate-300"
                >
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </SlideContainer>
  )
}
