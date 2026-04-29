import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioItems } from "@/lib/portfolio"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const item = portfolioItems.find((entry) => entry.slug === slug)
  if (!item) {
    return { title: "Portfolio" }
  }

  return {
    title: `${item.title} | Portfolio`,
    description: item.description,
    openGraph: {
      title: `${item.title} | Portfolio`,
      description: item.description,
      images: item.image ? [item.image] : undefined,
    },
  }
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params
  const item = portfolioItems.find((entry) => entry.slug === slug)

  if (!item) {
    notFound()
  }

  return (
    <main className="relative min-h-screen px-6 md:px-12 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Portfolio Detail</p>
          <Link href="/#portfolio" className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors">
            戻る
          </Link>
        </div>

        <h1 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">{item.title}</h1>
        <p className="mt-4 max-w-3xl font-mono text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border/40 bg-card">
          <div className="relative aspect-[16/9] w-full">
            {item.image ? (
              <Image src={item.image} alt={`${item.title}のOG画像`} fill className="object-cover object-top" unoptimized />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">OG IMAGE PREVIEW</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-border/50 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {item.category}
          </span>
        </div>
      </div>
    </main>
  )
}
