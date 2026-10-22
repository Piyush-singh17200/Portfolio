"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Menu, Search } from "lucide-react"
import Sidebar from "@/components/sidebar"
import { ScrollProgress } from "@/components/scroll-progress"
import { ThemeToggle } from "@/components/theme-toggle"
import { useActiveSection } from "@/hooks/use-active-section"

const navLinks = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Training", href: "/#training", id: "training" },
  { name: "Certificates", href: "/#certificates", id: "certificates" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Journey", href: "/#experience", id: "experience" },
  { name: "Contact", href: "/#contact", id: "contact" },
] as const

const sectionIds = navLinks.map((link) => link.id)

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()
  const activeSection = useActiveSection(sectionIds)
  const isHome = pathname === "/"

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const openCommandMenu = () => {
    window.dispatchEvent(new CustomEvent("open-command-menu"))
  }

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
          <div className="flex items-center justify-between gap-4">
            {/* Logo / Personal Brand */}
            <Link
              href="/"
              className="shrink-0 whitespace-nowrap text-xl sm:text-2xl font-black tracking-tight group"
            >
              <span className="text-primary group-hover:text-gold transition-colors">Piyush</span>{" "}
              <span className="text-foreground">Singh</span>
              <span className="text-xs ml-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono hidden 2xl:inline-block">
                MERN/Next.js
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-5" aria-label="Primary">
              {navLinks.map((link) => {
                const isActive = isHome && activeSection === link.id
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}

              {mounted && (
                <>
                  <ThemeToggle />

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={openCommandMenu}
                    aria-label="Open command menu"
                    className="h-9 w-9 hover:bg-primary/10"
                  >
                    <Search className="h-4 w-4" />
                  </Button>

                  {/* CV / Resume CTA */}
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-sm gap-1.5 text-xs font-semibold px-3.5"
                  >
                    <Link href="/resume">
                      <FileText className="h-3.5 w-3.5" />
                      CV / Resume
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleSidebar}
                    aria-expanded={isSidebarOpen}
                    aria-controls="site-sidebar"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-xs"
                  >
                    <Menu className="h-3.5 w-3.5" />
                    Menu
                  </Button>
                </>
              )}
            </nav>

            {/* Mobile / tablet Navigation Controls */}
            <div className="flex items-center gap-1.5 xl:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={openCommandMenu}
                aria-label="Open command menu"
                className="h-9 w-9"
              >
                <Search className="h-4 w-4" />
              </Button>

              {mounted && (
                <>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs h-8 px-2.5 gap-1"
                  >
                    <Link href="/resume">
                      <FileText className="h-3.5 w-3.5" /> CV
                    </Link>
                  </Button>

                  <ThemeToggle />

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleSidebar}
                    aria-label="Open menu"
                    aria-expanded={isSidebarOpen}
                    aria-controls="site-sidebar"
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
