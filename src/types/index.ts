export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: SanityImage;
  images?: SanityImage[];
  category: Category;
  tags?: string[];
  isNew?: boolean;
  isCollector?: boolean;
  allergens?: string[];
  weight?: string;
  servings?: string;
  available: boolean;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: SanityImage;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  options?: {
    message?: string;
    size?: string;
  };
}

export interface DeliveryOption {
  type: 'delivery' | 'pickup';
  address?: string;
  postalCode?: string;
  city?: string;
  date: string;
  timeSlot: string;
  price: number;
}

export interface Order {
  _id: string;
  orderNumber: string;
  items: CartItem[];
  delivery: DeliveryOption;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
  createdAt: string;
}
