'use client';

import { Camera, Target, Radio} from "lucide-react";
import CountUp from '../CountUp'

export default function AboutGroup({id}: {id: string}) {
  return (
    <section id={id} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* KOLOM KIRI: Gambar Grup dengan Efek Frame */}
          <div className="relative group">
            {/* Dekorasi Belakang Foto */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-emerald-600 rounded-2xl -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl bg-slate-200 aspect-[4/5] md:aspect-square">
              <img 
                src="/fotopenyiaran/Kelurahan.jpeg" 
                alt="Kelompok 02 PPL" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-lg hidden md:block">
              <p className="text-3xl font-bold italic">0<CountUp
                                                          from={99}
                                                          to={2}
                                                          separator=","
                                                          direction="up"
                                                          duration={1}
                                                          className="count-up-text"
                                                          delay={0}
                                                        /></p>
              <p className="text-xs uppercase tracking-widest">Kelompok</p>
            </div>
          </div>

          {/* KOLOM KANAN: Penjelasan About */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2">
                Kenali Kami Lebih Dekat
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Membawa Perspektif Baru di Kecamatan Klojen
              </h3>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              Kami adalah Kelompok 02 dari SMA Wahidiyah Kepanjen yang sedang menjalankan tugas Praktek Penyiaran Lapangan di wilayah Klojen. Fokus kami adalah menangkap esensi kehidupan lokal dan menyajikannya dalam format konten media yang modern dan edukatif.
            </p>

            {/* Poin-Poin Detail */}
            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold">
                  <Radio size={24}/>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Siar Amalan Sholawat Wahidiyah</h4>
                  <p className="text-slate-500 text-sm italic">Menyiarkan amalan Sholawat Wahidiyah di Kec. Klojen.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Peran Remaja di Era Modern</h4>
                  <p className="text-slate-500 text-sm italic">Terjun langsung ke masyarakat.</p>
                </div>
              </div>
            </div>

            {/* Signatur Kelompok */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                PPL
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 uppercase">SMA Wahidiyah Kepanjen</p>
                <p className="text-xs text-slate-500">Angkatan 2026 • PPL Project</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}