// Importando imagens
import canicrossImage1 from '../assets/images/canicross/canicross_1.jpg'
import canicrossImage2 from '../assets/images/canicross/canicross_2.jpg'
import trilhaImage1 from '../assets/images/trilhas/trilha_cachorro_1.jpg'
import trilhaImage2 from '../assets/images/trilhas/trilha_cachorro_2.jpg'
import campingImage1 from '../assets/images/camping/camping_1.jpg'
import campingImage2 from '../assets/images/camping/camping_2.jpg'
import acessoriosImage1 from '../assets/images/acessorios/acessorios_1.jpg'
import acessoriosImage2 from '../assets/images/acessorios/acessorios_2.jpg'

export const products = [
  // Canicross
  {
    id: 1,
    name: 'Kit Canicross Profissional',
    price: 'R$ 299,90',
    originalPrice: 'R$ 399,90',
    image: canicrossImage1,
    rating: 4.8,
    reviews: 127,
    badge: 'Mais Vendido',
    category: 'Canicross',
    description: 'Kit completo para canicross com cinto ergonômico, linha elástica e peitoral para cães. Ideal para corridas e treinos.',
    features: [
      'Cinto ergonômico com acolchoamento',
      'Linha elástica de 2 metros',
      'Peitoral X-Back para cães',
      'Mosquetões de segurança',
      'Resistente até 80kg'
    ],
    specifications: {
      material: 'Nylon resistente e elástico',
      peso: '850g',
      tamanhos: 'P, M, G, GG',
      cor: 'Vermelho/Preto'
    }
  },
  {
    id: 2,
    name: 'Cinto Canicross Elite',
    price: 'R$ 189,90',
    originalPrice: 'R$ 249,90',
    image: canicrossImage2,
    rating: 4.7,
    reviews: 89,
    badge: 'Novo',
    category: 'Canicross',
    description: 'Cinto profissional para canicross com design ergonômico e sistema de liberação rápida.',
    features: [
      'Design ergonômico',
      'Sistema de liberação rápida',
      'Acolchoamento extra',
      'Ajuste personalizado',
      'Refletores de segurança'
    ]
  },

  // Trilhas com Pets
  {
    id: 3,
    name: 'Mochila Trilha Pet Adventure',
    price: 'R$ 189,90',
    originalPrice: 'R$ 249,90',
    image: trilhaImage1,
    rating: 4.9,
    reviews: 156,
    badge: 'Novo',
    category: 'Trilhas',
    description: 'Mochila especial para cães carregarem seus próprios suprimentos durante trilhas e caminhadas.',
    features: [
      'Compartimentos laterais removíveis',
      'Alças ajustáveis e acolchoadas',
      'Material impermeável',
      'Refletores de segurança',
      'Capacidade 15L'
    ]
  },
  {
    id: 4,
    name: 'Coleira GPS Trilha Pro',
    price: 'R$ 449,90',
    originalPrice: 'R$ 599,90',
    image: trilhaImage2,
    rating: 4.6,
    reviews: 78,
    badge: 'Tecnologia',
    category: 'Trilhas',
    description: 'Coleira com GPS integrado para monitoramento em tempo real durante trilhas e aventuras.',
    features: [
      'GPS com precisão de 3 metros',
      'Bateria de 7 dias',
      'Resistente à água IP67',
      'App para smartphone',
      'Histórico de atividades'
    ]
  },

  // Camping e Aventura
  {
    id: 5,
    name: 'Barraca Camping Pet-Friendly',
    price: 'R$ 599,90',
    originalPrice: 'R$ 799,90',
    image: campingImage1,
    rating: 4.7,
    reviews: 134,
    badge: 'Oferta',
    category: 'Camping',
    description: 'Barraca especialmente projetada para camping com pets, com espaço extra e ventilação adequada.',
    features: [
      'Capacidade para 2 pessoas + 2 pets',
      'Ventilação superior',
      'Tecido anti-arranhão',
      'Montagem rápida',
      'Impermeável 3000mm'
    ]
  },
  {
    id: 6,
    name: 'Saco de Dormir Pet Duo',
    price: 'R$ 349,90',
    originalPrice: 'R$ 449,90',
    image: campingImage2,
    rating: 4.8,
    reviews: 92,
    badge: 'Conforto',
    category: 'Camping',
    description: 'Saco de dormir duplo para você e seu pet, com isolamento térmico e tecido macio.',
    features: [
      'Isolamento térmico até -5°C',
      'Tecido interno macio',
      'Zíper duplo',
      'Compacto para transporte',
      'Lavável na máquina'
    ]
  },

  // Esportes Outdoor
  {
    id: 7,
    name: 'Bota Trilha Canina Pro',
    price: 'R$ 129,90',
    originalPrice: 'R$ 179,90',
    image: trilhaImage1,
    rating: 4.5,
    reviews: 203,
    badge: 'Proteção',
    category: 'Esportes Outdoor',
    description: 'Botas protetoras para patas de cães em terrenos difíceis e temperaturas extremas.',
    features: [
      'Sola antiderrapante',
      'Material respirável',
      'Velcro ajustável',
      'Proteção UV',
      'Kit com 4 unidades'
    ]
  },
  {
    id: 8,
    name: 'Colete Salva-Vidas Canino',
    price: 'R$ 159,90',
    originalPrice: 'R$ 219,90',
    image: campingImage1,
    rating: 4.9,
    reviews: 167,
    badge: 'Segurança',
    category: 'Esportes Outdoor',
    description: 'Colete salva-vidas para cães em atividades aquáticas, com alça de resgate e refletores.',
    features: [
      'Flutuabilidade certificada',
      'Alça de resgate superior',
      'Refletores 360°',
      'Ajuste em 5 pontos',
      'Tamanhos P ao GG'
    ]
  },

  // Acessórios Pet
  {
    id: 9,
    name: 'Kit Higiene Outdoor',
    price: 'R$ 89,90',
    originalPrice: 'R$ 119,90',
    image: acessoriosImage1,
    rating: 4.6,
    reviews: 145,
    badge: 'Essencial',
    category: 'Acessórios',
    description: 'Kit completo de higiene para manter seu pet limpo durante aventuras outdoor.',
    features: [
      'Shampoo seco biodegradável',
      'Toalhas de microfibra',
      'Escova dobrável',
      'Lenços umedecidos',
      'Estojo impermeável'
    ]
  },
  {
    id: 10,
    name: 'Comedouro Portátil Dobrável',
    price: 'R$ 49,90',
    originalPrice: 'R$ 69,90',
    image: acessoriosImage2,
    rating: 4.7,
    reviews: 234,
    badge: 'Prático',
    category: 'Acessórios',
    description: 'Comedouro e bebedouro portátil dobrável, ideal para trilhas e viagens.',
    features: [
      'Silicone alimentar',
      'Dobrável e compacto',
      'Capacidade 500ml',
      'Fácil limpeza',
      'Mosquetão incluso'
    ]
  },
  {
    id: 11,
    name: 'Brinquedo Flutuante Outdoor',
    price: 'R$ 39,90',
    originalPrice: 'R$ 59,90',
    image: acessoriosImage1,
    rating: 4.4,
    reviews: 189,
    badge: 'Diversão',
    category: 'Acessórios',
    description: 'Brinquedo flutuante resistente para brincadeiras na água durante acampamentos.',
    features: [
      'Material flutuante',
      'Resistente a mordidas',
      'Cores vibrantes',
      'Fácil de limpar',
      'Atóxico'
    ]
  },
  {
    id: 12,
    name: 'Lanterna LED para Coleira',
    price: 'R$ 79,90',
    originalPrice: 'R$ 99,90',
    image: acessoriosImage2,
    rating: 4.8,
    reviews: 156,
    badge: 'Segurança',
    category: 'Acessórios',
    description: 'Lanterna LED recarregável que se acopla à coleira para maior visibilidade noturna.',
    features: [
      'LED de alta potência',
      'Bateria recarregável USB',
      'Resistente à água',
      '3 modos de iluminação',
      'Fixação universal'
    ]
  }
]

