import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './CartContext'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Collection from './Collection'
import Product from './Product'
import ProductOptimized from './ProductOptimized'
import Blog from './Blog'
import BlogPost from './BlogPost'
import Contact from './Contact'
import Cart from './Cart'
import Checkout from './Checkout'
import SizeGuide from './SizeGuide'
import Returns from './Returns'
import DeliveryPolicy from './DeliveryPolicy'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfUse from './TermsOfUse'
import Chatbot from './Chatbot'
import './App.css'
import Admin from './Admin'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<About />} />
            <Route path="colecoes/:category" element={<Collection />} />
            <Route path="produto/:id" element={<Product />} />
            <Route path="produto-otimizado/:id" element={<ProductOptimized />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="ajuda/contato" element={<Contact />} />
            <Route path="ajuda/guia-tamanhos" element={<SizeGuide />} />
            <Route path="ajuda/trocas-devolucoes" element={<Returns />} />
            <Route path="ajuda/politica-entrega" element={<DeliveryPolicy />} />
            <Route path="politicas/privacidade" element={<PrivacyPolicy />} />
            <Route path="politicas/termos" element={<TermsOfUse />} />
            <Route path="carrinho" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Chatbot />
      </Router>
    </CartProvider>
  )
}

export default App
