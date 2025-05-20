import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p className="mt-4 text-right text-lg font-semibold">
            Total: <span className="text-green-600">${total}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;