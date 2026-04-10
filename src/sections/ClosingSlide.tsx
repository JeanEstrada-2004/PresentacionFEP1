import { motion } from 'motion/react'

import { SlideContainer } from '../components/SlideContainer'
import { presentationData } from '../data/presentationData'

export function ClosingSlide() {
  const { closing } = presentationData

  return (
    <SlideContainer
      id={closing.id}
      accent="amber"
      className="items-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center"
      >
        <p className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-slate-300">
          {closing.eyebrow}
        </p>
        <h2 className="mt-10 font-heading text-7xl tracking-[-0.06em] text-white sm:text-8xl lg:text-[8rem]">
          {closing.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {closing.subtitle}
        </p>
        <div className="mt-10 h-px w-40 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
        <p className="mt-10 text-sm uppercase tracking-[0.28em] text-amber-200">
          {closing.footer}
        </p>
      </motion.div>
    </SlideContainer>
  )
}
