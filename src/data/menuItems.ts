import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Hambúrguer Smash',
    description: 'Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.',
    price: 18.90,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'burger'
  },
  {
    id: 2,
    name: 'Hambúrguer Salad',
    description: 'Pão levinho de fermentação natural da Trigou, burger 160g, alface, tomate, queijo prato e maionese da casa.',
    price: 25.90,
    image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'burger'
  },
  {
    id: 3,
    name: 'Hambúrguer Bacon',
    description: 'Pão levinho de fermentação natural da Trigou, burger 160g, bacon, queijo prato e maionese da casa.',
    price: 32.90,
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'burger'
  },
  {
    id: 4,
    name: 'Hambúrguer Chicken',
    description: 'Pão levinho de fermentação natural da Trigou, burger de frango 160g, alface, tomate, queijo prato e maionese da casa.',
    price: 34.90,
    image: 'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'burger'
  },
  {
    id: 5,
    name: 'Hambúrguer Arena Special',
    description: 'Pão brioche, dois burgers de 160g, bacon crocante, cheddar cremoso, cebola caramelizada e molho especial Arena.',
    price: 39.90,
    image: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'burger'
  },
  {
    id: 6,
    name: 'Coca-Cola Litro',
    description: 'Lata 350ml, gelada.',
    price: 6.90,
    image: 'https://raw.githubusercontent.com/Francisco-tads/Hamburgueria-Arena/refs/heads/master/src/img/coca-litro.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'drink'
  },
  {
    id: 7,
    name: 'Guaraná Lata',
    description: 'Lata 350ml, gelado.',
    price: 6.90,
    image: 'https://raw.githubusercontent.com/Francisco-tads/Hamburgueria-Arena/refs/heads/master/src/img/guarana-antarctica.jpg?auto=compress&cs=tinysrgb&w=600',
    category: 'drink'
  },
  {
    id: 8,
    name: 'Água Mineral',
    description: 'Garrafa 500ml, gelada.',
    price: 4.90,
    image: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'drink'
  },
  {
    id: 9,
    name: 'Combo Arena',
    description: 'Hambúrguer Arena Special + Batata Frita + Refrigerante',
    price: 49.90,
    image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'combo'
  },
  {
    id: 10,
    name: 'Combo Duplo',
    description: '2 Hambúrgueres Smash + Batata Frita + 2 Refrigerantes',
    price: 54.90,
    image: 'https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'combo'
  },
  {
    id: 11,
    name: 'Combo Família',
    description: '4 Hambúrgueres + 2 Batatas Fritas Grandes + 4 Refrigerantes',
    price: 99.90,
    image: 'https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'combo'
  },
  {
    id: 12,
    name: 'Café da Manhã Tradicional',
    description: 'Café, pão na chapa, ovos mexidos e bacon',
    price: 19.90,
    image: 'https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'breakfast'
  },
  {
    id: 13,
    name: 'Café da Manhã Fit',
    description: 'Café, iogurte com granola, frutas da estação',
    price: 24.90,
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'breakfast'
  },
  {
    id: 14,
    name: 'Café da Manhã Premium',
    description: 'Café, croissant, ovos benedict, suco de laranja',
    price: 29.90,
    image: 'https://images.pexels.com/photos/2662875/pexels-photo-2662875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'breakfast'
  },
  {
    id: 15,
    name: 'Sundae de Chocolate',
    description: 'Sorvete de baunilha com calda de chocolate, chantilly e amendoim',
    price: 14.90,
    image: 'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'dessert'
  },
  {
    id: 16,
    name: 'Brownie com Sorvete',
    description: 'Brownie quente com sorvete de baunilha e calda de chocolate',
    price: 16.90,
    image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'dessert'
  },
  {
    id: 17,
    name: 'Milkshake Arena',
    description: 'Milkshake de chocolate com chantilly, calda e cookies',
    price: 18.90,
    image: 'https://images.pexels.com/photos/3727256/pexels-photo-3727256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'dessert'
  }
];