"use client"

import { useEffect, useRef } from "react"
import { LINE_URL, CONTACT_EMAIL } from "@/lib/site"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
      <AnimatedNoise opacity={0.03} />

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          NY33
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full">
        <SplitFlapAudioProvider>
          <div className="relative">
            <SplitFlapText text="NY33" speed={80} />
            <div className="mt-4">
              <SplitFlapMuteToggle />
            </div>
          </div>
        </SplitFlapAudioProvider>

        <h2 className="font-[var(--font-bebas)] text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] mt-4 tracking-wide">
          広島県尾道市因島 — Webとマーケティング
        </h2>

        <p className="mt-12 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
          HP・LP制作、SEO・AIO対策、集客動線の設計まで。届けたい相手に、届く仕組みをつくります。
        </p>

        <div className="mt-16 flex flex-wrap items-center gap-6">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text="事業内容を見る" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="#signals"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            お知らせ
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            お問い合わせ
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            公式LINE
          </a>
        </div>
      </div>

      {/* Floating info tag */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <div className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          合同会社NY33 / 広島県尾道市因島
        </div>
      </div>
    </section>
  )
}
