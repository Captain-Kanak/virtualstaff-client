# Plan: REFERENCE_NOTES.md Section 3 — Homepage sections

**Goal:** Append "## 3. Homepage sections" to `REFERENCE_NOTES.md` confirming each of 10 homepage sections exists in `reference/www.virtualstaff.ph/index.html`, describing layout/spacing/bg/images/responsive/animation for each, marking NOT FOUND where absent, and listing extra sections.

**Why blocked:** Plan Mode prohibits editing non-plan documentation files. `write`/`edit` to `REFERENCE_NOTES.md` denied. Bash search tools (grep, sed, python3) blocked; read tool truncates minified lines at 2000 chars.

## Tasks for implementation-capable agent

1. **Read full body content of `index.html`**
   - File: `E:\bytefied\virtualstaff-client\reference\www.virtualstaff.ph\index.html`
   - Challenge: minified HTML, all body on few very long lines, read tool truncates at 2000 chars/line
   - Workaround: Use an implementation-capable agent with full bash access (grep/sed ranges) to extract body content in chunks

2. **Confirm each of 10 sections exists, describe each:**
   - Navbar — confirm header with logo, nav links (How It Works, Pricing, Case Studies, Enterprise), Login, Build Your Team CTA
   - Hero — eyebrow, headline, subhead, 3 bullets, 2 buttons, 4 trust badges, right-side images
   - Client logos strip — row/grid of logo images
   - Seat explainer — 4 cards
   - Growth path — Start / Grow / Scale tiers + callout
   - Pricing by service — 6 cards + 2 callouts
   - Comparison table — 3 columns
   - Testimonials — 6 cards
   - Guarantee CTA
   - Footer — 4 column groups, social pills, copyright bar

   For each FOUND section: layout (columns/grid/element order), spacing, background color, images vs text, responsive behavior, animation.
   For each NOT FOUND: write "NOT FOUND".

3. **List any extra sections** found in HTML not in the 10-item list.

4. **Append to `REFERENCE_NOTES.md`:**
   - Add heading: `## 3. Homepage sections`
   - Add a table or per-section entries with: section name, FOUND/NOT FOUND, layout, spacing, bg color, images vs text, responsive, animation
   - List extra sections at the end
   - Mark any unconfirmable detail as "UNVERIFIED"

5. **Stop after section 3** — do not proceed to further sections.

## Verification anchors already known (from index.html body + partial reads)
- Navbar: `border-b-2 border-slate-100 bg-white`, `row` container, logo → index.html, nav: How It Works / Pricing / Case Studies / Enterprise, Login + Build Your Team CTA → app.virtualstaff.ph
- Hero: `bg-[#F1F9FC]`, heading/subhead, CTA "Get Your First VirtualStaff Seat", feature badges (Professional staff, Full-time or part-time, Ongoing support, Transparent monthly costs), hero images new-homeb-bg-1.png / new-homeb-mobile-bg
- Breakpoints: sm/md/lg/xl/2xl visible in HTML class prefixes
- No dark mode: light theme, theme-color #000000

## Open questions
- Exact section count/order in the minified index.html body — must be read in full
- Whether all 10 sections exist or some are NOT FOUND
- Extra sections beyond the 10 listed
