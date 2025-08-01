import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react'
import ProductCard from './ProductCard'
import { getProductsByCategory, categories } from './products'

export default function Collection() {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [priceRange, setPriceRange] = useState('all')
  const [currentCategory, setCurrentCategory] = useState(null)

  useEffect(() => {
    // Encontrar categoria atual
    const categoryData = categories.find(cat => cat.slug === category)
    setCurrentCategory(categoryData)

    // Buscar produtos da categoria
    let categoryProducts = []
    
    switch(category) {
      case 'esportes-outdoor':
        categoryProducts = getProductsByCategory('Esportes Outdoor')
        break
      case 'trilhas-pets':
        categoryProducts = getProductsByCategory('Trilhas')
        break
      case 'canicross':
        categoryProducts = getProductsByCategory('Canicross')
        break
      case 'camping-aventura':
        categoryProducts = getProductsByCategory('Camping')
        break
      case 'acessorios-pet':
        categoryProducts = getProductsByCategory('Acessórios')
        break
      default:
        categoryProducts = []
    }

    setProducts(categoryProducts)
    setFilteredProducts(categoryProducts)
  }, [category])

  useEffect(() => {
    let filtered = [...products]

    // Filtro por preço
    if (priceRange !== 'all') {
      filtered = filtered.filter(product => {
        const price = parseFloat(product.price.replace('R$ ', '').replace(',', '.'))
        switch(priceRange) {
          case 'under-100':
            return price < 100
          case '100-300':
            return price >= 100 && price <= 300
          case '300-500':
            return price >= 300 && price <= 500
          case 'over-500':
            return price > 500
          default:
            return true
        }
      })
    }

    // Ordenação
    switch(sortBy) {
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('R$ ', '').replace(',', '.'))
          const priceB = parseFloat(b.price.replace('R$ ', '').replace(',', '.'))
          return priceA - priceB
        })
        break
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('R$ ', '').replace(',', '.'))
          const priceB = parseFloat(b.price.replace('R$ ', '').replace(',', '.'))
          return priceB - priceA
        })
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews)
        break
      default:
        // Manter ordem original (featured)
        break
    }

    setFilteredProducts(filtered)
  }, [products, sortBy, priceRange])

  if (!currentCategory) {
    return <div>Categoria não encontrada</div>
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${currentCategory.image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {currentCategory.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {currentCategory.description}
          </p>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                {filteredProducts.length} produtos encontrados
              </span>
              <Badge variant="outline">
                {currentCategory.name}
              </Badge>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              {/* Price Filter */}
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filtrar por preço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os preços</SelectItem>
                  <SelectItem value="under-100">Até R$ 100</SelectItem>
                  <SelectItem value="100-300">R$ 100 - R$ 300</SelectItem>
                  <SelectItem value="300-500">R$ 300 - R$ 500</SelectItem>
                  <SelectItem value="over-500">Acima de R$ 500</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Em destaque</SelectItem>
                  <SelectItem value="price-low">Menor preço</SelectItem>
                  <SelectItem value="price-high">Maior preço</SelectItem>
                  <SelectItem value="rating">Melhor avaliação</SelectItem>
                  <SelectItem value="reviews">Mais avaliações</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">Nenhum produto encontrado</h3>
              <p className="text-gray-600 mb-8">
                Tente ajustar os filtros ou explore outras categorias
              </p>
              <Button onClick={() => {
                setSortBy('featured')
                setPriceRange('all')
              }}>
                Limpar Filtros
              </Button>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Category Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Por que escolher {currentCategory.name}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Filter className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Qualidade Testada</h3>
                  <p className="text-gray-600">
                    Todos os produtos são testados por especialistas e veterinários
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SlidersHorizontal className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Variedade</h3>
                  <p className="text-gray-600">
                    Ampla seleção de produtos para diferentes necessidades
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Grid className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Suporte Especializado</h3>
                  <p className="text-gray-600">
                    Equipe especializada para ajudar na escolha ideal
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

