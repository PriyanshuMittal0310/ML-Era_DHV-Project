import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Boosting Algorithms: Loan Approval Explainer",
  description: "An interactive learning experience that explains powerful machine learning algorithms through an engaging story about building the ultimate team of loan decision-makers.",
  keywords: ["machine learning", "boosting algorithms", "AdaBoost", "Gradient Boost", "XGBoost", "loan approval", "interactive learning"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
