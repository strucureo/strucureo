import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
    Factory,
    Handshake,
    ScanEye,
} from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';
import { breadcrumbList, faqPageNode } from '@/lib/jsonld';
import { assertNoPlaceholders } from '@/lib/guard';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { SplitList } from '@/components/shared/SplitList';
import { NumberedRow } from '@/components/shared/NumberedRow';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Contact } from '@/components/sections/Contact';

const SITE_URL = 'https://www.strucureo.com';

type ProductLine = {
    title: string;
    description: string;
    includes: string[];
    icon: LucideIcon;
};

/**
 * 2026-11 repositioning: no product line here is claimed as deployed, and no
 * customer, plant or performance figure is published. See
 * docs/campaign-2026-11/facts-register.md (F-06, F-10, F-11).
 */
const productLines: ProductLine[] = [
    {
        title: 'Industrial visual inspection',
        description:
            'An inspection workflow for production environments: inspect, flag the cases the model is unsure about, route them to an expert, then evaluate candidates before anything is deployed into an acceptance decision.',
        includes: ['Inspection workflow', 'Uncertain-case routing', 'Expert confirmation', 'Labelled feedback', 'Candidate evaluation'],
        icon: ScanEye,
    },
    {
        title: 'Operations systems for industry',
        description:
            'Configured operational systems around production, maintenance and quality work, built from components proven in client engineering rather than from a blank page.',
        includes: ['Configuration', 'Guided setup', 'Team training', 'Support path'],
        icon: Factory,
    },
    {
        title: 'Early-partner builds',
        description:
            'For industries we have not packaged yet: a scoped Build engagement shaped into a reusable starting point, with your team feeding the roadmap.',
        includes: ['Scoped pilot', 'Your feedback', 'Roadmap input'],
        icon: Handshake,
    },
];

const differenceSteps = [
    {
        title: 'Start from proven work',
        description:
            'Industry products begin as validated modules from real client engineering — not from a blank page and not from a slide.',
    },
    {
        title: 'Configured, not custom-built',
        description:
            'Instead of a full custom project, we configure the product to your team, data, and workflow, and say which parts are still being proven.',
    },
    {
        title: 'Measured before launched',
        description:
            'A pilot with defined measurements comes before any production use. Missed defects, false rejects, latency and operating conditions are evaluated separately.',
    },
    {
        title: 'Keeps improving',
        description:
            'What each deployment teaches feeds back into Labs and returns to Build as a stronger module — recorded, not assumed.',
    },
];

const faqItems = [
    {
        question: 'What are Strucureo Industries products?',
        answer:
            'Strucureo Industries packages validated Strucureo Labs work into industry products. The first packages are being shaped with early partners, so none of them is claimed as deployed at a customer site yet.',
    },
    {
        question: 'How is this different from a custom Build project?',
        answer:
            'A Build engagement is engineered around your specific problem. An Industries product starts from a validated core and is configured to your team — narrower in scope, faster to start, and shaped by prior deployments where those exist.',
    },
    {
        question: 'Is there a working visual-inspection product I can buy?',
        answer:
            'No. Industrial visual inspection is at early-partner stage: the inspection workflow and the expert-confirmation loop exist as engineering work, but there is no packaged product with published accuracy figures. We will not present one until the measurements exist.',
    },
    {
        question: 'How do I become an early partner?',
        answer:
            'If your industry is not packaged yet, we can run a scoped Build pilot shaped with your input. Early partners get direct input into the roadmap, and the limits of what has been proven are stated up front.',
    },
    {
        question: 'Which industries does Strucureo Industries serve?',
        answer:
            'The first packages are being shaped with early partners now, so the list is still open. If your industry is not packaged yet, a scoped Build pilot can become the starting point — and you help define the product.',
    },
    {
        question: 'What does an Industries engagement cost?',
        answer:
            'Pricing depends on the package and the configuration your team needs. Every engagement starts with a scoped pilot, so you approve a fixed shape before committing further.',
    },
    {
        question: 'What does Strucureo Industries not do?',
        answer:
            'Industries does not build fully custom systems — that is Build — and does not sell unfinished prototypes as products — that is Labs. It also does not publish a deployment, precision or uptime claim that has not been measured.',
    },
];

