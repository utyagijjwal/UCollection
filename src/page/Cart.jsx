import React from 'react';
import { useCart } from '../contexts/CartContext'; // Correct relative path

const Cart = () => {
  const { cartItems, removeItemFromCart, updateItemQuantity } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (isNaN(newQuantity) || newQuantity <= 0) {
      return; // Ignore invalid input
    }
    updateItemQuantity(id, parseInt(newQuantity, 10));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            <p>Your cart is empty</p>
            <p className="mt-4">Start adding items to your cart to see them here.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex bg-white shadow-lg rounded-lg p-6 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-md"
                />
                <div className="ml-6 flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600 mt-1">Price: ${item.price}</p>
                  <div className="flex items-center mt-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="w-20 px-2 py-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      className="ml-4 text-red-600 hover:text-red-800"
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-10 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Total: ${totalAmount.toFixed(2)}</h2>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
