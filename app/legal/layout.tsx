import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_PUBLIC_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | 合同会社NY33",
  description: "合同会社NY33の特定商取引法に基づく表示（事業者情報・返品など）",
  alternates: { canonical: `${SITE_PUBLIC_URL}/legal` },
}

export default function LegalLayout({ children }: { children: ReactNode }) {
  return children
}
