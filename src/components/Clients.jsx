import React from 'react';

const Clients = () => {
  const clientLogos = [
    { name: "Badan Pusat Statistik Makassar", url: "/images/clients/badan pusat statistik makassar logo our client.png" },
    { name: "Bank Mandiri", url: "/images/clients/bank-mandiri logo our client.png" },
    { name: "Bank Sulteng", url: "/images/clients/bank-sulteng-logo our client.png" },
    { name: "BBVET Maros", url: "/images/clients/bbvet maros logo our client.png" },
    { name: "Bosowa Semen", url: "/images/clients/bosowa semen logo our client.png" },
    { name: "Bosowa Berlian Motor", url: "/images/clients/bosowa-berlian-motor-logo our client.png" },
    { name: "Bosowa Multifinance", url: "/images/clients/bosowa-multifinance logo our client.png" },
    { name: "Bosowa Propertindo", url: "/images/clients/bosowa-prop.png" },
    { name: "Dimarco", url: "/images/clients/dimarco logo our client.png" },
    { name: "DJP Pajak", url: "/images/clients/djp-pajak-logo our client.png" },
    { name: "Pengadilan Negeri Makassar", url: "/images/clients/pengadilan negri kota makassar logo our client.png" },
    { name: "SAS", url: "/images/clients/sas logo our client.png" },
    { name: "Universitas UMI", url: "/images/clients/universitas umi logo our client.png" },
  ];

  return (
    <section id="klien" className="bg-[#0f172a]/5 py-24 px-6 overflow-hidden border-t border-slate-100">
      <div className="container mx-auto text-center">
        {/* Warna Judul Kembali ke Biru dan Kuning sesuai permintaan awal */}
        <h2 className="text-5xl font-black text-[#1e40af] mb-4">
          Klien <span className="text-yellow-500">Kami</span><span className="text-yellow-500">.</span>
        </h2>
        <p className="text-gray-500 text-lg font-medium mb-16">
          Beberapa perusahaan dan instansi yang menjadi klien kami
        </p>

        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-12">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="mx-4 bg-white p-8 w-64 h-32 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center flex-shrink-0"
              >
                <img 
                  src={client.url} 
                  alt={client.name} 
                  className="max-h-16 w-full object-contain"
                />
              </div>
            ))}
            
            {/* Duplikasi Loop untuk efek sambung menyambung */}
            {clientLogos.map((client, index) => (
              <div 
                key={`second-${index}`} 
                className="mx-4 bg-white p-8 w-64 h-32 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center flex-shrink-0"
              >
                <img 
                  src={client.url} 
                  alt={client.name} 
                  className="max-h-16 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default Clients;