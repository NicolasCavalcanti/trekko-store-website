import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  Copy
} from 'lucide-react'
import { getPostBySlug, getRelatedPosts } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [isLiked, setIsLiked] = useState(false)
  const [shareMenuOpen, setShareMenuOpen] = useState(false)

  useEffect(() => {
    const postData = getPostBySlug(slug)
    setPost(postData)

    if (postData) {
      const related = getRelatedPosts(postData)
      setRelatedPosts(related)
    }
  }, [slug])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Artigo não encontrado</h2>
          <p className="text-gray-600 mb-8">O artigo que você está procurando não existe.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleShare = (platform) => {
    const url = window.location.href
    const title = post.title
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        alert('Link copiado para a área de transferência!')
        break
    }
    setShareMenuOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Início</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Blog
              </Button>
            </Link>

            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <div>
                  <span className="font-medium text-gray-900">{post.author}</span>
                  <p className="text-sm">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant={isLiked ? 'default' : 'outline'}
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`mr-2 h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? 'Curtido' : 'Curtir'}
              </Button>
              
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShareMenuOpen(!shareMenuOpen)}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartilhar
                </Button>
                
                {shareMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg p-2 z-10">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => handleShare('facebook')}
                    >
                      <Facebook className="mr-2 h-4 w-4" />
                      Facebook
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => handleShare('twitter')}
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => handleShare('linkedin')}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => handleShare('copy')}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copiar Link
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6}\s/g, match => {
                    const level = match.trim().length
                    return `<h${level} class="text-${4-level}xl font-bold mt-8 mb-4 text-gray-900">`
                  }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-4">{post.authorRole}</p>
                    <p className="text-gray-700">
                      Especialista em aventuras outdoor com pets, compartilhando conhecimento e 
                      experiências para ajudar outros aventureiros a viverem momentos incríveis 
                      com seus companheiros de quatro patas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Artigos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-secondary text-white">
                        {relatedPost.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{formatDate(relatedPost.publishedAt)}</span>
                        <Clock className="h-4 w-4 ml-4 mr-2" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <h3 className="text-lg font-semibold mb-3 hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </Link>
                      <p className="text-gray-700 mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" size="sm">
                          Ler artigo
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Gostou do Artigo?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore nossa loja e encontre os melhores equipamentos para suas aventuras outdoor com pets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/colecoes/esportes-outdoor">
              <Button variant="secondary" size="lg">
                Ver Equipamentos
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                Mais Artigos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

