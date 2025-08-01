import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  ArrowLeft, 
  CreditCard, 
  Truck, 
  Shield, 
  CheckCircle,
  Lock,
  MapPin,
  User,
  Mail,
  Phone
} from 'lucide-react'
import { useCart } from './CartContext'

export default function Checkout() {
  const { items, getSubtotal, getShipping, getTotal, clearCart } = useCart()
  const [currentStep, setCurrentStep] = useState(1)
  const [orderCompleted, setOrderCompleted] = useState(false)
  
  const [customerData, setCustomerData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    cpf: ''
  })

  const [shippingData, setShippingData] = useState({
    zipCode: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: ''
  })

  const [paymentData, setPaymentData] = useState({
    method: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    installments: '1'
  })

  const [agreements, setAgreements] = useState({
    terms: false,
    newsletter: false
  })

  const handleInputChange = (section, field, value) => {
    switch(section) {
      case 'customer':
        setCustomerData(prev => ({ ...prev, [field]: value }))
        break
      case 'shipping':
        setShippingData(prev => ({ ...prev, [field]: value }))
        break
      case 'payment':
        setPaymentData(prev => ({ ...prev, [field]: value }))
        break
    }
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCompleteOrder = () => {
    // Simular processamento do pedido
    setTimeout(() => {
      setOrderCompleted(true)
      clearCart()
    }, 2000)
  }

  const steps = [
    { number: 1, title: 'Dados Pessoais', icon: User },
    { number: 2, title: 'Entrega', icon: Truck },
    { number: 3, title: 'Pagamento', icon: CreditCard }
  ]

  if (items.length === 0 && !orderCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Carrinho vazio</h2>
          <p className="text-gray-600 mb-8">Adicione produtos ao carrinho para continuar.</p>
          <Link to="/colecoes/esportes-outdoor">
            <Button>Explorar Produtos</Button>
          </Link>
        </div>
      </div>
    )
  }

  if (orderCompleted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Pedido Realizado com Sucesso!</h1>
            <p className="text-gray-600 mb-8">
              Obrigado pela sua compra! Você receberá um e-mail de confirmação em breve 
              com os detalhes do seu pedido e informações de rastreamento.
            </p>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Detalhes do Pedido</h3>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span>Número do Pedido:</span>
                    <span className="font-medium">#TRK{Date.now().toString().slice(-6)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span className="font-medium">R$ {getTotal().toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prazo de Entrega:</span>
                    <span className="font-medium">5-7 dias úteis</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg">Continuar Comprando</Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" size="lg">Ler Nosso Blog</Button>
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
          <Link to="/carrinho">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Carrinho
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Finalizar Compra</h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'bg-primary border-primary text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.number ? 'text-primary' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
                {step.number < steps.length && (
                  <div className={`w-16 h-0.5 ml-4 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {/* Step 1: Customer Data */}
            {currentStep === 1 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Dados Pessoais
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail *</label>
                      <Input
                        type="email"
                        value={customerData.email}
                        onChange={(e) => handleInputChange('customer', 'email', e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nome *</label>
                        <Input
                          value={customerData.firstName}
                          onChange={(e) => handleInputChange('customer', 'firstName', e.target.value)}
                          placeholder="Seu nome"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Sobrenome *</label>
                        <Input
                          value={customerData.lastName}
                          onChange={(e) => handleInputChange('customer', 'lastName', e.target.value)}
                          placeholder="Seu sobrenome"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Telefone *</label>
                        <Input
                          type="tel"
                          value={customerData.phone}
                          onChange={(e) => handleInputChange('customer', 'phone', e.target.value)}
                          placeholder="(11) 99999-9999"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CPF *</label>
                        <Input
                          value={customerData.cpf}
                          onChange={(e) => handleInputChange('customer', 'cpf', e.target.value)}
                          placeholder="000.000.000-00"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button onClick={handleNextStep}>
                      Continuar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Shipping */}
            {currentStep === 2 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    Endereço de Entrega
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">CEP *</label>
                      <Input
                        value={shippingData.zipCode}
                        onChange={(e) => handleInputChange('shipping', 'zipCode', e.target.value)}
                        placeholder="00000-000"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Endereço *</label>
                      <Input
                        value={shippingData.address}
                        onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
                        placeholder="Rua, Avenida, etc."
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Número *</label>
                        <Input
                          value={shippingData.number}
                          onChange={(e) => handleInputChange('shipping', 'number', e.target.value)}
                          placeholder="123"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Complemento</label>
                        <Input
                          value={shippingData.complement}
                          onChange={(e) => handleInputChange('shipping', 'complement', e.target.value)}
                          placeholder="Apto, Bloco, etc."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Bairro *</label>
                        <Input
                          value={shippingData.neighborhood}
                          onChange={(e) => handleInputChange('shipping', 'neighborhood', e.target.value)}
                          placeholder="Bairro"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Cidade *</label>
                        <Input
                          value={shippingData.city}
                          onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
                          placeholder="Cidade"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Estado *</label>
                        <Select value={shippingData.state} onValueChange={(value) => handleInputChange('shipping', 'state', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Estado" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="SP">São Paulo</SelectItem>
                            <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                            <SelectItem value="MG">Minas Gerais</SelectItem>
                            <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                            <SelectItem value="PR">Paraná</SelectItem>
                            <SelectItem value="SC">Santa Catarina</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button variant="outline" onClick={handlePreviousStep}>
                      Voltar
                    </Button>
                    <Button onClick={handleNextStep}>
                      Continuar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Forma de Pagamento
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Payment Method */}
                    <div>
                      <label className="block text-sm font-medium mb-3">Método de Pagamento *</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className={`cursor-pointer border-2 ${paymentData.method === 'credit' ? 'border-primary' : 'border-gray-200'}`}
                              onClick={() => handleInputChange('payment', 'method', 'credit')}>
                          <CardContent className="p-4 text-center">
                            <CreditCard className="h-8 w-8 mx-auto mb-2" />
                            <p className="font-medium">Cartão de Crédito</p>
                            <p className="text-sm text-gray-600">Em até 12x sem juros</p>
                          </CardContent>
                        </Card>
                        <Card className={`cursor-pointer border-2 ${paymentData.method === 'pix' ? 'border-primary' : 'border-gray-200'}`}
                              onClick={() => handleInputChange('payment', 'method', 'pix')}>
                          <CardContent className="p-4 text-center">
                            <Shield className="h-8 w-8 mx-auto mb-2" />
                            <p className="font-medium">PIX</p>
                            <p className="text-sm text-gray-600">5% de desconto</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Credit Card Form */}
                    {paymentData.method === 'credit' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Número do Cartão *</label>
                          <Input
                            value={paymentData.cardNumber}
                            onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
                            placeholder="0000 0000 0000 0000"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Nome no Cartão *</label>
                          <Input
                            value={paymentData.cardName}
                            onChange={(e) => handleInputChange('payment', 'cardName', e.target.value)}
                            placeholder="Nome como está no cartão"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Validade *</label>
                            <Input
                              value={paymentData.cardExpiry}
                              onChange={(e) => handleInputChange('payment', 'cardExpiry', e.target.value)}
                              placeholder="MM/AA"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">CVV *</label>
                            <Input
                              value={paymentData.cardCvv}
                              onChange={(e) => handleInputChange('payment', 'cardCvv', e.target.value)}
                              placeholder="123"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Parcelas *</label>
                            <Select value={paymentData.installments} onValueChange={(value) => handleInputChange('payment', 'installments', value)}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1x sem juros</SelectItem>
                                <SelectItem value="2">2x sem juros</SelectItem>
                                <SelectItem value="3">3x sem juros</SelectItem>
                                <SelectItem value="6">6x sem juros</SelectItem>
                                <SelectItem value="12">12x sem juros</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* PIX Instructions */}
                    {paymentData.method === 'pix' && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Como pagar com PIX:</h4>
                        <ol className="text-sm text-gray-700 space-y-1">
                          <li>1. Finalize seu pedido</li>
                          <li>2. Copie o código PIX ou escaneie o QR Code</li>
                          <li>3. Abra o app do seu banco e faça o pagamento</li>
                          <li>4. Pronto! Seu pedido será processado automaticamente</li>
                        </ol>
                      </div>
                    )}

                    {/* Agreements */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="terms" 
                          checked={agreements.terms}
                          onCheckedChange={(checked) => setAgreements(prev => ({ ...prev, terms: checked }))}
                        />
                        <label htmlFor="terms" className="text-sm">
                          Aceito os <Link to="/politicas/termos" className="text-primary hover:underline">termos de uso</Link> e 
                          <Link to="/politicas/privacidade" className="text-primary hover:underline ml-1">política de privacidade</Link> *
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="newsletter" 
                          checked={agreements.newsletter}
                          onCheckedChange={(checked) => setAgreements(prev => ({ ...prev, newsletter: checked }))}
                        />
                        <label htmlFor="newsletter" className="text-sm">
                          Quero receber ofertas e novidades por e-mail
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button variant="outline" onClick={handlePreviousStep}>
                      Voltar
                    </Button>
                    <Button 
                      onClick={handleCompleteOrder}
                      disabled={!agreements.terms || !paymentData.method}
                      className="flex items-center"
                    >
                      <Lock className="mr-2 h-4 w-4" />
                      Finalizar Pedido
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Resumo do Pedido</h3>
                
                {/* Items */}
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        {item.selectedSize && (
                          <p className="text-xs text-gray-600">Tamanho: {item.selectedSize}</p>
                        )}
                        <p className="text-xs text-gray-600">Qtd: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>

                <hr className="mb-4" />

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>R$ {getSubtotal().toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Frete</span>
                    <span>
                      {getShipping() === 0 
                        ? 'Grátis' 
                        : `R$ ${getShipping().toFixed(2).replace('.', ',')}`
                      }
                    </span>
                  </div>
                  {paymentData.method === 'pix' && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Desconto PIX (5%)</span>
                      <span>-R$ {(getSubtotal() * 0.05).toFixed(2).replace('.', ',')}</span>
                    </div>
                  )}
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>
                      R$ {paymentData.method === 'pix' 
                        ? ((getSubtotal() * 0.95) + getShipping()).toFixed(2).replace('.', ',')
                        : getTotal().toFixed(2).replace('.', ',')
                      }
                    </span>
                  </div>
                </div>

                {/* Security */}
                <div className="mt-6 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4" />
                    <span>Compra 100% segura e protegida</span>
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

