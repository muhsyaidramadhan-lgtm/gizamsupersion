import React, { useState } from 'react';
import { Product } from '../types';
import { formatRupiah, STORE_PHONE_NUMBER } from '../data/products';
import { X, MessageCircle, ShoppingCart, Check, ShieldCheck, Wrench, Package } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0].name);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleOrderWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Admin Gizam Suspension Kendari, saya tertarik dengan:\n` +
      `• Produk: ${product.name}\n` +
      `• Ukuran: ${product.sizeLabel}\n` +
      `• Warna: ${selectedColor}\n` +
      `• Harga: ${formatRupiah(product.price)}\n\n` +
      `Apakah barang ini bisa langsung dikirim / diambil di toko Kendari hari ini?`
    );
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleAddCart = () => {
    onAddToCart(product, selectedColor);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-[#2b2b32] bg-[#141418] text-white shadow-2xl my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#242429] px-6 py-4 bg-[#101013]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase text-[#d71920] bg-[#d71920]/15 px-2 py-0.5 rounded">
              {product.sizeLabel}
            </span>
            <span className="text-xs text-zinc-400">
              {product.type === 'tabung' ? 'Suspensi Tabung Gas Eksternal' : 'Suspensi Mekanik Heavy Duty'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 hover:bg-[#202026] hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Visual Image */}
            <div className="relative overflow-hidden rounded-xl border border-[#26262c] bg-[#19191f]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 bg-[#111114] border-t border-[#222228] flex items-center justify-between text-xs text-zinc-400">
                <span>100% Produk Original Gizam</span>
                <span className="text-emerald-400 font-semibold">Tersedia di Toko</span>
              </div>
            </div>

            {/* Product Meta */}
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-2xl font-bold uppercase text-white leading-tight">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="font-mono text-2xl font-black text-white tabular-nums">
                    {formatRupiah(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="font-mono text-xs text-zinc-500 line-through">
                      {formatRupiah(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {product.description}
              </p>

              {/* Color variant selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Pilih Warna Pegas / Bodi: <strong className="text-white">{selectedColor}</strong>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs transition-all ${
                        selectedColor === c.name
                          ? 'border-[#d71920] bg-[#d71920]/10 text-white font-bold'
                          : 'border-[#2d2d35] bg-[#17171d] text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Best for motor list */}
              <div className="rounded-lg bg-[#101013] p-3.5 border border-[#222226] text-xs space-y-1">
                <span className="text-zinc-400 font-semibold block">Cocok Langsung Pasang (Plug & Play):</span>
                <p className="text-zinc-200">
                  {product.bestFor.join(' · ')}
                </p>
              </div>

            </div>

          </div>

          {/* Technical Specifications Sheet */}
          <div className="rounded-xl border border-[#242429] bg-[#101013] p-5 space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-[#d71920]" />
              <span>Spesifikasi Teknis Suspensi</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded bg-[#16161a] border border-[#222226]">
                <span className="text-zinc-400 block text-[11px]">Panjang As ke As (Eye-to-Eye):</span>
                <span className="font-semibold text-white mt-0.5 block">{product.specifications.strokeLength}</span>
              </div>
              <div className="p-2.5 rounded bg-[#16161a] border border-[#222226]">
                <span className="text-zinc-400 block text-[11px]">Diameter Piston Rod:</span>
                <span className="font-semibold text-white mt-0.5 block">{product.specifications.damperDiameter}</span>
              </div>
              <div className="p-2.5 rounded bg-[#16161a] border border-[#222226]">
                <span className="text-zinc-400 block text-[11px]">Karakter Per (Spring Rate):</span>
                <span className="font-semibold text-white mt-0.5 block">{product.specifications.springRate}</span>
              </div>
              <div className="p-2.5 rounded bg-[#16161a] border border-[#222226]">
                <span className="text-zinc-400 block text-[11px]">Material Utama:</span>
                <span className="font-semibold text-white mt-0.5 block">{product.specifications.material}</span>
              </div>
            </div>

            {/* Package Contents */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 pt-2 border-t border-[#1e1e23]">
              <Package className="h-4 w-4 text-[#d71920] shrink-0" />
              <span>Kelengkapan Dalam Box: 1x Shockbreaker Gizam, 2x Ring Bushing Adaptor (10/12mm), 1x Kunci Setelan Per, Stiker Resmi Gizam.</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-[#242429] px-6 py-4 bg-[#101013] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="hidden sm:block text-xs text-zinc-400">
            <span>Stok Ready Kendari: </span>
            <strong className="text-white">{product.stockCount} Unit</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleAddCart}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-lg border border-[#303038] bg-[#1a1a20] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#25252e] transition-colors"
            >
              {addedSuccess ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Berhasil Masuk</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  <span>Tambah Keranjang</span>
                </>
              )}
            </button>

            <button
              onClick={handleOrderWhatsApp}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b8141a] transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Pesan via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
