"use client"

import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import SummerTraining from "@/components/summer-training"
import Certificates from "@/components/certificates"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import FloatingActionButton from "@/components/floating-action-button"
import ResumeModal from "@/components/resume-modal"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <SummerTraining />
      <Certificates />
      <Skills />
      <Experience />
      <Contact />
      <FloatingActionButton />
      <ResumeModal />
    </div>
  )
}
