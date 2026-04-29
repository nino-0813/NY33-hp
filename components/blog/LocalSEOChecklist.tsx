"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"

type Section = { title: string; items: string[] }

const SECTIONS: Section[] = [
  {
    title: "GBPの最適化",
    items: [
      "営業時間は正確か（祝日も含めて）",
      "写真は20枚以上あるか",
      "説明文にサービス内容と地域名が入っているか",
      "1ヶ月以内に投稿しているか",
      "すべての口コミに返信しているか",
    ],
  },
  {
    title: "NAP情報の統一",
    items: [
      "サイト・GBP・SNSでサロン名の表記が完全一致しているか",
      "住所の表記が全媒体で統一されているか",
      "電話番号が全媒体で統一されているか",
    ],
  },
  {
    title: "サイトのSEO設定",
    items: [
      "titleタグに地域名とサービス名が入っているか",
      "meta descriptionが120文字以上で設定されているか",
      "h1見出しに地域名が入っているか",
      "構造化データ（LocalBusiness）が実装されているか",
    ],
  },
  {
    title: "コンテンツ",
    items: [
      "「地域名＋悩み」で検索するお客様向けの記事があるか",
      "サロン独自のこだわり・ストーリーが書かれているか",
    ],
  },
  {
    title: "口コミ",
    items: ["口コミが10件以上あるか", "口コミを依頼する仕組みがあるか"],
  },
]

function itemKey(sectionIdx: number, itemIdx: number) {
  return `${sectionIdx}-${itemIdx}`
}

export function LocalSEOChecklist() {
  const total = useMemo(() => SECTIONS.reduce((n, s) => n + s.items.length, 0), [])
  const [checked, setChecked] = useState<Set<string>>(() => new Set())

  const count = checked.size
  const pct = total === 0 ? 0 : Math.round((count / total) * 100)

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <div className="my-10 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-sm font-bold text-white">チェック進捗</p>
        <p className="font-mono text-sm text-orange-400">
          {count} / {total} 項目（{pct}%）
        </p>
      </div>
      <div className="mb-6 h-2 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-orange-500 transition-[width] duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="space-y-8">
        {SECTIONS.map((section, si) => (
          <div key={section.title}>
            <h4 className="border-l-4 border-orange-500 pl-3 font-bold text-white">{section.title}</h4>
            <ul className="mt-4 space-y-3">
              {section.items.map((label, ii) => {
                const key = itemKey(si, ii)
                const isOn = checked.has(key)
                return (
                  <li key={key}>
                    <label
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 transition-colors",
                        isOn ? "border-orange-500/40 bg-orange-500/10" : "border-white/[0.06] bg-black/20 hover:border-white/10",
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={isOn}
                        onChange={() => toggle(key)}
                        className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-transparent text-orange-500 focus:ring-orange-500/50"
                      />
                      <span className={cn("text-sm leading-relaxed", isOn ? "text-gray-200" : "text-gray-400")}>{label}</span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 border-t border-white/[0.06] pt-6 text-sm text-gray-400">
        チェックが半分以下なら、改善の余地が大きいです。
      </p>
    </div>
  )
}
