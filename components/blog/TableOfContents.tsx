type TocItem = {
  id: string
  label: string
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav className="mb-12 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6" aria-label="目次">
      <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">この記事の内容</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-sm text-gray-300 transition-colors hover:text-orange-500">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
