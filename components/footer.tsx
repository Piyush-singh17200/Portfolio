"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { resumeData } from "@/lib/resume-data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: resumeData.github, label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: resumeData.linkedin, label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: `mailto:${resumeData.email}`, label: "Email" },
  ]

  return (
    <footer className="bg-background py-14 border-t border-primary/20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="text-2xl font-black tracking-tight">
              <span className="text-primary">Piyush</span> Singh
            </Link>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
              Full-Stack Developer (MERN / Next.js). Pursuing B.Tech Computer Science & Engineering at Lovely Professional University.
            </p>
            <div className="mt-3 flex items-center justify-center md:justify-start gap-3 text-xs">
              <a
                href="/Piyush_Singh_Resume.pdf"
                download="Piyush_Singh_Resume.pdf"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Resume PDF
              </a>
              <span className="text-muted-foreground/30">•</span>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Projects
              </a>
              <span className="text-muted-foreground/30">•</span>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-end gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-primary/10 text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors block"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Piyush Singh. All rights reserved.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-6 border-t border-primary/10 text-center text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="flex items-center justify-center gap-1">
            Engineered with Next.js, TypeScript, Tailwind CSS & Three.js
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
