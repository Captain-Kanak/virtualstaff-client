# Reference Notes:

virtualstaff.ph (HTTrack copy in /reference)

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

Stub .html pages (24,617 bytes each, HTTrack error stubs, not real pages): about/, api/, contact-us/, how-it-works-employer/, index/, privacy/, terms/ each contain an index.html stub; \_next/data/index.html; \_next/ root data.html and index.html; signals/ (config.html, iwl.html, iwl0fc5.html, plugins.html) plus signals/config/index.html and signals/plugins/index.html; static/chunks/_.html (19) and static/img/virtual_profile.html; plus root-level stubs (api.html, index-2.html, track.min.html, _.json.html manifests, next.config.mjs.html, \_next.html, and all icon/img/bg stubs listed in 1.6).

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

### 1.8 DESIGN_NOTES.md claims I could confirm

Read DESIGN_NOTES.md. Confirmed from the mirror:

- Mirror source is reference/www.virtualstaff.ph/ (HTTrack copy) — confirmed
- Image stubs are ~24 KB .html files (e.g. about-us-iconN.html, industries-iconN.html, new-homeb-imgN.html) — confirmed, all exactly 24,617 bytes
- Fonts: Poppins .woff2 present under \_next/static/media/ — confirmed, 48 files
- favicon.ico and favicon.png present at root — confirmed
- CSS at \_next/static/css/c4ffbc3bc576c07c.css exists (220,803 bytes) — confirmed
- Homepage chunk index-16a4dca68b4dff3b.js exists — confirmed
- All listed inner pages exist (about, api, contact-us, how-it-works-employer, index, industries + 11 sub-pages, privacy, signals, terms, case-studies, pricing, find-staff, what-is-virtualstaff-ph, blog, guarantee-\*) — confirmed; guarantee pages are 24,617-byte stubs (dead in ref)
- /\_next/image?url=… optimization URLs require the Next.js server — not confirmed from file listing alone (would require reading .html source)
- Dark mode absent / light-only — not confirmed from file listing alone
- Exact design-token hex values — not confirmed from file listing alone (would require reading the CSS)
