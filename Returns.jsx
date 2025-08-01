import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { RefreshCw, Clock, Package, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react'

const Returns = () => {
  const returnSteps = [
    {
      step: 1,
      title: 'Entre em Contato',
      description: 'Fale conosco via WhatsApp ou e-mail informando o motivo da troca/devolução',
      icon: <MessageSquare className="text-trekko-moss" size={24} />
    },
    {
      step: 2,
      title: 'Autorização',
      description: 'Receba o código de autorização e as instruções de envio',
      icon: <CheckCircle className="text-trekko-moss" size={24} />
    },
    {
      step: 3,
      title: 'Envio do Produto',
      description: 'Embale o produto com cuidado e envie pelos Correios',
      icon: <Package className="text-trekko-moss" size={24} />
    },
    {
      step: 4,
      title: 'Processamento',
      description: 'Analisamos o produto e processamos sua solicitação em até 5 dias úteis',
      icon: <RefreshCw className="text-trekko-moss" size={24} />
    }
  ]

  const returnReasons = [
    {
      reason: 'Defeito de Fabricação',
      coverage: 'Frete por nossa conta',
      timeframe: '90 dias',
      icon: '🔧'
    },
    {
      reason: 'Produto Errado',
      coverage: 'Frete por nossa conta',
      timeframe: '30 dias',
      icon: '📦'
    },
    {
      reason: 'Não Serviu',
      coverage: 'Frete por sua conta',
      timeframe: '30 dias',
      icon: '📏'
    },
    {
      reason: 'Desistência',
      coverage: 'Frete por sua conta',
      timeframe: '7 dias',
      icon: '💭'
    }
  ]

  const conditions = [
    'Produto sem sinais de uso',
    'Embalagem original preservada',
    'Etiquetas e tags anexadas',
    'Acessórios inclusos',
    'Nota fiscal ou comprovante'
  ]

  return (
    <div className="min-h-screen bg-trekko-sand py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <RefreshCw className="text-trekko-moss" size={32} />
            <h1 className="text-4xl font-bold text-trekko-night">Trocas e Devoluções</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sua satisfação é nossa prioridade. Conheça nossa política de trocas e devoluções 
            e tenha total tranquilidade em suas compras.
          </p>
        </div>

        {/* Política Geral */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <Clock size={24} />
              Política Geral
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-trekko-moss/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-trekko-moss" size={24} />
                </div>
                <h3 className="font-semibold text-trekko-night mb-2">30 Dias</h3>
                <p className="text-sm text-gray-600">Prazo para solicitar troca ou devolução</p>
              </div>
              <div className="text-center">
                <div className="bg-trekko-moss/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-trekko-moss" size={24} />
                </div>
                <h3 className="font-semibold text-trekko-night mb-2">Produto Íntegro</h3>
                <p className="text-sm text-gray-600">Sem uso, com embalagem e etiquetas</p>
              </div>
              <div className="text-center">
                <div className="bg-trekko-moss/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="text-trekko-moss" size={24} />
                </div>
                <h3 className="font-semibold text-trekko-night mb-2">Processo Rápido</h3>
                <p className="text-sm text-gray-600">Análise em até 5 dias úteis</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Motivos de Devolução */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-trekko-moss">Motivos de Devolução</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {returnReasons.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-trekko-night mb-2">{item.reason}</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-600">
                      <span className="font-medium">Frete:</span> {item.coverage}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Prazo:</span> {item.timeframe}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Processo de Devolução */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-trekko-moss">Como Solicitar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {returnSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-trekko-moss/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="bg-trekko-moss text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-trekko-night mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Condições */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-trekko-moss">
                <CheckCircle size={24} />
                Condições Necessárias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {conditions.map((condition, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600">
                <AlertCircle size={24} />
                Importante Saber
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Produtos personalizados não podem ser devolvidos</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Itens de higiene pessoal não são aceitos</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Reembolso em até 10 dias úteis após aprovação</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Trocas sujeitas à disponibilidade de estoque</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-trekko-moss text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Precisa Fazer uma Troca ou Devolução?</h2>
              <p className="mb-6">
                Nossa equipe está pronta para te ajudar! Entre em contato conosco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 justify-center">
                  <MessageSquare size={20} />
                  WhatsApp
                </button>
                <button className="bg-white text-trekko-moss hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  📧 E-mail
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Returns

