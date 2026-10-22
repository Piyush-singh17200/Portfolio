# Piyush Singh — Portfolio

Personal portfolio and resume site for **Piyush Singh**, a full-stack developer working with the MERN stack, Next.js, TypeScript, and AI integrations.

**Live:** [https://piyushsingh.tech](https://piyushsingh.tech)

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS + shadcn/ui primitives
- Framer Motion
- Nodemailer / FormSubmit for contact email
- Vercel Analytics
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint .
npm run build       # production build
npm start           # serve the production build
```

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL; defaults to `https://piyushsingh.tech` |
| `CONTACT_RECIPIENT_EMAIL` | No | Contact form recipient; defaults to the email in `lib/resume-data.ts` |
| `GMAIL_USER` | No | Gmail address for direct SMTP delivery |
| `GMAIL_APP_PASSWORD` | No | Gmail App Password (not your normal password) |

Without Gmail SMTP credentials, the contact form falls back to FormSubmit. The first submission triggers a one-time activation email.

## Content

All resume content lives in [`lib/resume-data.ts`](lib/resume-data.ts). Projects, skills, certificates, education, and the timeline are rendered from that single source.

Case studies are available at `/projects/[slug]` and are generated from the same data. Project covers live in `public/projects/`.

The printable resume is at `/resume`; the static PDF is `public/Piyush_Singh_Resume.pdf`. Keep the PDF in sync when the data changes, or use **Print / Save PDF** from the resume page.

## Deployment

The repository is connected to Vercel. Pushing to `main` triggers a production deployment.

For a manual deployment:

```bash
npm run build
```

Deploy the generated app with Vercel, and set the environment variables above in the project settings.

## Project structure

```text
app/
  api/contact/        Contact form endpoint
  projects/[slug]/    Generated case-study pages
  resume/             Printable resume page
  opengraph-image.tsx Dynamic social preview image
  sitemap.ts          Sitemap
  robots.ts           Crawler rules
components/           Page sections and UI
hooks/                Active-section and UI hooks
lib/                  Resume data, site config, analytics
public/               Icons, PDF, project covers
```

## Notes

- Security headers are configured in `next.config.mjs`.
- Contact submissions have validation, a honeypot, and an in-memory rate limit. For multi-instance production traffic, swap the in-memory limiter for Upstash Redis or Vercel KV.
- SEO metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots, and manifest are included.
