"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { LINE_URL } from "@/lib/site"
import { ga } from "@/lib/gtag"
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
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/portfolio/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="z-10">
        <AnimatedNoise opacity={0.03} />
      </div>

      <div className="absolute top-6 left-6 md:top-8 md:left-28 z-10 origin-top-left scale-[0.65] md:scale-[0.8]">
        <SplitFlapAudioProvider>
          <div className="relative">
            <SplitFlapText text="NY33" speed={80} />
            <div className="mt-4">
              <SplitFlapMuteToggle />
            </div>
          </div>
        </SplitFlapAudioProvider>
      </div>

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          NY33
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full z-10 relative pt-32 md:pt-36">

        <h2 className="font-[var(--font-bebas)] text-foreground text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] tracking-wide">
          地方企業の売上は、<br />
          まだ伸ばせる。
        </h2>

        <h3 className="mt-5 md:mt-6 max-w-2xl font-mono text-sm md:text-base text-white/85 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
          必要なのは、ホームページ制作ではなく「売上導線」の設計です。
        </h3>

        <h2 className="font-[var(--font-bebas)] text-white/75 text-[clamp(1rem,3vw,2rem)] mt-6 md:mt-8 tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
          広島県尾道市因島 — Webとマーケティング
        </h2>

        <p className="mt-4 md:mt-6 max-w-md font-mono text-sm text-white/80 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
          HP・LP制作、SEO・AIO対策、集客動線の設計まで。届けたい相手に、届く仕組みをつくります。
        </p>

        <div className="mt-12 md:mt-14 flex flex-wrap items-center gap-6">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
            onClick={() => ga.clickAnchor("work", "hero")}
          >
            <ScrambleTextOnHover text="事業内容を見る" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="#signals"
            className="font-mono text-xs uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
            onClick={() => ga.clickAnchor("signals", "hero")}
          >
            お知らせ
          </a>
          <a
            href="#pricing"
            className="font-mono text-xs uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
            onClick={() => ga.clickAnchor("pricing", "hero")}
          >
            お問い合わせ
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
            onClick={() => ga.clickLine("hero")}
          >
            公式LINE
          </a>
        </div>
      </div>

      {/* Floating info tag */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10">
        <div className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          合同会社NY33 / 広島県尾道市因島
        </div>
      </div>
    </section>
  )
}
