import { Section } from '@/components/shared/Section';

/**
 * Project evidence board.
 *
 * Every entry carries an explicit maturity label. Nothing here claims a
 * customer, a plant, an accuracy figure or a production deployment: see
 * docs/campaign-2026-11/facts-register.md (F-07 .. F-11).
 */

type Maturity = 'Public repository' | 'Concept' | 'Owner-reported';

type EvidenceItem = {
    title: string;
    maturity: Maturity;
    role: string;
    body: string;
    href?: string;
    hrefLabel?: string;
};

const items: EvidenceItem[] = [
    {
        title: 'Hermes Gateway',
        maturity: 'Public repository',
        role: 'Embedded and device integration',
        body:
            'A Rust service running on a Linux single-board computer, using I²C and Unix sockets to sit between hardware and software. The repository’s own README marks raw-byte sensor reading as a stub and names an external brain interface, so this is published as integration work rather than a finished sensor product.',
        href: 'https://github.com/theaathish/AI-powered-embedded',
        hrefLabel: 'View repository',
    },
    {
        title: 'Instagram Agent MCP',
        maturity: 'Public repository',
        role: 'AI and software infrastructure',
        body:
            'A Model Context Protocol server covering API integration, authentication and multi-account workflows. It is shown as agent infrastructure work. Runtime behaviour and security properties have not been independently verified, so no reliability or security claim is made here.',
        href: 'https://github.com/theaathish/Instagram_agent_mcp',
        hrefLabel: 'View repository',
    },
    {
        title: 'MCP Haven',
        maturity: 'Concept',
        role: 'Secure data research direction',
        body:
            'A research direction for permissioned, isolated access to sensitive data. It is a concept: there is no implementation published yet, and returning identifiers instead of source records is not by itself evidence of privacy. Threat modelling, permission checks and output controls would have to be demonstrated first.',
    },
    {
        title: 'Industrial visual QA',
        maturity: 'Owner-reported',
        role: 'Machine vision and inspection',
        body:
            'An inspection workflow for industrial lines: inspect, flag uncertain cases, route them to expert confirmation, feed the labelled result into candidate evaluation, then deploy under control. Publishable project evidence is not available yet, so no customer, plant, throughput or accuracy claim appears on this page. Missed defects, false rejects, latency and operating conditions are measured separately when they are measured at all.',
    },
];

const labelStyle: Record<Maturity, string> = {
    'Public repository': 'border-[#111111]/30 text-[#111111]',
    Concept: 'border-[#111111]/20 text-[#555555]',
    'Owner-reported': 'border-[#111111]/20 text-[#555555]',
};

export const ProjectEvidence = () => (
    <Section className="bg-white">
        <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#555555]">
                Project evidence
            </p>
            <h2 className="mb-6 text-4xl md:text-6xl font-bold tracking-tighter">
                What exists, and how far it goes.
            </h2>
            <p className="mb-16 max-w-3xl text-lg leading-relaxed text-[#6E6E6E]">
                Each entry states its own maturity. A heading is not a result, and a
                repository is not a deployment.
            </p>

            <div className="border-t border-[#111111]/10">
                {items.map((item, index) => (
                    <article
                        key={item.title}
                        className="grid gap-6 border-b border-[#111111]/10 py-10 md:grid-cols-[80px_1fr]"
                    >
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#555555]">
                            0{index + 1}
                        </span>
                        <div>
                            <div className="mb-3 flex flex-wrap items-center gap-3">
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                                <span
                                    className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-widest ${labelStyle[item.maturity]}`}
                                >
                                    {item.maturity}
                                </span>
                            </div>
                            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#555555]">
                                {item.role}
                            </p>
                            <p className="max-w-2xl leading-relaxed text-[#6E6E6E]">
                                {item.body}
                            </p>
                            {item.href && (
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block border-b border-[#111111]/30 pb-0.5 text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60"
                                >
                                    {item.hrefLabel ?? 'View'}
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </Section>
);
