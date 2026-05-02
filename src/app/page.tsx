'use client'

import { useState, useEffect } from 'react';
import Navbar from '@/components/pages/Navbar';
import Intro from '@/components/pages/Intro';
import Header from "@/components/pages/Header";
import Hero from "@/components/pages/Hero";
import About from "@/components/pages/About";
import Members from "@/components/pages/Member";
import Event from "@/components/pages/Event";
import Closing from "@/components/pages/Closing";
import Card from "@/components/pages/Card";
import Scroll from "@/components/pages/Scroll";


/**
 * Page utama untuk Web PPL Kelompok 02.
 * Menggunakan Next.js App Router (Server Component secara default).
 */
export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Jika intro sedang berjalan, kunci scroll
    if (!showContent) {
      document.body.style.overflow = 'hidden';
    } else {
      // Jika intro selesai, buka kembali scroll
      document.body.style.overflow = 'unset';
    }

    // Cleanup function untuk memastikan scroll kembali normal jika komponen di-unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showContent]);

  return (
    <>
    <Intro onComplete={() => setShowContent(true)} />
    <main className={`relative min-h-screen bg-white transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* 
        Navbar sederhana bisa kamu tambahkan di sini atau di layout.tsx.
        Untuk sekarang, kita fokus ke Hero Section.
      */}
      
      {/* SECTION 1: HERO */}
      <Navbar startAnim={showContent}/>
      <Scroll/>
      <Header/>
      <Hero id="home"/>
      <About id="about"/>
      <Members id="members"/>
      <Event id="events"/>
      <Card id="thanks"/>
      <Closing id="closing"/>

      {/* 
        SECTION 2: TENTANG KELOMPOK (Next step)
        Kamu bisa menambahkan section lain di bawah sini nanti.
      */}

    </main>
    </>
  );
}   