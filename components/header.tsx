"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, FileText, Sparkles } from "lucide-react"
import Sidebar from "@/components/sidebar"
import { ScrollProgress } from "@/components/scroll-progress"
import { ThemeToggle } from "@/components/theme-toggle"
import { resumeData } from "@/lib/resume-data"
import { triggerOpenResume } from "@/hooks/use-resume-modal"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Training", href: "#training" },
    { name: "Certificates", href: "#certificates" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <ScrollProgress />

      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-md shadow-md border-b border-primary/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo / Personal Brand */}
            <Link href="/" className="text-xl sm:text-2xl font-black tracking-tight group">
              <span className="text-primary group-hover:text-blue-500 transition-colors">Piyush</span>{" "}
              <span className="text-foreground">Singh</span>
              <span className="text-xs ml-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono hidden sm:inline-block">
                MERN/Next.js
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}

              {mounted && (
                <>
                  <ThemeToggle />

                  {/* CV / Resume CTA */}
                  <Button
                    size="sm"
                    onClick={triggerOpenResume}
                    className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-sm gap-1.5 text-xs font-semibold px-3.5"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    CV / Resume
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleSidebar}
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-xs"
                  >
                    Menu
                  </Button>
                </>
              )}
            </nav>

            {/* Mobile Navigation Controls */}
            <div className="flex items-center md:hidden gap-1.5">
              {mounted && (
                <>
                  <Button
                    size="sm"
                    onClick={triggerOpenResume}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs h-8 px-2.5 gap-1"
                  >
                    <FileText className="h-3.5 w-3.5" /> CV
                  </Button>

                  <ThemeToggle />

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleSidebar}
                    aria-label="Open menu"
                    className="h-9 w-9"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  )
}
