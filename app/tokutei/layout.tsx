import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "審査提出フォーム | 合同会社NY33",
  description: "決済サービス向けの追加情報・特商法ページ URL 提出フォーム",
  robots: { index: false, follow: false },
}

export default function TokuteiLayout({ children }: { children: ReactNode }) {
  return children
}
