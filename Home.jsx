import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Star, 
  ArrowRight, 
  Heart, 
  Shield, 
  Truck,
  Award,
  Play
} from 'lucide-react'
import heroImage from '../assets/images/hero/hero_outdoor_pets.jpg'
import trilhaImage1 from '../assets/images/trilhas/trilha_cachorro_1.jpg'
import trilhaImage2 from '../assets/images/trilhas/trilha_cachorro_2.jpg'
import canicrossImage1 from '../assets/images/canicross/canicross_1.jpg'
import campingImage1 from '../assets/images/camping/camping_1.jpg'

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Kit Canicross Profissional',
      price: 'R$ 299,90',
      originalPrice: 'R$ 399,90',
      image: canicrossImage1,
      rating: 4.8,
      reviews: 127,
      badge: 'Mais Vendido'
    },
    {
      id: 2,
      name: 'Mochila Trilha Pet Adventure',
      price: 'R$ 189,90',
      originalPrice: 'R$ 249,90',
      image: trilhaImage1,
      rating: 4.9,
      reviews: 89,
      badge: 'Novo'
    },
    {
      id: 3,
      name: 'Barraca Camping Pet-Friendly',
      price: 'R$ 599,90',
      originalPrice: 'R$ 799,90',
      image: campingImage1,
      rating: 4.7,
      reviews: 156,
      badge: 'Oferta'
    }
  ]

  const testimonials = [
    {
      name: 'Ana Silva',
      location: 'São Paulo, SP',
      text: 'Incrível! Fiz minha primeira trilha de 15km com minha Golden usando os equipamentos da Trekko. Ela adorou e eu me senti super segura.',
      rating: 5,
      image: trilhaImage2
    },
    {
      name: 'Carlos Mendes',
      location: 'Rio de Janeiro, RJ',
      text: 'O kit de canicross mudou nossa rotina de exercícios. Agora corremos juntos todos os dias. Qualidade excepcional!',
      rating: 5,
      image: canicrossImage1
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Aventuras Épicas
            <span className="block text-secondary">Com Seu Pet</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Equipamentos profissionais para trilhas, canicross e camping com seu melhor amigo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-4">
              Explorar Coleções
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Ver Aventuras
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança Garantida</h3>
              <p className="text-gray-600">Produtos testados e aprovados por veterinários e especialistas em esportes outdoor</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Frete grátis para todo Brasil em compras acima de R$ 199. Entrega em até 7 dias úteis</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Premium</h3>
              <p className="text-gray-600">Materiais resistentes e duráveis, ideais para as condições mais extremas da natureza</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-xl text-gray-600">Os favoritos dos aventureiros e seus pets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-white">
                    {product.badge}
                  </Badge>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Comprar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Viva a Aventura</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center">
              <Button size="lg" variant="secondary" className="rounded-full w-20 h-20">
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>
            <p className="mt-6 text-xl">
              Descubra como nossos equipamentos transformam aventuras simples em experiências inesquecíveis
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600">Histórias reais de aventuras incríveis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 text-yellow-400 fill-current" 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para a Próxima Aventura?</h2>
          <p className="text-xl mb-8">
            Junte-se a milhares de aventureiros que confiam na Trekko Store
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Ver Todas as Coleções
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

