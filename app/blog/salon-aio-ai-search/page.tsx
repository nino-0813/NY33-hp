import type { Metadata } from "next"
import { BlogHeader } from "@/components/blog/BlogHeader"
import { TableOfContents } from "@/components/blog/TableOfContents"
import { CTASection } from "@/components/blog/CTASection"
import { TrackedInternalLink } from "@/components/blog/TrackedInternalLink"
import { AISearchDemo } from "@/components/blog/AISearchDemo"
import { SEOvsAIOComparison } from "@/components/blog/SEOvsAIOComparison"
import { FAQAccordion, type FAQItem } from "@/components/blog/FAQAccordion"
import { SITE_PUBLIC_URL } from "@/lib/site"

const tocItems = [
  { id: "what-is-ai-search", label: "AI検索とは？サロンオーナーが知るべき新しい検索の仕組み" },
  { id: "how-ai-selects-salon", label: "AIはどうやって「おすすめのサロン」を選んでいるのか" },
  { id: "aio-five-steps", label: "サロンが今日からできるAIO対策 5つのステップ" },
  { id: "aio-first-mover", label: "AIO対策は「早い者勝ち」である理由" },
  { id: "summary-aio", label: "まとめ：AI時代のサロン集客は「選ばれる設計」がカギ" },
  { id: "faq-aio", label: "よくある質問" },
]

const stepsFive = [
  {
    title: "STEP 1：Googleビジネスプロフィールを「完璧」にする（難易度：低）",
    body:
      "サロン名・住所・電話・営業時間（祝日含む）の一致、写真20枚以上、説明文での施術・こだわりの明示、口コミへの丁寧な返信、1ヶ月以内の投稿更新などをチェック。今日から着手できます。",
  },
  {
    title: "STEP 2：サイトに「結論ファースト」のコンテンツを作る（難易度：低〜中）",
    body:
      "「よもぎ蒸しとは何か」→事実と当サロンの提供内容を冒頭に。長い導入のあとに結論が来る文章は、AIに拾われにくい傾向があります。メニュー・ブログをこの形に整えましょう。",
  },
  {
    title: "STEP 3：FAQページを作る（難易度：中）",
    body:
      "お客様がAIに聞きそうな問い（施術内容・時間・初回・予約・駐車場等）を見出しにし、回答の先頭に結論。FAQPageの構造化データと組み合わせると引用されやすくなるという報告もあります（実装は専門家向け）。",
  },
  {
    title: "STEP 4：「あなたのサロンにしか書けない記事」を発信する（難易度：中）",
    body:
      "施術へのこだわり、スタッフの想い、お客様の変化（同意取得済み）、地域とサロンのストーリーなど、一般論だけではない一次情報を継続発信します。",
  },
  {
    title: "STEP 5：構造化データを実装する（難易度：高 → 専門家に依頼）",
    body:
      "LocalBusiness・FAQPage・Service・Review などを適切に実装すると、AI・Googleがサイトをデータとして正確に理解しやすくなります。コード対応が必要なため、制作会社への依頼が確実です。",
  },
]

const summaryFive = [
  "Googleビジネスプロフィールを完璧にする",
  "サイトのコンテンツを「結論ファースト」にする",
  "お客様がAIに聞きそうなFAQを作る",
  "あなたにしか書けない一次情報を発信する",
  "構造化データを専門家に依頼して実装する",
]

