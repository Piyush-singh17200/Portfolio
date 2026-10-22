import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { resumeData } from "@/lib/resume-data"
import { siteConfig } from "@/lib/site-config"
import ResumeActions from "@/components/resume-actions"

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${resumeData.name} — ${resumeData.title}. View online, print, or download the PDF.`,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: `Resume | ${resumeData.name}`,
    description: `Resume of ${resumeData.name} — ${resumeData.title}.`,
    url: `${siteConfig.url}/resume`,
  },
}

const skillGroups = [
  { label: "Languages", items: resumeData.skills.languages },
  { label: "Frameworks & Libraries", items: resumeData.skills.frameworks },
  { label: "Databases", items: resumeData.skills.databases },
  { label: "Tools & Platforms", items: resumeData.skills.tools },
  { label: "Concepts", items: resumeData.skills.concepts },
]

export default function ResumePage() {
  return (
    <div className="pt-24 pb-20 print:pt-0 print:pb-0">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <ResumeActions />
        </div>

        <article className="resume-print-area rounded-2xl border border-primary/20 bg-background/70 p-6 shadow-xl backdrop-blur-md sm:p-10 print:border-0 print:bg-white print:p-0 print:shadow-none">
          {/* Header */}
          <header className="border-b border-primary/20 pb-6 print:border-gray-300">
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl print:text-3xl print:text-black">
              {resumeData.name}
            </h1>
            <p className="mt-1 text-base font-semibold text-primary print:text-teal-800">
              {resumeData.title}
            </p>

            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted-foreground print:text-black">
              <a href={`mailto:${resumeData.email}`} className="inline-flex items-center gap-1.5 hover:text-primary">
                <Mail className="h-3.5 w-3.5" /> {resumeData.email}
              </a>
              <a href={`tel:${resumeData.phone}`} className="inline-flex items-center gap-1.5 hover:text-primary">
                <Phone className="h-3.5 w-3.5" /> {resumeData.phone}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {resumeData.location}
              </span>
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary"
              >
                <Linkedin className="h-3.5 w-3.5" /> linkedin.com/in/singh-piyush18
              </a>
              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary"
              >
                <Github className="h-3.5 w-3.5" /> github.com/Piyush-singh17200
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary print:text-teal-800">
              Professional Summary
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground print:text-black">
              {resumeData.summary}
            </p>
          </section>

          {/* Projects */}
          <section className="mt-7">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary print:text-teal-800">
              Projects
            </h2>
            <div className="mt-3 space-y-5">
              {resumeData.projects.map((project) => (
                <div key={project.slug} className="break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-bold print:text-black">
                      {project.title}
                      <span className="font-medium text-muted-foreground print:text-black">
                        {" "}— {project.subtitle}
                      </span>
                    </h3>
                    <span className="text-[11px] font-mono text-primary print:text-black">
                      {project.period}
                    </span>
                  </div>
                  <ul className="mt-1.5 space-y-1">
                    {project.bulletPoints.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2 text-xs leading-relaxed text-muted-foreground print:text-black"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-1.5 text-[11px] text-muted-foreground print:text-black">
                    <span className="font-semibold text-foreground print:text-black">Tech:</span>{" "}
                    {project.tags.join(" · ")}
                  </p>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline print:hidden"
                    >
                      Source code <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Training */}
          <section className="mt-7 break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary print:text-teal-800">
              Training
            </h2>
            <div className="mt-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-bold print:text-black">{resumeData.summerTraining.title}</h3>
                <span className="text-[11px] font-mono text-primary print:text-black">
                  {resumeData.summerTraining.period}
                </span>
              </div>
              <p className="text-xs font-medium text-muted-foreground print:text-black">
                {resumeData.summerTraining.organization} · {resumeData.summerTraining.location}
              </p>
              <ul className="mt-1.5 space-y-1">
                {resumeData.summerTraining.bulletPoints.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-xs leading-relaxed text-muted-foreground print:text-black"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Certificates */}
          <section className="mt-7 break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary print:text-teal-800">
              Certifications
            </h2>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {resumeData.certificates.map((certificate) => (
                <div key={certificate.title} className="text-xs">
                  <p className="font-semibold text-foreground print:text-black">{certificate.title}</p>
                  <p className="text-muted-foreground print:text-black">
                    {certificate.issuer} · {certificate.date}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mt-7 break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary print:text-teal-800">
              Technical Skills
            </h2>
            <div className="mt-2 space-y-1.5">
              {skillGroups.map((group) => (
                <div key={group.label} className="text-xs">
                  <span className="font-semibold text-foreground print:text-black">{group.label}: </span>
                  <span className="text-muted-foreground print:text-black">
                    {group.items.map((skill) => skill.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mt-7 break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary print:text-teal-800">
              Education
            </h2>
            <div className="mt-2 space-y-3">
              {resumeData.education.all.map((education) => (
                <div key={`${education.institution}-${education.degree}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-bold print:text-black">{education.institution}</h3>
                    <span className="text-[11px] font-mono text-primary print:text-black">
                      {education.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground print:text-black">
                    {education.degree} · {education.location}
                  </p>
                  {education.details && (
                    <p className="text-[11px] text-muted-foreground print:text-black">
                      {education.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-8 border-t border-primary/20 pt-4 text-[11px] text-muted-foreground print:border-gray-300 print:text-black">
            <p>
              View the full case studies at{" "}
              <Link href="/#projects" className="text-primary hover:underline print:text-black">
                {siteConfig.url.replace(/^https?:\/\//, "")}
              </Link>
              . References available on request.
            </p>
          </footer>
        </article>
      </div>
    </div>
  )
}
