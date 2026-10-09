import React from 'react';
import { MapPin, Clock, Truck, ShieldCheck, Phone, Wrench, ExternalLink, Navigation } from 'lucide-react';
import { STORE_LOCATION, STORE_PHONE_DISPLAY, STORE_PHONE_NUMBER, STORE_MAPS_URL } from '../data/products';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-[#0e0e11] border-b border-[#222226]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Workshop Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-xl border border-[#2b2b32] bg-[#141418] shadow-2xl">
              <img
                src="/images/bengkel_gizam_kendari_asli_vertical_1791437242590.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/unnamed.webp';
                }}
                alt="Bengkel dan Toko Gizam Suspensi Kendari"
                className="w-full h-auto max-h-[560px] object-cover object-center transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-zinc-300">
                <span className="font-bold text-white block text-sm">Gizam Suspensi Kendari — Servis Bergaransi</span>
                <span className="text-zinc-400">Jl. G. Nipa-nipa, Lorong Maleo, Punggolaka, Kendari</span>
              </div>
            </div>

            {/* Google Maps Quick Direction Button */}
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <a
                href={STORE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#d71920] p-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#b8141a] transition-colors"
              >
                <Navigation className="h-4 w-4" />
                <span>Petunjuk Arah Google Maps</span>
              </a>
              <div className="flex items-center justify-center gap-2 rounded-lg border border-[#2a2a30] bg-[#161619] px-3.5 py-3 text-xs text-zinc-300">
                <Wrench className="h-4 w-4 text-[#d71920]" />
                <span className="font-semibold">Servis Bergaransi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Info */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d71920] font-display">
              <span>PROFIL WORKSHOP & TOKO RESMI</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>PUNGGOLAKA, KENDARI</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
              Tentang Gizam Suspension
            </h2>

            {/* Exact Quote from brief */}
            <blockquote className="border-l-4 border-[#d71920] pl-4 py-1 text-base sm:text-lg text-zinc-200 font-medium italic">
              “Gizam Suspension Kendari menyediakan berbagai pilihan shockbreaker untuk kebutuhan motor harian maupun modifikasi. Kami menyediakan beberapa ukuran dan model dengan harga yang terjangkau.”
            </blockquote>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Kami adalah bengkel spesialis suspensi dan toko shockbreaker di Kota Kendari. Melayani penjualan shockbreaker baru & variasi berbagai ukuran (310–330 mm), servis shock motor & mobil, penggantian per, setelan *rebound*, hingga tukar tambah dengan garansi servis terpercaya.
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-lg border border-[#242429] bg-[#141417] p-4 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#d71920] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block mb-0.5">Alamat Workshop:</span>
                  <span className="text-zinc-300">{STORE_LOCATION}</span>
                  <a
                    href={STORE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-[#d71920] hover:underline font-semibold"
                  >
                    <span>Buka Lokasi di Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-[#242429] bg-[#141417] p-4 flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#d71920] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block mb-0.5">Jam Operasional:</span>
                  <span className="text-zinc-300">Setiap Hari: 08.00 – 16.45 WITA</span>
                  <span className="block text-zinc-500 mt-1">Konsultasi WA selalu aktif</span>
                </div>
              </div>

              <div className="rounded-lg border border-[#242429] bg-[#141417] p-4 flex items-start gap-3">
                <Truck className="h-5 w-5 text-[#d71920] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block mb-0.5">Pengiriman Cepat Sultra:</span>
                  <span className="text-zinc-400">Siap kirim via travel/ekspedisi ke Konawe, Kolaka, Baubau, Muna, Bombana & seluruh Indonesia.</span>
                </div>
              </div>

              <div className="rounded-lg border border-[#242429] bg-[#141417] p-4 flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#d71920] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block mb-0.5">Kontak Resmi:</span>
                  <span className="font-mono text-zinc-200 font-bold">{STORE_PHONE_DISPLAY}</span>
                  <span className="block text-zinc-500 mt-0.5">Konsultasi Gratis via WhatsApp</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
