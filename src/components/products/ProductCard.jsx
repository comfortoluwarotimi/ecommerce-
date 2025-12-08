const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition group">
      <div className="bg-gray-100 p-8 flex items-center justify-center h-48">
        <span className="text-7xl">{product.image}</span>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-semibold">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition opacity-0 group-hover:opacity-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;