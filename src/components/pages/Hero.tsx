'use client';

import { Button } from "@/components/ui/button"; 
import { MoveRight, Users, MapPin } from "lucide-react"; 
import TextType from "../TextType";
import CountUp from '../CountUp'

export default function Hero({id}: {id: string}) {
  return (
    // Tambahkan min-h-screen agar di mobile konten tidak terpotong jika teks memanjang
    <section id={id} className="relative w-full min-h-screen overflow-hidden flex items-center py-20 md:py-0">
      
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* KIRI: Teks dan Tombol */}
        {/* order-2 di mobile agar teks muncul setelah gambar, md:order-1 untuk balik ke kiri di desktop */}
        <div className="flex flex-col space-y-6 order-2 md:order-1 text-center md:text-left items-center md:items-start">
          
          <div className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm font-medium bg-emerald-100 text-emerald-800 w-fit">
            Praktek Penyiaran Lapangan&nbsp;&nbsp; <CountUp
                                                from={1999}
                                                to={2026}
                                                direction="up"
                                                duration={2}
                                                className="count-up-text"
                                                delay={0}
                                              />
          </div>
          
          {/* Ukuran teks disesuaikan: text-4xl di mobile, text-7xl di desktop */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1]">
            Eksplorasi <br />
            <span className="text-emerald-600">
              <TextType 
                text={["Kelompok 02", "Dunia Penyiaran", "Karya Nyata"]} 
                typingSpeed={70} 
                pauseDuration={1500}
                showCursor={true}
              />
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-lg">
            Dokumentasi perjalanan kreatif siswa SMA Wahidiyah Kepanjen dalam mengasah skill penyiaran, jurnalistik, dan produksi media di lapangan.
          </p>

          {/* Tombol jadi full width di mobile (flex-col), tetap row di desktop */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button className="bg-emerald-600 hover:bg-emerald-700 h-12 px-8 rounded-xl transition-all hover:gap-3 w-full sm:w-auto">
              Lihat Aktivitas <MoveRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-12 px-8 rounded-xl border-emerald-600 text-emerald-600 hover:bg-emerald-50 w-full sm:w-auto">
              <Users className="mr-2 h-4 w-4" /> Profil Kru
            </Button>
          </div>
        </div>

        {/* KANAN: Visual */}
        {/* order-1 di mobile agar gambar muncul paling atas */}
        <div className="relative order-1 md:order-2 w-full max-w-[500px] mx-auto md:max-w-none">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white transform rotate-0 md:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/fotoppl/group02.jpeg" 
              alt="PPL Documentation" 
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
            {/* Tag Lokasi disesuaikan ukurannya */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg text-[10px] md:text-sm font-semibold flex items-center gap-2 shadow-sm">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-emerald-600" /> Kel. Samaan, Kec. Klojen
            </div>
          </div>
          
          {/* Aksen Dekorasi - Dikecilkan di mobile agar tidak makan tempat */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-32 md:h-32 bg-emerald-400/20 rounded-full blur-2xl md:blur-3xl -z-10"></div>
        </div>

      </div>
    </section>
  );
}