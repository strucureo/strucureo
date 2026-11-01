# Page-by-page copy map

Rollback reference: `ff73f16bd1e7bb262e36d5da93fd4f06e1694b7f` (main at campaign start).

| Surface | Old message | New message | Facts |
| --- | --- | --- | --- |
| `app/layout.tsx` metadata base | unchanged | unchanged | — |
| `app/page.tsx` metadata | "Custom Software & Automation \| UAE & India" | "Engineering Studio: Embedded, AI & Secure Systems \| UAE & Singapore" | F-01, F-03 |
| `app/page.tsx` FAQ | websites/chatbots/ERP/MVP + 15,000 INR floor | capability + engagement path; no price floor | F-05, F-17 |
| `components/sections/Hero.tsx` | software list, "Book a free consultation" | engineering message, "Start a technical conversation" | F-02 |
| `components/sections/Sectors.tsx` | Build = websites, chatbots, ERP, MVPs | Build = client engineering across hardware, software, AI | F-05 |
| `components/sections/Campaign.tsx` WhatWeBuild | chips: websites, chatbots, ERP, MVP, software, automation | chips: six capabilities | F-05 |
| `app/services/page.tsx` | 6-product catalogue (website, chatbot, ERP, software, MVP, cloud) | 6 engineering capabilities + engagement path | F-05, F-17 |
| `app/labs/page.tsx` | AI agents, reusable modules, prototypes | research tracks + labelled project evidence incl. MCP Haven concept | F-07..F-11 |
| `app/industries/page.tsx` | "ready-made products" | industry products in shaping; industrial visual QA at early-partner stage | F-06, F-10 |
| `app/faq/page.tsx` | catalogue FAQ | engineering FAQ | F-05, F-17 |
| `app/approach/page.tsx` | diagnose → options → build → support | discovery → feasibility → prototype → pilot → production | F-05 |
| `app/about/page.tsx` | UAE & India, software lists | UAE/Singapore hypotheses, capability framing | F-01, F-03, F-04 |
| `app/uae/page.tsx` | "local expertise", software catalogue | UAE-focused engineering; no local-office claim | F-03, F-04 |
| `app/india/page.tsx` | India local studio, price-led | client page for India-based teams; no local-office or price-floor claim | F-04, F-17 |
| `app/llms.txt/route.ts`, `app/llms-full.txt/route.ts` | product catalogue | capability + evidence summary | F-05..F-11 |
| `lib/jsonld.ts` | "custom software, automation, chatbots, ERP" | capability list, UAE/Singapore areaServed | F-01, F-05 |
| `components/sections/Contact.tsx` | fabricated testimonials | removed; engagement path replaces them | F-18 |
| `app/actions.ts` | message-only form | structured technical enquiry fields | F-16 |
| `components/sections/Capabilities.tsx` | unused old catalogue | deleted | F-20 |
| `components/sections/CaseStudies.tsx` | unused fabricated case studies | deleted | F-19 |

## Navigation

- Top navigation drops `India` on campaign surfaces (Hero, SiteHeader); the
  `/india` route stays live and is still linked from the footer and sitemap.
  This is the one intentional navigation change in the diff; revert by restoring
  the nav entry if the market decision changes.
- No routes are deleted. `/services` is kept and re-contented per plan §5.

## Deliberately not changed

- Visual system, layout structure, section order, typography, motion.
- Build / Labs / Industries relationships.
- Blog posts and their URLs.
- Pricing on blog content (separate editorial decision).
