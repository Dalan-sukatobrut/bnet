import React, { useEffect } from 'react';
import { ShieldCheck, Globe, Zap } from 'lucide-react';

const AboutUs = () => {
  // Memastikan posisi scroll di paling atas saat masuk halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[0px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image Utama - Menggunakan h-full agar tidak scroll */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/clients/kami.png" 
          alt="Tentang Kami Background" 
          className="w-full h-full object-cover scale-120 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-black/10"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Sisi Kiri: Judul Besar (Ukuran responsif agar tidak memakan tempat) */}
          <div className="lg:w-1/2 flex flex-col items-start">
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none drop-shadow-2xl">
              Tentang <br /> 
              <span className="text-white opacity-90">Kami</span>
              <span className="text-white inline-block animate-pulse ml-2">.</span>
            </h1>
            <div className="h-2 w-24 bg-yellow-400 mt-6 rounded-full"></div>
          </div>

          {/* Sisi Kanan: Kartu Informasi (Max-height diatur agar tidak luber) */}
          <div className="lg:w-1/2 w-full max-w-xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[32px] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl p-6 md:p-10 rounded-[32px] text-white border border-white/20 shadow-2xl">
                
                <h2 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-yellow-400 rounded-full"></span>
                  BNet Profile
                </h2>
                
                {/* Konten teks lebih ringkas agar pas 1 layar */}
                <div className="space-y-5 text-slate-200 font-medium leading-snug text-sm md:text-base">
                  <div className="flex gap-4 items-start">
                    <Zap className="text-yellow-400 shrink-0 mt-1" size={20} />
                    <p>
                      <strong className="text-white">PT Celebes Media Jaringan</strong> adalah ISP yang fokus pada inovasi infrastruktur digital terkini.
                    </p>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <ShieldCheck className="text-blue-400 shrink-0 mt-1" size={20} />
                    <p>
                      Beroperasi resmi dengan <strong className="text-white">Izin No. 858/2017</strong> dari Kominfo Republik Indonesia.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Globe className="text-cyan-400 shrink-0 mt-1" size={20} />
                    <p>
                      Anggota resmi <strong className="text-white">APJII</strong>, berkomitmen memajukan ekosistem internet Indonesia yang stabil.
                    </p>
                  </div>
                </div>

                {/* Footer Kartu */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between opacity-60 text-[10px] tracking-widest font-black uppercase">
                  <span>Trust & Reliable</span>
                  <span>Est. 2017</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      
    </section>
  );
};

export default AboutUs;