import React, { useState, useEffect } from 'react';

function RestaurantForm({ editingRestaurant, onAdd, onEdit, onClose }) {
  const [form, setForm] = useState({
    id: null,
    name: '',
    address: '',
    pincode: '',
    mobileNumber: '',
    email: '',
    website: ''
  });

  useEffect(() => {
    if (editingRestaurant) {
      setForm(editingRestaurant);
    } else {
      setForm({
        id: null,
        name: '',
        address: '',
        pincode: '',
        mobileNumber: '',
        email: '',
        website: ''
      });
    }
  }, [editingRestaurant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id === null) {
      form.id = Date.now();
      onAdd(form);
    } else {
      onEdit(form);
    }
    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" required />
        <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="Pincode" required />
        <input name="mobileNumber" value={form.mobileNumber} onChange={handleChange} placeholder="Mobile Number" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="website" value={form.website} onChange={handleChange} placeholder="Website" required />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default RestaurantForm;