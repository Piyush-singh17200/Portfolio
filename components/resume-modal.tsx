"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  FileText,
  Sparkles,
  Database,
  Wrench,
  Layers,
  Terminal,
  CheckCircle2,
  Compass,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/lib/resume-data"
import { useResumeModal } from "@/hooks/use-resume-modal"

export default function ResumeModal() {
  const { isOpen, closeResume } = useResumeModal()
  const [viewMode, setViewMode] = useState<"document" | "interactive">("document")
  const [copied, setCopied] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  const handleCopyText = () => {
    const plainTextResume = `
${resumeData.name.toUpperCase()}
LinkedIn: ${resumeData.linkedin} | Email: ${resumeData.email}
GitHub: ${resumeData.github} | Mobile: ${resumeData.phone}

SKILLS
Languages: ${resumeData.skills.languages.map((s) => s.name).join(", ")}
Framework & Libraries: ${resumeData.skills.frameworks.map((s) => s.name).join(", ")}
Databases: ${resumeData.skills.databases.map((s) => s.name).join(", ")}
Tools & Platforms: ${resumeData.skills.tools.map((s) => s.name).join(", ")}
Concepts: ${resumeData.skills.concepts.map((s) => s.name).join(", ")}
Soft Skills: ${resumeData.skills.softSkills.map((s) => s.name).join(", ")}

PROJECTS
${resumeData.projects
  .map(
    (p) => `${p.title} — ${p.subtitle} | ${p.tags.slice(0, 5).join(", ")} | ${p.period || ""}
${p.bulletPoints.map((b) => `● ${b}`).join("\n")}`
  )
  .join("\n\n")}

TRAINING
${resumeData.summerTraining.title} | ${resumeData.summerTraining.credentialType} | ${resumeData.summerTraining.period}
${resumeData.summerTraining.organization} — ${resumeData.summerTraining.location}
${resumeData.summerTraining.bulletPoints.map((b) => `● ${b}`).join("\n")}

CERTIFICATES
${resumeData.certificates
  .map((c) => `${c.title} | ${c.issuer} | ${c.credentialType} ${c.date}`)
  .join("\n")}

EDUCATION
${resumeData.education.all
  .map(
    (e) => `${e.institution} ${e.location}
${e.degree} | ${e.period}`
  )
  .join("\n\n")}
    `.trim()

    navigator.clipboard.writeText(plainTextResume)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:static print:overflow-visible">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeResume}
          className="fixed inset-0 bg-background/80 backdrop-blur-md print:hidden"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-card text-card-foreground border border-primary/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 print:max-w-none print:max-h-none print:border-none print:shadow-none print:p-0 print:bg-white print:text-black"
        >
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 px-6 border-b border-border bg-background/60 backdrop-blur-md sticky top-0 z-20 print:hidden">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg flex items-center gap-2">
                  {resumeData.name} — Curriculum Vitae
                  <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                    Official ATS Design
                  </Badge>
                </h3>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  B.Tech CSE • Lovely Professional University • Full-Stack Developer
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* View mode toggle */}
              <div className="bg-muted p-1 rounded-lg flex items-center text-xs font-medium mr-2">
                <button
                  onClick={() => setViewMode("document")}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    viewMode === "document"
                      ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5" /> Official CV
                  </span>
                </button>
                <button
                  onClick={() => setViewMode("interactive")}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    viewMode === "interactive"
                      ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" /> Interactive Studio
                  </span>
                </button>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyText}
                className="gap-1.5 text-xs h-8 border-primary/20 hover:bg-primary/10"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Text"}</span>
              </Button>

              <a
                href="/Piyush_Singh_Resume.pdf"
                download="Piyush_Singh_Resume.pdf"
                className="inline-flex items-center justify-center rounded-md text-xs h-8 px-3 gap-1.5 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 font-medium transition-colors"
                title="Download original CV PDF"
              >
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <Button
                variant="default"
                size="sm"
                onClick={handlePrint}
                className="gap-1.5 text-xs h-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Printer className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Print / Save</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={closeResume}
                className="h-8 w-8 rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Scrollable Document Content */}
          <div className="overflow-y-auto p-6 md:p-10 space-y-8 print:p-6 print:space-y-6 print:overflow-visible resume-print-area">
            {viewMode === "interactive" ? (
              /* ================= INTERACTIVE EXECUTIVE VIEW ================= */
              <div className="space-y-8">
                {/* Header Banner */}
                <div className="relative overflow-hidden rounded-xl p-6 md:p-8 bg-gradient-to-r from-primary/15 via-background to-primary/5 border border-primary/20">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-2">
                      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        {resumeData.name}
                      </h1>
                      <p className="text-lg md:text-xl font-medium text-primary">
                        {resumeData.title}
                      </p>
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs md:text-sm text-muted-foreground pt-2">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-primary" />
                          {resumeData.location}
                        </span>
                        <a
                          href={`tel:${resumeData.phone}`}
                          className="flex items-center gap-1.5 hover:text-primary transition-colors"
                        >
                          <Phone className="h-4 w-4 text-primary" />
                          {resumeData.phone}
                        </a>
                        <a
                          href={`mailto:${resumeData.email}`}
                          className="flex items-center gap-1.5 hover:text-primary transition-colors"
                        >
                          <Mail className="h-4 w-4 text-primary" />
                          {resumeData.email}
                        </a>
                      </div>
                    </div>

                    {/* Social & Contact Links */}
                    <div className="flex flex-wrap md:flex-col gap-2 w-full md:w-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="gap-2 border-primary/30 hover:bg-primary/10 text-xs"
                      >
                        <a href={resumeData.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 text-primary" /> GitHub Profile
                          <ExternalLink className="h-3 w-3 opacity-70" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="gap-2 border-primary/30 hover:bg-primary/10 text-xs"
                      >
                        <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 text-primary" /> LinkedIn Profile
                          <ExternalLink className="h-3 w-3 opacity-70" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Technical Skills Matrix */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-primary/20 pb-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-bold tracking-wide uppercase text-foreground">
                      Skills & Technical Expertise
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-background/50 border border-primary/15 space-y-2">
                      <h4 className="font-semibold text-sm text-primary flex items-center gap-2">
                        <Terminal className="h-4 w-4" /> Languages
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {resumeData.skills.languages.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant={skill.highlight ? "default" : "secondary"}
                            className={`text-xs ${skill.highlight ? "bg-primary/90 text-primary-foreground" : "bg-muted"}`}
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-background/50 border border-primary/15 space-y-2">
                      <h4 className="font-semibold text-sm text-primary flex items-center gap-2">
                        <Layers className="h-4 w-4" /> Framework & Libraries
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {resumeData.skills.frameworks.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant={skill.highlight ? "default" : "secondary"}
                            className={`text-xs ${skill.highlight ? "bg-primary/90 text-primary-foreground" : "bg-muted"}`}
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-background/50 border border-primary/15 space-y-2">
                      <h4 className="font-semibold text-sm text-primary flex items-center gap-2">
                        <Database className="h-4 w-4" /> Databases
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {resumeData.skills.databases.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant={skill.highlight ? "default" : "secondary"}
                            className={`text-xs ${skill.highlight ? "bg-primary/90 text-primary-foreground" : "bg-muted"}`}
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-background/50 border border-primary/15 space-y-2">
                      <h4 className="font-semibold text-sm text-primary flex items-center gap-2">
                        <Wrench className="h-4 w-4" /> Tools & Platforms
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {resumeData.skills.tools.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant={skill.highlight ? "default" : "secondary"}
                            className={`text-xs ${skill.highlight ? "bg-primary/90 text-primary-foreground" : "bg-muted"}`}
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-background/50 border border-primary/15 space-y-2">
                      <h4 className="font-semibold text-sm text-primary flex items-center gap-2">
                        <Sparkles className="h-4 w-4" /> Concepts
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {resumeData.skills.concepts.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant={skill.highlight ? "default" : "secondary"}
                            className={`text-xs ${skill.highlight ? "bg-primary/90 text-primary-foreground" : "bg-muted"}`}
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-background/50 border border-primary/15 space-y-2">
                      <h4 className="font-semibold text-sm text-primary flex items-center gap-2">
                        <Award className="h-4 w-4" /> Soft Skills
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {resumeData.skills.softSkills.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            className="text-xs bg-muted"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Projects */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-primary/20 pb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-bold tracking-wide uppercase text-foreground">
                      Projects
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {resumeData.projects.map((project, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-background/40 border border-primary/15 hover:border-primary/40 transition-all space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                              {project.title}
                              <span className="text-muted-foreground font-normal text-xs sm:text-sm">
                                — {project.subtitle}
                              </span>
                            </h3>
                          </div>
                          <div className="flex items-center gap-2">
                            {project.period && (
                              <Badge variant="outline" className="text-xs font-mono text-primary border-primary/30">
                                {project.period}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground list-disc list-outside pl-5">
                          {project.bulletPoints.map((pt, pIdx) => (
                            <li key={pIdx} className="leading-relaxed">
                              {pt}
                            </li>
                          ))}
                        </ul>

                        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-primary/10">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((t) => (
                              <Badge key={t} variant="outline" className="text-[11px] bg-primary/5 border-primary/20">
                                {t}
                              </Badge>
                            ))}
                          </div>
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline flex items-center gap-1 font-medium text-xs ml-auto"
                            >
                              <Github className="h-3.5 w-3.5" /> GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summer Training from CV */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-primary/20 pb-2">
                    <Compass className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-bold tracking-wide uppercase text-foreground">
                      Summer Training & Professional Development
                    </h2>
                  </div>

                  <div className="p-5 rounded-xl bg-background/40 border border-primary/15 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                          {resumeData.summerTraining.title}
                          <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 text-xs font-semibold">
                            {resumeData.summerTraining.grade}
                          </Badge>
                        </h3>
                        <p className="text-xs text-primary font-medium mt-0.5">
                          {resumeData.summerTraining.organization} — {resumeData.summerTraining.location}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs font-mono text-primary border-primary/30 w-fit">
                        {resumeData.summerTraining.period}
                      </Badge>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground list-disc list-outside pl-5">
                      {resumeData.summerTraining.bulletPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="leading-relaxed">
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-primary/10">
                      <div className="flex flex-wrap gap-1.5">
                        {resumeData.summerTraining.tools.map((tool) => (
                          <Badge key={tool} variant="outline" className="text-[11px] bg-primary/5 border-primary/20">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                      {resumeData.summerTraining.verificationUrl && (
                        <a
                          href={resumeData.summerTraining.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-1 font-medium text-xs ml-auto"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> View Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Certificates */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-primary/20 pb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-bold tracking-wide uppercase text-foreground">
                      Certificates & Credentials
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {resumeData.certificates.map((cert, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-background/40 border border-primary/15 space-y-2 hover:border-primary/40 transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <Badge variant="outline" className="text-[10px] bg-primary/10 text-primary border-primary/30">
                              {cert.badge || cert.credentialType}
                            </Badge>
                            <span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
                          </div>
                          <h4 className="font-bold text-sm text-foreground">{cert.title}</h4>
                          <p className="text-xs font-medium text-primary">{cert.issuer}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
                        </div>
                        {cert.verificationUrl && (
                          <div className="pt-2 border-t border-primary/10 flex justify-end">
                            <a
                              href={cert.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline flex items-center gap-1 font-medium text-xs"
                            >
                              <ExternalLink className="h-3 w-3" /> View Certificate
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-primary/20 pb-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-bold tracking-wide uppercase text-foreground">
                      Education
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {resumeData.education.all.map((edu, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-background/40 border border-primary/15 flex flex-col sm:flex-row justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-base">{edu.institution}</h3>
                            <span className="text-xs text-muted-foreground">({edu.location})</span>
                          </div>
                          <p className="text-sm text-primary font-medium">{edu.degree}</p>
                          {edu.details && (
                            <p className="text-xs text-muted-foreground pt-0.5">{edu.details}</p>
                          )}
                        </div>
                        <div className="sm:text-right text-xs text-muted-foreground whitespace-nowrap space-y-1">
                          {edu.score && (
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                              {edu.scoreType ? `${edu.scoreType}: ` : ""}{edu.score}
                            </Badge>
                          )}
                          <p className="font-mono">{edu.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* ================= OFFICIAL CV DOCUMENT VIEW (1:1 PDF MATCH) ================= */
              <div className="font-sans text-neutral-900 bg-white p-6 sm:p-10 md:p-12 rounded-xl shadow-xl border border-neutral-200 max-w-4xl mx-auto space-y-3.5 text-[12.5px] leading-snug select-text resume-print-area">
                {/* Header */}
                <div className="space-y-1 pb-1">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1e3a8a]">
                    {resumeData.name}
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0.5 text-xs text-neutral-800 pt-0.5">
                    <div>
                      <span className="text-neutral-900 font-medium">LinkedIn:</span>{" "}
                      <a
                        href={resumeData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1e3a8a] hover:underline"
                      >
                        www.linkedin.com/in/singh-piyush18
                      </a>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-neutral-900 font-medium">Email:</span>{" "}
                      <a
                        href={`mailto:${resumeData.email}`}
                        className="text-[#1e3a8a] hover:underline"
                      >
                        {resumeData.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-neutral-900 font-medium">GitHub:</span>{" "}
                      <a
                        href={resumeData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1e3a8a] hover:underline"
                      >
                        github.com/Piyush-singh17200
                      </a>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-neutral-900 font-medium">Mobile:</span>{" "}
                      <a
                        href={`tel:${resumeData.phone}`}
                        className="text-[#1e3a8a] hover:underline"
                      >
                        {resumeData.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* SKILLS */}
                <div className="space-y-1 pt-1">
                  <div className="border-b-2 border-[#1e3a8a] pb-0.5">
                    <h2 className="text-xs font-bold tracking-wider uppercase text-[#1e3a8a]">
                      SKILLS
                    </h2>
                  </div>
                  <div className="space-y-1 text-xs text-neutral-900 pt-0.5">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                      <span className="sm:col-span-3 font-bold text-neutral-950">Languages:</span>
                      <span className="sm:col-span-9 text-neutral-800">
                        {resumeData.skills.languages.map((s) => s.name).join(", ")}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                      <span className="sm:col-span-3 font-bold text-neutral-950">Framework & Libraries:</span>
                      <span className="sm:col-span-9 text-neutral-800">
                        {resumeData.skills.frameworks.map((s) => s.name).join(", ")}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                      <span className="sm:col-span-3 font-bold text-neutral-950">Databases:</span>
                      <span className="sm:col-span-9 text-neutral-800">
                        {resumeData.skills.databases.map((s) => s.name).join(", ")}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                      <span className="sm:col-span-3 font-bold text-neutral-950">Tools & Platforms:</span>
                      <span className="sm:col-span-9 text-neutral-800">
                        {resumeData.skills.tools.map((s) => s.name).join(", ")}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                      <span className="sm:col-span-3 font-bold text-neutral-950">Concepts:</span>
                      <span className="sm:col-span-9 text-neutral-800">
                        {resumeData.skills.concepts.map((s) => s.name).join(", ")},
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                      <span className="sm:col-span-3 font-bold text-neutral-950">Soft Skills:</span>
                      <span className="sm:col-span-9 text-neutral-800">
                        {resumeData.skills.softSkills.map((s) => s.name).join(", ")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* PROJECTS */}
                <div className="space-y-2 pt-1">
                  <div className="border-b-2 border-[#1e3a8a] pb-0.5">
                    <h2 className="text-xs font-bold tracking-wider uppercase text-[#1e3a8a]">
                      PROJECTS
                    </h2>
                  </div>
                  <div className="space-y-2.5">
                    {resumeData.projects.map((p, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                          <div className="font-bold text-neutral-950">
                            <span>{p.title} — {p.subtitle}</span>{" "}
                            <span className="font-normal text-neutral-700">| {p.tags.slice(0, 5).join(", ")} |</span>{" "}
                            <a
                              href={p.githubUrl || resumeData.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#1e3a8a] italic hover:underline font-medium"
                            >
                              GitHub
                            </a>
                          </div>
                          <span className="text-neutral-700 font-medium whitespace-nowrap text-xs">{p.period}</span>
                        </div>
                        <ul className="space-y-0.5 text-xs text-neutral-800 pl-1">
                          {p.bulletPoints.map((bp, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="text-neutral-900 select-none text-[10px] mt-0.5">●</span>
                              <span className="leading-snug">{bp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TRAINING */}
                <div className="space-y-1.5 pt-1">
                  <div className="border-b-2 border-[#1e3a8a] pb-0.5">
                    <h2 className="text-xs font-bold tracking-wider uppercase text-[#1e3a8a]">
                      TRAINING
                    </h2>
                  </div>
                  <div className="space-y-0.5 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="font-bold text-neutral-950">
                        <span>{resumeData.summerTraining.title}</span>{" "}
                        <span className="font-normal text-neutral-700">|</span>{" "}
                        <a
                          href={resumeData.summerTraining.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1e3a8a] italic font-medium hover:underline"
                        >
                          {resumeData.summerTraining.credentialType}
                        </a>
                      </div>
                      <span className="text-neutral-700 font-medium whitespace-nowrap text-xs">
                        {resumeData.summerTraining.period}
                      </span>
                    </div>
                    <p className="text-neutral-800 italic font-medium pb-0.5">
                      {resumeData.summerTraining.organization} — {resumeData.summerTraining.location}
                    </p>
                    <ul className="space-y-0.5 text-xs text-neutral-800 pl-1">
                      {resumeData.summerTraining.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-neutral-900 select-none text-[10px] mt-0.5">●</span>
                          <span className="leading-snug">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CERTIFICATES */}
                <div className="space-y-1 pt-1">
                  <div className="border-b-2 border-[#1e3a8a] pb-0.5">
                    <h2 className="text-xs font-bold tracking-wider uppercase text-[#1e3a8a]">
                      CERTIFICATES
                    </h2>
                  </div>
                  <div className="space-y-1 text-xs text-neutral-800">
                    {resumeData.certificates.map((cert, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <div>
                          <span className="font-bold text-neutral-950">{cert.title}</span>{" "}
                          <span className="text-neutral-700">| {cert.issuer} |</span>{" "}
                          <a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1e3a8a] italic font-medium hover:underline"
                          >
                            {cert.credentialType}
                          </a>
                        </div>
                        <span className="text-neutral-700 font-medium whitespace-nowrap text-xs">{cert.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EDUCATION */}
                <div className="space-y-1.5 pt-1">
                  <div className="border-b-2 border-[#1e3a8a] pb-0.5">
                    <h2 className="text-xs font-bold tracking-wider uppercase text-[#1e3a8a]">
                      EDUCATION
                    </h2>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="space-y-0.5">
                      <div className="flex justify-between items-baseline font-bold text-neutral-950">
                        <span>{resumeData.education.university.institution}</span>
                        <span className="text-neutral-800 font-bold">{resumeData.education.university.location}</span>
                      </div>
                      <div className="flex justify-between items-baseline text-neutral-800">
                        <span>{resumeData.education.university.degree}</span>
                        <span className="text-neutral-700">{resumeData.education.university.period}</span>
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex justify-between items-baseline font-bold text-neutral-950">
                        <span>{resumeData.education.intermediate.institution}</span>
                        <span className="text-neutral-800 font-bold">{resumeData.education.intermediate.location}</span>
                      </div>
                      <div className="flex justify-between items-baseline text-neutral-800">
                        <span>{resumeData.education.intermediate.degree}</span>
                        <span className="text-neutral-700">{resumeData.education.intermediate.period}</span>
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex justify-between items-baseline font-bold text-neutral-950">
                        <span>{resumeData.education.matriculation.institution}</span>
                        <span className="text-neutral-800 font-bold">{resumeData.education.matriculation.location}</span>
                      </div>
                      <div className="flex justify-between items-baseline text-neutral-800">
                        <span>{resumeData.education.matriculation.degree}</span>
                        <span className="text-neutral-700">{resumeData.education.matriculation.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
