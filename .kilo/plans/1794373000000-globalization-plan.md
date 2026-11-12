# Globalization Plan — RemoteStaff365

**Status:** Draft — awaiting approval before any code changes.  
**Scope:** Make the site fully global-focused for US-based companies hiring offshore virtual assistants worldwide.  
**Do NOT edit source files yet.** This plan is for approval only.

---

## Current State (from audit)

- Rendered content is already global (zero PH references in `app/`, `components/`, `lib/`).
- `package.json` name is `virtualstaff-client` (legacy PH brand).
- Legacy reference notes file was deleted; virtualstaff.ph references removed from REFERENCE_NOTES.md.
- `lib/site.ts:3` `bookingUrl = "https://calendly.com/your-link"` is a hardcoded placeholder used by every CTA.
- `components/forms/JobSeekerForm.tsx:21` countryOptions omits Philippines explicitly (buried under "Other").
- `lib/jobs.ts:23` `regions = ["Asia", "Africa", "Latin America", "Eastern Europe"]` — incomplete global coverage.
- Pricing uses USD `$` (good); no phone field exists anywhere.
- `lang="en"` (good); no hreflang, no schema markup, no explicit canonical override.

---

## New Global Messaging (copy only, no code yet)

| Section | Current | Proposed global replacement |
|---|---|---|
| Hero headline | "Build Your Global Offshore Team, One Seat at a Time" | Keep — already global |
| Hero subheadline | "A better way for US companies to hire dedicated virtual assistants from around the world." | Keep — already global |
| Hero CTA | "Build Your Team" → Calendly | Keep label; retarget to single Calendly URL |
| About mission | "We believe great talent shouldn't be limited by geography. RemoteStaff365 helps US companies hire dedicated offshore virtual assistants..." | Keep — already global |
| Why hire offshore VAs | PricingCards / ValueProps: "$99 seat fee + salary, no markups" | Add explicit "USD — all pricing in US dollars" line; add "Talented VAs worldwide: Philippines, India, Latin America, Eastern Europe, Africa, South Asia" |

**No new copy needed** — existing copy is already global. Changes are retargeting CTAs, adding a USD note, and widening the regions list.

---

## Regions to Feature (no single country dominant)

Feature all regions equally in the UI (JobFilters, hero badges, About stats, marketing copy):

1. Philippines
2. India
3. Latin America (Mexico, Colombia, Brazil, Argentina, etc.)
4. Eastern Europe (Poland, Romania, Ukraine, Georgia, etc.)
5. Africa (South Africa, Kenya, Nigeria, Egypt, etc.)
6. South Asia (Pakistan, Bangladesh, Nepal, Sri Lanka, etc.)
7. Southeast Asia (Malaysia, Vietnam, Indonesia, Thailand, etc.)

Apply these to:
- `lib/jobs.ts` `regions` array (expand beyond 4)
- `JobSeekerForm.tsx` countryOptions (add Philippines, India, South Africa, Mexico, Colombia, etc.)
- Homepage hero badges / TrustedBy stat ("30+ countries with talent")
- Any "Where our talent is based" section added to About

Do not make Philippines the first/default option; alphabetical or random order is fine.

---

## File Changes — Grouped by Category

### Content
- `components/home/Hero.tsx` — keep global copy; retarget CTA to single Calendly URL (no copy change)
- `app/(common)/about/page.tsx` — add "talent sourced worldwide" line + optional regions stat (no PH-specific text)
- `components/home/TrustedBy.tsx` — keep "30+ countries with talent"; consider making regions more prominent
- `components/home/ValueProps.tsx` — add USD note to "One clear fee" card text
- (Legacy reference file deleted — no action needed)

### Metadata / SEO
- `app/layout.tsx` — add explicit canonical link via `alternates.canonical`; add `openGraph.locale`/`alternates` if hreflang desired later; keep `lang="en"`
- `app/sitemap.ts` — keep `remotestaff365.com` base (already global); no PH TLD
- `app/robots.ts` — keep as-is (neutral)

### Data
- `lib/jobs.ts` — expand `regions` array to 7 regions; keep rates in USD `$`; keep employer-side time references (US Pacific/US Eastern) since buyers are US-based
- `lib/site.ts` — replace hardcoded `bookingUrl` placeholder with a single source of truth from env var `NEXT_PUBLIC_CALENDLY_URL` (fallback to current placeholder only in dev)

