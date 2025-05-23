import React from 'react';
import { X, ShoppingCart, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  toggleCart: () => void;
  cartItems: CartItem[];
  updateItemQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  sendOrderToWhatsApp: () => void;
}

const Cart: React.FC<CartProps> = ({ 
  isOpen, 
  toggleCart, 
  cartItems, 
  updateItemQuantity,
  removeItem,
  sendOrderToWhatsApp
}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={toggleCart}
      ></div>
      
      {/* Cart panel */}
      <div className="relative bg-white w-full md:w-96 max-w-full h-full flex flex-col shadow-xl animate-slide-in-right">
        <div className="p-4 bg-amber-900 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold flex items-center">
            <ShoppingCart className="mr-2" />
            Seu Carrinho
          </h3>
          <button 
            onClick={toggleCart}
            className="text-white hover:text-amber-300 transition-colors"
            aria-label="Fechar"
          >
            <X />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingCart size={48} className="mb-4" />
              <p>Seu carrinho está vazio</p>
              <button 
                onClick={toggleCart}
                className="mt-4 text-amber-600 hover:text-amber-800 font-medium"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex border-b border-gray-200 pb-4">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item.name}</h3>
                      <p className="ml-4">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button 
                          onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-1 text-gray-600 hover:text-amber-600"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus size={16} />
                        </button>
                        
                        <span className="px-2">{item.quantity}</span>
                        
                        <button 
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:text-amber-600"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Remover item"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <p>Total</p>
              <p>R$ {totalPrice.toFixed(2).replace('.', ',')}</p>
            </div>
            
            <button
              onClick={sendOrderToWhatsApp}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              Finalizar Pedido
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;