import React from 'react';
import AddDrinkForm from './AddDrinkForm';
import DrinkCard from './DrinkCard';

const AdminDashboard = ({ drinks, onAddDrink }) => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Panel</h2>
      <AddDrinkForm onAddDrink={onAddDrink} />
      
      <h3>Current Drinks</h3>
      <div className="drink-list">
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} onAddToCart={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;