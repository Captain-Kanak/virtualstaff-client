# AGENTS.md

## Always first
- Read REFERENCE_NOTES.md before any task. Section 0 is the project direction:
  similar to the reference site, never an exact clone.
- Make small, focused changes. Only edit the files the task names.

## Stack
Next.js App Router, TypeScript, Tailwind v4, shadcn/ui (Base UI, not Radix),
framer-motion, lucide-react, react-hook-form + zod.

## shadcn/ui
- Always use components from components/ui (Button, Card, Badge, Input,
  Textarea, Label, Select, Checkbox, Accordion, Table, Sheet, Form).
- Missing one? Add it with `npx shadcn@latest add <name>`.
- Never build custom versions of components shadcn already provides.
- Base UI: NEVER use asChild. For link buttons use
  <Button render={<Link href="..." />}>Label</Button>, and for external links
  render={<a href={bookingUrl} target="_blank" rel="noopener noreferrer" />}.
- Before using Select, Form, Sheet or Accordion, read the file in
  components/ui to follow its API.

## Buttons and links
- Primary CTAs: variant="brand". Secondary: variant="outline".
- All booking/signup CTAs link to bookingUrl in lib/site.ts (Calendly
  placeholder). No login or signup pages.

## Content and design
- Original copy only. Never copy text, images, icons or logos from /reference.
  /reference is read-only and for visual study.
- Use placeholder images only when needed. Prefer lucide icons and CSS visuals.
- Body text must be readable: use text-slate-600 or darker. Never use
  opacity-* or very light colors on text.
- Page content goes in arrays at the top of each component file.
- Scroll animations use the Reveal component and must end at full opacity.

## Scope
- No dashboards, admin panels, or login pages.

## Done means
- Run `npm run build` after every task and fix errors.
- Do not start the dev server unless asked.

## Design tokens (MUST follow)
1. All colors come from CSS variables in app/globals.css :root. Never write
   hex, rgb or hsl in components, TSX, or lib files. Never use Tailwind
   default palette colors (slate-*, blue-*, gray-*, green-*, yellow-*, etc.).
   white and black are allowed.
2. Token list and meaning:
   brand-primary (main brand blue, buttons/links), brand-primary-hover,
   brand-primary-light (gradient end), brand-soft / brand-tint / brand-wash
   (light blue backgrounds), surface-hero (hero bg), brand-secondary (dark
   navy), brand-accent (yellow), brand-tag-blue, brand-success (green),
    text-heading, text-body, line, line-soft, footer-bg, footer-text,
    footer-text-muted, shadow-card.
   Tailwind classes: bg-brand-primary, text-primary, bg-brand-soft,
   text-text-body, border-line, shadow-card, etc.
3. Need a new color? First add a token in :root and map it in @theme inline,
   then use the class. Never use a one-off color.
4. shadcn --secondary and --accent stay light tints. Do not turn them into
   navy or yellow. Navy and yellow are brand-secondary and brand-accent.
5. Fonts: only font-sans and font-heading. Font is loaded in app/layout.tsx
   via next/font and exposed as --font-poppins. Never hardcode font-family.
6. Tailwind classes must be literal strings (no dynamic class names).
7. Before finishing any task, run these and fix every match:
   grep -rnE "#[0-9a-fA-F]{3,8}\b" app components lib --include=*.tsx --include=*.ts
   grep -rnE "\b(bg|text|border|from|via|to|ring|fill|stroke|shadow)-(slate|gray|zinc|blue|sky|indigo|yellow|amber|green|emerald|red|rose)-" app components lib
8. At the end of every task print one suggested git commit message in
   Conventional Commits format (type(scope): summary, plus a short body).
