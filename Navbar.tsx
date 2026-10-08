import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { STORE_PHONE_NUMBER } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGeneralWhatsApp = () => {
    const text = encodeURIComponent('Halo Admin Gizam Suspension Kendari, saya ingin bertanya seputar produk shockbreaker motor.');
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#26262b] bg-[#0c0c0e]/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#beranda" 
          className="group flex items-center gap-2 text-xl font-bold tracking-wider text-white transition-colors uppercase font-display"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded bg-[#d71920] text-xs font-black text-white shadow-sm shadow-[#d71920]/40">
            GZ
          </span>
          <span className="tracking-tight text-xl font-black">
            GIZAM <span className="text-[#d71920]">SUSPENSION</span>
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
          <a
            href="#produk"
            onClick={(e) => { e.preventDefault(); handleNavClick('#produk'); }}
            className="hover:text-white transition-colors hover:underline hover:underline-offset-4 decoration-[#d71920]"
          >
            Produk
          </a>
          <a
            href="#keunggulan"
            onClick={(e) => { e.preventDefault(); handleNavClick('#keunggulan'); }}
            className="hover:text-white transition-colors hover:underline hover:underline-offset-4 decoration-[#d71920]"
          >
            Keunggulan
          </a>
          <a
            href="#pilih-kebutuhan"
            onClick={(e) => { e.preventDefault(); handleNavClick('#pilih-kebutuhan'); }}
            className="hover:text-white transition-colors hover:underline hover:underline-offset-4 decoration-[#d71920]"
          >
            Pilih Ukuran
          </a>
          <a
            href="#cek-motor"
            onClick={(e) => { e.preventDefault(); handleNavClick('#cek-motor'); }}
            className="hover:text-white transition-colors hover:underline hover:underline-offset-4 decoration-[#d71920]"
          >
            Cek Motor
          </a>
          <a
            href="#tentang"
            onClick={(e) => { e.preventDefault(); handleNavClick('#tentang'); }}
            className="hover:text-white transition-colors hover:underline hover:underline-offset-4 decoration-[#d71920]"
          >
            Tentang Kami
          </a>
        </nav>

        {/* Zone 3: Primary actions (Cart & WhatsApp) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            aria-label="Buka Keranjang Pesanan"
            className="relative flex items-center justify-center rounded-lg border border-[#2b2b31] bg-[#161619] p-2.5 text-zinc-200 transition-colors hover:border-[#d71920] hover:text-white"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#d71920] text-xs font-bold text-white tabular-nums shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={openGeneralWhatsApp}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#d71920] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#b8141a] whitespace-nowrap shadow-sm shadow-[#d71920]/30"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat WhatsApp</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden rounded-lg border border-[#2b2b31] bg-[#161619] p-2 text-zinc-300"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#26262b] bg-[#111114] px-4 pt-3 pb-5 transition-all">
          <div className="flex flex-col gap-3 text-sm font-medium text-zinc-200">
            <button
              onClick={() => handleNavClick('#produk')}
              className="text-left py-2 border-b border-[#1f1f23] hover:text-[#d71920]"
            >
              Produk Unggulan
            </button>
            <button
              onClick={() => handleNavClick('#keunggulan')}
              className="text-left py-2 border-b border-[#1f1f23] hover:text-[#d71920]"
            >
              Keunggulan Gizam
            </button>
            <button
              onClick={() => handleNavClick('#pilih-kebutuhan')}
              className="text-left py-2 border-b border-[#1f1f23] hover:text-[#d71920]"
            >
              Pilih Berdasarkan Kebutuhan
            </button>
            <button
              onClick={() => handleNavClick('#cek-motor')}
              className="text-left py-2 border-b border-[#1f1f23] hover:text-[#d71920]"
            >
              Panduan Cek Motor Kamu
            </button>
            <button
              onClick={() => handleNavClick('#tentang')}
              className="text-left py-2 border-b border-[#1f1f23] hover:text-[#d71920]"
            >
              Tentang Gizam Suspension
            </button>
            <button
              onClick={openGeneralWhatsApp}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#d71920] py-3 text-sm font-bold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Hubungi via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
