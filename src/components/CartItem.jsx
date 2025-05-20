import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  const updateQuantity = (e) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: item.id, quantity: parseInt(e.target.value) },
    });
  };

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
        <div>
          <h4 className="font-medium">{item.title}</h4>
          <p>${item.price} x {item.quantity}</p>
        </div>
      </div>
      <input
        type="number"
        value={item.quantity}
        onChange={updateQuantity}
        className="border w-16 text-center"
        min="1"
      />
    </div>
  );
};

export default CartItem;