import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductList.css';

const allProducts = [
  { id: 1, name: 'Face Serum', price: 10, image: 'https://plus.unsplash.com/premium_photo-1669735916387-24340468a65c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8MTUwKjE1MCUyMHByb2R1Y3RzfGVufDB8fDB8fHww', category: 'Category 1' },
  { id: 2, name: 'Baby Cream', price: 20, image: 'https://images.unsplash.com/photo-1617858123189-b26eb62d8eb4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fDE1MCoxNTAlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D', category: 'Category 2' },
  { id: 3, name: 'Medicine', price: 30, image: 'https://images.unsplash.com/photo-1576073218292-976931ec70ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fDE1MCoxNTAlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D', category: 'Category 1' },
  { id: 4, name: 'Glass Box', price: 40, image: 'https://images.unsplash.com/photo-1651540589735-12cffa044899?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fDE1MCoxNTAlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D', category: 'Category 3' },
  { id: 5, name: '350 mm Lens', price: 50, image: 'https://images.unsplash.com/photo-1633346702973-f0c774e6a473?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fDE1MCoxNTAlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D', category: 'Category 2' },
  { id: 6, name: 'Head Band', price: 60, image: 'https://images.unsplash.com/photo-1634283715079-d91bbed0ece0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fDE1MCoxNTAlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D', category: 'Category 1' },
  { id: 7, name: 'AirPlane Toy', price: 70, image: 'https://images.unsplash.com/photo-1695927521778-6e0579cbe9ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHwxNTAqMTUwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', category: 'Category 3' },
  { id: 8, name: 'Kesar', price: 80, image: 'https://images.unsplash.com/photo-1643471672168-f4a4b6cfa440?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHwxNTAqMTUwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', category: 'Category 2' },
  { id: 9, name: 'Shoes', price: 90, image: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHwxNTAqMTUwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', category: 'Category 1' },
  { id: 10, name: 'IPhone Cover', price: 75, image: 'https://images.unsplash.com/photo-1609949000187-fe55a0dd6af7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHwxNTAqMTUwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', category: 'Category 3' },
  { id: 11, name: 'Cloe Lotion', price: 95, image: 'https://images.unsplash.com/photo-1669971622768-10c3f0dfeded?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMyfHwxNTAqMTUwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', category: 'Category 3' },
  { id: 12, name: 'Study Lamp', price: 100, image: 'https://images.unsplash.com/photo-1632930271509-f859f8c614f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM3fHwxNTAqMTUwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', category: 'Category 1' },
  { id: 13, name: 'Wool', price: 60, image: 'https://images.unsplash.com/photo-1633367092521-ca95d1e14572?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTU2fHwxNTAqMTUwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', category: 'Category 2' },
  { id: 14, name: 'Watch Strap', price: 50, image: 'https://images.unsplash.com/photo-1671784180673-56b4b0910c4d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjA1fHwxNTAqMTUwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', category: 'Category 3' },
  { id: 15, name: 'Bronze Scissor', price: 30, image: 'https://images.unsplash.com/photo-1672611496583-9ba509bf0d27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjQ1fHwxNTAqMTUwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', category: 'Category 1' },
  { id: 16, name: 'KeyBoard', price: 60, image: 'https://images.unsplash.com/photo-1655176471544-34192a963fe2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjgxfHwxNTAqMTUwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', category: 'Category 3' },
  { id: 17, name: 'Polaroid', price: 70, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzIzfHwxNTAqMTUwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', category: 'Category 2' },
  { id: 18, name: 'Coca Cola', price: 100, image: 'https://images.unsplash.com/photo-1625138644438-47f3b3c66880?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODkzfHwxNTAqMTUwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', category: 'Category 1' },
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