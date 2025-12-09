import CheckoutModal from "./components/cart/CheckoutModal";
import CartSidebar from "./components/cart/Cart";
import ProductCard from "./components/products/ProductCard";
import Header from "./components/layout/Header";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    loadProducts();
  }, [searchQuery, selectedCategory]);

  const loadInitialData = async () => {
    setLoading(true);
    const [productsData, categoriesData,cartData] = await Promise.all([
      api.getProducts(),
      api.getCategories(),
      api.getCart()
    ]);
    setProducts(productsData);
    setCategories(categoriesData);
    setCartItems(cartData);

    setLoading(false);
  };

  const loadProducts = async () => {
    const productsData = await api.getProducts(searchQuery, selectedCategory);
    setProducts(productsData);
  };

  const loadCart = async () => {
    const cartData = await api.getCart();
    setCartItems(cartData);
  }

  const addToCart = (product) => {
    loadCart();
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.product._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.product._id !== productId));
  };

  const handleCheckout = async (formData) => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const shipping = 10;
    const total = subtotal + tax + shipping;

    const orderData = {
      user: '507f1f77bcf86cd799439011', 
      items: cartItems.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.price
      })),
      totalAmount: total,
      shippingAddress: {
        street: formData.address,
        city: formData.city,
        zipCode: formData.zipCode,
        country: 'USA'
      },
      paymentMethod: formData.paymentMethod
    };

    await api.createOrder(orderData);
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item?.product?.price * item.quantity), 0) + 10 + (cartItems.reduce((sum, item) => sum + (item?.product?.price * item.quantity), 0) * 0.1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === '' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Products
            </button>
            {categories.map(cat => (
              <button
                key={cat._id}
                onClick={() => setSelectedCategory(cat.name.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === cat.name.toLowerCase()
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <Search size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </main>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        refetch={loadCart}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        total={cartTotal}
        onConfirm={handleCheckout}
      />
    </div>
  );
}