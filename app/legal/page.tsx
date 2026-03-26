import Link from "next/link"
import { COMPANY_LEGAL, CONTACT_EMAIL, LINE_URL, SITE_PUBLIC_URL } from "@/lib/site"

export default function LegalPage() {
  const phone = COMPANY_LEGAL.phone ?? ""
  const telHref = phone.replace(/[^\d+]/g, "")

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <header className="border-b border-neutral-200/80 px-4 py-3">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="text-[13px] font-semibold tracking-tight text-neutral-800 hover:opacity-80">
            合同会社NY33
          </Link>
          <Link href="/#colophon" className="text-xs font-medium text-[#635bff] hover:underline">
            サイトに戻る
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-10 md:py-12 md:p-8">
        <h1 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900">特定商取引法に基づく表記</h1>
        <p className="mb-8 text-xs text-neutral-500">
          最終更新：2025年3月26日（表示 URL：{SITE_PUBLIC_URL}/legal）
        </p>

        <div className="space-y-5 text-sm leading-7 text-neutral-800">
          <p>
            <strong className="text-neutral-900">事業者名：</strong>
            {COMPANY_LEGAL.name}
          </p>
          <p>
            <strong className="text-neutral-900">代表者名：</strong>
            {COMPANY_LEGAL.representative}
          </p>
          <p>
            <strong className="text-neutral-900">所在地：</strong>
            {COMPANY_LEGAL.address}
          </p>
          <p>
            <strong className="text-neutral-900">電話番号：</strong>
            {telHref ? (
              <a href={`tel:${telHref}`} className="text-[#635bff] hover:underline">
                {phone}
              </a>
            ) : (
              phone
            )}
          </p>
          <p>
            <strong className="text-neutral-900">メールアドレス：</strong>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#635bff] hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
          <p>
            <strong className="text-neutral-900">公式LINE：</strong>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#635bff] hover:underline"
            >
              お問い合わせはこちら
            </a>
          </p>

          <p className="mt-4">
            <strong className="text-neutral-900">販売価格：</strong>
            各サービスページに記載
          </p>
          <p>
            <strong className="text-neutral-900">商品代金以外の必要料金：</strong>
            銀行振込の場合、振込手数料はお客様負担となります。
          </p>

          <p className="mt-4">
            <strong className="text-neutral-900">支払い方法：</strong>
            クレジットカード（Stripe）、銀行振込
          </p>
          <p>
            <strong className="text-neutral-900">支払い時期：</strong>
            契約時にお支払い
          </p>

          <p className="mt-4">
            <strong className="text-neutral-900">商品の提供時期：</strong>
            契約締結後、通常3週間以内に納品いたします。
          </p>

          <p className="mt-4">
            <strong className="text-neutral-900">提供方法：</strong>
            オンライン（Zoom等）による打ち合わせ後、Webサイトを構築し、GitHub経由またはデプロイ環境にて納品いたします。
          </p>

          <p className="mt-4">
            <strong className="text-neutral-900">返品・キャンセルについて：</strong>
            サービスの性質上、契約後のキャンセル・返金は原則としてお受けしておりません。
            ただし、やむを得ない事情がある場合は個別に対応いたします。
          </p>

          <p className="mt-6 text-gray-600">
            当社は中小企業向けにWebサイト制作およびAI導入支援を行っています。
            オンラインを中心にサービス提供を行い、決済にはStripeを利用しています。
          </p>
        </div>
      </article>
    </div>
  )
}
