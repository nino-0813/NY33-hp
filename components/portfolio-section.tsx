"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { CONTACT_EMAIL } from "@/lib/site"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const portfolioItems = [
  {
    title: "イケベジ",
    url: "https://www.ikevege.com/",
    category: "Web",
    description: "佐渡ヶ島のオーガニックファーム「イケベジ」の公式サイト。自然栽培の考えをベースに、 Farm to Social のコンセプトで設計・制作。",
    image: "/portfolio/ikevege.webp",
    span: "col-span-2 row-span-2",
  },
  {
    title: "HOTEL PG",
    url: "https://www.hotelpg-innosima.com/",
    category: "Web",
    description: "広島県因島の隠れ家リゾート「ホテルPG」の公式サイト。瀬戸内の凪に包まれる大人向けホテルのコンセプトで設計・制作。",
    image: "/portfolio/hotelpg.webp",
    span: "col-span-2 row-span-2",
  },
]

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )
      const cards = gridRef.current?.querySelectorAll("article")
      if (cards?.length) {
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="portfolio" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      <div ref={headerRef} className="mb-16 flex items-end justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / Portfolio</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">ポートフォリオ</h2>
        </div>
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          これまでの制作事例・実績をご紹介します。
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]"
      >
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={index} item={item} index={index} persistHover={index === 0} />
        ))}
      </div>

      <div className="mt-12 flex justify-start">
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=制作事例について`}
          className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
        >
          その他の事例はこちら
          <span className="transition-transform duration-[400ms] ease-in-out group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  )
}

function PortfolioCard({
  item,
  index,
  persistHover = false,
}: {
  item: {
    title: string
    url: string
    category: string
    description: string
    image?: string
    span: string
  }
  index: number
  persistHover?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const [isScrollActive, setIsScrollActive] = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    if (!persistHover || !cardRef.current) return
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        onEnter: () => setIsScrollActive(true),
      })
    }, cardRef)
    return () => ctx.revert()
  }, [persistHover])

  const isActive = isHovered || isScrollActive
  const showImage = item.image && !imgError

  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative border border-border/40 p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden",
        item.span,
        isActive && "border-accent/60",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20"
        aria-label={`${item.title}のサイトを開く`}
      />

      <div
        className={cn(
          "absolute inset-0 bg-accent/5 transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      />

      {/* サイト画像（事業内容と同じ枠内に配置） */}
      <div className="relative w-full flex-1 min-h-0 overflow-hidden">
        {showImage ? (
          <div className="relative w-full h-full min-h-[80px]">
            <Image
              src={item.image!}
              alt={`${item.title}のサイトプレビュー`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 50vw, 25vw"
              unoptimized
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
              {item.title}
            </span>
          </div>
        )}
      </div>

      {/* Content（WorkCard と同じ構造） */}
      <div className="relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {item.category}
        </span>
        <h3
          className={cn(
            "mt-3 font-[var(--font-bebas)] text-2xl md:text-4xl tracking-tight transition-colors duration-300",
            isActive ? "text-accent" : "text-foreground",
          )}
        >
          {item.title}
        </h3>
      </div>

      {/* Description - 常に表示 */}
      <div className="relative z-10">
        <p className="font-mono text-xs text-muted-foreground leading-relaxed max-w-[280px] opacity-100">
          {item.description}
        </p>
      </div>

      {/* Index marker（WorkCard と同じ） */}
      <span
        className={cn(
          "absolute bottom-4 right-4 font-mono text-[10px] transition-colors duration-300",
          isActive ? "text-accent" : "text-muted-foreground/40",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Corner line（WorkCard と同じ） */}
      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
      </div>
    </article>
  )
}
