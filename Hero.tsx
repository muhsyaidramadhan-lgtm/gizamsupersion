import React from 'react';
import { ShoppingCart, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { STORE_PHONE_NUMBER } from '../data/products';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenCompatibility: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onOpenCompatibility }) => {
  const handleOrderWhatsApp = () => {
    const message = encodeURIComponent(
      'Halo Admin Gizam Suspension Kendari, saya ingin memesan shockbreaker Gizam. Boleh minta info katalog dan ketersediaan stok hari ini?'
    );
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="beranda" className="relative overflow-hidden bg-[#0a0a0c] py-14 md:py-20 lg:py-24 border-b border-[#222226]">
      {/* Background Graphic Layer */}
      <div className="absolute inset-0 z-0 opacity-25">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#d71920]/25 blur-[120px]" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-zinc-700/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust badge kicker - clean inline metadata without static pill boxes */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-400">
              <span className="text-[#d71920] flex items-center gap-1.5 font-bold">
                <span className="inline-block h-2 w-2 rounded-full bg-[#d71920] animate-pulse" />
                Gizam Suspension Official
              </span>
              <span aria-hidden="true" className="text-zinc-600">/</span>
              <span>Kendari, Sulawesi Tenggara</span>
              <span aria-hidden="true" className="text-zinc-600">/</span>
              <span>Ready Stock & Kirim Sultra</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.08] text-balance">
              Shockbreaker Gizam — Bikin Motor Lebih{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-[#d71920] to-orange-500">
                Nyaman & Stabil
              </span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed">
              Pilihan shockbreaker tabung dan shock mekanik untuk berbagai kebutuhan motor. Tersedia ukuran 310–330 mm.
            </p>

            {/* Bullet Proof Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#d71920] shrink-0" />
                <span>Mulai dari <strong>Rp280.000</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#d71920] shrink-0" />
                <span>Pilihan Ukuran 310 - 330 mm</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#d71920] shrink-0" />
                <span>Tersedia Model Mekanik & Tabung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#d71920] shrink-0" />
                <span>Bisa COD / Antar Area Kendari</span>
              </div>
            </div>

            {/* Primary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#d71920] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[#d71920]/25 transition-all hover:bg-[#b8141a] hover:scale-[1.01] active:scale-[0.99]"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Lihat Produk</span>
              </button>

              <button
                onClick={handleOrderWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#37373f] bg-[#161619] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-zinc-100 transition-all hover:border-[#25D366] hover:bg-[#1c1c21] hover:text-[#25D366]"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>Pesan via WhatsApp</span>
              </button>

              <button
                onClick={onOpenCompatibility}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                <span>Cek Ukuran Motor</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame with Automotive Styling */}
              <div className="relative overflow-hidden rounded-xl border border-[#2b2b32] bg-[#141417] shadow-2xl">
                <img
                  src="/images/hero_gizam_suspension_1791421680883.jpg"
                  alt="Shockbreaker Gizam Suspension Performance"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-80" />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#d71920]" />
                    <span className="font-semibold text-white">Garansi Keaslian Gizam</span>
                  </div>
                  <span className="font-mono text-zinc-400 text-xs">READY IN KENDARI</span>
                </div>
              </div>

              {/* Decorative side accent bar */}
              <div className="absolute -left-3 top-8 bottom-8 w-1 bg-[#d71920] rounded-full hidden sm:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
