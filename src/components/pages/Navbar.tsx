'use client';

import { motion } from 'framer-motion';
import { Home, User, Users, Calendar, Heart } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: <Home size={18} /> },
  { name: 'About', href: '#about', icon: <User size={18} /> },
  { name: 'Team', href: '#members', icon: <Users size={18} /> },
  { name: 'Event', href: '#events', icon: <Calendar size={18} /> },
  { name: 'Thanks', href: '#thanks', icon: <Heart size={18} /> },
];

export default function Navbar({ startAnim }: {startAnim: boolean }) {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 px-4 py-3 bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-emerald-900/10"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 active:scale-90  transition-all duration-300 group"
          >
            <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
            <span className="text-xs font-bold uppercase tracking-wider hidden md:block">
              {link.name}
            </span>
          </a>
        ))}
      </motion.div>
    </nav>
  );
}