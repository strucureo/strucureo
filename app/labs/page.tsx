import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
    Bot,
    CircuitBoard,
    ScanEye,
    ShieldCheck,
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
import { ProjectEvidence } from '@/components/sections/ProjectEvidence';

const SITE_URL = 'https://www.strucureo.com';

type FocusArea = {
    title: string;
    description: string;
    includes: string[];
    icon: LucideIcon;
};

const focusAreas: FocusArea[] = [
    {
        title: 'Agentic systems & evaluation',
        description:
            'Agents, tool use and orchestration built with the evaluation harness first, so behaviour is observed rather than described in a demo.',
        includes: ['Agent design', 'Tool integration', 'Evaluation harnesses', 'Failure analysis'],
        icon: Bot,
    },
    {
        title: 'Machine vision & inspection',
        description:
            'Visual inspection and defect detection, including the expert-confirmation loop that turns uncertain cases into usable labelled data.',
        includes: ['Defect detection', 'Uncertain-case routing', 'Expert confirmation', 'Candidate evaluation'],
        icon: ScanEye,
    },
    {
        title: 'Secure data & AI infrastructure',
        description:
            'Permissioned access, isolation and policy enforcement for systems that hold sensitive data, where the threat model comes before the feature.',
        includes: ['Threat modelling', 'Permission checks', 'Isolation', 'Output controls'],
        icon: ShieldCheck,
    },
    {
        title: 'Embedded & connected prototypes',
        description:
            'Embedded Linux, gateways and hardware–software interfaces, prototyped against real devices rather than simulated ones.',
        includes: ['Embedded Linux', 'Device integration', 'Gateways', 'Sensor interfaces'],
        icon: CircuitBoard,
    },
];

const graduationSteps = [
    {
        title: 'Spot the pattern',
        description:
            'Client engineering work reveals a problem that keeps repeating across projects and environments.',
    },
    {
        title: 'Research in Labs',
        description:
            'Labs explores approaches, builds a prototype, and tests it against real conditions and real constraints.',
    },
    {
        title: 'Prove the limits',
        description:
            'What works is documented with its operating limits, measured behaviour and the cases where it fails.',
    },
    {
        title: 'Graduate to Industries',
        description:
            'Only validated work is packaged into an industry product. Anything unproven stays labelled as research.',
    },
];

const faqItems = [
    {
        question: 'What is Strucureo Labs?',
        answer:
            'Strucureo Labs is the research arm of our engineering studio. It turns problems seen in client engineering work into tested prototypes, evaluated agent systems, inspection approaches and reusable modules.',
    },
    {
        question: 'How do Labs ideas become products?',
        answer:
            'Ideas graduate in four steps: spot the pattern in client work, research and prototype in Labs, document what works together with its limits, and package only validated work into Strucureo Industries products.',
    },
    {
        question: 'Can I commission Labs research?',
        answer:
            'Labs work is driven by problems seen in client projects. If your project surfaces a reusable problem, we will tell you. Labs does not take standalone research commissions — one-off needs are solved in Build.',
    },
    {
        question: 'How does Strucureo Labs pick what to research?',
        answer:
            'Labs researches problems that repeat across real engineering work. When the same need appears in several projects, it becomes a research candidate. This keeps every prototype anchored to something a client already needs solved.',
    },
    {
        question: 'How long does Labs research take?',
        answer:
            'It depends on the question the prototype has to answer. There is no standard research timeline, and a track can conclude that the approach does not work. We publish what graduates and what does not.',
    },
    {
        question: 'Can I buy a Labs prototype directly?',
        answer:
            'No. Prototypes are experiments, not products, and they ship only as part of a Build engagement or as graduated Industries packages. Labelling something a prototype is not a hedge — it means the limits are still being measured.',
    },
    {
        question: 'What does Strucureo Labs not do?',
        answer:
            'Labs does not take on standalone research commissions, chase technology for its own sake, or ship untested prototypes as products. It also does not publish accuracy, throughput or reliability figures it has not measured in the conditions it describes.',
    },
];

export const metadata: Metadata = {
    title: 'Strucureo Labs: Research on Problems That Repeat',
    description:
        'Strucureo Labs researches agentic systems and evaluation, machine vision and inspection, secure data infrastructure, and embedded prototypes — and labels what is proven and what is still a concept.',
    keywords: [
        'Strucureo Labs',
        'agentic systems research',
        'machine vision research',
        'secure data infrastructure',
        'embedded systems prototypes',
        'engineering studio research',
    ],
    alternates: {
        canonical: `${SITE_URL}/labs`,
    },
    openGraph: {
        title: 'Strucureo Labs: Research on Problems That Repeat',
        description:
            'Agentic systems, machine vision, secure data infrastructure and embedded prototypes — with the maturity of each one stated.',
        url: `${SITE_URL}/labs`,
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

export default function LabsPage() {
    assertNoPlaceholders('labs FAQs', faqItems);
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Labs', url: `${SITE_URL}/labs` },
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
                eyebrow="Strucureo Labs"
                title="Strucureo Labs: research on problems that repeat"
                intro="Strucureo Labs studies the technical problems that keep coming back in client work, and turns them into tested prototypes, evaluated agent systems and reusable modules. What works returns to Build with its limits documented."
                definition="Strucureo Labs is the research arm of Strucureo, an engineering studio working with companies in the UAE, Singapore and beyond. It turns problems that repeat across client work into tested prototypes and reusable modules."
                points={[
                    { number: '01', label: 'Driven by client work' },
                    { number: '02', label: 'Tested against real conditions' },
                    { number: '03', label: 'Concepts stay labelled as concepts' },
                ]}
            />

            <SplitList
                eyebrow="What Labs Researches"
                title="Research tracks"
                intro="Four tracks, all fed by problems seen in client engineering work."
            >
                {focusAreas.map((area, index) => (
                    <NumberedRow
                        key={area.title}
                        index={index}
                        icon={<area.icon className="w-12 h-12 text-[#111111]" />}
                        title={area.title}
                        desc={area.description}
                        extra={
                            <p className="mt-6 leading-relaxed text-[#6E6E6E]">
                                {area.includes.join(' · ')}
                            </p>
                        }
                    />
                ))}
            </SplitList>

            <Section className="bg-[#f9f9f9]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        <div className="relative z-10">
                            <AnimatedText text="Graduation" className="text-xs uppercase tracking-[0.2em] mb-6 block opacity-50" />
                            <AnimatedText
                                text="How ideas graduate to products."
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
                            />
                            <AnimatedText
                                text="Not every experiment survives. Only work proven against real conditions moves toward Strucureo Industries packaging."
                                className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed mb-8 max-w-md"
                                delay={0.2}
                            />
                        </div>
                    </div>

                    <div className="border-t border-[#111111]/10">
                        {graduationSteps.map((step, index) => (
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

            <ProjectEvidence />

            <section className="border-t border-[#111111]/10 px-6 py-20 md:px-12 lg:px-24">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
                        FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions about Labs.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <Contact />
        </main>
    );
}
