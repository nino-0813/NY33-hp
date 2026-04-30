import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import { GaPageView } from "@/components/ga-page-view"
import { ScrollDepthTracker } from "@/components/analytics/scroll-depth-tracker"
import { GA_MEASUREMENT_ID } from "@/lib/gtag"
import { SITE_PUBLIC_URL } from "@/lib/site"
import "./globals.css"

const OG_IMAGE_PATH = "/portfolio/og-image.png"
const FAVICON_IMAGE_PATH = "/portfolio/favicon.png"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_PUBLIC_URL),
  title: "尾道のウェブサイト制作・SEO対策なら合同会社NY33｜広島県尾道市因島",
  description:
    "尾道（因島）でWebサイト制作・LP制作・SEO対策。集客導線の設計とGA4計測で、地方企業の売上につながるWebを構築します。初回相談無料。",
  openGraph: {
    type: "website",
    url: "/",
    title: "尾道のウェブサイト制作・SEO対策なら合同会社NY33｜広島県尾道市因島",
    description:
      "尾道（因島）でWebサイト制作・LP制作・SEO対策。集客導線の設計とGA4計測で、地方企業の売上につながるWebを構築します。初回相談無料。",
    images: [
      {
        url: OG_IMAGE_PATH,
        alt: "合同会社NY33｜尾道のウェブサイト制作・SEO対策",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "尾道のウェブサイト制作・SEO対策なら合同会社NY33｜広島県尾道市因島",
    description:
      "尾道（因島）でWebサイト制作・LP制作・SEO対策。集客導線の設計とGA4計測で、地方企業の売上につながるWebを構築します。初回相談無料。",
    images: [OG_IMAGE_PATH],
  },
  generator: "v0.app",
  verification: {
    google: "6X4w5YbULu48pJ2_p-xRuqrUeIvplICPqfkKY5Fr2Nw",
  },
  icons: {
    icon: [
      {
        url: FAVICON_IMAGE_PATH,
        type: "image/png",
      },
    ],
    apple: FAVICON_IMAGE_PATH,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="dark bg-background">
      <head>
        {GA_MEASUREMENT_ID ? (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
            <Script id="google-gtag-init">
              {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
        {GA_MEASUREMENT_ID ? (
          <>
            <ScrollDepthTracker />
            <Suspense fallback={null}>
              <GaPageView />
            </Suspense>
          </>
        ) : null}
        <Analytics />
      </body>
    </html>
  )
}
