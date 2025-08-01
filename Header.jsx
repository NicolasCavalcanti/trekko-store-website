import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  ChevronDown
} from 'lucide-react'
import { useCart } from '../context/CartContext'
import TrekkoLogo from '../assets/images/logo/trekko_logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false)
  const { getItemCount } = useCart()

  const collections = [
    { name: 'Esportes Outdoor', slug: 'esportes-outdoor' },
    { name: 'Trilhas com Pets', slug: 'trilhas-pets' },
    { name: 'Canicross', slug: 'canicross' },
    { name: 'Camping e Aventura', slug: 'camping-aventura' },
    { name: 'Acessórios Pet', slug: 'acessorios-pet' }
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={TrekkoLogo} alt="Trekko Store Logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">Trekko Store</span>
              <span className="text-xs text-muted-foreground">Explore mais. Viva livre.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
            
            {/* Collections Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Coleções
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isCollectionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border rounded-lg shadow-lg py-2 z-50">
                  {collections.map((collection) => (
                    <Link
                      key={collection.slug}
                      to={`/colecoes/${collection.slug}`}
                      className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      {collection.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/ajuda/contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 text-foreground" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-foreground" />
            </Button>
            
            <Link to="/carrinho">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5 text-foreground" />
                {getItemCount() > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {getItemCount()}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              
              {/* Mobile Collections */}
              <div>
                <span className="text-foreground font-medium">Coleções</span>
                <div className="ml-4 mt-2 space-y-2">
                  {collections.map((collection) => (
                    <Link
                      key={collection.slug}
                      to={`/colecoes/${collection.slug}`}
                      className="block text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {collection.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/blog" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/ajuda/contato" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

