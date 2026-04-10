type SectionTitleProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <header className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
        {eyebrow}
      </span>
      <div className="space-y-4">
        <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      </div>
    </header>
  )
}
