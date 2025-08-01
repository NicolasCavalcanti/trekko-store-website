import { useState, useEffect, useRef } from 'react'
import { X, MessageCircle, Send, Package, Ruler, RefreshCw, Clock, MessageSquare } from 'lucide-react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentFlow, setCurrentFlow] = useState('main')
  const [messages, setMessages] = useState([])
  const [userInput, setUserInput] = useState('')
  const [orderNumber, setOrderNumber] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        type: 'bot',
        content: 'Olá! 👋 Sou o assistente virtual da Trekko Store. Como posso te ajudar hoje?',
        timestamp: new Date()
      }])
    }
  }, [isOpen])

  const addMessage = (type, content) => {
    setMessages(prev => [...prev, {
      type,
      content,
      timestamp: new Date()
    }])
  }

  const handleMainOption = (option) => {
    addMessage('user', getOptionText(option))
    
    setTimeout(() => {
      switch (option) {
        case 'tracking':
          setCurrentFlow('tracking')
          addMessage('bot', 'Para rastrear seu pedido, preciso do número do pedido. Digite o número abaixo:')
          break
        case 'sizes':
          setCurrentFlow('sizes')
          addMessage('bot', 'Aqui estão as informações sobre tamanhos:\n\n📏 **Guia de Tamanhos para Pets:**\n\n• **P (Pequeno):** Cães de 5-15kg\n• **M (Médio):** Cães de 15-25kg\n• **G (Grande):** Cães de 25-40kg\n• **GG (Extra Grande):** Cães acima de 40kg\n\n💡 **Dica:** Meça o peito do seu pet na parte mais larga para escolher o tamanho ideal!\n\nPrecisa de mais alguma informação sobre tamanhos?')
          break
        case 'returns':
          setCurrentFlow('returns')
          addMessage('bot', '🔄 **Política de Trocas e Devoluções:**\n\n• **Prazo:** 30 dias corridos\n• **Condições:** Produto sem uso, com etiquetas\n• **Frete:** Por nossa conta em caso de defeito\n• **Processo:** Solicite através do WhatsApp\n\n📞 Para iniciar uma troca/devolução, clique em "Falar no WhatsApp" abaixo!')
          break
        case 'delivery':
          setCurrentFlow('delivery')
          addMessage('bot', '🚚 **Tempos de Entrega:**\n\n• **Região Sudeste:** 3-5 dias úteis\n• **Região Sul:** 4-6 dias úteis\n• **Região Nordeste:** 5-8 dias úteis\n• **Região Norte/Centro-Oeste:** 6-10 dias úteis\n\n📦 **Frete Grátis** para compras acima de R$ 199,00!\n\nPrecisa rastrear algum pedido específico?')
          break
        case 'whatsapp':
          window.open('https://wa.me/5511999999999?text=Olá! Vim do site da Trekko Store e preciso de ajuda.', '_blank')
          addMessage('bot', 'Redirecionando para o WhatsApp... 📱')
          break
        default:
          addMessage('bot', 'Desculpe, não entendi. Escolha uma das opções abaixo:')
      }
    }, 500)
  }

  const handleTrackingSubmit = () => {
    if (orderNumber.trim()) {
      addMessage('user', `Número do pedido: ${orderNumber}`)
      setTimeout(() => {
        addMessage('bot', `🔍 **Status do Pedido #${orderNumber}:**\n\n✅ **Pedido Confirmado** - 15/12/2024\n📦 **Em Preparação** - 16/12/2024\n🚚 **Enviado** - 17/12/2024\n📍 **Em Trânsito** - Previsão: 20/12/2024\n\n**Código de Rastreamento:** BR123456789\n\n💡 Acompanhe pelo site dos Correios ou transportadora!\n\nPrecisa de mais alguma coisa?`)
        setOrderNumber('')
        setCurrentFlow('main')
      }, 1000)
    }
  }

  const getOptionText = (option) => {
    const options = {
      tracking: '📦 Rastrear Pedido',
      sizes: '📏 Dúvidas sobre Tamanhos',
      returns: '🔄 Trocas e Devoluções',
      delivery: '🚚 Tempo de Entrega',
      whatsapp: '💬 Falar no WhatsApp'
    }
    return options[option] || option
  }

  const resetChat = () => {
    setCurrentFlow('main')
    setMessages([{
      type: 'bot',
      content: 'Olá! 👋 Sou o assistente virtual da Trekko Store. Como posso te ajudar hoje?',
      timestamp: new Date()
    }])
    setOrderNumber('')
    setUserInput('')
  }

  const MainOptions = () => (
    <div className="grid grid-cols-1 gap-2 mt-3">
      <button
        onClick={() => handleMainOption('tracking')}
        className="flex items-center gap-2 p-3 bg-trekko-moss hover:bg-trekko-moss/80 text-white rounded-lg transition-colors text-left"
      >
        <Package size={18} />
        <span>Rastrear Pedido</span>
      </button>
      <button
        onClick={() => handleMainOption('sizes')}
        className="flex items-center gap-2 p-3 bg-trekko-moss hover:bg-trekko-moss/80 text-white rounded-lg transition-colors text-left"
      >
        <Ruler size={18} />
        <span>Dúvidas sobre Tamanhos</span>
      </button>
      <button
        onClick={() => handleMainOption('returns')}
        className="flex items-center gap-2 p-3 bg-trekko-moss hover:bg-trekko-moss/80 text-white rounded-lg transition-colors text-left"
      >
        <RefreshCw size={18} />
        <span>Trocas e Devoluções</span>
      </button>
      <button
        onClick={() => handleMainOption('delivery')}
        className="flex items-center gap-2 p-3 bg-trekko-moss hover:bg-trekko-moss/80 text-white rounded-lg transition-colors text-left"
      >
        <Clock size={18} />
        <span>Tempo de Entrega</span>
      </button>
      <button
        onClick={() => handleMainOption('whatsapp')}
        className="flex items-center gap-2 p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-left"
      >
        <MessageSquare size={18} />
        <span>Falar no WhatsApp</span>
      </button>
    </div>
  )

  const TrackingInput = () => (
    <div className="mt-3">
      <div className="flex gap-2">
        <input
          type="text"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="Ex: TRK123456"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-trekko-moss"
          onKeyPress={(e) => e.key === 'Enter' && handleTrackingSubmit()}
        />
        <button
          onClick={handleTrackingSubmit}
          className="px-4 py-2 bg-trekko-moss text-white rounded-lg hover:bg-trekko-moss/80 transition-colors"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  )

  const BackToMainButton = () => (
    <button
      onClick={resetChat}
      className="mt-3 w-full p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
    >
      ← Voltar ao Menu Principal
    </button>
  )

  return (
    <>
      {/* Botão Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-trekko-moss hover:bg-trekko-moss/80 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Janela do Chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-trekko-moss text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span className="font-semibold">Trekko Store</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded"
              >
                <X size={16} />
              </button>
            </div>
            <div className="text-xs opacity-90 mt-1">
              Assistente Virtual • Online
            </div>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg whitespace-pre-line ${
                    message.type === 'user'
                      ? 'bg-trekko-moss text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Opções/Input */}
          <div className="p-4 border-t border-gray-200">
            {currentFlow === 'main' && <MainOptions />}
            {currentFlow === 'tracking' && (
              <>
                <TrackingInput />
                <BackToMainButton />
              </>
            )}
            {(currentFlow === 'sizes' || currentFlow === 'returns' || currentFlow === 'delivery') && (
              <BackToMainButton />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot

