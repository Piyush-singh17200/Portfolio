import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ClientProviders } from "@/components/client-providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Piyush Singh | Full-Stack Developer (MERN / Next.js)",
  description:
    "Portfolio and CV of Piyush Singh - Full-Stack Developer experienced in building end-to-end web applications with MERN stack, Next.js, and TypeScript.",
  keywords: [
    "Piyush Singh",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "SQLite",
    "DriveEasy",
    "YojanaSetu",
    "EduAI",
    "UI/UX Design",
    "Roorkee",
    "Lovely Professional University",
  ],
  authors: [{ name: "Piyush Singh" }],
  creator: "Piyush Singh",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClientProviders>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  )
}
