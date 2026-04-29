"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { trackEvent } from "@/lib/gtag"
import { cn } from "@/lib/utils"
import type { FaqCategory } from "@/data/faq-page-data"
import { faqAnchorId } from "@/data/faq-page-data"
import { CTASection } from "@/components/blog/CTASection"

function filterCategories(data: FaqCategory[], query: string): FaqCategory[] {
  const q = query.trim()
  if (!q) return data
  return data
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) => item.question.includes(q) || item.answer.includes(q)),
    }))
    .filter((cat) => cat.items.length > 0)
}

function FadeInCategory({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-500 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      )}
    >
      {children}
    </section>
  )
}

function FaqAccordionRow({
  itemId,
  question,
  answer,
  open,
  onToggle,
}: {
  itemId: string
  question: string
  answer: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-white/[0.06] bg-white/[0.03]">
      <button
        type="button"
        id={itemId}
        className="flex w-full cursor-pointer items-start justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${itemId}-answer`}
      >
        <span className="text-base font-bold text-white">{question}</span>
        <span className="shrink-0 font-mono text-lg leading-none text-orange-500" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        id={`${itemId}-answer`}
        role="region"
        aria-labelledby={itemId}
        className={cn(
          "overflow-hidden px-6 transition-[max-height,opacity] duration-200 ease-out",
          open ? "max-h-[2400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <p className="pb-5 text-sm leading-relaxed text-gray-400">{answer}</p>
      </div>
    </div>
  )
}

export function FAQPageClient({ categories }: { categories: FaqCategory[] }) {
  const [query, setQuery] = useState("")
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set())

  const filtered = useMemo(() => filterCategories(categories, query), [categories, query])

  /** 全カテゴリから itemId を解決（ハッシュ用） */
  const findItemByAnchor = useCallback(
    (anchor: string) => {
      for (let ci = 0; ci < categories.length; ci++) {
        const cat = categories[ci]
        for (let ii = 0; ii < cat.items.length; ii++) {
          const id = faqAnchorId(cat.items[ii].question, ci, ii)
          if (id === anchor) return { itemId: id }
        }
      }
      return null
    },
    [categories],
  )

  const toggle = useCallback((itemId: string, question: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(itemId)) {
        next.delete(itemId)
      } else {
        next.add(itemId)
        trackEvent("faq_open", { question })
      }
      return next
    })
  }, [])

  useEffect(() => {
    const applyHash = () => {
      const raw = typeof window !== "undefined" ? window.location.hash.slice(1) : ""
      if (!raw) return
      let decoded = raw
      try {
        decoded = decodeURIComponent(raw)
      } catch {
        /* keep raw */
      }
      const hit = findItemByAnchor(decoded) ?? findItemByAnchor(raw)
      if (!hit) return
      setOpenIds((prev) => new Set([...prev, hit.itemId]))
      requestAnimationFrame(() => {
        const el = document.getElementById(hit.itemId)
        el?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }

    applyHash()
    window.addEventListener("hashchange", applyHash)
    return () => window.removeEventListener("hashchange", applyHash)
  }, [findItemByAnchor])

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-14">
      <header className="mb-10">
        <span className="inline-flex rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-500">
          FAQ
        </span>
        <h1 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">よくある質問</h1>
        <p className="mt-3 text-base text-gray-400">ご依頼前の疑問にお答えします。</p>
      </header>

      <div className="mb-10">
        <label htmlFor="faq-search" className="sr-only">
          FAQを検索
        </label>
        <input
          id="faq-search"
          type="search"
          placeholder="キーワードで質問を検索（例：AIO、料金、Next.js）"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none ring-orange-500/30 transition-shadow focus:ring-2"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-6 py-8 text-center text-sm text-gray-400">
          該当する質問が見つかりませんでした。別のキーワードでお試しください。
        </p>
      ) : null}

      {filtered.map((cat, idx) => {
        const catIdx = categories.findIndex((c) => c.category === cat.category)
        if (catIdx < 0) return null

        return (
          <div key={cat.category} className={cn(idx > 0 && "mt-12")}>
            <FadeInCategory>
              <h2 className="border-l-4 border-orange-500 pl-4 text-lg font-bold text-white">{cat.category}</h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/[0.06]">
                {cat.items.map((item) => {
                  const origItemIdx = categories[catIdx].items.findIndex((i) => i.question === item.question)
                  const itemId = faqAnchorId(item.question, catIdx, origItemIdx >= 0 ? origItemIdx : 0)
                  const open = openIds.has(itemId)
                  return (
                    <FaqAccordionRow
                      key={itemId}
                      itemId={itemId}
                      question={item.question}
                      answer={item.answer}
                      open={open}
                      onToggle={() => toggle(itemId, item.question)}
                    />
                  )
                })}
              </div>
            </FadeInCategory>
          </div>
        )
      })}

      <CTASection
        heading="まだ疑問が解消されない方へ"
        body={
          "お気軽にご相談ください。\nあなたのサロンの状況に合わせて丁寧にお答えします。"
        }
        gaLocation="faq_page_cta"
      />
    </div>
  )
}
