# Plan: REFERENCE_NOTES.md Section 6 — Build plan for RemoteStaff365

**Goal:** Append "## 6. Build plan for RemoteStaff365" to `REFERENCE_NOTES.md`. Include:
1. Page map table (every route, status DONE/PARTIAL/TODO, which reference page it follows)
2. Component map (each component in components/ with status)
3. Brand changes (global offshore VAs for US companies, not Philippines-only; all signup/login → bookingUrl; no login/dashboards/admin; original copy + placeholder images only)
4. Known issues and decisions (logo image only in navbar, banner image at public/images/banner.webp without a box, faint text problem, placeholder prices and testimonials to replace before launch)
5. Prioritized TODO list (next 10 tasks, each small enough for one prompt)
6. "How to use this file" note (every future prompt starts with "Read REFERENCE_NOTES.md and AGENTS.md")

Stop after section 6.

**Blocked:** I am in Plan Mode — cannot write/edit `REFERENCE_NOTES.md` directly (write/edit tools denied for non-plan files).

## Already confirmed (from codebase reads)

### Existing routes in app/(common)/
| File | Route | Status | Notes |
|------|-------|--------|-------|
| page.tsx | / | DONE | Home with 11 home components (Hero, ValueProps, TrustedBy, MidCTA, HowItWorks, GrowthPath, PricingCards, ComparisonTable, Testimonials, Guarantee, BottomCTA) |
| about/page.tsx | /about | DONE | PageHeader + 3 sections (mission, values, stats) + CTASection |
| how-it-works/page.tsx | /how-it-works | DONE | 4 step cards + FAQ accordion + CTA hero |
| pricing/page.tsx | /pricing | DONE | 6 pricing cards + included list + FAQ accordion + CTASection |
| case-studies/page.tsx | /case-studies | DONE | 6 case study cards + CTASection |
| enterprise/page.tsx | /enterprise | DONE | 6 benefit cards + seat tiers + CTASection |
| contact/page.tsx | /contact | DONE | ContactForm + contact details card + CTA |
| blog/page.tsx | /blog | DONE | 3 blog post cards + CTASection |
| industries/[slug]/page.tsx | /industries/[slug] | DONE | 10 static industries + roles cards + CTASection |
| terms/page.tsx | /terms | PARTIAL | Placeholder text only |
| privacy/page.tsx | /privacy | PARTIAL | Placeholder text only |
| jobs/page.tsx | /jobs | DONE | JobsList + Suspense |
| jobs/[id]/page.tsx | /jobs/[id] | TODO | Route file exists, needs review |
| for-employers/page.tsx | /for-employers | TODO | Exists, needs review |
| for-job-seekers/page.tsx | /for-job-seekers | TODO | Exists, needs review |

### Reference pages (from REFERENCE_NOTES.md section 1.3)
Real reference pages: index, about-us, blog, case-studies, contact-us, enterprise, find-staff, hiring-faqs, how-it-works-employer, pricing, privacy-policy, terms-of-use, what-is-virtualstaff-ph, industries (11 sub-pages). Guarantee pages are 24,617-byte stubs (dead in ref).

