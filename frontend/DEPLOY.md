# Deploying CCR to Vercel

CCR is a Next.js 14 App Router app. Vercel is the recommended host — free tier
easily covers a Springfield Central kiosk repair shop's traffic.

## One-time setup

1. **Push the repo to GitHub** (use Emergent's "Save to GitHub" button in chat).

2. **Import into Vercel**
   - https://vercel.com/new
   - Pick your GitHub repo
   - **Root Directory: `frontend`** ← important; the Next.js app lives in `/frontend`
   - Framework Preset: **Next.js** (auto-detected)
   - Leave Build Command and Output Directory as default — `vercel.json` already
     tells Vercel to run `prisma generate && next build`.

3. **Set environment variables** (Vercel dashboard → Settings → Environment Variables).
   Copy values from your `.env`. Minimum required:

   | Name | Value |
   | --- | --- |
   | `DATABASE_URL` | Your Neon connection string (`postgresql://…?sslmode=require`) |
   | `AUTH_SECRET` | Long random string (`openssl rand -base64 48`) |
   | `NEXT_PUBLIC_SITE_URL` | `https://<your-project>.vercel.app` (update after first deploy) |
   | `GOOGLE_PLACE_ID` | `ChIJT_o9vItLkWsRgHNb73gMvOA` |
   | `POS_PROVIDER` | `mock` (or `loyverse` if you have a token) |

   Optional (add when you enable each feature):
   - `ANTHROPIC_API_KEY` — Admin AI console + AI pricing agents
   - `GOOGLE_PLACES_API_KEY` — live Google reviews sync
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` — real quote emails
   - `LOYVERSE_API_TOKEN` — real POS inventory sync

4. **Click Deploy.** First build takes ~2 minutes.

5. **First-time database migration** (only after the very first deploy or
   after a schema change). From your local machine, pointing at Neon:
   ```bash
   cd frontend
   npx prisma db push          # apply schema
   npx tsx prisma/seed.ts       # seed admin/staff/parts/reviews
   ```
   Prints the initial admin + staff passwords — save them, change after first login.

## Custom domain

Vercel → Settings → Domains → add `coolcaserepair.com.au` (or whatever you own).
Vercel gives DNS records to paste into your registrar. Free HTTPS is automatic.
After the domain is live, update `NEXT_PUBLIC_SITE_URL` to it and redeploy so
sitemap/emails/JSON-LD point at the real URL.

## Ongoing deploys

Every `git push` to your default branch → automatic Vercel deploy.
Preview branches get their own preview URLs — great for testing before
merging to main.

## Why not Emergent native deploy?

Emergent's native buildpack targets React CRA + FastAPI + MongoDB.
CCR is a Next.js app (Node.js server + Prisma + Postgres), so it needs a
Next.js-native platform like Vercel, Railway, or Fly.io. Vercel is the
smallest amount of setup for the best result.
