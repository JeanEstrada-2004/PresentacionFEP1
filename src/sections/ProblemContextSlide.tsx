import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function ProblemContextSlide() {
  const { problemContext } = presentationData

  return (
    <SlideContainer id={problemContext.id} accent="steel">
      <div className="space-y-8">
        <SectionTitle
          eyebrow={problemContext.eyebrow}
          title={problemContext.title}
          description={problemContext.description}
        />

        <div className="rounded-[2rem] border border-cyan-300/15 bg-cyan-300/8 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
            Problema central
          </p>
          <p className="mt-3 font-heading text-3xl text-white sm:text-4xl">
            Reducida valorización industrial del mineral de hierro
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {problemContext.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                {card.signal}
              </p>
              <h3 className="mt-4 font-heading text-3xl text-white">
                {card.title}
              </h3>
              <div className="mt-6 space-y-4">
                {card.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-sm leading-7 text-slate-300"
                  >
                    {point}
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
