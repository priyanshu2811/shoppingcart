import React, { useContext } from 'react';
import Product from './Product';
import { CartContext } from '../context/CartContext';
import './ProductList.css';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
  // Add more products as needed
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;