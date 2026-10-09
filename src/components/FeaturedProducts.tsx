import React, { useState } from 'react';
import { Product, ShockSize, ShockType } from '../types';
import { formatRupiah, STORE_PHONE_NUMBER } from '../data/products';
import { ShoppingCart, MessageCircle, Eye, Check, Sparkles } from 'lucide-react';

interface FeaturedProductsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, color: string) => void;
  activeFilterSize?: ShockSize | 'all';
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  activeFilterSize = 'all'
}) => {
  const [selectedType, setSelectedType] = useState<'all' | ShockType>('all');
  const [selectedSize, setSelectedSize] = useState<'all' | ShockSize>(activeFilterSize);
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [addedSuccessId, setAddedSuccessId] = useState<string | null>(null);

  // Sync if prop changes
  React.useEffect(() => {
    if (activeFilterSize) {
      setSelectedSize(activeFilterSize);
    }
  }, [activeFilterSize]);

  const handleColorChange = (productId: string, colorName: string) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: colorName
    }));
  };

  const handleQuickAdd = (product: Product) => {
    const currentColor = selectedColors[product.id] || product.colors[0].name;
    onAddToCart(product, currentColor);
    setAddedSuccessId(product.id);
    setTimeout(() => {
      setAddedSuccessId(null);
    }, 1500);
  };

  const handleDirectWhatsAppOrder = (product: Product) => {
    const currentColor = selectedColors[product.id] || product.colors[0].name;
    const text = encodeURIComponent(
      `Halo Admin Gizam Suspension Kendari, saya ingin memesan:\n` +
      `• Produk: ${product.name}\n` +
      `• Ukuran: ${product.sizeLabel}\n` +
      `• Warna Pilihan: ${currentColor}\n` +
      `• Harga: ${formatRupiah(product.price)}\n\n` +
      `Apakah barang ini ready stock di Kendari? Mohon info cara transaksi dan pengirimannya.`
    );
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  // Filter products
  const filteredProducts = products.filter((p) => {
    if (selectedType !== 'all' && p.type !== selectedType) return false;
    if (selectedSize !== 'all' && p.size !== selectedSize) return false;
    return true;
  });

  return (
    <section id="produk" className="py-16 md:py-24 bg-[#0e0e11] border-b border-[#222226]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d71920] mb-2 font-display">
              <span>KATALOG RESMI GIZAM</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>100% PRODUK ORIGINAL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Produk Unggulan Gizam
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
              Shockbreaker kualitas tinggi dengan daya tahan maksimal untuk harian dan modifikasi. Pilih ukuran presisi sesuai motor Anda.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center rounded-lg bg-[#16161a] p-1 border border-[#2b2b32]">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-3 py-1.5 text-xs font-bold uppercase transition-colors rounded ${
                  selectedType === 'all'
                    ? 'bg-[#d71920] text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Semua Model
              </button>
              <button
                onClick={() => setSelectedType('mekanik')}
                className={`px-3 py-1.5 text-xs font-bold uppercase transition-colors rounded ${
                  selectedType === 'mekanik'
                    ? 'bg-[#d71920] text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Shock Mekanik
              </button>
              <button
                onClick={() => setSelectedType('tabung')}
                className={`px-3 py-1.5 text-xs font-bold uppercase transition-colors rounded ${
                  selectedType === 'tabung'
                    ? 'bg-[#d71920] text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Shock Tabung
              </button>
            </div>

            {/* Size filter */}
            <div className="flex items-center rounded-lg bg-[#16161a] p-1 border border-[#2b2b32]">
              {(['all', 310, 315, 320, 330] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-2.5 py-1.5 text-xs font-mono font-medium rounded transition-colors ${
                    selectedSize === s
                      ? 'bg-zinc-200 text-zinc-950 font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {s === 'all' ? 'All' : `${s}mm`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => {
            const activeColor = selectedColors[product.id] || product.colors[0].name;

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#26262c] bg-[#141418] transition-all duration-300 hover:border-[#d71920]/70 hover:shadow-xl hover:shadow-[#d71920]/5"
              >
                {/* Visual Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a20]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle top metadata unboxed */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white bg-black/70 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                      {product.sizeLabel}
                    </span>

                    <span className="text-[11px] font-semibold text-emerald-400 bg-black/70 px-2 py-1 rounded backdrop-blur-sm border border-emerald-500/20">
                      Ready Kendari
                    </span>
                  </div>

                  {/* Quick Inspect Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3.5 py-2 text-xs font-bold text-zinc-900 shadow-md hover:bg-white"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>Detail & Spesifikasi</span>
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Category / Type inline */}
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
                    <span className="uppercase tracking-wider font-semibold text-[#d71920]">
                      {product.type === 'tabung' ? 'Tabung Gas Nitrogen' : 'Mekanik Heavy Duty'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{product.sizeLabel}</span>
                  </div>

                  {/* Product Title */}
                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="cursor-pointer font-display text-lg font-bold text-white uppercase group-hover:text-[#d71920] transition-colors leading-snug"
                  >
                    {product.name}
                  </h3>

                  {/* Motor compatibility hint */}
                  <p className="mt-1 text-xs text-zinc-400 line-clamp-1">
                    Cocok untuk: {product.bestFor.join(', ')}
                  </p>

                  {/* Color variant picker */}
                  <div className="mt-3.5 pt-3 border-t border-[#202026] flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400">
                      Warna: <strong className="text-zinc-200">{activeColor}</strong>
                    </span>
                    <div className="flex items-center gap-1.5">
                      {product.colors.map((c) => (
                        <button
                          key={c.code}
                          onClick={() => handleColorChange(product.id, c.name)}
                          title={c.name}
                          aria-label={`Pilih warna ${c.name}`}
                          className={`h-5 w-5 rounded-full border transition-all ${
                            activeColor === c.name
                              ? 'scale-110 border-white ring-2 ring-[#d71920]'
                              : 'border-zinc-700 opacity-70 hover:opacity-100'
                          }`}
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Stock baselines */}
                  <div className="mt-4 flex items-baseline justify-between pt-2 border-t border-[#202026]">
                    <div>
                      <span className="text-xs text-zinc-500 block">Harga Kendari:</span>
                      <span className="font-mono text-xl font-black text-white tabular-nums tracking-tight">
                        {formatRupiah(product.price)}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] text-zinc-400 block">Stok Toko:</span>
                      <span className="font-mono text-xs font-semibold text-zinc-200">
                        {product.stockCount} unit ready
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleDirectWhatsAppOrder(product)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#d71920] py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#b8141a]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Pesan Sekarang</span>
                    </button>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className={`inline-flex items-center justify-center gap-1.5 rounded-lg border py-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                        addedSuccessId === product.id
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                          : 'border-[#2d2d35] bg-[#1a1a20] text-zinc-200 hover:border-zinc-500 hover:text-white'
                      }`}
                    >
                      {addedSuccessId === product.id ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span>Masuk Keranjang</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-3.5 w-3.5" />
                          <span>+ Keranjang</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="rounded-xl border border-dashed border-zinc-800 p-12 text-center">
            <p className="text-zinc-400">Tidak ada produk dengan kriteria filter yang dipilih.</p>
            <button
              onClick={() => { setSelectedType('all'); setSelectedSize('all'); }}
              className="mt-3 text-xs font-bold uppercase tracking-wider text-[#d71920] hover:underline"
            >
              Reset Semua Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
