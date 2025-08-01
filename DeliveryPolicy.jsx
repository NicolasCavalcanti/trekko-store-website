import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Truck, Calendar, Mail, Info } from "lucide-react"

const DeliveryPolicy = () => {
  return (
    <div className="min-h-screen bg-trekko-sand py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Truck className="text-trekko-moss" size={32} />
            <h1 className="text-4xl font-bold text-trekko-night">Política de Entrega</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entenda como funciona o processo de entrega da Trekko Store, 
            desde o prazo até o rastreamento do seu pedido.
          </p>
        </div>

        {/* Prazos e Rastreamento */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <Calendar size={24} />
              Prazos e Rastreamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">
              A Trekko Store trabalha com fornecedores internacionais para garantir os melhores produtos e preços. 
              Por isso, o prazo médio de entrega é de <span className="font-semibold">15 a 25 dias úteis</span>, 
              podendo variar conforme a localidade e eventuais questões alfandegárias.
            </p>
            <p className="mb-4 text-gray-700">
              Assim que o seu pedido for processado e despachado, você receberá um 
              <span className="font-semibold">código de rastreamento por e-mail</span>, 
              que poderá ser acompanhado por um link direto em nosso site ou através do site dos Correios.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Info className="text-trekko-moss flex-shrink-0 mt-1" size={16} />
                <span><span className="font-semibold">Importante:</span> Fins de semana e feriados não são considerados dias úteis.</span>
              </li>
              <li className="flex items-start gap-2">
                <Info className="text-trekko-moss flex-shrink-0 mt-1" size={16} />
                <span>Em períodos de grande demanda (Black Friday, Natal, etc.), os prazos podem se estender.</span>
              </li>
              <li className="flex items-start gap-2">
                <Info className="text-trekko-moss flex-shrink-0 mt-1" size={16} />
                <span>Em caso de atrasos significativos, entre em contato com nosso suporte: <a href="mailto:contato@trekkostore.com" className="text-trekko-moss hover:underline">contato@trekkostore.com</a>.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-trekko-moss text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ainda tem Dúvidas sobre a Entrega?</h2>
              <p className="mb-6">
                Nossa equipe está pronta para te ajudar! Entre em contato conosco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:contato@trekkostore.com" className="bg-white text-trekko-moss hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 justify-center">
                  <Mail size={20} />
                  Enviar E-mail
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DeliveryPolicy

