import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const reducer = (state, action) => {
  switch (action.type) {
    // Adds a product to the cart
    case 'ADD_TO_CART': {
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        // If item already exists, increase its quantity
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }

    // Updates the quantity of a specific item
    case 'UPDATE_QUANTITY': {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    }

    // Removes an item from the cart
    case 'REMOVE_ITEM': {
      return state.filter((item) => item.id !== action.payload);
    }

    // Default case returns the current state
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    // Providing cart and dispatch function to children components
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;