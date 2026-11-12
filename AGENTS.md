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
