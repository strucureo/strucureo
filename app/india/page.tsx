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

const indiaCapabilities = [
    {
        title: 'Operations & Workflow Automation',
        description:
            'Eliminate manual data re-entry, messy spreadsheets, and paper trails. Built for Indian manufacturers, logistics providers, and operational teams needing real-time visibility across facilities and field teams.',
        includes: [
            'Facility & warehouse job tracking',
            'Field team dispatch & mobile status updates',
            'Automated inventory & replenishment triggers',
            'Custom internal management dashboards',
        ],
        icon: Cog,
    },
    {
        title: 'Bespoke ERPs & Operations Portals',
        description:
            'Custom enterprise portals designed specifically for Indian commercial workflows, avoiding recurring per-seat SaaS costs, rigid third-party limitations, and fragmented tool stacks.',
        includes: [
            'Role-based staff & management access',
            'GST-ready invoicing & accounts reconciliation',
            'Vendor management & procurement workflows',
            'Multi-location audit trails & records',
        ],
        icon: Layers,
    },
    {
        title: 'AI Chatbots & Automated Client Intake',
        description:
            'Intelligent conversational agents and qualification workflows deployed across WhatsApp and web portals to capture, qualify, and route high-intent customer leads 24/7.',
        includes: [
            'Automated customer inquiry triage',
            'WhatsApp business integration & routing',
            'Instant 24/7 qualification for prospects',
            'Direct syncing to internal CRMs and databases',
        ],
        icon: Bot,
    },
    {
        title: 'Startup MVPs & Fast-to-Market Platforms',
        description:
            'Production-grade product engineering for founders across Bangalore, Chennai, and Mumbai. Built on modern TypeScript architectures and delivered in rapid sprints to get you to market fast.',
        includes: [
            'Modern cloud architecture (Next.js, TypeScript)',
            'Domestic payment gateways (Razorpay, Cashfree, UPI)',
            'Secure user authentication & role-based portals',
            'Transparent milestone sprints with fixed INR roadmaps',
        ],
        icon: Rocket,
    },
];

const faqItems = [
    {
        question: 'Does Strucureo work with businesses and startups across India?',
        answer: 'Yes. We work directly with companies, operational teams, and founders in Chennai, Bangalore, Mumbai, and across India. Whether you need an internal ERP portal, workflow automation, an AI chatbot, or a startup MVP, our engineers deliver with direct collaboration and transparent milestones.'
    },
    {
        question: 'What is the typical cost of custom software development in India?',
        answer: 'Pricing depends strictly on technical scope. We provide clear, fixed-price milestone roadmaps before code is written, eliminating surprise costs or billing runaway. Contact us with your requirements for a scoped specification and transparent INR pricing.'
    },
    {
        question: 'Can you integrate domestic Indian payment gateways like Razorpay or UPI?',
        answer: 'Yes. We natively integrate domestic payment infrastructure including Razorpay, Cashfree, PayU, and UPI, as well as global gateways like Stripe, tailored to your checkout or recurring billing models.'
    },
    {
        question: 'How fast can you build and launch a custom system or MVP?',
        answer: 'We build in rapid, milestone-driven sprints. Most custom operational tools and startup MVPs are delivered in days to a few weeks, allowing teams to test workflows with live users and generate return on investment rapidly.'
    },
    {
        question: 'Why choose custom software over monthly subscription SaaS platforms?',
        answer: 'Off-the-shelf SaaS products often impose steep per-user monthly subscription fees, inflexible feature sets, and poor integration with Indian business workflows. A bespoke system is 100% owned by your company, customized to your exact operational procedures, and eliminates recurring seat fees.'
    },
    {
        question: 'Do you only work with companies located in Chennai?',
        answer: 'No. While leadership is in Chennai, we partner with startups and established enterprises across Chennai, Bangalore, Mumbai, and nationwide through remote staging environments and direct engineer communication. For in-person meetings, write to support@strucureo.com.'
    }
];

const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'India', url: `${SITE_URL}/india` },
]);

const faqSchema = faqPageNode(faqItems);

const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': buildServiceNodes(
        indiaCapabilities.map((cap) => ({
            name: cap.title,
            description: cap.description,
        }))
    ),
};

export const metadata: Metadata = {
    title: 'Custom Software, ERP & Automation Studio in India | Strucureo',
    description:
        'Engineering studio building custom software, internal ERPs, operations automation and AI systems for businesses in Chennai, Bangalore and Mumbai. Fixed INR milestone pricing, delivered in weeks.',
    keywords: [
        'custom software development India',
        'software development company Chennai',
        'software development company Bangalore',
        'ERP software development India',
        'operations workflow automation India',
        'AI chatbot development India',
        'startup MVP development India',
        'engineering studio India',
    ],
    alternates: {
        canonical: `${SITE_URL}/india`,
    },
    openGraph: {
        title: 'Custom Software, ERP & Automation Studio in India | Strucureo',
        description:
            'Engineering studio building custom software, internal ERPs, operations automation and AI systems for businesses in Chennai, Bangalore and Mumbai. Fixed INR milestone pricing, delivered in weeks.',
        url: `${SITE_URL}/india`,
        siteName: 'Strucureo',
        type: 'website',
        images: [
            {
                url: 'https://www.strucureo.com/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Strucureo Engineering Studio India'
            }
        ]
    },
};

export default function IndiaPage() {
    assertNoPlaceholders('india FAQs', faqItems);

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
                eyebrow="India"
                title="Custom software and operations engineering for businesses in India"
                intro="Strucureo engineers bespoke software, internal operations portals, ERPs and AI automation for companies across Chennai, Bangalore, Mumbai, and India. Fixed-price roadmaps in INR, delivered in days to a few weeks."
                definition="Strucureo is an engineering studio delivering client software, operational ERPs, and startup MVPs for Indian enterprises and founders. Projects start from root-cause diagnosis and clear fixed-price milestones."
                points={[
                    { number: '01', label: 'Transparent INR milestone roadmaps' },
                    { number: '02', label: 'Direct senior engineer communication' },
                    { number: '03', label: 'Rapid delivery in days to weeks' },
                    { number: '04', label: 'Native Razorpay, Cashfree & UPI integration' },
                ]}
            />

            <SplitList
                eyebrow="Capabilities in India"
                title="Systems built for how Indian businesses and founders scale"
                intro="From multi-location operations tracking to bespoke ERPs, AI client intake, and startup MVPs, we replace disconnected tools with focused software."
            >
                {indiaCapabilities.map((capability, index) => (
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
                        title: 'Chennai Leadership & Local Context',
                        desc: 'With leadership based in Chennai, we understand the operational pace, compliance standards, and market dynamics across Chennai, Bangalore, and Mumbai.',
                    },
                    {
                        icon: Globe,
                        title: 'Transparent INR Milestone Contracts',
                        desc: 'Fixed-price agreements in Indian Rupees with clear milestone scopes agreed before development begins. No open-ended hourly retainers.',
                    },
                    {
                        icon: CreditCard,
                        title: 'Domestic Gateway Integrations',
                        desc: 'Native integrations with Razorpay, Cashfree, PayU, and UPI alongside international payment processors like Stripe.',
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
                        India FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions from our Indian clients.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <Contact />
        </main>
    );
}
