"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { portfolioItems } from "@/lib/portfolio"

export default function PortfolioListPage() {
  const categories = useMemo(() => ["すべて", ...Array.from(new Set(portfolioItems.map((item) => item.category)))], [])
  const [activeCategory, setActiveCategory] = useState("すべて")

  const filteredItems = useMemo(() => {
    if (activeCategory === "すべて") return portfolioItems
    return portfolioItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 md:px-10 py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Portfolio Showcase</p>
            <h1 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">ポートフォリオ</h1>
            <p className="mt-3 font-mono text-sm text-muted-foreground">制作事例の一覧です。クリックで詳細ページへ移動します。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <article key={item.slug} className="group overflow-hidden rounded-xl border border-border/40 bg-card/40">
                <Link href={`/portfolio/${item.slug}`} className="block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title}のOG画像`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      unoptimized
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-flex rounded-full border border-border/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {item.category}
                    </span>
                    <h2 className="mt-3 font-[var(--font-bebas)] text-3xl tracking-tight">{item.title}</h2>
                    <p className="mt-2 font-mono text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 border-t border-border/40 bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-3 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] ${
                activeCategory === category
                  ? "border-foreground/60 text-foreground"
                  : "border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
