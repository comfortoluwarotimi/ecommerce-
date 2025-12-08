import { useState } from 'react'
import reactLogo from './assets/react.svg'
import img1 from './assets/images/image.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/layout/Header'
import Hero from './home/Hero'
import PromoSection from './home/PromoSection'
import CategoryCard from './home/CategoryCard'
import { featuredCategories, products } from './data/product'
import ProductCard from './components/products/ProductCard'
import Footer from './components/layout/Footer'
import Cart from './components/cart/Cart'


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    // <>
    // </>
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} toggleCart={toggleCart} />
      <Hero />

      {/* Featured Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredCategories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Last Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      <PromoSection />
      <Footer />
      
      <Cart
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </div>
  )
}

export default App
