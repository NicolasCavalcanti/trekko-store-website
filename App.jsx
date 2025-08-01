import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Product from './pages/Product'
import ProductOptimized from './pages/ProductOptimized'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import SizeGuide from './pages/SizeGuide'
import Returns from './pages/Returns'
import DeliveryPolicy from './pages/DeliveryPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import Chatbot from './components/Chatbot'
import './App.css'

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
        </Routes>
        <Chatbot />
      </Router>
    </CartProvider>
  )
}

export default App
