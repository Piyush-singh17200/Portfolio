"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUp, Menu, X, Moon, Sun, Share2, FileText, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import { useToast } from "@/hooks/use-toast"
import { triggerOpenResume } from "@/hooks/use-resume-modal"
import { resumeData } from "@/lib/resume-data"

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Training", id: "training" },
    { name: "Certificates", id: "certificates" },
    { name: "Skills", id: "skills" },
    { name: "Journey", id: "experience" },
    { name: "Contact", id: "contact" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const shareProfile = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Piyush Singh | Full-Stack Developer Portfolio",
          text: `Check out Piyush Singh's portfolio & projects: ${resumeData.summary}`,
          url: window.location.href,
        })
        .catch(console.error)
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "URL Copied",
        description: "Portfolio link copied to clipboard!",
      })
    }
  }

  if (!mounted) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 print:hidden">
      <AnimatePresence>
        {isVisible && (
          <>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="mb-3 flex flex-col gap-2 items-end"
                >
                  {/* Quick Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="flex gap-2"
                  >
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={toggleTheme}
                      aria-label="Toggle theme"
                      className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/20 h-10 w-10"
                    >
                      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>

                    <Button
                      size="icon"
                      variant="outline"
                      onClick={shareProfile}
                      aria-label="Share portfolio"
                      className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/20 h-10 w-10"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>

                    <Button
                      size="sm"
                      onClick={() => {
                        setIsMenuOpen(false)
                        triggerOpenResume()
                      }}
                      className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground h-10 px-4 text-xs font-semibold gap-1.5"
                    >
                      <FileText className="h-3.5 w-3.5" /> CV / Resume
                    </Button>
                  </motion.div>

                  {/* Section Links */}
                  <div className="flex flex-col gap-1 items-end mt-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => scrollToSection(item.id)}
                          className="bg-background/85 backdrop-blur-sm border-primary/25 hover:bg-primary/20 text-xs h-8"
                        >
                          {item.name}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="flex gap-2"
            >
              <Button
                size="icon"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="rounded-full shadow-xl bg-primary hover:bg-primary/90 text-primary-foreground h-11 w-11"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>

              <Button
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Quick menu"
                className="rounded-full shadow-xl bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/20 h-11 w-11"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
