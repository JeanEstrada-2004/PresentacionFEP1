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
  const alignment =
    align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <header className={`flex max-w-4xl flex-col gap-3 ${alignment}`}>
      <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200 sm:text-[11px]">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl xl:text-[3.4rem]">
          {title}
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-[15px] sm:leading-8">
          {description}
        </p>
      </div>
    </header>
  )
}
