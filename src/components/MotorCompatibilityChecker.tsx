import React, { useState } from 'react';
import { MOTORCYCLE_DATABASE } from '../data/motorcycles';
import { MotorGuide, ShockSize } from '../types';
import { Search, Bike, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { STORE_PHONE_NUMBER } from '../data/products';

interface MotorCompatibilityCheckerProps {
  onFilterSize: (size: ShockSize) => void;
}

export const MotorCompatibilityChecker: React.FC<MotorCompatibilityCheckerProps> = ({ onFilterSize }) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMotor, setSelectedMotor] = useState<MotorGuide>(MOTORCYCLE_DATABASE[0]);

  const brands = ['All', 'Honda', 'Yamaha', 'Suzuki'];

  const filteredMotors = MOTORCYCLE_DATABASE.filter((m) => {
    const matchBrand = selectedBrand === 'All' || m.brand === selectedBrand;
    const matchQuery = m.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchBrand && matchQuery;
  });

  const handleConsultSpecific = (motor: MotorGuide) => {
    const text = encodeURIComponent(
      `Halo Admin Gizam Suspension Kendari, saya mau konsultasi shockbreaker untuk motor *${motor.model}*. Apakah stok ukuran *${motor.recommendedSize} mm* (${motor.recommendedType}) ready?`
    );
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cek-motor" className="py-16 md:py-24 bg-[#0a0a0c] border-b border-[#222226]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d71920] mb-2 font-display">
            <span>FITUR PANDUAN MOTOR</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>BEBAS GASRUK & AMAN</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
            Cek Ukuran Shock Motor Kamu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Bingung motor kamu pakai shock ukuran 310, 315, 320, atau 330 mm? Cari tipe motormu di bawah untuk rekomendasi langsung dari teknisi Gizam.
          </p>
        </div>

        {/* Interactive Layout Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Search & Model List */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Search Input & Brand Segmented tabs */}
            <div className="rounded-xl border border-[#2b2b32] bg-[#141418] p-4 space-y-3">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Ketik tipe motor (contoh: Vario, Beat, Mio, Scoopy)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-[#2a2a30] bg-[#0c0c0e] py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:border-[#d71920] focus:outline-none"
                />
              </div>

              {/* Brand Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pt-1 pb-0.5">
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBrand(b)}
                    className={`rounded px-3 py-1.5 text-xs font-bold uppercase transition-colors whitespace-nowrap ${
                      selectedBrand === b
                        ? 'bg-[#d71920] text-white'
                        : 'bg-[#1e1e24] text-zinc-400 hover:text-white'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Motor List */}
            <div className="max-h-[380px] overflow-y-auto space-y-2 pr-1 rounded-xl">
              {filteredMotors.map((m, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedMotor(m)}
                  className={`cursor-pointer rounded-lg border p-3.5 transition-all flex items-center justify-between ${
                    selectedMotor.model === m.model
                      ? 'border-[#d71920] bg-[#1a1315] text-white shadow-sm'
                      : 'border-[#222226] bg-[#131316] text-zinc-300 hover:border-zinc-700 hover:bg-[#18181c]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Bike className={`h-4 w-4 ${selectedMotor.model === m.model ? 'text-[#d71920]' : 'text-zinc-500'}`} />
                    <div>
                      <p className="text-sm font-semibold">{m.model}</p>
                      <span className="text-[11px] text-zinc-400">Rekomendasi: {m.recommendedSize} mm</span>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold uppercase text-[#d71920] bg-[#d71920]/10 px-2 py-1 rounded">
                    {m.recommendedSize} mm
                  </span>
                </div>
              ))}

              {filteredMotors.length === 0 && (
                <div className="p-8 text-center text-zinc-500 border border-dashed border-zinc-800 rounded-lg">
                  <p className="text-sm">Tipe motor tidak ditemukan dalam daftar cepat.</p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Silakan langsung hubungi WhatsApp kami untuk menanyakan ukuran motor langka atau custom.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Right: Recommendation Result Card */}
          <div className="lg:col-span-6">
            <div className="rounded-xl border border-[#2b2b32] bg-[#141418] p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#222226]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d71920]" />
                  <span className="font-mono text-xs font-bold uppercase text-zinc-400 tracking-wider">
                    Hasil Rekomendasi Gizam
                  </span>
                </div>
                <span className="text-xs text-zinc-500 font-medium">Spesifikasi Kendari</span>
              </div>

              <div>
                <span className="text-xs text-zinc-400 uppercase tracking-wider block">Tipe Motor Terpilih:</span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white mt-1">
                  {selectedMotor.model}
                </h3>
              </div>

              {/* Big Highlight Box */}
              <div className="rounded-lg bg-[#1a1a20] border border-[#282830] p-5 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-zinc-400 block">Panjang Shock Ideal:</span>
                  <div className="font-display text-3xl font-black text-[#d71920] mt-1 font-mono">
                    {selectedMotor.recommendedSize} <span className="text-base text-zinc-300">mm</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-zinc-400 block">Saran Model Gizam:</span>
                  <div className="text-sm font-bold text-white mt-2">
                    {selectedMotor.recommendedType}
                  </div>
                </div>
              </div>

              {/* Technical Advice Note */}
              <div className="rounded-lg bg-[#0e0e11] p-4 border border-[#222226] text-xs text-zinc-300 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#d71920]" />
                  <span>Catatan Teknisi Gizam:</span>
                </div>
                <p className="leading-relaxed text-zinc-300">
                  {selectedMotor.note}
                </p>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    onFilterSize(selectedMotor.recommendedSize);
                    const el = document.querySelector('#produk');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#d71920] py-3 px-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b8141a] transition-colors"
                >
                  <span>Lihat Produk {selectedMotor.recommendedSize} mm</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => handleConsultSpecific(selectedMotor)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#303038] bg-[#1a1a20] py-3 px-4 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>Tanya Stok Motor Ini</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
