
import React from 'react';
import type { CartItem } from '../../types';

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onNavigate: (page: string) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onUpdateQuantity, onRemoveItem, onNavigate }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-off-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-green text-center mb-12">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-dark-gray mb-8">Your cart is currently empty.</p>
            <button 
              onClick={() => onNavigate('shop')}
              className="bg-terracotta text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Cart Header */}
              <div className="hidden md:grid grid-cols-6 gap-4 items-center font-bold text-dark-gray border-b pb-4 mb-4">
                <div className="col-span-3">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Total</div>
              </div>

              {/* Cart Items */}
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center border-b pb-4">
                    {/* Product Info */}
                    <div className="col-span-1 md:col-span-3 flex items-center gap-4">
                      <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                      <div>
                        <p className="font-bold text-dark-gray">{item.name}</p>
                        <button onClick={() => onRemoveItem(item.id)} className="text-sm text-red-500 hover:underline">Remove</button>
                      </div>
                    </div>
                    {/* Price */}
                    <div className="text-left md:text-center text-dark-gray">
                      <span className="md:hidden font-bold">Price: </span>
                      ${item.price.toFixed(2)}
                    </div>
                    {/* Quantity */}
                    <div className="text-left md:text-center">
                       <span className="md:hidden font-bold mr-2">Quantity: </span>
                      <input 
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))}
                        className="w-16 text-center border rounded-md"
                      />
                    </div>
                    {/* Total */}
                    <div className="text-left md:text-right font-bold text-dark-gray">
                       <span className="md:hidden">Total: </span>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="mt-8 flex flex-col items-end">
                <div className="text-xl font-bold">
                  <span className="text-dark-gray">Subtotal: </span>
                  <span className="text-forest-green">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-gray-500 text-sm my-2">Shipping & taxes calculated at checkout.</p>
                <button className="bg-forest-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 mt-4">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
