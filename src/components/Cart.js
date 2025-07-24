import React from 'react';
import './Cart.css';

const Cart = ({ cartItems=[], onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>
              <button onClick={() => onRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default Cart;

