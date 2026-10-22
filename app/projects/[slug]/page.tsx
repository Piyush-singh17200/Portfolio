import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ExternalLink,
  Github,
  Layers,
  Mail,
  Sparkles,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { resumeData } from "@/lib/resume-data"
import { siteConfig } from "@/lib/site-config"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

function getProject(slug: string) {
  return resumeData.projects.find((project) => project.slug === slug)
}

export function generateStaticParams() {
  return resumeData.projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return { title: "Project not found" }
  }

  const description = `${project.title} — ${project.subtitle}. ${project.description}`

  return {
    title: `${project.title} Case Study`,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} Case Study | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article",
      images: project.image
        ? [{ url: project.image, width: 1200, height: 630, alt: `${project.title} case study` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study | ${siteConfig.name}`,
      description,
      images: project.image ? [project.image] : undefined,
    },
  }
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  const projectIndex = resumeData.projects.findIndex((item) => item.slug === project.slug)
  const nextProject = resumeData.projects[(projectIndex + 1) % resumeData.projects.length]
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projects/${project.slug}`,
    image: project.image ? `${siteConfig.url}${project.image}` : undefined,
    author: {
      "@type": "Person",
      name: resumeData.name,
      url: siteConfig.url,
    },
    keywords: project.tags.join(", "),
  }

  return (
    <article className="pt-24 pb-20">
      <div className="container mx-auto max-w-6xl px-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        {/* Case study hero */}
        <header className="mt-6 overflow-hidden rounded-3xl border border-primary/20 bg-background/60 shadow-2xl">
          <div className="relative aspect-[16/8] w-full border-b border-primary/15 bg-muted/20">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} — ${project.subtitle}`}
                fill
                unoptimized
                priority
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-gold/10 text-3xl font-bold text-primary">
                {project.title}
              </div>
            )}
          </div>

          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-primary/15 text-primary border-primary/30">
                {project.category === "fullstack" ? "Full-Stack Web" : "Generative AI Platform"}
              </Badge>
              <Badge variant="outline" className="border-primary/20 text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" /> {project.period}
              </Badge>
              <Badge variant="outline" className="border-primary/20 text-muted-foreground">
                Case Study {String(projectIndex + 1).padStart(2, "0")}
              </Badge>
            </div>

            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-2 text-lg font-medium text-primary">{project.subtitle}</p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.githubUrl && (
                <Button asChild className="gap-2 bg-primary hover:bg-primary/90">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> View source
                  </a>
                </Button>
              )}
              {project.liveUrl && project.liveUrl !== project.githubUrl && (
                <Button asChild variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </a>
                </Button>
              )}
              <Button asChild variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
                <Link href="/#contact">
                  <Mail className="h-4 w-4" /> Discuss this project
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
          <div className="space-y-10">
            {/* What I built */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Sparkles className="h-5 w-5 text-primary" /> What I built
              </h2>
              <ul className="mt-4 space-y-3">
                {project.bulletPoints.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </section>

            {/* Engineering focus */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Layers className="h-5 w-5 text-primary" /> Engineering focus
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Card className="bg-background/50 border-primary/20">
                  <CardContent className="p-5">
                    <h3 className="text-sm font-semibold">Frontend</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Responsive React interfaces with Tailwind CSS and motion-driven interactions,
                      built around clear information hierarchy and mobile-first layouts.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-primary/20">
                  <CardContent className="p-5">
                    <h3 className="text-sm font-semibold">Backend & data</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      REST APIs, authentication, database modeling, and service-layer separation
                      designed for reliable end-to-end workflows.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Stack */}
            <section>
              <h2 className="text-xl font-bold">Tech stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-primary/25 bg-background/70 px-3 py-1 text-xs text-foreground/90"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Next project */}
            <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Next case study</p>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="mt-2 flex items-center justify-between gap-4 text-lg font-bold transition-colors hover:text-primary"
              >
                <span>
                  {nextProject.title}
                  <span className="ml-2 text-sm font-normal text-muted-foreground">
                    {nextProject.subtitle}
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-primary" />
              </Link>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <Card className="bg-background/50 border-primary/20 lg:sticky lg:top-24">
              <CardContent className="space-y-4 p-5 text-sm">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Role
                  </p>
                  <p className="mt-1 font-medium">Independent full-stack development</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Timeline
                  </p>
                  <p className="mt-1 font-medium">{project.period}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Category
                  </p>
                  <p className="mt-1 font-medium">
                    {project.category === "fullstack" ? "Full-stack web application" : "AI-powered platform"}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Links
                  </p>
                  <div className="mt-2 flex flex-col gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary hover:underline"
                      >
                        <Github className="h-3.5 w-3.5" /> Source code
                      </a>
                    )}
                    <Link href="/resume" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                      <ArrowRight className="h-3.5 w-3.5" /> View resume
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
    </article>
  )
}
