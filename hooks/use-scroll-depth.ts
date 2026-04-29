"use client"

import { useEffect, useRef } from "react"
import { trackEvent } from "@/lib/gtag"

const THRESHOLDS = [
  { pct: 25, event: "scroll_25" as const },
  { pct: 50, event: "scroll_50" as const },
  { pct: 75, event: "scroll_75" as const },
  { pct: 90, event: "scroll_90" as const },
]

/**
 * ページごとに閾値を1回ずつ計測。ルート変更時は発火状態をリセットする。
 */
export function useScrollDepth(pathname: string) {
  const fired = useRef<Set<string>>(new Set())

  useEffect(() => {
    fired.current = new Set()
  }, [pathname])

  useEffect(() => {
    const check = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY || doc.scrollTop
      const scrollable = doc.scrollHeight - window.innerHeight
      if (scrollable <= 0) {
        return
      }
      const depthPct = (scrollTop / scrollable) * 100

      for (const { pct, event } of THRESHOLDS) {
        if (depthPct >= pct && !fired.current.has(event)) {
          fired.current.add(event)
          trackEvent(event)
        }
      }
    }

    window.addEventListener("scroll", check, { passive: true })
    check()
    return () => window.removeEventListener("scroll", check)
  }, [pathname])
}
