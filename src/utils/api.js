// Fetches all products from the fake store API
export const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return await res.json(); // Parses the response as JSON
};

// Fetches a single product by ID from the API
export const fetchProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json(); // Parses the response as JSON
};
