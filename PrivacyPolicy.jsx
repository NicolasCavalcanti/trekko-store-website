import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Lock, User, Shield, Cookie } from "lucide-react"

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-trekko-sand py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lock className="text-trekko-moss" size={32} />
            <h1 className="text-4xl font-bold text-trekko-night">Política de Privacidade</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A sua privacidade é uma prioridade para a Trekko Store. 
            Entenda como coletamos, usamos e protegemos suas informações.
          </p>
        </div>

        {/* Coleta de Dados */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <User size={24} />
              Coleta de Dados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">
              Coletamos apenas os dados estritamente necessários para o funcionamento da loja, como:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Nome, e-mail, telefone e endereço para entrega</li>
              <li>Dados de pagamento (protegidos via criptografia SSL)</li>
              <li>Dados de navegação e cookies para melhorar sua experiência</li>
            </ul>
          </CardContent>
        </Card>

        {/* Uso das Informações */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <Shield size={24} />
              Uso das Informações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">
              Seus dados são utilizados apenas para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Processar e entregar pedidos</li>
              <li>Enviar e-mails transacionais e ofertas relevantes</li>
              <li>Cumprir obrigações legais e fiscais</li>
            </ul>
            <p className="mt-4 text-gray-700">
              <span className="font-semibold">Jamais venderemos ou compartilharemos seus dados com terceiros</span>, 
              exceto quando necessário para o processamento do pedido (ex: transportadoras, gateways de pagamento).
            </p>
          </CardContent>
        </Card>

        {/* Segurança e Exclusão */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <Lock size={24} />
              Segurança e Exclusão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">
              Utilizamos tecnologias avançadas de proteção de dados e criptografia para garantir a segurança das suas informações.
            </p>
            <p className="text-gray-700">
              Você pode solicitar a exclusão dos seus dados a qualquer momento enviando um e-mail para 
              <a href="mailto:contato@trekkostore.com" className="text-trekko-moss hover:underline"> contato@trekkostore.com</a>.
            </p>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <Cookie size={24} />
              Uso de Cookies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Nosso site utiliza cookies para melhorar sua experiência de navegação, 
              personalizar conteúdo e anúncios, e analisar nosso tráfego. 
              Ao continuar navegando, você concorda com o uso de cookies.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-trekko-moss text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Dúvidas sobre sua Privacidade?</h2>
              <p className="mb-6">
                Estamos à disposição para esclarecer qualquer questão sobre a proteção dos seus dados.
              </p>
              <a href="mailto:contato@trekkostore.com" className="bg-white text-trekko-moss hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 justify-center">
                Enviar E-mail
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

