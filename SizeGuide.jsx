import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Ruler, Dog, Info } from 'lucide-react'

const SizeGuide = () => {
  const sizeChart = [
    {
      size: 'P (Pequeno)',
      weight: '5-15kg',
      chest: '35-45cm',
      neck: '25-35cm',
      breeds: ['Poodle Toy', 'Yorkshire', 'Chihuahua', 'Maltês']
    },
    {
      size: 'M (Médio)',
      weight: '15-25kg',
      chest: '45-55cm',
      neck: '35-45cm',
      breeds: ['Cocker Spaniel', 'Beagle', 'Border Collie', 'Bulldog Francês']
    },
    {
      size: 'G (Grande)',
      weight: '25-40kg',
      chest: '55-70cm',
      neck: '45-55cm',
      breeds: ['Labrador', 'Golden Retriever', 'Pastor Alemão', 'Boxer']
    },
    {
      size: 'GG (Extra Grande)',
      weight: 'Acima de 40kg',
      chest: '70-85cm',
      neck: '55-65cm',
      breeds: ['Rottweiler', 'Dogue Alemão', 'São Bernardo', 'Mastiff']
    }
  ]

  const measurementTips = [
    {
      title: 'Medindo o Peito',
      description: 'Meça a circunferência na parte mais larga do peito, logo atrás das patas dianteiras.',
      icon: '📏'
    },
    {
      title: 'Medindo o Pescoço',
      description: 'Meça onde normalmente fica a coleira, na base do pescoço.',
      icon: '🦴'
    },
    {
      title: 'Posição do Pet',
      description: 'Mantenha seu pet em pé e relaxado durante as medições.',
      icon: '🐕'
    },
    {
      title: 'Margem de Segurança',
      description: 'Adicione 2-3cm às medidas para garantir conforto e mobilidade.',
      icon: '✅'
    }
  ]

  return (
    <div className="min-h-screen bg-trekko-sand py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Ruler className="text-trekko-moss" size={32} />
            <h1 className="text-4xl font-bold text-trekko-night">Guia de Tamanhos</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre o tamanho perfeito para seu companheiro de aventuras. 
            Medidas precisas garantem conforto e segurança em todas as atividades.
          </p>
        </div>

        {/* Dicas de Medição */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <Info size={24} />
              Como Medir Seu Pet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {measurementTips.map((tip, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-3">{tip.icon}</div>
                  <h3 className="font-semibold text-trekko-night mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabela de Tamanhos */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <Dog size={24} />
              Tabela de Tamanhos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-trekko-moss">
                    <th className="text-left p-4 font-semibold text-trekko-night">Tamanho</th>
                    <th className="text-left p-4 font-semibold text-trekko-night">Peso</th>
                    <th className="text-left p-4 font-semibold text-trekko-night">Peito</th>
                    <th className="text-left p-4 font-semibold text-trekko-night">Pescoço</th>
                    <th className="text-left p-4 font-semibold text-trekko-night">Raças Comuns</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.map((size, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-semibold text-trekko-moss">{size.size}</td>
                      <td className="p-4">{size.weight}</td>
                      <td className="p-4">{size.chest}</td>
                      <td className="p-4">{size.neck}</td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {size.breeds.map((breed, breedIndex) => (
                            <span
                              key={breedIndex}
                              className="bg-trekko-moss/10 text-trekko-moss px-2 py-1 rounded-full text-xs"
                            >
                              {breed}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Dicas Importantes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-trekko-moss">🎯 Dicas Importantes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-trekko-moss">•</span>
                  <span>Na dúvida entre dois tamanhos, escolha sempre o maior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trekko-moss">•</span>
                  <span>Considere o pelo do seu pet nas medições</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trekko-moss">•</span>
                  <span>Produtos de canicross devem ter ajuste mais firme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trekko-moss">•</span>
                  <span>Verifique sempre as medidas específicas de cada produto</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-trekko-moss">📞 Precisa de Ajuda?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Nossa equipe está pronta para te ajudar a escolher o tamanho ideal para seu pet!
              </p>
              <div className="space-y-3">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors">
                  💬 Falar no WhatsApp
                </button>
                <button className="w-full bg-trekko-moss hover:bg-trekko-moss/80 text-white py-3 px-4 rounded-lg transition-colors">
                  📧 Enviar E-mail
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-trekko-moss text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Encontrou o Tamanho Ideal?</h2>
              <p className="mb-6">
                Explore nossa coleção completa de equipamentos para aventuras outdoor com seu pet!
              </p>
              <button className="bg-white text-trekko-moss hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Ver Produtos
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SizeGuide

