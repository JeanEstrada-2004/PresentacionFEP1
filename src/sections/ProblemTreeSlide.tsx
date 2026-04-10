import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function ProblemTreeSlide() {
  const { problemTree } = presentationData

  return (
    <SlideContainer id={problemTree.id} accent="amber">
      <div className="space-y-10">
        <SectionTitle
          eyebrow={problemTree.eyebrow}
          title={problemTree.title}
          description={problemTree.description}
        />
        <div className="grid gap-5 xl:grid-cols-[1fr_0.9fr_1fr]">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="font-heading text-2xl text-white">Causas</h3>
            <div className="mt-5 space-y-4">
              {problemTree.causes.map((item) => (
                <p
                  key={item}
                  className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-sm leading-7 text-slate-300"
                >
                  {item}
                </p>
              ))}
            </div>
          </article>
          <article className="flex items-center rounded-3xl border border-amber-300/20 bg-amber-300/8 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
                Problema central
              </p>
              <p className="mt-4 font-heading text-3xl text-white">
                {problemTree.core}
              </p>
            </div>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="font-heading text-2xl text-white">Efectos</h3>
            <div className="mt-5 space-y-4">
              {problemTree.effects.map((item) => (
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
