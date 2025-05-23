import React from 'react';
import { MenuItem, CartItem } from '../types';
import MenuItemCard from './MenuItemCard';

interface MenuSectionProps {
  items: MenuItem[];
  category: 'burger' | 'drink';
  title: string;
  addToCart: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ items, category, title, addToCart }) => {
  const filteredItems = items.filter(item => item.category === category);

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center relative">
        <span className="inline-block relative">
          {title}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-400"></span>
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <MenuItemCard 
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;