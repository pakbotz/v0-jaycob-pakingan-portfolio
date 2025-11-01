import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })
const _playfairDisplay = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jaycob Pakingan | Computer Engineering Student",
  description: "Portfolio of Jaycob Pakingan - Computer Engineering Student at UC Santa Cruz",
  generator: "v0.app",
  icons: {
    icon: "/logo-light.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
