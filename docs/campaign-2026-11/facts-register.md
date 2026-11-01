# Facts register — engineering repositioning campaign

Every claim that may appear on an acquisition surface must map to a row here.
Status values: `verified` (observed in a source), `owner-reported` (the owner
said it, no external evidence), `concept` (an idea, not implemented),
`blocked` (must not be published yet).

| ID | Claim | Source | Status |
| --- | --- | --- | --- |
| F-01 | Positioning: Embedded Intelligence × AI Infrastructure × Secure Systems Engineering. | plan.md §1 | verified (owner brief) |
| F-02 | Customer message: "We engineer solutions and products around real technical problems — using hardware, software and AI where it adds value." | plan.md §1 | verified (owner brief) |
| F-03 | Initial acquisition-market hypotheses are the UAE and Singapore. | plan.md §1 | verified (owner brief) — labelled a hypothesis, not a presence |
| F-04 | Strucureo has no UAE, Singapore or other overseas office; no local presence is implied anywhere on the site. | plan.md §1 | verified (constraint) |
| F-05 | Six capabilities: Product & Systems Engineering; Software & Infrastructure Engineering; AI & Agentic Systems Engineering; Embedded & Connected Systems; Machine Vision & Inspection; Secure Data & AI Infrastructure. | plan.md §3 | verified (owner brief) |
| F-06 | Capability headings do not establish production readiness or certification. | plan.md §3 | verified (constraint) |
| F-07 | Hermes Gateway: public repository, Rust, Linux SBC integration, I²C and Unix sockets; README labels raw-byte sensor reading a stub and names an external brain interface. | plan.md §4; repository | owner-reported — published only as a partial embedded integration example |
| F-08 | Instagram Agent MCP: public repository documenting MCP, API integration, authentication and multi-account workflows. | plan.md §4; repository | owner-reported — runtime and security properties not independently verified |
| F-09 | MCP Haven: a concept/research direction. | plan.md §4 | concept — must be labelled as such |
| F-10 | Industrial visual QA: an engineering application the owner reports working on; publishable project evidence not yet available. | plan.md §4 | owner-reported — no customer, factory, metric or result may be claimed |
| F-11 | Industrial learning loop: inspect → flag uncertain cases → expert confirmation → labelled feedback → candidate evaluation → controlled deployment. | plan.md §4 | verified (method description, not a result) |
| F-12 | No promise of daily accuracy increases; missed defects, false rejects, latency and operating conditions are evaluated separately. | plan.md §4 | verified (constraint) |
| F-13 | Contact email support@strucureo.com. | site, lib/jsonld.ts | verified |
| F-14 | Phone / WhatsApp +91 93442 75731. | site, Contact.tsx | verified |
| F-15 | Founder and Managing Director: Nagaratinam S; founded 2026-02-26. | site, lib/jsonld.ts | verified (on-site record) |
| F-16 | Lead capture: server action emails strucureo@gmail.com and auto-replies; /api/lead records an event to webhook or Telegram when configured. | app/actions.ts, app/api/lead/route.ts | verified (code) |
| F-17 | The 15,000 INR price floor is a website-project floor and does not carry into complex engineering offers. | plan.md §5 | verified (constraint) — removed from engineering surfaces |
| F-18 | Testimonials attributed to "Startup Founder" and "CTO" in Contact.tsx. | components/sections/Contact.tsx | **no source** — removed |
| F-19 | Case-study metrics in CaseStudies.tsx (40% ops cost, Series B fintech, 100k+ events/sec manufacturing). | components/sections/CaseStudies.tsx | **no source** — component removed |
| F-20 | Old catalogue: websites, chatbots, ERP, CRM, MVP packages, cloud support as primary categories. | plan.md §3 | withdrawn from acquisition surfaces |

## Rules applied

1. No customer name, logo, factory, metric or deployment claim appears without
   a row above and a source that supports it.
2. Maturity labels are required wherever a project is shown: `public repository`,
   `concept`, `owner-reported`.
3. Unknown is published as unknown, never as zero or as a result.
