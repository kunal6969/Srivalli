
import React from 'react';
import type { CartItem, MenuItem } from '../types';

interface CartProps {
  cartItems: CartItem[];
  onRemoveFromCart: (itemId: number) => void;
  onAddToCart: (item: MenuItem) => void;
  onClearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart, onAddToCart, onClearCart }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = subtotal * 0.05; // 5% tax
  const total = subtotal + taxes;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg sticky top-28">
      <h3 className="text-2xl font-bold text-brand-green mb-4 border-b pb-2">Your Order</h3>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onRemoveFromCart(item.id)} className="w-6 h-6 rounded-full bg-gray-200 text-gray-700">-</button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button onClick={() => onAddToCart(item)} className="w-6 h-6 rounded-full bg-gray-200 text-gray-700">+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
             <div className="flex justify-between text-gray-600">
              <span>Taxes (5%)</span>
              <span>₹{taxes.toFixed(2)}</span>
            </div>
             <div className="flex justify-between font-bold text-lg text-brand-green">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-brand-saffron text-white font-semibold py-3 rounded-full hover:bg-opacity-90 transition-colors">
            Proceed to Checkout
          </button>
          <button onClick={onClearCart} className="w-full mt-2 text-sm text-gray-500 hover:text-red-600">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
