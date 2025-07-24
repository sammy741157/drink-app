import React from 'react';
import DrinkCard from './DrinkCard';
import Cart from './Cart';
import Order from './Order';

const UserDashboard = ({ drinks, cartItems, onAddToCart, onRemoveFromCart, onOrderSubmit }) => {
  return (
    <div className="user-dashboard">
      <h2>Available Drinks</h2>
      <div className="drink-list">
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} onAddToCart={onAddToCart} />
        ))}
      </div>

      <Cart cartItems={cartItems} onRemove={onRemoveFromCart} />
      <Order cartItems={cartItems} onOrderSubmit={onOrderSubmit} />
    </div>
  );
};

export default UserDashboard;
