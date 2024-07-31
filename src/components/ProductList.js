import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductList.css';

const allProducts = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150', category: 'Category 1' },
  { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150', category: 'Category 2' },
  { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150', category: 'Category 1' },
  { id: 4, name: 'Product 4', price: 40, image: 'https://via.placeholder.com/150', category: 'Category 3' },
  { id: 5, name: 'Product 5', price: 50, image: 'https://via.placeholder.com/150', category: 'Category 2' },
  { id: 6, name: 'Product 6', price: 60, image: 'https://via.placeholder.com/150', category: 'Category 1' },
  { id: 7, name: 'Product 7', price: 70, image: 'https://via.placeholder.com/150', category: 'Category 3' },
  { id: 8, name: 'Product 8', price: 80, image: 'https://via.placeholder.com/150', category: 'Category 2' },
  { id: 9, name: 'Product 9', price: 90, image: 'https://via.placeholder.com/150', category: 'Category 1' },
  { id: 10, name: 'Product 10', price: 75, image: 'https://via.placeholder.com/150', category: 'Category 1' },
  { id: 11, name: 'Product 11', price: 95, image: 'https://via.placeholder.com/150', category: 'Category 1' },
  { id: 12, name: 'Product 12', price: 100, image: 'https://via.placeholder.com/150', category: 'Category 1' },
  { id: 13, name: 'Product 13', price: 60, image: 'https://via.placeholder.com/150', category: 'Category 1' },
  { id: 14, name: 'Product 14', price: 50, image: 'https://via.placeholder.com/150', category: 'Category 1' },
  { id: 15, name: 'Product 15', price: 30, image: 'https://via.placeholder.com/150', category: 'Category 1' },
  { id: 16, name: 'Product 16', price: 60, image: 'https://via.placeholder.com/150', category: 'Category 1' },
  { id: 17, name: 'Product 17', price: 70, image: 'https://via.placeholder.com/150', category: 'Category 1' },
  { id: 18, name: 'Product 18', price: 100, image: 'https://via.placeholder.com/150', category: 'Category 1' },
];

const categories = ['All', ...new Set(allProducts.map(product => product.category))];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="product-list-container">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="category-select"
      >
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h4 className="product-name">{product.name}</h4>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;