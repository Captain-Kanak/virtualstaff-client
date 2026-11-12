# Plan: REFERENCE_NOTES.md Section 5 — Components, interactions and shadcn mapping

**Goal:** Append "## 5. Components, interactions and shadcn mapping" to `REFERENCE_NOTES.md`. Cover: (1) reusable UI pieces across the site, (2) shadcn/ui mapping for each, (3) interactions list with framer-motion flag, (4) external things NOT to copy/keep. Stop after section 5.

**Blocked:** I am in Plan Mode — cannot write/edit `REFERENCE_NOTES.md` directly (write/edit tools denied for non-plan files). Bash search tools blocked. Read tool truncates minified lines at 2000 chars.

## Available shadcn/ui components (from components/ui)
accordion, badge, button, card, checkbox, Container, form, input, label, Logo (custom), navigation-menu, select, separator, sheet, table, textarea

## Reusable UI pieces to catalog (from the HTTrack mirror)
Navbar, footer, section header, card types, CTA banner, accordion, table, badge, hero image block, feature badges, social pills, mobile menu, logo, heading hierarchy, section containers.

## shadcn/ui mapping
Map each UI piece to an existing component/ui file, or mark "custom":
- Navbar → navigation-menu (shadcn) — custom header wrapper
- Footer → custom (no shadcn footer)
- Section header → custom
- Card types → card (shadcn)
- CTA banner → custom (button wrapper)
- Accordion → accordion (shadcn)
- Table → table (shadcn)
- Badge → badge (shadcn)
- Button → button (shadcn)
- Container → Container (shadcn)
- Form → form/input/label (shadcn)
- Mobile menu → sheet (shadcn) / navigation-menu

## Interactions list (flag which need framer-motion)
- Scroll reveal → framer-motion
- Hover effects → CSS (no framer-motion needed)
- Mobile menu → framer-motion (rotate/scale/opacity transitions)
- Accordion → framer-motion or shadcn accordion
- Carousel → framer-motion (if present)

## External things NOT to copy/keep
- Tracking scripts: Zoho SalesIQ, VWO, Meta Pixel, HubSpot, OutsourceAccelerator
- app.virtualstaff.ph login/signup links
- Their logo, photos, text
- theme-color #000000 (their branding)

## Implementation steps
1. Read REFERENCE_NOTES.md sections 1–4 to see existing content.
2. Scan HTML/CSS for reusable UI piece names (navbar, footer, card, CTA, etc.).
3. Map each to shadcn/ui component list above.
4. List interactions with framer-motion flags.
5. List external items not to copy.
6. Append `## 5. Components, interactions and shadcn mapping` to REFERENCE_NOTES.md.
7. Stop after section 5.
