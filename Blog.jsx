import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Filter
} from 'lucide-react'
import { blogPosts, getFeaturedPosts, blogCategories } from '../data/blog'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const featuredPosts = getFeaturedPosts()

  const handleSearch = (term) => {
    setSearchTerm(term)
    filterPosts(term, selectedCategory)
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    filterPosts(searchTerm, category)
  }

  const filterPosts = (search, category) => {
    let filtered = blogPosts

    if (category !== 'Todos') {
      filtered = filtered.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
      )
    }

    if (search) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Blog Trekko
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Dicas, guias e histórias de aventuras outdoor com pets. 
            Tudo o que você precisa saber para viver experiências incríveis com seu companheiro.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Buscar artigos, dicas, equipamentos..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Artigos em Destaque</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-secondary text-white">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(post.publishedAt)}</span>
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-gray-400" />
                        <div>
                          <span className="text-sm font-medium">{post.author}</span>
                          <p className="text-xs text-gray-600">{post.authorRole}</p>
                        </div>
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm">
                          Ler mais
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filtrar por categoria:</span>
            </div>
            {blogCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              {selectedCategory === 'Todos' ? 'Todos os Artigos' : `Categoria: ${selectedCategory}`}
            </h2>
            <span className="text-gray-600">
              {filteredPosts.length} artigo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">Nenhum artigo encontrado</h3>
              <p className="text-gray-600 mb-8">
                Tente ajustar sua busca ou explorar outras categorias
              </p>
              <Button onClick={() => {
                setSearchTerm('')
                setSelectedCategory('Todos')
                setFilteredPosts(blogPosts)
              }}>
                Ver Todos os Artigos
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-secondary text-white">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(post.publishedAt)}</span>
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-semibold mb-3 hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm">
                          Ler mais
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Não Perca Nenhuma Aventura!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Receba nossos artigos mais recentes, dicas exclusivas e ofertas especiais 
            diretamente no seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="bg-white text-gray-900"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Inscrever-se
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