### Components in components/
| Component | Status | Notes |
|-----------|--------|-------|
| Navbar.tsx | DONE | Logo + navLinks (How It Works, Pricing, Case Studies, Enterprise, Jobs) + "Build Your Team" CTA → bookingUrl + mobile Sheet |
| Footer.tsx | DONE | 4 columns + social icons + legal links |
| PageHeader.tsx | DONE | eyebrow/title/subtitle, bg-[#F1F9FC] |
| CTASection.tsx | DONE | brand + outline buttons, bookingUrl default |
| Section.tsx | DONE | py-20 lg:py-32, max-w-7xl container |
| SectionHeading.tsx | DONE | eyebrow/title/description |
| Reveal.tsx | DONE | framer-motion scroll reveal |
| Logo.tsx | DONE | /images/logo-transparent.png, default/light variants |
| Container.tsx | DONE | max-w-7xl |
| home/Hero.tsx | DONE | badge, headline, subhead, 3 bullets, 2 buttons, 4 trust badges, right-side banner image |
| home/ValueProps.tsx | exists | need to review |
| home/TrustedBy.tsx | exists | need to review |
| home/MidCTA.tsx | exists | need to review |
| home/HowItWorks.tsx | exists | need to review |
| home/GrowthPath.tsx | exists | need to review |
| home/PricingCards.tsx | exists | need to review |
| home/ComparisonTable.tsx | exists | need to review |
| home/Testimonials.tsx | exists | need to review |
| home/Guarantee.tsx | exists | need to review |
| home/BottomCTA.tsx | DONE | gradient CTA, "Build Your Team" → bookingUrl |
| jobs/JobCard.tsx | exists | need to review |
| jobs/JobFilters.tsx | exists | need to review |
| jobs/JobsList.tsx | exists | need to review |
| forms/ContactForm.tsx | exists | need to review |
| forms/EmployerForm.tsx | exists | need to review |
| forms/JobSeekerForm.tsx | exists | need to review |
| ui/ (16 files) | DONE | accordion, badge, button, card, checkbox, Container, form, input, label, Logo, navigation-menu, select, separator, sheet, table, textarea |

### Known issues (from AGENTS.md + observations)
- Logo image only in navbar (footer uses light variant too)
- Banner image at public/images/banner.webp without a box (Hero uses plain Image, no container/border)
- Faint text problem (muted text may be too low contrast)
- Placeholder prices and testimonials to replace before launch
- No login, dashboards, or admin pages (per AGENTS.md scope)

### lib/site.ts
- bookingUrl → NEXT_PUBLIC_CALENDLY_URL or "https://calendly.com/your-link"
- navLinks: How It Works, Pricing, Case Studies, Enterprise, Jobs
- footerLinks: company, hireTalent, industries (10), legal
- socialLinks: Facebook, X, LinkedIn, YouTube

## Implementation steps for the agent

1. **Append `## 6. Build plan for RemoteStaff365` to `REFERENCE_NOTES.md`**

2. **Section 6.1 — Page map table**
   Columns: Route | Page file | Status (DONE/PARTIAL/TODO) | Follows reference page
   Include all 13+ routes listed above. Map each to the corresponding reference page (e.g., /about → about-us.html, /pricing → pricing.html, /industries/[slug] → industries/*.html, /jobs → find-staff.html, /terms → terms-of-use.html, /privacy → privacy-policy.html, /blog → blog.html, /case-studies → case-studies.html, /enterprise → enterprise.html, /contact → contact-us.html, /how-it-works → how-it-works-employer.html). Guarantee → reference guarantee pages are stubs (NOT FOUND).

3. **Section 6.2 — Component map**
   Table: Component | File | Status (DONE/PARTIAL/TODO) | Notes
   List Navbar, Footer, PageHeader, CTASection, Section, SectionHeading, Reveal, Logo, Container, all home/* components, jobs/* components, forms/* components, ui/* components.

4. **Section 6.3 — Changes for our brand**
   - Global offshore VAs for US companies (not Philippines-only) — update copy accordingly
   - All signup/login buttons → bookingUrl (Calendly placeholder from lib/site.ts)
   - No login, dashboards, or admin pages (AGENTS.md scope)
   - Original copy only — never copy text from /reference
   - Placeholder images only — use public/images/* or placehold.co

5. **Section 6.4 — Known issues and decisions**
   - Logo image only in navbar (footer uses light variant)
   - Banner image at public/images/banner.webp without a box (Hero uses plain next/Image)
   - Faint text problem (muted text low contrast)
   - Placeholder prices and testimonials to replace before launch

6. **Section 6.5 — Prioritized TODO list (next 10 tasks, one prompt each)**
   1. Review home/* components not yet read (ValueProps, TrustedBy, MidCTA, GrowthPath, PricingCards, ComparisonTable, Testimonials, Guarantee)
   2. Review jobs/* and forms/* components
   3. Replace placeholder prices in pricing page with real rates
   4. Replace placeholder testimonials with original copy
   5. Fix banner image box/styling in Hero
   6. Fix faint text contrast issue
   7. Add /jobs/[id] job detail page
   8. Add /for-employers and /for-job-seekers pages if needed
   9. Replace placeholder terms/privacy content before launch
   10. Run `npm run build` and fix all errors

7. **Section 6.6 — How to use this file**
   Every future prompt starts with "Read REFERENCE_NOTES.md and AGENTS.md".

**Output:** Plan file at `.kilo/plans/reference-notes-section6-plan.md`, then call `plan_exit`.
