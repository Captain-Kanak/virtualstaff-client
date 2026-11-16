# Home Page Typography Audit Report

**Source:** `app/(common)/page.tsx` renders 11 sections in order:
Hero → ValueProps → TrustedBy → MidCTA → HowItWorks → GrowthPath → PricingCards → ComparisonTable → Testimonials → Guarantee → BottomCTA

**Shared component:** `components/SectionHeading.tsx` (NOT used by any home section)

---

## Section-by-Section Table

| Section | Eyebrow classes | H2 classes (size, weight, tracking, leading, color) | Subtitle classes | Header alignment | Header bottom margin | Section padding (top/bottom) | Container used | Card title (h3) classes | Card body text classes |
|---|---|---|---|---|---|---|---|---|---|
| Hero | NONE | NONE (uses h1: `text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground`) | `text-lg md:text-xl text-slate-600 max-w-xl mt-6` | left | mt-6 (on subtitle) | pt: hero-offset (CSS var) / pb-12 md:pb-20 | Container (relative z-10) | NONE | NONE |
| ValueProps | `text-xs font-semibold tracking-wider text-primary uppercase` | `text-2xl md:text-4xl font-semibold text-foreground mt-2` | NONE (missing!) | center | mt-10 on wrapper div | py-12 md:py-16 | Container | `text-lg font-semibold text-foreground mt-5` | `text-base leading-relaxed text-slate-600 mt-2` |
| TrustedBy | NONE | NONE (no h2 at all) | `text-base md:text-lg font-medium text-slate-600` (used as headline, NOT eyebrow) | center | mb-8 on wrapper | py-12 md:py-14 | Container | NONE (uses text-3xl md:text-4xl font-bold text-primary for stat numbers) | NONE |
| MidCTA | NONE | `text-2xl md:text-4xl font-semibold` (MISSING text-foreground) | `text-white/90 text-base mt-2` (TOO LIGHT - opacity on colored bg) | center→md:text-left | N/A (no margin specified) | py-8 md:py-12 | Container | NONE | NONE |
| HowItWorks | `text-xs font-semibold tracking-wider text-primary uppercase` | `text-2xl md:text-4xl font-semibold text-foreground mt-2` | `text-slate-600 max-w-2xl mx-auto mt-4` (MISSING text-lg!) | center | mt-4 | py-12 md:py-16 | Container | `text-lg font-semibold text-foreground mt-5` | `text-base leading-relaxed text-slate-600 mt-2` |
| GrowthPath | `text-xs font-semibold tracking-wider text-primary uppercase` | `text-2xl md:text-4xl font-semibold text-foreground mt-2` | `text-slate-600 max-w-2xl mx-auto mt-4` (MISSING text-lg!) | center | mt-4 | py-12 md:py-16 | Container | `text-xl font-semibold text-foreground` (DIFFERENT - text-xl vs text-lg) | `text-base leading-relaxed text-slate-600 mt-4` |
| PricingCards | `text-xs font-semibold tracking-wider text-primary uppercase` | `text-2xl md:text-4xl font-semibold text-foreground mt-2` | `text-slate-600 max-w-2xl mx-auto mt-4` (MISSING text-lg!) | center | mt-4 | py-16 md:py-20 | Container | NONE (nested RolePricingCard) | NONE (nested RolePricingCard) |
| ComparisonTable | `text-xs font-semibold tracking-wider text-primary uppercase` | `text-2xl md:text-4xl font-semibold text-foreground mt-2` | `text-slate-600 max-w-2xl mx-auto mt-4` (MISSING text-lg!) | center | mt-4 | py-12 md:py-16 | Container | NONE | NONE |
| Testimonials | `text-xs font-semibold tracking-wider text-primary uppercase` | `text-2xl md:text-4xl font-semibold text-foreground mt-2` | `text-slate-600 max-w-2xl mx-auto mt-4` (MISSING text-lg!) | center | mt-4 | py-12 md:py-16 | Container | NONE (uses text-base font-semibold text-foreground for names) | `text-base leading-relaxed text-slate-700 mt-4` (slate-700 vs slate-600) |
| Guarantee | `text-xs font-semibold tracking-wider text-primary mt-5` | `text-2xl md:text-4xl font-semibold text-foreground mt-2` | `text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto mt-4` (text-base md:text-lg vs text-lg) | center | mt-4 | py-12 md:py-16 | Container className="max-w-6xl mx-auto px-5" (DIFFERENT width) | NONE | `text-base font-medium text-slate-800` (slate-800 vs slate-600) |
| BottomCTA | NONE | `text-3xl lg:text-5xl font-bold tracking-tight mb-6` (DIFFERENT - larger/bolder than others) | `text-blue-100 text-lg mb-8 max-w-2xl mx-auto` (text-blue-100 instead of text-slate-600) | center | mb-6 (on h2) | py-16 lg:py-24 | Container className="text-center" | NONE | NONE |

---

## Shared SectionHeading Component Reference

- Eyebrow: `text-xs font-semibold tracking-wider text-primary uppercase` (span)
- h2: `mt-2 text-3xl lg:text-4xl font-bold tracking-tight text-foreground`
- Subtitle: `mt-4 text-lg text-muted leading-relaxed max-w-2xl` (+ mx-auto if centered)
- Alignment: `items-center text-center` or `items-start`

---

## Inconsistencies Found

### 1. No section uses the shared SectionHeading component
All 11 sections inline their own eyebrow/h2/subtitle markup instead of importing and using `components/SectionHeading.tsx`.

