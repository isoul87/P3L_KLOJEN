'use client';

import React, { useState } from 'react';
import { Menu, X, Home, User, Users, Calendar, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', icon: <Home size={20} />, href: '#home' },
  { label: 'Tentang', icon: <User size={20} />, href: '#about' },
  { label: 'Members', icon: <Users size={20} />, href: '#members' },
  { label: 'Aktivitas', icon: <Calendar size={20} />, href: '#events' },
  { label: 'Thanks', icon: <Heart size={20} />, href: '#gratitude' },
];

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden fixed bottom-8 right-8 z-[60]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Staggered Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-20 right-0 flex flex-col gap-4 items-end">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ 
                  delay: index * 0.1, // Efek Staggered
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20 
                }}
                className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-xl border border-emerald-50 text-slate-700 font-semibold"
              >
                <span className="text-sm">{item.label}</span>
                <div className="text-emerald-600">{item.icon}</div>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}