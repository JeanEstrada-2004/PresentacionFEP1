import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type SlideContainerProps = {
  id: string
  children: ReactNode
  accent?: 'steel' | 'amber' | 'slate'
  className?: string
}

const accentStyles = {
  steel:
    "before:absolute before:content-[''] before:inset-y-10 before:right-10 before:w-40 before:rounded-full before:bg-cyan-400/10 before:blur-3xl",
  amber:
    "before:absolute before:content-[''] before:inset-y-12 before:right-12 before:w-40 before:rounded-full before:bg-amber-400/10 before:blur-3xl",
  slate:
    "before:absolute before:content-[''] before:inset-y-16 before:right-16 before:w-40 before:rounded-full before:bg-slate-300/8 before:blur-3xl",
}

export function SlideContainer({
  id,
  children,
  accent = 'steel',
  className = '',
}: SlideContainerProps) {
  return (
    <section
      id={id}
      className={`relative flex min-h-[100svh] snap-start items-stretch px-4 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-8 ${accentStyles[accent]}`}
    >
      <div className="pointer-events-none absolute inset-x-6 bottom-5 top-5 rounded-[2rem] border border-white/6 bg-white/[0.02] shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:inset-x-8 sm:bottom-6 sm:top-6 lg:inset-x-10 lg:bottom-8 lg:top-8" />
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(14,18,23,0.96),rgba(7,10,14,0.92))] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  )
}
