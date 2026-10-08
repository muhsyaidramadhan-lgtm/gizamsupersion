import React from 'react';
import { MessageCircle, MapPin, Phone, Instagram, Send, ShieldCheck, ChevronRight, ExternalLink } from 'lucide-react';
import { STORE_LOCATION, STORE_PHONE_DISPLAY, STORE_PHONE_NUMBER, STORE_MAPS_URL } from '../data/products';

export const Footer: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent('Halo Admin Gizam Suspension Kendari, saya ingin bertanya.');
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="border-t border-[#222226] bg-[#08080a] text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Overview (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[#d71920] text-xs font-black text-white">
                GZ
              </span>
              <span className="font-display text-xl font-black text-white tracking-wider">
                GIZAM <span className="text-[#d71920]">SUSPENSION</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Toko dan supplier resmi shockbreaker Gizam di Kota Kendari, Sulawesi Tenggara. Solusi suspensi harian dan modifikasi balap yang nyaman, empuk, dan stabil.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-zinc-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Admin Toko Online & Siap Melayani Kendari</span>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Menu Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleScrollTo('#beranda')}
                  className="hover:text-white transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#produk')}
                  className="hover:text-white transition-colors"
                >
                  Katalog Produk
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#keunggulan')}
                  className="hover:text-white transition-colors"
                >
                  Keunggulan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#pilih-kebutuhan')}
                  className="hover:text-white transition-colors"
                >
                  Pilih Ukuran
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#cek-motor')}
                  className="hover:text-white transition-colors"
                >
                  Panduan Motor
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#tentang')}
                  className="hover:text-white transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Cara Pesan (Col 7-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Cara Pesan Praktis
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="font-mono text-[#d71920] font-bold">1.</span>
                <span>Pilih tipe shockbreaker & ukuran yang sesuai dengan motor Anda.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-[#d71920] font-bold">2.</span>
                <span>Klik tombol <strong>Pesan via WhatsApp</strong> untuk otomatis chat dengan admin.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-[#d71920] font-bold">3.</span>
                <span>Pilih ambil langsung di toko Kendari atau pengiriman via ekspedisi.</span>
              </li>
            </ul>
          </div>

          {/* Hubungi & Lokasi (Col 9-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Lokasi & Kontak Kendari
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#d71920] shrink-0 mt-0.5" />
                <div>
                  <span>{STORE_LOCATION}</span>
                  <a
                    href={STORE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-[#d71920] hover:underline font-semibold"
                  >
                    Buka di Google Maps →
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#d71920] shrink-0" />
                <span className="font-mono text-zinc-300 font-semibold">{STORE_PHONE_DISPLAY}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={handleOpenWhatsApp}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-2.5 px-3 text-xs font-bold text-zinc-950 uppercase tracking-wider transition-colors hover:bg-[#20ba59]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat Admin WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#1a1a20] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Gizam Suspension Kendari. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Spesialis Shockbreaker Motor Aftermarket</span>
            <span aria-hidden="true">·</span>
            <span>Kendari, Sulawesi Tenggara</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
