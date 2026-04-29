"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { GA_MEASUREMENT_ID, pageview } from "@/lib/gtag"

/**
 * App Router のクライアント遷移時に `page_path` を GA4 に送る。
 * `useSearchParams` 利用のため、ルート layout では `<Suspense>` で包むこと。
 */
export function GaPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return
    const q = searchParams.toString()
    const url = q ? `${pathname}?${q}` : pathname
    pageview(url)
  }, [pathname, searchParams])

  return null
}
