import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function ClosingSlide() {
  const { closing } = presentationData

  return (
    <SlideContainer id={closing.id} accent="amber">
      <div className="grid flex-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <SectionTitle
          eyebrow={closing.eyebrow}
          title={closing.title}
          description={closing.description}
        />
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
            Próximas iteraciones
          </p>
          <div className="mt-5 space-y-4">
            {closing.nextSteps.map((step) => (
              <p
                key={step}
                className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-sm leading-7 text-slate-300"
              >
                {step}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
