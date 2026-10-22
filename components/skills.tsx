"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import {
  Database,
  Cpu,
  Wrench,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react"
import { resumeData } from "@/lib/resume-data"
import { getSkillIcon, TechIcons } from "@/components/tech-icons"

export default function Skills() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState<SkillCategoryId>("all")

  const categories = [
    {
      id: "languages",
      title: "Languages",
      icon: <Terminal className="h-5 w-5" />,
      items: resumeData.skills.languages,
    },
    {
      id: "frameworks",
      title: "Framework & Libraries",
      icon: <Layers className="h-5 w-5" />,
      items: resumeData.skills.frameworks,
    },
    {
      id: "databases",
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      items: resumeData.skills.databases,
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      icon: <Wrench className="h-5 w-5" />,
      items: resumeData.skills.tools,
    },
    {
      id: "concepts",
      title: "Concepts & Architecture",
      icon: <Cpu className="h-5 w-5" />,
      items: resumeData.skills.concepts,
    },
    {
      id: "softSkills",
      title: "Soft Skills & Leadership",
      icon: <Sparkles className="h-5 w-5" />,
      items: resumeData.skills.softSkills,
    },
  ] as const

  type SkillCategoryId = (typeof categories)[number]["id"] | "all"

  const displayedCategories =
    activeTab === "all"
      ? categories
      : categories.filter((c) => c.id === activeTab)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background via-background/95 to-background relative z-10"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Technical Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Competencies</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-gold rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground text-sm md:text-base">
            Comprehensive breakdown of my engineering capabilities spanning languages, frontend frameworks, backend architecture, databases, and core computer science fundamentals.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 bg-muted/40 rounded-xl border border-primary/10 max-w-3xl">
            {[
              { id: "all", label: "All Skills" },
              { id: "languages", label: "Languages" },
              { id: "frameworks", label: "Framework & Libraries" },
              { id: "databases", label: "Databases" },
              { id: "tools", label: "Tools & Platforms" },
              { id: "concepts", label: "Concepts" },
              { id: "softSkills", label: "Soft Skills" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as SkillCategoryId)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Categories Grid with Authentic Icons */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {displayedCategories.map((cat) => (
            <motion.div key={cat.id} variants={itemVariants}>
              <Card className="h-full bg-background/50 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-6 border-b border-primary/15 pb-3">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {cat.icon}
                      </div>
                      <h3 className="text-base font-bold tracking-tight text-foreground">
                        {cat.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 rounded-lg border border-primary/15 bg-muted/20 px-2.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary/10 bg-background/60">
                            {getSkillIcon(skill.name, "h-3.5 w-3.5")}
                          </span>
                          <span>{skill.name}</span>
                          {skill.highlight && (
                            <Badge
                              variant="outline"
                              className="ml-0.5 h-4 border-primary/25 bg-primary/10 px-1.5 py-0 text-[9px] text-primary"
                            >
                              Core
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Primary Stack Floating Showcase with Authentic Logos */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-6 flex items-center justify-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Core Stack Focus
          </h4>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {[
              { name: "Next.js", icon: <TechIcons.nextjs className="h-8 w-8 text-white" /> },
              { name: "React.js", icon: <TechIcons.react className="h-8 w-8" /> },
              { name: "TypeScript", icon: <TechIcons.typescript className="h-8 w-8" /> },
              { name: "Node.js", icon: <TechIcons.nodejs className="h-8 w-8" /> },
              { name: "MongoDB", icon: <TechIcons.mongodb className="h-8 w-8" /> },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.08, y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group flex flex-col items-center p-4 rounded-2xl bg-background/50 border border-primary/20 hover:border-primary/50 shadow-lg hover:shadow-primary/20 backdrop-blur-md cursor-pointer transition-all"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-2">
                  {tech.icon}
                </div>
                <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