export const metadata: Metadata = {
    title: 'Strucureo Industries: Industry Products in Shaping',
    description:
        'Strucureo Industries is shaping its first industry products with early partners, starting with industrial visual inspection. Configured to your team, and labelled honestly while still in progress.',
    keywords: [
        'Strucureo Industries',
        'industrial visual inspection',
        'industry software products',
        'engineering studio products',
    ],
    alternates: {
        canonical: `${SITE_URL}/industries`,
    },
    openGraph: {
        title: 'Strucureo Industries: Industry Products in Shaping',
        description:
            'Industry products from validated engineering work — starting with industrial visual inspection, shaped with early partners.',
        url: `${SITE_URL}/industries`,
        siteName: 'Strucureo',
        type: 'website',
        images: [
            {
                url: 'https://www.strucureo.com/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Strucureo Engineering Studio'
            }
        ]
    },
};

export default function IndustriesPage() {
    assertNoPlaceholders('industries FAQs', faqItems);
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Industries', url: `${SITE_URL}/industries` },
    ]);
    const faqSchema = faqPageNode(faqItems);

    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <SiteHeader />

            <PageHero
                eyebrow="Strucureo Industries"
                title="Industry products, shaped with early partners."
                intro="Strucureo Industries packages work that has already proven itself into products for specific industries. The first is industrial visual inspection, and it is still being shaped — we label maturity rather than implying a finished deployment."
                definition="Strucureo Industries is the product arm of Strucureo, an engineering studio working with companies in the UAE, Singapore and beyond. It packages validated Labs work into industry products."
                points={[
                    { number: '01', label: 'Validated in Labs first' },
                    { number: '02', label: 'Configured to your team' },
                    { number: '03', label: 'Early partners welcome' },
                ]}
            />

            <SplitList
                eyebrow="Product Lines"
                title="Starting points"
                intro="The first packages are being shaped with early partners. None is claimed as deployed."
            >
                {productLines.map((line, index) => (
                    <NumberedRow
                        key={line.title}
                        index={index}
                        icon={<line.icon className="w-12 h-12 text-[#111111]" />}
                        title={line.title}
                        desc={line.description}
                        extra={
                            <p className="mt-6 leading-relaxed text-[#6E6E6E]">
                                {line.includes.join(' · ')}
                            </p>
                        }
                    />
                ))}
            </SplitList>

            <Section className="bg-[#f9f9f9]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        <div className="relative z-10">
                            <AnimatedText text="Difference" className="text-xs uppercase tracking-[0.2em] mb-6 block opacity-50" />
                            <AnimatedText
                                text="How products differ from custom projects."
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
                            />
                            <AnimatedText
                                text="A Build engagement is designed around one client. An industry product starts from a shared, validated core and is configured to fit — with the unproven parts named."
                                className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed mb-8 max-w-md"
                                delay={0.2}
                            />
                        </div>
                    </div>

                    <div className="border-t border-[#111111]/10">
                        {differenceSteps.map((step, index) => (
                            <NumberedRow
                                key={step.title}
                                index={index}
                                size="sm"
                                title={step.title}
                                desc={step.description}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            <SplitList
                eyebrow="Early Partners"
                title="Shape the product for your industry."
            >
                <div className="border-t border-[#111111]/10">
                    {[
                        'Scoped pilot shaped with your team',
                        'Direct input into the roadmap',
                        'Guided setup and training',
                        'Support path after launch',
                        'Early-partner terms',
                        'Availability and maturity stated per industry',
                    ].map((standard, index) => (
                        <NumberedRow
                            key={standard}
                            index={index}
                            size="sm"
                            title={standard}
                        />
                    ))}
                </div>
            </SplitList>

            <section className="border-t border-[#111111]/10 px-6 py-20 md:px-12 lg:px-24">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
                        FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions about Industries.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <Contact />
        </main>
    );
}
