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
