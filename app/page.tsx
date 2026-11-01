import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Sectors } from '@/components/sections/Sectors';
import { SectorFlow } from '@/components/sections/SectorFlow';
import { Uniqueness } from '@/components/sections/Uniqueness';
import { RemoteOps } from '@/components/sections/RemoteOps';
import { VisualIntro } from '@/components/sections/VisualIntro';
import { Contact } from '@/components/sections/Contact';
import { ManualToSystem, SystemsForWork, WhatWeBuild, CommunityStrip } from '@/components/sections/Campaign';
import { FAQAccordion } from '@/components/FAQAccordion';
import { faqPageNode, breadcrumbList } from '@/lib/jsonld';

export const metadata: Metadata = {
    title: {
        default: 'Strucureo: Engineering Studio for Embedded, AI & Secure Systems',
        template: '%s | Strucureo'
    },
    description: 'We engineer solutions and products around real technical problems — using hardware, software and AI where it adds value. Embedded, AI infrastructure and secure systems engineering, focused on the UAE and Singapore.',
    keywords: [
        'engineering studio UAE',
        'embedded systems engineering',
        'AI infrastructure engineering',
        'secure systems engineering',
        'machine vision inspection',
        'systems engineering Singapore',
        'hardware software integration',
        'technical feasibility study',
    ],
    openGraph: {
        title: 'Strucureo: Engineering Studio for Embedded, AI & Secure Systems',
        description: 'We engineer solutions and products around real technical problems — using hardware, software and AI where it adds value.',
        url: 'https://www.strucureo.com',
        siteName: 'Strucureo',
        locale: 'en_US',
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
    twitter: {
        card: 'summary_large_image',
        title: 'Strucureo: Engineering Studio for Embedded, AI & Secure Systems',
        description: 'Embedded, AI infrastructure and secure systems engineering — hardware, software and AI where each one earns its place.',
        creator: '@strucureo',
        images: ['https://www.strucureo.com/opengraph-image.png']
    },
    alternates: {
        canonical: 'https://www.strucureo.com',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
};

export default function Home() {
    const homeFaqs = [
        {
            question: 'What does Strucureo do?',
            answer: 'Strucureo is an engineering studio. We diagnose a technical problem, then design and build the system around it: product and systems engineering, software and infrastructure, AI and agentic systems, embedded and connected devices, machine vision, and secure data infrastructure. Hardware, software and AI are used where each one earns its place.',
        },
        {
            question: 'What kind of problems does Strucureo take on?',
            answer: 'Problems where the cause is not obvious from the outside — a device that will not integrate cleanly, an inspection step that depends on human judgement, an AI workflow nobody can measure, or a platform that breaks under load. Each engagement starts with discovery and a feasibility check before any build is committed.',
        },
        {
            question: 'Do you build hardware as well as software?',
            answer: 'Where the problem crosses the boundary, yes. Embedded Linux, device integration, gateways and hardware–software interfaces sit alongside our software and AI work. Certification, field service and hardware procurement are agreed per engagement rather than assumed.',
        },
        {
            question: 'Where does Strucureo work?',
            answer: 'We are a remote engineering studio, and our current acquisition focus is the UAE and Singapore, with other markets handled case by case. We do not have an office or a local presence in either market, and we do not claim one.',
        },
        {
            question: 'How is an engagement priced?',
            answer: 'Each engagement is scoped and priced on its own work. Discovery and feasibility come first, and the scope of each later stage is agreed before it starts, so cost is known before build. We do not carry a website-project price floor into engineering work.',
        },
        {
            question: 'How do we start?',
            answer: 'Send the problem, your current equipment or software environment, the outcome you want, your constraints and your timeline through the contact form, or write to support@strucureo.com. You get a technical read on whether the approach is feasible before committing to a build.',
        },
    ];
    const faqSchema = faqPageNode(homeFaqs);
    const breadcrumbSchema = breadcrumbList([{ name: 'Home', url: 'https://www.strucureo.com' }]);
    return (
        <main className="bg-[#ffffff] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#ffffff] overflow-x-hidden antialiased">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Hero />
            <ManualToSystem />
            <Sectors />
            <SystemsForWork />
            <SectorFlow />
            <WhatWeBuild />
            <Uniqueness />
            <RemoteOps />
            <VisualIntro />
            <section className="border-t border-[#111111]/10 px-6 py-20 md:px-12 lg:px-24">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#555555]">
                        FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Answers before you ask.
                    </h2>
                    <FAQAccordion items={homeFaqs} />
                    <p className="mt-8 text-lg text-[#6E6E6E]">
                        More answers on our <a href="/faq" className="underline underline-offset-4 hover:opacity-60">FAQ page</a>, <a href="/services" className="underline underline-offset-4 hover:opacity-60">services</a>, <a href="/uae" className="underline underline-offset-4 hover:opacity-60">UAE</a> and <a href="/india" className="underline underline-offset-4 hover:opacity-60">India</a> pages.
                    </p>
                </div>
            </section>
            <CommunityStrip />
            <Contact />
        </main>
    );
}
