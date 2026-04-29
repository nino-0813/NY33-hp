type BlogHeaderProps = {
  category: string
  title: string
  subtitle: string
  publishedAt: string
  readingTime?: string
  level?: string
}

export function BlogHeader({ category, title, subtitle, publishedAt, readingTime, level }: BlogHeaderProps) {
  return (
    <header className="mb-10">
      <span className="inline-flex rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-500">{category}</span>
      <h1 className="mt-5 text-3xl md:text-4xl font-bold leading-tight text-white">{title}</h1>
      <p className="mt-3 text-lg text-gray-400">{subtitle}</p>
      <p className="mt-5 text-sm text-gray-500">
        公開日：{publishedAt}
        {readingTime ? (
          <>
            <span aria-hidden="true"> ・ </span>
            読了時間：約{readingTime}
          </>
        ) : null}
        {level ? (
          <>
            <span aria-hidden="true"> ・ </span>
            難易度：{level}
          </>
        ) : null}
      </p>
    </header>
  )
}
