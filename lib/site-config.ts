import { resumeData } from "@/lib/resume-data"

export const siteConfig = {
  url: resumeData.portfolioUrl,
  name: resumeData.name,
  title: "Piyush Singh | Full-Stack Developer (MERN / Next.js)",
  description:
    "Portfolio and CV of Piyush Singh, a full-stack developer building end-to-end web applications with the MERN stack, Next.js, TypeScript, and AI integrations.",
  shortDescription: "Full-stack developer building MERN, Next.js, and AI-powered web platforms.",
  email: resumeData.email,
  links: {
    github: resumeData.github,
    linkedin: resumeData.linkedin,
  },
  nav: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Training", href: "#training" },
    { name: "Certificates", href: "#certificates" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
} as const

export const caseStudyPaths = resumeData.projects.map((project) => `/projects/${project.slug}`)
