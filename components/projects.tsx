"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Sparkles, Layers, CheckCircle2, ChevronRight, Compass } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { resumeData, Project } from "@/lib/resume-data"

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [filter, setFilter] = useState<"all" | "fullstack" | "ai">("all")

  const filteredProjects = resumeData.projects.filter((p) => {
    if (filter === "all") return true
    return p.category === filter
  })

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gradient-to-b from-background via-background/95 to-background/90 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Full-Stack & AI Platforms
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Main <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-cyan-400 rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground text-sm md:text-base">
            Full-stack and AI web platforms built with Next.js, TypeScript, Node.js, and MongoDB: DriveEasy (Smart Car Rental), YojanaSetu (Government Scheme Eligibility), and EduAI (AI Learning Platform).
          </p>

          {/* Filter Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 bg-muted/40 rounded-xl border border-primary/10 max-w-md">
            {[
              { id: "all", label: "All 3 Projects" },
              { id: "fullstack", label: "DriveEasy (Rental)" },
              { id: "ai", label: "AI Platforms (YojanaSetu & EduAI)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filter === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Navigation CTAs */}
        <motion.div
          className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            variant="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 gap-2"
            onClick={() => {
              const trainingEl = document.getElementById("training")
              if (trainingEl) trainingEl.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Compass className="h-4 w-4" /> View Summer Training
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary/30 hover:bg-primary/10 gap-2"
          >
            <a href={resumeData.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> View GitHub Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full w-full bg-background/50 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-primary/10">
      {/* Visual Accent Header */}
      <div className="h-2 w-full bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400"></div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Badge
            variant="secondary"
            className="text-[10px] uppercase font-semibold tracking-wider bg-primary/15 text-primary border-primary/30"
          >
            {project.category === "fullstack"
              ? "Full-Stack Web"
              : project.category === "ai"
              ? "Generative AI Platform"
              : "UI/UX & Prototyping"}
          </Badge>
          {project.period && (
            <span className="text-[11px] font-semibold text-primary/80 font-mono">
              {project.period}
            </span>
          )}
        </div>

        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="text-xs font-medium text-foreground/80">
          {project.subtitle}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4 text-xs">
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Bullet Points from CV */}
        <div className="space-y-1.5 pt-2 border-t border-primary/10">
          {project.bulletPoints.map((bp, i) => (
            <div key={i} className="flex items-start gap-2 text-muted-foreground">
              <ChevronRight className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
              <span className="leading-snug">{bp}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-3">
          {project.tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant="outline"
              className="text-[11px] bg-background/80 text-foreground/90 border-primary/20 hover:border-primary/40"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-3 border-t border-primary/10 flex justify-between gap-2">
        {project.githubUrl && (
          <Button
            variant="default"
            size="sm"
            asChild
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-xs shadow-sm"
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-3.5 w-3.5" /> GitHub Repo
            </a>
          </Button>
        )}

        {project.liveUrl && project.liveUrl !== project.githubUrl && (
          <Button
            size="sm"
            asChild
            variant="outline"
            className="flex-1 border-primary/30 hover:bg-primary/10 text-xs"
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
