import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, X, ShoppingCart, Star } from 'lucide-react'

export default function UpsellWidget({ currentProduct, onAddToCart }) {
  const [selectedUpsells, setSelectedUpsells] = useState([])
  const [isVisible, setIsVisible] = useState(true)

  // Produtos de upsell mockados
  const upsellProducts = [
    {
      id: 'upsell-1',
      name: 'Cinto Canicross Elite',
      image: '/src/assets/images/products/canicross_2.jpg',
      price: 189.90,
      originalPrice: 249.90,
      discount: 24,
      rating: 4.7,
      reviews: 89,
      description: 'Conforto superior para longas corridas'
    },
    {
      id: 'upsell-2',
      name: 'Garrafa de Água Portátil Pet',
      image: '/src/assets/images/products/canicross_1.jpg',
      price: 79.90,
      originalPrice: 99.90,
      discount: 20,
      rating: 4.9,
      reviews: 156,
      description: 'Hidratação essencial para aventuras'
    }
  ]

  const handleToggleUpsell = (product) => {
    setSelectedUpsells(prev => {
      const isSelected = prev.find(p => p.id === product.id)
      if (isSelected) {
        return prev.filter(p => p.id !== product.id)
      } else {
        return [...prev, product]
      }
    })
  }

  const handleAddAllToCart = () => {
    selectedUpsells.forEach(product => {
      onAddToCart && onAddToCart(product)
    })
    setIsVisible(false)
  }

  const getTotalSavings = () => {
    return selectedUpsells.reduce((total, product) => {
      return total + (product.originalPrice - product.price)
    }, 0)
  }

  const getTotalPrice = () => {
    return selectedUpsells.reduce((total, product) => {
      return total + product.price
    }, 0)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Oferta Especial!</h2>
            <p className="text-sm text-muted-foreground">
              Complete seu kit com estes produtos essenciais
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 hover:bg-muted rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <CardContent className="p-6">
          {/* Produto Principal */}
          <div className="mb-6 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Produto Adicionado</h3>
                <p className="text-sm text-muted-foreground">
                  {currentProduct?.name || 'Kit Canicross Pro'}
                </p>
              </div>
            </div>
          </div>

          {/* Produtos de Upsell */}
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-lg">Adicione e Economize Mais!</h3>
            
            {upsellProducts.map((product) => {
              const isSelected = selectedUpsells.find(p => p.id === product.id)
              
              return (
                <div
                  key={product.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    isSelected ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => handleToggleUpsell(product)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Plus className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{product.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {product.description}
                          </p>
                          
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(product.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                              <span className="text-xs text-muted-foreground ml-1">
                                ({product.reviews})
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-primary">
                              R$ {product.price.toFixed(2).replace('.', ',')}
                            </span>
                            <Badge variant="destructive" className="text-xs">
                              -{product.discount}%
                            </Badge>
                          </div>
                          <span className="text-sm text-muted-foreground line-through">
                            R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Resumo e CTA */}
          {selectedUpsells.length > 0 && (
            <div className="border-t pt-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Total dos Produtos Selecionados:</span>
                  <span className="text-lg font-bold text-primary">
                    R$ {getTotalPrice().toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-green-700">Você está economizando:</span>
                  <span className="font-semibold text-green-700">
                    R$ {getTotalSavings().toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={handleAddAllToCart}
                  className="flex-1"
                  size="lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Adicionar {selectedUpsells.length} Item{selectedUpsells.length > 1 ? 's' : ''} ao Carrinho
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsVisible(false)}
                  size="lg"
                >
                  Não, Obrigado
                </Button>
              </div>
            </div>
          )}

          {selectedUpsells.length === 0 && (
            <div className="text-center pt-6 border-t">
              <Button
                variant="outline"
                onClick={() => setIsVisible(false)}
                size="lg"
              >
                Continuar sem Adicionar
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

