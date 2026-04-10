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
      className={`relative flex min-h-[100svh] snap-start items-stretch px-3 py-4 sm:px-5 sm:py-5 lg:px-8 lg:py-7 ${accentStyles[accent]}`}
    >
      <div className="pointer-events-none absolute inset-x-4 bottom-4 top-4 rounded-[1.75rem] border border-white/6 bg-white/[0.02] shadow-[0_32px_90px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:inset-x-6 sm:bottom-5 sm:top-5 lg:inset-x-8 lg:bottom-7 lg:top-7" />
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(17,22,29,0.97),rgba(7,10,14,0.94))] px-5 py-7 shadow-[0_40px_100px_rgba(0,0,0,0.24)] sm:px-7 sm:py-9 lg:px-10 lg:py-10 ${className}`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-48 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_62%)] md:block" />
        {children}
      </motion.div>
    </section>
  )
}
