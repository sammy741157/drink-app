import React from 'react';
import './Order.css';

const Order = ({ cartItems, onOrderSubmit }) => {
  const handleOrder = () => {
    onOrderSubmit(cartItems);
  };

  return (
    <div className="order-container">
      <h2>Place Order</h2>
      {cartItems.length === 0 ? (
        <p>You have no items in your cart to order.</p>
      ) : (
        <div>
          <ul className="order-list">
            {cartItems.map((item, idx) => (
              <li key={idx}>{item.name} - ${item.price}</li>
            ))}
          </ul>
          <button onClick={handleOrder}>Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default Order;
