"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Send, Sparkles, Code2, Terminal } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { resumeData } from "@/lib/resume-data"
import { TechIcons } from "@/components/tech-icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { BentoShowcase } from "@/components/bento-showcase"

export default function Hero() {
  const isMobile = useIsMobile()

  const coreLanguages = [
    { name: "JavaScript", icon: <TechIcons.javascript className="h-5 w-5" /> },
    { name: "TypeScript", icon: <TechIcons.typescript className="h-5 w-5" /> },
    { name: "Python", icon: <TechIcons.python className="h-5 w-5" /> },
    { name: "Java", icon: <TechIcons.java className="h-5 w-5" /> },
    { name: "C++", icon: <TechIcons.cpp className="h-5 w-5" /> },
    { name: "C", icon: <TechIcons.c className="h-5 w-5" /> },
    { name: "React", icon: <TechIcons.react className="h-5 w-5" /> },
    { name: "Next.js", icon: <TechIcons.nextjs className="h-5 w-5" /> },
    { name: "Node.js", icon: <TechIcons.nodejs className="h-5 w-5" /> },
    { name: "Express", icon: <TechIcons.express className="h-5 w-5" /> },
    { name: "MongoDB", icon: <TechIcons.mongodb className="h-5 w-5" /> },
    { name: "PostgreSQL", icon: <TechIcons.postgresql className="h-5 w-5" /> },
    { name: "MySQL", icon: <TechIcons.mysql className="h-5 w-5" /> },
    { name: "Figma", icon: <TechIcons.figma className="h-5 w-5" /> },
    { name: "Tailwind CSS", icon: <TechIcons.tailwind className="h-5 w-5" /> },
  ]

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Introduction & CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-background/80 border border-primary/30 backdrop-blur-md shadow-lg shadow-primary/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-foreground/90">
                Available for Full-Stack Roles & Internships
              </span>
            </div>

            {/* Name Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  {resumeData.name}
                </span>
              </h1>
            </div>

            {/* Role & Specialization */}
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Code2 className="h-5 w-5 text-primary" />
                <h2 className="text-lg sm:text-xl font-bold text-primary">
                  {resumeData.title}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Building scalable end-to-end web applications with the <strong>MERN stack</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>.
                Covering database architecture, MongoDB aggregation pipelines, RESTful APIs, and responsive frontends.
              </p>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                size="lg"
                className="px-7 py-5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-xl shadow-primary/25 border border-primary/40 gap-2"
                onClick={() => {
                  const projectsSection = document.getElementById("projects")
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <Sparkles className="h-4 w-4" />
                Explore Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-7 py-5 rounded-xl bg-background/50 backdrop-blur-md hover:bg-primary/10 border-primary/30 font-medium text-sm transition-all duration-300 transform hover:scale-105 gap-2"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <Send className="h-4 w-4" />
                Contact Me
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start mt-4">
              <ThemeToggle />
            </div>

            {/* Core Languages Strip */}
            <div className="w-full pt-6 border-t border-primary/15">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3 flex items-center justify-center lg:justify-start gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                Core Languages & Technologies
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {coreLanguages.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background/60 hover:bg-background/90 border border-primary/15 hover:border-primary/40 backdrop-blur-md transition-all duration-200 shadow-sm hover:scale-105 group cursor-pointer"
                  >
                    <div className="transform group-hover:scale-110 transition-transform duration-200">
                      {tech.icon}
                    </div>
                    <span className="text-xs font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic Bento Grid Showcase */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center justify-center relative w-full"
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BentoShowcase />
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Arrow */}
      <div className="w-full flex justify-center mt-12">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          aria-label="Scroll to About section"
          onClick={(e) => {
            e.preventDefault()
            const aboutSection = document.getElementById("about")
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce text-primary" />
        </a>
      </div>
    </section>
  )
}
