export type ServiceItem = {
  id: string
  category: string
  title: string
  number: string
  summary: string
  description: string
  includes: string[]
  accent: string
  span: string
}

export const services: ServiceItem[] = [
  {
    id: "hp",
    category: "WEB",
    title: "HP制作",
    number: "01",
    summary: "企業・団体の公式サイトを企画から制作まで。目的に合わせた構成とデザインで伝えたいことを届けます。",
    description:
      "Next.jsを使用した高速・SEOに強いモダンなWebサイトを制作します。スマホ完全対応はもちろん、GA4やサーチコンソールの分析基盤まで一括で構築。「作って終わり」ではなく、集客・改善まで見据えたサイト設計を行います。",
    includes: [
      "オリジナルデザイン・コーディング",
      "スマホ・タブレット完全レスポンシブ対応",
      "お問い合わせフォーム設置",
      "独自ドメイン・SSL設定",
      "GA4・サーチコンソール初期設定",
      "基本SEO設定（meta・OGP）",
    ],
    accent: "#F97316",
    span: "col-span-2 row-span-2",
  },
  {
    id: "lp",
    category: "LANDING",
    title: "LP制作",
    number: "02",
    summary: "広告やSNSからの流入を成果につなげるランディングページを制作します。",
    description:
      "1ページで「知る→興味→行動」の流れを設計するランディングページを制作。広告運用やSNS集客と組み合わせることで、問い合わせ・予約・購入などのコンバージョンを最大化します。",
    includes: [
      "ターゲット・訴求軸の設計",
      "構成案（ワイヤーフレーム）作成",
      "コピーライティング",
      "レスポンシブ対応コーディング",
      "フォーム・CTA設計",
      "GA4コンバージョン計測設定",
    ],
    accent: "#F97316",
    span: "col-span-1 row-span-1",
  },
  {
    id: "seo",
    category: "検索",
    title: "SEO対策",
    number: "03",
    summary: "検索エンジンからの自然流入を増やし、広告に頼らない集客基盤を作ります。",
    description:
      "キーワード戦略の設計からコンテンツ制作、内部対策まで一貫して対応。特にサロン・ウェルネス業界では「地域名＋サービス名」のローカルSEOが重要です。データに基づいた改善提案で、継続的に検索順位の向上を目指します。",
    includes: [
      "キーワード調査・戦略設計",
      "サイト内部SEO最適化",
      "ブログ記事企画・構成案作成",
      "SEO記事のライティング",
      "サーチコンソール分析レポート",
      "競合分析・改善提案",
    ],
    accent: "#F97316",
    span: "col-span-1 row-span-2",
  },
  {
    id: "aio",
    category: "AI",
    title: "AIO対策",
    number: "04",
    summary: "AI検索（ChatGPT・Gemini等）でも表示されるための最新の対策を行います。",
    description:
      "検索エンジンだけでなく、AIが回答を生成する時代に対応。構造化データの実装、E-E-A-Tの強化、AIが引用しやすいコンテンツ設計など、AI Overview・AI検索時代に備えた施策を提案・実行します。",
    includes: [
      "構造化データ（JSON-LD）の実装",
      "E-E-A-T強化施策の提案",
      "FAQ・ナレッジ型コンテンツ設計",
      "AIクローラー向けサイト最適化",
      "検索結果表示の最適化",
      "定期的なAI検索トレンド分析",
    ],
    accent: "#F97316",
    span: "col-span-1 row-span-1",
  },
  {
    id: "marketing",
    category: "マーケティング",
    title: "集客動線構築",
    number: "05",
    summary: "SNS・広告・検索・LINEを組み合わせた集客の仕組みを設計します。",
    description:
      "Webサイトを「受付」として、SNS・Google広告・MEO・LINEなど複数チャネルから見込み客を呼び込む導線を設計。どこから来て、何を見て、どう行動するか——データで把握・改善できる集客の仕組みを構築します。",
    includes: [
      "集客チャネル全体設計",
      "MEO対策（Googleビジネスプロフィール最適化）",
      "LINE公式アカウント構築・連携",
      "Instagram運用方針の策定",
      "Google広告の初期設定・運用提案",
      "GA4による効果測定・改善レポート",
    ],
    accent: "#F97316",
    span: "col-span-2 row-span-1",
  },
]
