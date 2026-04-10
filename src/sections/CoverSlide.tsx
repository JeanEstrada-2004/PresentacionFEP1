import { motion } from 'motion/react'

import { SlideContainer } from '../components/SlideContainer'
import { SectionTitle } from '../components/SectionTitle'
import { presentationData } from '../data/presentationData'

export function CoverSlide() {
  const { cover } = presentationData

  return (
    <SlideContainer id={cover.id} accent="steel" className="overflow-hidden">
      <div className="absolute inset-y-0 right-0 hidden w-[28rem] bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.12),transparent_58%)] lg:block" />
      <div className="relative grid flex-1 gap-8 xl:grid-cols-[1.18fr_0.82fr] xl:items-end">
        <div className="space-y-7">
          <SectionTitle
            eyebrow={cover.group}
            title={cover.title}
            description={cover.subtitle}
          />

          <div className="flex flex-wrap gap-3">
            {cover.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {cover.pillars.map((pillar, index) => (
              <motion.article
                key={pillar}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Eje 0{index + 1}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{pillar}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(13,19,28,0.92),rgba(6,10,15,0.94))] p-6 sm:p-7"
        >
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Primer entregable
          </p>
          <div className="mt-7 space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Entregable
              </p>
              <p className="mt-2 font-heading text-[1.8rem] leading-tight text-white sm:text-3xl">
                Primer entregable
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Enfoque
              </p>
              <p className="mt-2 text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                Evaluación de una alternativa industrial para transformar mineral
                de hierro en un concentrado apto para la industria del acero.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Grupo
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Grupo 04
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Sección
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Sección 1
                </p>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </SlideContainer>
  )
}
