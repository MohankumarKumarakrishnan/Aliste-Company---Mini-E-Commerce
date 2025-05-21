import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

// Component to display a single item in the shopping cart
const CartItem = ({ item }) => {
  // Access the dispatch function from CartContext to update cart state
  const { dispatch } = useContext(CartContext);

  // Function to handle quantity change of the item
  const updateQuantity = (e) => {
    dispatch({
      type: 'UPDATE_QUANTITY', // Action type for updating quantity
      payload: {
        id: item.id, // ID of the item to be updated
        quantity: parseInt(e.target.value) // New quantity from input field
      },
    });
  };

  // JSX to render the cart item layout
  return (
    <div className="flex justify-between items-center p-4 border-b">
      {/* Left section with image and item info */}
      <div className="flex items-center gap-4">
        <img
          src={item.image} // Product image
          alt={item.title} // Alt text for accessibility
          className="h-16 w-16 object-contain"
        />
        <div>
          <h4 className="font-medium">{item.title}</h4> {/* Product title */}
          <p>${item.price} x {item.quantity}</p> {/* Price and quantity */}
        </div>
      </div>
      
      {/* Quantity input field */}
      <input
        type="number"
        value={item.quantity} // Current quantity
        onChange={updateQuantity} // Call updateQuantity on change
        className="border w-16 text-center"
        min="1" // Minimum quantity is 1
      />
    </div>
  );
};

export default CartItem; 
