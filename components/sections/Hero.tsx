'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import { Magnetic } from '@/components/shared/Magnetic';
import { useSound } from '@/hooks/useSound';
import { Structure3D } from '@/components/shared/Structure3D';

export const Hero = () => {
  const { playTick } = useSound();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const navLinks = [
    { label: 'Build', href: '/services' },
    { label: 'Labs', href: '/labs' },
    { label: 'Industries', href: '/industries' },
    { label: 'UAE', href: '/uae' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Work', href: 'https://portfolio.strucureo.com' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 py-8 md:py-12 bg-[#ffffff] text-[#111111] relative overflow-hidden">
      <Structure3D />

      <motion.nav
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="flex justify-between items-start text-xs md:text-sm uppercase tracking-widest font-medium opacity-60 z-10 relative"
      >
        <div className="flex flex-col">
          <span>Strucureo</span>
          <span className="opacity-50">Engineering Studio</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-right opacity-80">
          {navLinks.map((link) => (
            <Magnetic key={link.href} strength={0.2}>
              <a href={link.href} className="transition-opacity hover:opacity-50">
                {link.label}
              </a>
            </Magnetic>
          ))}
          <Magnetic strength={0.2}>
            <a 
              href="#contact" 
              onClick={() => playTick()}
              className="transition-opacity hover:opacity-50"
            >
              Contact
            </a>
          </Magnetic>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 z-20"
        >
          <span className={`block h-[2px] w-full bg-[#111111] transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-[2px] w-full bg-[#111111] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] w-full bg-[#111111] transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>

        {/* Mobile backdrop + panel: portaled to document.body so they escape the
            nav's z-10 stacking context and render above the hero content.
            AnimatePresence goes INSIDE the portal so it can track the motion.div. */}
        {menuOpen && createPortal(
          <AnimatePresence>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[9990]"
            />
          </AnimatePresence>,
          document.body
        )}

        {menuOpen && createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-[#111111]/10 shadow-2xl z-[9999] flex flex-col px-6 pt-8 pb-6 gap-1"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col text-xs uppercase tracking-widest font-medium">
                  <span>Strucureo</span>
                  <span className="opacity-50">Engineering Studio</span>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl leading-none px-2 -mr-2"
                >
                  ×
                </button>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="uppercase tracking-widest py-2 border-b border-[#111111]/5 transition-opacity hover:opacity-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => { playTick(); setMenuOpen(false); }}
                className="uppercase tracking-widest py-2 transition-opacity hover:opacity-50"
              >
                Contact
              </a>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
      </motion.nav>

      <div className="flex-grow flex flex-col justify-center mt-12 md:mt-0 z-10 pb-24 pointer-events-none"> {/* content wrapper */}
        <div className="pointer-events-auto"> {/* Interactive elements wrapper */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-0 md:space-y-4">
            <motion.h1
              variants={{
                hidden: { opacity: 0.01, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: 'easeOut' }
                }
              }}
              className="block text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-[#111111]"
            >
              <span className="block">Complex problems in.</span>
              <span className="block">Working systems out.</span>
            </motion.h1>

            {/* Answer-first line (E1), names Strucureo and what it does. F-01/F-02 */}
            <p className="mt-6 text-lg md:text-xl font-light text-[#6E6E6E] max-w-3xl leading-relaxed">
              Strucureo is an engineering studio that works on embedded and connected systems, AI and agentic infrastructure, and secure platforms — engineering the solution around the problem, using hardware, software and AI where each one adds real value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <div className="flex flex-col gap-6">
              <p className="text-xl md:text-2xl font-light text-[#6E6E6E] max-w-2xl leading-relaxed">
                We start with technical discovery — what is actually failing, what the environment allows, and what evidence would prove the fix. Then we build: prototype, pilot, production.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <Magnetic strength={0.15}>
                  <a 
                    href="#contact" 
                    onClick={() => playTick()}
                    className="px-8 py-4 bg-[#111111] text-white font-bold tracking-widest text-sm hover:bg-black/80 transition-colors uppercase"
                  >
                    Start a technical conversation
                  </a>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
