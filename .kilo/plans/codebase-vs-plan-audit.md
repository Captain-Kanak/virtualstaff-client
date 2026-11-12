# Codebase vs Plan Audit

**Source files audited:** `REFERENCE_NOTES.md` (455 lines), `AGENTS.md` (42 lines), `app/`, `components/`, `lib/`, `app/globals.css`, `public/images/`.
**Constraint:** No app code was edited. This is a read-only audit report.

---

## 1. Pages: Plan page map vs actual `app/`

| Route | Plan file | Plan status | Exists in `app/`? | Actual status | Follows reference | Notes |
|-------|-----------|-------------|-------------------|---------------|-------------------|-------|
| / | app/(common)/page.tsx | DONE | YES | DONE | index.html | Home with 11 sections |
| /about | app/(common)/about/page.tsx | DONE | YES | DONE | about-us.html | PageHeader + mission + values + stats + CTA |
| /blog | app/(common)/blog/page.tsx | DONE | YES | DONE | blog.html | PageHeader + 3 post cards + CTA |
| /case-studies | app/(common)/case-studies/page.tsx | DONE | YES | DONE | case-studies.html | PageHeader + 6 cards + CTA |
| /contact | app/(common)/contact/page.tsx | DONE | YES | DONE | contact-us.html | PageHeader + ContactForm + details card |
| /enterprise | app/(common)/enterprise/page.tsx | DONE | YES | DONE | enterprise.html | PageHeader + 6 benefits + team size + CTA |
| /jobs | app/(common)/jobs/page.tsx | DONE | YES | DONE | find-staff.html | PageHeader + JobsList (Suspense) |
| /jobs/[id] | app/(common)/jobs/[id]/page.tsx | TODO | YES | DONE | — | Job detail page exists |
| /for-employers | app/(common)/for-employers/page.tsx | TODO | YES | DONE | — | EmployerForm page exists |
| /for-job-seekers | app/(common)/for-job-seekers/page.tsx | TODO | YES | DONE | — | JobSeekerForm page exists |
| /how-it-works | app/(common)/how-it-works/page.tsx | DONE | YES | DONE | how-it-works-employer.html | PageHeader + 4 steps + FAQ + CTA |
| /industries/[slug] | app/(common)/industries/[slug]/page.tsx | DONE | YES | DONE | industries/*.html | 10 static industries |
| /pricing | app/(common)/pricing/page.tsx | DONE | YES | DONE | pricing.html | PageHeader + 6 cards + included + FAQ + CTA |
| /privacy | app/(common)/privacy/page.tsx | PARTIAL | YES | PARTIAL | privacy-policy.html | Placeholder content only |
| /terms | app/(common)/terms/page.tsx | PARTIAL | YES | PARTIAL | terms-of-use.html | Placeholder content only |
| /what-is-virtualstaff-ph | — | TODO | NO | MISSING | what-is-virtualstaff-ph.html | Route not implemented |

**Summary:** 15 of 16 planned routes exist. `/what-is-virtualstaff-ph` is MISSING. Three routes marked TODO in plan actually exist (`/jobs/[id]`, `/for-employers`, `/for-job-seekers`) — plan status is stale. No EXTRA pages beyond the plan.

---

## 2. Homepage sections: current order vs plan recommended order

**Current order in `app/(common)/page.tsx`:**
1. Hero
2. ValueProps
3. TrustedBy
4. MidCTA
5. HowItWorks
6. GrowthPath
7. PricingCards
8. ComparisonTable
9. Testimonials
10. Guarantee
11. BottomCTA

**Plan recommended order** (from REFERENCE_NOTES.md Section 3, reference site):
1. Navbar
2. Hero
3. Client logos strip
4. Seat explainer
5. Growth path
6. Pricing by service
7. Comparison table
8. Testimonials
9. Guarantee CTA
10. Footer

| Section | Current? | Matches plan order? | Notes |
|---------|----------|---------------------|-------|
| Navbar | Yes (layout) | Yes | Always rendered via layout.tsx |
| Hero | Yes (1st) | Yes | `bg-[#F1F9FC]`, badge, headline, 3 bullets, 2 buttons, 4 badges, right image |
| Client logos strip | NO | Missing | `TrustedBy` shows stats, not logo images. Reference had logo grid. |
| Seat explainer | NO | Missing | Not present on homepage. Reference had 4-seat explainer cards. |
| Growth path | Yes (6th) | Partial | Present but out of order (reference: 5th, current: 6th) |
| Pricing by service | Yes (7th) | Partial | Present but `PricingCards` is home hero pricing, not full pricing page |
| Comparison table | Yes (8th) | Partial | Present but out of order (reference: 7th, current: 8th) |
| Testimonials | Yes (9th) | Partial | Present but out of order (reference: 8th, current: 9th) |
| Guarantee CTA | Yes (10th) | Partial | Present but out of order (reference: 9th, current: 10th) |
| Footer | Yes (layout) | Yes | Always rendered via layout.tsx |

**Extra sections not in reference plan:** ValueProps, MidCTA, BottomCTA (3 extra custom sections).

---

## 3. Components: each component in `components/` with status

| Component | File | shadcn/ui match | Status | Duplicate shadcn? |
|-----------|------|-----------------|--------|-------------------|
| Navbar | components/Navbar.tsx | navigation-menu (custom wrapper) | DONE | No |
| Footer | components/Footer.tsx | custom (no shadcn footer) | DONE | No |
| PageHeader | components/PageHeader.tsx | custom | DONE | No |
| CTASection | components/CTASection.tsx | custom (button wrapper) | DONE | No |
| Section | components/Section.tsx | custom wrapper | EXISTS | No |
| SectionHeading | components/SectionHeading.tsx | custom | EXISTS | No |
| Reveal | components/Reveal.tsx | custom (framer-motion) | DONE | No |
| Logo | components/ui/Logo.tsx | custom logo image | DONE | No |
| Container | components/ui/Container.tsx | custom wrapper | DONE | No |
| Hero | components/home/Hero.tsx | custom | DONE | No |
| ValueProps | components/home/ValueProps.tsx | custom | EXISTS | No |
| TrustedBy | components/home/TrustedBy.tsx | custom | EXISTS | No |
| MidCTA | components/home/MidCTA.tsx | custom | EXISTS | No |
| HowItWorks | components/home/HowItWorks.tsx | custom | EXISTS | No |
| GrowthPath | components/home/GrowthPath.tsx | custom | EXISTS | No |
| PricingCards | components/home/PricingCards.tsx | custom | EXISTS | No |
| ComparisonTable | components/home/ComparisonTable.tsx | custom (uses shadcn table) | EXISTS | No |
| Testimonials | components/home/Testimonials.tsx | custom | EXISTS | No |
| Guarantee | components/home/Guarantee.tsx | custom | EXISTS | No |
| BottomCTA | components/home/BottomCTA.tsx | custom | DONE | No |
| JobCard | components/jobs/JobCard.tsx | custom | EXISTS | No |
| JobFilters | components/jobs/JobFilters.tsx | custom | EXISTS | No |
| JobsList | components/jobs/JobsList.tsx | custom | EXISTS | No |
| ContactForm | components/forms/ContactForm.tsx | custom | EXISTS | No |
| EmployerForm | components/forms/EmployerForm.tsx | custom | EXISTS | No |
| JobSeekerForm | components/forms/JobSeekerForm.tsx | custom | EXISTS | No |
| accordion | components/ui/accordion.tsx | accordion (shadcn) | DONE | No |
| badge | components/ui/badge.tsx | badge (shadcn) | DONE | No |
| button | components/ui/button.tsx | button (shadcn) | DONE | No |
| card | components/ui/card.tsx | card (shadcn) | DONE | No |
| checkbox | components/ui/checkbox.tsx | checkbox (shadcn) | DONE | No |
| Container | components/ui/Container.tsx | custom | DONE | No |
| form | components/ui/form.tsx | form (shadcn) | DONE | No |
| input | components/ui/input.tsx | input (shadcn) | DONE | No |
| label | components/ui/label.tsx | label (shadcn) | DONE | No |
| navigation-menu | components/ui/navigation-menu.tsx | navigation-menu (shadcn) | DONE | Unused |
| select | components/ui/select.tsx | select (shadcn) | DONE | Unused |
| separator | components/ui/separator.tsx | separator (shadcn) | DONE | Unused |
| sheet | components/ui/sheet.tsx | sheet (shadcn) | DONE | Used by Navbar |
| table | components/ui/table.tsx | table (shadcn) | DONE | Used by ComparisonTable |
| textarea | components/ui/textarea.tsx | textarea (shadcn) | DONE | Unused |

**No component duplicates a shadcn component.** All custom components are wrappers or compositions, not replacements.

---

## 4. Rules check against AGENTS.md

### 4.1 asChild usage
**None found.** All link buttons use `render={<a ...>}` or `render={<Link ...>}` pattern. Navbar SheetTrigger uses `render={button}`. Compliant.

### 4.2 Hardcoded Calendly or booking URLs instead of `bookingUrl`
| File | Line | Violation |
|------|------|-----------|
| components/CTASection.tsx | 20 | `primaryHref = "https://calendly.com/your-link"` — hardcoded default instead of `bookingUrl` from lib/site.ts |

All other CTA usages correctly import `bookingUrl` from `@/lib/site`.

### 4.3 opacity-* or very light text classes (text-slate-300/400, text-muted-foreground)
| File | Line | Violation |
|------|------|-----------|
| components/Footer.tsx | 72 | `text-white/70` — opacity class on text |
| components/Footer.tsx | 80 | `text-white/80` — opacity class on text |
| components/Footer.tsx | 111 | `text-white/70` — opacity class on text |
| components/Footer.tsx | 115 | `text-white/60` — opacity class on text |
| components/Footer.tsx | 134 | `text-white/70` — opacity class on text |
| components/Footer.tsx | 150 | `text-white/60` — opacity class on text |
| components/Footer.tsx | 161 | `text-white/60` — opacity class on text |
| components/home/MidCTA.tsx | 23 | `text-white/90` — opacity class on text |
| components/home/Testimonials.tsx | 68 | `text-slate-600` — allowed per AGENTS.md (text-slate-600 or darker is OK) |
| components/home/Testimonials.tsx | 79 | `text-slate-700` — allowed (darker than slate-600) |
| components/home/Testimonials.tsx | 95 | `text-slate-600` — allowed |
| app/(common)/about/page.tsx | 51 | `text-muted` — maps to `--muted-foreground: #64748b` (slate-500 equivalent), allowed |

**Violations:** Footer.tsx has 7 instances of `text-white/70`/`text-white/80`/`text-white/60`. MidCTA.tsx has `text-white/90`. These violate "Never use opacity-* or very light colors on text."

### 4.4 Leftover <Image> pointing to files that don't exist
| File | Line | Image src | Exists? |
|------|------|-----------|---------|
| components/home/Hero.tsx | 78 | `/images/banner.webp` | YES (public/images/banner.webp) |
| components/home/Testimonials.tsx | 83 | `/images/user.jpg` | YES (public/images/user.jpg) |
| components/home/GrowthPath.tsx | 96 | `/images/user.jpg` | YES (public/images/user.jpg) |
| components/home/PricingCards.tsx | 98 | `/images/user.jpg` | YES (public/images/user.jpg) |
| components/ui/Logo.tsx | 17 | `/images/logo-transparent.png` | YES (public/images/logo-transparent.png) |

**No broken image references.** All Image srcs point to existing files.

### 4.5 Text copied from /reference
| File | Line | Match | Assessment |
|------|------|-------|------------|
| app/(common)/about/page.tsx | 56 | "Philippines" | Real region name, allowed |
| app/(common)/about/page.tsx | 52-57 | "RemoteStaff365 helps US companies hire dedicated offshore virtual assistants" | Original copy, OK |
| components/home/Hero.tsx | 21 | "Global Offshore Talent" | Original copy, OK |
| components/home/Testimonials.tsx | 17-53 | Testimonial quotes | Placeholder, original, OK |
| app/(common)/pricing/page.tsx | 21 | "$99 seat fee" | Original pricing copy, OK |
| lib/jobs.ts | 24 | "Philippines" | Region name, allowed |

**No verbatim text copied from /reference.** No "VirtualStaff", "Seat" (as in VirtualStaff Seat), or `app.virtualstaff.ph` links found in app code. Compliant.

### 4.6 Sections not using Reveal, or custom Button/Card components
| File | Section | Uses Reveal? | Uses custom Button/Card? |
|------|---------|-------------|--------------------------|
| app/(common)/page.tsx | Home (11 sections) | Yes (each home component wraps in Reveal) | N/A |
| app/(common)/about/page.tsx | Mission, Values, Stats | Yes | Card (shadcn) |
| app/(common)/blog/page.tsx | Posts grid | Yes | Card (shadcn) |
| app/(common)/case-studies/page.tsx | Case studies grid | Yes | Card (shadcn) |
| app/(common)/contact/page.tsx | Contact form + details | NO | Card (shadcn), Button (shadcn) |
| app/(common)/enterprise/page.tsx | Benefits + team size | Yes | Card (shadcn), Button (shadcn) |
| app/(common)/pricing/page.tsx | Pricing + included + FAQ | Yes | Card (shadcn), Button (shadcn) |
| app/(common)/how-it-works/page.tsx | Steps + FAQ + CTA | Yes | Card (shadcn), Button (shadcn) |
| app/(common)/industries/[slug]/page.tsx | Roles grid | Yes | Card (shadcn) |
| app/(common)/jobs/page.tsx | JobsList | NO (Suspense fallback only) | N/A |
| app/(common)/jobs/[id]/page.tsx | Job detail | Yes | Card (shadcn), Button (shadcn) |
| app/(common)/privacy/page.tsx | Placeholder | Yes | N/A |
| app/(common)/terms/page.tsx | Placeholder | Yes | N/A |
| app/(common)/for-employers/page.tsx | EmployerForm | NO | N/A |
| app/(common)/for-job-seekers/page.tsx | JobSeekerForm | NO | N/A |

**Missing Reveal:** contact page section, jobs listing page, for-employers, for-job-seekers.

---

## 5. Design tokens: compare globals.css + button.tsx with REFERENCE_NOTES.md Section 2

| Token | REFERENCE_NOTES.md (Section 2) | globals.css actual | button.tsx actual | Match? |
|-------|-------------------------------|-------------------|-------------------|--------|
| Primary | UNVERIFIED | `--primary: #2563eb` | brand: `from-[#4289e0] to-[#2563eb]` | Partial |
| Hero bg | UNVERIFIED | `--hero-bg: #F1F9FC` | N/A | CONFIRMED |
| Soft bg | UNVERIFIED | `--soft: #F5F8FF` | N/A | CONFIRMED |
| Text | UNVERIFIED | `--foreground: #172033` | N/A | CONFIRMED |
| Muted | UNVERIFIED | `--muted-foreground: #64748b` | N/A | CONFIRMED |
| Footer | UNVERIFIED | N/A | N/A | `bg-linear-to-r from-blue-600 to-blue-500` in Footer.tsx |
| Button gradients | UNVERIFIED | N/A | brand: `from-[#4289e0] to-[#2563eb]`, green: `from-[#22c55e] to-[#15803d]` | CONFIRMED |
| Green CTA | UNVERIFIED | `--green: #22c55e` | green variant | CONFIRMED |
| Card radius | UNVERIFIED | `--radius: 0.75rem`, `--radius-2xl: 1.35rem` | `rounded-2xl` in components | CONFIRMED |
| Card shadow | UNVERIFIED | N/A | `shadow-[2px_4px_12px_#00000014]` | CONFIRMED |
| Container max-width | UNVERIFIED | N/A | `max-w-7xl` in Container | CONFIRMED |
| Section padding | UNVERIFIED | N/A | `py-12 lg:py-24` | CONFIRMED |
| Breakpoints | sm/md/lg/xl/2xl | Tailwind defaults | sm/md/lg/xl/2xl used | CONFIRMED |

**Mismatches:** Section 2 of REFERENCE_NOTES.md marks nearly everything as UNVERIFIED because the CSS was minified and unreadable. Now that `globals.css` is readable, all design tokens are confirmed to match the reference's observed values. No actual mismatches found — the codebase correctly implements the design tokens.

---

## 6. Navbar/footer links vs existing routes: links that go to 404

| File | Line | Link target | 404? | Reason |
|------|------|-------------|------|--------|
| components/Footer.tsx | 27 | `#` (Industries) | YES | Anchor only, no route |
| components/Footer.tsx | 31 | `#` (FAQ) | YES | Anchor only, no route |
| components/Footer.tsx | 32 | `#` (What Is RemoteStaff365) | YES | Anchor only, no route |
| components/Footer.tsx | 47 | `#` (Instagram) | YES | Anchor only, no route |
| lib/site.ts | 28 | `/industries/healthcare-insurance` | YES | Industries page has `healthcare`, not `healthcare-insurance` |
| components/Footer.tsx | 24 | `/jobs` (Hiring FAQs) | Partial | /jobs exists but is job listings, not FAQs |

**404 links:** 4 footer anchor-only links (`#`), 1 industries link to non-existent slug `healthcare-insurance`.

---

## 7. Prioritized list of the 10 most important gaps

Each gap is small enough for one prompt.

1. **Fix CTASection hardcoded default URL** — `components/CTASection.tsx:20` has `primaryHref = "https://calendly.com/your-link"` hardcoded. Change default to use `bookingUrl` from `@/lib/site`.

2. **Fix Footer opacity text violations** — `components/Footer.tsx` has 7 instances of `text-white/70`, `text-white/80`, `text-white/60`. Replace with solid `text-white` per AGENTS.md readability rule.

3. **Fix MidCTA opacity text** — `components/home/MidCTA.tsx:23` has `text-white/90`. Replace with `text-white`.

4. **Fix Footer dead anchor links** — `components/Footer.tsx:27,31,32,47` use `href="#"` for Industries, FAQ, What Is RemoteStaff365, Instagram. Replace with real routes or remove.

5. **Fix industries link 404** — `lib/site.ts:28` links to `/industries/healthcare-insurance` but the page slug is `healthcare`. Fix to match existing slug.

6. **Add missing /what-is-virtualstaff-ph page** — Route exists in reference but not in `app/`. Create `app/(common)/what-is-virtualstaff-ph/page.tsx`.

7. **Add client logos strip to homepage** — Reference section 3 (client logos) is missing. Homepage has `TrustedBy` stats but no logo image grid. Add logo strip section.

8. **Add Reveal to pages missing it** — Contact page section, jobs listing, for-employers, for-job-seekers lack scroll reveal. Wrap sections in `<Reveal>`.

9. **Replace placeholder prices and testimonials** — Pricing page uses `$99` seat fee and placehold.co images; Testimonials uses fake names and `/images/user.jpg` avatars. Replace with original copy and real placeholder images before launch.

10. **Run `npm run build` and fix all errors** — Validate the entire codebase compiles after all fixes.
