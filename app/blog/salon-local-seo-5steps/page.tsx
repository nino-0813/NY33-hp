import type { Metadata } from "next"
import Link from "next/link"
import { BlogHeader } from "@/components/blog/BlogHeader"
import { TableOfContents } from "@/components/blog/TableOfContents"
import { CTASection } from "@/components/blog/CTASection"
import { BeforeAfterSearch } from "@/components/blog/BeforeAfterSearch"
import { LocalSEOChecklist } from "@/components/blog/LocalSEOChecklist"
import { SITE_PUBLIC_URL } from "@/lib/site"

const tocItems = [
  { id: "local-seo-basics", label: "前提：ローカルSEOとは何か" },
  { id: "step-1-gbp", label: "やったこと①：Googleビジネスプロフィールを「120点」にした" },
  { id: "step-2-nap", label: "やったこと②：NAP情報を全媒体で完全統一した" },
  { id: "step-3-site-seo", label: "やったこと③：サイトの「裏側」に地域名を正しく埋め込んだ" },
  { id: "step-4-local-blog", label: "やったこと④：地域に根差したブログ記事を書いた" },
  { id: "step-5-reviews", label: "やったこと⑤：口コミを「仕組み」で増やした" },
  { id: "results-three-months", label: "結果：3ヶ月で何が変わったか" },
  { id: "summary-local-order", label: "まとめ：正しいことを、正しい順番で" },
  { id: "self-checklist", label: "自分のサロンの現状をチェックしてみよう" },
]

const resultCards = [
  {
    title: "ローカルパック：圏外 → 上位3位以内に表示",
    body: "「○○市 よもぎ蒸し」で検索した時に、地図付きリストの中にサロンが表示されるようになった",
  },
  {
    title: "自然検索：圏外 → 1ページ目に表示",
    body: "サロンのサイトが、ポータルサイトに次ぐ位置で表示されるようになった",
  },
  {
    title: "GBPの表示回数：月間約200回 → 約1,500回",
    body: "Googleビジネスプロフィールがお客様の目に触れる機会が約7.5倍に増加",
  },
  {
    title: "GBP経由のアクション：月間約15回 → 約80回",
    body: "電話・ルート検索・サイト訪問など、実際にお客様が行動を起こす回数が約5倍に増加",
  },
  {
    title: "口コミ数：5件 → 25件以上",
    body: "口コミの仕組み化により、安定的に口コミが増加",
  },
]

const summarySteps = [
  "Googleビジネスプロフィールを「120点」にする",
  "NAP情報を全媒体で完全統一する",
  "サイトの「裏側」に地域名を正しく埋め込む",
  "地域に根差したブログ記事を書く",
  "口コミを「仕組み」で増やす",
]

