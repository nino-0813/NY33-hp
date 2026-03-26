/** 公式LINEのURL（LINE公式アカウントのリンクに差し替えてください） */
export const LINE_URL = "https://lin.ee/xxxxxxxx"

export const CONTACT_EMAIL = "llc33.company@gmail.com"

/** 本番のベース URL（特商法ページの絶対 URL や OGP 用） */
export const SITE_PUBLIC_URL = "https://ny-33-hp.vercel.app"

/** 特商法表記・会社情報（必要に応じて追記・修正してください） */
export const COMPANY_LEGAL: {
  name: string
  representative: string
  address: string
  /** 取得済みなら `'082-xxx-xxxx'` のように設定（未設定時は legal ページでメール案内） */
  phone?: string
} = {
  name: "合同会社NY33",
  representative: "二宮 佑介",
  address: "広島県尾道市因島土生1069-5",
  phone: "070-5096-3211",
}
