import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import { GaPageView } from "@/components/ga-page-view"
import { GA_MEASUREMENT_ID } from "@/lib/gtag"
import "./globals.css"

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
  title: "合同会社NY33 — 広島県尾道市因島 | Web制作・マーケティング",
  description:
    "広島県尾道市因島の合同会社NY33。HP制作・LP制作・SEO対策・AIO対策・マーケティング集客動線構築。",
  generator: "v0.app",
  verification: {
    google: "6X4w5YbULu48pJ2_p-xRuqrUeIvplICPqfkKY5Fr2Nw",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
          <Suspense fallback={null}>
            <GaPageView />
          </Suspense>
        ) : null}
        <Analytics />
      </body>
    </html>
  )
}
