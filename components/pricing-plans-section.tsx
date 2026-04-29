"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ga, trackEvent } from "@/lib/gtag"

type PlanItem = {
  text: string
  included: boolean
}

type PlanFeatureCategory = {
  category: string
  items: PlanItem[]
}

type Plan = {
  name: string
  price: string
  priceNum: number
  tagline: string
  description: string
  color: string
  popular?: boolean
  features: PlanFeatureCategory[]
  deliveryDays: string
}

const plans: Plan[] = [
  {
    name: "LIGHT",
    price: "250,000",
    priceNum: 27.5,
    tagline: "まずはWebで存在感を。",
    description:
      "「とにかくちゃんとしたサイトが欲しい」方へ。プロ品質のサイトと最低限の集客基盤を整えます。",
    color: "#2563eb",
    features: [
      {
        category: "サイト制作",
        items: [
          { text: "Next.js製オリジナルサイト（5ページまで）", included: true },
          { text: "レスポンシブ対応（スマホ完全最適化）", included: true },
          { text: "お問い合わせフォーム設置", included: true },
          { text: "独自ドメイン取得・設定", included: true },
          { text: "SSL証明書（https化）", included: true },
        ],
      },
      {
        category: "分析・計測",
        items: [
          { text: "GA4 初期設定", included: true },
          { text: "Googleサーチコンソール設定", included: true },
          { text: "GA4 イベント計測設定", included: false },
        ],
      },
      {
        category: "集客・SEO",
        items: [
          { text: "基本SEO設定（meta / OGP）", included: true },
          { text: "SEOキーワード戦略設計", included: false },
          { text: "ブログ機能", included: false },
          { text: "MEO対策（GBP最適化）", included: false },
        ],
      },
      {
        category: "連携・機能",
        items: [
          { text: "SNS連携（Instagram埋め込み等）", included: true },
          { text: "LINE公式アカウント連携", included: false },
          { text: "決済システム導入", included: false },
          { text: "予約システム連携", included: false },
        ],
      },
      {
        category: "サポート",
        items: [
          { text: "納品後テキスト修正 1回", included: true },
          { text: "独自ドメインメール設定", included: false },
          { text: "月額保守・運用サポート", included: false },
          { text: "初期SEO記事制作", included: false },
        ],
      },
    ],
    deliveryDays: "約3〜4週間",
  },
  {
    name: "STANDARD",
    price: "500,000",
    priceNum: 55,
    tagline: "集客の仕組みを、丸ごと。",
    description: "サイトを作るだけでなく「お客様が来る状態」まで設計。データで改善できる集客基盤を構築します。",
    color: "#0d9488",
    popular: true,
    features: [
      {
        category: "サイト制作",
        items: [
          { text: "Next.js製オリジナルサイト（10ページまで）", included: true },
          { text: "レスポンシブ対応（スマホ完全最適化）", included: true },
          { text: "お問い合わせフォーム設置", included: true },
          { text: "独自ドメイン取得・設定", included: true },
          { text: "SSL証明書（https化）", included: true },
        ],
      },
      {
        category: "分析・計測",
        items: [
          { text: "GA4 初期設定", included: true },
          { text: "Googleサーチコンソール設定", included: true },
          { text: "GA4 イベント計測設定（CV・クリック等）", included: true },
        ],
      },
      {
        category: "集客・SEO",
        items: [
          { text: "基本SEO設定（meta / OGP）", included: true },
          { text: "SEOキーワード戦略設計", included: true },
          { text: "ブログ機能（CMS）", included: true },
          { text: "MEO対策（GBP最適化）", included: true },
        ],
      },
      {
        category: "連携・機能",
        items: [
          { text: "SNS連携（Instagram埋め込み等）", included: true },
          { text: "LINE公式アカウント連携", included: true },
          { text: "データベース設計（Supabase + Googleスプレッドシート保存）", included: true },
          { text: "決済システム導入", included: false },
          { text: "予約システム連携", included: false },
        ],
      },
      {
        category: "サポート",
        items: [
          { text: "納品後テキスト修正 3回", included: true },
          { text: "独自ドメインメール設定", included: true },
          { text: "月額保守・運用サポート（1ヶ月無料）", included: true },
          { text: "初期SEO記事制作", included: false },
        ],
      },
    ],
    deliveryDays: "約4〜6週間",
  },
  {
    name: "PREMIUM",
    price: "1,000,000",
    priceNum: 110,
    tagline: "売上が変わる、本気のWeb戦略。",
    description: "制作・集客・分析・改善まで一気通貫。「Webから売上を作る」ためのフルパッケージです。",
    color: "#7c3aed",
    features: [
      {
        category: "サイト制作",
        items: [
          { text: "Next.js製オリジナルサイト（ページ数無制限）", included: true },
          { text: "レスポンシブ対応（スマホ完全最適化）", included: true },
          { text: "お問い合わせフォーム設置", included: true },
          { text: "独自ドメイン取得・設定", included: true },
          { text: "SSL証明書（https化）", included: true },
        ],
      },
      {
        category: "分析・計測",
        items: [
          { text: "GA4 初期設定", included: true },
          { text: "Googleサーチコンソール設定", included: true },
          { text: "GA4 イベント計測設定（全ページ網羅）", included: true },
        ],
      },
      {
        category: "集客・SEO",
        items: [
          { text: "基本SEO設定（meta / OGP）", included: true },
          { text: "SEOキーワード戦略設計", included: true },
          { text: "ブログ機能（CMS）", included: true },
          { text: "MEO対策（GBP最適化）", included: true },
        ],
      },
      {
        category: "連携・機能",
        items: [
          { text: "SNS連携（Instagram埋め込み等）", included: true },
          { text: "LINE公式アカウント連携", included: true },
          { text: "データベース設計（Supabase + Googleスプレッドシート保存）", included: true },
          { text: "決済システム導入（Stripe等）", included: true },
          { text: "予約システム連携", included: true },
        ],
      },
      {
        category: "サポート",
        items: [
          { text: "納品後テキスト修正 無制限（1ヶ月）", included: true },
          { text: "独自ドメインメール設定", included: true },
          { text: "月額保守・運用サポート（3ヶ月無料）", included: true },
          { text: "初期SEO記事 5本制作", included: true },
        ],
      },
    ],
    deliveryDays: "約6〜8週間",
  },
]

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="currentColor" opacity="0.12" />
      <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#94a3b8" opacity="0.1" />
      <path d="M6.5 6.5L11.5 11.5M11.5 6.5L6.5 11.5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function PricingPlansSection() {
  const [expandedPlan, setExpandedPlan] = useState(1)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(plans[1].name)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const openContactDialog = (planName: string) => {
    ga.openContactDialog(planName)
    setSelectedPlan(planName)
    setSubmitMessage("")
    setIsContactOpen(true)
  }

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setIsSubmitting(true)
    setSubmitMessage("")

    const formData = new FormData(form)
    const payload = {
      companyName: String(formData.get("companyName") ?? ""),
      contactName: String(formData.get("contactName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      plan: String(formData.get("plan") ?? ""),
      launchTiming: String(formData.get("launchTiming") ?? ""),
      message: String(formData.get("message") ?? ""),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = await response.json()
      if (!response.ok) {
        throw new Error(result?.error ?? "送信に失敗しました。")
      }

      setSubmitMessage("送信完了しました。担当者よりご連絡いたします。")
      ga.generateLead({ plan: payload.plan, method: "pricing_modal_form" })
      form.reset()
      setSelectedPlan(payload.plan)
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : "送信に失敗しました。時間をおいて再度お試しください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="pricing" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30">
      <div className="mb-16 max-w-3xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / Pricing</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">料金プラン</h2>
        <p className="mt-6 font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          サイトを「作る」だけでなく、「届ける」「測る」「改善する」まで。
          <br />
          サロン・ウェルネス業界に特化した、成果につながるWeb制作。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, i) => {
          const isExpanded = expandedPlan === i
          return (
            <article
              key={plan.name}
              onClick={() => setExpandedPlan(i)}
              className="relative overflow-hidden rounded-2xl border border-border/40 bg-background/30 backdrop-blur-sm cursor-pointer transition-transform duration-300"
              style={{
                borderColor: isExpanded ? `${plan.color}88` : undefined,
                transform: isExpanded ? "translateY(-4px)" : "translateY(0px)",
              }}
            >
              {plan.popular && (
                <div
                  className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-mono tracking-wider text-white"
                  style={{ backgroundColor: plan.color }}
                >
                  RECOMMEND
                </div>
              )}

              <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${plan.color}, ${plan.color}88)` }} />

              <div className="p-7">
                <p className="font-mono text-[11px] tracking-[0.3em] mb-2" style={{ color: plan.color }}>
                  {plan.name}
                </p>
                <p className="font-mono text-xs text-foreground mb-3">{plan.tagline}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-sm text-muted-foreground">¥</span>
                  <span className="font-[var(--font-bebas)] text-6xl leading-none tracking-tight text-foreground">{plan.priceNum}</span>
                  <span className="font-mono text-sm text-muted-foreground">万円（税込）</span>
                </div>
                <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">{plan.description}</p>
                <p className="mt-4 pt-3 border-t border-border/30 font-mono text-[11px] text-muted-foreground">
                  納品目安：{plan.deliveryDays}
                </p>
              </div>

              <div className="px-7 pb-7">
                {plan.features.map((cat) => (
                  <div key={cat.category} className="mb-5">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{cat.category}</p>
                    {cat.items.map((item) => (
                      <div key={item.text} className="flex items-start gap-2 py-1">
                        <span className="mt-[1px] shrink-0" style={{ color: item.included ? plan.color : undefined }}>
                          {item.included ? <CheckIcon /> : <XIcon />}
                        </span>
                        <span
                          className="font-mono text-xs leading-relaxed"
                          style={{
                            color: item.included ? "var(--foreground)" : "var(--muted-foreground)",
                            opacity: item.included ? 0.9 : 0.45,
                          }}
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}

                <div className="mt-5 border-t border-border/30 pt-5">
                  <Button
                    type="button"
                    className="w-full font-mono text-xs tracking-[0.1em]"
                    style={{ backgroundColor: plan.color }}
                    onClick={(e) => {
                      e.stopPropagation()
                      openContactDialog(plan.name)
                    }}
                  >
                    お問い合わせはこちら（初回相談無料）
                  </Button>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-12 rounded-2xl border border-border/40 bg-background/20 p-6 md:p-8">
        <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-foreground">オプション</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
          {[
            "月額保守・運用サポート … ¥10,000〜/月",
            "追加ページ制作 … ¥20,000〜/ページ",
            "SEO記事制作 … ¥15,000〜/本",
            "LP制作（別途） … ¥80,000〜",
            "広告運用代行 … ¥30,000〜/月",
            "写真撮影ディレクション … ¥30,000〜",
          ].map((opt) => (
            <p key={opt} className="rounded-md bg-background/20 px-3 py-2 font-mono text-xs text-muted-foreground">
              {opt}
            </p>
          ))}
        </div>
        <p className="mt-6 font-mono text-[11px] text-muted-foreground/80 leading-relaxed">
          ※ 上記は目安価格です。ご要望に応じてカスタマイズ可能です。
          <br />
          ※ サーバー費用（Vercel）・ドメイン費用は別途実費をご負担いただきます。
          <br />
          ※ 月額保守はLIGHTプラン ¥10,000〜 / STANDARD・PREMIUM ¥15,000〜が目安です。
        </p>
      </div>

      <div className="mt-12 border-t border-border/30 pt-10">
        <div className="flex flex-col gap-6 rounded-2xl border border-border/40 bg-background/20 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">FAQ</span>
            <h3 className="mt-2 font-[var(--font-bebas)] text-3xl tracking-tight text-foreground">よくある質問</h3>
            <p className="mt-3 font-mono text-sm leading-relaxed text-muted-foreground">
              料金・お支払い、制作の流れ、Next.jsやサポート内容など、ご依頼前によくいただく質問をまとめました。
            </p>
          </div>
          <Link
            href="/faq"
            className="group inline-flex shrink-0 items-center justify-center gap-2 border border-accent/40 bg-accent/10 px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:border-accent hover:bg-accent/15"
            onClick={() => trackEvent("click_faq_nav", { link_location: "pricing_section" })}
          >
            FAQを見る
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain">
          <DialogHeader>
            <DialogTitle className="font-[var(--font-bebas)] text-3xl tracking-tight">お問い合わせフォーム</DialogTitle>
            <DialogDescription className="font-mono text-xs text-muted-foreground">
              初回相談は無料です。内容確認後、通常1営業日以内にご連絡します。
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName" className="font-mono text-xs">
                会社名
              </Label>
              <Input id="companyName" name="companyName" placeholder="合同会社NY33" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactName" className="font-mono text-xs">
                ご担当者名
              </Label>
              <Input id="contactName" name="contactName" placeholder="山田 太郎" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-mono text-xs">
                メールアドレス
              </Label>
              <Input id="email" name="email" type="email" placeholder="example@company.jp" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-mono text-xs">
                電話番号
              </Label>
              <Input id="phone" name="phone" type="tel" placeholder="090-1234-5678" />
            </div>
            <div className="space-y-2 md:col-span-1">
              <Label htmlFor="plan" className="font-mono text-xs">
                ご希望プラン
              </Label>
              <Input id="plan" name="plan" value={selectedPlan} readOnly />
            </div>
            <div className="space-y-2 md:col-span-1">
              <Label htmlFor="launchTiming" className="font-mono text-xs">
                希望公開時期
              </Label>
              <Input id="launchTiming" name="launchTiming" placeholder="例：2ヶ月以内" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="font-mono text-xs">
                ご相談内容
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="制作目的、現状課題、相談したいことをご記入ください。"
                className="min-h-28"
                required
              />
            </div>

            <div className="md:col-span-2 sticky bottom-0 z-10 -mx-1 mt-2 flex items-center justify-between gap-3 border-t border-white/10 bg-[#111827]/95 px-1 pt-3 pb-1 backdrop-blur">
              <p
                className="font-mono text-[11px]"
                style={{
                  color: submitMessage.includes("送信完了") ? "#22c55e" : "var(--muted-foreground)",
                  fontWeight: submitMessage.includes("送信完了") ? 700 : 400,
                }}
              >
                {submitMessage}
              </p>
              <Button type="submit" disabled={isSubmitting} className="font-mono text-xs tracking-[0.1em]">
                {isSubmitting ? "送信中..." : "送信する"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  )
}
