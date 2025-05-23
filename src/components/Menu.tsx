import React from 'react';
import MenuSection from './MenuSection';
import { MenuItem } from '../types';

interface MenuProps {
  menuItems: MenuItem[];
  addToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ menuItems, addToCart }) => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-amber-900 mb-16 text-center">
          <span className="inline-block relative">
            Conheça Nosso Cardápio
            <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-400"></span>
          </span>
        </h2>
        
        <MenuSection 
          items={menuItems} 
          category="combo" 
          title="Combos" 
          addToCart={addToCart} 
        />

        <MenuSection 
          items={menuItems} 
          category="burger" 
          title="Hambúrgueres" 
          addToCart={addToCart} 
        />
        
        <MenuSection 
          items={menuItems} 
          category="breakfast" 
          title="Café da Manhã" 
          addToCart={addToCart} 
        />

        <MenuSection 
          items={menuItems} 
          category="dessert" 
          title="Sobremesas" 
          addToCart={addToCart} 
        />
        
        <MenuSection 
          items={menuItems} 
          category="drink" 
          title="Bebidas" 
          addToCart={addToCart} 
        />
      </div>
    </section>
  );
};

export default Menu;