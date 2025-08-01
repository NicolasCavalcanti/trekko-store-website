import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  ArrowLeft,
  Truck,
  Shield,
  CreditCard,
  Tag
} from 'lucide-react'
import { useCart } from './CartContext'
import { useState } from 'react'

export default function Cart() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    getSubtotal, 
    getShipping, 
    getTotal 
  } = useCart()
  
  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState(null)

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(item.id, item.selectedSize)
    } else {
      updateQuantity(item.id, newQuantity, item.selectedSize)
    }
  }

  const applyCoupon = () => {
    // Simular aplicação de cupom
    if (couponCode.toLowerCase() === 'trekko10') {
      setAppliedCoupon({
        code: 'TREKKO10',
        discount: 0.1,
        description: '10% de desconto'
      })
    } else if (couponCode.toLowerCase() === 'fretegratis') {
      setAppliedCoupon({
        code: 'FRETEGRATIS',
        discount: 0,
        freeShipping: true,
        description: 'Frete grátis'
      })
    } else {
      alert('Cupom inválido')
    }
    setCouponCode('')
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
  }

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0
    return appliedCoupon.discount * getSubtotal()
  }

  const calculateShipping = () => {
    if (appliedCoupon?.freeShipping) return 0
    return getShipping()
  }

  const calculateFinalTotal = () => {
    return getSubtotal() - calculateDiscount() + calculateShipping()
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h1>
            <p className="text-gray-600 mb-8">
              Que tal explorar nossos produtos e encontrar equipamentos incríveis para suas aventuras?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/colecoes/esportes-outdoor">
                <Button size="lg">
                  Explorar Produtos
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao Início
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continuar Comprando
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Carrinho de Compras</h1>
          <p className="text-gray-600">{items.length} item{items.length !== 1 ? 's' : ''} no seu carrinho</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${item.selectedSize}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <Badge variant="outline" className="mt-1">
                            {item.category}
                          </Badge>
                          {item.selectedSize && (
                            <p className="text-sm text-gray-600 mt-1">
                              Tamanho: {item.selectedSize}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id, item.selectedSize)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleQuantityChange(item, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleQuantityChange(item, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-semibold text-lg">{item.price}</p>
                          {item.quantity > 1 && (
                            <p className="text-sm text-gray-600">
                              {item.quantity} x {item.price}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Clear Cart */}
            <div className="flex justify-end">
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Limpar Carrinho
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Coupon */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Tag className="mr-2 h-4 w-4" />
                  Cupom de Desconto
                </h3>
                
                {appliedCoupon ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-green-800">{appliedCoupon.code}</p>
                        <p className="text-sm text-green-600">{appliedCoupon.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={removeCoupon}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remover
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Digite seu cupom"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button onClick={applyCoupon} disabled={!couponCode}>
                      Aplicar
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Summary */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Resumo do Pedido</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R$ {getSubtotal().toFixed(2).replace('.', ',')}</span>
                  </div>
                  
                  {appliedCoupon && calculateDiscount() > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto ({appliedCoupon.code})</span>
                      <span>-R$ {calculateDiscount().toFixed(2).replace('.', ',')}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      Frete
                      {calculateShipping() === 0 && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          Grátis
                        </Badge>
                      )}
                    </span>
                    <span>
                      {calculateShipping() === 0 
                        ? 'Grátis' 
                        : `R$ ${calculateShipping().toFixed(2).replace('.', ',')}`
                      }
                    </span>
                  </div>
                  
                  <hr />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>R$ {calculateFinalTotal().toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button size="lg" className="w-full mt-6">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Finalizar Compra
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Guarantees */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Suas Garantias</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Frete Grátis</p>
                      <p className="text-xs text-gray-600">Acima de R$ 199</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Compra Segura</p>
                      <p className="text-xs text-gray-600">Dados protegidos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Parcelamento</p>
                      <p className="text-xs text-gray-600">Em até 12x sem juros</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

