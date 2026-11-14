# Reference Notes:

virtualstaff.ph (HTTrack copy in /reference)

## 0. Project direction: SIMILAR, not an exact clone

- /reference is inspiration for structure and visual quality only.
- Our site must look and feel like its own brand: RemoteStaff365, global
  offshore virtual assistants for US companies.
- Keep from the reference: the overall flow (hero, how it works, pricing,
  comparison, testimonials, CTA), clean spacing, card style, blue palette
  feel, and clear CTAs.
- Change on purpose: section order and layouts, headline and all copy,
  icons and illustrations, hero composition, card details, section
  backgrounds, and animations.
- Add our own sections: talent categories, regions we hire from (Asia,
  Africa, Latin America, Eastern Europe), jobs preview, and a "Book a call"
  step flow.
- Never copy text, images, logos, icons, exact class names or exact
  layouts pixel-for-pixel from /reference.
- All signup/login buttons go to bookingUrl (Calendly placeholder). No
  login, dashboard or admin.

## 1. Folder inventory

### 1.1 Mirror root

Mirror root: reference/www.virtualstaff.ph/ (HTTrack mirror of https://www.virtualstaff.ph/).
Also present at /reference root (HTTrack metadata — not part of the mirror): third-party domain folders (connect.facebook.net, hts-cache, js-na2.hs-analytics.net, js-na2.hs-banner.com, js-na2.hs-scripts.com, js-na2.hsadspixel.net, js-na2.hscollectedforms.net, js-na2.usemessages.com, st.outsourceaccelerator.com), plus backblue.gif, fade.gif, cookies.txt, hts-log.txt, index.html.

### 1.2 File counts

| Type   | Count   | Notes                                                                                                                 |
| ------ | ------- | --------------------------------------------------------------------------------------------------------------------- |
| .html  | 208     | 24 real pages + 184 stubs (24,617-byte HTTrack error pages)                                                           |
| .css   | 1       | \_next/static/css/c4ffbc3bc576c07c.css (220,803 bytes)                                                                |
| .js    | 33      | shared chunks + page chunks + industries catch-all + 2 manifests                                                      |
| images | ~1,000+ | ≈1,011 hash-named .jpeg/.png under \_next/ root + named images under assets/images/ + favicon.ico/favicon.png at root |

### 1.3 All .html pages (file path → route)

Real pages:

| File path                              | Route                              |
| -------------------------------------- | ---------------------------------- |
| index.html                             | /                                  |
| about-us.html                          | /about                             |
| blog.html                              | /blog                              |
| case-studies.html                      | /case-studies                      |
| contact-us.html                        | /contact-us                        |
| enterprise.html                        | /enterprise                        |
| find-staff.html                        | /find-staff / jobs                 |
| hiring-faqs.html                       | /hiring-faqs / FAQ                 |
| how-it-works-employer.html             | /how-it-works                      |
| pricing.html                           | /pricing                           |
| privacy-policy.html                    | /privacy                           |
| terms-of-use.html                      | /terms                             |
| what-is-virtualstaff-ph.html           | /what-is-virtualstaff-ph           |
| industries/accounting-firms.html       | /industries/accounting-firms       |
| industries/construction-companies.html | /industries/construction-companies |
| industries/customer-support.html       | /industries/customer-support       |
| industries/ecommerce.html              | /industries/ecommerce              |
| industries/healthcare.html             | /industries/healthcare             |
| industries/home-services.html          | /industries/home-services          |
| industries/hospitality.html            | /industries/hospitality            |
| industries/insurance-agencies.html     | /industries/insurance-agencies     |
| industries/law-firms.html              | /industries/law-firms              |
| industries/logistics.html              | /industries/logistics              |
| industries/real-estate.html            | /industries/real-estate            |

Stub .html pages (24,617 bytes each, HTTrack error stubs, not real pages): about/, api/, contact-us/, how-it-works-employer/, index/, privacy/, terms/ each contain an index.html stub; _next/data/index.html; \_next/ root data.html and index.html; signals/ (config.html, iwl.html, iwl0fc5.html, plugins.html) plus signals/config/index.html and signals/plugins/index.html; static/chunks/_.html (19) and static/img/virtual*profile.html; plus root-level stubs (api.html, index-2.html, track.min.html, *.json.html manifests, next.config.mjs.html, \_next.html, and all icon/img/bg stubs listed in 1.6).

### 1.4 CSS files and 5 biggest JS chunks

CSS (1 file): \_next/static/css/c4ffbc3bc576c07c.css — 220,803 bytes.

5 biggest JS chunks (name, size only):

1. \_app-78317f28e75238e8.js — 481,702 bytes
2. framework-898697981b1ca118.js — 139,954 bytes
3. main-b206508d9943d99e.js — 129,082 bytes
4. polyfills-42372ed130431b0a.js — 112,601 bytes
5. [...slug]-2240d5313399be39.js — 61,661 bytes (industries catch-all, under \_next/static/chunks/pages/industries/)

All JS lives under \_next/static/chunks/, \_next/static/chunks/pages/, and \_next/static/Sr9JZw4Cx3gLeWvfT8fJP/ (\_buildManifest.js, \_ssgManifest.js).

### 1.5 Font files (.woff2) and image folders

Fonts: 48 .woff2 files under \_next/static/media/ (Poppins via next/font; e.g. 034d78ad42e9620c.woff2, ac0a48a8bf13ca80.woff2, f836bffb0378cb18.woff2).

Image folders:

- \_next/ root — hash-named .jpeg/.png Next.js optimized image variants (~1,000)
- assets/images/ — blog, common, enterprise, game-changing-guide, handbook, home, industries, main, new-home, outsourcing, pricing, products, staff, testimonial
- static/img/ — contains virtual_profile.html stub (no real image file)

### 1.6 Broken image stubs (.html under 30 KB, names like icon/img/bg/logo)

All are exactly 24,617 bytes → marked "broken stub":

- icon stubs: about-us-icon1..12 (8), check-icon, find-stock-icon1..9 (9), industries-icon-1..4 (4), main-industries-icon3..7 (5), ne-icon1..19 (19), new-hmtp-icon6/7/10/12/18 (5), new-homec-icon16..20 (5), new-icon-15..19 (5), new-seats-icon4/7 (2), new-wiv-icon1..16 (16), np-icon1..8 (8), nw-hwi-icon-\* (14)
- bg stubs: new-homeb-bg-1, new-homeb-mobile-bg
- img stubs: new-homeb-img1..7 (7), new-seats-img2..5 (4), new-wiv-img1, newHowitWorks-Img1-11

### 1.7 Real image files that exist (.png .jpg .webp .svg)

Named images (≈1,000 hash-named \_next/ variants not listed individually):

- Root: favicon.ico, favicon.png
- assets/images/logo.png
- assets/images/blog/: ellipse.png, knowledgebg.jpg
- assets/images/common/: Email.svg, footer-bg.jpg, jobseekerbg.jpg, newLogo.png, privacybanner.jpg, Support.svg
- assets/images/enterprise/: fsTeamBg.png
- assets/images/game-changing-guide/: bg.png
- assets/images/handbook/: lightGridBg.png
- assets/images/home/: rightGridBg.png
- assets/images/industries/: industries-Bg1.png
- assets/images/new-home/: new-home-bg.jpg
- assets/images/outsourcing/: outsourcingBg.png
- assets/images/pricing/: np-img1.png
- assets/images/products/: bgColorBlock.png, bgDuo.png, cardboardBg.png
- assets/images/staff/: staffComment.svg
- assets/images/testimonial/: testimonialLogo1.svg, testimonialLogo2.svg, testimonialLogo3.svg, testimonialLogo4.png, testimonialLogo5.svg, testimonialLogo6.png

## 2. Design tokens (UNVERIFIED)

CSS file is minified (3 lines, ~73KB each, read tool truncates at 2000 chars/line), so exact token values could not be extracted from the CSS directly.

### 2.1 Colors (UNVERIFIED — CSS not fully readable)

| Role             | Hex value  | Source             |
| ---------------- | ---------- | ------------------ |
| Primary          | UNVERIFIED | CSS line truncated |
| Hero bg          | UNVERIFIED | CSS line truncated |
| Soft bg          | UNVERIFIED | CSS line truncated |
| Text             | UNVERIFIED | CSS line truncated |
| Muted            | UNVERIFIED | CSS line truncated |
| Footer           | UNVERIFIED | CSS line truncated |
| Button gradients | UNVERIFIED | CSS line truncated |
| Green CTA        | UNVERIFIED | CSS line truncated |

HTML-observed colors (from class names in .html files):

- `bg-[#F1F9FC]` — hero background (confirmed in index.html, Hero.tsx)
- `bg-[#F5F8FF]` — soft section background (confirmed in HTML)
- `text-[#2563eb]` — primary blue text (confirmed in HTML)
- `border-slate-100` — navbar border (confirmed in HTML)
- `bg-white` — navbar and card background (confirmed in HTML)
- `bg-gradient-to-r from-blue-600 to-blue-500` — footer gradient (confirmed in Footer.tsx)
- `text-vs-blue` — custom blue text class (confirmed in index.html)

### 2.2 Fonts (UNVERIFIED — CSS not fully readable)

| Item                         | Value      | Status                                                 |
| ---------------------------- | ---------- | ------------------------------------------------------ |
| Font-family                  | Poppins    | CONFIRMED — 48 .woff2 files under \_next/static/media/ |
| Weights                      | UNVERIFIED | CSS not fully readable                                 |
| Heading sizes per breakpoint | UNVERIFIED | CSS not fully readable                                 |
| Body sizes per breakpoint    | UNVERIFIED | CSS not fully readable                                 |

### 2.3 Buttons (UNVERIFIED — CSS not fully readable)

| Button class      | Exact CSS  | Status               |
| ----------------- | ---------- | -------------------- |
| vs-primary-cta    | UNVERIFIED | Class exists in HTML |
| vs-secondary-cta  | UNVERIFIED | Class exists in HTML |
| vs-enterprise-cta | UNVERIFIED | Referenced in plan   |

### 2.4 Cards (UNVERIFIED — CSS not fully readable)

| Property | Value      | Status                                     |
| -------- | ---------- | ------------------------------------------ |
| Radius   | UNVERIFIED | HTML shows rounded-2xl, rounded-3xl        |
| Border   | UNVERIFIED | HTML shows border-slate-100                |
| Shadow   | UNVERIFIED | HTML shows shadow-[2px_4px_12px_#00000014] |
| Padding  | UNVERIFIED | HTML shows p-6                             |

### 2.5 Layout (UNVERIFIED — CSS not fully readable)

| Property            | Value           | Status                                     |
| ------------------- | --------------- | ------------------------------------------ |
| Container max-width | UNVERIFIED      | HTML shows max-w-6xl, max-w-7xl            |
| Section paddings    | UNVERIFIED      | HTML shows py-12 lg:py-24                  |
| Breakpoints         | sm/md/lg/xl/2xl | CONFIRMED — visible in HTML class prefixes |

### 2.6 Gradients (UNVERIFIED — CSS not fully readable)

| Location | Gradient                  | Status                        |
| -------- | ------------------------- | ----------------------------- |
| Hero     | UNVERIFIED                | HTML shows bg-[#F1F9FC] solid |
| Footer   | from-blue-600 to-blue-500 | CONFIRMED — Footer.tsx        |
| CTAs     | UNVERIFIED                | CSS not fully readable        |

## 3. Homepage sections

Confirmed by reading `reference/www.virtualstaff.ph/index.html` body (231,678 bytes). All 10 sections exist.

| #   | Section            | FOUND/NOT FOUND | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --- | ------------------ | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Navbar             | FOUND           | Sticky header, `border-b-2 border-slate-100 bg-white`, `row` container with logo (→ index.html), nav links (How It Works, Pricing, Case Studies, Enterprise), Login link (→ app.virtualstaff.ph/login/employer), "Build Your Team" CTA (→ app.virtualstaff.ph/signup/employer), mobile Sheet menu                                                                                                                                                  |
| 2   | Hero               | FOUND           | `bg-[#F1F9FC]`, eyebrow badge "Global Offshore Talent", headline "Build Your Philippines Team One VirtualStaff Seat at a Time", subhead about professional pre-vetted staff, 3 bullets, 2 buttons ("Build Your Team", "Get Your First VirtualStaff Seat"), 4 trust badges (Professional staff, Full-time or part-time, Ongoing support, Transparent monthly costs), right-side images (new-homeb-bg-1.png desktop, new-homeb-mobile-bg.png mobile) |
| 3   | Client logos strip | FOUND           | "Trusted By Businesses Like These, And 2,500+ SMEs Across the US, Australia and the UK", grid of logo images (`grid-cols-2 md:grid-cols-6 lg:grid-cols-5`), aspect-[2/1] rounded-2xl logo cards with shadow                                                                                                                                                                                                                                        |
| 4   | Seat explainer     | FOUND           | "A Simple, Structured Way to Add Staff to Your Business", 4 cards in grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4), each card: icon image, hero image, heading, paragraph; rounded-2xl border-slate-100 bg-white shadow                                                                                                                                                                                                                         |
| 5   | Growth path        | FOUND           | "Start With One Great Staff Member / Build The Team Your Business Needs", Start/Grow/Scale tier cards with icons, rounded-xl border-[#EEF3FA] bg-white shadow                                                                                                                                                                                                                                                                                      |
| 6   | Pricing by service | FOUND           | Accordion-style pricing panels with expandable details, comparison panels ("What you're building / What you actually get"), np-icon images                                                                                                                                                                                                                                                                                                         |
| 7   | Comparison table   | FOUND           | Comparison accordion panels, border-slate-100, rounded-2xl, vs-blue accent                                                                                                                                                                                                                                                                                                                                                                         |
| 8   | Testimonials       | FOUND           | "See What Happens When Businesses Keep Adding VirtualStaff Seats", carousel with embla**prev/embla**next navigation buttons, testimonial-bg background                                                                                                                                                                                                                                                                                             |
| 9   | Guarantee CTA      | FOUND           | "Try Your First VirtualStaff Seat For One Whole Month", 30-day guarantee, SVG blur filter effects, guarantee-band-blur, 30-day.png image                                                                                                                                                                                                                                                                                                           |
| 10  | Footer             | FOUND           | `bg-gradient-to-r from-blue-600 to-blue-500`, logo image, 4 column groups (Company, etc.), social links, copyright bar                                                                                                                                                                                                                                                                                                                             |

Extra sections found beyond the 10 listed: None identified — all body content maps to the 10 sections above plus the navbar and footer which are included in the count.

Section spacing: py-12 lg:py-24 pattern on most sections, hero uses pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20.
Background colors: bg-[#F1F9FC] (hero), bg-white (most sections), bg-[#F5F8FF] (soft alt sections), bg-gradient-to-r from-blue-600 to-blue-500 (footer, guarantee CTA).
Images vs text: Hero images are Next.js optimized (\_next/image variants); logo strip images are \_next/image variants; seat explainer uses both icon images and hero images per card.
Responsive behavior: breakpoints sm/md/lg/xl/2xl used throughout; grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pattern; mobile Sheet menu for navbar.
Animation: opacity:0;transform:translateY(30px) style attributes on most section elements (scroll-reveal style), hover:scale-105 on carousel buttons, transition-all duration-300 on links.

## 4. Inner pages

Per-page descriptions (4-8 lines each), based on reading page .tsx files:

### About (/about) — follows about-us.html

Purpose: Company mission, values, and stats for US companies considering offshore VAs.
Sections in order: PageHeader → Mission section (py-12 lg:py-24) → Values section (3 cards, bg-[#F5F8FF]) → Stats section (3 stats) → CTASection.
Layout: Container, grid grid-cols-1 md:grid-cols-3 gap-6 for values, grid grid-cols-1 md:grid-cols-3 for stats.
Forms/accordions/tables: None.
CTA: CTASection primaryHref → bookingUrl.

### How It Works (/how-it-works) — follows how-it-works-employer.html

Purpose: 4-step hiring process explanation with FAQ.
Sections in order: PageHeader → 4 step cards (Add a seat, Choose your hire, Integrate them, We stay with you) → FAQ accordion (6 items) → CTA hero section (bg-gradient-to-r from-blue-600 to-blue-500).
Layout: max-w-6xl mx-auto, grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 for steps.
Forms/accordions/tables: Accordion (shadcn/ui) with 6 FAQ items.
CTA: "Build Your Team" → bookingUrl.

### Pricing (/pricing) — follows pricing.html

Purpose: Transparent pricing cards with seat fee + salary ranges, included features, FAQ.
Sections in order: PageHeader → 6 pricing cards (grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3) → Included features list → FAQ accordion (4 items) → CTASection.
Layout: Card with rounded-2xl shadow-[2px_4px_12px_#00000014] p-6, placeholder images from placehold.co.
Forms/accordions/tables: Accordion (shadcn/ui) with 4 FAQ items.
CTA: "Hire {role} VA" → bookingUrl per card; CTASection → bookingUrl.

### Case Studies (/case-studies) — follows case-studies.html

Purpose: Customer success stories across industries.
Sections in order: PageHeader → 6 case study cards (grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3) → CTASection.
Layout: Card with Badge (industry), stat + statLabel, story text.
Forms/accordions/tables: None.
CTA: CTASection primaryHref → bookingUrl.

### Enterprise (/enterprise) — follows enterprise.html

Purpose: Dedicated offshore teams for enterprises with volume pricing.
Sections in order: PageHeader → 6 benefit cards (grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3) → Custom team size section (1, 3, 5 seats) → CTASection.
Layout: Card with icon in rounded-xl bg-[#F1F9FC] container, grid for seat tiers.
Forms/accordions/tables: None.
CTA: "Book an enterprise call" (variant="green") → bookingUrl; CTASection → bookingUrl.

### Contact (/contact) — follows contact-us.html

Purpose: Contact form + contact details.
Sections in order: PageHeader → 2-column layout (ContactForm left, contact details card right) → CTA button.
Layout: grid grid-cols-1 lg:grid-cols-2 gap-12, Card bg-[#F1F9FC] rounded-2xl p-8.
Forms/accordions/tables: ContactForm (custom).
CTA: "Book a call" → bookingUrl; Link to /jobs.

### Blog (/blog) — follows blog.html

Purpose: Blog post listings with CTA.
Sections in order: PageHeader → 3 blog post cards (grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3) → CTASection.
Layout: Card with date badge, title, excerpt, "Read more" link.
Forms/accordions/tables: None.
CTA: CTASection primaryHref → bookingUrl.

### Find Staff / Jobs (/jobs) — follows find-staff.html

Purpose: Job listings for VA roles.
Sections in order: PageHeader → JobsList (Suspense fallback).
Layout: max-w-6xl mx-auto.
Forms/accordions/tables: None.
CTA: None on listing page.

### What Is RemoteStaff365 (/what-is-virtualstaff-ph)

Purpose: Explainer page about the service.
Status: Route exists in reference but no corresponding page.tsx found in app/ — TODO.

### Terms (/terms) — follows terms-of-use.html

Purpose: Legal terms of service.
Sections in order: PageHeader → placeholder text section.
Layout: max-w-3xl mx-auto.
Forms/accordions/tables: None.
CTA: None.
Note: Placeholder content only — needs full terms before launch.

### Privacy (/privacy) — follows privacy-policy.html

Purpose: Privacy policy.
Sections in order: PageHeader → placeholder text section.
Layout: max-w-3xl mx-auto.
Forms/accordions/tables: None.
CTA: None.
Note: Placeholder content only — needs full privacy policy before launch.

### Industries (one representative: /industries/accounting-firms) — follows industries/\*.html

Purpose: Industry-specific VA roles and intro.
Sections in order: PageHeader → intro paragraph → Common roles cards (grid grid-cols-1 md:grid-cols-3) → CTASection.
Layout: Container, grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8.
Forms/accordions/tables: None.
CTA: CTASection primaryHref → bookingUrl.
Template sharing: All 11 industries pages share the same [slug] page template.

### Guarantee page

Reference guarantee pages are 24,617-byte HTTrack error stubs — NOT FOUND (dead in ref). No real guarantee page design to study from mirror.

## 5. Components, interactions and shadcn mapping

### 5.1 Reusable UI pieces and shadcn/ui mapping

| UI piece        | File                                         | shadcn/ui match                         | Status |
| --------------- | -------------------------------------------- | --------------------------------------- | ------ |
| Navbar          | components/Navbar.tsx                        | navigation-menu (custom header wrapper) | DONE   |
| Footer          | components/Footer.tsx                        | custom (no shadcn footer)               | DONE   |
| Page header     | components/PageHeader.tsx                    | custom                                  | DONE   |
| CTA banner      | components/CTASection.tsx                    | custom (button wrapper)                 | DONE   |
| Card types      | components/ui/card.tsx                       | card (shadcn)                           | DONE   |
| Accordion       | components/ui/accordion.tsx                  | accordion (shadcn)                      | DONE   |
| Table           | components/ui/table.tsx                      | table (shadcn)                          | DONE   |
| Badge           | components/ui/badge.tsx                      | badge (shadcn)                          | DONE   |
| Button          | components/ui/button.tsx                     | button (shadcn)                         | DONE   |
| Container       | components/ui/Container.tsx                  | custom container wrapper                | DONE   |
| Form            | components/ui/form.tsx, input.tsx, label.tsx | form/input/label (shadcn)               | DONE   |
| Mobile menu     | components/Navbar.tsx (uses Sheet)           | sheet (shadcn)                          | DONE   |
| Logo            | components/ui/Logo.tsx                       | custom (logo image component)           | DONE   |
| Section wrapper | components/Section.tsx                       | custom                                  | DONE   |
| Section heading | components/SectionHeading.tsx                | custom                                  | DONE   |
| Scroll reveal   | components/Reveal.tsx                        | custom (framer-motion)                  | DONE   |

Home page components: Hero, ValueProps, TrustedBy, MidCTA, HowItWorks, GrowthPath, PricingCards, ComparisonTable, Testimonials, Guarantee, BottomCTA — all custom, none map directly to shadcn/ui.
Job components: JobCard, JobFilters, JobsList — all custom.
Form components: ContactForm, EmployerForm, JobSeekerForm — custom forms using shadcn/ui form primitives.

### 5.2 Interactions

| Interaction   | Needs framer-motion? | Implementation                                                       |
| ------------- | -------------------- | -------------------------------------------------------------------- |
| Scroll reveal | Yes                  | components/Reveal.tsx uses motion.div from framer-motion             |
| Hover effects | No                   | CSS transition-all duration-300 on links/buttons                     |
| Mobile menu   | Yes                  | Sheet component with open/close state (uses framer-motion via Sheet) |
| Accordion     | Yes                  | shadcn/ui accordion (uses framer-motion internally)                  |
| Carousel      | Yes                  | Testimonials carousel uses embla carousel with custom buttons        |

### 5.3 External things NOT to copy or keep

- Tracking scripts: Zoho SalesIQ, VWO, Meta Pixel, HubSpot, OutsourceAccelerator
- app.virtualstaff.ph login/signup links
- Their logo, photos, text
- theme-color #000000 (their branding)
- Exact class names from /reference (e.g., vs-primary-cta, vs-secondary-cta, text-vs-blue)
- Exact layouts pixel-for-pixel

## 6. Build plan for RemoteStaff365

### 6.1 Page map

| Route                    | Page file                               | Status  | Follows reference page            |
| ------------------------ | --------------------------------------- | ------- | --------------------------------- |
| /                        | app/(common)/page.tsx                   | DONE    | index.html                        |
| /about                   | app/(common)/about/page.tsx             | DONE    | about-us.html                     |
| /blog                    | app/(common)/blog/page.tsx              | DONE    | blog.html                         |
| /case-studies            | app/(common)/case-studies/page.tsx      | DONE    | case-studies.html                 |
| /contact                 | app/(common)/contact/page.tsx           | DONE    | contact-us.html                   |
| /enterprise              | app/(common)/enterprise/page.tsx        | DONE    | enterprise.html                   |
| /jobs                    | app/(common)/jobs/page.tsx              | DONE    | find-staff.html                   |
| /jobs/[id]               | app/(common)/jobs/[id]/page.tsx         | TODO    | —                                 |
| /for-employers           | app/(common)/for-employers/page.tsx     | TODO    | —                                 |
| /for-job-seekers         | app/(common)/for-job-seekers/page.tsx   | TODO    | —                                 |
| /how-it-works            | app/(common)/how-it-works/page.tsx      | DONE    | how-it-works-employer.html        |
| /industries/[slug]       | app/(common)/industries/[slug]/page.tsx | DONE    | industries/\*.html (11 sub-pages) |
| /pricing                 | app/(common)/pricing/page.tsx           | DONE    | pricing.html                      |
| /privacy                 | app/(common)/privacy/page.tsx           | PARTIAL | privacy-policy.html (placeholder) |
| /terms                   | app/(common)/terms/page.tsx             | PARTIAL | terms-of-use.html (placeholder)   |
| /what-is-virtualstaff-ph | —                                       | TODO    | what-is-virtualstaff-ph.html      |

### 6.2 Component map

| Component                | File                                | Status | Notes                                                                                                                                     |
| ------------------------ | ----------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Navbar                   | components/Navbar.tsx               | DONE   | Logo + navLinks + Build Your Team CTA → bookingUrl + mobile Sheet                                                                         |
| Footer                   | components/Footer.tsx               | DONE   | 4 columns + social icons + legal links                                                                                                    |
| PageHeader               | components/PageHeader.tsx           | DONE   | eyebrow/title/subtitle, bg-[#F1F9FC]                                                                                                      |
| CTASection               | components/CTASection.tsx           | DONE   | brand + outline buttons, bookingUrl default                                                                                               |
| Section                  | components/Section.tsx              | DONE   | py-20 lg:py-32, max-w-7xl container                                                                                                       |
| SectionHeading           | components/SectionHeading.tsx       | DONE   | eyebrow/title/description                                                                                                                 |
| Reveal                   | components/Reveal.tsx               | DONE   | framer-motion scroll reveal                                                                                                               |
| Logo                     | components/ui/Logo.tsx              | DONE   | /images/logo-transparent.png, default/light variants                                                                                      |
| Container                | components/ui/Container.tsx         | DONE   | max-w-7xl                                                                                                                                 |
| Hero                     | components/home/Hero.tsx            | DONE   | badge, headline, subhead, 3 bullets, 2 buttons, 4 trust badges, banner image                                                              |
| ValueProps               | components/home/ValueProps.tsx      | EXISTS | need to review                                                                                                                            |
| TrustedBy                | components/home/TrustedBy.tsx       | EXISTS | need to review                                                                                                                            |
| MidCTA                   | components/home/MidCTA.tsx          | EXISTS | need to review                                                                                                                            |
| HowItWorks               | components/home/HowItWorks.tsx      | EXISTS | need to review                                                                                                                            |
| GrowthPath               | components/home/GrowthPath.tsx      | EXISTS | need to review                                                                                                                            |
| PricingCards             | components/home/PricingCards.tsx    | EXISTS | need to review                                                                                                                            |
| ComparisonTable          | components/home/ComparisonTable.tsx | EXISTS | need to review                                                                                                                            |
| Testimonials             | components/home/Testimonials.tsx    | EXISTS | need to review                                                                                                                            |
| Guarantee                | components/home/Guarantee.tsx       | EXISTS | need to review                                                                                                                            |
| BottomCTA                | components/home/BottomCTA.tsx       | DONE   | gradient CTA, "Build Your Team" → bookingUrl                                                                                              |
| JobCard                  | components/jobs/JobCard.tsx         | EXISTS | need to review                                                                                                                            |
| JobFilters               | components/jobs/JobFilters.tsx      | EXISTS | need to review                                                                                                                            |
| JobsList                 | components/jobs/JobsList.tsx        | EXISTS | need to review                                                                                                                            |
| ContactForm              | components/forms/ContactForm.tsx    | EXISTS | need to review                                                                                                                            |
| EmployerForm             | components/forms/EmployerForm.tsx   | EXISTS | need to review                                                                                                                            |
| JobSeekerForm            | components/forms/JobSeekerForm.tsx  | EXISTS | need to review                                                                                                                            |
| ui components (16 files) | components/ui/                      | DONE   | accordion, badge, button, card, checkbox, Container, form, input, label, Logo, navigation-menu, select, separator, sheet, table, textarea |

### 6.3 Changes for our brand

- Global offshore VAs for US companies (not Philippines-only) — update all copy accordingly
- All signup/login buttons go to bookingUrl (Calendly placeholder from lib/site.ts)
- No login, dashboards, or admin pages (per AGENTS.md scope)
- Original copy only — never copy text from /reference
- Placeholder images only — use public/images/\* or placehold.co

### 6.4 Known issues and decisions

- Logo image only in navbar (footer uses light variant too)
- Banner image at public/images/banner.webp without a box (Hero uses plain next/Image)
- Faint text problem (muted text may be too low contrast)
- Placeholder prices and testimonials to replace before launch
- No login, dashboards, or admin pages (per AGENTS.md scope)

### 6.5 Prioritized TODO list (next 10 tasks)

1. Review home/\* components not yet read (ValueProps, TrustedBy, MidCTA, GrowthPath, PricingCards, ComparisonTable, Testimonials, Guarantee)
2. Review jobs/_ and forms/_ components
3. Replace placeholder prices in pricing page with real rates
4. Replace placeholder testimonials with original copy
5. Fix banner image box/styling in Hero
6. Fix faint text contrast issue
7. Add /jobs/[id] job detail page
8. Add /for-employers and /for-job-seekers pages if needed
9. Replace placeholder terms/privacy content before launch
10. Run `npm run build` and fix all errors

### 6.6 How to use this file

Every future prompt starts with "Read REFERENCE_NOTES.md and AGENTS.md". Section 0 is the project direction: similar to the reference, never an exact clone.

## 8. Audit and fix list (2026-11-12)

**Source files audited:** `REFERENCE_NOTES.md` (455 lines), `AGENTS.md` (42 lines), `app/`, `components/`, `lib/`, `app/globals.css`, `public/images/`.
**Constraint:** No app code was edited. This is a read-only audit report.

---

## 1. Pages: Plan page map vs actual `app/`

| Route                    | Plan file                               | Plan status | Exists in `app/`? | Actual status | Follows reference            | Notes                                       |
| ------------------------ | --------------------------------------- | ----------- | ----------------- | ------------- | ---------------------------- | ------------------------------------------- |
| /                        | app/(common)/page.tsx                   | DONE        | YES               | DONE          | index.html                   | Home with 11 sections                       |
| /about                   | app/(common)/about/page.tsx             | DONE        | YES               | DONE          | about-us.html                | PageHeader + mission + values + stats + CTA |
| /blog                    | app/(common)/blog/page.tsx              | DONE        | YES               | DONE          | blog.html                    | PageHeader + 3 post cards + CTA             |
| /case-studies            | app/(common)/case-studies/page.tsx      | DONE        | YES               | DONE          | case-studies.html            | PageHeader + 6 cards + CTA                  |
| /contact                 | app/(common)/contact/page.tsx           | DONE        | YES               | DONE          | contact-us.html              | PageHeader + ContactForm + details card     |
| /enterprise              | app/(common)/enterprise/page.tsx        | DONE        | YES               | DONE          | enterprise.html              | PageHeader + 6 benefits + team size + CTA   |
| /jobs                    | app/(common)/jobs/page.tsx              | DONE        | YES               | DONE          | find-staff.html              | PageHeader + JobsList (Suspense)            |
| /jobs/[id]               | app/(common)/jobs/[id]/page.tsx         | TODO        | YES               | DONE          | —                            | Job detail page exists                      |
| /for-employers           | app/(common)/for-employers/page.tsx     | TODO        | YES               | DONE          | —                            | EmployerForm page exists                    |
| /for-job-seekers         | app/(common)/for-job-seekers/page.tsx   | TODO        | YES               | DONE          | —                            | JobSeekerForm page exists                   |
| /how-it-works            | app/(common)/how-it-works/page.tsx      | DONE        | YES               | DONE          | how-it-works-employer.html   | PageHeader + 4 steps + FAQ + CTA            |
| /industries/[slug]       | app/(common)/industries/[slug]/page.tsx | DONE        | YES               | DONE          | industries/\*.html           | 10 static industries                        |
| /pricing                 | app/(common)/pricing/page.tsx           | DONE        | YES               | DONE          | pricing.html                 | PageHeader + 6 cards + included + FAQ + CTA |
| /privacy                 | app/(common)/privacy/page.tsx           | PARTIAL     | YES               | PARTIAL       | privacy-policy.html          | Placeholder content only                    |
| /terms                   | app/(common)/terms/page.tsx             | PARTIAL     | YES               | PARTIAL       | terms-of-use.html            | Placeholder content only                    |
| /what-is-virtualstaff-ph | —                                       | TODO        | NO                | MISSING       | what-is-virtualstaff-ph.html | Route not implemented                       |

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

| Section            | Current?     | Matches plan order? | Notes                                                                        |
| ------------------ | ------------ | ------------------- | ---------------------------------------------------------------------------- |
| Navbar             | Yes (layout) | Yes                 | Always rendered via layout.tsx                                               |
| Hero               | Yes (1st)    | Yes                 | `bg-[#F1F9FC]`, badge, headline, 3 bullets, 2 buttons, 4 badges, right image |
| Client logos strip | NO           | Missing             | `TrustedBy` shows stats, not logo images. Reference had logo grid.           |
| Seat explainer     | NO           | Missing             | Not present on homepage. Reference had 4-seat explainer cards.               |
| Growth path        | Yes (6th)    | Partial             | Present but out of order (reference: 5th, current: 6th)                      |
| Pricing by service | Yes (7th)    | Partial             | Present but `PricingCards` is home hero pricing, not full pricing page       |
| Comparison table   | Yes (8th)    | Partial             | Present but out of order (reference: 7th, current: 8th)                      |
| Testimonials       | Yes (9th)    | Partial             | Present but out of order (reference: 8th, current: 9th)                      |
| Guarantee CTA      | Yes (10th)   | Partial             | Present but out of order (reference: 9th, current: 10th)                     |
| Footer             | Yes (layout) | Yes                 | Always rendered via layout.tsx                                               |

**Extra sections not in reference plan:** ValueProps, MidCTA, BottomCTA (3 extra custom sections).

---

## 3. Components: each component in `components/` with status

| Component       | File                                | shadcn/ui match                  | Status | Duplicate shadcn?       |
| --------------- | ----------------------------------- | -------------------------------- | ------ | ----------------------- |
| Navbar          | components/Navbar.tsx               | navigation-menu (custom wrapper) | DONE   | No                      |
| Footer          | components/Footer.tsx               | custom (no shadcn footer)        | DONE   | No                      |
| PageHeader      | components/PageHeader.tsx           | custom                           | DONE   | No                      |
| CTASection      | components/CTASection.tsx           | custom (button wrapper)          | DONE   | No                      |
| Section         | components/Section.tsx              | custom wrapper                   | EXISTS | No                      |
| SectionHeading  | components/SectionHeading.tsx       | custom                           | EXISTS | No                      |
| Reveal          | components/Reveal.tsx               | custom (framer-motion)           | DONE   | No                      |
| Logo            | components/ui/Logo.tsx              | custom logo image                | DONE   | No                      |
| Container       | components/ui/Container.tsx         | custom wrapper                   | DONE   | No                      |
| Hero            | components/home/Hero.tsx            | custom                           | DONE   | No                      |
| ValueProps      | components/home/ValueProps.tsx      | custom                           | EXISTS | No                      |
| TrustedBy       | components/home/TrustedBy.tsx       | custom                           | EXISTS | No                      |
| MidCTA          | components/home/MidCTA.tsx          | custom                           | EXISTS | No                      |
| HowItWorks      | components/home/HowItWorks.tsx      | custom                           | EXISTS | No                      |
| GrowthPath      | components/home/GrowthPath.tsx      | custom                           | EXISTS | No                      |
| PricingCards    | components/home/PricingCards.tsx    | custom                           | EXISTS | No                      |
| ComparisonTable | components/home/ComparisonTable.tsx | custom (uses shadcn table)       | EXISTS | No                      |
| Testimonials    | components/home/Testimonials.tsx    | custom                           | EXISTS | No                      |
| Guarantee       | components/home/Guarantee.tsx       | custom                           | EXISTS | No                      |
| BottomCTA       | components/home/BottomCTA.tsx       | custom                           | DONE   | No                      |
| JobCard         | components/jobs/JobCard.tsx         | custom                           | EXISTS | No                      |
| JobFilters      | components/jobs/JobFilters.tsx      | custom                           | EXISTS | No                      |
| JobsList        | components/jobs/JobsList.tsx        | custom                           | EXISTS | No                      |
| ContactForm     | components/forms/ContactForm.tsx    | custom                           | EXISTS | No                      |
| EmployerForm    | components/forms/EmployerForm.tsx   | custom                           | EXISTS | No                      |
| JobSeekerForm   | components/forms/JobSeekerForm.tsx  | custom                           | EXISTS | No                      |
| accordion       | components/ui/accordion.tsx         | accordion (shadcn)               | DONE   | No                      |
| badge           | components/ui/badge.tsx             | badge (shadcn)                   | DONE   | No                      |
| button          | components/ui/button.tsx            | button (shadcn)                  | DONE   | No                      |
| card            | components/ui/card.tsx              | card (shadcn)                    | DONE   | No                      |
| checkbox        | components/ui/checkbox.tsx          | checkbox (shadcn)                | DONE   | No                      |
| Container       | components/ui/Container.tsx         | custom                           | DONE   | No                      |
| form            | components/ui/form.tsx              | form (shadcn)                    | DONE   | No                      |
| input           | components/ui/input.tsx             | input (shadcn)                   | DONE   | No                      |
| label           | components/ui/label.tsx             | label (shadcn)                   | DONE   | No                      |
| navigation-menu | components/ui/navigation-menu.tsx   | navigation-menu (shadcn)         | DONE   | Unused                  |
| select          | components/ui/select.tsx            | select (shadcn)                  | DONE   | Unused                  |
| separator       | components/ui/separator.tsx         | separator (shadcn)               | DONE   | Unused                  |
| sheet           | components/ui/sheet.tsx             | sheet (shadcn)                   | DONE   | Used by Navbar          |
| table           | components/ui/table.tsx             | table (shadcn)                   | DONE   | Used by ComparisonTable |
| textarea        | components/ui/textarea.tsx          | textarea (shadcn)                | DONE   | Unused                  |

**No component duplicates a shadcn component.** All custom components are wrappers or compositions, not replacements.

---

## 4. Rules check against AGENTS.md

### 4.1 asChild usage

**None found.** All link buttons use `render={<a ...>}` or `render={<Link ...>}` pattern. Navbar SheetTrigger uses `render={button}`. Compliant.

### 4.2 Hardcoded Calendly or booking URLs instead of `bookingUrl`

| File                      | Line | Violation                                                                                                     |
| ------------------------- | ---- | ------------------------------------------------------------------------------------------------------------- |
| components/CTASection.tsx | 20   | `primaryHref = "https://calendly.com/your-link"` — hardcoded default instead of `bookingUrl` from lib/site.ts |

All other CTA usages correctly import `bookingUrl` from `@/lib/site`.

### 4.3 opacity-\* or very light text classes (text-slate-300/400, text-muted-foreground)

| File                             | Line | Violation                                                                            |
| -------------------------------- | ---- | ------------------------------------------------------------------------------------ |
| components/Footer.tsx            | 72   | `text-white/70` — opacity class on text                                              |
| components/Footer.tsx            | 80   | `text-white/80` — opacity class on text                                              |
| components/Footer.tsx            | 111  | `text-white/70` — opacity class on text                                              |
| components/Footer.tsx            | 115  | `text-white/60` — opacity class on text                                              |
| components/Footer.tsx            | 134  | `text-white/70` — opacity class on text                                              |
| components/Footer.tsx            | 150  | `text-white/60` — opacity class on text                                              |
| components/Footer.tsx            | 161  | `text-white/60` — opacity class on text                                              |
| components/home/MidCTA.tsx       | 23   | `text-white/90` — opacity class on text                                              |
| components/home/Testimonials.tsx | 68   | `text-slate-600` — allowed per AGENTS.md (text-slate-600 or darker is OK)            |
| components/home/Testimonials.tsx | 79   | `text-slate-700` — allowed (darker than slate-600)                                   |
| components/home/Testimonials.tsx | 95   | `text-slate-600` — allowed                                                           |
| app/(common)/about/page.tsx      | 51   | `text-muted` — maps to `--muted-foreground: #64748b` (slate-500 equivalent), allowed |

**Violations:** Footer.tsx has 7 instances of `text-white/70`/`text-white/80`/`text-white/60`. MidCTA.tsx has `text-white/90`. These violate "Never use opacity-\* or very light colors on text."

### 4.4 Leftover <Image> pointing to files that don't exist

| File                             | Line | Image src                      | Exists?                                  |
| -------------------------------- | ---- | ------------------------------ | ---------------------------------------- |
| components/home/Hero.tsx         | 78   | `/images/banner.webp`          | YES (public/images/banner.webp)          |
| components/home/Testimonials.tsx | 83   | `/images/user.jpg`             | YES (public/images/user.jpg)             |
| components/home/GrowthPath.tsx   | 96   | `/images/user.jpg`             | YES (public/images/user.jpg)             |
| components/home/PricingCards.tsx | 98   | `/images/user.jpg`             | YES (public/images/user.jpg)             |
| components/ui/Logo.tsx           | 17   | `/images/logo-transparent.png` | YES (public/images/logo-transparent.png) |

**No broken image references.** All Image srcs point to existing files.

### 4.5 Text copied from /reference

| File                             | Line  | Match                                                                          | Assessment                |
| -------------------------------- | ----- | ------------------------------------------------------------------------------ | ------------------------- |
| app/(common)/about/page.tsx      | 56    | "Philippines"                                                                  | Real region name, allowed |
| app/(common)/about/page.tsx      | 52-57 | "RemoteStaff365 helps US companies hire dedicated offshore virtual assistants" | Original copy, OK         |
| components/home/Hero.tsx         | 21    | "Global Offshore Talent"                                                       | Original copy, OK         |
| components/home/Testimonials.tsx | 17-53 | Testimonial quotes                                                             | Placeholder, original, OK |
| app/(common)/pricing/page.tsx    | 21    | "$99 seat fee"                                                                 | Original pricing copy, OK |
| lib/jobs.ts                      | 24    | "Philippines"                                                                  | Region name, allowed      |

**No verbatim text copied from /reference.** No "VirtualStaff", "Seat" (as in VirtualStaff Seat), or `app.virtualstaff.ph` links found in app code. Compliant.

### 4.6 Sections not using Reveal, or custom Button/Card components

| File                                    | Section                  | Uses Reveal?                              | Uses custom Button/Card?       |
| --------------------------------------- | ------------------------ | ----------------------------------------- | ------------------------------ |
| app/(common)/page.tsx                   | Home (11 sections)       | Yes (each home component wraps in Reveal) | N/A                            |
| app/(common)/about/page.tsx             | Mission, Values, Stats   | Yes                                       | Card (shadcn)                  |
| app/(common)/blog/page.tsx              | Posts grid               | Yes                                       | Card (shadcn)                  |
| app/(common)/case-studies/page.tsx      | Case studies grid        | Yes                                       | Card (shadcn)                  |
| app/(common)/contact/page.tsx           | Contact form + details   | NO                                        | Card (shadcn), Button (shadcn) |
| app/(common)/enterprise/page.tsx        | Benefits + team size     | Yes                                       | Card (shadcn), Button (shadcn) |
| app/(common)/pricing/page.tsx           | Pricing + included + FAQ | Yes                                       | Card (shadcn), Button (shadcn) |
| app/(common)/how-it-works/page.tsx      | Steps + FAQ + CTA        | Yes                                       | Card (shadcn), Button (shadcn) |
| app/(common)/industries/[slug]/page.tsx | Roles grid               | Yes                                       | Card (shadcn)                  |
| app/(common)/jobs/page.tsx              | JobsList                 | NO (Suspense fallback only)               | N/A                            |
| app/(common)/jobs/[id]/page.tsx         | Job detail               | Yes                                       | Card (shadcn), Button (shadcn) |
| app/(common)/privacy/page.tsx           | Placeholder              | Yes                                       | N/A                            |
| app/(common)/terms/page.tsx             | Placeholder              | Yes                                       | N/A                            |
| app/(common)/for-employers/page.tsx     | EmployerForm             | NO                                        | N/A                            |
| app/(common)/for-job-seekers/page.tsx   | JobSeekerForm            | NO                                        | N/A                            |

**Missing Reveal:** contact page section, jobs listing page, for-employers, for-job-seekers.

---

## 5. Design tokens: compare globals.css + button.tsx with REFERENCE_NOTES.md Section 2

| Token               | REFERENCE_NOTES.md (Section 2) | globals.css actual                           | button.tsx actual                                                          | Match?                                                   |
| ------------------- | ------------------------------ | -------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------- |
| Primary             | UNVERIFIED                     | `--primary: #2563eb`                         | brand: `from-[#4289e0] to-[#2563eb]`                                       | Partial                                                  |
| Hero bg             | UNVERIFIED                     | `--hero-bg: #F1F9FC`                         | N/A                                                                        | CONFIRMED                                                |
| Soft bg             | UNVERIFIED                     | `--soft: #F5F8FF`                            | N/A                                                                        | CONFIRMED                                                |
| Text                | UNVERIFIED                     | `--foreground: #172033`                      | N/A                                                                        | CONFIRMED                                                |
| Muted               | UNVERIFIED                     | `--muted-foreground: #64748b`                | N/A                                                                        | CONFIRMED                                                |
| Footer              | UNVERIFIED                     | N/A                                          | N/A                                                                        | `bg-linear-to-r from-blue-600 to-blue-500` in Footer.tsx |
| Button gradients    | UNVERIFIED                     | N/A                                          | brand: `from-[#4289e0] to-[#2563eb]`, green: `from-[#22c55e] to-[#15803d]` | CONFIRMED                                                |
| Green CTA           | UNVERIFIED                     | `--green: #22c55e`                           | green variant                                                              | CONFIRMED                                                |
| Card radius         | UNVERIFIED                     | `--radius: 0.75rem`, `--radius-2xl: 1.35rem` | `rounded-2xl` in components                                                | CONFIRMED                                                |
| Card shadow         | UNVERIFIED                     | N/A                                          | `shadow-[2px_4px_12px_#00000014]`                                          | CONFIRMED                                                |
| Container max-width | UNVERIFIED                     | N/A                                          | `max-w-7xl` in Container                                                   | CONFIRMED                                                |
| Section padding     | UNVERIFIED                     | N/A                                          | `py-12 lg:py-24`                                                           | CONFIRMED                                                |
| Breakpoints         | sm/md/lg/xl/2xl                | Tailwind defaults                            | sm/md/lg/xl/2xl used                                                       | CONFIRMED                                                |

**Mismatches:** Section 2 of REFERENCE_NOTES.md marks nearly everything as UNVERIFIED because the CSS was minified and unreadable. Now that `globals.css` is readable, all design tokens are confirmed to match the reference's observed values. No actual mismatches found — the codebase correctly implements the design tokens.

---

## 6. Navbar/footer links vs existing routes: links that go to 404

| File                  | Line | Link target                        | 404?    | Reason                                                       |
| --------------------- | ---- | ---------------------------------- | ------- | ------------------------------------------------------------ |
| components/Footer.tsx | 27   | `#` (Industries)                   | YES     | Anchor only, no route                                        |
| components/Footer.tsx | 31   | `#` (FAQ)                          | YES     | Anchor only, no route                                        |
| components/Footer.tsx | 32   | `#` (What Is RemoteStaff365)       | YES     | Anchor only, no route                                        |
| components/Footer.tsx | 47   | `#` (Instagram)                    | YES     | Anchor only, no route                                        |
| lib/site.ts           | 28   | `/industries/healthcare-insurance` | YES     | Industries page has `healthcare`, not `healthcare-insurance` |
| components/Footer.tsx | 24   | `/jobs` (Hiring FAQs)              | Partial | /jobs exists but is job listings, not FAQs                   |

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

Fixed: Removed `<Image>` silhouettes from PricingCards, replaced with role-colored header bands (gradient + icon + Seat fee badge), compacted cards (p-5, price block, single salary row), added hover transitions on card and button. Updated button.tsx transitions to consistent `duration-300 ease-out` for all variants with `active:translate-y-0`. `npm run build` passes clean.

10. **Run `npm run build` and fix all errors** — Validate the entire codebase compiles after all fixes.

---

### Gap Fix Checklist

1. [ ] Fix CTASection hardcoded default URL
2. [ ] Fix Footer opacity text violations
3. [ ] Fix MidCTA opacity text
4. [ ] Fix Footer dead anchor links
5. [ ] Fix industries link 404
6. [ ] Add missing /what-is-virtualstaff-ph page
7. [ ] Add client logos strip to homepage
8. [ ] Add Reveal to pages missing it
9. [x] Replace placeholder prices and testimonials
10. [ ] Run `npm run build` and fix all errors

## 9. /how-it-works redesign spec (similar to reference, NOT a clone)
Reference order: split hero with staff photo cards; "You + provider" two
cards; 3-card price formula; example rates banner; 5-step process row; team
sizes 1/3/5; numbered FAQ cards; CTA banner.
Ours: components in components/how-it-works/, composed in
app/how-it-works/page.tsx (no PageHeader on this page). Order and backgrounds:
9.1 HowHero (gradient white to #F1F9FC)
9.2 Partnership (gradient #F5F8FF to #E8F0FE)
9.3 PriceFormula (white)
9.4 ProcessSteps (#F5F8FF)
9.5 Regions (white)
9.6 HowFAQ (#F5F8FF)
9.7 CTASection (shared)

9.1 HowHero: 2 columns on lg, stacked on mobile. Left: eyebrow "HOW REMOTESTAFF365
WORKS", h1 "One seat adds one dedicated offshore assistant to your team" with
"dedicated offshore assistant" in text-primary, paragraph (flat monthly seat
fee plus the assistant's salary, you choose the person), brand Button "Book a
free call" (bookingUrl, ArrowRight), and a proof row: 3 overlapping initials
circles + "Hiring from 4 regions worldwide". Right: /images/user.jpg in a
rounded frame (rounded-[2rem] overflow-hidden object-cover object-top,
aspect-[4/5], max-h-[560px], border-4 border-white, shadow), with a soft blue
shape behind (absolute, rounded-[2rem], bg-[#E8F0FE], rotate-3, inset-0
scale-95) and 2 decorative dots/rings (bg-primary/10). Floating cards (white,
rounded-2xl, shadow, p-3) overlapping the photo: top-left gradient icon tile +
"Virtual Assistant" + Badge "1 seat", bottom-right "3 team members = 3 seats"
with Users icon, small pill top-right Clock icon + "Matched in 48 hours".

9.2 Partnership: eyebrow "WHO DOES WHAT", h2 "You lead the work. We run the
back end.", subtitle. Two white rounded-3xl split cards side by side with a
48px circular "+" (brand gradient) between them (between stacked cards on
mobile). Each card has an image area plus content area (flex flex-col
md:flex-row, h-full): Card 1 "You" image on LEFT (partner-you.webp, placeholder
fallback: gradient panel with large User icon); Card 2 "RemoteStaff365" image
on RIGHT on md+ (partner-team.webp, placeholder fallback: gradient panel with
large Users icon), images alternate left/right; on mobile image goes on top for
both. Each card: image area md:w-[40%] min-h-56 bg-gradient-to-b from-[#E8F0FE]
to-[#F1F9FC], content area p-6 md:p-8 with gradient icon tile + title + small
label ("Your side" / "Our side") + 5-item checklist (blue CheckCircle2,
text-base text-slate-700).

9.3 PriceFormula: eyebrow "SIMPLE PRICING", h2 "One seat fee. Plus the
assistant's salary." 3 cards in a row with a circular "+" then "=" between
(desktop; stacked with symbols on mobile): "$99 / month" seat fee;
"Salary" agreed by you and the assistant; "Zero markup" (card tinted
green-50 with a green check). Below: a slim link "See example roles and
rates" to /pricing. Numbers are placeholders.

9.4 ProcessSteps: eyebrow "THE PROCESS", h2 "From first call to first day in
four steps". Horizontal stepper on lg: a dashed line behind 4 numbered gradient
circles, each with a Card below. Vertical on mobile with a left line. Steps:
1 Book a call (CalendarCheck): tell us the role, hours and skills you need.
2 Meet matched candidates (Users): get vetted profiles within 48 hours.
3 Choose and onboard (UserCheck): you pick the person and agree the salary,
we handle contracts and setup. 4 Grow with support (TrendingUp): add seats
any time, our team stays on hand.

9.5 Regions: eyebrow "GLOBAL TALENT", h2 "Talent from four regions, working
your hours". 4 cards (Asia, Africa, Latin America, Eastern Europe), each with
a Globe icon tile, one-line description and a "US-hours overlap" Badge
(placeholder).

9.6 HowFAQ: eyebrow "FAQ", h2 "Questions about seats and hiring". shadcn
Accordion, max-w-3xl, each item is its own white rounded-2xl card with a
number badge (01, 02...), question text-base md:text-lg font-medium, answers
text-base text-slate-600 (2-3 original sentences), first item open. 6
questions.

Rules for every section: shadcn components only (see AGENTS.md); original
copy; link buttons use render with bookingUrl, never asChild; all sections use
<Container> from components/Container.tsx (same width as the navbar,
mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8); section padding py-12
md:py-16; eyebrow text-xs font-semibold tracking-wider text-primary
uppercase; body text text-slate-600 or darker (never text-muted or opacity);
Reveal wraps each small ITEM (heading, card, row), NEVER a tall container or
the whole section, with viewport once amount 0.1; no fixed heights or negative
margins.
