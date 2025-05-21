import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import CartContext from '../context/CartContext'; // Importing cart context

const Navbar = () => {
  // Getting the current cart state from context
  const { cart } = useContext(CartContext);

  
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">E-Shop</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
};

export default Navbar;