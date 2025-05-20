import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../utils/api';
import CartContext from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    fetchProduct(id).then(setProduct);
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <img src={product.image} alt={product.title} className="h-80 object-contain mx-auto" />
      <div>
        <h1 className="text-xl font-bold mb-2">{product.title}</h1>
        <p className="mb-2">{product.description}</p>
        <p className="font-bold text-green-600 text-lg mb-2">${product.price}</p>
        <p className="mb-1">Rating: {product.rating.rate}⭐</p>
        <p className="mb-4">({product.rating.count} reviews)</p>
        <button
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;