const faqItems: FAQItem[] = [
  {
    question: "AIO対策とは何ですか？",
    answer:
      "AIO対策（AI Optimization）とは、ChatGPTやGoogle AI Overviewなど、AIが生成する回答に自社の情報が引用されるように最適化する施策です。従来のSEOが検索結果の上位表示を目指すのに対し、AIOはAIの回答の中で情報源として選ばれることを目指します。",
  },
  {
    question: "サロンにAIO対策は必要ですか？",
    answer:
      "はい、必要です。2026年現在、AI検索の利用率は8ヶ月で3.5倍に急増しています。お客様が「福山市 おすすめ エステ」とChatGPTに聞いた時に、あなたのサロンが紹介されるかどうかが、今後の集客を大きく左右します。",
  },
  {
    question: "AIO対策とSEO対策の違いは？",
    answer:
      "SEOはGoogleの検索結果で上位表示を目指す施策、AIOはAIの回答の中で情報源として引用されることを目指す施策です。AIOはSEOの知識を土台にしつつ、構造化データ、結論ファーストの文章構成、一次情報の発信など、AIが理解しやすい情報設計が求められます。",
  },
  {
    question: "サロンのAIO対策は自分でできますか？",
    answer:
      "構造化データの実装やコンテンツの最適化には専門的な知識が必要です。Googleビジネスプロフィールの充実や口コミの獲得などは自分でもできますが、技術的な対策は専門家に依頼することをおすすめします。",
  },
]

