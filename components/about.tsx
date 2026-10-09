"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  GraduationCap,
  Mail,
  Code2,
  Award,
  Database,
  Download,
  CheckCircle2,
  MapPin,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react"
import { motion, useInView, type Variants } from "framer-motion"
import { resumeData } from "@/lib/resume-data"

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-background via-background/95 to-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center mb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span variants={itemVariants} className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
            Profile & Credentials
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Piyush Singh</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1.5 bg-gradient-to-r from-primary to-cyan-400 rounded-full mb-6"></motion.div>
          <motion.p variants={itemVariants} className="max-w-2xl text-muted-foreground text-sm md:text-base">
            Full-Stack Developer crafting reliable, responsive, and performance-driven web systems with the MERN stack, Next.js, and TypeScript.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Modern Engineering Profile Card */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md rounded-2xl p-1 bg-gradient-to-b from-primary/30 via-blue-500/15 to-cyan-500/20 shadow-2xl border border-primary/30">
              <div className="rounded-[14px] bg-background/90 backdrop-blur-xl p-6 sm:p-7 space-y-6">
                {/* Header Avatar & Monogram */}
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-400 text-white font-black text-xl shadow-xl shadow-blue-500/30 ring-2 ring-primary/30 shrink-0">
                    <span>PS</span>
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 ring-2 ring-background"></span>
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-foreground tracking-tight">
                      {resumeData.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary">
                      {resumeData.title}
                    </p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                      Open to Opportunities
                    </span>
                  </div>
                </div>

                {/* Key Quick Facts List */}
                <div className="space-y-3 pt-2 border-t border-primary/15 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between py-1 border-b border-primary/10">
                    <span className="text-foreground font-medium flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" /> University
                    </span>
                    <span className="text-right font-semibold text-foreground/90">LPU (2024–Present)</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-primary/10">
                    <span className="text-foreground font-medium flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" /> Major
                    </span>
                    <span className="text-right font-medium text-foreground/90">
                      Computer Science & Engineering
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-primary/10">
                    <span className="text-foreground font-medium flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-primary" /> Core Stack
                    </span>
                    <span className="text-right font-medium text-foreground/90">MERN • Next.js • TypeScript</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-primary/10">
                    <span className="text-foreground font-medium flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> Training
                    </span>
                    <span className="text-right font-medium text-foreground/90">
                      UI/UX Design & Prototyping
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-foreground font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Location
                    </span>
                    <span className="text-right text-foreground/80">Punjab & Uttarakhand, India</span>
                  </div>
                </div>

                {/* Connect & Download Bar */}
                <div className="pt-2 flex items-center justify-between gap-3 border-t border-primary/15">
                  <div className="flex items-center gap-2">
                    <a
                      href={resumeData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                      title="GitHub Profile"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={resumeData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={`mailto:${resumeData.email}`}
                      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                      title="Send Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>

                  <a
                    href="/Piyush_Singh_Resume.pdf"
                    download="Piyush_Singh_Resume.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" /> Resume PDF
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Details & Biography */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold">
                Engineer & <span className="text-primary">Full-Stack Architect</span>
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {resumeData.summary}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2">
                {resumeData.aboutMe}
              </p>
            </motion.div>

            {/* 4 Feature Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Card className="bg-background/40 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">B.Tech Computer Science</h4>
                    <p className="text-xs text-primary font-medium">{resumeData.education.university.institution}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Phagwara, Punjab • {resumeData.education.university.period}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/40 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Sheffield School, Roorkee</h4>
                    <p className="text-xs text-primary font-medium">Intermediate & Matriculation</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Senior Secondary (PCM) & High School
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/40 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Full-Stack & Cloud Certified</h4>
                    <p className="text-xs text-primary font-medium">Oracle Cloud AI • Infosys DBMS</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      iamNEO Java • React & Node.js ecosystem
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/40 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Database className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">UI/UX Design & Prototyping</h4>
                    <p className="text-xs text-primary font-medium">LPU Centre for Professional Enhancement</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Certified • Figma, Wireframing & Usability Testing
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="pt-4 flex flex-wrap gap-4 items-center">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 gap-2 font-medium"
              >
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/40 hover:bg-primary/10 backdrop-blur-sm gap-2"
              >
                <a href="#projects">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Explore Projects
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
