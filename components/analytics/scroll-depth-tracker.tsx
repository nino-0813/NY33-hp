"use client"

import { usePathname } from "next/navigation"
import { useScrollDepth } from "@/hooks/use-scroll-depth"

export function ScrollDepthTracker() {
  const pathname = usePathname()
  useScrollDepth(pathname)
  return null
}
