# CCR Cool Case Repair — PRD

## Original problem statement
> https://github.com/ljunwoo0105-a11y/CCR import this for the deployment

## Overview
Full-stack Next.js 14 marketing + operations site for **CCR (Cool Case Repair)**,
Orion Springfield Central, QLD. Cloned from the GitHub repo above and wired up
to run in the Emergent preview environment.

## Architecture (as imported)
- **Framework**: Next.js 14 App Router + TypeScript (strict) + Tailwind CSS
- **DB**: Prisma + **PostgreSQL (Neon, ap-southeast-2)** — migrated from SQLite on 2026-01-06. Schema `provider = "postgresql"`, `DATABASE_URL` points at Neon in `frontend/.env`.
- **Auth**: `jose` JWT session cookies + `bcryptjs` password hashing
- **AI**: `@anthropic-ai/sdk` (pricing agents, admin AI console) — needs `ANTHROPIC_API_KEY`
- **Email**: `nodemailer` (falls back to `var/outbox/*.html` in dev)
- **Reviews**: Google Places API sync (needs `GOOGLE_PLACES_API_KEY`)
- **POS**: mock / Loyverse adapter

## Deployment mapping in this environment
- Next.js app placed at `/app/frontend` (supervisor's `frontend` program).
- `package.json` `start` script overridden to run `next dev -H 0.0.0.0 -p 3000`
  so supervisor's `yarn start` boots the dev server on the exposed port.
  Production script preserved as `yarn start:prod` (`next start`).
- `/app/backend/server.py` is a minimal FastAPI stub — the real API lives inside
  Next.js at `/api/*`. Backend program kept alive only to satisfy supervisor.

## Surfaces
| URL | Access |
| --- | --- |
| `/` public marketing + gated quote wizard | Everyone |
| `/staff` price list, intake, inventory, leads | STAFF + ADMIN |
| `/admin` AI console, reviews, users | ADMIN |

## What's been implemented (2026-01-06)
- Cloned CCR repo into `/app/frontend`
- Installed npm deps via `yarn` (Prisma, Next.js 14, Anthropic SDK, etc.)
- Created `/app/frontend/.env` with `AUTH_SECRET`, seeded admin credentials, mock POS
- `prisma generate` + `prisma db push` — SQLite `ccr.db` created
- Seeded: 1 admin, 1 staff, 6 AI models, 4 reviews, 88 sample parts, default settings
- Supervisor `frontend` now runs Next.js dev on port 3000 (verified 200 + real HTML)
- Created FastAPI stub at `/app/backend/server.py` so supervisor `backend` stays RUNNING

## Config that still needs real values (leave blank = feature disabled)
- `ANTHROPIC_API_KEY` — Admin AI console + AI pricing agents
- `GOOGLE_PLACES_API_KEY` — live Google reviews sync
- `SMTP_HOST/PORT/USER/PASS` — real quote emails (currently written to `var/outbox`)
- `LOYVERSE_API_TOKEN` — real inventory sync (POS_PROVIDER currently `mock`)

## Prioritised backlog / Next actions
- P0: user provides `ANTHROPIC_API_KEY` if AI console is needed
- P1: switch DB to PostgreSQL for production (`schema.prisma` provider swap + `DATABASE_URL`)
- P1: set real SMTP so emailed quotes actually go out
- P2: replace placeholder part pricing via Staff → Price List
- P2: run Google Places sync once API key is added

## Test credentials
See `/app/memory/test_credentials.md`.
