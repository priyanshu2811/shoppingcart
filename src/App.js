import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider, CartContext } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const Navigation = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <Link to="/">Product List</Link> | 
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;