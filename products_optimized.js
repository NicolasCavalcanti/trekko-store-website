import canicross1 from "../assets/images/products/canicross_1.jpg"
import canicross2 from "../assets/images/products/canicross_2.jpg"
import canicross3 from "../assets/images/products/canicross_3.jpg"
import canicross4 from "../assets/images/products/canicross_4.jpg"
import canicross5 from "../assets/images/products/canicross_5.jpg"
import canicross6 from "../assets/images/products/canicross_6.jpg"

const productsOptimized = [
  {
    id: "otimizado-1",
    name: "Kit Canicross Pro: Aventura e Segurança para Você e Seu Pet!",
    category: "Canicross",
    price: "R$ 299,90",
    originalPrice: "R$ 399,90",
    images: [
      canicross1,
      canicross2,
      canicross3,
      canicross4,
      canicross5,
      canicross6,
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder de vídeo
    badge: "Mais Vendido",
    rating: 4.8,
    reviews: 127,
    descriptionBlocks: [
      {
        title: "Benefícios Principais: Conforto e Performance Sem Igual",
        content: [
          "**Liberdade para Explorar:** Desfrute de corridas e trilhas com as mãos livres, permitindo uma conexão mais profunda com seu pet.",
          "**Segurança Reforçada:** Peitoral ergonômico e linha elástica com absorção de impacto protegem você e seu cão em qualquer terreno.",
          "**Conforto Duradouro:** Materiais respiráveis e ajustáveis garantem que seu pet e você se mantenham confortáveis, mesmo em longas aventuras.",
          "**Performance Otimizada:** O design inteligente distribui a força de tração uniformemente, melhorando a eficiência da corrida e reduzindo o esforço.",
        ],
      },
      {
        title: "Como Usar: Simples e Rápido",
        content: [
          "**1. Ajuste o Cinto:** Coloque o cinto ergonômico na sua cintura e ajuste as alças para um encaixe firme e confortável.",
          "**2. Vista o Peitoral:** Encaixe o peitoral X-Back no seu cão, garantindo que esteja justo, mas sem restringir os movimentos.",
          "**3. Conecte a Linha:** Prenda a linha elástica entre o seu cinto e o peitoral do seu cão usando os mosquetões de segurança.",
          "**4. Aventure-se!** Comece a correr ou caminhar, permitindo que seu cão puxe naturalmente. Desfrute da liberdade e da conexão!",
        ],
      },
      {
        title: "Materiais e Durabilidade: Feito para Durar",
        content: [
          "**Cinto Ergonômico:** Nylon de alta resistência com acolchoamento em mesh respirável, fivelas de alumínio aeroespacial.",
          "**Linha Elástica:** Polipropileno de alta densidade com núcleo de borracha natural, resistente a UV e abrasão.",
          "**Peitoral X-Back:** Tecido Oxford 600D com reforços em Hypalon, costuras triplas e anéis em D de aço inoxidável.",
          "**Mosquetões:** Aço forjado com trava de segurança, suporta até 500kg de tração.",
          "**Resistência:** Projetado para suportar as condições mais extremas, garantindo anos de uso intenso.",
        ],
      },
      {
        title: "Para Quem é Ideal: Todos os Níveis de Aventureiros",
        content: [
          "**Iniciantes:** Fácil de usar e ajustar, perfeito para quem está começando no canicross ou em trilhas com cães.",
          "**Atletas Experientes:** Oferece performance e durabilidade para treinos intensos e competições.",
          "**Cães de Todos os Portes:** Disponível em diversos tamanhos, adequado para cães pequenos, médios e grandes.",
          "**Amantes da Natureza:** Ideal para quem busca uma forma ativa e divertida de se conectar com seu pet ao ar livre.",
        ],
      },
    ],
    sizes: ["P", "M", "G", "GG"],
    inStock: true,
    seals: [
      { name: "Frete Grátis", description: "Acima de R$ 199" },
      { name: "Garantia", description: "12 meses" },
      { name: "Troca Grátis", description: "30 dias" },
      { name: "Segurança", description: "Compra 100% segura e protegida" },
    ],
    reviewsData: [
      {
        id: 1,
        author: "Ana Silva",
        rating: 5,
        date: "10/06/2024",
        comment: "Incrível! Fiz minha primeira trilha de 15km com minha Golden usando os equipamentos da Trekko. Ela adorou e eu me senti super segura. Recomendo muito!",
        image: "https://via.placeholder.com/150/FF6B35/FFFFFF?text=Ana+Silva", // Placeholder para imagem real
      },
      {
        id: 2,
        author: "Carlos Mendes",
        rating: 5,
        date: "05/06/2024",
        comment: "O kit de canicross mudou nossa rotina de exercícios. Agora corremos juntos todos os dias. Qualidade excepcional!",
        image: "https://via.placeholder.com/150/4A6B47/FFFFFF?text=Carlos+Mendes", // Placeholder para imagem real
      },
      {
        id: 3,
        author: "Mariana Costa",
        rating: 4,
        date: "01/06/2024",
        comment: "Muito bom o produto, só achei o ajuste inicial um pouco complicado, mas depois de pegar o jeito ficou perfeito. Meu labrador amou!",
        image: "https://via.placeholder.com/150/7B5E45/FFFFFF?text=Mariana+Costa", // Placeholder para imagem real
      },
    ],
    upsellProducts: [
      {
        id: "otimizado-2",
        name: "Cinto Canicross Elite: Conforto e Controle",
        image: canicross2,
        price: "R$ 189,90",
      },
      {
        id: "otimizado-3",
        name: "Peitoral X-Back Pro: Tração Otimizada",
        image: canicross3,
        price: "R$ 129,90",
      },
    ],
  },
];

export default productsOptimized;


