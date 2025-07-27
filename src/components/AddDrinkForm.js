import React, { useState } from 'react';
import './AddDrinkForm.css';

const AddDrinkForm = ({ onAddDrink }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDrink(formData);
    setFormData({ name: '', description: '', price: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="add-drink-form">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Drink Name" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
      <button type="submit">Add Drink</button>
    </form>
  );
};

export default AddDrinkForm;

