import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Trekko Store</span>
            </div>
            <p className="text-muted-foreground">
              Equipamentos e acessórios para aventuras outdoor com seu melhor amigo de quatro patas.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ajuda</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ajuda/guia-tamanhos" className="text-muted-foreground hover:text-primary transition-colors">
                  Guia de Tamanhos
                </Link>
              </li>
              <li>
                <Link to="/ajuda/trocas-devolucoes" className="text-muted-foreground hover:text-primary transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link to="/ajuda/politica-entrega" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Entrega
                </Link>
              </li>
              <li>
                <Link to="/ajuda/contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Coleções</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/colecoes/esportes-outdoor" className="text-muted-foreground hover:text-primary transition-colors">
                  Esportes Outdoor
                </Link>
              </li>
              <li>
                <Link to="/colecoes/trilhas-pets" className="text-muted-foreground hover:text-primary transition-colors">
                  Trilhas com Pets
                </Link>
              </li>
              <li>
                <Link to="/colecoes/canicross" className="text-muted-foreground hover:text-primary transition-colors">
                  Canicross
                </Link>
              </li>
              <li>
                <Link to="/colecoes/camping-aventura" className="text-muted-foreground hover:text-primary transition-colors">
                  Camping e Aventura
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-muted-foreground">
              Receba dicas de aventura e ofertas exclusivas
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Seu e-mail"
                className="bg-card border-border text-foreground placeholder-muted-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Trekko Store. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/politicas/termos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Termos de Uso
            </Link>
            <Link to="/politicas/privacidade" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/ajuda/trocas-devolucoes" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Política de Devolução
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


