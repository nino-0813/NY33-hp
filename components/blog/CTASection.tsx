"use client"

import type { BlogCtaPosition, BlogCtaType } from "@/lib/analytics-types"
import { ga, trackEvent } from "@/lib/gtag"
import { LINE_URL } from "@/lib/site"

const DEFAULT_HEADING = "「自社メディア集客」を始めませんか？"
const DEFAULT_BODY =
  "NY33では、サロンの集客に特化したサイト制作からSNS・LINE運用までトータルでサポートしています。"

export type CTASectionProps = {
  heading?: string
  body?: string
  /** GAの link_location サフィックス（例: blog_article_aio）。ブログ計測時は未使用 */
  gaLocation?: string
  /** 設定時は blog_cta_click を送信（記事スラッグ） */
  articleSlug?: string
  position?: BlogCtaPosition
  ctaType?: BlogCtaType
}

export function CTASection({
  heading = DEFAULT_HEADING,
  body = DEFAULT_BODY,
  gaLocation = "blog_article_cta",
  articleSlug,
  position = "bottom",
  ctaType = "line",
}: CTASectionProps) {
  const handleLineClick = () => {
    if (articleSlug) {
      trackEvent("blog_cta_click", {
        article_slug: articleSlug,
        position,
        cta_type: ctaType,
      })
    } else {
      ga.clickLine(gaLocation)
    }
  }

  return (
    <section className="mt-16 rounded-2xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8">
      <h2 className="text-2xl font-bold text-white">{heading}</h2>
      <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-gray-300">{body}</p>
      <div className="mt-6">
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl border border-orange-500 bg-orange-500 px-8 py-4 text-center font-bold text-white shadow-sm transition-colors hover:border-orange-400 hover:bg-orange-400 sm:w-auto"
          onClick={handleLineClick}
        >
          LINEで相談する
        </a>
      </div>
    </section>
  )
}
