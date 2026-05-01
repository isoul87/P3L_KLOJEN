'use client';

import React from 'react';
import TiltedCard from '../TiltedCard'; // Sesuaikan path komponen Anda
import { Heart } from "lucide-react";

export default function HostGratitude({id}: {id: string}) {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          
          {/* KOLOM KIRI: Tilted Card untuk Foto Tuan Rumah */}
          <div className="flex justify-center md:justify-start">
            <TiltedCard
              imageSrc="/fotoppl/tuanrumah.png" // Ganti dengan foto tuan rumah/lokasi penyiaran
              altText="Tuan Rumah PPL 02"
              captionText="Bapak Triawan Apriono Tuan Rumah - Kel. Samaan"
              containerHeight="500px"
              containerWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent
              overlayContent={
              <div className="absolute bottom-1 left-0 z-[2] bg-emerald-600/90 backdrop-blur-md text-white p-3 rounded-xl shadow-lg -z-10">
                <p className="text-xs font-bold uppercase tracking-tighter">Lokasi Penyiaran</p>
                <p className="text-sm">Kecamatan Klojen</p>
              </div>
              }
            />
          </div>

          {/* KOLOM KANAN: Pesan Ucapan Terima Kasih */}
          <div className="flex flex-col space-y-6 text-center md:text-left items-center md:items-start">
            <div className="flex items-center gap-2 text-emerald-600 font-bold">
              <Heart className="fill-emerald-600" size={20} />
              <span className="uppercase tracking-[0.2em] text-sm">Terima kasih</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Terima Kasih, <br />
              <span className="text-emerald-600">Tuan Rumah Kami</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Kami mengucapkan terima kasih yang sebesar-besarnya kepada keluarga besar tuan rumah di 
              Kecamatan Klojen yang telah menerima kami dengan hangat selama pelaksanaan PPL 2026. 
              Kebaikan dan dukungan Anda menjadi bagian tak terpisahkan dari kesuksesan program penyiaran lapangan kami.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl italic text-slate-700">
              "Silaturahmi yang terjalin adalah hadiah terbesar bagi kami selain ilmu yang kami dapatkan di lapangan."
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-[1px] w-12 bg-slate-200"></div>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                Salam Hormat, Kelompok 02
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}