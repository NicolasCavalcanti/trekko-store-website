import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Target, Users, Award, Mountain, Leaf } from 'lucide-react'
import heroImage from '../assets/images/hero/hero_outdoor_pets.jpg'
import trilhaImage from '../assets/images/trilhas/trilha_cachorro_1.jpg'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Amor pelos Pets',
      description: 'Acreditamos que nossos pets são família e merecem as melhores aventuras ao nosso lado.'
    },
    {
      icon: Mountain,
      title: 'Paixão pela Natureza',
      description: 'Promovemos o contato responsável com a natureza, respeitando o meio ambiente.'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Selecionamos apenas produtos de alta qualidade, testados por especialistas.'
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Comprometidos com práticas sustentáveis e produtos eco-friendly.'
    }
  ]

  const team = [
    {
      name: 'Marina Santos',
      role: 'Fundadora & CEO',
      description: 'Veterinária e aventureira, apaixonada por trilhas com seus 3 cães.',
      image: trilhaImage
    },
    {
      name: 'Roberto Silva',
      role: 'Especialista em Equipamentos',
      description: 'Montanhista profissional com 15 anos de experiência em esportes outdoor.',
      image: heroImage
    }
  ]

  const milestones = [
    { year: '2020', event: 'Fundação da Trekko Store' },
    { year: '2021', event: 'Primeira parceria com fabricantes internacionais' },
    { year: '2022', event: '10.000 clientes satisfeitos' },
    { year: '2023', event: 'Expansão para todo o Brasil' },
    { year: '2024', event: 'Lançamento da linha eco-friendly' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nossa História
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Conectando aventureiros e seus pets desde 2020
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Como Tudo Começou</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                A Trekko Store nasceu da paixão de Marina Santos, uma veterinária apaixonada por aventuras outdoor, 
                que sempre levava seus três cães em trilhas e acampamentos. Durante anos, ela enfrentou a dificuldade 
                de encontrar equipamentos adequados e seguros para aventuras com pets no Brasil.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Em 2020, após uma trilha desafiadora na Serra da Mantiqueira com seus Golden Retrievers, Marina 
                decidiu criar uma solução. Junto com Roberto Silva, montanhista experiente e especialista em 
                equipamentos outdoor, fundaram a Trekko Store com a missão de democratizar as aventuras outdoor 
                para tutores e seus pets.
              </p>
              
              <p className="text-lg text-gray-700 mb-8">
                Hoje, somos referência nacional em equipamentos para esportes outdoor com pets, atendendo milhares 
                de aventureiros em todo o Brasil. Nossa curadoria rigorosa garante que cada produto seja testado 
                e aprovado por veterinários e especialistas em esportes outdoor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Nossa Missão</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  Proporcionar experiências outdoor seguras e inesquecíveis para tutores e seus pets, 
                  oferecendo equipamentos de alta qualidade e conhecimento especializado para que cada 
                  aventura seja uma oportunidade de fortalecer o vínculo entre humanos e animais.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold">Nossa Visão</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  Ser a principal referência em equipamentos outdoor para pets no Brasil, inspirando 
                  uma comunidade de aventureiros responsáveis que valorizam a natureza e o bem-estar 
                  animal, promovendo um estilo de vida ativo e saudável.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600">Os princípios que guiam cada decisão da Trekko Store</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-600">Especialistas apaixonados por aventuras e pets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nossa Jornada</h2>
            <p className="text-xl text-gray-600">Marcos importantes da nossa história</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-4">
                      <CardContent className="p-0">
                        <Badge className="mb-2">{milestone.year}</Badge>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Nosso Compromisso</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-8">
              Na Trekko Store, cada produto é cuidadosamente selecionado e testado. Trabalhamos apenas 
              com fornecedores que compartilham nossos valores de qualidade, segurança e sustentabilidade. 
              Nosso compromisso é com a satisfação dos nossos clientes e o bem-estar dos pets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold mb-2">50.000+</div>
                <p>Clientes Satisfeitos</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <p>Produtos Testados</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <p>Avaliação Média</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

