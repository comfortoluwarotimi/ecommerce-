import { Check, Package,X } from "lucide-react";
import { useState } from "react";

const CheckoutModal = ({ isOpen, onClose, cartItems, total, onConfirm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit_card'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.address || !formData.city || !formData.zipCode) {
      alert('Please fill in all fields');
      return;
    }

    setIsProcessing(true);
    try {
      await onConfirm(formData);
      setOrderComplete(true);
      setTimeout(() => {
        setOrderComplete(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          address: '',
          city: '',
          zipCode: '',
          paymentMethod: 'credit_card'
        });
      }, 3000);
    } catch (error) {
      alert('Order failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  if (orderComplete) {
    return (
      <>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-4">Thank you for your purchase. Your order has been placed successfully.</p>
            <Package size={48} className="mx-auto text-gray-400" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl p-8 max-w-2xl w-full my-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Checkout</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
              <select
                value={formData.paymentMethod}
                onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="credit_card">Credit Card</option>
                <option value="debit_card">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Cash on Delivery</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="space-y-1 text-sm">
              {cartItems.map(item => (
                <div key={item.product._id} className="flex justify-between">
                  <span>{item.product.name} x{item.quantity}</span>
                  <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>Total</span>
                <span className="text-blue-600">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isProcessing}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:bg-gray-400"
          >
            {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;