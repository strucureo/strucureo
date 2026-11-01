import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';

/**
 * Homepage campaign sections (owner brief 2026-10-10, F-owner-01/02/03).
 * All copy traces to FACTS; nothing invented.
 */
export const ManualToSystem = () => (
  <Section className="bg-white">
    <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <AnimatedText
        text="From manual work to a working system"
        className="text-xs uppercase tracking-[0.2em] mb-6 block text-[#555555]"
      />
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
        From manual work to a working system
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="border-t border-[#111111]/10 pt-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#555555]">01</span>
          <h3 className="text-2xl font-bold mt-3 mb-3">Find the root cause</h3>
          <p className="text-[#6E6E6E] leading-relaxed">
            Before we build anything, we work out what is actually going wrong. A
            spreadsheet that keeps breaking is usually a symptom, not the problem.
          </p>
        </div>
        <div className="border-t border-[#111111]/10 pt-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#555555]">02</span>
          <h3 className="text-2xl font-bold mt-3 mb-3">Compare the options</h3>
          <p className="text-[#6E6E6E] leading-relaxed">
            You get more than one way to solve it, with the trade-offs, so you
            choose with the facts in front of you.
          </p>
        </div>
        <div className="border-t border-[#111111]/10 pt-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#555555]">03</span>
          <h3 className="text-2xl font-bold mt-3 mb-3">Build the system</h3>
          <p className="text-[#6E6E6E] leading-relaxed">
            We build in focused milestones against a fixed-price roadmap agreed
            before any code is written, and we support it after launch.
          </p>
        </div>
      </div>
      <a
        href="/approach"
        className="inline-block mt-10 text-lg underline underline-offset-4 hover:opacity-60"
      >
        See how we work
      </a>
    </div>
  </Section>
);

export const SystemsForWork = () => (
  <Section className="bg-[#f9f9f9]">
    <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
        Systems for the work. People for the ideas.
      </h2>
      <p className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed max-w-3xl mb-6">
        Repeatable work belongs to systems. New ideas come from people. We build
        the first so people have more room for the second.
      </p>
      <p className="text-lg text-[#6E6E6E] leading-relaxed max-w-3xl">
        We build systems — software, devices and agents — that carry the
        repeated steps, so the people on your team can spend their time on
        judgement, creative work and new ideas.
      </p>
    </div>
  </Section>
);

const buildItems = [
  { label: 'Product & systems', anchor: '#product-systems' },
  { label: 'Software & infrastructure', anchor: '#software-infrastructure' },
  { label: 'AI & agentic systems', anchor: '#ai-agentic' },
  { label: 'Embedded & connected', anchor: '#embedded' },
  { label: 'Machine vision', anchor: '#machine-vision' },
  { label: 'Secure data & AI', anchor: '#secure-data' },
];

export const WhatWeBuild = () => (
  <Section className="bg-white">
    <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
        What we build
      </h2>
      <p className="text-lg text-[#6E6E6E] leading-relaxed max-w-3xl mb-8">
        Capabilities, not a product menu. These describe the engineering scope we
        can work in. The system is chosen from the problem — and they are not the
        limit of what we take on.
      </p>
      <div className="flex flex-wrap gap-3">
        {buildItems.map((item) => (
          <a
            key={item.label}
            href={`/services${item.anchor}`}
            className="px-5 py-3 border border-[#111111]/15 rounded-full text-sm uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </Section>
);

export const CommunityStrip = () => (
  <Section className="bg-[#f9f9f9]">
    <div className="px-6 md:px-12 lg:px-24 py-16 md:py-20">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
        A community for people who make new things
      </h2>
      <p className="text-lg text-[#6E6E6E] leading-relaxed max-w-3xl mb-8">
        We are starting a community around one idea: AI and systems can carry
        the repeatable work, but new ideas still come from people. It is early.
        If you build, research or run a business, tell us what you are working on.
      </p>
      <a
        href="/community"
        className="inline-block px-8 py-4 bg-[#111111] text-white font-bold tracking-widest text-sm hover:bg-black/80 transition-colors uppercase"
      >
        Join the conversation
      </a>
    </div>
  </Section>
);
