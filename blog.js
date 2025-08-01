export const blogPosts = [
  {
    id: 1,
    title: 'As 5 Trilhas Mais Incríveis para Fazer no Brasil com Seu Pet',
    slug: 'as-5-trilhas-mais-incriveis-brasil-pet',
    excerpt: 'Descubra as 5 trilhas mais incríveis e pet-friendly do Brasil para você e seu companheiro de quatro patas explorarem juntos.',
    content: `# As 5 Trilhas Mais Incríveis para Fazer no Brasil com Seu Pet

## Introdução: Aventura de Patas e Pés

O Brasil, com sua vasta diversidade de paisagens, oferece um cenário perfeito para os amantes da natureza e seus companheiros de quatro patas. Fazer trilhas com seu pet não é apenas uma atividade física, mas uma oportunidade de fortalecer laços, explorar novos horizontes e criar memórias inesquecíveis.

## 1. Parque Nacional da Tijuca (Rio de Janeiro, RJ)

O Parque Nacional da Tijuca é um refúgio verde no coração do Rio de Janeiro. A trilha da Cachoeira dos Primatas se destaca como uma excelente opção para quem busca um contato próximo com a natureza.

### Por que é incrível para pets:
- Acessibilidade: A trilha é de nível fácil a moderado
- Beleza Natural: A cachoeira oferece um refresco bem-vindo
- Proximidade Urbana: Perfeita para escapadas rápidas

## Conclusão

Explorar as belezas naturais do Brasil com seu pet é uma experiência enriquecedora. Com o equipamento certo da Trekko Store, cada trilha se tornará uma aventura inesquecível!`,
    image: '/src/assets/images/trilhas/trilha_cachorro_1.jpg',
    category: 'Trilhas',
    author: 'Equipe Trekko',
    date: '2024-12-15',
    readTime: '8 min'
  },
  {
    id: 2,
    title: 'Checklist Essencial para Acampar com Segurança',
    slug: 'checklist-acampamento-seguranca',
    excerpt: 'Um guia completo com tudo que você precisa para acampar com seu pet de forma segura e organizada.',
    content: `# Checklist Essencial para Acampar com Segurança

## Introdução

Acampar é uma das experiências mais enriquecedoras para quem busca reconexão com a natureza. Quando seu melhor amigo de quatro patas pode compartilhar essa jornada, a diversão é em dobro!

## Equipamentos Essenciais

### Para Humanos:
- Barraca adequada ao número de pessoas e pets
- Saco de dormir compatível com a temperatura
- Kit de primeiros socorros completo
- Lanterna e pilhas extras

### Para o Pet:
- Cama/manta do pet
- Coleira e guia extra
- Potes dobráveis para água e ração
- Kit de primeiros socorros veterinário

## Dicas de Segurança

- Nunca deixe o pet sozinho
- Mantenha distância segura da fogueira
- Recolha sempre as fezes do seu pet
- Respeite outros campistas

## Conclusão

Com este checklist da Trekko Store, você estará preparado para desfrutar da natureza com tranquilidade e responsabilidade!`,
    image: '/src/assets/images/camping/camping_1.jpg',
    category: 'Camping',
    author: 'Equipe Trekko',
    date: '2024-12-14',
    readTime: '6 min'
  },
  {
    id: 3,
    title: 'Como Começar no Canicross: Guia para Iniciantes',
    slug: 'como-comecar-canicross-iniciantes',
    excerpt: 'Descubra como iniciar no canicross, o esporte que une corrida e companheirismo com seu cão.',
    content: `# Como Começar no Canicross: Guia para Iniciantes

## O Que é Canicross?

Canicross é uma modalidade de corrida cross-country onde um corredor humano é conectado a um cão por meio de um cinto, uma guia elástica e um peitoral específico para o cão.

## Benefícios

### Para o Cão:
- Exercício físico intenso
- Estímulo mental
- Fortalecimento do vínculo
- Liberação de energia

### Para o Humano:
- Melhora do desempenho
- Motivação extra
- Conexão com a natureza
- Bem-estar geral

## Equipamentos Essenciais

- Peitoral de tração (X-Back ou H-Back)
- Guia elástica (Bungee Line)
- Cinto de canicross
- Tênis de trail running

## Como Começar

1. Adaptação aos equipamentos
2. Comandos básicos
3. Treinamento progressivo
4. Aumento gradual da intensidade

## Conclusão

O canicross é uma forma fantástica de se exercitar e fortalecer o laço com seu cão. Com o equipamento certo da Trekko Store, você estará pronto para muitas aventuras!`,
    image: '/src/assets/images/canicross/canicross_1.jpg',
    category: 'Canicross',
    author: 'Equipe Trekko',
    date: '2024-12-13',
    readTime: '10 min'
  }
]

export const blogCategories = [
  'Todos',
  'Trilhas',
  'Camping',
  'Canicross',
  'Equipamentos',
  'Dicas'
]



export const getFeaturedPosts = () => {
  return blogPosts.slice(0, 3)
}


export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug)
}

export const getRelatedPosts = (currentPostId, limit = 3) => {
  return blogPosts.filter(post => post.id !== currentPostId).slice(0, limit)
}