export const metadata: Metadata = {
  title: "「地域名＋サロン」で検索1ページ目に表示させるためにやった5つのこと",
  description:
    "広島県のサロンが「地域名＋サービス名」で検索上位を獲得するまでに実践した5つのローカルSEO施策を公開。Googleビジネスプロフィールの最適化からサイト設計、口コミ戦略まで、実例ベースで解説します。",
  keywords: [
    "サロン SEO対策 やり方",
    "美容室 検索 上位表示",
    "サロン MEO対策",
    "地域名 サロン SEO",
    "ローカルSEO サロン",
    "Googleビジネスプロフィール サロン",
  ],
  openGraph: {
    title: "「地域名＋サロン」で検索1ページ目に表示させるためにやった5つのこと",
    description:
      "実際のサロン施策をもとにした、ローカルSEO実践ガイド。地方のサロンが検索上位を取るための具体的な手順を解説。",
    type: "article",
    publishedTime: "2026-04-29",
    authors: ["合同会社NY33"],
    url: `${SITE_PUBLIC_URL}/blog/salon-local-seo-5steps`,
    images: [
      {
        url: "/blog/ogp-local-seo.png",
        width: 1200,
        height: 630,
        alt: "ローカルSEOで検索1ページ目を目指すサロンの施策",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "「地域名＋サロン」で検索1ページ目に表示させるためにやった5つのこと",
    description: "ローカルSEO実践ガイド。GBP・NAP・サイト・ブログ・口コミの5ステップ。",
  },
}

export default function SalonLocalSeo5StepsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "「地域名＋サロン」で検索1ページ目に表示させるためにやった5つのこと",
    description: "地域名＋サービス名での検索上位を獲得するまでに実践したローカルSEO施策の解説。",
    author: { "@type": "Organization", name: "合同会社NY33" },
    publisher: { "@type": "Organization", name: "合同会社NY33" },
    datePublished: "2026-04-29",
    dateModified: "2026-04-29",
  }

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "サロンのローカルSEO対策 5ステップ",
    description: "地域名＋サロンの検索で1ページ目に表示させるための実践手順",
    step: [
      {
        "@type": "HowToStep",
        name: "Googleビジネスプロフィールを「120点」にする",
        text: "営業時間、写真、カテゴリ、説明文を徹底的に最適化する",
      },
      {
        "@type": "HowToStep",
        name: "NAP情報を全媒体で統一する",
        text: "サロン名・住所・電話番号をサイト・SNS・GBP・ポータルで完全一致させる",
      },
      {
        "@type": "HowToStep",
        name: "サイトの「裏側」に地域名を正しく埋め込む",
        text: "titleタグ、meta description、見出し、構造化データに地域名を含める",
      },
      {
        "@type": "HowToStep",
        name: "地域に根差したブログ記事を書く",
        text: "地域名＋悩みキーワードで検索するお客様に向けた記事を作成する",
      },
      {
        "@type": "HowToStep",
        name: "口コミを「仕組み」で増やす",
        text: "来店後のフォローアップで自然に口コミを依頼する仕組みを構築する",
      },
    ],
  }

  const jsonLdExample = `{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "○○サロン",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "○○市",
    "addressRegion": "広島県",
    "streetAddress": "○○町1-2-3",
    "postalCode": "720-XXXX"
  },
  "telephone": "084-XXX-XXXX",
  "openingHours": "Mo-Sa 10:00-19:00",
  "priceRange": "¥¥",
  "geo": { "@type": "GeoCoordinates", "latitude": XX.XXXX, "longitude": XXX.XXXX }
}`

  return (
    <article className="mx-auto max-w-3xl px-6 py-14 text-base leading-relaxed text-gray-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <BlogHeader
        category="ローカルSEO"
        title="「地域名＋サロン」で検索1ページ目に表示させるためにやった5つのこと"
        subtitle="広島県のサロンで実践したローカルSEO 5ステップ"
        publishedAt="2026年4月29日"
      />

      <TableOfContents items={tocItems} />

      <p className="mb-6 font-medium text-white">「○○市 よもぎ蒸し」——。</p>
      <p className="mb-6">
        私たちが広島県のあるサロンのWeb制作を手がけた時、このキーワードでGoogle検索してみました。結果は、
        <span className="font-bold text-white">1ページ目のどこにもそのサロンの名前はありませんでした。</span>
      </p>
      <p className="mb-6">
        Googleビジネスプロフィールは登録されていたものの、情報は最低限。サイトはあるけれど、SEOの設定はほぼゼロ。口コミは数件。正直に言えば、「Googleから見えていない状態」でした。
      </p>
      <p className="mb-6">
        そこから5つの施策を実行した結果、
        <span className="font-bold text-white">
          約3ヶ月で「地域名＋サービス名」の検索でローカルパックの上位と自然検索の1ページ目に表示されるようになりました。
        </span>
      </p>
      <p className="mb-8">
        この記事では、その時に実際にやったことを、そのまま公開します。特別な裏技ではありません。正しいことを、正しい順番で、丁寧にやっただけです。
      </p>

      <BeforeAfterSearch />

      <p className="mb-10 text-center text-sm text-gray-500">
        ※クライアントのプライバシー保護のため、サロン名・地域名は一部ぼかしています。
      </p>

      <h2 id="local-seo-basics" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        前提：ローカルSEOとは何か
      </h2>
      <p className="mb-6">
        「ローカルSEO」とは、
        <span className="font-bold text-white">特定の地域でサービスを探しているお客様に、あなたのサロンを見つけてもらうための対策</span>
        です。
      </p>
      <p className="mb-8">
        「福山市 エステ」「尾道 美容室」「広島 よもぎ蒸し」——こうした「地域名＋サービス名」で検索した時に、あなたのサロンが表示されるかどうか。それがローカルSEOの成果です。
      </p>

      <p className="mb-4 font-bold text-white">ポイント：検索結果には大きく2つの表示枠があります</p>
      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
          <h3 className="font-bold text-orange-400">1. ローカルパック（地図＋3件のリスト）</h3>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            検索結果の一番上に表示される、地図付きの店舗リストです。ここに表示されるかどうかが集客に直結します。スマホでは画面のほとんどを占めるので、ここに出るだけで来店につながります。Googleビジネスプロフィールの情報をもとに表示されます。
          </p>
        </section>
        <section className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
          <h3 className="font-bold text-orange-400">2. 自然検索結果（通常のWebサイト一覧）</h3>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            ローカルパックの下に表示される、通常の検索結果です。あなたのサイトがここの1ページ目（上位10件）に入るかどうかが重要です。サイトのSEO設定とコンテンツの質で決まります。
          </p>
        </section>
      </div>
      <p className="mb-6">
        ローカルSEOでは
        <span className="font-bold text-white">「ローカルパック」と「自然検索」の両方に表示される状態</span>
        を目指します。そのために実践した5つのことを、順番に解説します。
      </p>

      <h2 id="step-1-gbp" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        やったこと①：Googleビジネスプロフィールを「120点」にした
      </h2>
      <p className="mb-6">
        最初にやったのは、Googleビジネスプロフィール（GBP）の徹底的な最適化です。多くのサロンがGBPを「登録しただけ」で放置していますが、ローカルパックに表示されるかどうかは、GBPの情報量と質で大きく変わります。
      </p>
      <h3 className="mt-10 mb-4 text-xl font-bold text-white">具体的にやったこと</h3>
      <p className="mb-4 font-bold text-gray-200">基本情報の完全入力：</p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-sm text-gray-400">
        <li>サロン名（正式名称を正確に）</li>
        <li>カテゴリ（メイン＋サブを複数設定）</li>
        <li>営業時間（祝日・臨時休業も含めて正確に）</li>
        <li>電話番号（サイトやSNSと完全一致）</li>
        <li>住所（番地、建物名、階数まで）</li>
        <li>サービスエリアの設定</li>
      </ul>
      <p className="mb-4 font-bold text-gray-200">写真の大量追加（30枚以上）：</p>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-sm text-gray-400">
        <li>外観（看板が見える角度）</li>
        <li>内観（施術室、待合室、受付）</li>
        <li>施術風景（お客様の許可を得て）</li>
        <li>スタッフ写真、メニュー・料金表、アクセスの目印になる写真</li>
      </ul>
      <p className="mb-6">
        <span className="font-bold text-white">説明文の最適化：</span>
        「○○市にある温活サロンです」の一言では足りません。750文字の上限いっぱいに、サロンのこだわり・施術・ターゲット・アクセスを書き込み、「○○市」「よもぎ蒸し」「温活」などを自然に含めました。
      </p>
      <p className="mb-6">
        <span className="font-bold text-white">投稿機能の活用：</span>
        週に1〜2回、新メニューやキャンペーン、サロンの日常を投稿。「アクティブに運営されている」とGoogleに伝えます。
      </p>

      <h2 id="step-2-nap" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        やったこと②：NAP情報を全媒体で完全統一した
      </h2>
      <p className="mb-4 font-bold text-white">NAP情報とは：</p>
      <ul className="mb-6 space-y-2">
        <li>
          <span className="text-orange-500">●</span> <strong className="text-gray-200">N</strong>ame（サロン名）
        </li>
        <li>
          <span className="text-orange-500">●</span> <strong className="text-gray-200">A</strong>ddress（住所）
        </li>
        <li>
          <span className="text-orange-500">●</span> <strong className="text-gray-200">P</strong>hone（電話番号）
        </li>
      </ul>
      <p className="mb-6">
        この3つが、
        <span className="font-bold text-white">サイト・GBP・SNS・ポータル・LINE公式などすべてで完全に一致</span>
        している必要があります。表記がバラバラだと、Googleは同一店舗か判断できず、地域との関連評価が下がります。
      </p>
      <h3 className="mt-10 mb-4 text-xl font-bold text-white">実際にやったこと</h3>
      <p className="mb-4 text-sm text-gray-400">
        自社サイト、Googleビジネスプロフィール、Instagram、LINE公式、ホットペッパービューティー、Facebook、その他ポータル——すべてでサロン名・住所・電話を確認し統一しました。丁目・番地のハイフン、建物名の表記、電話番号の桁区切りまで揃えています。
      </p>

      <h2 id="step-3-site-seo" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        やったこと③：サイトの「裏側」に地域名を正しく埋め込んだ
      </h2>
      <p className="mb-8">
        デザインや本文はそのままでも、HTMLのメタ情報や見出し、構造化データを整えるだけで検索との関連性は大きく変わります。
      </p>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">titleタグの最適化</h3>
      <p className="mb-3 text-sm text-gray-500">Before：</p>
      <pre className="mb-4 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/50 p-4 text-xs leading-relaxed">
        <code className="text-gray-300">{`<title>○○サロン | 公式サイト</title>`}</code>
      </pre>
      <p className="mb-3 text-sm text-gray-500">After：</p>
      <pre className="mb-6 overflow-x-auto rounded-xl border border-orange-500/20 bg-orange-500/5 p-4 text-xs leading-relaxed">
        <code className="text-emerald-300/90">{`<title>○○市のよもぎ蒸し・温活サロン｜○○サロン</title>`}</code>
      </pre>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">meta descriptionの最適化</h3>
      <p className="mb-3 text-sm text-gray-500">Before：</p>
      <pre className="mb-4 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/50 p-4 text-xs leading-relaxed">
        <code className="break-all text-gray-300">{`<meta name="description" content="○○サロンの公式ホームページです。">`}</code>
      </pre>
      <p className="mb-3 text-sm text-gray-500">After：</p>
      <pre className="mb-6 overflow-x-auto rounded-xl border border-orange-500/20 bg-orange-500/5 p-4 text-xs leading-relaxed">
        <code className="break-all text-emerald-300/90">{`<meta name="description" content="○○市○○エリアのよもぎ蒸し・温活専門サロン。完全個室で初めての方も安心。冷え性改善・リラックスに。駐車場完備。ご予約はLINEから。">`}</code>
      </pre>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">見出し（h1）への地域名の組み込み</h3>
      <p className="mb-3 text-sm text-gray-500">Before：</p>
      <pre className="mb-4 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/50 p-4 text-xs leading-relaxed">
        <code className="text-gray-300">{`<h1>○○サロンへようこそ</h1>`}</code>
      </pre>
      <p className="mb-3 text-sm text-gray-500">After：</p>
      <pre className="mb-6 overflow-x-auto rounded-xl border border-orange-500/20 bg-orange-500/5 p-4 text-xs leading-relaxed">
        <code className="text-emerald-300/90">{`<h1>○○市のよもぎ蒸し・温活サロン ○○</h1>`}</code>
      </pre>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">構造化データ（LocalBusiness系）の実装</h3>
      <p className="mb-4 text-sm text-gray-400">
        サイトのHTMLにHealthAndBeautyBusiness 等のJSON-LDを埋め込み、Googleが住所・電話・営業時間・位置情報をデータとして正確に理解できるようにしました（AI検索・AIO対策にも効きます）。
      </p>
      <pre className="overflow-x-auto rounded-xl border border-white/[0.08] bg-black/50 p-4 text-[11px] leading-relaxed text-gray-300">
        <code>{jsonLdExample}</code>
      </pre>

      <h2 id="step-4-local-blog" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        やったこと④：地域に根差したブログ記事を書いた
      </h2>
      <p className="mb-6">
        基盤が整ったら、コンテンツで「地域の専門家」としてのポジションを作ります。狙うのは「地域名＋悩み」の組み合わせです。
      </p>
      <p className="mb-4 font-bold text-gray-200">狙ったキーワードの例：</p>
      <ul className="mb-6 list-disc space-y-1 pl-6 text-sm text-gray-400">
        <li>「○○市 冷え性 改善」「○○市 温活 おすすめ」</li>
        <li>「よもぎ蒸し 効果 初めて」「○○エリア リラクゼーション」</li>
      </ul>
      <p className="mb-6">
        記事の例として、「よもぎ蒸しとは？初めての方へ｜○○市の温活サロンが解説」「○○市で温活を始めるならまず知っておきたい3つのこと」「冬の冷え対策｜○○市の温活サロンスタッフがおすすめする日常ケア」などを制作しました。
      </p>
      <p className="mb-6">
        一般論だけでなく、
        <span className="font-bold text-white">スタッフの体験談・お客様の変化・素材のこだわり</span>
        など、このサロンだから書ける一次情報を必ず入れ、E-E-A-Tを高めました。
      </p>

      <h2 id="step-5-reviews" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        やったこと⑤：口コミを「仕組み」で増やした
      </h2>
      <p className="mb-6">
        口コミの数と質はローカルSEOに直結します。LINE公式で施術翌日にお礼＋GBPの口コミリンクを自然に含めるフォローを自動化し、タイミングとトーンを工夫しました（★5指定はせず、素直な感想をお願いする）。
      </p>
      <p className="mb-6">
        いただいた口コミには、コピペではなく内容に触れた返信を<span className="font-bold text-white">全件</span>実施。Googleと新規のお客様双方に「丁寧なサロン」と伝わる状態をつくりました。
      </p>

      <h2 id="results-three-months" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        結果：3ヶ月で何が変わったか
      </h2>
      <div className="grid gap-4">
        {resultCards.map((card, i) => (
          <section key={card.title} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
            <p className="text-sm font-bold text-orange-500">{i + 1}</p>
            <h3 className="mt-1 font-bold text-white">{card.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{card.body}</p>
          </section>
        ))}
      </div>

      <h2 id="summary-local-order" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        まとめ：正しいことを、正しい順番で
      </h2>
      <p className="mb-8">
        ローカルSEOは裏技ではなく、正しいことを正しい順番で丁寧にやること。地方のサロンでも検索1ページ目を現実にできます。
      </p>
      <div className="grid gap-4">
        {summarySteps.map((text, i) => (
          <section key={text} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
            <p className="text-sm font-bold text-orange-500">{i + 1}</p>
            <p className="mt-1 font-bold text-white">{text}</p>
          </section>
        ))}
      </div>
      <p className="mt-8 text-sm text-gray-400">
        最初の2つは今日から着手できます。3つ目はWebの知識が必要ですがプロに任せれば確実です。4つ目と5つ目は継続運用が必要ですが、仕組み化すれば負担は抑えられます。
      </p>

      <h2 id="self-checklist" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        自分のサロンの現状をチェックしてみよう
      </h2>
      <LocalSEOChecklist />

      <CTASection
        heading="あなたのサロン、検索で見つかりますか？"
        body="NY33では、サロンのローカルSEO対策をトータルでサポートしています。GBPの最適化からサイトのSEO設定、コンテンツ制作まで、「地域名＋サロン」で検索1ページ目に表示されるための施策をご提案します。"
        gaLocation="blog_article_local_seo"
      />

      <section className="mt-16 border-t border-white/[0.06] pt-12">
        <h2 className="text-xl font-bold text-white">関連記事</h2>
        <ul className="mt-4 space-y-3">
          <li>
            <Link
              href="/blog/salon-shukyaku-without-hotpepper"
              className="text-orange-400 underline-offset-4 transition-colors hover:text-orange-300 hover:underline"
            >
              ホットペッパーに頼らないサロン集客の始め方｜自社サイト×SNS×LINEで予約を安定させる方法
            </Link>
          </li>
          <li>
            <Link
              href="/blog/salon-aio-ai-search"
              className="text-orange-400 underline-offset-4 transition-colors hover:text-orange-300 hover:underline"
            >
              ChatGPTに自分のサロンを紹介してもらうには？AI検索時代の新しい集客対策
            </Link>
          </li>
        </ul>
      </section>
    </article>
  )
}
