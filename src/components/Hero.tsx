import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const isBusinessHours = () => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    
    // Check if it's Wednesday (3) through Sunday (0)
    const isValidDay = day === 0 || (day >= 3 && day <= 6);
    
    // Check if it's between 18:00 and 22:00
    const isValidHour = hours >= 18 && hours < 22;
    
    return isValidDay && isValidHour;
  };

  return (
    <section id="home" className="relative h-screen bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          opacity: 0.5
        }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center flex-col px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Hamburgueria <span className="text-amber-400">Arena</span>
        </h1>
        
        <p className="text-xl text-white mb-8 max-w-2xl drop-shadow-md">
          Sabor incomparável em cada mordida. Venha experimentar os melhores hambúrgueres artesanais da cidade!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center bg-amber-900/80 text-white px-4 py-2 rounded-full">
            <Clock className="mr-2 h-5 w-5" />
            <span className={isBusinessHours() ? "text-green-400 font-medium" : "text-red-400 font-medium"}>
              Quarta à Domingo - 18:00h às 22:00h
            </span>
          </div>
          
          <div className="flex items-center bg-amber-900/80 text-white px-4 py-2 rounded-full">
            <MapPin className="mr-2 h-5 w-5" />
            <span>Rua Tommasso Giovanni</span>
          </div>
        </div>
        
        <a 
          href="#menu" 
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg"
        >
          Ver Cardápio
        </a>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-4 py-6">
          <div className="bg-amber-600/90 text-white p-4 rounded-t-lg shadow-lg text-center">
            <p className="font-bold text-lg">Promoção da Semana!</p>
            <p>Compre 2 hambúrgueres e ganhe um refrigerante!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;