import React from 'react';
import './DrinkCard.css';

const DrinkCard = ({ drink, onAddToCart }) => {
  return (
    <div className="drink-card">
      <img src={drink.image} alt={drink.name} className="drink-image" />
      <h2 className="drink-title">{drink.name}</h2>
      <p className="drink-description">{drink.description}</p>
      <p className="drink-price">${drink.price}</p>
      <button 
        className="add-to-cart-button"
        onClick={() => onAddToCart(drink)}>
        Add to Cart
      </button>
    </div>
  );
};

export default DrinkCard;

