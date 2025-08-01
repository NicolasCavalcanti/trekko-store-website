import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Gavel, ShoppingBag, CheckCircle, CreditCard, RefreshCw } from "lucide-react"

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-trekko-sand py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gavel className="text-trekko-moss" size={32} />
            <h1 className="text-4xl font-bold text-trekko-night">Termos de Uso</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ao utilizar os serviços da Trekko Store, você concorda com os termos e condições descritos abaixo.
            Leia atentamente antes de realizar suas compras.
          </p>
        </div>

        {/* Sobre a Loja */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <ShoppingBag size={24} />
              1. Sobre a Loja
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              A Trekko Store é uma loja virtual que atua sob o modelo de dropshipping, 
              ou seja, os produtos são enviados diretamente dos fornecedores parceiros, 
              localizados principalmente fora do Brasil.
            </p>
          </CardContent>
        </Card>

        {/* Aceitação dos Termos */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <CheckCircle size={24} />
              2. Aceitação dos Termos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Ao efetuar uma compra em nosso site, o cliente declara estar de acordo com os prazos, 
              condições de entrega, políticas de devolução e com os termos descritos nesta página.
            </p>
          </CardContent>
        </Card>

        {/* Produtos e Disponibilidade */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <ShoppingBag size={24} />
              3. Produtos e Disponibilidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">
              Trabalhamos para manter as informações do site sempre atualizadas. 
              No entanto, podem ocorrer indisponibilidades momentâneas. 
              Nesse caso, o valor pago será 100% reembolsado.
            </p>
          </CardContent>
        </Card>

        {/* Responsabilidade dos Fornecedores */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <RefreshCw size={24} />
              4. Responsabilidade dos Fornecedores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">
              Por se tratar de fornecedores internacionais, a Trekko Store atua como intermediadora 
              entre o cliente e o fabricante, garantindo a curadoria e o suporte ao consumidor. 
              Eventuais variações mínimas em cor, medida ou embalagem podem ocorrer.
            </p>
          </CardContent>
        </Card>

        {/* Pagamento e Segurança */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <CreditCard size={24} />
              5. Pagamento e Segurança
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">
              Todos os pagamentos são processados via plataformas seguras (ex: Mercado Pago, PagSeguro, Stripe ou PayPal). 
              Não armazenamos dados de cartão de crédito.
            </p>
          </CardContent>
        </Card>

        {/* Modificações dos Termos */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-trekko-moss">
              <Gavel size={24} />
              6. Modificações dos Termos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">
              Reservamo-nos o direito de atualizar estes termos sempre que necessário. 
              A última atualização foi em 07/07/2025.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-trekko-moss text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Dúvidas sobre os Termos de Uso?</h2>
              <p className="mb-6">
                Entre em contato conosco para esclarecer qualquer questão.
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

export default TermsOfUse

