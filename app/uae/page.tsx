import type { Metadata } from 'next';
import { Building2, Globe, CreditCard, Layers, Bot, Cog, Rocket } from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { NumberedRow } from '@/components/shared/NumberedRow';
import { Section } from '@/components/shared/Section';
import { SplitList } from '@/components/shared/SplitList';
import { Contact } from '@/components/sections/Contact';
import { breadcrumbList, faqPageNode, buildServiceNodes } from '@/lib/jsonld';
import { assertNoPlaceholders } from '@/lib/guard';

const SITE_URL = 'https://www.strucureo.com';

const uaeCapabilities = [
    {
        title: 'Operations & Workflow Automation',
        description:
            'Move operational processes off fragile spreadsheets and manual handoffs. Built for fabrication, construction, trade, and logistics businesses needing real-time job and production tracking.',
        includes: [
            'Job & project milestone tracking',
            'Field & site operational logging',
            'Automated inventory & resource allocation',
            'Custom internal dashboards & reporting',
        ],
        icon: Cog,
    },
    {
        title: 'Bespoke ERP & Internal Portals',
        description:
            'Tailored enterprise software designed around how your UAE business actually operates, without recurring per-seat subscription creep or restrictive feature lock-in.',
        includes: [
            'Role-based staff & manager portals',
            'UAE VAT-ready invoice & record keeping',
            'Vendor & procurement workflows',
            'Audit trails & permission hierarchies',
        ],
        icon: Layers,
    },
    {
        title: 'AI Chatbots & Automated Client Intake',
        description:
            'Intelligent conversational agents and automated qualification bots deployed across your website and messaging channels to capture and route inbound business leads around the clock.',
        includes: [
            '24/7 lead qualification & routing',
            'Multi-channel messaging integration',
            'Instant responses for MENA client inquiries',
            'Direct syncing with internal CRMs & databases',
        ],
        icon: Bot,
    },
    {
        title: 'Startup MVPs & Web Platforms',
        description:
            'Rapid product engineering for founders in DIFC, ADGM, and across Dubai and Abu Dhabi. Production-grade software delivered in days to weeks to validate and scale your product.',
        includes: [
            'Modern cloud architecture (Next.js, TypeScript)',
            'MENA payment gateway integration',
            'Secure authentication & user dashboards',
            'Fixed-scope MVP delivery sprints',
        ],
        icon: Rocket,
    },
];

const faqItems = [
    {
        question: 'Does Strucureo work with businesses and startups based in Dubai and the UAE?',
        answer: 'Yes. We work directly with businesses, operators, and startups across Dubai, Abu Dhabi, Sharjah, and the wider UAE. Whether you require bespoke operations software, an MVP for a DIFC or ADGM startup, or an internal ERP system, our team delivers with dedicated timezone overlap during Gulf business hours.'
    },
    {
        question: 'What is the typical cost of custom software development in the UAE?',
        answer: 'Pricing depends strictly on scope. We provide transparent, fixed-price milestone roadmaps before any code is written, eliminating surprise cost overruns. Our initial project roadmaps give you clear deliverables, exact timelines, and fixed costs in AED or your preferred currency.'
    },
    {
        question: 'Can you integrate local UAE and MENA payment gateways?',
        answer: 'Yes. We integrate regional payment providers including PayTabs, Telr, Checkout.com, and Stripe, customized for local payment preferences and currency handling.'
    },
    {
        question: 'How fast can you build and launch a custom system or MVP?',
        answer: 'We build in focused, rapid sprints. Most custom operational tools and startup MVPs are delivered in days to a few weeks, allowing teams to test workflows and begin generating ROI immediately without lengthy corporate agency delays.'
    },
    {
        question: 'Why choose custom software over monthly subscription SaaS tools?',
        answer: 'Many UAE businesses outgrow generic SaaS platforms due to expensive per-seat licensing, lack of custom field support, and fragmented workflows across different tools. A dedicated system is owned by you, built precisely around your operational rules, and eliminates ongoing subscription creep.'
    },
    {
        question: 'Do you only work with companies located in Dubai?',
        answer: 'No. We support clients throughout Dubai, Abu Dhabi, Sharjah, and across the Emirates through a streamlined remote process with shared staging portals and direct engineer communication. For in-person consultations, contact support@strucureo.com.'
    }
];

