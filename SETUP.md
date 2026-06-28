# AI for Everyone - Setup & Deployment Guide

> A static, open-to-all Next.js course. No login, no database - each visitor's
> progress and preferences are stored locally in their own browser.

---

## What You Need

- Node.js 18+ ([nodejs.org](https://nodejs.org))
- A free [GitHub](https://github.com) account
- A free [Vercel](https://vercel.com) account (deploys from GitHub)

There is no Supabase, auth, or database to configure.

---

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To verify a production build before deploying:

```bash
npm run build
```

---

## Environment Variables (all optional)

The site runs fully with no environment variables. They only enable the
optional feedback form. Copy `.env.local.example` to `.env.local` if you want them:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Email submitted feedback via [Resend](https://resend.com). If unset, feedback is not emailed. |
| `KV_REST_API_URL` / `KV_REST_API_TOKEN` | Store feedback in Vercel KV. Auto-provided when you attach a KV store. |

Never commit `.env.local` (it is gitignored).

---

## Deploy to Vercel

1. Push the repo to GitHub.
2. In [Vercel](https://vercel.com), **Add New → Project**, import the GitHub repo.
3. Framework preset: **Next.js** (auto-detected). No build settings to change.
4. (Optional) Add the feedback env vars above under **Settings → Environment Variables**.
5. **Deploy.** Every push to `main` then auto-deploys to production.

---

## Verifiable Certificates (optional)

The `/certificate` page can issue **verifiable** certificates: a learner who
finishes the course enters their name + email, confirms via a one-time magic
link, and gets a certificate with an ID anyone can check at `/verify/{id}`.
This needs three things wired up (it stays disabled/erroring gracefully until then):

1. **Database** - in Vercel: **Storage -> Create Database -> Neon (Postgres)** and
   attach it to the project. It sets `DATABASE_URL` automatically. The two tables
   (`magic_tokens`, `certificates`) are created on first use - no migration step.
2. **Email** - set `RESEND_API_KEY` and verify your sending domain in
   [Resend](https://resend.com). Set `CERT_EMAIL_FROM` to an address on that domain
   (or omit it to use Resend's `onboarding@resend.dev` sandbox sender while testing).
3. **Signing secret** - set `CERT_SIGNING_SECRET` to any long random string.

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Neon/Postgres connection (set automatically by the Vercel integration). |
| `RESEND_API_KEY` | Sends the magic-link confirmation email. |
| `CERT_EMAIL_FROM` | "From" address for that email; defaults to the Resend sandbox sender. |
| `CERT_SIGNING_SECRET` | Secret used to sign issued certificates. |

**Note on trust:** the certificate is issued to a *verified email* and recorded
server-side, so a third party can confirm it is genuine at `/verify/{id}`. Course
*completion itself* is still self-reported by the learner (the site has no login
and does not track per-lesson progress on the server), which is stated on the
certificate. This is an authenticity guarantee, not a proctored exam.

**Test flow:** complete all 80 lessons (or set the gate in dev) -> `/certificate`
-> enter name + email -> click the emailed link -> certificate issues -> open
`/verify/{the-id}` to confirm it resolves.

## Analytics

Google Analytics 4 (`G-ECLX277HV0`) is wired in `src/app/layout.tsx` via
`next/script`, with a route-change tracker (`GoogleAnalytics.tsx`) that sends a
pageview on every client-side navigation. Vercel Analytics is also enabled.
To use your own GA property, change the measurement ID in `layout.tsx` and
`src/components/layout/GoogleAnalytics.tsx`.

---

## Adding Content

The whole course is data-driven from `src/data/course.ts` (the single source of
truth for levels, lessons, and the sitemap). To add a lesson or level, edit that
file plus the lesson page under `src/app/(protected)/levelN/lessonM/`. Per-page
SEO titles are generated automatically from the course data.
