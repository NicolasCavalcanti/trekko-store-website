import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, ArrowRight, Clock } from 'lucide-react'

export default function AbandonedCartEmail({ cartItems = [] }) {
  // Simular dados de carrinho abandonado
  const mockCartItems = cartItems.length > 0 ? cartItems : [
    {
      id: 1,
      name: 'Kit Canicross Pro',
      image: '/src/assets/images/products/canicross_1.jpg',
      price: 'R$ 299,90',
      quantity: 1
    }
  ]

  const total = mockCartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'))
    return sum + (price * item.quantity)
  }, 0)

  return (
    <div className="max-w-2xl mx-auto bg-background p-6">
      {/* Header do E-mail */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="/src/assets/images/logo/trekko_logo.png" 
            alt="Trekko Store" 
            className="h-12"
          />
        </div>
        <h1 className="text-2xl font-bold text-foreground">
          Você esqueceu algo especial! 🐕
        </h1>
      </div>

      {/* Conteúdo Principal */}
      <Card className="mb-6">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingCart className="h-8 w-8 text-orange-600" />
          </div>
          <h2 className="text-xl font-semibold">
            Seus itens estão esperando por você!
          </h2>
          <p className="text-muted-foreground">
            Não perca a chance de levar estes produtos incríveis para suas aventuras
          </p>
        </CardHeader>

        <CardContent>
          {/* Itens do Carrinho */}
          <div className="space-y-4 mb-6">
            {mockCartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-muted-foreground">Quantidade: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-primary">R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="text-center mb-6">
            <Button size="lg" className="w-full md:w-auto">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Finalizar Compra Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Urgência */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
            <Clock className="h-5 w-5 text-orange-600 mx-auto mb-2" />
            <p className="text-sm text-orange-800">
              <strong>Atenção:</strong> Seus itens serão reservados por apenas 24 horas!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Benefícios */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4 text-center">Por que escolher a Trekko Store?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <p className="text-sm font-medium">Frete Grátis</p>
              <p className="text-xs text-muted-foreground">Acima de R$ 199</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold">🛡️</span>
              </div>
              <p className="text-sm font-medium">Garantia</p>
              <p className="text-xs text-muted-foreground">12 meses</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600 font-bold">🔄</span>
              </div>
              <p className="text-sm font-medium">Troca Grátis</p>
              <p className="text-xs text-muted-foreground">30 dias</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Produtos Relacionados */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4 text-center">Você também pode gostar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 text-center">
              <img 
                src="/src/assets/images/products/canicross_2.jpg" 
                alt="Produto relacionado"
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h4 className="font-medium text-sm">Cinto Canicross Elite</h4>
              <p className="text-primary font-bold">R$ 189,90</p>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <img 
                src="/src/assets/images/products/canicross_1.jpg" 
                alt="Produto relacionado"
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h4 className="font-medium text-sm">Peitoral X-Back Pro</h4>
              <p className="text-primary font-bold">R$ 129,90</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-xs text-muted-foreground border-t pt-6">
        <p className="mb-2">
          Você está recebendo este e-mail porque tem itens em seu carrinho na Trekko Store.
        </p>
        <p>
          Não quer mais receber estes e-mails? 
          <a href="#" className="text-primary hover:underline ml-1">Descadastrar</a>
        </p>
        <p className="mt-4">
          © 2024 Trekko Store. Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}

