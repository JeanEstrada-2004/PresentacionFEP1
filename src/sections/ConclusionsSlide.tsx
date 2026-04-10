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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {conclusions.blocks.map((block, index) => (
            <article
              key={block.title}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="absolute right-5 top-4 font-heading text-6xl text-white/6">
                0{index + 1}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                {block.title}
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-200">{block.text}</p>
            </article>
          ))}
        </div>
      </div>
    </SlideContainer>
  )
}
