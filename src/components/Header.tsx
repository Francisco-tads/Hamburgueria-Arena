import React, { useState, useEffect } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
  toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, toggleCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-amber-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white font-bold text-2xl hover:text-amber-300 transition-colors">
            Hamburgueria Arena
          </a>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-amber-300 transition-colors">Home</a>
          <a href="#menu" className="text-white hover:text-amber-300 transition-colors">Menu</a>
          <a href="#about" className="text-white hover:text-amber-300 transition-colors">Sobre</a>
          <a href="#contact" className="text-white hover:text-amber-300 transition-colors">Contato</a>
        </div>
        
        <div className="flex items-center">
          <button 
            onClick={toggleCart}
            className="relative p-2 text-white hover:text-amber-300 transition-colors"
            aria-label="Ver carrinho"
          >
            <ShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          
          <button 
            className="ml-4 md:hidden text-white hover:text-amber-300 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <Menu />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-amber-900 shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <a href="#home" className="text-white hover:text-amber-300 py-2 transition-colors">Home</a>
            <a href="#menu" className="text-white hover:text-amber-300 py-2 transition-colors">Menu</a>
            <a href="#about" className="text-white hover:text-amber-300 py-2 transition-colors">Sobre</a>
            <a href="#contact" className="text-white hover:text-amber-300 py-2 transition-colors">Contato</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;