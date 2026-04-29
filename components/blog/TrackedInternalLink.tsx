"use client"

import Link from "next/link"
import type { ComponentProps, MouseEventHandler } from "react"
import { trackEvent } from "@/lib/gtag"
import { hrefToArticleSegment } from "@/lib/page-context"

type TrackedInternalLinkProps = Omit<ComponentProps<typeof Link>, "onClick"> & {
  /** 現在の記事スラッグ（例: salon-aio-ai-search） */
  fromArticle: string
  href: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function TrackedInternalLink({ fromArticle, href, onClick, ...rest }: TrackedInternalLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    trackEvent("internal_link_click", {
      from_article: fromArticle,
      to_article: hrefToArticleSegment(href),
    })
    onClick?.(e)
  }

  return <Link href={href} {...rest} onClick={handleClick} />
}
