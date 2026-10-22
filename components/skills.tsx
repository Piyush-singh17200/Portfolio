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
      icon: <Terminal className="h-5 w-5 text-primary" />,
      items: resumeData.skills.languages,
    },
    {
      id: "frameworks",
      title: "Framework & Libraries",
      icon: <Layers className="h-5 w-5 text-primary" />,
      items: resumeData.skills.frameworks,
    },
    {
      id: "databases",
      title: "Databases",
      icon: <Database className="h-5 w-5 text-primary" />,
      items: resumeData.skills.databases,
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      icon: <Wrench className="h-5 w-5 text-primary" />,
      items: resumeData.skills.tools,
    },
    {
      id: "concepts",
      title: "Concepts & Architecture",
      icon: <Cpu className="h-5 w-5 text-primary" />,
      items: resumeData.skills.concepts,
    },
    {
      id: "softSkills",
      title: "Soft Skills & Leadership",
      icon: <Sparkles className="h-5 w-5 text-primary" />,
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

                    <div className="space-y-4">
                      {cat.items.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-medium text-foreground flex items-center gap-2">
                              <span className="inline-flex items-center justify-center p-1 rounded-md bg-muted/60 border border-primary/10">
                                {getSkillIcon(skill.name, "h-4 w-4")}
                              </span>
                              <span>{skill.name}</span>
                              {skill.highlight && (
                                <Badge variant="outline" className="text-[10px] py-0 px-1.5 h-4 bg-primary/15 text-primary border-primary/30">
                                  Core
                                </Badge>
                              )}
                            </span>
                            <span className="text-primary font-semibold">{skill.level}%</span>
                          </div>

                          {/* 3D Meter Bar */}
                          <div className="relative h-2.5 w-full bg-muted/50 rounded-full overflow-hidden border border-primary/10">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary/70 via-primary to-gold rounded-full relative"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: 0.1 + sIdx * 0.05 }}
                              style={{
                                boxShadow: "0 0 10px rgba(84, 168, 148, 0.32)",
                              }}
                            >
                              <div className="absolute top-0 right-0 h-full w-1.5 bg-white/70 rounded-full"></div>
                            </motion.div>
                          </div>
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
