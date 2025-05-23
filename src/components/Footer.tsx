import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hamburgueria Arena</h3>
            <p className="text-gray-400 mb-4">
              Hambúrgueres artesanais com sabor incomparável. Uma experiência gastronômica única.
            </p>
            <div className="flex space-x-4">
              <a target="_blank" href="https://www.instagram.com/francisco.s.vieira7/" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram />
              </a>
              <a target="_blank" href="https://www.facebook.com/fco.vieira13" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-amber-400 transition-colors">Menu</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda e Terça: Fechado</li>
              <li>Quarta à Domingo: 18:00h - 22:00h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Hamburgueria Arena. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;