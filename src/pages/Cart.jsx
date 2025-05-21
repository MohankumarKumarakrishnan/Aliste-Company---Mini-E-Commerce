import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useContext(CartContext);

  // Calculate the total price of all items in the cart
  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>

      {/* If cart is empty, show a message */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {/* Render each item in the cart */}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          {/* Display the total price */}
          <p className="mt-4 text-right text-lg font-semibold">
            Total: <span className="text-green-600">${total}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;