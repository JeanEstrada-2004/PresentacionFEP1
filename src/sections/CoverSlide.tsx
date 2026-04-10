import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function CoverSlide() {
  const { cover, meta } = presentationData

  return (
    <SlideContainer id={cover.id} accent="steel">
      <div className="grid flex-1 gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div className="space-y-10">
          <SectionTitle
            eyebrow={`${meta.phase} | ${cover.eyebrow}`}
            title={cover.title}
            description={cover.description}
          />
          <div className="flex flex-wrap gap-3">
            {cover.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {cover.notes.map((note) => (
            <article
              key={note}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-300"
            >
              {note}
            </article>
          ))}
        </div>
      </div>
    </SlideContainer>
  )
}
