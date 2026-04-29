"use client"

import { useState } from "react"
import { trackEvent } from "@/lib/gtag"
import { cn } from "@/lib/utils"

export type FAQItem = {
  question: string
  answer: string
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="mt-6 divide-y divide-white/[0.06] border-t border-white/[0.06]">
      {items.map((item, i) => (
        <FAQRow key={i} item={item} />
      ))}
    </div>
  )
}

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/[0.06]">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 py-4 text-left"
        onClick={() =>
          setOpen((v) => {
            if (!v) {
              trackEvent("faq_open", { question: item.question })
            }
            return !v
          })
        }
        aria-expanded={open}
      >
        <span className="font-bold text-white">{item.question}</span>
        <span className="shrink-0 font-mono text-lg leading-none text-orange-500" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-gray-400 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}
