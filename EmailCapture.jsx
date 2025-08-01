import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { X, Mail, Gift, Percent } from 'lucide-react'

export default function EmailCapture() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showExitIntent, setShowExitIntent] = useState(false)

  // Simular intenção de saída
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !isSubmitted && !showExitIntent) {
        setShowExitIntent(true)
        setIsVisible(true)
      }
    }

    // Mostrar pop-up após 30 segundos se não foi mostrado
    const timer = setTimeout(() => {
      if (!isSubmitted && !showExitIntent) {
        setIsVisible(true)
      }
    }, 30000)

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [isSubmitted, showExitIntent])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Simular envio para Klaviyo
      console.log('E-mail capturado:', email)
      setIsSubmitted(true)
      
      // Fechar pop-up após 3 segundos
      setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 hover:bg-muted rounded-full"
        >
          <X className="h-4 w-4" />
        </button>
        
        <CardContent className="p-8 text-center">
          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  {showExitIntent ? 'Espere! Não vá embora!' : 'Oferta Especial!'}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {showExitIntent 
                    ? 'Receba 15% de desconto na sua primeira compra!' 
                    : 'Inscreva-se e ganhe 10% de desconto na primeira compra!'
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Percent className="mr-2 h-4 w-4" />
                  Quero Meu Desconto!
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4">
                Ao se inscrever, você concorda em receber e-mails promocionais. 
                Você pode cancelar a qualquer momento.
              </p>
            </>
          ) : (
            <div className="py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-green-600">
                Obrigado!
              </h2>
              <p className="text-muted-foreground">
                Verifique seu e-mail para receber seu código de desconto exclusivo!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

