import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function ProblemContextSlide() {
  const { problemContext } = presentationData

  return (
    <SlideContainer id={problemContext.id} accent="steel">
      <div className="space-y-10">
        <SectionTitle
          eyebrow={problemContext.eyebrow}
          title={problemContext.title}
          description={problemContext.description}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {problemContext.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="font-heading text-2xl text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </SlideContainer>
  )
}
