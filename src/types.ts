export type ShockType = 'mekanik' | 'tabung';

export type ShockSize = 310 | 315 | 320 | 330;

export interface Product {
  id: string;
  name: string;
  type: ShockType;
  size: ShockSize;
  sizeLabel: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  stockCount: number;
  description: string;
  features: string[];
  colors: {
    name: string;
    hex: string;
    code: string;
  }[];
  image: string;
  bestFor: string[];
  specifications: {
    strokeLength: string;
    damperDiameter: string;
    springRate: string;
    material: string;
    mountType: string;
  };
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  quantity: number;
  notes?: string;
}

export interface MotorGuide {
  brand: string;
  model: string;
  recommendedSize: ShockSize;
  recommendedType: string;
  note: string;
}