export const metadata: Metadata = {
  title: "ChatGPTに自分のサロンを紹介してもらうには？AI検索時代の新しい集客対策",
  description:
    "ChatGPTやGoogleのAI検索であなたのサロンが表示される条件とは？2026年最新のAIO対策（AI検索最適化）をサロンオーナー向けにわかりやすく解説。構造化データ、E-E-A-T、FAQ設計など具体的な施策を紹介します。",
  keywords: [
    "AI検索 サロン 対策",
    "ChatGPT サロン 表示",
    "AIO対策 とは",
    "AI Overview サロン",
    "サロン 集客 AI",
    "LLMO対策 サロン",
  ],
  openGraph: {
    title: "ChatGPTに自分のサロンを紹介してもらうには？",
    description:
      "AI検索時代の新しい集客対策。サロンがChatGPTやGoogle AI Overviewに表示されるための具体的な方法を解説。",
    type: "article",
    publishedTime: "2026-04-29",
    authors: ["合同会社NY33"],
    url: `${SITE_PUBLIC_URL}/blog/salon-aio-ai-search`,
    images: [
      {
        url: "/blog/ogp-salon-aio.png",
        width: 1200,
        height: 630,
        alt: "ChatGPTに自分のサロンを紹介してもらうには？",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPTに自分のサロンを紹介してもらうには？",
    description: "AI検索時代の新しい集客対策。AIO（AI検索最適化）のポイントを解説。",
  },
  alternates: {
    canonical: "/blog/salon-aio-ai-search",
  },
}

export default function SalonAioAiSearchPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ChatGPTに自分のサロンを紹介してもらうには？AI検索時代の新しい集客対策",
    description: "サロンがAI検索に表示されるための具体的な方法を解説。",
    author: { "@type": "Organization", name: "合同会社NY33" },
    publisher: { "@type": "Organization", name: "合同会社NY33" },
    datePublished: "2026-04-29",
    dateModified: "2026-04-29",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_PUBLIC_URL}/blog/salon-aio-ai-search`,
    },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-14 text-base leading-relaxed text-gray-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <BlogHeader
        category="AIO対策"
        title="ChatGPTに自分のサロンを紹介してもらうには？"
        subtitle="AI検索時代の新しい集客対策"
        publishedAt="2026年4月29日"
      />

      <TableOfContents items={tocItems} />

      <p className="mb-6 font-medium text-white">「福山市でおすすめのエステサロンを教えて」</p>
      <p className="mb-6">
        こう聞かれた時、あなたのサロンはChatGPTやGeminiの回答に表示されますか？
      </p>
      <p className="mb-6">
        2026年、検索の世界が大きく変わっています。Googleで検索しても、まず表示されるのはAIがまとめた回答（AI
        Overview）。そして、ChatGPTやGeminiに直接質問する人が急増しています。AI検索の利用率は、わずか8ヶ月で3.5倍に増加しました。
      </p>
      <p className="mb-6">
        つまり、これからのサロン集客は「Google検索で上位に表示される」だけでは不十分。
        <span className="font-bold text-white">「AIに紹介してもらえるサロン」になる必要がある</span>
        のです。
      </p>
      <p className="mb-10">
        この記事では、サロンオーナーが今すぐ知るべきAIO対策（AI検索最適化）を、専門用語をできるだけ使わずに解説します。
      </p>

      <AISearchDemo />

      <h2 id="what-is-ai-search" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        AI検索とは？サロンオーナーが知るべき新しい検索の仕組み
      </h2>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">お客様の「検索行動」が変わった</h3>
      <p className="mb-4 font-mono text-sm text-gray-500">これまでの検索行動：</p>
      <ol className="mb-6 list-decimal space-y-2 pl-6">
        <li>「福山市 エステ」でGoogle検索</li>
        <li>検索結果の上から順にサイトを見る</li>
        <li>比較して予約する</li>
      </ol>
      <p className="mb-4 font-mono text-sm text-gray-500">2026年の検索行動：</p>
      <ol className="mb-6 list-decimal space-y-2 pl-6">
        <li>ChatGPTやGeminiに「福山市でおすすめのエステを教えて」と聞く</li>
        <li>
          <span className="font-bold text-white">AIが「おすすめのサロン」を直接回答する</span>
        </li>
        <li>紹介されたサロンのサイトだけを見て予約する</li>
      </ol>
      <p className="mb-6">
        この変化で何が起きるか？{" "}
        <span className="font-bold text-white">AIに紹介されないサロンは、検索すらされなくなる可能性がある</span>
        ということです。
      </p>
      <p className="mb-6">
        実際にデータで見ると、Google検索でAIの回答が表示されると、従来の検索1位のサイトでもクリック率が58%低下するという調査結果が出ています。検索全体の65〜70%が、サイトを訪問せずにAIの回答だけで完結する「ゼロクリック検索」になっています。
      </p>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">AIO対策とは？</h3>
      <p className="mb-6">
        AIO（AI Optimization）とは、
        <span className="font-bold text-white">
          AIが生成する回答に自社の情報が「情報源」として引用されるように最適化する施策
        </span>
        です。
      </p>
      <p className="mb-6">
        SEO対策が「Google検索で上位に表示させること」を目指すのに対し、AIO対策は「AIの回答の中であなたのサロンが紹介されること」を目指します。
      </p>

      <SEOvsAIOComparison />

      <p className="mb-6">
        大事なポイントは、AIO対策はSEO対策の「代わり」ではなく、「上に積むもの」だということ。SEOの基盤があってこそ、AIO対策が効いてきます。
      </p>

      <h2 id="how-ai-selects-salon" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        AIはどうやって「おすすめのサロン」を選んでいるのか
      </h2>
      <p className="mb-8">
        この章が一番重要です。AIがサロンを紹介する時の判断基準を理解すれば、何をすべきかが見えてきます。
      </p>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">判断基準①：信頼できる情報源か（E-E-A-T）</h3>
      <p className="mb-6">
        AIは「この情報源は信頼できるか？」を厳しく評価しています。Googleが定義する
        <span className="font-bold text-white">E-E-A-T</span>
        （経験・専門性・権威性・信頼性）が、AI検索でもそのまま重要です。
      </p>
      <p className="mb-4 font-bold text-white">サロンに当てはめると：</p>
      <ul className="mb-6 space-y-3">
        <li>
          <span className="text-orange-500">●</span> <strong className="text-gray-200">Experience（経験）：</strong>
          実際の施術事例、ビフォーアフター、スタッフの施術歴
        </li>
        <li>
          <span className="text-orange-500">●</span> <strong className="text-gray-200">Expertise（専門性）：</strong>
          特定施術に関する深い知識
        </li>
        <li>
          <span className="text-orange-500">●</span> <strong className="text-gray-200">Authoritativeness（権威性）：</strong>
          口コミ数、メディア掲載、認知度
        </li>
        <li>
          <span className="text-orange-500">●</span> <strong className="text-gray-200">Trustworthiness（信頼性）：</strong>
          SSL、会社概要、スタッフの実名公開など
        </li>
      </ul>
      <p className="mb-6">
        つまり、
        <span className="font-bold text-white">「このサロンのこの人が言っているから信頼できる」とAIが判断できる状態</span>
        を作る必要があります。
      </p>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">判断基準②：AIが理解しやすい構造か（構造化データ）</h3>
      <p className="mb-6">
        AIはWebサイトの文章を「読んでいる」のではなく、
        <span className="font-bold text-white">データとして「解析している」</span>
        のです。
      </p>
      <ul className="mb-6 space-y-2">
        <li>
          <span className="mr-2 text-orange-500">●</span>
          <strong className="text-gray-200">構造化データ（JSON-LD）</strong>でサロン情報・営業時間・評価などを明示
        </li>
        <li>
          <span className="mr-2 text-orange-500">●</span>
          <strong className="text-gray-200">FAQの構造化</strong>でよくある質問を機械可読に
        </li>
        <li>
          <span className="mr-2 text-orange-500">●</span>
          <strong className="text-gray-200">Googleビジネスプロフィール</strong>の正確な登録
        </li>
      </ul>
      <p className="mb-6">目に見えない「裏側の設計」ですが、AIに選ばれるためには極めて重要です。</p>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">判断基準③：一次情報があるか</h3>
      <p className="mb-6">
        AIは一般的な情報を自分で生成できますが、
        <span className="font-bold text-white">「あなたのサロンでしか得られない情報」は生成できません。</span>
      </p>
      <p className="mb-4">引用されやすい一次情報の例：</p>
      <ul className="mb-6 space-y-2">
        <li>
          <span className="mr-2 text-orange-500">●</span>
          産地や温度管理など、当サロンならではのよもぎ蒸しのこだわり
        </li>
        <li>
          <span className="mr-2 text-orange-500">●</span>
          施術歴10年のスタッフが一人ひとりに合わせて提案するメニュー
        </li>
        <li>
          <span className="mr-2 text-orange-500">●</span>
          お客様の声（許可を得たうえでのビフォーアフター体験談）
        </li>
      </ul>
      <p className="mb-6">
        こうした<span className="font-bold text-white">具体的な一次情報</span>が、AIに引用される鍵になります。
      </p>

      <h2 id="aio-five-steps" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        サロンが今日からできるAIO対策 5つのステップ
      </h2>
      <div className="grid gap-4">
        {stepsFive.map((step, i) => (
          <section key={step.title} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
            <p className="text-sm font-bold text-orange-500">{i + 1}</p>
            <h3 className="mt-1 text-xl font-bold text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{step.body}</p>
          </section>
        ))}
      </div>

      <h3 className="mt-12 mb-4 text-xl font-bold text-white">STEP 1のチェックリスト（抜粋）</h3>
      <ul className="mb-8 space-y-2">
        <li>
          <span className="mr-2 text-orange-500">●</span>サロン名・住所・電話がSNS等と一致しているか
        </li>
        <li>
          <span className="mr-2 text-orange-500">●</span>営業時間は祝日対応も含め正確か
        </li>
        <li>
          <span className="mr-2 text-orange-500">●</span>高品質な写真が20枚以上あるか
        </li>
        <li>
          <span className="mr-2 text-orange-500">●</span>説明文に施術・こだわり・ターゲットが書かれているか
        </li>
        <li>
          <span className="mr-2 text-orange-500">●</span>口コミに丁寧に返信しているか
        </li>
        <li>
          <span className="mr-2 text-orange-500">●</span>最新投稿が1ヶ月以内にあるか
        </li>
      </ul>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">文章の「悪い例／良い例」</h3>
      <div className="mb-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
        <p className="mb-2 text-xs font-bold text-gray-500">悪い例（前置きが長い）</p>
        <p className="text-sm text-gray-400">
          最近はストレス社会と言われていますよね。忙しい毎日の中で、身体の冷えに悩んでいる方も多いのではないでしょうか。そんなあなたにおすすめなのが、よもぎ蒸しです。
        </p>
      </div>
      <div className="mb-8 rounded-xl border border-orange-500/20 bg-orange-500/5 p-4">
        <p className="mb-2 text-xs font-bold text-orange-400">良い例（結論ファースト）</p>
        <p className="text-sm text-gray-300">
          よもぎ蒸しとは、よもぎを蒸した蒸気を下半身から取り込むことで、冷えの改善やリラックス効果が期待できる温活療法です。当サロンでは○○産のよもぎを使用し、個室で40分間の施術を行います。
        </p>
      </div>

      <h2 id="aio-first-mover" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        AIO対策は「早い者勝ち」である理由
      </h2>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">競合がまだやっていない今がチャンス</h3>
      <p className="mb-6">
        2026年4月時点で、AIO対策を意識しているサロンはほとんどありません。大手チェーンですら手をつけていないところが多いのが現実です。個人サロン・小規模サロンにとって大きなチャンスです。
      </p>
      <p className="mb-6">
        SEOでは大手が資金力・コンテンツ量で有利ですが、AIOでは
        <span className="font-bold text-white">「量」より「質」と「独自性」</span>
        。あなたにしか書けないこだわりは、大手には真似しづらい領域です。
      </p>

      <h3 className="mt-10 mb-4 text-xl font-bold text-white">AIの「記憶」に入ると長期的に効く</h3>
      <p className="mb-6">
        SEOはアルゴリズム変更で順位が変動しがちです。一方、信頼できる情報源としてのポジションは、質が維持されている限り比較的安定します。早めにポジションを取っておくことが、1年後・2年後の集客に効いてきます。
      </p>

      <h2 id="summary-aio" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        まとめ：AI時代のサロン集客は「選ばれる設計」がカギ
      </h2>
      <div className="grid gap-4">
        {summaryFive.map((text, i) => (
          <section key={text} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
            <p className="text-sm font-bold text-orange-500">{i + 1}</p>
            <p className="mt-1 font-bold text-white">{text}</p>
          </section>
        ))}
      </div>
      <p className="mt-8">
        最初の3つは今日から自分で始められます。4つ目と5つ目は、専門家と一緒に取り組むことで確実に成果につながりやすくなります。
      </p>

      <h2 id="faq-aio" className="mt-16 mb-6 scroll-mt-24 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-white">
        よくある質問
      </h2>
      <FAQAccordion items={faqItems} />

      <CTASection
        heading="あなたのサロン、AIに紹介されていますか？"
        body="NY33では、サロンのAIO対策（AI検索最適化）をサポートしています。構造化データの実装からコンテンツ設計まで、AI時代に『選ばれるサロン』になるためのお手伝いをします。"
        articleSlug="salon-aio-ai-search"
        position="bottom"
        ctaType="line"
      />

      <section className="mt-16 border-t border-white/[0.06] pt-12">
        <h2 className="text-xl font-bold text-white">関連記事</h2>
        <ul className="mt-4 space-y-3">
          <li>
            <TrackedInternalLink
              fromArticle="salon-aio-ai-search"
              href="/blog/salon-shukyaku-without-hotpepper"
              className="text-orange-400 underline-offset-4 transition-colors hover:text-orange-300 hover:underline"
            >
              ホットペッパーに頼らないサロン集客の始め方｜自社サイト×SNS×LINEで予約を安定させる方法
            </TrackedInternalLink>
          </li>
        </ul>
      </section>
    </article>
  )
}
