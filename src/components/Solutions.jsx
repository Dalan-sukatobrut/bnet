import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("m365");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const content = {
    m365: {
      title: "Microsoft 365",
      subtitle: "Productivity Cloud Solution",
      desc: "Solusi lengkap kolaborasi kerja dengan aplikasi Office premium, penyimpanan cloud aman, dan fitur keamanan tingkat tinggi.",
      image: "/images/clients/microsoft 365 bg page.png",
      features: [
        "Word, Excel, PPT",
        "Outlook & Teams",
        "1TB Cloud Storage",
        "Keamanan Siber",
        "Update Otomatis",
      ],
      icon: "/images/clients/microsoft 365 pilihan.png",
    },
    vps: {
      title: "VPS",
      subtitle: "Virtual Private Server",
      desc: "Server virtual dengan performa tinggi dan resource dedicated.",
      image: "/images/clients/vps bg page.png",
      features: [
        "Resource Dedicated",
        "Full Root Access",
        "Skalabilitas Mudah",
        "Uptime 99.9%",
        "Pilihan OS Luas",
      ],
      icon: "/images/clients/vps icon pilihan.png",
    },
    colocation: {
      title: "Colocation Server",
      subtitle: "Data Center Infrastructure",
      desc: "Titipkan server fisik Anda di data center kami yang aman.",
      image: "/images/clients/colocation server bg page.png",
      features: [
        "Rak Server Aman",
        "Listrik Redundan",
        "Pendingin Optimal",
        "Bandwidth Tinggi",
        "Physical Security",
      ],
      icon: "/images/clients/colocation logo.png",
    },
    celebeshost: {
      title: "celebeshost.id",
      subtitle: "Cloud Services",
      desc: "Solusi hosting dan cloud untuk bisnis modern.",
      image: "/images/clients/celebeshost bg page.png",
      features: [
        "Web Hosting",
        "Domain Resmi",
        "VPS Server",
        "Colocation Center",
        "SSL Certificate",
      ],
      icon: "/images/clients/celebeshost logo.png",
    },
  };

  return (
    <section
      ref={sectionRef}
      id="produk"
      className="bg-[#f8fafc] min-h-screen w-full py-12 md:py-24 font-['Inter',sans-serif]"
    >
      <div className="container mx-auto max-w-6xl px-4 flex flex-col items-center">
        {/* JUDUL */}
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-['Montserrat'] uppercase">
            Produk <span className="text-blue-600">Kami .</span>
          </h2>
          <div
            className={`w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full transition-all duration-1000 delay-300 ${
              isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* TAB */}
        <div className="w-full flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex gap-2 overflow-x-auto no-scrollbar">
            {Object.keys(content).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-[90px] h-[55px] md:w-[130px] md:h-[65px] rounded-xl transition-all duration-300 flex items-center justify-center p-3
                  ${
                    activeTab === key
                      ? "bg-blue-600 shadow-lg scale-105"
                      : "hover:bg-slate-50"
                  }`}
              >
                <img
                  src={content[key].icon}
                  alt={key}
                  className={`max-w-full max-h-full object-contain ${
                    activeTab === key
                      ? "brightness-0 invert"
                      : "opacity-60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* CARD */}
        <div
          className={`rounded-[3rem] overflow-hidden border border-blue-100 shadow-2xl 
          flex flex-col md:flex-row w-full bg-white min-h-[520px] md:h-[520px] transition-all duration-1000
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          {/* IMAGE - Perbaikan utama di area ini */}
          <div className="relative w-full md:w-[45%] h-[250px] sm:h-[300px] md:h-full shrink-0 overflow-hidden">
            <img
              src={content[activeTab].image}
              alt={content[activeTab].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

            <div className="absolute bottom-8 w-full flex justify-center md:justify-start md:left-10">
              <span className="bg-blue-600 text-white text-[11px] px-6 py-2.5 rounded-full font-extrabold uppercase tracking-[0.2em]">
                {content[activeTab].subtitle}
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-8 md:p-14 lg:p-20 flex flex-col justify-center items-center md:items-start text-center md:text-left flex-1 bg-gradient-to-br from-white to-blue-50/30">
            <h3 className="text-3xl lg:text-5xl font-[900] text-slate-900 uppercase mb-5">
              {content[activeTab].title}
            </h3>

            <p className="text-slate-500 text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-md italic">
              "{content[activeTab].desc}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {content[activeTab].features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white px-5 py-4 rounded-2xl border border-slate-100 shadow-sm"
                >
                  <div className="bg-blue-50 p-1.5 rounded-full">
                    <CheckCircle2 size={16} className="text-blue-600" />
                  </div>
                  <span className="text-[12px] font-bold text-slate-700 uppercase tracking-wider">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Solutions;