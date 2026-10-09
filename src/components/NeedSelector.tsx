import React from 'react';
import { ArrowRight, Check, Disc, Zap, Flame } from 'lucide-react';
import { ShockSize } from '../types';

interface NeedSelectorProps {
  onSelectCategory: (category: '310' | '315-330' | 'tabung') => void;
}

export const NeedSelector: React.FC<NeedSelectorProps> = ({ onSelectCategory }) => {
  return (
    <section id="pilih-kebutuhan" className="py-16 md:py-24 bg-[#0e0e11] border-b border-[#222226]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d71920] mb-2 font-display">
            <span>PANDUAN PEMILIHAN</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>SESUAI KEBUTUHAN MOTOR</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
            Pilih Berdasarkan Kebutuhan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Temukan karakter suspensi yang paling tepat untuk gaya berkendara dan spesifikasi motor Anda.
          </p>
        </div>

        {/* 3 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Shock 310 mm */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#2b2b32] bg-[#141418] p-6 lg:p-7 transition-all duration-300 hover:border-[#d71920] hover:shadow-xl hover:shadow-[#d71920]/10">
            <div>
              {/* Visual Indicator Pill/Dot */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#d71920]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#d71920]">
                    Ukuran Pendek
                  </span>
                </div>
                <span className="font-mono text-xs text-zinc-400">310 mm</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-[#d71920] transition-colors">
                🔴 Shock 310 mm
              </h3>

              <p className="mt-2 text-sm text-zinc-300 font-medium">
                Untuk kebutuhan tertentu dengan ukuran lebih pendek.
              </p>

              <div className="mt-5 space-y-2.5 text-xs text-zinc-400">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-[#d71920] shrink-0 mt-0.5" />
                  <span>Karakter handling lincah untuk tikungan tajam dan manuver padat perkotaan.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-[#d71920] shrink-0 mt-0.5" />
                  <span>Sangat pas untuk motor modifikasi stance ceper elegan atau velg ring 12.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-[#d71920] shrink-0 mt-0.5" />
                  <span>Rekomendasi: Yamaha Mio Karbu, Fino, Scoopy ceper, atau matic modif.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#202026]">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs text-zinc-400">Harga:</span>
                <span className="font-mono text-lg font-bold text-white">Rp650.000</span>
              </div>
              <button
                onClick={() => onSelectCategory('310')}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#1f1f26] py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#d71920]"
              >
                <span>Lihat Shock 310 mm</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Shock 315–330 mm */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#2b2b32] bg-[#141418] p-6 lg:p-7 transition-all duration-300 hover:border-zinc-400 hover:shadow-xl hover:shadow-white/5">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-950" />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Standar Harian
                  </span>
                </div>
                <span className="font-mono text-xs text-zinc-400">315, 320, 330 mm</span>
              </div>

              <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-zinc-200 transition-colors">
                ⚫ Shock 315–330 mm
              </h3>

              <p className="mt-2 text-sm text-zinc-300 font-medium">
                Pilihan untuk motor yang membutuhkan ukuran shock berbeda.
              </p>

              <div className="mt-5 space-y-2.5 text-xs text-zinc-400">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-zinc-300 shrink-0 mt-0.5" />
                  <span>Kenyamanan maksimal untuk komuter harian, kerja, dan angkutan barang/boncengan.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-zinc-300 shrink-0 mt-0.5" />
                  <span>Ground clearance proporsional agar bagian kolong sasis tidak terbentur aspal.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-zinc-300 shrink-0 mt-0.5" />
                  <span>Rekomendasi: Beat series (315/320mm), Vario 125/150/160 (330mm), Mio M3 (315mm).</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#202026]">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs text-zinc-400">Harga:</span>
                <span className="font-mono text-lg font-bold text-white">Rp280.000</span>
              </div>
              <button
                onClick={() => onSelectCategory('315-330')}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#1f1f26] py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-zinc-200 hover:text-zinc-900"
              >
                <span>Lihat Shock 315–330 mm</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Shock Tabung */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#2b2b32] bg-[#141418] p-6 lg:p-7 transition-all duration-300 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/10">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-yellow-400">
                    Premium Gas Canister
                  </span>
                </div>
                <span className="font-mono text-xs text-zinc-400">Gas Reservoir</span>
              </div>

              <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-yellow-400 transition-colors">
                🟡 Shock Tabung
              </h3>

              <p className="mt-2 text-sm text-zinc-300 font-medium">
                Untuk pengguna yang menginginkan tampilan dan karakter shock yang lebih premium.
              </p>

              <div className="mt-5 space-y-2.5 text-xs text-zinc-400">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Tabung gas nitrogen aktif membantu sirkulasi fluida hidrolik saat kerja berat.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Daya redam stabil tanpa gejala membal berlebih di jalanan gelombang atau touring.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Memberikan visual padat ala motor kompetisi dengan CNC reservoir mewah.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#202026]">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs text-zinc-400">Harga:</span>
                <span className="font-mono text-lg font-bold text-white">Rp650.000 – Rp680.000</span>
              </div>
              <button
                onClick={() => onSelectCategory('tabung')}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#1f1f26] py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-yellow-500 hover:text-black font-bold"
              >
                <span>Lihat Shock Tabung</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
