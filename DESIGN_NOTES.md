# DESIGN_NOTES — Legacy Reference Study: virtualstaff.ph (HTTrack copy)

NOT LIVE CONTENT. This document records a visual study of the Philippines-focused
virtualstaff.ph competitor and is retained for reference only. The live
RemoteStaff365 site (app/, components/, lib/) is global-focused and contains no
Philippines-specific references.

Source: `/reference/www.virtualstaff.ph/` — an HTTrack mirror of `https://www.virtualstaff.ph/`.
Visual study only. Do not modify `/reference`.

## 1. Design tokens (extracted from `_next/static/css/c4ffbc3bc576c07c.css` — Tailwind v3.4.19 output)

### Color palette
| Role | Hex | Notes |
|------|-----|-------|
| Primary blue | `#2563eb` | Button text, borders, links |
| Primary blue (lighter) | `#4289e0`, `#3b82f6` | Gradient start |
| Primary blue (dark) | `#004c70`, `#0b1220`, `#172033` | Dark text / nav text |
| Hero bg | `#F1F9FC` | Light cyan-blue hero background |
| Soft blue bg | `#F5F8FF`, `#E8F0FE`, `#E3EBFC` | Card / section tints |
| Enterprise CTA (green) | `#22c55e` → `#15803d` | Gradient for `vs-enterprise-cta` |
| Muted text | `#64748b` (slate-600), `#9ca3af` | Secondary text |
| Footer gradient | `blue-600` → `blue-500` | `#2563eb` → `#3b82f6` |
| Social pill bg | `#2563eb` | Rounded-full social icon pills |

### Typography
- **Font family:** `Poppins` (dominant, ~49 usages), fallback `Inter, Arial, sans-serif`.
- **Headings:** `font-semibold` / `font-bold`, leading `snug`/`tight`. Sizes scale `text-lg` → `text-5xl` across breakpoints (h1 ~`2xl:text-5xl`, h2 ~`2xl:text-4xl`).
- **Body:** `1rem` / `16px`, `text-base`, `leading-relaxed`, color `text-black` / `slate-800`.
- **Small text:** `text-sm` / `14px` / `0.875rem` for captions and meta.

### Borders & radius
- Buttons: `border-radius: 0.75rem`, border `1.5px solid transparent` (primary) or `1.5px solid #2563eb` (secondary).
- Cards: `rounded-2xl` (base), `rounded-3xl` at `md`/lg.
- Avatar/icons: `rounded-full`, `rounded-lg`, `rounded-md`.

### Shadows
- Cards: `shadow-[2px_4px_12px_#00000014]` (≈ `0 2px 4px 12px` rgba(0,0,0,0.08)).
- Primary buttons: `box-shadow: 0 8px 18px rgba(37,99,235,0.35)`.
- Utility: `drop-shadow-[0_4px_14px_rgba(37,99,235,0.40)]`, `drop-shadow-[0_12px_28px_rgba(15,23,42,0.12)]`.

### Spacing / section padding
- Sections: `py-12`–`py-20` base, `py-24`–`py-32` on hero/CTA, `pt/pb 12–24`.
- Inner gap: `gap-4`–`gap-12`, `gap-16`–`gap-24` on lg.
- Container: `mx-auto`, `px-5` (base), `px-8` (footer), `max-w-6xl` / `max-w-7xl` at `2xl`. Wrapper class `row` + `mx-auto w-full max-w-6xl 2xl:max-w-7xl`.

### Button styles
**Normal (`vs-primary-cta`):**
- Gradient `linear-gradient(180deg, #4289e0, #2563eb)`, `#fff` text, `font-weight: 400`, `border-radius: 0.75rem`, `border: 1.5px solid transparent`, `text-align: center`, `cursor: pointer`, `display: inline-block`/`inline-flex`.
- Shadow `0 8px 18px rgba(37,99,235,0.35)`.
- Transition `transform 0.5s` + `box-shadow 0.5s` `cubic-bezier(0.22,1,0.36,1)`, `will-change: transform`.

**Hover (`vs-primary-cta:hover`):** `color: #fff` (lift/shadow emphasis via transform).

**Secondary (`vs-secondary-cta`):**
- `background: #fff`, `color: #2563eb`, `border: 1.5px solid #2563eb`, same radius/shadow/transition, plus `background-color` + `color` transitions.
- Hover: `color: #2563eb` (background fills/inks).

**Enterprise (`vs-enterprise-cta`):** Green gradient `#22c55e` → `#15803d`, same shape/radius/shadow pattern.

## 2. Homepage sections (in order — from `index-16a4dca68b4dff3b.js` chunk + about-us page)

1. **Hero** — `bg-[#F1F9FC]`, absolute gradient hero images (`new-homeb-bg-1.png`, `new-homeb-mobile-bg.html`), heading "Build Your Philippines Team / One VirtualStaff Seat at a Time", sub-copy "A better way to build your Philippines-based team", CTA "Get Your First VirtualStaff Seat". Feature badges row: "Professional staff", "Full-time or part-time", "Ongoing support", "Transparent monthly costs".
2. **How it works / value props** — "You choose the person and set the salary", "We handle the staffing structure, so it stays simple for you", "One clear fee: $99/month per staff + the staff salary (no markups)".
3. **Mid CTA** — "Ready to start? / Get Your First VirtualStaff Seat".
4. **Problem/agitation** — "Finding People Is Easy. Building a Reliable Team Is a Different Game. See What Happens When Businesses Keep Adding VirtualStaff Seats."
5. **Case studies / social proof** — "How businesses build reliable teams, add more capacity, …" (card grid).
6. **Bottom CTA** — "Start Building Your Back-Office Team Today" (`vs-primary-cta`) → external `app.virtualstaff.ph/signup/employer`.