### 2. H2 size/weight variants
- Standard (6 sections): `text-2xl md:text-4xl font-semibold text-foreground` — ValueProps, HowItWorks, GrowthPath, PricingCards, ComparisonTable, Testimonials
- Guarantee: same as standard ✓
- MidCTA: same but **missing `text-foreground`** class
- BottomCTA: `text-3xl lg:text-5xl font-bold tracking-tight` — larger, bolder, uses `tracking-tight`
- Hero: uses h1 instead of h2, `text-5xl md:text-6xl xl:text-7xl font-extrabold`
- TrustedBy: no h2 at all
- SectionHeading shared: `text-3xl lg:text-4xl font-bold tracking-tight` — different from home page standard

### 3. Eyebrow inconsistency
- Standard (6 sections): `text-xs font-semibold tracking-wider text-primary uppercase`
- TrustedBy: no eyebrow
- MidCTA: no eyebrow
- Hero: no eyebrow
- Guarantee: same but adds `mt-5` (should be on container, not eyebrow)
- SectionHeading shared: matches standard ✓

### 4. Subtitle class variants
- Standard: `text-slate-600 max-w-2xl mx-auto mt-4` — but HowItWorks, GrowthPath, PricingCards, ComparisonTable, Testimonials all **missing `text-lg`**
- Hero: `text-lg md:text-xl text-slate-600 max-w-xl mt-6` — uses `md:text-xl` and `max-w-xl`, different mt
- GrowthPath: subtitle missing `text-lg` (only `text-slate-600`)
- Guarantee: `text-base md:text-lg` instead of `text-lg`
- MidCTA: `text-white/90 text-base mt-2` — opacity white on blue background (violates AGENTS.md readability rule)
- TrustedBy: uses `text-base md:text-lg font-medium text-slate-600` as headline substitute

### 5. Section padding variants
- Most common: `py-12 md:py-16` (ValueProps, HowItWorks, GrowthPath, ComparisonTable, Testimonials, Guarantee)
- TrustedBy: `py-12 md:py-14`
- MidCTA: `py-8 md:py-12` (thinner)
- PricingCards: `py-16 md:py-20` (taller)
- BottomCTA: `py-16 lg:py-24` (taller, uses lg breakpoint)
- Hero: `pb-12 md:pb-20` with hero-offset (no pt class)

### 6. h3 (card title) variants
- Standard: `text-lg font-semibold text-foreground` — ValueProps, HowItWorks
- GrowthPath: `text-xl font-semibold text-foreground` — one size larger
- TrustedBy: no h3 (uses text-3xl for stat numbers)
- Testimonials: no h3 (uses `text-base font-semibold text-foreground` for names)

### 7. Card body text variants
- Standard: `text-base leading-relaxed text-slate-600` — ValueProps, HowItWorks
- GrowthPath: same but `mt-4` instead of `mt-2`
- Testimonials: `text-slate-700` instead of `text-slate-600`
- Guarantee: `text-base font-medium text-slate-800` — darker + font-medium

### 8. Container width variants
- Standard: `Container` (default max-w-6xl mx-auto px-5 via Container component)
- Guarantee: `Container className="max-w-6xl mx-auto px-5"` (redundant, same classes)
- BottomCTA: `Container className="text-center"` (adds text-center)

---

## Sections Not Using SectionHeading

**All 11 sections** do not use the shared `SectionHeading` component:
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

---

## Proposed Standard (Most Common Values)

| Property | Proposed Standard |
|---|---|
| Eyebrow | `text-xs font-semibold tracking-wider text-primary uppercase` |
| h2 size | `text-2xl md:text-4xl` |
| h2 weight | `font-semibold` |
| h2 tracking | none (default) |
| h2 leading | none (default) |
| h2 color | `text-foreground` |
| h2 margin | `mt-2` |
| Subtitle size | `text-lg` |
| Subtitle color | `text-slate-600` |
| Subtitle width | `max-w-2xl mx-auto` |
| Subtitle margin | `mt-4` |
| Header alignment | center |
| Section padding | `py-12 md:py-16` |
| Container | `Container` (default) |
| h3 size | `text-lg` |
| h3 weight | `font-semibold` |
| h3 color | `text-foreground` |
| Card body color | `text-slate-600` |

---

## Too-Light Text Colors (violating AGENTS.md readability rule)

AGENTS.md states: "Body text must be readable: use text-slate-600 or darker. Never use opacity-* or very light colors on text."

1. **MidCTA subtitle** (`MidCTA.tsx:22`): `text-white/90 text-base mt-2` — uses opacity white on colored background
2. **SectionHeading shared subtitle** (`SectionHeading.tsx:45`): `text-lg text-muted leading-relaxed max-w-2xl` — uses `text-muted` which is too light
3. **Testimonials card body** (`Testimonials.tsx:79`): `text-slate-700` — darker than standard slate-600, but still within acceptable range
4. **Guarantee card body** (`Guarantee.tsx:53`): `text-slate-800` — darker than standard slate-600, acceptable

---

## Recommendations for Implementation

1. Refactor all 11 home sections to use the shared `SectionHeading` component for consistent eyebrow/h2/subtitle
2. Align Hero to use h2+eyebrow pattern instead of standalone h1
3. Fix MidCTA missing `text-foreground` on h2 and replace `text-white/90` subtitle
4. Add missing `text-lg` to subtitles in HowItWorks, GrowthPath, PricingCards, ComparisonTable, Testimonials
5. Standardize section padding to `py-12 md:py-16`
6. Standardize h3 to `text-lg font-semibold text-foreground`
7. Standardize card body to `text-base leading-relaxed text-slate-600`
8. Remove `text-muted` from SectionHeading shared component subtitle
