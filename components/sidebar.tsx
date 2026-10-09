"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Home,
  User,
  Briefcase,
  Compass,
  Award,
  Code2,
  Mail,
  Github,
  Linkedin,
  Moon,
  Sun,
  X,
  FileText,
  GraduationCap,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { resumeData } from "@/lib/resume-data"
import { triggerOpenResume } from "@/hooks/use-resume-modal"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(theme === "dark")
  }, [theme])

  const handleThemeToggle = () => {
    setIsDark(!isDark)
    setTheme(isDark ? "light" : "dark")
  }

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home className="h-4 w-4" /> },
    { name: "About", href: "#about", icon: <User className="h-4 w-4" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Training", href: "#training", icon: <Compass className="h-4 w-4" /> },
    { name: "Certificates", href: "#certificates", icon: <Award className="h-4 w-4" /> },
    { name: "Skills", href: "#skills", icon: <Code2 className="h-4 w-4" /> },
    { name: "Journey", href: "#experience", icon: <GraduationCap className="h-4 w-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="h-4 w-4" /> },
  ]

  const socialLinks = [
    { name: "GitHub", href: resumeData.github, icon: <Github className="h-4 w-4" /> },
    { name: "LinkedIn", href: resumeData.linkedin, icon: <Linkedin className="h-4 w-4" /> },
    { name: "Email", href: `mailto:${resumeData.email}`, icon: <Mail className="h-4 w-4" /> },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 md:w-96 bg-card border-l border-primary/20 shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="relative h-11 w-11 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-primary/20">
                      <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center font-black text-sm text-primary">
                        PS
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">
                        <span className="text-primary">Piyush</span> Singh
                      </h2>
                      <p className="text-xs text-muted-foreground">{resumeData.title}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-primary/10">
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* CV Action */}
                <div className="mb-6">
                  <Button
                    size="sm"
                    onClick={() => {
                      onClose()
                      triggerOpenResume()
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs gap-2 py-5 shadow-md shadow-primary/20"
                  >
                    <FileText className="h-4 w-4" /> View / Download CV
                  </Button>
                </div>

                {/* Navigation */}
                <nav className="mb-6">
                  <h3 className="text-xs uppercase font-semibold text-muted-foreground mb-2 tracking-wider">Navigation</h3>
                  <ul className="space-y-1">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-primary/10 transition-colors text-sm font-medium"
                          onClick={() => {
                            onClose()
                            const element = document.getElementById(link.href.substring(1))
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" })
                            }
                          }}
                        >
                          <div className="text-primary">{link.icon}</div>
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <Separator className="my-4 bg-primary/10" />

                {/* Theme Toggle */}
                <div className="mb-6">
                  <h3 className="text-xs uppercase font-semibold text-muted-foreground mb-2 tracking-wider">Appearance</h3>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40">
                    <div className="flex items-center space-x-2 text-sm">
                      {mounted && isDark ? (
                        <Moon className="h-4 w-4 text-primary" />
                      ) : (
                        <Sun className="h-4 w-4 text-primary" />
                      )}
                      <span>Dark Mode</span>
                    </div>
                    {mounted && (
                      <Switch checked={isDark} onCheckedChange={handleThemeToggle} />
                    )}
                  </div>
                </div>
              </div>

              {/* Footer Section */}
              <div className="pt-4 border-t border-primary/10">
                <div className="mb-4">
                  <h3 className="text-xs uppercase font-semibold text-muted-foreground mb-2 tracking-wider">Connect</h3>
                  <div className="flex space-x-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] text-muted-foreground">
                  <p>&copy; {new Date().getFullYear()} Piyush Singh. All rights reserved.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
