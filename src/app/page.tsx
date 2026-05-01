import Header from "@/components/pages/Header";
import Hero from "@/components/pages/Hero";
import About from "@/components/pages/About";
import Members from "@/components/pages/Member";
import Event from "@/components/pages/Event";
import Closing from "@/components/pages/Closing";
import Card from "@/components/pages/Card";

/**
 * Page utama untuk Web PPL Kelompok 02.
 * Menggunakan Next.js App Router (Server Component secara default).
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 
        Navbar sederhana bisa kamu tambahkan di sini atau di layout.tsx.
        Untuk sekarang, kita fokus ke Hero Section.
      */}
      
      {/* SECTION 1: HERO */}
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
  );
}   