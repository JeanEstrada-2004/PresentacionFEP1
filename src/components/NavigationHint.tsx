type NavigationHintProps = {
  activeIndex: number
  total: number
}

export function NavigationHint({ activeIndex, total }: NavigationHintProps) {
  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-30 max-w-[18rem] rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-xs text-slate-300 shadow-[0_18px_50px_rgba(0,0,0,0.3)] backdrop-blur-md sm:bottom-6 sm:left-6">
      <p className="font-semibold uppercase tracking-[0.22em] text-slate-200">
        Navegación base
      </p>
      <p className="mt-1 leading-relaxed text-slate-400">
        Scroll vertical o teclas <span className="text-slate-200">↑</span>{' '}
        <span className="text-slate-200">↓</span> para recorrer la presentación.
      </p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
        Slide {activeIndex + 1} de {total}
      </p>
    </div>
  )
}
