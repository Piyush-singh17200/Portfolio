"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code2, Award, Briefcase, Sparkles, CheckCircle2 } from "lucide-react"
import { resumeData, TimelineItem } from "@/lib/resume-data"

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="experience" ref={containerRef} className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Milestones & Education
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground">
            Academic & <span className="text-primary">Engineering Journey</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-cyan-400 rounded-full mx-auto mt-4 mb-4"></div>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            A chronological timeline of my education at Lovely Professional University and Sheffield School, full-stack project milestones, and professional certifications.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Vertical Timeline Track */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/15" />
          
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-500 to-cyan-400 origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-12 sm:space-y-16">
            {resumeData.timeline.map((event, index) => (
              <TimelineEvent key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({ event, index }: { event: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const x = useTransform(scrollYProgress, [0, 0.5], [index % 2 === 0 ? -40 : 40, 0])

  const getIcon = () => {
    switch (event.category) {
      case "education":
        return <GraduationCap className="h-4 w-4 text-primary" />
      case "project":
        return <Code2 className="h-4 w-4 text-primary" />
      case "achievement":
      case "certification":
        return <Award className="h-4 w-4 text-primary" />
      default:
        return <Briefcase className="h-4 w-4 text-primary" />
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col md:flex-row ${
        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
      }`}
      style={{ opacity, x }}
    >
      {/* Central Node Indicator */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 md:top-6 z-20 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center shadow-lg shadow-primary/20 backdrop-blur-md">
          {getIcon()}
        </div>
      </div>

      {/* Card Content */}
      <div className={`w-full md:w-[46%] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} pt-10 md:pt-0`}>
        <Card className="bg-background/60 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
          <CardContent className="p-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                {event.badge}
              </Badge>
              <span className="text-xs font-semibold text-muted-foreground">{event.period}</span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
              <p className="text-xs sm:text-sm text-primary font-medium">{event.organization}</p>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {event.description}
            </p>

            {event.details && event.details.length > 0 && (
              <ul className="space-y-1 pt-1 border-t border-primary/10 text-xs text-muted-foreground">
                {event.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
