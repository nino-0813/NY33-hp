/** GA4 計測ID（`.env.local` の `NEXT_PUBLIC_GA_MEASUREMENT_ID` で上書き可） */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-JMR6XDWCXE"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/** SPA 遷移後のページビュー（layout の初期 config は `send_page_view: false` とセットで利用） */
export function pageview(pathWithQuery: string) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return
  if (typeof window.gtag !== "function") return
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: pathWithQuery,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  })
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return
  if (typeof window.gtag !== "function") return
  const cleaned = Object.fromEntries(
    Object.entries(params ?? {}).filter(([, v]) => v !== undefined),
  ) as Record<string, string | number | boolean>
  window.gtag("event", name, cleaned)
}

/** サイト内で使うイベント名・パラメータを揃える */
export const ga = {
  clickLine: (link_location: string) => trackEvent("click_line", { link_location }),
  clickAnchor: (link_id: string, location: string) => trackEvent("click_anchor", { link_id, location }),
  openContactDialog: (plan_name: string) => trackEvent("open_contact_dialog", { plan_name }),
  /** 料金フォーム送信成功（GA4 推奨イベント `generate_lead`） */
  generateLead: (params: { plan: string; method: string }) =>
    trackEvent("generate_lead", {
      currency: "JPY",
      value: 1,
      lead_source: "pricing_contact",
      plan_name: params.plan,
      method: params.method,
    }),
  selectBlogCard: (article_path: string) => trackEvent("select_blog_card", { article_path }),
  sideNav: (section_id: string) => trackEvent("side_nav_click", { section_id }),
  portfolioList: () => trackEvent("portfolio_to_list", { link_text: "その他の事例はこちら" }),
  portfolioCard: (slug: string, title: string) => trackEvent("portfolio_card_click", { item_slug: slug, item_name: title }),
  serviceModalContact: (service_title: string) =>
    trackEvent("click_service_modal_cta", { service_title, link_url: "/contact" }),
  clickLegal: () => trackEvent("click_legal_link", { page: "tokushoho" }),
} as const
