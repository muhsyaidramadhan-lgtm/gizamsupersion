import React, { useState } from 'react';
import { CartItem } from '../types';
import { formatRupiah, STORE_PHONE_NUMBER } from '../data/products';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, color: string, delta: number) => void;
  onRemoveItem: (productId: string, color: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [motorModel, setMotorModel] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('Area Kota Kendari (Bisa COD / Antar)');

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let itemsText = '';
    items.forEach((item, index) => {
      itemsText += `${index + 1}. ${item.product.name} (${item.product.sizeLabel})\n   • Warna: ${item.selectedColor}\n   • Jumlah: ${item.quantity} unit\n   • Subtotal: ${formatRupiah(item.product.price * item.quantity)}\n`;
    });

    const buyerName = customerName.trim() || 'Pelanggan';
    const bikeInfo = motorModel.trim() || 'Motor Matic / Bebek';

    const fullMessage = encodeURIComponent(
      `Halo Admin Gizam Suspension Kendari,\n` +
      `Saya ingin membuat pesanan shockbreaker melalui website:\n\n` +
      `*DETAIL PESANAN:*\n` +
      `${itemsText}\n` +
      `*TOTAL PEMBAYARAN:* ${formatRupiah(subtotal)}\n\n` +
      `*DATA PEMESAN:*\n` +
      `• Nama: ${buyerName}\n` +
      `• Tipe Motor: ${bikeInfo}\n` +
      `• Alamat/Lokasi: ${deliveryLocation}\n\n` +
      `Mohon konfirmasi ketersediaan stok & nomor rekening pembayaran/jadwal kirim. Terima kasih!`
    );

    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${fullMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#131317] border-l border-[#242429] text-white flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#242429] bg-[#0e0e11]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-[#d71920]" />
              <h3 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                Keranjang Pesanan ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-zinc-400 hover:bg-[#202026] hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="h-16 w-16 mx-auto rounded-full bg-[#1b1b22] flex items-center justify-center text-zinc-600">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <p className="text-zinc-400 text-sm">Keranjang pesanan masih kosong.</p>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#d71920] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b8141a]"
                >
                  <span>Pilih Shock Sekarang</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedColor}`}
                      className="rounded-xl border border-[#26262c] bg-[#17171c] p-3.5 flex gap-3 items-center"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-16 w-16 rounded-lg object-cover bg-black shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white uppercase truncate">
                          {item.product.name}
                        </h4>
                        <div className="text-[11px] text-zinc-400 mt-0.5">
                          <span>Warna: {item.selectedColor}</span>
                          <span className="mx-1">·</span>
                          <span className="font-mono">{item.product.sizeLabel}</span>
                        </div>
                        <div className="mt-1 font-mono text-xs font-bold text-[#d71920]">
                          {formatRupiah(item.product.price)}
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedColor)}
                          className="text-zinc-500 hover:text-red-400 p-1"
                          title="Hapus"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                        <div className="flex items-center rounded border border-[#2f2f38] bg-[#0f0f13]">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, -1)}
                            className="p-1 text-zinc-400 hover:text-white"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 text-xs font-mono font-bold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, 1)}
                            className="p-1 text-zinc-400 hover:text-white"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Checkout Quick Details Form */}
                <div className="mt-6 pt-5 border-t border-[#24242a] space-y-3">
                  <span className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Data Pemesan (Untuk Konfirmasi WA):
                  </span>
                  
                  <div>
                    <label htmlFor="customer-name" className="block text-[11px] text-zinc-400 mb-1">
                      Nama Kamu:
                    </label>
                    <input
                      id="customer-name"
                      type="text"
                      placeholder="Contoh: Rian / Ilham"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full rounded-lg border border-[#2b2b32] bg-[#0c0c0e] px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-[#d71920] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="cart-motor-model" className="block text-[11px] text-zinc-400 mb-1">
                      Tipe Motor (Untuk dicek kembali ukurannya):
                    </label>
                    <input
                      id="cart-motor-model"
                      type="text"
                      placeholder="Contoh: Vario 150 2019 / Mio Smile"
                      value={motorModel}
                      onChange={(e) => setMotorModel(e.target.value)}
                      className="w-full rounded-lg border border-[#2b2b32] bg-[#0c0c0e] px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-[#d71920] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="delivery-location" className="block text-[11px] text-zinc-400 mb-1">
                      Lokasi / Alamat Pengiriman:
                    </label>
                    <select
                      id="delivery-location"
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      className="w-full rounded-lg border border-[#2b2b32] bg-[#0c0c0e] px-3 py-2 text-xs text-white focus:border-[#d71920] focus:outline-none"
                    >
                      <option value="Area Kota Kendari (Bisa COD / Antar Toko)">Area Kota Kendari (Bisa COD / Antar)</option>
                      <option value="Kabupaten Konawe / Konawe Selatan">Kabupaten Konawe / Konsel</option>
                      <option value="Kabupaten Kolaka / Kolaka Utara">Kabupaten Kolaka / Kolut</option>
                      <option value="Kota Baubau / Pulau Buton">Kota Baubau / Pulau Buton</option>
                      <option value="Kabupaten Muna / Raha">Kabupaten Muna / Raha</option>
                      <option value="Luar Sultra / Seluruh Indonesia">Luar Sultra / Seluruh Indonesia (JNE/J&T)</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Subtotal & Checkout Button */}
          {items.length > 0 && (
            <div className="border-t border-[#242429] bg-[#0e0e11] p-5 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-wider text-zinc-400">Total Belanja:</span>
                <span className="font-mono text-xl font-black text-white tabular-nums">
                  {formatRupiah(subtotal)}
                </span>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 px-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-950 transition-colors hover:bg-[#20ba59]"
              >
                <MessageCircle className="h-5 w-5 text-zinc-950 fill-zinc-950" />
                <span>Kirim Pesanan ke WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-zinc-400">
                Pesanan akan otomatis diformat dan dikirimkan langsung ke admin resmi Gizam Suspension Kendari.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
