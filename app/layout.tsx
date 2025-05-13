import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/context/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AdLabs by Labs CX - AI-Powered Ad Optimization",
  description: "AI-Powered Ad Optimization for DOOH, CTV, and Digital Platforms",
  keywords: "AdLabs, Labs CX, DOOH, CTV, Digital Advertising, Ad Optimization, AI Advertising",
  authors: [{ name: "Labs CX" }],
  openGraph: {
    title: "AdLabs by Labs CX - AI-Powered Ad Optimization",
    description: "AI-Powered Ad Optimization for DOOH, CTV, and Digital Platforms",
    url: "https://adlabs.labscx.com",
    siteName: "AdLabs by Labs CX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdLabs by Labs CX - AI-Powered Ad Optimization",
    description: "AI-Powered Ad Optimization for DOOH, CTV, and Digital Platforms",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
