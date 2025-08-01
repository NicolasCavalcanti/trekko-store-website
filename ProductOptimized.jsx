import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw, 
  CheckCircle,
  Play,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  ArrowLeft
} from 'lucide-react'
import { useCart } from '../context/CartContext'
import productsOptimized from '../data/products_optimized'

export default function ProductOptimized() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [showVideo, setShowVideo] = useState(false)
  const [activeTab, setActiveTab] = useState('benefits')

  useEffect(() => {
    const foundProduct = productsOptimized.find(p => p.id === id)
    if (foundProduct) {
      setProduct(foundProduct)
      setSelectedSize(foundProduct.sizes[0])
    }
  }, [id])

  const handleAddToCart = () => {
    if (product && selectedSize) {
      addToCart({
        ...product,
        selectedSize,
        quantity
      })
    }
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Produto não encontrado</h2>
          <Link to="/colecoes/canicross">
            <Button>Voltar às Coleções</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Início</Link>
          <span>/</span>
          <Link to="/colecoes" className="hover:text-primary">Coleções</Link>
          <span>/</span>
          <Link to={`/colecoes/${product.category.toLowerCase()}`} className="hover:text-primary">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            {/* Imagem Principal */}
            <div className="relative aspect-square bg-card rounded-lg overflow-hidden">
              {product.badge && (
                <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">
                  {product.badge}
                </Badge>
              )}
              
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navegação de Imagens */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Botão de Vídeo */}
              {product.video && (
                <button 
                  onClick={() => setShowVideo(true)}
                  className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:bg-primary/90"
                >
                  <Play className="h-6 w-6" />
                </button>
              )}
            </div>

            {/* Miniaturas */}
            <div className="grid grid-cols-6 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            {/* Título e Avaliações */}
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>
              </div>
            </div>

            {/* Preços */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                )}
              </div>
              {product.originalPrice && (
                <div className="text-sm text-green-600 font-medium">
                  Economize {((parseFloat(product.originalPrice.replace('R$ ', '').replace(',', '.')) - 
                              parseFloat(product.price.replace('R$ ', '').replace(',', '.'))) / 
                              parseFloat(product.originalPrice.replace('R$ ', '').replace(',', '.')) * 100).toFixed(0)}%
                </div>
              )}
            </div>

            {/* Seleção de Tamanho */}
            <div className="space-y-3">
              <h3 className="font-semibold">Tamanho</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantidade */}
            <div className="space-y-3">
              <h3 className="font-semibold">Quantidade</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-border rounded-lg hover:bg-muted"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border border-border rounded-lg min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-border rounded-lg hover:bg-muted"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <span className="text-sm text-muted-foreground ml-4">
                  {product.inStock ? 'Em estoque' : 'Fora de estoque'}
                </span>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="space-y-3">
              <Button 
                onClick={handleAddToCart}
                className="w-full h-12 text-lg font-semibold"
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
              
              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Favoritar
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartilhar
                </Button>
              </div>
            </div>

            {/* Selos de Segurança */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              {product.seals.map((seal, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    {seal.name === 'Frete Grátis' && <Truck className="h-5 w-5 text-primary" />}
                    {seal.name === 'Garantia' && <Shield className="h-5 w-5 text-primary" />}
                    {seal.name === 'Troca Grátis' && <RotateCcw className="h-5 w-5 text-primary" />}
                    {seal.name === 'Segurança' && <CheckCircle className="h-5 w-5 text-primary" />}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{seal.name}</div>
                    <div className="text-xs text-muted-foreground">{seal.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Descrição em Blocos */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {product.descriptionBlocks.map((block, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(block.title.toLowerCase().split(':')[0].replace(' ', '_'))}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === block.title.toLowerCase().split(':')[0].replace(' ', '_')
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {block.title.split(':')[0]}
              </button>
            ))}
          </div>

          <Card>
            <CardContent className="p-6">
              {product.descriptionBlocks.map((block, index) => (
                <div
                  key={index}
                  className={`${
                    activeTab === block.title.toLowerCase().split(':')[0].replace(' ', '_')
                      ? 'block'
                      : 'hidden'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                  <div className="space-y-3">
                    {block.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-muted-foreground">
                        {item.includes('**') ? (
                          <div dangerouslySetInnerHTML={{
                            __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                          }} />
                        ) : (
                          item
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Avaliações */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Avaliações dos Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.reviewsData.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={review.image} 
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{review.author}</div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < review.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upsell */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Compre Junto Com...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.upsellProducts.map((upsellProduct) => (
              <Card key={upsellProduct.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={upsellProduct.image} 
                      alt={upsellProduct.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{upsellProduct.name}</h3>
                      <div className="text-lg font-bold text-primary mb-3">{upsellProduct.price}</div>
                      <Button size="sm" className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Adicionar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Botões Fixos Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t p-4 md:hidden z-50">
        <div className="flex space-x-3">
          <Button variant="outline" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button 
            onClick={handleAddToCart}
            className="flex-1 h-12"
            disabled={!product.inStock}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>

      {/* Modal de Vídeo */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg overflow-hidden max-w-4xl w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">Demonstração do Produto</h3>
              <button 
                onClick={() => setShowVideo(false)}
                className="p-2 hover:bg-muted rounded-lg"
              >
                ×
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={product.video}
                className="w-full h-full"
                allowFullScreen
                title="Product Video"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

