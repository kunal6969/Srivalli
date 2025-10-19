export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface Review {
  id: number;
  author: string;
  quote: string;
  rating: number;
  image: string;
  date?: string;
  platform?: string;
}

export interface NavLink {
    id: string;
    label: string;
}

// FIX: Added missing CartItem type. It extends MenuItem with a quantity.
export interface CartItem extends MenuItem {
  quantity: number;
}
