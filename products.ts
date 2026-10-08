import { Product } from '../types';

export const STORE_PHONE_NUMBER = '6285119919090';
export const STORE_PHONE_DISPLAY = '0851-1991-9090';
export const STORE_LOCATION = 'Jl. G. Nipa-nipa, Lorong Maleo, Kel. Punggolaka, Kec. Puuwatu, Kota Kendari, Sulawesi Tenggara';
export const STORE_MAPS_URL = 'https://share.google/n6X5HyEd0NYnAMNwv';

export const PRODUCTS: Product[] = [
  {
    id: 'gizam-mekanik-310',
    name: 'Shock Mekanik Gizam 310 mm',
    type: 'mekanik',
    size: 310,
    sizeLabel: '310 mm',
    price: 650000,
    originalPrice: 720000,
    inStock: true,
    stockCount: 14,
    description: 'Shockbreaker mekanik presisi tinggi dengan stang hidrolis krom keras dan pegas baja vanadium. Dirancang untuk manuver lincah dan kestabilan maksimal di kecepatan tinggi serta beban harian.',
    features: [
      'Billet CNC Alloy Head & Eyelet',
      'Dual Valve Hydraulic Damping',
      'Setelan Preload Ulir Presisi',
      'Seal ganda anti-bocor tahan panas'
    ],
    colors: [
      { name: 'Red Racing', hex: '#d71920', code: 'RED' },
      { name: 'Stealth Black', hex: '#18181b', code: 'BLK' },
      { name: 'Titanium Silver', hex: '#94a3b8', code: 'SLV' },
    ],
    image: '/images/product_shock_tabung_red_1791421695084.jpg',
    bestFor: ['Mio Sporty/Smile', 'Fino 115', 'Scoopy Ring 12 (Ceper)', 'Modifikasi Harian'],
    specifications: {
      strokeLength: '310 mm (Eye-to-Eye)',
      damperDiameter: '12.5 mm Hard Chrome Piston',
      springRate: 'Progresif 45-65 lbs/in',
      material: 'Forged 6061 T6 Aluminium & Alloy Steel',
      mountType: 'Universal Bushing Matic (10mm/12mm adaptor included)'
    }
  },
  {
    id: 'gizam-mekanik-315',
    name: 'Shock Mekanik Gizam 315 mm',
    type: 'mekanik',
    size: 315,
    sizeLabel: '315 mm',
    price: 280000,
    originalPrice: 330000,
    inStock: true,
    stockCount: 22,
    description: 'Pilihan terlaris untuk motor matic harian kelas 110-125cc. Memberikan redaman empuk saat melibas aspal berlubang di Kota Kendari tanpa limbung saat berboncengan.',
    features: [
      'Konstruksi baja tebal anti-bengkok',
      'Karakter rebound empuk & stabil',
      'Termasuk kunci C-spanner setelan per',
      'Garansi fungsional 100% original'
    ],
    colors: [
      { name: 'Stealth Black', hex: '#18181b', code: 'BLK' },
      { name: 'Red Racing', hex: '#d71920', code: 'RED' },
      { name: 'Chrome Silver', hex: '#cbd5e1', code: 'SLV' }
    ],
    image: '/images/product_shock_mekanik_black_1791421706682.jpg',
    bestFor: ['Beat Karbu/FI/Street', 'Scoopy Karbu/FI', 'Mio M3/Soul GT', 'Spacy'],
    specifications: {
      strokeLength: '315 mm (Eye-to-Eye)',
      damperDiameter: '12 mm Piston Rod',
      springRate: 'Multi-Rate Comfort Spring',
      material: 'High-Tensile Steel & Alloy Cap',
      mountType: 'Standard Matic Eye Mount'
    }
  },
  {
    id: 'gizam-mekanik-320',
    name: 'Shock Mekanik Gizam 320 mm',
    type: 'mekanik',
    size: 320,
    sizeLabel: '320 mm',
    price: 280000,
    originalPrice: 330000,
    inStock: true,
    stockCount: 18,
    description: 'Ukuran menengah ideal bagi rider yang menginginkan ground clearance lebih tinggi namun tetap ramah jangkauan kaki. Rebound terkontrol dengan daya tahan beban tinggi.',
    features: [
      'Desain pegas ulir rapat anti-gasruk',
      'Bushing karet elastis peredam getaran',
      'Lapisan powder coating anti-karat',
      'Sangat mudah dipasang (Plug & Play)'
    ],
    colors: [
      { name: 'Titanium Gold', hex: '#eab308', code: 'GLD' },
      { name: 'Red Racing', hex: '#d71920', code: 'RED' },
      { name: 'Stealth Black', hex: '#18181b', code: 'BLK' }
    ],
    image: '/images/product_shock_tabung_gold_silver_1791421718391.jpg',
    bestFor: ['Vario 110 Karbu/LED', 'Fazzio', 'Grand Filano', 'Supra X (Dual Shock)'],
    specifications: {
      strokeLength: '320 mm (Eye-to-Eye)',
      damperDiameter: '12.5 mm Chrome Steel',
      springRate: '50-70 lbs/in Heavy Duty',
      material: 'Billet Alloy Cap + Baja Vanadium',
      mountType: 'Plug & Play Matic'
    }
  },
  {
    id: 'gizam-mekanik-330',
    name: 'Shock Mekanik Gizam 330 mm',
    type: 'mekanik',
    size: 330,
    sizeLabel: '330 mm',
    price: 280000,
    originalPrice: 340000,
    inStock: true,
    stockCount: 26,
    description: 'Ukuran standar pabrik untuk Honda Vario 125, 150, dan 160. Memberikan postur motor tegak presisi, nyaman untuk touring maupun angkutan harian tanpa khawatir mentok spakbor.',
    features: [
      'Ukuran pas standar Vario Series',
      'Handling kokoh di tikungan dan jalan bergelombang',
      'Ulir per tebal dengan peredaman hidrolik presisi',
      'Finishing anodized mewah anti luntur'
    ],
    colors: [
      { name: 'Red Racing', hex: '#d71920', code: 'RED' },
      { name: 'Stealth Black', hex: '#18181b', code: 'BLK' },
      { name: 'Silver Titanium', hex: '#94a3b8', code: 'SLV' }
    ],
    image: '/images/product_shock_tabung_red_1791421695084.jpg',
    bestFor: ['Vario 125 (Semua Gen)', 'Vario 150 (Semua Gen)', 'Vario 160', 'Beat New Tinggi'],
    specifications: {
      strokeLength: '330 mm (Eye-to-Eye)',
      damperDiameter: '12.5 mm Hard Chrome',
      springRate: '55-75 lbs/in Heavy Load',
      material: 'Heavy-Duty Alloy & Steel Spring',
      mountType: 'Direct Bolt-on Vario Series'
    }
  },
  {
    id: 'gizam-tabung-310-premium',
    name: 'Shock Tabung Gizam 310 mm Gas Series',
    type: 'tabung',
    size: 310,
    sizeLabel: '310 mm (Tabung)',
    price: 650000,
    originalPrice: 750000,
    inStock: true,
    stockCount: 9,
    description: 'Suspensi premium dengan tabung external nitrogen asli. Tampilan super sporty ala motor balap road race dengan redaman yang tidak mudah lelah meski perjalanan jauh.',
    features: [
      'Tabung Gas Nitrogen Aktif (Bukan Variasi)',
      'Klik Stelan Preload Spring',
      'Tampilan Sporty Agresif',
      'CNC Machined Reservoir Cap'
    ],
    colors: [
      { name: 'Red Racing Tabung', hex: '#d71920', code: 'RED' },
      { name: 'Gold Luxury', hex: '#eab308', code: 'GLD' },
      { name: 'Black Doff', hex: '#18181b', code: 'BLK' }
    ],
    image: '/images/product_shock_tabung_gold_silver_1791421718391.jpg',
    bestFor: ['Beat Series Sporty', 'Mio Modifikasi', 'Scoopy Custom Stance'],
    specifications: {
      strokeLength: '310 mm (Eye-to-Eye)',
      damperDiameter: '14 mm Heavy Piston',
      springRate: 'Progresif Gas & Oil Hybrid',
      material: 'Full CNC Billet 6061 Aluminium',
      mountType: 'Universal Eye Mount Matic'
    }
  },
  {
    id: 'gizam-tabung-330-racing',
    name: 'Shock Tabung Gizam 330 mm Racing Series',
    type: 'tabung',
    size: 330,
    sizeLabel: '330 mm (Tabung)',
    price: 680000,
    originalPrice: 780000,
    inStock: true,
    stockCount: 11,
    description: 'Varian tertinggi untuk pengguna Vario 125/150/160 yang ingin performa suspensi kelas atas sekaligus tampilan paddock look yang gagah di tongkrongan.',
    features: [
      'Tabung Gas Nitrogen Eksternal Asli',
      'Ulir Per Progresif Tebal Tahan Amblas',
      'Body Tabung CNC Diamond Cut',
      'Kunci setelan lengkap dalam dus'
    ],
    colors: [
      { name: 'Red Racing', hex: '#d71920', code: 'RED' },
      { name: 'Titanium Gold', hex: '#eab308', code: 'GLD' },
      { name: 'All Black Dark', hex: '#18181b', code: 'BLK' }
    ],
    image: '/images/product_shock_tabung_red_1791421695084.jpg',
    bestFor: ['Vario 125/150/160', 'Beat Street Touring', 'Modifikasi Hedon'],
    specifications: {
      strokeLength: '330 mm (Eye-to-Eye)',
      damperDiameter: '14 mm Nitro-Chromed Rod',
      springRate: 'Gas Reservoir Assist 55-80 lbs/in',
      material: 'Forged T6 Alloy + Carbon Steel Spring',
      mountType: 'Bolt-on Vario & Matic Standar'
    }
  }
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);
}
