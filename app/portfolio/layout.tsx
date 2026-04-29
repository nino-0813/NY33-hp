import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_PUBLIC_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "事例・ポートフォリオ｜合同会社NY33",
  description:
    "合同会社NY33のWeb制作・マーケティング事例をご紹介します。サロン・店舗向けのサイト制作、LP、SEO・AIO対策の実績です。",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "事例・ポートフォリオ｜合同会社NY33",
    description: "Web制作・マーケティング事例・実績の一覧。",
    type: "website",
    url: `${SITE_PUBLIC_URL}/portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: "事例・ポートフォリオ｜合同会社NY33",
    description: "Web制作・マーケティング事例・実績の一覧。",
  },
}

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return children
}
