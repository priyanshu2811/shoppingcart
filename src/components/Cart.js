import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useContext(CartContext);
  const [removalQuantity, setRemovalQuantity] = useState({});

  const handleIncreaseQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    updateQuantity(productId, item.quantity + 1);
  };

  const handleDecreaseQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    if (item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    }
  };

  const handleRemoveChange = (productId, quantity) => {
    setRemovalQuantity(prevState => ({
      ...prevState,
      [productId]: quantity
    }));
  };

  const handleRemoveFromCart = (productId) => {
    const quantity = removalQuantity[productId] || 1;
    removeFromCart(productId, quantity);
    setRemovalQuantity(prevState => ({
      ...prevState,
      [productId]: 1
    }));
  };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-info">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <span className="cart-item-name">{item.name}</span>
                <div className="cart-item-quantity">
                  Quantity:
                  <button onClick={() => handleDecreaseQuantity(item.id)} className="quantity-button">-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    readOnly
                    className="quantity-input"
                  />
                  <button onClick={() => handleIncreaseQuantity(item.id)} className="quantity-button">+</button>
                </div>
                <span className="cart-item-price">Price: ${item.price * item.quantity}</span>
                <div className="cart-item-remove">
                  Remove Quantity:
                  <input
                    type="number"
                    value={removalQuantity[item.id] || 1}
                    min="1"
                    max={item.quantity}
                    onChange={(e) => handleRemoveChange(item.id, Number(e.target.value))}
                    className="remove-quantity-input"
                  />
                  <button onClick={() => handleRemoveFromCart(item.id)} className="remove-button">Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h2 className="total-price">Total Price: ${totalPrice}</h2>
      <button onClick={clearCart} className="checkout-button">Checkout</button>
    </div>
  );
};

export default Cart;