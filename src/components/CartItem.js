import React, { useState } from 'react';
import './CartItem.css';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  const [removeQuantity, setRemoveQuantity] = useState(1);

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0) {
      updateQuantity(item.id, quantity);
    }
  };

  const handleRemoveIncrement = () => {
    if (removeQuantity < item.quantity) {
      setRemoveQuantity(removeQuantity + 1);
    }
  };

  const handleRemoveDecrement = () => {
    if (removeQuantity > 1) {
      setRemoveQuantity(removeQuantity - 1);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(item.id, removeQuantity);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement} className="quantity-button">-</button>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={handleQuantityChange}
          />
          <button onClick={handleIncrement} className="quantity-button">+</button>
        </div>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
        <div className="remove-controls">
          <button onClick={handleRemoveDecrement} className="quantity-button">-</button>
          <input
            type="number"
            value={removeQuantity}
            min="1"
            max={item.quantity}
            readOnly
          />
          <button onClick={handleRemoveIncrement} className="quantity-button">+</button>
          <button onClick={handleRemoveClick}>Remove Selected Quantity</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;