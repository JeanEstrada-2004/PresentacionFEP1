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

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-3">
            {problemTree.effects.map((effect) => (
              <article
                key={effect}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-center text-sm leading-6 text-slate-200 sm:p-5 sm:leading-7"
              >
                {effect}
              </article>
            ))}
          </div>

          <div className="mx-auto h-10 w-px bg-gradient-to-b from-white/0 via-amber-300/40 to-white/0" />

          <article className="mx-auto max-w-4xl rounded-[2rem] border border-amber-300/25 bg-amber-300/10 px-5 py-6 text-center shadow-[0_18px_60px_rgba(245,158,11,0.12)] sm:px-6 sm:py-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
              Problema central
            </p>
            <p className="mt-4 font-heading text-[1.9rem] leading-tight text-white sm:text-4xl">
              {problemTree.core}
            </p>
          </article>

          <div className="mx-auto h-10 w-px bg-gradient-to-b from-white/0 via-amber-300/40 to-white/0" />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {problemTree.causes.map((cause) => (
              <article
                key={cause}
                className="rounded-3xl border border-white/10 bg-slate-950/45 p-4 text-sm leading-6 text-slate-300 sm:p-5 sm:leading-7"
              >
                {cause}
              </article>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
