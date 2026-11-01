import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
    Bot,
    CircuitBoard,
    Layers,
    ScanEye,
    Server,
    ShieldCheck,
} from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';
import { buildServiceNodes, breadcrumbList } from '@/lib/jsonld';
import { assertNoPlaceholders } from '@/lib/guard';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { SplitList } from '@/components/shared/SplitList';
import { NumberedRow } from '@/components/shared/NumberedRow';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Contact } from '@/components/sections/Contact';

const SITE_URL = 'https://www.strucureo.com';

type PageProps = {
    params: Promise<{ locale: string }>;
};

type Service = {
    title: string;
    description: string;
    includes: string[];
    icon: LucideIcon;
};

/**
 * Capability list, not a product catalogue. Each heading describes scope we can
 * work in; none of them asserts production readiness, certification or a
 * delivered result. See docs/campaign-2026-11/facts-register.md (F-05, F-06).
 */
const services: Service[] = [
    {
        title: 'Product & Systems Engineering',
        description:
            'Technical discovery, feasibility, prototyping, integration and product development — one path from an unclear problem to something you can operate.',
        includes: ['Discovery', 'Feasibility', 'Prototyping', 'Integration', 'Product development'],
        icon: Layers,
    },
    {
        title: 'Software & Infrastructure Engineering',
        description:
            'Backends, platforms, APIs and systems architecture, designed for the load and the change the system will actually meet.',
        includes: ['Backend systems', 'APIs', 'Platform architecture', 'Technical integrations', 'Infrastructure'],
        icon: Server,
    },
    {
        title: 'AI & Agentic Systems Engineering',
        description:
            'Agents, orchestration and tool integration, built so behaviour is observed, bounded and reviewable rather than assumed.',
        includes: ['Agent design', 'Tool integration', 'Orchestration', 'Evaluations', 'Controlled learning workflows'],
        icon: Bot,
    },
    {
        title: 'Embedded & Connected Systems',
        description:
            'Embedded Linux, device integration, gateways and the boundary where hardware meets software.',
        includes: ['Embedded Linux', 'Device integration', 'Gateways', 'Sensor and bus interfaces', 'Hardware–software interfaces'],
        icon: CircuitBoard,
    },
    {
        title: 'Machine Vision & Inspection',
        description:
            'Visual inspection and defect detection, with the feedback loop that shows whether the system is actually working on your line.',
        includes: ['Visual inspection', 'Defect detection', 'Labelled feedback', 'Candidate evaluation', 'Controlled deployment'],
        icon: ScanEye,
    },
    {
        title: 'Secure Data & AI Infrastructure',
        description:
            'Permissioned data access, isolation, policy enforcement and privacy-oriented architecture for systems that hold sensitive data.',
        includes: ['Permissioned access', 'Isolation', 'Policy enforcement', 'Threat modelling', 'Privacy-oriented design'],
        icon: ShieldCheck,
    },
];

const serviceAnchors: Record<string, string> = {
    'Product & Systems Engineering': 'product-systems',
    'Software & Infrastructure Engineering': 'software-infrastructure',
    'AI & Agentic Systems Engineering': 'ai-agentic',
    'Embedded & Connected Systems': 'embedded',
    'Machine Vision & Inspection': 'machine-vision',
    'Secure Data & AI Infrastructure': 'secure-data',
};

/**
 * Engagement path. Deliberately not a fixed timeline and not a guarantee: each
 * stage can end the engagement if the evidence does not support going further.
 */
const processSteps = [
    {
        title: 'Discovery',
        description:
            'We map the problem, the current equipment and software environment, the constraints, and what a working outcome would look like.',
    },
    {
        title: 'Feasibility',
        description:
            'We test the assumptions that decide whether the approach can work at all, and say so plainly when it cannot.',
    },
    {
        title: 'Prototype',
        description:
            'A bounded build against real conditions, with the parts that are still unknown labelled as unknown.',
    },
    {
        title: 'Pilot',
        description:
            'Limited deployment with defined measurements, so the decision to continue is based on observed behaviour rather than optimism.',
    },
    {
        title: 'Production & support',
        description:
            'Engineering, handover and support for the system that survives the pilot — with operating limits written down.',
    },
];

const deliveryStandards = [
    'Technical scope agreed before build',
    'Performance and reliability targets defined before build',
    'Secure access and permission patterns where data requires them',
    'Documented interfaces, integrations and operating limits',
    'Evidence of behaviour, not only delivery of code',
    'Hardware procurement, installation and testing ownership agreed per engagement',
    'Post-handover support path',
];

