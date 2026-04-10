# AI for Everyone — Deployment Guide

> **Time to deploy: ~20 minutes.** Follow steps in order.

---

## What You Need

- A computer with Node.js 18+ installed ([nodejs.org](https://nodejs.org))
- A free [Supabase](https://supabase.com) account
- A free [Vercel](https://vercel.com) account
- A free [GitHub](https://github.com) account (Vercel deploys from GitHub)

---

## Step 1 — Set Up Supabase (5 min)

1. Go to [supabase.com](https://supabase.com) and sign in / create a free account
2. Click **"New Project"** → give it a name like `ai-course` → set a database password → **Create project**
3. Wait ~1 minute for the project to provision
4. Click **SQL Editor** in the left sidebar
5. Paste and run this SQL to create the progress table:

```sql
create table if not exists user_progress (
  username   text primary key,
  progress   jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Disable Row Level Security (we handle auth ourselves)
alter table user_progress disable row level security;
```

6. Click **Settings → API** in the left sidebar
7. Copy these two values — you'll need them in Step 3:
   - **Project URL** (looks like `https://abc123.supabase.co`) https://rpmbrinkeoxcyvtweqon.supabase.co
   - **service_role key** (under "Project API keys" — click to reveal)
   REDACTED-SUPABASE-SERVICE-ROLE-KEY

---

## Step 2 — Configure Users (2 min)

Open `src/config/users.ts` in a text editor.

Change the default admin user and add your students:

```typescript
const USERS: CourseUser[] = [
  {
    username: 'jay',
    password: 'your-secure-password',  // ← change this!
    displayName: 'Jay',
    role: 'admin',
  },
  {
    username: 'alice',
    password: 'alice-password',
    displayName: 'Alice',
    role: 'student',
  },
  // Add more students here...
]
```

> **Security note:** Passwords are stored in plain text in this file. This is fine for a private internal course. The file is never exposed to users (it's server-side only). For a public product, use a proper database and password hashing.

---

## Step 3 — Test Locally (5 min)

1. Open a terminal and navigate to the project folder:
   ```bash
   cd ai-course-next
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment file:
   ```bash
   cp .env.local.example .env.local
   ```

4. Edit `.env.local` with your values:
   ```
   SESSION_PASSWORD=REDACTED-SESSION-PASSWORD
   SUPABASE_URL=https://rpmbrinkeoxcyvtweqon.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=REDACTED-SUPABASE-SERVICE-ROLE-KEY
   ```

   > Generate a SESSION_PASSWORD at: https://randomkeygen.com/ (use "256-bit WEP key" — just use the first 32+ characters)

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) — you should see the login page
7. Log in with your username and password
8. Click through a few lessons and mark one complete — verify progress saves

---

## Step 4 — Deploy to Vercel (8 min)

### 4a — Push to GitHub

1. Create a new repository on [github.com](https://github.com) (keep it **private**)
2. In your terminal:
   ```bash
   git init
   git add .
   git commit -m "Initial course deployment"
   git remote add origin https://github.com/YOUR-USERNAME/ai-course.git
   git push -u origin main
   ```

### 4b — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select your `ai-course` repository → click **Import**
4. Vercel auto-detects Next.js — no framework settings to change
5. Expand **"Environment Variables"** and add:
   | Name | Value |
   |------|-------|
   | `SESSION_PASSWORD` | your-32-char-random-string |
   | `SUPABASE_URL` | https://your-project.supabase.co |
   | `SUPABASE_SERVICE_ROLE_KEY` | your-service-role-key |

6. Click **Deploy** — Vercel builds and deploys in ~2 minutes
7. Your site is live at `https://your-project.vercel.app` 🎉

### 4c — Custom Domain (Optional)

In Vercel Dashboard → your project → **Settings → Domains** → add your domain and follow the DNS instructions.

---

## Step 5 — Share with Students

Send your students:
- The URL (e.g. `https://ai-course.vercel.app`)
- Their username and password from `config/users.ts`

---

## Adding New Users Later

1. Edit `src/config/users.ts` — add the new user to the array
2. Commit and push to GitHub:
   ```bash
   git add src/config/users.ts
   git commit -m "Add new student: name"
   git push
   ```
3. Vercel automatically redeploys in ~60 seconds

---

## Troubleshooting

**Build fails with "SESSION_PASSWORD not set"**
→ Make sure all 3 environment variables are set in Vercel Dashboard → Settings → Environment Variables

**Login works but progress doesn't save**
→ Check that the `user_progress` table was created in Supabase (Step 1, Step 5)
→ Verify `SUPABASE_SERVICE_ROLE_KEY` is correct (not the anon key)

**"Invalid username or password" on correct credentials**
→ Usernames are case-insensitive but passwords are case-sensitive
→ Double-check `src/config/users.ts` — did you save after editing?

**Vercel deployment fails**
→ Check the Vercel build logs for the specific error
→ Most common issue: TypeScript errors in lesson pages — check the terminal output

**Progress resets after redeployment**
→ This is expected if you're using localStorage. With Supabase, progress persists across deployments.

---

## Project Structure Reference

```
ai-course-next/
├── src/
│   ├── app/
│   │   ├── (protected)/          # All pages requiring login
│   │   │   ├── layout.tsx        # Auth check + loads session
│   │   │   ├── level0/           # Level 0 lesson pages
│   │   │   ├── level1/           # Level 1 lesson pages
│   │   │   └── tools/            # Quiz, Prompt Library, Glossary
│   │   ├── api/auth/             # Login / logout / me endpoints
│   │   ├── api/progress/         # Progress save/load endpoint
│   │   ├── login/page.tsx        # Login page
│   │   └── page.tsx              # Home / landing page
│   ├── components/               # Reusable UI components
│   ├── config/users.ts           # ← Edit this to add/remove students
│   ├── contexts/                 # Auth + Progress React contexts
│   └── lib/                      # Supabase client, session config
├── .env.local.example            # Copy to .env.local with real values
├── vercel.json                   # Vercel deployment config
└── SETUP.md                      # This file
```

---

## Costs

| Service | Free Tier | When You'd Need to Pay |
|---------|-----------|----------------------|
| Vercel | 100GB bandwidth, unlimited deploys | >100GB/month traffic |
| Supabase | 500MB database, 50k MAU | >500MB data or >50k users |
| **Total** | **$0** | When you scale to thousands of users |

For a private course with <100 students: **completely free, forever.**

---

*Built with Next.js 14, iron-session, and Supabase. Deploy questions? Check the Vercel and Supabase documentation.*
