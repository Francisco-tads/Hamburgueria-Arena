import React, { useState, useEffect } from 'react';
import { CartItem, MenuItem } from './types';
import { menuItems } from './data/menuItems';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Promotions from './components/Promotions';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('hamburgueriaArenaCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse saved cart', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('hamburgueriaArenaCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (item: MenuItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prevItems.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    
    // Show cart when adding an item
    setIsCartOpen(true);
  };

  const updateItemQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const sendOrderToWhatsApp = () => {
    if (cartItems.length === 0) return;

    const phone = '5511991298838';
    
    // Format the order message
    let message = 'Olá, gostaria de fazer um pedido:\n\n';
    
    cartItems.forEach(item => {
      message += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear the cart
    setCartItems([]);
    setIsCartOpen(false);
  };
  
  return (
    <div className="font-sans">
      <Header 
        cartItems={cartItems}
        toggleCart={toggleCart}
      />
      <Hero />
      <Promotions />
      <Menu 
        menuItems={menuItems}
        addToCart={addToCart}
      />
      <About />
      <Contact />
      <Footer />
      
      <Cart 
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        updateItemQuantity={updateItemQuantity}
        removeItem={removeItem}
        sendOrderToWhatsApp={sendOrderToWhatsApp}
      />
    </div>
  );
}

export default App;