# Reference Site Notes

Internal dev reference only. Not live content. Do not copy text, images or code.

## 1. Overview

The reference site (virtualstaff.ph) is a Philippines-focused offshore staffing marketplace. It connects US, UK, and Australian businesses with virtual assistants and back-office staff based primarily in the Philippines. Core offering is the "VirtualStaff Seat System": a $99/month seat fee plus staff salary, no long-term contracts. Target audience is small-to-mid-size businesses in Western markets looking to hire remote support staff. The site was rebuilt as a Next.js app (HTTrack mirror), with server-rendered pages and client-side interactivity.

## 2. Sitemap

| Reference Page | Route | Our Matching Route | Status |
|---|---|---|---|
| Homepage | index.html | / | Have |
| About | about-us.html | /about | Have |
| Pricing | pricing.html | /pricing | Have |
| Contact | contact-us.html | /contact | Have |
| Case Studies | case-studies.html | /case-studies | Have |
| Blog | blog.html | /blog | Have |
| Find Staff / Jobs | find-staff.html | /jobs | Have (+ /jobs/[id]) |
| Enterprise | enterprise.html | /enterprise | Have |
| How It Works (employer) | how-it-works-employer.html | /how-it-works | Have |
| FAQ | hiring-faqs.html | MISSING | Gap |
| Product Explainer | what-is-virtualstaff-ph.html | MISSING | Gap |
| Privacy Policy | privacy-policy.html | /privacy | Have |
| Terms of Use | terms-of-use.html | /terms | Have |
| Industry pages (11) | industries/*.html | /industries/[slug] | Have (11 slugs) |
| 404 | api.html | /not-found.tsx | Have |
| Guarantee pages (5) | guarantee-*.html → 404 | MISSING (all dead in ref) | N/A |
| Employer form page | embedded/JS only | /for-employers | Extra |
| Job seeker form page | embedded/JS only | /for-job-seekers | Extra |
| API routes | none | /api/contact, /api/employer, /api/job-seeker | Extra |

Industry sub-pages (11): accounting-firms, construction-companies, customer-support, ecommerce, healthcare, home-services, hospitality, insurance-agencies, law-firms, logistics, real-estate.

## 3. Homepage Section Order

1. Hero — value proposition, CTA to "Get Your First VirtualStaff Seat" (external app link)
2. Value props / how it works — choose person, staffing structure handled, $99 seat fee
3. Mid CTA — "Ready to start?" secondary CTA
4. Problem / agitation — "Finding People Is Easy. Building a Reliable Team Is a Different Game."
5. Case studies / social proof — customer success card grid
6. Bottom CTA — "Start Building Your Back-Office Team Today" → external app.virtualstaff.ph

Our homepage order (for contrast): Hero → Value Props → Trusted By → Mid CTA → How It Works → Growth Path → Pricing Cards → Comparison Table → Testimonials → Guarantee → Bottom CTA. We front-load trust signals and pricing; we lack a dedicated problem/agitation section.

## 4. Design System

- Font: Poppins (dominant), fallback Inter/Arial/sans-serif
- Primary blue: #2563eb; lighter #4289e0 / #3b82f6 for gradients; dark #004c70 / #0b1220 / #172033 for text
- Hero background: #F1F9FC light cyan-blue
- Soft blue section tints: #F5F8FF, #E8F0FE, #E3EBFC
- Enterprise CTA: green gradient #22c55e → #15803d
- Muted text: #64748b (slate-600), #9ca3af
- Footer gradient: blue-600 → blue-500
- Social icon pills: #2563eb background
- Buttons: ~0.75rem radius, 1.5px border, gradient primary or white secondary
- Cards: rounded-2xl, shadow-[2px_4px_12px_#00000014]
- Transitions: 0.5s cubic-bezier on transform + box-shadow
- Reveal animations: inline opacity/translateY with Framer Motion whileInView
- Mobile menu: hamburger rotate/scale toggle
- Dark mode: none (light-only)
- theme-color meta: #000000

Our design mirrors these tokens exactly (same palette, Poppins, card/shadow styles). We use Base UI shadcn components and Framer Motion Reveal instead of inline reveal styles.

## 5. Key Functionality

- Navigation: sticky header with border-bottom; desktop links + hamburger mobile menu (Base UI Sheet in ours)
- External app CTAs: Login / Signup / "Build Your Team" link to app.virtualstaff.ph (external competitor app)
- Job listing / staff directory: find-staff.html (employer-facing staff browsing); ours has /jobs with search + category + region + type filters and /jobs/[id] detail pages
- Forms: contact, employer, and job-seeker forms rendered via JS chunks; ours uses react-hook-form + zod with /api/* routes
- Chat widget: Zoho SalesIQ live chat (reference); ours has none
- Tracking/pixels: Meta Pixel, HubSpot, VWO (A/B testing), OutsourceAccelerator (reference); ours has none
- Sticky elements: sticky navbar (both)
- Phone fields: none in either
- Currency: $ USD displayed; no explicit currency disclaimer in reference

## 6. SEO Patterns

- Title pattern: "Page Name | VirtualStaff.ph" (PH-branded); ours: "Page | RemoteStaff365" / descriptive
- Meta description: PH-focused ("Filipino team", "Philippines-based", "outsourcing to the Philippines"); ours: US + offshore/global focused
- lang="en" on both
- keywords meta tag used on blog/contact (deprecated); ours omits it correctly
- Open Graph: og:title, og:description, og:image (favicon.png), og:type, og:url; ours adds siteName and uses logo.png
- Twitter Card: summary_large_image (both)
- Canonical URL: relative (index.html, about-us.html); ours uses absolute via metadataBase + sitemap.xml
- robots: ours has index/follow + robots.ts; reference not visible
- Schema markup: none on either (gap)
- hreflang / locale: none on either (gap)
- FAQ: dedicated hiring-faqs.html page in reference; ours embeds FAQs inside pricing/how-it-works pages only
- Heading hierarchy: h1 per page (both)

## 7. What to Change for RemoteStaff365

- Brand: RemoteStaff365, not VirtualStaff.ph; logo and brand colors already applied (same blue palette is fine)
- Positioning: global offshore talent for US-based companies, not Philippines-only staffing
- CTA target: single Calendly booking URL (NEXT_PUBLIC_CALENDLY_URL in lib/site.ts), not external app.virtualstaff.ph
- Copy: remove all Philippines/Filipino/Pinoy/Manila/peso/₱/+63 references from rendered content
- Regions: feature Philippines, India, Latin America, Eastern Europe, Africa, South Asia, Southeast Asia equally — no single country dominant
- Currency: keep USD $ pricing; add explicit "USD" disclaimer where helpful
- Timezone: emphasize US time-zone overlap (Pacific/Eastern) for US employers
- Metadata: keep "US Companies" + "Offshore Virtual Assistants" framing; add schema markup and hreflang later if needed

## 8. Gap Checklist

- [ ] Add dedicated FAQ page (/faq or /hiring-faqs) — HIGH
- [ ] Add "what-is" product explainer page (/what-is-remotestaff365) — HIGH
- [ ] Add JSON-LD schema markup (Organization, JobPosting) — HIGH
- [ ] Add live chat widget (e.g. Zoho SalesIQ or alternative) — MEDIUM
- [ ] Add analytics / tracking pixels (Meta, HubSpot, etc.) — MEDIUM
- [ ] Add "Problem / agitation" homepage section — MEDIUM
- [ ] Add hreflang / multi-locale SEO metadata — MEDIUM
- [ ] Add theme-color meta tag — LOW
- [ ] Replace placeholder testimonials with real client quotes — MEDIUM
- [ ] Verify Calendly booking URL is set via NEXT_PUBLIC_CALENDLY_URL env var before launch — HIGH

Out of scope (per AGENTS.md): dashboards, admin panels, login pages, complex backend (payroll/compliance/matching), multi-language translation.
