import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@trekkostore.com.br',
      description: 'Resposta em até 24 horas'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999',
      description: 'Seg a Sex, 9h às 18h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'São Paulo, SP',
      description: 'Atendimento online'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Sexta',
      description: '9h às 18h'
    }
  ]

  const faqItems = [
    {
      question: 'Como posso rastrear meu pedido?',
      answer: 'Após a confirmação do pagamento, você receberá um código de rastreamento por e-mail.'
    },
    {
      question: 'Qual o prazo de entrega?',
      answer: 'O prazo varia de 3 a 10 dias úteis, dependendo da sua localização.'
    },
    {
      question: 'Posso trocar um produto?',
      answer: 'Sim, você tem até 30 dias para solicitar a troca de produtos em perfeito estado.'
    },
    {
      question: 'Os produtos têm garantia?',
      answer: 'Todos os produtos têm garantia mínima de 12 meses contra defeitos de fabricação.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fale Conosco
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Estamos aqui para ajudar você a encontrar os melhores equipamentos 
            para suas aventuras outdoor com pets.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-900 font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Envie sua Mensagem</h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato com você 
                o mais breve possível.
              </p>

              {isSubmitted ? (
                <Card className="p-8 text-center">
                  <CardContent className="p-0">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-600">
                      Obrigado pelo contato. Nossa equipe responderá em até 24 horas.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Assunto *</label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="duvida-produto">Dúvida sobre produto</SelectItem>
                          <SelectItem value="pedido">Acompanhar pedido</SelectItem>
                          <SelectItem value="troca-devolucao">Troca/Devolução</SelectItem>
                          <SelectItem value="sugestao">Sugestão</SelectItem>
                          <SelectItem value="parceria">Parceria</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Descreva sua dúvida ou mensagem..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes</h2>
              <p className="text-gray-600 mb-8">
                Confira as respostas para as dúvidas mais comuns dos nossos clientes.
              </p>

              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="bg-secondary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <MessageCircle className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{item.question}</h3>
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 p-6 bg-primary text-white">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-2">Não encontrou sua resposta?</h3>
                  <p className="mb-4">
                    Nossa equipe de especialistas está pronta para ajudar você com qualquer dúvida.
                  </p>
                  <Button variant="secondary">
                    <Phone className="mr-2 h-4 w-4" />
                    Falar com Especialista
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Outros Canais de Atendimento</h2>
            <p className="text-xl text-gray-600">
              Escolha a forma mais conveniente para entrar em contato conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">
                  Atendimento rápido e direto pelo WhatsApp
                </p>
                <Button variant="outline" className="w-full">
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">E-mail</h3>
                <p className="text-gray-600 mb-4">
                  Envie sua dúvida por e-mail
                </p>
                <Button variant="outline" className="w-full">
                  Enviar E-mail
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                <p className="text-gray-600 mb-4">
                  Fale diretamente com nossa equipe
                </p>
                <Button variant="outline" className="w-full">
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

