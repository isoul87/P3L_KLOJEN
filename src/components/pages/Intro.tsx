'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from '../CountUp'; // Sesuaikan path ke komponen React Bits kamu
import BlurText from '../BlurText';

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [isFinished, setIsFinished] = useState(false);

  // Fungsi untuk handle ketika loading selesai
  const handleEnd = () => {
    setTimeout(() => {
      setIsFinished(true);
      onComplete(); // Kasih tau page.tsx kalau intro sudah selesai
    }, 2000);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* AMBIENCE LIGHT (Efek Lampu) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-900/10 rounded-full blur-[100px]" />

          {/* CONTENT */}
          <div className="relative z-10 text-center">
            <div className="mb-4">
              <BlurText
                text="PPL KLOJEN 02"
                delay={50}
                className="text-emerald-500 font-black text-sm tracking-[0.5em] uppercase"
              />
            </div>

            <div className="text-7xl md:text-9xl font-bold text-white tabular-nums tracking-tighter">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up"
                onEnd={handleEnd}
              />
              <span className="text-emerald-500">%</span>
            </div>

            <div className="mt-6 overflow-hidden">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-slate-500 text-xs tracking-widest font-medium uppercase"
              >
                Preparing your broadcasting experience...
              </motion.p>
            </div>
          </div>

          {/* GARIS SCANLINE (Nuansa TV/Broadcast) */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}