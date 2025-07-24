import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

const App = () => {
  const [drinks, setDrinks] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/drinks')
      .then(res => res.json())
      .then(data => setDrinks(data));
  }, []);

  const handleAddToCart = (drink) => {
    setCartItems([...cartItems, drink]);

    fetch('http://localhost:3001/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(drink),
    });
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    const removedItem = updatedCart.splice(index, 1)[0];
    setCartItems(updatedCart);

    fetch(`http://localhost:3001/cart/${removedItem.id}`, {
      method: 'DELETE',
    });
  };

  const handleAddDrink = (newDrink) => {
    fetch('http://localhost:3001/drinks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDrink),
    })
      .then(res => res.json())
      .then(addedDrink => setDrinks([...drinks, addedDrink]));
  };

  const handleOrderSubmit = (items) => {
    fetch('http://localhost:3001/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });

    setCartItems([]);
    alert('Order placed!');
  };

  return (
    <Router>
      <div className="app-container">
        <h1>Drink App </h1>

        <nav className="nav-links">
          <Link to="/">User View</Link> | <Link to="/admin">Admin View</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <UserDashboard
                drinks={drinks}
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                onOrderSubmit={handleOrderSubmit}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <AdminDashboard
                drinks={drinks}
                onAddDrink={handleAddDrink}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;