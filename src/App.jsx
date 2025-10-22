import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Theme toggle (optional floating button) */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
        <ThemeToggle />
      </div>

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
