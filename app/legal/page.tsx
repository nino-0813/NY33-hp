import Link from "next/link"
import { COMPANY_LEGAL, CONTACT_EMAIL, LINE_URL, SITE_PUBLIC_URL } from "@/lib/site"

export default function LegalPage() {
  const phone = COMPANY_LEGAL.phone

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

      <article className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-[1.65rem]">
          特定商取引法に基づく表記
        </h1>
        <p className="mt-2 text-xs text-neutral-500">
          最終更新：2025年3月26日（表示 URL：{SITE_PUBLIC_URL}/legal）
        </p>

        <div className="mt-8 space-y-5 text-sm leading-7 text-neutral-800">
          <p>
            <strong className="text-neutral-900">事業者名：</strong>
            {COMPANY_LEGAL.name}
          </p>
          <p>
            <strong className="text-neutral-900">代表者：</strong>
            {COMPANY_LEGAL.representative}
          </p>
          <p>
            <strong className="text-neutral-900">所在地：</strong>
            {COMPANY_LEGAL.address}
          </p>
          {phone ? (
            <p>
              <strong className="text-neutral-900">電話番号：</strong>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-[#635bff] hover:underline">
                {phone}
              </a>
            </p>
          ) : (
            <p>
              <strong className="text-neutral-900">電話番号：</strong>
              現在、電話によるお問い合わせ窓口は設けておりません。ご連絡は下記メールまたは公式LINEにて承ります（取得・開設後、本ページに追記いたします）。
            </p>
          )}
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

          <p>
            <strong className="text-neutral-900">サービス内容：</strong>
            Webサイト・ランディングページの制作、SEO / AIO 対策、マーケティングに関するコンサルティング及び動線設計等の役務提供。
          </p>
          <p>
            <strong className="text-neutral-900">販売価格・お見積り：</strong>
            お見積りにて個別にご提示いたします。消費税は法令に従い表示します。
          </p>
          <p>
            <strong className="text-neutral-900">代金の支払時期・方法：</strong>
            契約書又は請求書に定める方法によります。クレジットカード決済（Stripe 等）を利用する場合があります。
          </p>
          <p>
            <strong className="text-neutral-900">役務の提供時期：</strong>
            契約内容・スコープに定める納期・マイルストーンに従い提供します。
          </p>
          <p>
            <strong className="text-neutral-900">契約不適合・キャンセル：</strong>
            個別契約の定めに従います。役務の性質上、進行状況に応じて返金の可否・範囲が異なる場合があります。内容にご不明点があれば、上記連絡先までお問い合わせください。
          </p>
          <p>
            <strong className="text-neutral-900">返品・キャンセル（概要）：</strong>
            デジタル成果物及び制作・コンサルティング役務の性質上、原則として契約成立後の一方的な返品はお受けできません。契約内容に関する問題がある場合は、速やかにメールまたはLINEにてご連絡ください。個別に対応いたします。
          </p>
        </div>
      </article>
    </div>
  )
}
