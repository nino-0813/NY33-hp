"use client"

import { type FormEvent, useEffect, useState } from "react"
import Link from "next/link"
import { Info } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { CONTACT_EMAIL } from "@/lib/site"

const STRIPE_PURPLE = "#635bff"

export default function TokuteiReviewPage() {
  const [tokushohoUrl, setTokushohoUrl] = useState("")
  const [extra, setExtra] = useState("")

  const openMailto = () => {
    const subject = encodeURIComponent("[Stripe審査] 特商法URL・追加情報")
    const body = encodeURIComponent(
      `特定商取引法に基づくビジネス情報ページ URL:\n${tokushohoUrl}\n\nその他・追加情報:\n${extra.trim() || "（なし）"}\n`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!tokushohoUrl.trim()) return
    openMailto()
  }

  const handleSaveDraft = () => {
    try {
      localStorage.setItem(
        "ny33-tokutei-draft",
        JSON.stringify({ tokushohoUrl, extra, savedAt: Date.now() }),
      )
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ny33-tokutei-draft")
      if (!raw) return
      const data = JSON.parse(raw) as { tokushohoUrl?: string; extra?: string }
      if (typeof data.tokushohoUrl === "string") setTokushohoUrl(data.tokushohoUrl)
      if (typeof data.extra === "string") setExtra(data.extra)
    } catch {
      /* ignore */
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
        <header className="border-b border-neutral-200/80 px-4 py-3">
          <div className="mx-auto flex max-w-lg items-center justify-between">
            <span className="text-[13px] font-semibold tracking-tight text-neutral-800">NY33</span>
            <Link
              href="/#colophon"
              className="text-xs text-[#635bff] hover:underline"
            >
              サイトに戻る
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-lg px-4 py-8 md:py-10">
          <h1 className="text-lg font-semibold leading-snug text-neutral-900 md:text-xl">
            追加の情報が必要です
          </h1>
          <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">
            アカウントの追加審査をご希望の場合は、以下のフォームにご記入の上、ビジネスの詳細をお知らせください。取引が
            Stripe 利用規約に準拠していることを確認し、決済エコシステムで適切に分類するには、Stripe
            がお客様のビジネスのお取り扱い内容を把握することが重要です。
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-8">
            <div className="space-y-2">
              <Label className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium text-neutral-800">
                <span>
                  特定商取引法に基づくビジネス情報を記載したページの URL をご提示ください。
                </span>
                <Tooltip>
                  <TooltipTrigger
                    type="button"
                    className="inline-flex text-neutral-400 hover:text-neutral-600"
                    aria-label="補足"
                  >
                    <Info className="size-3.5 shrink-0" strokeWidth={2} />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-[240px] text-xs">
                    会社の特商法表記（販売事業者・連絡先等）が載ったページの URL を入力してください。
                  </TooltipContent>
                </Tooltip>
              </Label>
              <Input
                required
                type="url"
                inputMode="url"
                placeholder="https://"
                value={tokushohoUrl}
                onChange={(e) => setTokushohoUrl(e.target.value)}
                className="h-10 rounded-md border-neutral-200 bg-white text-[13px] text-neutral-900 shadow-none focus-visible:border-[#635bff] focus-visible:ring-[#635bff]/25 dark:bg-white dark:border-neutral-200"
              />
              <a
                href="https://www.caa.go.jp/policies/policy/representation/fair_labeling/act_001/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[13px] font-medium text-[#635bff] hover:underline"
              >
                特定商取引法（消費者庁）
              </a>
            </div>

            <div className="space-y-2">
              <Label className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-neutral-800">
                ほかに Stripe に知らせておいた方がよいとお考えの情報がある場合は、こちらに追加してください。
                <Badge
                  variant="secondary"
                  className="rounded-full border-neutral-200 bg-neutral-100 px-2 py-0 text-[10px] font-medium text-neutral-600"
                >
                  オプション
                </Badge>
              </Label>
              <Textarea
                value={extra}
                onChange={(e) => setExtra(e.target.value)}
                rows={6}
                className="min-h-[140px] resize-y rounded-md border-neutral-200 bg-white text-[13px] text-neutral-900 shadow-none focus-visible:border-[#635bff] focus-visible:ring-[#635bff]/25 dark:bg-white dark:border-neutral-200"
              />
            </div>

            <div className="flex flex-col gap-3 pt-1">
              <Button
                type="submit"
                className="h-10 w-full rounded-md text-[13px] font-medium text-white shadow-none hover:opacity-95"
                style={{ backgroundColor: STRIPE_PURPLE }}
              >
                送信
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleSaveDraft}
                className="h-10 w-full rounded-md border-neutral-200 bg-white text-[13px] font-medium text-neutral-600 shadow-none hover:bg-neutral-50"
              >
                後で続けるために保存
              </Button>
            </div>
          </form>

          <p className="mt-8 text-[11px] leading-relaxed text-neutral-500">
            「送信」はメール作成画面を開きます。宛先は {CONTACT_EMAIL} です。必要に応じて追記のうえ送信してください。
          </p>
        </main>
      </div>
  )
}
