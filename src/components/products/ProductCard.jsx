import { Check, Plus } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await onAddToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group">
      <div className="bg-gray-100 p-8 flex items-center justify-center h-48 relative">
        {/* Corrected image rendering */}
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="text-6xl" 
        />
        {/* Display stock information */}
        {product.stock < 10 && product.stock > 0 && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            Only {product.stock} left
          </span>
        )}
        {product.stock === 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase mb-1">{product.category.name}</p> {/* Access category.name */}
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold text-xl">${product.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            disabled={product.stock === 0 || isAdding}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isAdding ? (
              <>
                <Check size={16} />
                <span>Added!</span>
              </>
            ) : (
              <>
                <Plus size={16} />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
