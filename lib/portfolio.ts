export type PortfolioItem = {
  slug: string
  title: string
  url: string
  category: string
  description: string
  image?: string
  span: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "ikevege",
    title: "イケベジ",
    url: "https://www.ikevege.com/",
    category: "Web",
    description:
      "佐渡ヶ島のオーガニックファーム「イケベジ」の公式サイト。自然栽培の考えをベースに、 Farm to Social のコンセプトで設計・制作。",
    image: "/portfolio/ikevege.webp",
    span: "col-span-2 row-span-2",
  },
  {
    slug: "hotel-pg",
    title: "HOTEL PG",
    url: "https://www.hotelpg-innosima.com/",
    category: "Web",
    description:
      "広島県因島の隠れ家リゾート「ホテルPG」の公式サイト。瀬戸内の凪に包まれる大人向けホテルのコンセプトで設計・制作。",
    image: "/portfolio/hotelpg.webp",
    span: "col-span-2 row-span-2",
  },
  {
    slug: "ninoude-fukuoka",
    title: "ジプソフィル",
    url: "https://www.ninoude-fukuoka.com/",
    category: "Web",
    description: "福岡の二の腕痩せ専門サロンサイト。症例・メニュー・LINE予約導線までを一体で設計した集客特化型サイト。",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.ninoude-fukuoka.com%2F?w=1200",
    span: "col-span-2 row-span-2",
  },
  {
    slug: "o-premium",
    title: "O PREMIUM",
    url: "https://o-premium-mein.vercel.app/",
    category: "Web",
    description: "歯科専用ドレープタオルのブランドサイト。製品訴求とサンプル請求導線を中心にしたD2B向けLP構成。",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fo-premium-mein.vercel.app%2F?w=1200",
    span: "col-span-2 row-span-2",
  },
  {
    slug: "fukuyama-ai-appraisal",
    title: "福山AI査定",
    url: "https://fudousann-ai-app.vercel.app/",
    category: "Web",
    description: "福山市特化のAI不動産査定サイト。査定導線から成功事例・相談導線までを一気通貫で設計。",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffudousann-ai-app.vercel.app%2F?w=1200",
    span: "col-span-2 row-span-2",
  },
  {
    slug: "maya-reki",
    title: "マヤ暦鑑定",
    url: "https://mayareki-hp.vercel.app/",
    category: "Web",
    description: "オンライン鑑定サービス向けサイト。サービス説明・料金・FAQ・無料相談導線で問い合わせ獲得を最適化。",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmayareki-hp.vercel.app%2F?w=1200",
    span: "col-span-2 row-span-2",
  },
  {
    slug: "isana-137",
    title: "137数秘",
    url: "https://www.isana137.com/",
    category: "Web",
    description: "数秘術サービスの紹介サイト。自己理解導線と商品紹介を両立したコンテンツ設計でCVへつなげる構成。",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.isana137.com%2F?w=1200",
    span: "col-span-2 row-span-2",
  },
]
