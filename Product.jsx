import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Minus, 
  Plus, 
  Truck, 
  Shield, 
  RotateCcw,
  Share2,
  MessageCircle
} from 'lucide-react'
import { getProductById, products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    const productData = getProductById(id)
    setProduct(productData)

    if (productData) {
      // Buscar produtos relacionados da mesma categoria
      const related = products
        .filter(p => p.category === productData.category && p.id !== productData.id)
        .slice(0, 4)
      setRelatedProducts(related)
    }
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Produto não encontrado</h2>
          <p className="text-gray-600">O produto que você está procurando não existe.</p>
        </div>
      </div>
    )
  }

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const reviews = [
    {
      name: 'Maria Silva',
      rating: 5,
      date: '15 de junho, 2024',
      comment: 'Produto excelente! Meu Golden Retriever adorou usar na trilha. Muito confortável e resistente.',
      verified: true
    },
    {
      name: 'João Santos',
      rating: 4,
      date: '10 de junho, 2024',
      comment: 'Boa qualidade, chegou rápido. Recomendo para quem pratica canicross regularmente.',
      verified: true
    },
    {
      name: 'Ana Costa',
      rating: 5,
      date: '5 de junho, 2024',
      comment: 'Superou minhas expectativas! O material é muito resistente e o ajuste é perfeito.',
      verified: true
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <span>Início</span> / <span>Coleções</span> / <span>{product.category}</span> / <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded border-2 border-gray-200 hover:border-primary cursor-pointer">
                    <img 
                      src={product.image} 
                      alt={`${product.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2">{product.category}</Badge>
                {product.badge && (
                  <Badge variant="secondary" className="ml-2">{product.badge}</Badge>
                )}
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through ml-4">{product.originalPrice}</span>
                  )}
                </div>

                <p className="text-gray-700 mb-6">{product.description}</p>
              </div>

              {/* Size Selection */}
              {product.specifications?.tamanhos && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tamanho</h3>
                  <div className="flex gap-2">
                    {product.specifications.tamanhos.split(', ').map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? 'default' : 'outline'}
                        onClick={() => setSelectedSize(size)}
                        className="w-12 h-12"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Quantidade</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleQuantityChange(1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-sm text-gray-600">Em estoque</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button size="lg" className="flex-1 bg-secondary hover:bg-secondary/90">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Adicionar ao Carrinho
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
                <Button size="lg" className="w-full">
                  Comprar Agora
                </Button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-sm">Frete Grátis</p>
                    <p className="text-xs text-gray-600">Acima de R$ 199</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-sm">Garantia</p>
                    <p className="text-xs text-gray-600">12 meses</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-sm">Troca Grátis</p>
                    <p className="text-xs text-gray-600">30 dias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="description" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Descrição</TabsTrigger>
              <TabsTrigger value="specifications">Especificações</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações ({product.reviews})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Sobre o Produto</h3>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  
                  {product.features && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Características:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Especificações Técnicas</h3>
                  {product.specifications && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b pb-2">
                          <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold">Avaliações dos Clientes</h3>
                    <Button variant="outline">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Escrever Avaliação
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="border-b pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold">{review.name}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">Compra Verificada</Badge>
                            )}
                          </div>
                          <span className="text-sm text-gray-600">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

