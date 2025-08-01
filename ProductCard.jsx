import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Heart, ShoppingCart } from 'lucide-react'

export default function ProductCard({ product }) {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    reviews,
    badge,
    category,
    description
  } = product

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <Link to={`/produto/${id}`}>
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </Link>
        {badge && (
          <Badge className="absolute top-4 left-4 bg-secondary text-white">
            {badge}
          </Badge>
        )}
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-4 right-4 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute bottom-4 right-4 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-6">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>
        <Link to={`/produto/${id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        {description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({reviews})</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">{originalPrice}</span>
            )}
          </div>
        </div>
        <Button className="w-full bg-secondary hover:bg-secondary/90">
          Comprar Agora
        </Button>
      </CardContent>
    </Card>
  )
}

