"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code2,
  Sparkles,
  ExternalLink,
  Github,
  GraduationCap,
  Award,
  Layers,
  CheckCircle2,
  ChevronRight,
  Database,
  Cpu,
  Car,
  Landmark,
  Bot,
  Compass,
  Linkedin,
  Mail,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/lib/resume-data"

type ActiveProjectKey = "driveeasy" | "yojanasetu" | "eduai"

export function BentoShowcase() {
  const [activeProject, setActiveProject] = useState<ActiveProjectKey>("driveeasy")

  const projectDetails = {
    driveeasy: {
      title: "DriveEasy",
      tagline: "Smart Car Rental Platform",
      period: "Sep 2026",
      icon: <Car className="h-4 w-4 text-blue-400" />,
      category: "Full-Stack Web",
      bullet:
        "Engineered real-time vehicle availability with Socket.io, Stripe checkout payments, Cloudinary media, and automated transactional emails.",
      tech: ["React", "TypeScript", "Node.js", "Express", "Socket.io", "Stripe", "PostgreSQL/Prisma"],
      repo: "https://github.com/Piyush-singh17200/driveeasy",
      badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    },
    yojanasetu: {
      title: "YojanaSetu",
      tagline: "Government Scheme Eligibility Platform",
      period: "Jul 2026",
      icon: <Landmark className="h-4 w-4 text-cyan-400" />,
      category: "Gemini AI Platform",
      bullet:
        "Built intelligent eligibility engine matching income, occupation & category with scheme database context using Google Gemini AI.",
      tech: ["React", "Node.js", "Express", "Gemini AI", "REST APIs", "Tailwind CSS"],
      repo: "https://github.com/Piyush-singh17200/YojanaSetu",
      badgeColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    },
    eduai: {
      title: "EduAI",
      tagline: "AI Learning & Career Platform",
      period: "Mar 2026",
      icon: <Bot className="h-4 w-4 text-purple-400" />,
      category: "Adaptive AI System",
      bullet:
        "Architected intelligent tutoring, resume ATS scoring, personalized DSA roadmaps, and mock interview coaching via Gemini & OpenRouter.",
      tech: ["React", "Node.js", "Express", "Gemini API", "JWT Auth", "PDF Extraction"],
      repo: "https://github.com/Piyush-singh17200/EDUAI",
      badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    },
  }

  const currentProj = projectDetails[activeProject]

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col space-y-3.5">
      {/* Ambient Glow Orbs */}
      <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-primary/30 via-primary/10 to-cyan-500/15 shadow-2xl shadow-primary/10 border border-primary/25">
        <div className="relative rounded-[14px] bg-background/90 backdrop-blur-2xl p-4 sm:p-5 space-y-4">

          {/* 1. TOP BENTO ITEM: Developer Profile & Live Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3.5 border-b border-primary/15">
            <div className="flex items-center gap-3">
              {/* Glowing Monogram Avatar */}
              <div className="relative flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-400 text-white font-extrabold text-base shadow-lg shadow-blue-500/30 ring-2 ring-primary/30">
                <span>PS</span>
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-background"></span>
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                    {resumeData.name}
                  </h3>
                  <Badge variant="outline" className="text-[10px] font-mono bg-primary/10 text-primary border-primary/30">
                    Full-Stack
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground font-medium">
                  Lovely Professional University • B.Tech CSE
                </p>
              </div>
            </div>

            {/* Live Status Pill & Quick Socials */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                <Zap className="h-3 w-3" />
                Available to Hire
              </span>

              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                title="GitHub Profile"
              >
                <Github className="h-3.5 w-3.5" />
              </a>

              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* 2. MIDDLE BENTO ITEM: Interactive Project Spotlight */}
          <div className="rounded-xl bg-card/60 border border-primary/15 p-4 space-y-3 relative overflow-hidden">
            {/* Project Switcher Tabs */}
            <div className="flex items-center justify-between gap-1 pb-2 border-b border-primary/10 overflow-x-auto scrollbar-none">
              <span className="text-[11px] uppercase tracking-wider font-bold text-primary flex items-center gap-1 shrink-0">
                <Sparkles className="h-3 w-3" /> Featured Projects
              </span>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveProject("driveeasy")}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeProject === "driveeasy"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  }`}
                >
                  DriveEasy
                </button>
                <button
                  type="button"
                  onClick={() => setActiveProject("yojanasetu")}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeProject === "yojanasetu"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  }`}
                >
                  YojanaSetu
                </button>
                <button
                  type="button"
                  onClick={() => setActiveProject("eduai")}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeProject === "eduai"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  }`}
                >
                  EduAI
                </button>
              </div>
            </div>

            {/* Active Project Card Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-primary/10">{currentProj.icon}</div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground flex items-center gap-1.5">
                        {currentProj.title}
                        <span className="text-[11px] font-normal text-muted-foreground">
                          — {currentProj.tagline}
                        </span>
                      </h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-primary font-semibold">
                    {currentProj.period}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {currentProj.bullet}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentProj.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="text-[10px] py-0 px-2 bg-background/80 border-primary/20 text-foreground/80 font-mono"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                {/* Project Links Footer */}
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-primary/10">
                  <a
                    href={currentProj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Open GitHub Repo
                    <ExternalLink className="h-3 w-3 opacity-70" />
                  </a>

                  <a
                    href="#projects"
                    className="text-[11px] text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-medium"
                  >
                    Explore Projects <ChevronRight className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3. SPLIT BENTO GRID: Credentials & Academic Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Academics Card */}
            <div className="p-3.5 rounded-xl bg-card/60 border border-primary/15 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-bold text-primary flex items-center gap-1">
                  <GraduationCap className="h-3.5 w-3.5" /> Academics
                </span>
                <span className="text-[10px] font-semibold font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                  2024–Present
                </span>
              </div>
              <h5 className="text-xs font-bold text-foreground">
                Lovely Professional University
              </h5>
              <p className="text-[11px] text-muted-foreground leading-snug">
                B.Tech Computer Science & Engineering
              </p>
            </div>

            {/* Summer Training Card */}
            <div className="p-3.5 rounded-xl bg-card/60 border border-primary/15 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-bold text-primary flex items-center gap-1">
                  <Award className="h-3.5 w-3.5" /> Summer Training
                </span>
                <span className="text-[10px] font-semibold font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                  Certified
                </span>
              </div>
              <h5 className="text-xs font-bold text-foreground">
                UI/UX Design & Prototyping
              </h5>
              <div className="flex items-center justify-between pt-0.5">
                <span className="text-[10px] text-muted-foreground">LPU CPE • Figma</span>
                <a
                  href="https://drive.google.com/file/d/14_aGE8HIejrTzqAqOP_Um-mvAlEWOb1R/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-primary hover:underline font-semibold flex items-center gap-0.5"
                >
                  Verify <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>
          </div>

          {/* 4. VERIFIED CERTIFICATIONS ROW */}
          <div className="p-3 rounded-xl bg-primary/5 border border-primary/15 space-y-1.5">
            <span className="text-[10px] uppercase tracking-wider font-bold text-primary flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-emerald-400" /> Key Industry Certifications
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-[11px]">
              <a
                href="https://drive.google.com/file/d/16cBn9RXPEYdrj7yXbVBLV7xyTcCX9r9H/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded-md bg-background/70 border border-primary/15 hover:border-primary/40 text-foreground/90 hover:text-primary transition-all flex items-center justify-between"
              >
                <span className="truncate">Oracle AI 2025</span>
                <ExternalLink className="h-2.5 w-2.5 opacity-60 ml-1" />
              </a>

              <a
                href="https://drive.google.com/file/d/1IVSgfJSBUZDH_Y72cJMrREUat39xXlj_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded-md bg-background/70 border border-primary/15 hover:border-primary/40 text-foreground/90 hover:text-primary transition-all flex items-center justify-between"
              >
                <span className="truncate">Infosys DBMS</span>
                <ExternalLink className="h-2.5 w-2.5 opacity-60 ml-1" />
              </a>

              <a
                href="https://drive.google.com/file/d/1BTtNkPDimZjs9L278NRFUOoz85MzIwch/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded-md bg-background/70 border border-primary/15 hover:border-primary/40 text-foreground/90 hover:text-primary transition-all flex items-center justify-between"
              >
                <span className="truncate">iamNEO Java</span>
                <ExternalLink className="h-2.5 w-2.5 opacity-60 ml-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
