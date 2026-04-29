import type { Metadata } from "next"
import Script from "next/script"
import { FAQPageClient } from "@/components/faq/FAQPageClient"
import { faqData } from "@/data/faq-page-data"
import { SITE_PUBLIC_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "よくある質問（FAQ）｜合同会社NY33",
  description:
    "合同会社NY33のWeb制作・SEO対策・AIO対策に関するよくある質問をまとめました。料金、制作の流れ、サポート内容など、ご依頼前の疑問にお答えします。",
  openGraph: {
    title: "よくある質問（FAQ）｜合同会社NY33",
    description: "Web制作・SEO・AIO対策に関するよくある質問と回答。",
    type: "website",
    url: `${SITE_PUBLIC_URL}/faq`,
  },
  twitter: {
    card: "summary_large_image",
    title: "よくある質問（FAQ）｜合同会社NY33",
    description: "Web制作・SEO・AIO対策に関するよくある質問と回答。",
  },
}

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  }

  return (
    <>
      <Script
        id="faq-faqpage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQPageClient categories={faqData} />
    </>
  )
}
