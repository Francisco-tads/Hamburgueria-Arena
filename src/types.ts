export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'burger' | 'drink' | 'combo' | 'breakfast' | 'dessert';
}

export interface CartItem extends MenuItem {
  quantity: number;
}