const faqItems = [
    {
        question: 'What does Strucureo Build do?',
        answer:
            'Strucureo Build is the client engineering arm of Strucureo. We diagnose a technical problem, then design and build the system around it — hardware, software, AI or a combination, whichever the evidence supports.',
    },
    {
        question: 'What kind of problems do you take on?',
        answer:
            'Problems where the cause is not obvious from the outside: a process that breaks under load, a device that will not integrate cleanly, an inspection step that depends on human judgement, or an AI workflow whose behaviour nobody can measure yet. If the problem is genuinely a five-page website, we are not the right studio for it.',
    },
    {
        question: 'Do you work on hardware and software together?',
        answer:
            'Yes, where the problem crosses the boundary. Embedded Linux, device integration, gateways and hardware–software interfaces sit alongside our software and AI work. Proprietary hardware support, certification and field service are agreed per engagement rather than assumed.',
    },
    {
        question: 'How long does an engagement take?',
        answer:
            'There is no fixed timeline, and we will not quote one before discovery. A feasibility study and a prototype are usually short and bounded; a pilot and production rollout depend on the environment being measured. The engagement path is discovery, feasibility, prototype, pilot, then production and support — and it can stop at any stage if the evidence does not justify continuing.',
    },
    {
        question: 'How is pricing set?',
        answer:
            'Each engagement is scoped and priced on its own work. We agree the scope of the next stage before starting it, so cost is known before build. We do not carry a website-project price floor into engineering work.',
    },
    {
        question: 'Who owns hardware procurement, installation, certification and IP?',
        answer:
            'These are defined per engagement and written into the agreement before work starts. We do not assume responsibility for a certification or an installation the client has not explicitly scoped with us.',
    },
    {
        question: 'Does Strucureo work with international clients?',
        answer:
            'Yes. We are a remote engineering studio and our current acquisition focus is the UAE and Singapore, with clients elsewhere handled case by case. We do not claim an office or a local presence in either market.',
    },
    {
        question: 'Who is the founder of Strucureo?',
        answer:
            'Strucureo was founded on February 26, 2026, by Nagaratinam S, who leads the company as Managing Director.',
    },
    {
        question: 'What technologies does Strucureo use?',
        answer:
            'We choose the stack from the problem rather than the reverse. Our work has involved Rust and embedded Linux, TypeScript and Next.js, Python services, relational and vector data stores, and agent tooling built on the Model Context Protocol. A stack list is not a capability claim; the engagement scope is.',
    },
    {
        question: 'What does Strucureo Build not do?',
        answer:
            'Build does not do open-ended staff augmentation, take over large legacy codebases sight unseen, or promise fixed timelines before discovery. Every engagement starts with a defined scope and a chosen solution path. Research without a client problem belongs in Labs, and packaged products belong in Industries.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Strucureo Engineering Engagement Path',
    description:
        'Our engagement path from an unclear technical problem to a supported production system.',
    step: processSteps.map((step, index) => ({
        '@type': 'HowToStep',
        name: step.title,
        text: step.description,
        url: `${SITE_URL}/services#step-${index + 1}`,
        position: index + 1,
    })),
};

const listedServiceNames = services.map((service) => service.title);

const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': buildServiceNodes(
        services
            .filter((service) => listedServiceNames.includes(service.title))
            .map((service) => ({ name: service.title, description: service.description }))
    ),
};

const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Build', url: `${SITE_URL}/services` },
]);

export const metadata: Metadata = {
    title: 'Engineering Capabilities: Embedded, Software, AI & Secure Systems | Strucureo',
    description:
        'Strucureo Build engineers solutions around real technical problems: product and systems engineering, software and infrastructure, AI and agentic systems, embedded and connected systems, machine vision, and secure data infrastructure.',
    keywords: [
        'engineering studio UAE',
        'embedded systems engineering',
        'AI agentic systems engineering',
        'machine vision inspection',
        'secure data infrastructure',
        'systems engineering Singapore',
        'hardware software integration',
        'technical feasibility study',
    ],
    alternates: {
        canonical: `${SITE_URL}/services`,
    },
    openGraph: {
        title: 'Engineering Capabilities: Embedded, Software, AI & Secure Systems | Strucureo',
        description:
            'We engineer solutions and products around real technical problems — using hardware, software and AI where it adds value.',
        url: `${SITE_URL}/services`,
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

export default function ServicesPage() {
    assertNoPlaceholders('services FAQs', faqItems);

    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            {/* Structured Data Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <SiteHeader />

            <PageHero
                eyebrow="Strucureo Build"
                title="Engineering for problems that do not fit a product catalogue"
                intro="Strucureo Build is client engineering. We diagnose the technical problem, then design and build the system around it — hardware, software and AI where each one earns its place, and nothing added because it is fashionable."
                definition="Strucureo Build is the client engineering arm of Strucureo, an engineering studio working with companies in the UAE, Singapore and beyond. Engagements begin with technical discovery and a scoped plan agreed before build."
                points={[
                    { number: '01', label: 'Discovery before build' },
                    { number: '02', label: 'Hardware, software and AI in one system' },
                    { number: '03', label: 'Evidence-based milestones' },
                    { number: '04', label: 'Support after handover' },
                ]}
            />

            <SplitList
                eyebrow="Capabilities"
                title="What we take on"
                intro="Capabilities describe the scope we can work in. They are not a claim of certification, or of a delivered result in your environment."
            >
                {services.map((service, index) => (
                    <NumberedRow
                        key={service.title}
                        id={serviceAnchors[service.title]}
                        index={index}
                        icon={<service.icon className="w-12 h-12 text-[#111111]" />}
                        title={service.title}
                        desc={service.description}
                        extra={
                            <p className="mt-6 leading-relaxed text-[#6E6E6E]">
                                {service.includes.join(' · ')}
                            </p>
                        }
                    />
                ))}
            </SplitList>

            <Section className="bg-[#f9f9f9]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        <div className="relative z-10">
                            <AnimatedText text="Engagement path" className="text-xs uppercase tracking-[0.2em] mb-6 block opacity-50" />
                            <AnimatedText
                                text="Each stage has to earn the next one."
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
                            />
                            <AnimatedText
                                text="Discovery, feasibility, prototype, pilot, production. It is a path, not a fixed timeline, and it stops if the evidence does not support continuing."
                                className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed mb-8 max-w-md"
                                delay={0.2}
                            />
                        </div>
                    </div>

                    <div className="border-t border-[#111111]/10">
                        {processSteps.map((step, index) => (
                            <NumberedRow
                                key={step.title}
                                index={index}
                                id={`step-${index + 1}`}
                                size="sm"
                                title={step.title}
                                desc={step.description}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            <SplitList
                eyebrow="Delivery Standard"
                title="Practical, secure, maintainable."
            >
                <div className="border-t border-[#111111]/10">
                    {deliveryStandards.map((standard, index) => (
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
                        Common questions about working with Strucureo.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <Contact />
        </main>
    );
}
