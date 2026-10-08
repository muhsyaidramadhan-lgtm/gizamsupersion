import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { STORE_PHONE_NUMBER, STORE_PHONE_DISPLAY } from '../data/products';

export const WhatsAppCTA: React.FC = () => {
  const [motorName, setMotorName] = useState('');
  const [preferredModel, setPreferredModel] = useState('Rekomendasi Terbaik Gizam');
  const [ridingNeed, setRidingNeed] = useState('Harian & Kerja');

  const handleSendCustomWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const motorText = motorName.trim() || 'Motor saya';
    const message = encodeURIComponent(
      `Halo Admin Gizam Suspension Kendari!\n\n` +
      `Saya mau konsultasi ukuran shock yang cocok untuk motor saya:\n` +
      `• Motor: ${motorText}\n` +
      `• Minat Model: ${preferredModel}\n` +
      `• Kebutuhan Pakai: ${ridingNeed}\n\n` +
      `Kira-kira ukuran berapa mm yang paling pas dan stabil ya min? Apakah barangnya ready stock di toko Kendari? Terima kasih!`
    );
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      'Halo Admin Gizam Suspension Kendari, saya mau konsultasi ukuran shockbreaker yang cocok untuk motor saya.'
    );
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kontak-wa" className="py-20 md:py-28 bg-[#0c0c0e] relative overflow-hidden border-b border-[#222226]">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-80 w-[700px] rounded-full bg-[#d71920]/15 blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Headline per prompt */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d71920] mb-3 font-display">
          <span>KONSULTASI GRATIS TEKNISI KENDARI</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>RESPON CEPAT</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Mau Cek Ukuran yang Cocok untuk Motor Kamu?
        </h2>

        <p className="mt-4 text-base sm:text-xl text-zinc-300 font-medium">
          Konsultasikan langsung dengan kami.
        </p>

        {/* Interactive Consultation Box */}
        <div className="mt-10 mx-auto max-w-2xl rounded-2xl border border-[#2e2e36] bg-[#141418] p-6 sm:p-8 text-left shadow-2xl">
          <form onSubmit={handleSendCustomWhatsApp} className="space-y-4">
            <div>
              <label htmlFor="motor-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Ketik Merk & Tipe Motor Kamu:
              </label>
              <input
                id="motor-name"
                type="text"
                placeholder="Contoh: Honda Vario 125 2021 / Beat Deluxe / Mio M3..."
                value={motorName}
                onChange={(e) => setMotorName(e.target.value)}
                className="w-full rounded-lg border border-[#2b2b32] bg-[#0c0c0e] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#d71920] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="preferred-model" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Tipe Shock Diinginkan:
                </label>
                <select
                  id="preferred-model"
                  value={preferredModel}
                  onChange={(e) => setPreferredModel(e.target.value)}
                  className="w-full rounded-lg border border-[#2b2b32] bg-[#0c0c0e] px-3.5 py-2.5 text-xs text-white focus:border-[#d71920] focus:outline-none"
                >
                  <option value="Rekomendasi Terbaik Gizam">Rekomendasi Bebas Gasruk Gizam</option>
                  <option value="Shock Mekanik (Mulai Rp280.000)">Shock Mekanik (Mulai Rp280.000)</option>
                  <option value="Shock Tabung Gas (Mulai Rp650.000)">Shock Tabung Gas (Mulai Rp650.000)</option>
                  <option value="Shock Pendek 310 mm">Shock Pendek 310 mm</option>
                  <option value="Shock Standar 330 mm">Shock Standar 330 mm</option>
                </select>
              </div>

              <div>
                <label htmlFor="riding-need" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Gaya Pemakaian:
                </label>
                <select
                  id="riding-need"
                  value={ridingNeed}
                  onChange={(e) => setRidingNeed(e.target.value)}
                  className="w-full rounded-lg border border-[#2b2b32] bg-[#0c0c0e] px-3.5 py-2.5 text-xs text-white focus:border-[#d71920] focus:outline-none"
                >
                  <option value="Harian & Kerja Santai">Harian & Kerja Santai</option>
                  <option value="Sering Boncengan / Muatan Berat">Sering Boncengan / Muatan Berat</option>
                  <option value="Modifikasi Ceper / Stance">Modifikasi Ceper / Stance</option>
                  <option value="Touring Jarak Jauh Luar Kota">Touring Jarak Jauh Luar Kota</option>
                </select>
              </div>
            </div>

            {/* Big Green WhatsApp Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 rounded-xl bg-[#25D366] py-4 px-6 text-sm sm:text-base font-extrabold uppercase tracking-wider text-zinc-950 transition-all hover:bg-[#20ba59] hover:shadow-lg hover:shadow-[#25D366]/20 active:scale-[0.99]"
              >
                <MessageCircle className="h-6 w-6 text-zinc-950 fill-zinc-950" />
                <span>Chat WhatsApp Sekarang</span>
              </button>
            </div>
          </form>

          {/* Quick info under the form */}
          <div className="mt-4 pt-4 border-t border-[#222228] flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-2">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              Langsung terhubung dengan admin toko Kendari
            </span>
            <span className="font-mono text-zinc-400">{STORE_PHONE_DISPLAY}</span>
          </div>
        </div>

        {/* Or direct button fallback */}
        <div className="mt-6">
          <button
            onClick={handleDirectWhatsApp}
            className="text-xs text-zinc-400 underline hover:text-white transition-colors"
          >
            Atau klik di sini untuk langsung chat WhatsApp tanpa mengisi formulir
          </button>
        </div>

      </div>
    </section>
  );
};
