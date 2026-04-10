import { motion } from 'motion/react'

import type { SlideNavItem } from '../data/presentationData'

type ProgressIndicatorProps = {
  items: SlideNavItem[]
  activeIndex: number
  onSelect: (index: number) => void
}

export function ProgressIndicator({
  items,
  activeIndex,
  onSelect,
}: ProgressIndicatorProps) {
  return (
    <aside className="fixed right-3 top-1/2 z-30 hidden -translate-y-1/2 md:block">
      <div className="flex flex-col gap-3 rounded-full border border-white/10 bg-slate-950/65 px-3 py-4 shadow-[0_24px_64px_rgba(0,0,0,0.35)] backdrop-blur-md">
        {items.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Ir a ${item.label}`}
              className="group relative flex h-9 w-9 items-center justify-center"
            >
              <span className="absolute right-full mr-3 whitespace-nowrap rounded-full border border-white/10 bg-slate-900/90 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300 opacity-0 transition group-hover:opacity-100">
                {item.label}
              </span>
              <motion.span
                animate={{
                  scale: isActive ? 1 : 0.92,
                  opacity: isActive ? 1 : 0.56,
                }}
                transition={{ duration: 0.2 }}
                className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border ${
                  isActive
                    ? 'border-cyan-300 bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.55)]'
                    : 'border-slate-600 bg-slate-800'
                }`}
              >
                <span className="sr-only">{item.shortLabel}</span>
              </motion.span>
            </button>
          )
        })}
      </div>
    </aside>
  )
}
