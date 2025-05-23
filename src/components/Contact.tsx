import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-amber-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center relative inline-block mx-auto">
          <span className="inline-block relative">
            Contato
            <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-400"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-start">
              <MapPin className="text-amber-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Endereço</h3>
                <p className="text-amber-100">Rua Tommasso Giovanni</p>
                <p className="text-amber-100">São Paulo - SP</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="text-amber-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Horário de Funcionamento</h3>
                <p className="text-amber-100">Quarta à Domingo</p>
                <p className="text-amber-100">18:00h às 22:00h</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="text-amber-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Telefone</h3>
                <p className="text-amber-100">(11) 99129-8838</p>
              </div>
            </div>
            
            <div className="pt-8">
              <a 
                href="https://wa.me/5511991298838" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg"
              >
                Fale Conosco pelo WhatsApp
              </a>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1604953412734!2d-46.65886112397574!3d-23.565034060725786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f481fd9f%3A0x9982bfde4df54830!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1714340134673!5m2!1spt-BR!2sbr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Hamburgueria Arena"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;