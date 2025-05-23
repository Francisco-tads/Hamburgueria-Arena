import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  addToCart: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-bold">{item.name}</h3>
          <p className="text-amber-300 font-bold">
            R$ {item.price.toFixed(2).replace('.', ',')}
          </p>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-700 mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-amber-900 font-bold">
            R$ {item.price.toFixed(2).replace('.', ',')}
          </span>
          <button 
            onClick={() => addToCart(item)}
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full flex items-center transition-colors duration-300"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;