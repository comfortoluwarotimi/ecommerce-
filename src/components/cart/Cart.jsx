import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";

const CartSidebar = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + tax + shipping;

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.product._id} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
                  <div className="bg-white p-2 rounded text-3xl">{item.product.image}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">${item.product.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product._id, Math.max(1, item.quantity - 1))}
                        className="p-1 border border-gray-300 rounded hover:bg-gray-100"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product._id, item.quantity + 1)}
                        className="p-1 border border-gray-300 rounded hover:bg-gray-100"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => onRemoveItem(item.product._id)}
                      className="text-red-500 hover:text-red-700 mt-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>Total</span>
                <span className="text-blue-600">${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;