const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'UAE', url: `${SITE_URL}/uae` },
]);

const faqSchema = faqPageNode(faqItems);

const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': buildServiceNodes(
        uaeCapabilities.map((cap) => ({
            name: cap.title,
            description: cap.description,
        }))
    ),
};

export const metadata: Metadata = {
    title: 'Custom Software & Operations Automation in Dubai & UAE | Strucureo',
    description:
        'Engineering studio building custom software, internal ERPs, operations automation and AI systems for businesses in Dubai & Abu Dhabi. Fixed AED pricing, delivered in weeks.',
    keywords: [
        'custom software development UAE',
        'software development company Dubai',
        'operations software Dubai',
        'ERP systems UAE',
        'construction fabrication software UAE',
        'AI chatbot development UAE',
        'startup MVP development Dubai',
        'engineering studio UAE',
    ],
    alternates: {
        canonical: `${SITE_URL}/uae`,
    },
    openGraph: {
        title: 'Custom Software & Operations Automation in Dubai & UAE | Strucureo',
        description:
            'Engineering studio building custom software, internal ERPs, operations automation and AI systems for businesses in Dubai & Abu Dhabi. Fixed AED pricing, delivered in weeks.',
        url: `${SITE_URL}/uae`,
        siteName: 'Strucureo',
        type: 'website',
        images: [
            {
                url: 'https://www.strucureo.com/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Strucureo Engineering Studio UAE'
            }
        ]
    },
};

export default function UAEPage() {
    assertNoPlaceholders('uae FAQs', faqItems);

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <SiteHeader />

            <PageHero
                eyebrow="United Arab Emirates"
                title="Custom software and operations systems for businesses in the UAE"
                intro="Strucureo engineers custom software, internal operations platforms, ERPs and AI automation for companies across Dubai, Abu Dhabi and the Emirates. Fixed-price roadmaps in AED, delivered in days to a few weeks."
                definition="Strucureo is an engineering studio delivering client software, operational ERPs, and startup MVPs for businesses across the UAE. Projects start from a clear diagnosis and transparent fixed-price milestones."
                points={[
                    { number: '01', label: 'Fixed AED roadmaps & milestone pricing' },
                    { number: '02', label: 'Timezone overlap & 4h response window' },
                    { number: '03', label: 'Delivery in days to a few weeks' },
                    { number: '04', label: 'PayTabs, Telr & MENA gateway integration' },
                ]}
            />

            <SplitList
                eyebrow="Capabilities for the UAE"
                title="Systems built for how regional businesses operate"
                intro="From fabrication and construction tracking to internal ERPs and startup MVPs, we replace disconnected spreadsheets with tailored software."
            >
                {uaeCapabilities.map((capability, index) => (
                    <NumberedRow
                        key={capability.title}
                        index={index}
                        titleTag="h2"
                        icon={<capability.icon className="w-12 h-12 text-[#111111]" />}
                        title={capability.title}
                        desc={capability.description}
                        extra={
                            <p className="mt-6 leading-relaxed text-[#6E6E6E]">
                                {capability.includes.join(' · ')}
                            </p>
                        }
                    />
                ))}
            </SplitList>

            <Section className="bg-[#f9f9f9]">
                {[
                    {
                        icon: Building2,
                        title: 'Local Commercial Relevance',
                        desc: 'Designed around the business environment in Dubai, Abu Dhabi, DIFC, and ADGM with Gulf Standard Time (GST) communication.',
                    },
                    {
                        icon: Globe,
                        title: 'Transparent AED Contracts',
                        desc: 'Fixed-price milestone agreements invoiced in AED with clear specifications before any build begins.',
                    },
                    {
                        icon: CreditCard,
                        title: 'MENA Gateway Integrations',
                        desc: 'Native integrations with PayTabs, Telr, Checkout.com, and Stripe fitted to your customer checkout or billing workflows.',
                    },
                ].map((feature, index) => (
                    <NumberedRow
                        key={feature.title}
                        index={index}
                        titleTag="h3"
                        icon={<feature.icon className="w-12 h-12 text-[#111111]" />}
                        title={feature.title}
                        desc={feature.desc}
                    />
                ))}
            </Section>

            <section className="px-6 py-20 md:px-12 lg:px-24">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
                        UAE FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions from our UAE clients.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <Contact />
        </main>
    );
}
