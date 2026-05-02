'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', emoji: '🏠', label: 'Home' },
  { id: 'about', emoji: '📖', label: 'About' },
  { id: 'members', emoji: '👨‍💻', label: 'Team' },
  { id: 'events', emoji: '🎬', label: 'Activity' },
  { id: 'thanks', emoji: '🙏', label: 'Thanks' },
];

export default function ScrollNavbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0.2, // Section dianggap aktif jika 50% terlihat
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-center gap-10">
      {/* Garis Scrollbar Tipis */}
      <div className="absolute h-full w-[2px] bg-slate-200 rounded-full -z-10" />

      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="relative flex items-center justify-center group"
          >
            {/* Label Tooltip (Muncul saat hover) */}
            <span className="absolute right-12 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {section.label}
            </span>

            {/* Dot atau Emoji */}
            <motion.div
              animate={{
                scale: isActive ? 1.5 : 1,
                backgroundColor: '#e2e8f0',
              }}
              className={`w-3 h-3 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isActive ? 'shadow-[0_0_15px_rgba(16,185,129,0.5)]' : ''
              }`}
            >
              {/* Emoji yang hanya muncul saat aktif */}
              {isActive && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-lg absolute"
                >
                  {section.emoji}
                </motion.span>
              )}
            </motion.div>
          </a>
        );
      })}
    </div>
  );
}