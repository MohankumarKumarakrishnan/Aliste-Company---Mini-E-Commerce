import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="border p-4 rounded shadow hover:shadow-md">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
      <h2 className="mt-2 text-sm font-semibold">{product.title}</h2>
      <p className="text-green-600 font-bold">${product.price}</p>
      <p className="text-yellow-500">Rating: {product.rating.rate}⭐</p>
    </Link>
  );
};

export default ProductCard;