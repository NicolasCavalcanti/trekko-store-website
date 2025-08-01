import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, Users, Eye, ShoppingCart } from 'lucide-react'

export default function SocialProof() {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [viewerCount, setViewerCount] = useState(12)

  // Notificações de vendas recentes mockadas
  const salesNotifications = [
    {
      id: 1,
      customerName: 'Ana Silva',
      location: 'São Paulo, SP',
      product: 'Kit Canicross Pro',
      timeAgo: '3 minutos atrás',
      avatar: 'https://via.placeholder.com/40/4A6B47/FFFFFF?text=AS'
    },
    {
      id: 2,
      customerName: 'Carlos Mendes',
      location: 'Rio de Janeiro, RJ',
      product: 'Mochila Trilha Pet Adventure',
      timeAgo: '7 minutos atrás',
      avatar: 'https://via.placeholder.com/40/7B5E45/FFFFFF?text=CM'
    },
    {
      id: 3,
      customerName: 'Mariana Costa',
      location: 'Belo Horizonte, MG',
      product: 'Barraca Camping Pet-Friendly',
      timeAgo: '12 minutos atrás',
      avatar: 'https://via.placeholder.com/40/FF6B35/FFFFFF?text=MC'
    },
    {
      id: 4,
      customerName: 'Roberto Silva',
      location: 'Curitiba, PR',
      product: 'Cinto Canicross Elite',
      timeAgo: '18 minutos atrás',
      avatar: 'https://via.placeholder.com/40/1D2F3A/FFFFFF?text=RS'
    }
  ]

  // Mostrar notificações em intervalos
  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true)
      setTimeout(() => setIsVisible(false), 4000)
    }

    // Primeira notificação após 5 segundos
    const initialTimer = setTimeout(showNotification, 5000)

    // Notificações subsequentes a cada 15 segundos
    const interval = setInterval(() => {
      setCurrentNotification(prev => (prev + 1) % salesNotifications.length)
      showNotification()
    }, 15000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [salesNotifications.length])

  // Simular contador de visualizações
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        const newCount = prev + change
        return Math.max(8, Math.min(25, newCount))
      })
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const currentSale = salesNotifications[currentNotification]

  return (
    <>
      {/* Notificação de Venda Recente */}
      {isVisible && (
        <div className="fixed bottom-6 left-6 z-40 animate-fade-in">
          <Card className="p-4 shadow-lg border-l-4 border-l-primary max-w-sm">
            <div className="flex items-center space-x-3">
              <img
                src={currentSale.avatar}
                alt={currentSale.customerName}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <ShoppingCart className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-600">
                    Compra Realizada!
                  </span>
                </div>
                <p className="text-sm font-medium truncate">
                  {currentSale.customerName}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  comprou {currentSale.product}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {currentSale.location}
                  </span>
                  <Clock className="h-3 w-3 text-muted-foreground ml-2" />
                  <span className="text-xs text-muted-foreground">
                    {currentSale.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Contador de Visualizações */}
      <div className="fixed bottom-6 right-6 z-40">
        <Card className="p-3 shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-sm">
              <span className="font-semibold">{viewerCount}</span>
              <span className="text-muted-foreground ml-1">
                pessoas visualizando
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Barra de Frete Grátis */}
      <FreeShippingBar />

      {/* Contador de Estoque */}
      <StockCounter />
    </>
  )
}

// Componente da Barra de Frete Grátis
function FreeShippingBar() {
  const [cartTotal] = useState(299.90) // Simular total do carrinho
  const freeShippingThreshold = 199
  const remaining = Math.max(0, freeShippingThreshold - cartTotal)
  const progress = Math.min(100, (cartTotal / freeShippingThreshold) * 100)

  if (cartTotal >= freeShippingThreshold) {
    return (
      <div className="bg-green-600 text-white text-center py-2 px-4">
        <div className="flex items-center justify-center space-x-2">
          <ShoppingCart className="h-4 w-4" />
          <span className="text-sm font-medium">
            🎉 Parabéns! Você ganhou frete grátis!
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-primary text-primary-foreground text-center py-3 px-4">
      <div className="max-w-md mx-auto">
        <p className="text-sm mb-2">
          Faltam apenas <strong>R$ {remaining.toFixed(2).replace('.', ',')}</strong> para ganhar frete grátis!
        </p>
        <div className="w-full bg-primary-foreground/20 rounded-full h-2">
          <div
            className="bg-primary-foreground h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

// Componente do Contador de Estoque
function StockCounter() {
  const [stock] = useState(7) // Simular estoque baixo

  if (stock > 10) return null

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-30">
      <Card className="p-3 rounded-l-lg rounded-r-none border-r-0 shadow-lg bg-orange-50 border-orange-200">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="text-sm">
            <div className="font-semibold text-orange-800">
              Apenas {stock} restantes!
            </div>
            <div className="text-xs text-orange-600">
              Estoque limitado
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

