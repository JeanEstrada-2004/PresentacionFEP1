import { motion } from 'motion/react'

import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

const maxCriterionWeight = 28

export function AlternativesSlide() {
  const { alternatives } = presentationData

  return (
    <SlideContainer id={alternatives.id} accent="amber">
      <div className="space-y-8">
        <SectionTitle
          eyebrow={alternatives.eyebrow}
          title={alternatives.title}
          description={alternatives.description}
        />

        <div className="rounded-[2rem] border border-amber-300/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.14),rgba(255,255,255,0.03))] p-6">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
                Alternativa seleccionada
              </p>
              <h3 className="mt-4 font-heading text-3xl leading-tight text-white sm:text-4xl">
                {alternatives.winner.title}
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-200">
                {alternatives.winner.summary}
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6 xl:ml-auto xl:w-[19rem]">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Puntaje total
              </p>
              <div className="mt-3 flex items-end gap-3">
                <span className="font-heading text-7xl leading-none text-white">
                  {alternatives.winner.score.toFixed(2)}
                </span>
                <span className="pb-2 text-sm uppercase tracking-[0.24em] text-amber-200">
                  / 5.00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Criterios de evaluación
            </p>
            <div className="mt-6 space-y-5">
              {alternatives.criteria.map((criterion) => (
                <div key={criterion.name}>
                  <div className="flex items-start justify-between gap-4">
                    <p className="max-w-[22rem] text-sm leading-7 text-slate-200">
                      {criterion.name}
                    </p>
                    <span className="text-sm font-semibold text-white">
                      {criterion.weight}
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-amber-300 to-cyan-300"
                      style={{
                        width: `${(criterion.weight / maxCriterionWeight) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-4">
            {alternatives.options.map((option, index) => {
              const width = `${(option.score / 5) * 100}%`

              return (
                <motion.article
                  key={option.code}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className={`rounded-[2rem] border p-6 ${
                    option.selected
                      ? 'border-amber-300/30 bg-amber-300/10 shadow-[0_18px_60px_rgba(245,158,11,0.12)]'
                      : 'border-white/10 bg-white/[0.04]'
                  }`}
                >
                  <div className="grid gap-5 lg:grid-cols-[4.5rem_1fr_auto] lg:items-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl font-heading text-3xl ${
                        option.selected
                          ? 'border border-amber-300/30 bg-amber-300/15 text-amber-100'
                          : 'border border-white/10 bg-slate-950/45 text-slate-200'
                      }`}
                    >
                      {option.code}
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl text-white">
                        {option.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {option.summary}
                      </p>
                    </div>
                    <div className="lg:text-right">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                        Puntaje
                      </p>
                      <p className="mt-2 font-heading text-5xl text-white">
                        {option.score.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 h-3 rounded-full bg-slate-900/80">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width }}
                      viewport={{ once: false, amount: 0.6 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-3 rounded-full ${
                        option.selected
                          ? 'bg-[linear-gradient(90deg,#fcd34d,#67e8f9)]'
                          : 'bg-[linear-gradient(90deg,rgba(148,163,184,0.65),rgba(226,232,240,0.9))]'
                      }`}
                    />
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
