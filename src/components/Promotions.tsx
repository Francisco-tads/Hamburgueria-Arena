import React, { useState, useEffect } from 'react';

const promotions = [
  {
    id: 1,
    title: "Combo Duplo",
    description: "Compre 2 hambúrgueres e ganhe um refrigerante!",
    image: "https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Happy Hour",
    description: "De quarta e quinta, 15% de desconto das 18h às 19h!",
    image: "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Peça pelo WhatsApp",
    description: "Ganhe 10% de desconto no seu primeiro pedido pelo WhatsApp!",
    image: "https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Café da Manhã Especial",
    description: "Todo sábado e domingo, café da manhã completo por R$ 29,90!",
    image: "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Combo Família",
    description: "4 Hambúrgueres + 2 Batatas Grandes + 4 Refrigerantes por R$ 99,90",
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Sobremesa do Dia",
    description: "Sobremesa com 20% de desconto de segunda a quinta!",
    image: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Promotions: React.FC = () => {
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromoIndex(prev => (prev + 1) % promotions.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center relative inline-block mx-auto">
          <span className="inline-block relative">
            Promoções e Destaques
            <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-400"></span>
          </span>
        </h2>
        
        <div className="relative h-96 bg-gray-800 rounded-xl overflow-hidden">
          {promotions.map((promo, index) => (
            <div 
              key={promo.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentPromoIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                pointerEvents: index === currentPromoIndex ? 'auto' : 'none'
              }}
            >
              <img 
                src={promo.image} 
                alt={promo.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-xl">{promo.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {promotions.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentPromoIndex ? 'bg-amber-500' : 'bg-white/50'
                }`}
                onClick={() => setCurrentPromoIndex(index)}
                aria-label={`Ver promoção ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;