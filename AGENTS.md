# AGENTS.md

## Stack

- Next.js App Router
- TypeScript
- Tailwind v4
- shadcn/ui
- framer-motion
- lucide-react

## shadcn/ui usage

- ALWAYS use shadcn/ui components from `components/ui` (Button, Card, Badge,
  Input, Textarea, Label, Select, Checkbox, Accordion, Table, Sheet, Form).
- If a needed shadcn component is missing, add it with
  `npx shadcn@latest add <name>`.
- Never create custom versions of components shadcn already provides.

## Buttons

- Use `Button variant="brand"` for primary CTAs.
- Use `Button variant="outline"` for secondary ones.
- All booking CTAs link to `bookingUrl` from `lib/site.ts`.
- This shadcn setup uses Base UI, NOT Radix. Never use `asChild`. For link
  buttons use: <Button variant="brand" size="xl" render={<Link href="..." />}>
  Label</Button>. For external links (bookingUrl) use
  render={<a href={bookingUrl} target="_blank" rel="noopener noreferrer" />}.
- Use Sheet, Accordion, Select etc. following Base UI conventions already used
  in components/ui. Check an existing component before guessing the API.

## Copy and assets

- Write original copy; never copy text/images from `/reference`.
- Use placeholder images.
- `/reference` is for visual study only. Do not modify `/reference`.

## Scope

- No dashboards, admin panels, or login pages.

## Data

- Put page content in arrays at the top of each component file.

## Build

- Run `npm run build` after every task and fix errors.
