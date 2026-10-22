import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"
import { resumeData } from "@/lib/resume-data"

export const runtime = "nodejs"

const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || resumeData.email
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || resumeData.portfolioUrl).replace(/\/$/, "")

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.string().trim().email("Please enter a valid email address.").max(160),
  subject: z.string().trim().min(3, "Please add a subject.").max(140),
  message: z.string().trim().min(10, "Please write a slightly longer message.").max(4000),
  website: z.string().optional(),
})

type ContactPayload = z.infer<typeof contactSchema>

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5
const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

function checkRateLimit(key: string) {
  const now = Date.now()
  const current = rateLimitBuckets.get(key)

  if (!current || current.resetAt <= now) {
    rateLimitBuckets.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, retryAfter: 0 }
  }

  if (current.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    }
  }

  current.count += 1
  return { allowed: true, retryAfter: 0 }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }
    return entities[character]
  })
}

function headerSafe(value: string) {
  return value.replace(/[\r\n"]/g, " ").trim()
}

function buildEmailHtml({ name, email, subject, message }: ContactPayload) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message)

  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
      <div style="border-bottom: 2px solid #6366f1; padding-bottom: 16px; margin-bottom: 20px;">
        <h2 style="color: #4338ca; margin: 0 0 6px 0; font-size: 22px;">New Portfolio Contact Message</h2>
        <p style="color: #64748b; margin: 0; font-size: 13px;">Received through ${SITE_URL}</p>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 90px; font-size: 13px;">From:</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600; font-size: 14px;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 600; font-size: 13px;">Email:</td>
          <td style="padding: 8px 0; color: #2563eb; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 600; font-size: 13px;">Subject:</td>
          <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${safeSubject}</td>
        </tr>
      </table>

      <div style="background-color: #f8fafc; border-left: 4px solid #6366f1; border-radius: 6px; padding: 18px; margin-bottom: 24px;">
        <h4 style="margin: 0 0 10px 0; color: #334155; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</h4>
        <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; font-size: 14px; color: #1e293b;">${safeMessage}</p>
      </div>

      <div style="text-align: center; margin-top: 28px; padding-top: 16px; border-top: 1px solid #f1f5f9;">
        <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(subject)}"
           style="display: inline-block; background-color: #4f46e5; color: #ffffff; padding: 10px 22px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
          Reply to ${safeName}
        </a>
      </div>
    </div>
  `
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request)
    const { allowed, retryAfter } = checkRateLimit(ip)

    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many messages were sent from this connection. Please try again later." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } }
      )
    }

    const body = await request.json().catch(() => null)
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request body." },
        { status: 400 }
      )
    }

    // Honeypot: real visitors never see or fill this field.
    if (typeof body.website === "string" && body.website.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Message received." })
    }

    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]
      return NextResponse.json(
        { success: false, error: firstIssue?.message || "Please check the form and try again." },
        { status: 400 }
      )
    }

    const payload = parsed.data
    const safeName = headerSafe(payload.name)
    const safeSubject = headerSafe(payload.subject)
    const emailSubject = `[Portfolio Inquiry] ${safeSubject} - from ${safeName}`

    const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS

    // Strategy 1: direct SMTP when credentials are configured.
    if (gmailUser && gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user: gmailUser, pass: gmailPass },
          connectionTimeout: 10_000,
          greetingTimeout: 10_000,
          socketTimeout: 15_000,
        })

        await transporter.sendMail({
          from: `"${safeName} (via Portfolio)" <${gmailUser}>`,
          replyTo: payload.email,
          to: RECIPIENT_EMAIL,
          subject: emailSubject,
          text: [
            "You received a new inquiry from your portfolio:",
            "",
            `Name: ${payload.name}`,
            `Email: ${payload.email}`,
            `Subject: ${payload.subject}`,
            "",
            "Message:",
            payload.message,
            "",
            "---",
            `Reply directly to ${payload.email}.`,
          ].join("\n"),
          html: buildEmailHtml(payload),
        })

        return NextResponse.json({
          success: true,
          method: "smtp",
          message: `Your message has been sent directly to Piyush's inbox (${RECIPIENT_EMAIL}).`,
        })
      } catch (smtpError) {
        console.warn(
          "SMTP delivery failed; trying FormSubmit fallback:",
          smtpError instanceof Error ? smtpError.message : smtpError
        )
      }
    }

    // Strategy 2: FormSubmit forwarding. It sends a one-time activation mail
    // the first time the recipient address is used.
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Origin: SITE_URL,
            Referer: `${SITE_URL}/`,
          },
          body: JSON.stringify({
            name: payload.name,
            email: payload.email,
            _replyto: payload.email,
            _subject: emailSubject,
            subject: payload.subject,
            message: payload.message,
            _template: "table",
            _captcha: "false",
          }),
          signal: AbortSignal.timeout(12_000),
        }
      )

      const data = (await response.json().catch(() => ({}))) as {
        success?: boolean | string
        message?: string
      }

      if (response.ok && (data.success === true || data.success === "true")) {
        return NextResponse.json({
          success: true,
          method: "formsubmit",
          message: `Your message has been sent directly to Piyush's inbox (${RECIPIENT_EMAIL}).`,
        })
      }

      if (typeof data.message === "string" && /activation/i.test(data.message)) {
        return NextResponse.json({
          success: true,
          needsActivation: true,
          message: `Message queued. A one-time activation link was sent to ${RECIPIENT_EMAIL}. Once confirmed, future messages deliver automatically.`,
        })
      }

      console.error("FormSubmit rejected the message:", response.status, data)
      return NextResponse.json(
        {
          success: false,
          error: "The mail service rejected the message. Please use the direct email link below.",
        },
        { status: 502 }
      )
    } catch (forwardError) {
      console.error(
        "FormSubmit forwarding error:",
        forwardError instanceof Error ? forwardError.message : forwardError
      )
      return NextResponse.json(
        {
          success: false,
          error: "The mail service is unavailable right now. Please use the direct email link below.",
        },
        { status: 502 }
      )
    }
  } catch (error) {
    console.error(
      "Contact API route error:",
      error instanceof Error ? error.message : error
    )
    return NextResponse.json(
      { success: false, error: "Something went wrong while sending your message. Please try the direct email link below." },
      { status: 500 }
    )
  }
}
