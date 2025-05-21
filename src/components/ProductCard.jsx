import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    // Clickable card linking to the product details page using the product ID
    <Link to={`/product/${product.id}`} className="border p-4 rounded shadow hover:shadow-md">
      
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto"
      />

      {/* Product title */}
      <h2 className="mt-2 text-sm font-semibold">{product.title}</h2>

      {/* Product price */}
      <p className="text-green-600 font-bold">${product.price}</p>

      {/* Product rating */}
      <p className="text-yellow-500">Rating: {product.rating.rate}⭐</p>
    </Link>
  );
};

export default ProductCard;