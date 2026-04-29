"use client"

import { LINE_URL } from "@/lib/site"
import { ga } from "@/lib/gtag"

export function CTASection() {
  return (
    <section className="mt-16 rounded-2xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8">
      <h2 className="text-2xl font-bold text-white">「自社メディア集客」を始めませんか？</h2>
      <p className="mt-4 text-base leading-relaxed text-gray-300">
        NY33では、サロンの集客に特化したサイト制作からSNS・LINE運用までトータルでサポートしています。
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-orange-500 bg-orange-500 px-8 py-4 text-center font-bold text-white shadow-sm transition-colors hover:border-orange-400 hover:bg-orange-400"
          onClick={() => ga.clickLine("blog_article_cta")}
        >
          LINEで相談する
        </a>
      </div>
    </section>
  )
}
