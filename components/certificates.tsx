"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  Database,
  Cloud,
  Code2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react"
import { resumeData } from "@/lib/resume-data"

export default function Certificates() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  const getCertIcon = (title: string) => {
    if (title.toLowerCase().includes("database") || title.toLowerCase().includes("dbms")) {
      return <Database className="h-6 w-6 text-purple-400" />
    }
    if (title.toLowerCase().includes("oracle") || title.toLowerCase().includes("ai")) {
      return <Cloud className="h-6 w-6 text-cyan-400" />
    }
    return <Code2 className="h-6 w-6 text-primary" />
  }

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 flex items-center gap-1.5">
            <Award className="h-3.5 w-3.5" /> Verified Industry Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Official <span className="text-primary">Certificates</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-cyan-400 rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground text-sm md:text-base">
            Professional certifications in Database Management Systems, Oracle Cloud AI Infrastructure, and Java Object-Oriented Programming.
          </p>
        </motion.div>

        {/* 3 Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resumeData.certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex"
            >
              <Card className="flex flex-col h-full w-full bg-background/50 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-primary/10 overflow-hidden group">
                {/* Visual Accent Top Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {getCertIcon(cert.title)}
                    </div>
                    <Badge variant="outline" className="text-xs font-mono bg-primary/5 text-primary border-primary/30">
                      {cert.date}
                    </Badge>
                  </div>

                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </CardTitle>

                  <CardDescription className="text-xs font-semibold text-primary/90 pt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col justify-between space-y-4 text-xs pt-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="pt-3 border-t border-primary/10 flex items-center justify-between gap-2">
                    {cert.verificationUrl ? (
                      <Button
                        size="sm"
                        variant="default"
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs h-8 px-3 gap-1.5 font-semibold"
                      >
                        <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" /> View Certificate
                        </a>
                      </Button>
                    ) : (
                      <span className="text-[11px] text-muted-foreground font-mono">
                        Type: <strong className="text-foreground">{cert.credentialType}</strong>
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
