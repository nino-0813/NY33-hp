import type { PageType } from "@/lib/analytics-types"

export function getPageContextFromPathname(pathname: string): {
  page_type: PageType
  article_slug?: string
} {
  const p = (pathname.split("?")[0] || "/").replace(/\/$/, "") || "/"
  if (p === "/") {
    return { page_type: "top" }
  }
  if (p.startsWith("/blog/")) {
    const slug = p.slice("/blog/".length).split("/")[0]
    return { page_type: "blog", article_slug: slug || undefined }
  }
  if (p === "/faq" || p.startsWith("/faq/")) {
    return { page_type: "faq" }
  }
  return { page_type: "service" }
}

/** 内部リンクの href から `to_article` 用のセグメントを取得（ブログならスラッグ、それ以外は先頭パス） */
export function hrefToArticleSegment(href: string): string {
  const blog = href.match(/^\/blog\/([^/?#]+)/)
  if (blog?.[1]) return blog[1]
  try {
    const u = href.startsWith("http") ? new URL(href) : new URL(href, "https://example.com")
    const path = u.pathname.replace(/^\//, "")
    return path.split("/")[0] || href
  } catch {
    return href.replace(/^\//, "").split("/")[0] || href
  }
}
