"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import {
  Award,
  Briefcase,
  Code2,
  Compass,
  Download,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { resumeData } from "@/lib/resume-data"

const sections = [
  { name: "Home", id: "home", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "Projects", id: "projects", icon: Briefcase },
  { name: "Training", id: "training", icon: Compass },
  { name: "Certificates", id: "certificates", icon: Award },
  { name: "Skills", id: "skills", icon: Code2 },
  { name: "Journey", id: "experience", icon: GraduationCap },
  { name: "Contact", id: "contact", icon: Mail },
]

export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((current) => !current)
      }
    }

    const handleOpen = () => setOpen(true)

    document.addEventListener("keydown", handleKeyDown)
    window.addEventListener("open-command-menu", handleOpen)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("open-command-menu", handleOpen)
    }
  }, [])

  const goToSection = (id: string) => {
    setOpen(false)
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      window.history.replaceState(null, "", `#${id}`)
      return
    }
    router.push(`/#${id}`)
  }

  const goTo = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to a section, project, or link..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigate">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <CommandItem
                key={section.id}
                value={`${section.name} ${section.id}`}
                onSelect={() => goToSection(section.id)}
              >
                <Icon />
                <span>{section.name}</span>
              </CommandItem>
            )
          })}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Case studies">
          {resumeData.projects.map((project) => (
            <CommandItem
              key={project.slug}
              value={`${project.title} ${project.subtitle}`}
              onSelect={() => goTo(`/projects/${project.slug}`)}
            >
              <Briefcase />
              <span>
                {project.title}
                <span className="ml-2 text-xs text-muted-foreground">{project.subtitle}</span>
              </span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links">
          <CommandItem value="resume cv pdf" onSelect={() => goTo("/resume")}>
            <Download />
            <span>View & download resume</span>
          </CommandItem>
          <CommandItem
            value="github source code"
            onSelect={() => {
              setOpen(false)
              window.open(resumeData.github, "_blank", "noopener,noreferrer")
            }}
          >
            <Github />
            <span>GitHub profile</span>
          </CommandItem>
          <CommandItem
            value="linkedin profile"
            onSelect={() => {
              setOpen(false)
              window.open(resumeData.linkedin, "_blank", "noopener,noreferrer")
            }}
          >
            <Linkedin />
            <span>LinkedIn profile</span>
          </CommandItem>
          <CommandItem
            value="email contact"
            onSelect={() => {
              setOpen(false)
              window.location.href = `mailto:${resumeData.email}`
            }}
          >
            <Mail />
            <span>Send an email</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Appearance">
          <CommandItem
            value="toggle theme dark light"
            onSelect={() => {
              setTheme(theme === "dark" ? "light" : "dark")
              setOpen(false)
            }}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
            <span>Switch to {theme === "dark" ? "light" : "dark"} mode</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>

      <div className="flex items-center justify-between border-t px-3 py-2 text-[11px] text-muted-foreground">
        <span>Search the portfolio</span>
        <span className="flex items-center gap-1">
          <CommandShortcut className="ml-0 rounded border px-1.5 py-0.5">Ctrl</CommandShortcut>
          <CommandShortcut className="ml-0 rounded border px-1.5 py-0.5">K</CommandShortcut>
        </span>
      </div>
    </CommandDialog>
  )
}
