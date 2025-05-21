import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar displayed on all pages */}
      <Navbar />

      {/* Define the routes for the app */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* Product detail page route with dynamic product ID */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Cart page route */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;