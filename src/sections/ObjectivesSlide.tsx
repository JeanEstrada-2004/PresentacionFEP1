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

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-3">
            {objectives.ends.map((end) => (
              <article
                key={end}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center text-sm leading-7 text-slate-200"
              >
                {end}
              </article>
            ))}
          </div>

          <div className="mx-auto h-10 w-px bg-gradient-to-b from-white/0 via-cyan-300/40 to-white/0" />

          <article className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-300/25 bg-cyan-300/10 px-6 py-7 text-center shadow-[0_18px_60px_rgba(103,232,249,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Objetivo central
            </p>
            <p className="mt-4 font-heading text-3xl leading-tight text-white sm:text-4xl">
              {objectives.core}
            </p>
          </article>

          <div className="mx-auto h-10 w-px bg-gradient-to-b from-white/0 via-cyan-300/40 to-white/0" />

          <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {objectives.means.map((mean) => (
                <article
                  key={mean}
                  className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 text-sm leading-7 text-slate-300"
                >
                  {mean}
                </article>
              ))}
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Medios que exceden el alcance
              </p>
              <div className="mt-5 space-y-4">
                {objectives.outOfScope.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-dashed border-white/12 bg-slate-950/35 px-4 py-4 text-sm leading-7 text-slate-400"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
