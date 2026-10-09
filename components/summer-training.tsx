"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Compass,
  CheckCircle2,
  Figma,
  Layers,
  Sparkles,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Layout,
  Users,
  Smartphone,
  Eye,
} from "lucide-react"
import { resumeData } from "@/lib/resume-data"

export default function SummerTraining() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })
  const training = resumeData.summerTraining

  const pillars = [
    {
      icon: <Layout className="h-5 w-5 text-primary" />,
      title: "Wireframing & Prototyping",
      description: "Low-fidelity wireframing transitioning into high-fidelity clickable interactive prototypes in Figma.",
    },
    {
      icon: <Users className="h-5 w-5 text-purple-400" />,
      title: "User-Centered Design",
      description: "Conducting user research, persona creation, user journey mapping, and information architecture.",
    },
    {
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      title: "Responsive Multi-Device",
      description: "Designing intuitive UI layouts optimized across mobile viewports, tablets, and desktop displays.",
    },
    {
      icon: <Eye className="h-5 w-5 text-emerald-400" />,
      title: "Usability Testing",
      description: "Iterative testing, accessibility audits, and design heuristic evaluations to refine functional prototypes.",
    },
  ]

  return (
    <section
      id="training"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background/95 via-background to-background relative overflow-hidden"
    >
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 flex items-center gap-1.5">
            <Compass className="h-3.5 w-3.5" /> Professional Skill Development
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Summer <span className="text-primary">Training</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-cyan-400 rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground text-sm md:text-base">
            Official summer training completed at Lovely Professional University focused on end-to-end UI/UX design, interactive prototyping, and usability testing.
          </p>
        </motion.div>

        {/* Main Training Feature Card */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="bg-background/60 backdrop-blur-xl border-primary/25 hover:border-primary/50 transition-all duration-300 shadow-2xl relative overflow-hidden group">
              {/* Top Accent Gradient Bar */}
              <div className="h-2 w-full bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />

              <CardHeader className="p-6 sm:p-8 pb-4">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1 text-xs font-semibold">
                      {training.credentialType}
                    </Badge>
                    <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 px-3 py-1 text-xs font-bold flex items-center gap-1">
                      <Award className="h-3.5 w-3.5" /> Verified Completion
                    </Badge>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-primary" /> {training.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-primary" /> {training.location}
                    </span>
                  </div>
                </div>

                <CardTitle className="text-2xl sm:text-3xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {training.title}
                </CardTitle>

                <CardDescription className="text-sm font-semibold text-primary pt-1">
                  {training.organization}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 sm:p-8 pt-2 space-y-6">
                {/* CV Bullet Points */}
                <div className="space-y-3 bg-muted/20 p-5 rounded-2xl border border-primary/10">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                    Core Training Scope & Deliverables
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90">
                    {training.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-background/50 border border-primary/15 hover:border-primary/40 transition-all space-y-2"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 w-fit">
                        {pillar.icon}
                      </div>
                      <h5 className="font-bold text-xs sm:text-sm text-foreground">{pillar.title}</h5>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </div>
                  ))}
                </div>

                {/* Tools & Methodologies Badges */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-primary/15">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mr-1">
                      Methodologies:
                    </span>
                    {training.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="outline"
                        className="text-xs bg-background/80 border-primary/25 hover:border-primary/50"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {training.verificationUrl && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs gap-1.5 font-semibold"
                      >
                        <a href={training.verificationUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" /> View Certificate
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
