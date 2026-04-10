import { motion } from 'motion/react'

import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function AgendaSlide() {
  const { agenda } = presentationData

  return (
    <SlideContainer id={agenda.id} accent="slate">
      <div className="space-y-10">
        <SectionTitle
          eyebrow={agenda.eyebrow}
          title={agenda.title}
          description={agenda.description}
        />

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
            {agenda.steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:grid-cols-[4.5rem_1fr]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/8 font-heading text-2xl text-cyan-100">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {step.detail}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <aside className="rounded-[2rem] border border-amber-300/15 bg-[linear-gradient(180deg,rgba(22,16,9,0.92),rgba(9,9,10,0.92))] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
              Propósito del trabajo
            </p>
            <p className="mt-6 font-heading text-3xl leading-tight text-white">
              Determinar si la planta de concentrados es la decisión más sólida
              frente a la problemática identificada.
            </p>
            <p className="mt-6 text-sm leading-8 text-slate-300">
              {agenda.purpose}
            </p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                Resultado esperado
              </p>
              <p className="mt-3 text-base leading-7 text-slate-200">
                Justificar técnicamente la alternativa seleccionada antes de
                pasar a la formulación ejecutiva del proyecto.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </SlideContainer>
  )
}