// Função para buscar produtos por categoria
export const getProductsByCategory = (category) => {
  return products.filter(product => 
    product.category.toLowerCase().includes(category.toLowerCase())
  )
}

// Função para buscar produto por ID
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}

// Função para buscar produtos em destaque
export const getFeaturedProducts = () => {
  return products.filter(product => 
    ['Mais Vendido', 'Novo', 'Oferta'].includes(product.badge)
  ).slice(0, 6)
}

// Categorias disponíveis
export const categories = [
  {
    name: 'Esportes Outdoor',
    slug: 'esportes-outdoor',
    description: 'Equipamentos para atividades outdoor com pets',
    image: trilhaImage1
  },
  {
    name: 'Trilhas com Pets',
    slug: 'trilhas-pets',
    description: 'Equipamentos especiais para trilhas e caminhadas',
    image: trilhaImage2
  },
  {
    name: 'Canicross',
    slug: 'canicross',
    description: 'Equipamentos profissionais para canicross',
    image: canicrossImage1
  },
  {
    name: 'Camping e Aventura',
    slug: 'camping-aventura',
    description: 'Equipamentos para camping e aventuras',
    image: campingImage1
  },
  {
    name: 'Acessórios Pet',
    slug: 'acessorios-pet',
    description: 'Acessórios essenciais para aventuras',
    image: acessoriosImage1
  }
]

