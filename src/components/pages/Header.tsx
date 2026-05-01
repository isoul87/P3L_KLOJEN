'use client';

import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 backdrop-blur-lg left-0 w-full z-[90] px-6 py-2 pointer-events-none">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* KIRI: LOGO */}
        <div className="flex items-center pointer-events-auto group">
          <div className="relative w-12 h-12 md:w-15 md:h-15 bg-white rounded-full shadow-lg flex items-center justify-center p-2 border border-slate-100 group-hover:rotate-6 transition-transform duration-300">
            {/* Pastikan file logo ada di public/logo.png atau .svg */}
            <Image 
              src="/fotoppl/logo.png" 
              alt="Logo SMK Wahidiyah" 
              width={40} 
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* KANAN: NAMA KELOMPOK */}
        <div className="pointer-events-auto">
          <div className="bg-white/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-sm">
            <h1 className="text-sm md:text-base font-bold text-slate-900 tracking-tighter">
              P3L_<span className="text-emerald-600">KLOJEN</span>
            </h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium text-right leading-none">
              Kelompok 02
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}