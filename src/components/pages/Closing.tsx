'use client';

import React from 'react';
import SplitText from '../SplitText'; 
import BlurText from '../BlurText';   
import { Globe } from "lucide-react";

export default function ClosingSection({id}: {id: string}) {
  return (
    <section id={id} className="py-24 bg-slate-900 text-white overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        {/* Pesan untuk Adik Kelas */}
        <div className="mb-12 flex flex-col items-center">
          <BlurText
            className="text-lg md:text-xl text-emerald-400 font-medium mb-4 text-center"
            text="Untuk adik-adik kelasku di SMA Wahidiyah Kepanjen,"
            delay={10}
            animateBy="words" // Memastikan animasi per kata agar tetap rapi di tengah
          />
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-center">
            <SplitText
              text="Teruskan Langkah, Ciptakan Karya!"
              className="text-center justify-center flex"
              delay={100}
            />
          </h2>
        </div>

        <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed mb-10 text-center">
          PPL bukan sekadar tugas, tapi perjalanan untuk menemukan jati diri di lapangan. 
          Jangan takut mencoba hal baru di dunia penyiaran. Kami Kelompok 02 menunggu karya hebat kalian selanjutnya!
        </p>

        {/* Media Sosial Section */}
        <div className="flex gap-6 mb-12">
          <a 
            href="https://instagram.com/nuxztech" 
            target="_blank" 
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors group"
          >
            <div className="p-3 rounded-full border border-slate-700 group-hover:border-emerald-400">
              <Globe size={20} />
            </div>
            <span className="text-sm font-medium">nuxztech</span>
          </a>
          <a 
            href="https://www.instagram.com/p3l_klojen/" // Ganti dengan link IG PPL kalian
            target="_blank" 
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors group"
          >
            <div className="p-3 rounded-full border border-slate-700 group-hover:border-emerald-400">
              <svg role="img" width={20} height={20} className='fill-slate-500' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
            </div>
            <span className="text-sm font-medium">@p3l_klojen</span>
          </a>
        </div>

        {/* Branding Naufal / Kelompok */}
        <div className="pt-10 border-t border-slate-800 flex flex-col items-center w-full max-w-xs">
          <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-4 rotate-3 hover:rotate-0 transition-transform duration-300 shadow-lg shadow-emerald-900/20">
            <span className="text-2xl font-bold text-white">02</span>
          </div>
          <p className="text-xs tracking-[0.3em] font-bold text-slate-500 uppercase">
            PPL 2026 • Kecamatan Klojen
          </p>
          <p className="text-[10px] text-slate-600 mt-2 tracking-widest uppercase">
            Developed by Naufal (nuxztech)
          </p>
        </div>

      </div>
    </section>
  );
}