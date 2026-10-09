"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react"
import { resumeData } from "@/lib/resume-data"

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const { toast } = useToast()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedStatus, setSubmittedStatus] = useState<"idle" | "success" | "activation_needed" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmittedStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        if (data.needsActivation) {
          setSubmittedStatus("activation_needed")
          toast({
            title: "First-Time Setup Notice",
            description: `A 1-time activation confirmation was sent to ${resumeData.email}. Once clicked, all emails deliver automatically.`,
          })
        } else {
          setSubmittedStatus("success")
          toast({
            title: "Message Delivered to Gmail!",
            description: `Thank you ${formData.name}. Your message has been sent directly to Piyush's inbox (${resumeData.email}).`,
          })
        }

        // Reset form data after successful delivery
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmittedStatus("error")
        toast({
          title: "Delivery Notice",
          description: data.error || "Unable to send right now. Please use the direct Gmail link below.",
          variant: "destructive",
        })
      }
    } catch (err: any) {
      console.error("Submission error:", err)
      setSubmittedStatus("error")
      toast({
        title: "Connection Error",
        description: "Could not connect to the mail server. Please click 'Open in Gmail' to send directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Pre-filled web Gmail compose link as immediate 1-click fallback
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    resumeData.email
  )}&su=${encodeURIComponent(formData.subject || "Inquiry from Portfolio")}&body=${encodeURIComponent(
    `Hi Piyush,\n\n${formData.message || "I would like to discuss an opportunity."}\n\nBest regards,\n${
      formData.name || "A visitor"
    }\n${formData.email || ""}`
  )}`

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Direct Gmail",
      value: resumeData.email,
      link: `mailto:${resumeData.email}`,
      actionText: "Send direct email",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone / WhatsApp",
      value: resumeData.phone,
      link: `tel:${resumeData.phone}`,
      actionText: "Call or message",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: resumeData.location,
      link: "https://maps.google.com/?q=Roorkee+Uttarakhand+India",
      actionText: "Roorkee, Uttarakhand, India",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background/90 via-background to-background relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
            Direct Communication
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-cyan-400 rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground text-sm sm:text-base">
            Have a project in mind, an internship opening, or a full-time role? Fill out the form below and your message will be forwarded <span className="text-foreground font-semibold">directly to my personal Gmail inbox</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-background/50 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                {/* Success Banner */}
                {submittedStatus === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-emerald-200">Email successfully sent to Piyush!</p>
                      <p className="text-emerald-400/90 text-xs mt-1">
                        Your message was dispatched directly to <span className="font-mono text-white">{resumeData.email}</span>. Piyush will reply back directly to your email address.
                      </p>
                    </div>
                  </div>
                )}

                {/* Activation Needed Banner */}
                {submittedStatus === "activation_needed" && (
                  <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-amber-200">First-Time Form Activation Sent!</p>
                      <p className="text-amber-400/90 text-xs mt-1">
                        FormSubmit has sent a 1-time activation email to <span className="font-mono text-white">{resumeData.email}</span>. Once verified, all messages forward straight to Gmail automatically.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Banner */}
                {submittedStatus === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-rose-200">Direct server dispatch notice</p>
                      <p className="text-rose-400/90 text-xs mt-1">
                        You can also send your message directly via your Gmail web app by clicking "Open in Gmail Web" below.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-background/60 border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-background/60 border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Full-Stack Role / Project Inquiry"
                      required
                      className="bg-background/60 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Piyush, I saw your portfolio and would love to connect regarding..."
                      required
                      className="min-h-[140px] bg-background/60 border-primary/20 focus:border-primary text-sm"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/20 font-medium py-5 text-sm"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                          Sending to Gmail...
                        </span>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send Directly to My Gmail
                        </>
                      )}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      asChild
                      className="border-primary/30 hover:bg-primary/10 py-5 text-xs font-semibold text-muted-foreground hover:text-foreground"
                    >
                      <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5 text-primary" /> Open in Gmail Web
                      </a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Details & Quick Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-background/50 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-5 flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs uppercase font-semibold text-muted-foreground">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors block truncate"
                      >
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Resume & Social Links Card */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-primary/15 via-background/60 to-purple-500/10 backdrop-blur-md border-primary/30 p-5 space-y-4">
                <div>
                  <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-primary" /> Professional Connect
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Connect on professional networks or download my latest resume.
                  </p>
                </div>

                <div className="space-y-2">
                  <Button
                    size="sm"
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs gap-2"
                  >
                    <a href="/Piyush_Singh_Resume.pdf" download="Piyush_Singh_Resume.pdf">
                      <Download className="h-3.5 w-3.5" /> Download Resume (PDF)
                    </a>
                  </Button>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 text-xs border-primary/30 hover:bg-primary/10 gap-1.5"
                    >
                      <a href={resumeData.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 text-xs border-primary/30 hover:bg-primary/10 gap-1.5"
                    >
                      <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
