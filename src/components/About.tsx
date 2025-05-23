import React from 'react';
import { Award, Clock, MapPin, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center relative inline-block mx-auto">
          <span className="inline-block relative">
            Sobre a Hamburgueria Arena
            <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-400"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              A Hamburgueria Arena nasceu da paixão por hambúrgueres artesanais e ingredientes de qualidade. 
              Nossa missão é proporcionar uma experiência gastronômica única, com sabores autênticos e atendimento de excelência.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Cada hambúrguer é preparado com carne 100% bovina selecionada, pães de fermentação natural 
              e ingredientes frescos, resultando em combinações saborosas que conquistam até os paladares mais exigentes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <Clock className="text-amber-600 mr-3" />
                  <div>
                    <h3 className="font-bold text-gray-800">Horário</h3>
                    <p className="text-gray-600">Quarta à Domingo</p>
                    <p className="text-gray-600">18:00h às 22:00h</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <MapPin className="text-amber-600 mr-3" />
                  <div>
                    <h3 className="font-bold text-gray-800">Endereço</h3>
                    <p className="text-gray-600">Rua Tommasso Giovanni</p>
                    <p className="text-gray-600">São Paulo - SP</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <Phone className="text-amber-600 mr-3" />
                  <div>
                    <h3 className="font-bold text-gray-800">Contato</h3>
                    <p className="text-gray-600">(11) 99129-8838</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <Award className="text-amber-600 mr-3" />
                  <div>
                    <h3 className="font-bold text-gray-800">Qualidade</h3>
                    <p className="text-gray-600">Ingredientes selecionados</p>
                    <p className="text-gray-600">Receitas exclusivas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Hamburgueria Arena Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-xl p-4 shadow-lg transform rotate-6">
              Desde 2022
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;