'use client';

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Hammer, FlaskConical, Factory } from 'lucide-react';

const ScrollItem = ({ item, index }: { item: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <div
      ref={ref}
      className={`py-24 border-t border-[#111111]/10 first:border-t-0 flex flex-col md:flex-row gap-8 md:gap-16 items-start transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-20 blur-sm translate-x-4'}`}
    >
      <div className="flex-shrink-0 mt-2">
        <span className="text-sm font-mono tracking-widest text-[#111111]">0{index + 1}</span>
      </div>
      <div>
        <div className="mb-6">
          <item.icon className="w-12 h-12 text-[#111111]" />
        </div>
        <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-none">{item.title}</h3>
        <p className="text-xl leading-relaxed text-[#6E6E6E] max-w-lg">{item.desc}</p>
      </div>
    </div>
  );
}

export const Sectors = () => {
  const items = [
    {
      title: 'Strucureo Build',
      desc: 'Client engineering. We diagnose the technical problem and build the system around it — hardware, software, integrated devices and products.',
      icon: Hammer
    },
    {
      title: 'Strucureo Labs',
      desc: 'Research, experiments and prototypes. We test approaches against real conditions before they touch a client system.',
      icon: FlaskConical
    },
    {
      title: 'Strucureo Industries',
      desc: 'Industry products built from validated work, shaped with early partners and labelled by maturity.',
      icon: Factory
    }
  ];

  return (
    <Section className="relative bg-white pb-0">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="lg:w-1/3">
          <div className="lg:sticky lg:top-32">
            <AnimatedText text="Our three sectors" className="text-xs uppercase tracking-[0.2em] mb-8 block text-[#555555]" />
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.9] tracking-tighter mb-8">
              Three arms, <br />
              <span className="text-[#111111]/20">one studio.</span>
            </h2>
            <p className="text-lg text-[#6E6E6E] max-w-sm leading-relaxed">
              Strucureo is an engineering studio with three connected arms: Build, Labs, and Industries.
            </p>
          </div>
        </div>

        <div className="lg:w-2/3 pb-24">
          {items.map((item, index) => (
            <ScrollItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};
