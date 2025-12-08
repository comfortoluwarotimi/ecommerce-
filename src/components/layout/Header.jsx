import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";

const Header = ({ cartCount, toggleCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">SOCIETY</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
              Shop <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded">Hot</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Featured</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Pages</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Blogs</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-gray-900 relative" onClick={toggleCart}>
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <Heart size={20} />
            </button>
            <button className="hidden md:block text-gray-700 hover:text-gray-900">
              <User size={20} />
            </button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Shop</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Featured</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Pages</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Blogs</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;