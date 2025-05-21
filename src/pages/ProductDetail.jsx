import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../utils/api';
import CartContext from '../context/CartContext';
const ProductDetail = () => {
  // Get the product ID from the URL
  const { id } = useParams();

  // State to store the fetched product details
  const [product, setProduct] = useState(null);

  // Access dispatch from CartContext
  const { dispatch } = useContext(CartContext);

  // Fetch product details when component loads or when ID changes
  useEffect(() => {
    fetchProduct(id).then(setProduct);
  }, [id]);

  // Show loading message while product is being fetched
  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Product image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-80 object-contain mx-auto"
      />

      <div>
        {/* Product title */}
        <h1 className="text-xl font-bold mb-2">{product.title}</h1>

        {/* Product description */}
        <p className="mb-2">{product.description}</p>

        {/* Product price */}
        <p className="font-bold text-green-600 text-lg mb-2">${product.price}</p>

        {/* Product rating and count */}
        <p className="mb-1">
          Rating: {product.rating.rate}⭐ <span> ({product.rating.count}) </span>
        </p>

        {/* Add to Cart button */}
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


export default ProductDetail;