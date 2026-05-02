'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CalendarDays } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline({id}: {id: string}) {
  const container = useRef<HTMLDivElement>(null);
  const scrollLine = useRef<HTMLDivElement>(null);

  const timelineEvents = [
    {
      date: "19 April 2026",
      title: "Briefing & Survey Lokasi",
      desc: "Pertemuan pertama di Kecamatan Klojen untuk menentukan titik penyiaran serta melakukan penyiaran di daerah Kajotangan Heritage.",
      images: ["/fotopenyiaran/kajoetangan.jpeg", "/fotopenyiaran/kajoetangan.jpeg"]
    },
    {
      date: "20 April 2026",
      title: "Melakukan penyiaran di Kec. Klojen Hari ke 1",
      desc: "Wawancara dengan tokoh masyarakat dan silahturahmi, serta melakukan mujahadah usbuiyah di Kelurahan Celaket.",
      images: ["/fotopenyiaran/rt.jpeg", "/fotopenyiaran/pakrt.jpeg", "/fotopenyiaran/celaket.jpeg", "/fotoppl/group02.jpeg"]
    },
    {
      date: "21 April 2026",
      title: "Silahturahmi, penyiaran, dan awal bulan",
      desc: "Melakukan penyiaran, serta mujahadah usbuiyah di Kelurahan Samaan.",
      images: ["/fotopenyiaran/kelurahan.jpeg", "/fotopenyiaran/awalbulan.jpeg"]
    },
    {
      date: "22 April 2026",
      title: "Penyiaran dan Mujadah Usbuiyah di Kel. Samaan",
      desc: "Penyiaran di daerah Oro - Oro Dowo, serta mujadah awal bulan di Kelurahan Samaan",
      images: ["/fotopenyiaran/orodowo.jpeg", "/fotopenyiaran/awalbulan.jpeg"]
    },
    {
      date: "23 April 2026",
      title: "Penyiaran dan mujahadah usbuiyah",
      desc: "Melakukan penyiaran di daerah Jl. Veteran dan melakukan mujahadah usbuiyah dilanjutkan dengan mujahadah penyiaran di Kelurahan Kidul Dalam ",
      images: ["/fotopenyiaran/jl. veteran.jpeg", "/fotopenyiaran/mujsiar.jpeg"]
    },
    {
      date: "24 April 2026",
      title: "Penyiaran di daerah Kecamatan Klojen",
      desc: "Sholat jum'at dan penyiaran di daerah Kecamatan Klojen beserta sekitarnya.",
      images: ["/fotopenyiaran/jumat.jpeg", "/fotopenyiaran/jumat2.jpeg", "/fotopenyiaran/jumat3.jpeg"]
    },
    {
      date: "25 April 2026",
      title: "Penutupan Praktek Penyiaran Lapangan",
      desc: "Penutupan Praktek Penyiaran Lapangan (PPL) dan persiapan pulang.",
      images: ["/fotopenyiaran/penutupan.JPG"]
    }
  ];

  useGSAP(() => {
    gsap.to(scrollLine.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top 20%",
        end: "bottom 80%",
        scrub: true,
      }
    });

    const items = gsap.utils.toArray('.timeline-item');
    items.forEach((item: any) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, { scope: container });

  return (
    <section id={id} ref={container} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm italic">Journal Journey</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">Aktivitas PPL Seminggu</h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Garis Tengah Statis */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-slate-100 z-0"></div>
          
          {/* Garis Progress Animated */}
          <div 
            ref={scrollLine}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-emerald-600 z-10 origin-top h-0"
          ></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className={`timeline-item relative mb-24 flex flex-col md:flex-row items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot Penanda */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-2 h-2 lg:w-4 lg:h-4 bg-emerald-600   rounded-full z-20 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>

              {/* Konten Teks */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                <div className={`flex flex-col ${index % 2 !== 0 ? 'md:items-start' : 'md:items-end'} text-left md:text-right`}>
                   <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                     <CalendarDays size={18} />
                     <span>{event.date}</span>
                   </div>
                   <h4 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{event.title}</h4>
                   <p className="text-slate-500 leading-relaxed text-sm md:text-base">{event.desc}</p>
                </div>
              </div>

              {/* Konten Foto Optimized */}
              <div className="w-full lg:ml-12 md:w-1/2 pl-12 md:pl-0 md:px-12 mt-8 md:mt-0">
                <div className="grid grid-cols-2 gap-3">
                  {event.images.map((img, i) => (
                    <div 
                      key={i} 
                      className={`relative overflow-hidden rounded-2xl shadow-md h-32 md:h-44 ${
                        event.images.length === 1 ? 'col-span-2 h-56' : 
                        (event.images.length === 3 && i === 0) ? 'col-span-2' : 'col-span-1'
                      }`}
                    >
                      <Image 
                        loading="eager"
                        src={img} 
                        alt={`${event.title} - ${i}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}