import React from 'react';
import { Wrench, Bike, Gauge, Wallet, CheckCircle, ShieldCheck } from 'lucide-react';

export const Advantages: React.FC = () => {
  const advantages = [
    {
      icon: Wrench,
      title: 'Konstruksi Kuat',
      subtitle: 'Dirancang untuk penggunaan harian & kebutuhan modifikasi',
      description: 'Dibangun dengan as hidrolik hard chrome tebal 12.5–14 mm dan seal ganda bertekanan tinggi. Tahan terhadap jalanan berlubang, tidak mudah bocor, dan awet bertahun-tahun.',
      metric: 'Heavy-Duty CNC Alloy'
    },
    {
      icon: Bike,
      title: 'Beragam Ukuran',
      subtitle: 'Pilihan panjang shock presisi sesuai kebutuhan motor',
      description: 'Tersedia lengkap dari 310 mm, 315 mm, 320 mm, hingga 330 mm. Mendukung berbagai tipe motor matic, bebek, maupun custom stance tanpa perlu rubah dudukan (Plug & Play).',
      metric: '310 – 330 mm Ready'
    },
    {
      icon: Gauge,
      title: 'Tampilan Sporty',
      subtitle: 'Desain tabung dan per shock memberikan tampilan agresif',
      description: 'Pilihan finishing anodized elegan, per pegas berotot, dan tabung reservoir nitrogen memberikan look motor kontes maupun paddock balap yang berkelas di jalan.',
      metric: 'Paddock Racing Look'
    },
    {
      icon: Wallet,
      title: 'Harga Kompetitif',
      subtitle: 'Kualitas suspensi premium dengan harga terjangkau',
      description: 'Dapatkan performa rebound empuk dan kestabilan berkendara tingkat tinggi dengan harga mulai dari Rp280.000. Investasi kenyamanan paling sepadan untuk motor harian.',
      metric: 'Mulai Rp280.000'
    }
  ];

  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-[#0a0a0c] border-b border-[#222226] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#d71920]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d71920] mb-2 font-display">
            <span>KEUNGGULAN SUSPENSI</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>PRODUK TERPERCAYA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
            Kenapa Pilih Gizam?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Kombinasi material tangguh, presisi peredaman jalan raya, dan desain berkelas yang siap memanjakan setiap kilometer perjalanan Anda.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-xl border border-[#232328] bg-[#121215] p-6 transition-all duration-300 hover:border-[#d71920]/80 hover:bg-[#15151a]"
              >
                <div>
                  {/* Top Icon and metric */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#d71920]/10 text-[#d71920] group-hover:bg-[#d71920] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-zinc-400 group-hover:text-zinc-200">
                      {item.metric}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                    {item.title}
                  </h3>
                  
                  <p className="mt-1 text-xs font-semibold text-[#d71920]">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Trust Notch */}
                <div className="mt-5 pt-4 border-t border-[#1c1c22] flex items-center gap-2 text-xs text-zinc-500">
                  <CheckCircle className="h-3.5 w-3.5 text-zinc-400" />
                  <span>QC & Tes Beban Kendari</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust banner underneath */}
        <div className="mt-12 rounded-xl border border-[#26262b] bg-[#131316] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#d71920]/20 flex items-center justify-center text-[#d71920] shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white uppercase">
                Garansi Resmi & Layanan Pasang
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Setiap unit shockbreaker Gizam bergaransi fungsi dan siap bantu rekomendasi setelan rebound untuk postur berkendara Anda.
              </p>
            </div>
          </div>

          <a
            href="#cek-motor"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#222228] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#2c2c34] transition-colors border border-[#33333d]"
          >
            Konsultasikan Ukuran Motor
          </a>
        </div>

      </div>
    </section>
  );
};
