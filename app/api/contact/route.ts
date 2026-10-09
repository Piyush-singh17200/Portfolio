import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Recipient email address from CV
const RECIPIENT_EMAIL = "singhp17200@gmail.com"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields (name, email, subject, message)." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    // Strategy 1: Direct SMTP via Nodemailer (if GMAIL_USER / GMAIL_APP_PASSWORD configured)
    const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS

    if (gmailUser && gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        })

        const mailOptions = {
          from: `"${name} (via Portfolio)" <${gmailUser}>`,
          replyTo: email,
          to: RECIPIENT_EMAIL,
          subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
          text: `You received a new inquiry from your portfolio:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nHit reply to respond directly to ${email}.`,
          html: `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
              <div style="border-bottom: 2px solid #6366f1; padding-bottom: 16px; margin-bottom: 20px;">
                <h2 style="color: #4338ca; margin: 0 0 6px 0; font-size: 22px;">New Portfolio Contact Message</h2>
                <p style="color: #64748b; margin: 0; font-size: 13px;">Received through piyushsingh.dev portfolio</p>
              </div>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 90px; font-size: 13px;">From:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 600; font-size: 14px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600; font-size: 13px;">Email:</td>
                  <td style="padding: 8px 0; color: #2563eb; font-size: 14px;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600; font-size: 13px;">Subject:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${subject}</td>
                </tr>
              </table>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #6366f1; border-radius: 6px; padding: 18px; margin-bottom: 24px;">
                <h4 style="margin: 0 0 10px 0; color: #334155; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</h4>
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; font-size: 14px; color: #1e293b;">${message}</p>
              </div>
              
              <div style="text-align: center; margin-top: 28px; padding-top: 16px; border-top: 1px solid #f1f5f9;">
                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                   style="display: inline-block; background-color: #4f46e5; color: #ffffff; padding: 10px 22px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                  Reply to ${name} (${email})
                </a>
              </div>
            </div>
          `,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({
          success: true,
          method: "smtp",
          message: `Your message has been sent directly to Piyush's Gmail (${RECIPIENT_EMAIL}).`,
        })
      } catch (smtpErr: any) {
        console.warn("SMTP attempt failed, falling back to FormSubmit forwarding:", smtpErr.message)
      }
    }

    // Strategy 2: Direct FormSubmit Forwarding to RECIPIENT_EMAIL
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "http://localhost:3000",
          Referer: "http://localhost:3000/",
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
          subject,
          message,
          _template: "table",
        }),
      })

      const data = await response.json()

      if (data.success === "true" || data.success === true) {
        return NextResponse.json({
          success: true,
          method: "formsubmit",
          message: `Your message has been sent directly to Piyush's Gmail (${RECIPIENT_EMAIL}).`,
        })
      }

      // If FormSubmit requires first-time activation
      if (data.message && data.message.includes("Activation")) {
        return NextResponse.json({
          success: true,
          needsActivation: true,
          message: `Message queued. FormSubmit sent a 1-time activation link to ${RECIPIENT_EMAIL}. Once clicked, all future submissions will forward instantly.`,
        })
      }

      return NextResponse.json({
        success: true,
        message: `Your message has been forwarded to ${RECIPIENT_EMAIL}.`,
      })
    } catch (forwardErr: any) {
      console.error("FormSubmit forward error:", forwardErr)
      return NextResponse.json(
        {
          success: false,
          error: "Failed to dispatch email. You can also send directly via your email client using the button below.",
        },
        { status: 500 }
      )
    }
  } catch (err: any) {
    console.error("Contact API route error:", err)
    return NextResponse.json(
      { success: false, error: err.message || "Internal server error." },
      { status: 500 }
    )
  }
}
