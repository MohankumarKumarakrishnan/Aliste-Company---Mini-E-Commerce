import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // State to hold the list of products
  const [products, setProducts] = useState([]);

  // Fetch products from the API when the component mounts
  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {/* Render each product as a ProductCard */}
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Home;