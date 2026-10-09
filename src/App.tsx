import React, { useState } from 'react';
import { PRODUCTS, STORE_PHONE_NUMBER } from './data/products';
import { CartItem, Product, ShockSize } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Advantages } from './components/Advantages';
import { NeedSelector } from './components/NeedSelector';
import { MotorCompatibilityChecker } from './components/MotorCompatibilityChecker';
import { AboutSection } from './components/AboutSection';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFilterSize, setActiveFilterSize] = useState<ShockSize | 'all'>('all');

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (product: Product, selectedColor: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1
        };
        return next;
      }

      return [
        ...prev,
        {
          product,
          selectedColor,
          quantity: 1
        }
      ];
    });
  };

  const handleUpdateQuantity = (productId: string, color: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedColor === color) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string, color: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedColor === color))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleNeedCategorySelect = (category: '310' | '315-330' | 'tabung') => {
    if (category === '310') {
      setActiveFilterSize(310);
    } else if (category === '315-330') {
      setActiveFilterSize(315);
    } else {
      setActiveFilterSize('all');
    }
    const el = document.querySelector('#produk');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFilterSize = (size: ShockSize) => {
    setActiveFilterSize(size);
  };

  const handleFloatingWhatsApp = () => {
    const text = encodeURIComponent(
      'Halo Admin Gizam Suspension Kendari, saya mau tanya stok dan ukuran shockbreaker motor.'
    );
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-100 flex flex-col font-sans selection:bg-[#d71920] selection:text-white">
      {/* 3-zone Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreProducts={() => {
            const el = document.querySelector('#produk');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenCompatibility={() => {
            const el = document.querySelector('#cek-motor');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Featured Products Section */}
        <FeaturedProducts
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
          activeFilterSize={activeFilterSize}
        />

        {/* 3. Advantages Section (Kenapa pilih Gizam?) */}
        <Advantages />

        {/* 4. Need Selector (Pilih Berdasarkan Kebutuhan) */}
        <NeedSelector onSelectCategory={handleNeedCategorySelect} />

        {/* 5. Interactive Motorcycle Compatibility Checker */}
        <MotorCompatibilityChecker onFilterSize={handleFilterSize} />

        {/* 6. About Gizam Suspension Kendari Section */}
        <AboutSection />

        {/* 7. WhatsApp Call to Action Section */}
        <WhatsAppCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-overs */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating WhatsApp Action (Compact bottom right) */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={handleFloatingWhatsApp}
          aria-label="Chat WhatsApp Admin Kendari"
          className="group flex items-center gap-2.5 rounded-full bg-[#25D366] p-3.5 sm:px-4 sm:py-3 text-zinc-950 shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="h-6 w-6 fill-zinc-950 text-zinc-950" />
          <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">
            WA Admin Gizam
          </span>
        </button>
      </div>
    </div>
  );
}
