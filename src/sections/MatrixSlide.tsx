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

        <div className="grid gap-5 xl:grid-cols-3">
          {matrix.summary.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                {item.title}
              </p>
              <p className="mt-4 font-heading text-2xl leading-tight text-white">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Actividades de arranque
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {matrix.activities.map((activity, index) => (
                <article
                  key={activity}
                  className="rounded-3xl border border-white/8 bg-slate-950/40 p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    A0{index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    {activity}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-amber-300/15 bg-[linear-gradient(180deg,rgba(22,16,9,0.88),rgba(9,9,10,0.92))] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
              Supuestos clave
            </p>
            <div className="mt-6 space-y-4">
              {matrix.assumptions.map((assumption) => (
                <div
                  key={assumption}
                  className="rounded-2xl border border-white/8 bg-slate-950/35 px-4 py-4 text-sm leading-7 text-slate-200"
                >
                  {assumption}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </SlideContainer>
  )
}
