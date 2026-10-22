"use client"

import { useState } from "react"
import { Check, Copy, Download, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { trackEvent } from "@/lib/analytics"
import { resumeData } from "@/lib/resume-data"

export default function ResumeActions() {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(resumeData.email)
      setCopied(true)
      trackEvent("resume_email_copied")
      toast({
        title: "Email copied",
        description: resumeData.email,
      })
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      toast({
        title: "Could not copy",
        description: `Please copy the address manually: ${resumeData.email}`,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2 print:hidden">
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          trackEvent("resume_print")
          window.print()
        }}
        className="border-primary/30 hover:bg-primary/10 gap-1.5"
      >
        <Printer className="h-3.5 w-3.5" /> Print / Save PDF
      </Button>

      <Button asChild size="sm" className="bg-primary hover:bg-primary/90 gap-1.5">
        <a
          href="/Piyush_Singh_Resume.pdf"
          download="Piyush_Singh_Resume.pdf"
          onClick={() => trackEvent("resume_download")}
        >
          <Download className="h-3.5 w-3.5" /> Download PDF
        </a>
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={copyEmail}
        className="gap-1.5 text-muted-foreground hover:text-foreground"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy email"}
      </Button>
    </div>
  )
}