**Layout/responsive breakpoints (media queries):** `min-width: 640px` (sm), `768px` (md), `1024px` (lg), `1280px` (xl), `1536px` (2xl), plus custom `450px`/`430px`/`425px`/`500px` mobile queries. Grids shift `grid-cols-1` → `sm:grid-cols-2` → `lg`; flex rows flip `md:flex-row`; sections hide/show with `hidden md:block` / `md:hidden lg:block`. Container max-width grows `max-w-6xl` → `2xl:max-w-7xl`.

## 3. Navbar & footer structure; inner pages

### Navbar (`about-us.html` header)
- Sticky-ish header (`border-b-2 border-slate-100 bg-white`), `row` container.
- Logo (left) → `index.html`.
- Desktop nav (right): **How It Works, Pricing, Case Studies, Enterprise** — `text-base font-normal capitalize text-vs-text-black hover:text-blue-600 transition-all duration-300`.
- Right actions: **Login** (→ `app.virtualstaff.ph/login/employer`) + **"Build Your Team"** primary CTA (→ `app.virtualstaff.ph/signup/employer`) with external-link arrow SVG.
- Mobile: hamburger menu (open/close SVG, rotate/scale transition), same links stacked, Login + Build Your Team CTA full-width.

### Footer (`about-us.html`)
- Gradient `bg-gradient-to-r from-blue-600 to-blue-500`.
- 4 column groups (`sm:grid sm:grid-cols-2`, `lg:flex-row`):
  1. **Company:** About VirtualStaff.ph, What VirtualStaff.ph Is, Case Studies, Blog, Contact Us.
  2. **Build Your Team:** How It Works, Pricing, Enterprise, Hiring FAQs.
  3. **Industries:** Healthcare & Insurance, Logistics & Shipping, Law/Legal, Accounting, Real Estate, Ecommerce/Retail, Customer Support, Home Services, Hospitality, Insurance Agencies, Construction Companies (each maps to an `industries/*.html` sub-page).
- Bottom bar: Copyright © 2026 VirtualStaff.ph, Terms of Use, Privacy Policy.
- Social icons (Facebook, Twitter/X, LinkedIn, YouTube) — each in a `rounded-full bg-[#2563eb] p-[8px]` pill, `text-white`.

### Inner pages that exist
`about`, `api`, `contact-us`, `how-it-works-employer`, `index`, `industries` (+11 industry sub-pages), `privacy`, `signals`, `terms`. Plus standalone pages: `case-studies`, `pricing`, `find-staff`, `what-is-virtualstaff-ph`, `blog`, `guarantee-30-days`, `guarantee-growing-team`, `guarantee-growth`, `guarantee-team`, `guarantee-work`.

## 4. Animations & interactions
- **Reveal-on-scroll:** Elements carry inline `style="opacity:0;transform:translateY(60px)"` (or `30px`/`100px`), animated in via Framer Motion (`whileInView`, `viewport`, `variants b.gy/b.bK/b.qK` seen in index chunk).
- **Staggered list reveals:** `transform:translateY(30px)` on list items/cards.
- **Buttons:** `transition … 0.5s cubic-bezier(0.22,1,0.36,1)` on transform + box-shadow (+ background-color/color for secondary); `will-change: transform`.
- **Mobile menu:** hamburger open/close with `rotate-0→rotate-90`, `scale-100→scale-0`, `opacity-100→opacity-0`, `transition-all duration-300`.
- **Keyframes:** `@keyframes spin`, `@keyframes pulse` (`animate-spin`, `animate-pulse`).
- **Links:** `hover:text-blue-600`, `transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]` on nav; footer social pills hover.

## 5. Missing / broken in the HTTrack copy
- **Next.js image optimization URLs:** `srcSet`/`src` point to `/_next/image?url=…&w=…&q=…` — these require the Next.js dev/server image optimizer and will not resolve as static files.
- **Image stubs:** Many `about-us-iconN.html`, `industries-iconN.html`, `new-homeb-imgN.html` etc. files are ~24 KB `.html` stubs (likely HTTrack errors or redirect pages), not real images.
- **External app links:** Login/Signup/"Build Your Team" point to `https://app.virtualstaff.ph/` (external app, not part of the marketing site).
- **Third-party scripts:** Zoho SalesIQ, VWO, Meta Pixel, HubSpot, OutsourceAccelerator tracking — reference external domains; some are blocked/unreachable from the mirror.
- **Fonts:** `Poppins` loaded via `_next/static/media/*.woff2` next-font preloads — present in the mirror but tied to Next.js font handling.
- **`favicon.png`** is used as OG image; `favicon.ico` present.
- No visible dark-mode toggle; site is light-only with `theme-color: #000000`.
