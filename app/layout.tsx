import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ClientProviders } from "@/components/client-providers"
import CommandMenu from "@/components/command-menu"
import { siteConfig } from "@/lib/site-config"
import { resumeData } from "@/lib/resume-data"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  keywords: [
    "Piyush Singh",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "DriveEasy",
    "YojanaSetu",
    "EduAI",
    "UI/UX Design",
    "Roorkee",
    "Lovely Professional University",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: "/",
    siteName: `${siteConfig.name} Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#080C0F" },
  ],
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resumeData.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/opengraph-image`,
  jobTitle: resumeData.title,
  email: `mailto:${resumeData.email}`,
  description: resumeData.summary,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Roorkee",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: resumeData.education.university.institution,
    sameAs: "https://www.lpu.in/",
  },
  sameAs: [resumeData.github, resumeData.linkedin],
  knowsAbout: [
    "MERN stack",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "Generative AI",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClientProviders>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
            <Toaster />
            <CommandMenu />
          </ClientProviders>
        </ThemeProvider>
        {process.env.VERCEL === "1" ? <Analytics /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