### Forms
- `components/forms/JobSeekerForm.tsx` — expand `countryOptions` to include Philippines, India, South Africa, Mexico, Colombia, etc.; no phone field exists (flag: if phone added later, use international format, not +63-only)
- `components/forms/EmployerForm.tsx` — no country field (US employers only); no change needed
- `components/forms/ContactForm.tsx` — no country field; no change needed

### Components
- `components/CTASection.tsx` — retarget `primaryHref` default to single Calendly URL constant
- `components/Navbar.tsx` — CTAs already use `bookingUrl` from `lib/site.ts` (no change, just ensure constant is env-driven)
- `components/home/MidCTA.tsx`, `BottomCTA.tsx`, `GrowthPath.tsx`, `PricingCards.tsx`, `ComparisonTable.tsx` — all use `bookingUrl`; no per-component change needed once `lib/site.ts` is single source

### Assets
- `public/images/logo.png` — brand-neutral; keep
- `public/images/banner.webp` — alt text "Remote team working with a US business"; keep
- No PH-colored assets or `.ph` filenames found

### Config / Project identity
- `package.json` — rename `"name": "virtualstaff-client"` → `"remotestaff365-client"`

---

## CTA Consolidation (single Calendly URL)

**Decision:** All CTA buttons ("Build Your Team", "Get Your First Seat", "Hire Now", "Book a Call", "Book an enterprise call") must resolve to ONE Calendly booking URL.

Implementation approach:
1. Add `NEXT_PUBLIC_CALENDLY_URL` to `.env.local` (and `.env.example` if it exists) with the real Calendly link.
2. `lib/site.ts` reads `process.env.NEXT_PUBLIC_CALENDLY_URL` with fallback `"https://calendly.com/your-link"` for dev only.
3. Every CTA uses `bookingUrl` from `lib/site.ts` — already the case for Navbar, CTASection, MidCTA, BottomCTA, GrowthPath, PricingCards, Contact page, Enterprise page.

No per-button hardcoded links allowed after this change.

---

## Risks & Out of Scope

**Out of scope (flag, do not build):**
- Dashboards, admin panels, employer/job-seeker login portals
- Complex backend (payroll, compliance, time tracking, candidate matching engine)
- Multi-language/i18n translation (site remains English-only; `lang="en"`)
- Phone number fields (none exist; if added later, use libphonenumber international format)
- hreflang/multi-locale SEO (can be added later; not blocking)

**Risks:**
- `bookingUrl` placeholder `https://calendly.com/your-link` is currently live on every CTA — must be replaced with real Calendly URL before launch (launch blocker, not PH-specific).
- Renaming `package.json` may affect pnpm workspaces / lockfile; run `pnpm install` after to regenerate `pnpm-lock.yaml`.
- (Legacy reference file deleted — no action needed)

---

## Ordered Checklist (approve before coding)

1. [ ] Approve this plan (content, regions, CTA consolidation, out-of-scope items)
2. [ ] Rename `package.json` `"name"` to `"remotestaff365-client"`
3. [ ] Add `NEXT_PUBLIC_CALENDLY_URL` env var + fallback in `lib/site.ts` (single source of truth for all CTAs)
4. [ ] Expand `lib/jobs.ts` `regions` array to 7 global regions (no PH dominance)
5. [ ] Expand `JobSeekerForm.tsx` `countryOptions` to include Philippines, India, South Africa, Mexico, Colombia, etc.
6. [ ] Add explicit "USD — all pricing in US dollars" note to pricing/value-props copy
7. [ ] Add "talent sourced worldwide / no single country dominant" line to About page
8. [ ] (Legacy reference file deleted — task complete)
9. [ ] Verify no remaining `.ph`, `virtualstaff`, `Pinoy`, `Filipino`, `+63`, `peso`, `₱` in rendered code (re-run audit grep)
10. [ ] Run `pnpm install` + `npm run build` to confirm no breakage (validation)

---

## Validation Plan

- Re-run the Philippines-term grep from the audit; expect zero matches in `app/`, `components/`, `lib/`, `public/`.
- `npm run build` must pass (Next.js build).
- All CTA buttons resolve to `bookingUrl` from `lib/site.ts`; no hardcoded Calendly links remain.
- `package.json` name is `remotestaff365-client`.

---

## Open Question (must be resolved before coding)

**Should `bookingUrl` come strictly from `NEXT_PUBLIC_CALENDLY_URL` env var (required at build time), or should `lib/site.ts` keep a dev fallback placeholder?**  
Recommended: required env var with no silent fallback in production; dev-only placeholder acceptable.

---

Ready for your approval. Once approved, I can hand this off to an implementation-capable agent.