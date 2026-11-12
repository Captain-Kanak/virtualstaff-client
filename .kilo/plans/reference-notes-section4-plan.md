# Plan: REFERENCE_NOTES.md Section 4 — Inner pages

**Goal:** Append "## 4. Inner pages" to `REFERENCE_NOTES.md`. For each page in the section 1 page table except the homepage, open its .html and write 4–8 lines: purpose, sections in order, layout, any form/accordion/table, and its CTA. Cover: about, how-it-works, pricing, case-studies, enterprise, contact, blog, find-staff, what-is, terms, privacy, one industries page (shared template), one guarantee page. Also note which pages share the same template. Stop after section 4.

## Pages to cover (from REFERENCE_NOTES.md section 1.3)

| Page | File path | Route |
|------|-----------|-------|
| About | about-us.html | /about |
| How it works | how-it-works-employer.html | /how-it-works |
| Pricing | pricing.html | /pricing |
| Case studies | case-studies.html | /case-studies |
| Enterprise | enterprise.html | /enterprise |
| Contact | contact-us.html | /contact-us |
| Blog | blog.html | /blog |
| Find staff / jobs | find-staff.html | /find-staff |
| What is VirtualStaff | what-is-virtualstaff-ph.html | /what-is-virtualstaff-ph |
| Terms | terms-of-use.html | /terms |
| Privacy | privacy-policy.html | /privacy |
| Industries (one representative) | industries/accounting-firms.html | /industries/accounting-firms |
| Guarantee (one representative) | pick any existing guarantee page | /guarantee-* |

Note: guarantee pages in the mirror are 24,617-byte stubs (dead in ref) — mark as "stub — NOT FOUND content".

**Pages sharing a template:** All 11 industries pages share one template. Guarantee pages may share a template too. Confirm by reading.

## Per-page deliverable (4–8 lines each)
For each page write:
1. Purpose (in your own words; do not copy site text)
2. Sections in order (top → bottom)
3. Layout (columns, grid, container, row)
4. Any form, accordion, or table (yes/no + brief)
5. CTA (button text + destination)

Mark any page that is a 24,617-byte stub as "NOT FOUND — HTTrack error stub".

## Template grouping
After the per-page entries, add a short subsection listing which pages share templates:
- All 11 `industries/*.html` pages share one template (confirm by reading two)
- Other groupings if observed (e.g., guarantee pages)

## Blocked constraints (why an implementation agent is needed)
- I am in Plan Mode: cannot write/edit `REFERENCE_NOTES.md` directly (write/edit tools denied for non-plan files).
- Bash search tools (grep, sed, python3, head, Select-String, Get-Content) are blocked by permissions.
- Read tool truncates minified HTML lines at 2000 chars; all page bodies are on few very long lines.
- Need full bash access to extract body content via grep/sed ranges.

## Implementation steps for the agent
1. Read `REFERENCE_NOTES.md` section 1.3 to get the exact page list.
2. For each target page, use `grep -o` / `sed` ranges on the .html file to extract body content between `<body>` and `</body>` (or read via bash `Get-Content` with ranges).
3. Identify sections, layout, forms/accordions/tables, and CTA per page.
4. Confirm template sharing (read two industries pages; compare).
5. Append `## 4. Inner pages` to `REFERENCE_NOTES.md` with per-page entries and template groupings.
6. Stop after section 4 — do not proceed further.

## Existing context already confirmed
- Navbar on all pages: `border-b-2 border-slate-100 bg-white`, `row` container, logo → index.html, nav links, Login + Build Your Team CTA → app.virtualstaff.ph
- Breakpoints: sm/md/lg/xl/2xl visible in HTML classes
- All pages load `_next/static/css/c4ffbc3bc576c07c.css` and poppins .woff2 fonts
- theme-color: #000000 (light theme)
