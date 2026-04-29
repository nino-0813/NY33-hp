import type { Metadata } from "next"
import Image from "next/image"
import { BlogHeader } from "@/components/blog/BlogHeader"
import { TableOfContents } from "@/components/blog/TableOfContents"
import { ComparisonTable } from "@/components/blog/ComparisonTable"
import { CTASection } from "@/components/blog/CTASection"

export const metadata: Metadata = {
  title: "ホットペッパーに頼らないサロン集客の始め方｜自社サイト×SNS×LINEで予約を安定させる方法",
  description:
    "2026年のホットペッパー改悪を受けて、サロンが今すぐ始めるべき自社メディア集客の方法を解説。自社サイト・SNS・LINEを組み合わせた集客導線の作り方をステップバイステップで紹介します。",
  keywords: ["サロン 集客", "ホットペッパー 頼らない", "サロン 自社サイト", "美容室 集客方法", "サロン LINE集客", "脱ホットペッパー"],
  openGraph: {
    title: "ホットペッパーに頼らないサロン集客の始め方",
    description: "自社サイト×SNS×LINEで予約を安定させる方法。2026年を勝ち抜くサロンの集客戦略を解説。",
    type: "article",
    publishedTime: "2026-04-29",
    authors: ["合同会社NY33"],
    url: "https://ny-33-hp.vercel.app/blog/salon-shukyaku-without-hotpepper",
    images: [{ url: "/blog/ogp-salon-shukyaku.png", width: 1200, height: 630, alt: "ホットペッパーに頼らないサロン集客の始め方" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ホットペッパーに頼らないサロン集客の始め方",
    description: "自社サイト×SNS×LINEで予約を安定させる方法。2026年を勝ち抜くサロンの集客戦略を解説。",
  },
}

const tocItems = [
  { id: "why-leave-hotpepper", label: "なぜ今サロンは「脱ホットペッパー」が必要なのか" },
  { id: "three-pillars", label: "自社メディア集客の3本柱" },
  { id: "steps", label: "ステップ解説：自社集客の始め方" },
  { id: "why-site-is-weapon", label: "自社サイトを持つことが「最大の武器」になる理由" },
  { id: "summary", label: "まとめ：2026年を勝ち抜くのは「自社で集客できるサロン」" },
]

const riskCards = [
  {
    title: "手数料で利益が圧迫される",
    body: "ホットペッパー経由の予約は手数料が積み上がります。月30件なら毎月10万円以上が消える計算です。",
  },
  {
    title: "価格競争に巻き込まれる",
    body: "ポータルでは安さ比較が中心になりやすく、本来の価値が伝わりづらくなります。",
  },
  {
    title: "顧客リストが手元に残らない",
    body: "プラットフォーム依存では顧客接点を継続的に管理しづらく、資産化が難しくなります。",
  },
]

const steps = [
  {
    title: "STEP 1：自社サイトの制作（基盤作り）",
    body: "コンセプト、メニュー、施術例、アクセス、予約導線を整理し、信頼できる受け皿を構築します。",
  },
  {
    title: "STEP 2：Googleビジネスプロフィール最適化",
    body: "営業時間・住所の整備、写真投稿、口コミ返信を継続し、ローカル検索で見つかる状態を作ります。",
  },
  {
    title: "STEP 3：SNS導線設計",
    body: "プロフィール導線を設計し、投稿ごとに行動喚起を入れてサイトやLINEへ送客します。",
  },
  {
    title: "STEP 4：LINEでリピート自動化",
    body: "友だち追加時の案内、配信設計、予約連携で新規からリピートまでを仕組み化します。",
  },
]

const summarySteps = [
  "自社サイトで信頼を獲得する",
  "SNSで認知を広げる",
  "LINEでリピートを自動化する",
]

export default function SalonShukyakuWithoutHotpepperPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ホットペッパーに頼らないサロン集客の始め方｜自社サイト×SNS×LINEで予約を安定させる方法",
    description: "2026年のホットペッパー改悪を受けて、サロンが今すぐ始めるべき自社メディア集客の方法を解説。",
    author: { "@type": "Organization", name: "合同会社NY33" },
    publisher: { "@type": "Organization", name: "合同会社NY33" },
    datePublished: "2026-04-29",
    dateModified: "2026-04-29",
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-14 text-base leading-relaxed text-gray-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <figure className="mb-10 -mx-6 overflow-hidden rounded-2xl border border-white/[0.06] sm:mx-0">
        <Image
          src="/blog/hotpepper/Professional_beauty_salon_interior_photograph_with-1777435502513.png"
          alt="美容サロン店内。デジタルマーケティングで美容ビジネスを成長させるイメージ"
          width={1200}
          height={675}
          className="h-auto w-full"
          priority
        />
      </figure>

      <BlogHeader
        category="集客戦略"
        title="ホットペッパーに頼らないサロン集客の始め方"
        subtitle="自社サイト×SNS×LINEで予約を安定させる方法"
        publishedAt="2026年4月29日"
      />

      <TableOfContents items={tocItems} />

      <p className="mb-6">
        2026年、ホットペッパービューティーの改悪が話題になっています。ポイント還元率の低下、掲載コストの上昇、そして新しいルール変更——。
        多くのサロンオーナーが「このままでいいのか」と不安を感じています。
      </p>
      <p className="mb-6">
        しかし、この危機は実は<span className="font-bold text-white">大きなチャンス</span>です。ホットペッパーに依存しない集客の仕組みを作ることで、
        利益率を上げ、顧客との関係をより深く、安定させることができます。
      </p>

      <h2 id="why-leave-hotpepper" className="mt-16 mb-6 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white scroll-mt-24">
        なぜ今サロンは「脱ホットペッパー」が必要なのか
      </h2>
      <h3 className="mt-10 mb-4 text-xl font-bold text-white">ホットペッパーの「改悪」の実態</h3>
      <p className="mb-6">ポイント還元率の低下、掲載コスト上昇、露出ロジック変更など、経営インパクトの大きい変化が続いています。</p>
      <ul className="mb-6 space-y-2">
        <li><span className="mr-2 text-orange-500">●</span>ポイント還元率の低下</li>
        <li><span className="mr-2 text-orange-500">●</span>掲載コストの上昇</li>
        <li><span className="mr-2 text-orange-500">●</span>露出アルゴリズムの変更</li>
      </ul>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">ポータルサイト依存の3つのリスク</h3>
      <div className="grid gap-4">
        {riskCards.map((risk, i) => (
          <section key={risk.title} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
            <p className="text-sm font-bold text-orange-500">{i + 1}</p>
            <h4 className="mt-1 font-bold text-white">{risk.title}</h4>
            <p className="mt-2 text-sm text-gray-400">{risk.body}</p>
          </section>
        ))}
      </div>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">「自社メディア集客」が強い理由</h3>
      <p className="mb-6">顧客資産を自社で管理でき、手数料ゼロで利益率が上がり、ルール変更の影響も受けにくくなります。</p>

      <h2 id="three-pillars" className="mt-16 mb-6 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white scroll-mt-24">
        自社メディア集客の3本柱
      </h2>
      <figure className="my-8 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-2 sm:p-3">
        <Image
          src="/blog/hotpepper/Professional_digital_marketing_flow_infographic_in-1777435392915.png"
          alt="デジタルマーケティングフロー：SNSで発見、自社サイトで信頼、LINEで予約完了"
          width={1200}
          height={800}
          className="h-auto w-full rounded-xl"
        />
      </figure>
      <h3 className="mt-10 mb-4 text-xl font-bold text-white">自社サイト（信頼の基盤）</h3>
      <p className="mb-6">最終判断の場所として、コンセプト・実績・予約導線を伝える役割を担います。</p>
      <h3 className="mt-10 mb-4 text-xl font-bold text-white">SNS（認知の拡散）</h3>
      <p className="mb-6">潜在顧客との最初の接点。継続発信とプロフィール導線で接点を増やします。</p>
      <h3 className="mt-10 mb-4 text-xl font-bold text-white">LINE（リピートの自動化）</h3>
      <p className="mb-6">予約・再来店・クーポン配信を一本化し、顧客との関係を継続しやすくします。</p>

      <h2 id="steps" className="mt-16 mb-6 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white scroll-mt-24">
        ステップ解説：自社集客の始め方
      </h2>
      <div className="grid gap-4">
        {steps.map((step, i) => (
          <section key={step.title} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
            <p className="text-sm font-bold text-orange-500">{i + 1}</p>
            <h3 className="mt-1 text-xl font-bold text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{step.body}</p>
          </section>
        ))}
      </div>

      <figure className="mt-16 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-2 sm:p-3">
        <Image
          src="/blog/hotpepper/Professional_infographic_comparing_Portal_Site_vs-1777435399148.png"
          alt="ポータルサイトと自社メディアの比較。手数料・差別化・顧客資産の違い"
          width={1200}
          height={800}
          className="h-auto w-full rounded-xl"
        />
      </figure>
      <h2 id="why-site-is-weapon" className="mt-8 mb-6 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white scroll-mt-24">
        自社サイトを持つことが「最大の武器」になる理由
      </h2>
      <ComparisonTable />
      <div className="grid gap-4">
        {[
          "24時間働く営業マン",
          "予約手数料が0円",
          "ブランドイメージの確立",
          "顧客資産の蓄積",
        ].map((point, i) => (
          <section key={point} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
            <p className="text-sm font-bold text-orange-500">{i + 1}</p>
            <h3 className="mt-1 font-bold text-white">{point}</h3>
          </section>
        ))}
      </div>

      <h2 id="summary" className="mt-16 mb-6 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white scroll-mt-24">
        まとめ：2026年を勝ち抜くのは「自社で集客できるサロン」
      </h2>
      <div className="grid gap-4">
        {summarySteps.map((step, i) => (
          <section key={step} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
            <p className="text-sm font-bold text-orange-500">{i + 1}</p>
            <p className="mt-1 font-bold text-white">{step}</p>
          </section>
        ))}
      </div>

      <CTASection />

      {/* TODO: 関連記事が増えたら表示 */}
      {false && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white">関連記事</h2>
        </section>
      )}
    </article>
  )
}
