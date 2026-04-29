"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ga } from "@/lib/gtag"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const timelineData = [
  { year: "1992", age: "", title: "広島県尾道市に生まれる", body: "", tag: "ORIGIN" },
  {
    year: "1999",
    age: "7歳",
    title: "野球を始める",
    body: "小学1年生でバットを握り、ここから16年間、野球以外のことを考えたことがないほどの日々が始まる。",
    tag: "BASEBALL",
  },
  {
    year: "2010",
    age: "高校時代",
    title: "甲子園ベスト4",
    body: "甲子園に2度出場し、いずれもレギュラーとして出場。勝つために何をすべきかを逆算し、毎日に落とし込む思考が今の土台。",
    tag: "BASEBALL",
    highlight: true,
  },
  {
    year: "2014",
    age: "大学時代",
    title: "大学選手権 準優勝",
    body: "大学でも野球を続け、全国大学選手権で準優勝。データと感覚の両方で勝負する経験を積む。",
    tag: "BASEBALL",
    highlight: true,
  },
  {
    year: "2014",
    age: "22歳",
    title: "プロ野球を諦める決断",
    body: "16年間のすべてだった野球を辞める。人生で最も大きな決断だった。",
    tag: "TURNING POINT",
    turning: true,
  },
  {
    year: "2016",
    age: "24歳",
    title: "船の故障。人生の転機",
    body: "事業継続が困難になり、初めて自分の人生を本気で考える。人と関わる仕事がしたいという想いが次の一歩を決めた。",
    tag: "TURNING POINT",
    turning: true,
  },
  {
    year: "2016",
    age: "24歳",
    title: "東京の営業会社へ",
    body: "営業経験ゼロからスタートし、人にモノを売ること、Webマーケティングを一から学ぶ。",
    tag: "SALES & MARKETING",
  },
  {
    year: "2020",
    age: "28歳",
    title: "子どもの誕生。広島へ帰る",
    body: "子どもの誕生をきっかけに、地元・尾道に拠点を戻す。",
    tag: "TURNING POINT",
    turning: true,
  },
  {
    year: "2022",
    age: "31歳",
    title: "合同会社NY33 設立",
    body: "Webの力で地方を活性化するため起業。サロン・ウェルネス業界を中心に、届く仕組みを作り続けている。",
    tag: "FOUNDING",
    highlight: true,
  },
]

const values = [
  {
    icon: "🎯",
    title: "逆算思考",
    body: "ゴールから逆算して今日やるべきことを決める。Web制作とマーケティングでも同じ軸で設計します。",
  },
  {
    icon: "📊",
    title: "データと感覚の両立",
    body: "数字とクリエイティブの両方で勝負する。どちらか一方ではなく、両方を重視します。",
  },
  {
    icon: "🤝",
    title: "画面の向こうに人がいる",
    body: "アクセスの先には必ず人がいる。届ける相手を想像し、成果につながるWebをつくります。",
  },
]

const profileRows = [
  ["名前", "二宮佑介"],
  ["生年月日", "1992年8月13日"],
  ["出身地", "広島県尾道市"],
  ["現住所", "広島県尾道市"],
  ["会社", "合同会社NY33 代表社員"],
  ["事業内容", "Web制作 / SEO・AIO対策 / 集客動線設計"],
  ["得意業界", "サロン・ウェルネス・クリニック"],
  ["野球歴", "小学1年〜大学4年（計16年）"],
  ["主な実績", "甲子園2回出場・ベスト4 / 大学選手権準優勝"],
]

function FadeInSection({ children, delay = 0 }: { children: any; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export function ColophonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const [isStoryOpen, setIsStoryOpen] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Grid columns fade up with stagger
      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(":scope > div")
        gsap.from(columns, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Footer fade in
      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="colophon"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / Colophon</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">会社概要</h2>
          <button
            type="button"
            onClick={() => setIsStoryOpen((prev) => !prev)}
            className="mt-4 inline-flex items-center rounded-lg border border-white/15 px-4 py-2 font-mono text-xs tracking-[0.15em] text-slate-300 hover:border-accent/60 hover:text-accent transition-colors"
          >
            {isStoryOpen ? "ストーリーを閉じる" : "ストーリーを見る"}
          </button>
        </div>
      </div>

      {/* Story block */}
      <div ref={gridRef} className={`${isStoryOpen ? "space-y-14" : "hidden"}`}>
        <FadeInSection>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">About the Founder</p>
            <h3 className="mt-3 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight">代表社員：二宮佑介</h3>
            <p className="mt-5 max-w-3xl font-mono text-sm text-muted-foreground leading-relaxed">
              甲子園ベスト4、大学選手権準優勝。16年間の野球人生、造船業、東京での営業を経て、地方で「届くWeb」を作るために起業しました。
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="relative">
            <div className="absolute left-[11px] top-0 h-full w-px bg-gradient-to-b from-orange-500/70 to-orange-500/10" />
            <div className="space-y-6">
              {timelineData.map((item, i) => (
                <div key={`${item.year}-${item.title}-${i}`} className="flex gap-4">
                  <div className="relative w-6 shrink-0">
                    <div
                      className={`mt-2 rounded-full ${
                        item.turning ? "h-4 w-4 bg-orange-500 ring-4 ring-orange-500/25" : item.highlight ? "h-3 w-3 bg-orange-500" : "h-2 w-2 bg-slate-500"
                      }`}
                    />
                  </div>
                  <div
                    className={`flex-1 rounded-xl border p-4 md:p-5 ${
                      item.turning ? "border-orange-500/30 bg-orange-500/[0.06]" : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-xs text-orange-400">{item.year}</p>
                      {item.age ? <p className="font-mono text-[11px] text-slate-500">{item.age}</p> : null}
                      <p className="ml-auto rounded bg-white/5 px-2 py-1 font-mono text-[9px] tracking-widest text-slate-500">{item.tag}</p>
                    </div>
                    <h4 className="mt-2 text-base md:text-lg font-bold text-slate-100">{item.title}</h4>
                    {item.body ? <p className="mt-2 font-mono text-xs leading-relaxed text-slate-400">{item.body}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">Values</p>
            <h4 className="mt-2 text-2xl md:text-3xl font-bold text-slate-100">野球が教えてくれたこと</h4>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h5 className="font-bold text-slate-100">{value.title}</h5>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-slate-400">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">Profile</p>
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
              {profileRows.map(([label, value], index) => (
                <div key={label} className={`flex flex-col md:flex-row ${index < profileRows.length - 1 ? "border-b border-white/10" : ""}`}>
                  <div className="w-full md:w-56 shrink-0 bg-white/[0.02] px-4 py-3 font-mono text-xs text-slate-500">{label}</div>
                  <div className="flex-1 px-4 py-3 text-sm text-slate-300">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-start">
              <div className="relative w-full max-w-[260px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/portfolio/スクリーンショット 2026-04-29 12.25.09.png"
                    alt="代表社員 二宮佑介"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Bottom copyright */}
      <div
        ref={footerRef}
        className="mt-24 pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          © 2025 合同会社NY33. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="font-mono text-[10px] text-muted-foreground">広島県尾道市因島</p>
          <Link
            href="/legal"
            className="font-mono text-xs text-foreground/75 hover:text-accent transition-colors duration-200 underline-offset-4 hover:underline"
            onClick={() => ga.clickLegal()}
          >
            特定商取引法に基づく表記
          </Link>
        </div>
      </div>
    </section>
  )
}
