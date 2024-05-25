import React, { useState, useEffect } from 'react';
import RestaurantTable from './RestaurantTable';
import RestaurantForm from './RestaurantForm';
import restaurantData from './restaurants.json';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [editingRestaurant, setEditingRestaurant] = useState(null);

  useEffect(() => {
    setRestaurants(restaurantData);
  }, []);

  const handleAdd = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  };

  const handleEdit = (updatedRestaurant) => {
    setRestaurants(restaurants.map((restaurant) => (restaurant.id === updatedRestaurant.id ? updatedRestaurant : restaurant)));
  };

  const handleDelete = (id) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  return (
    <div className="App">
      <h1>Restaurant Listing</h1>
      <RestaurantTable
        restaurants={restaurants}
        onEdit={(restaurant) => setEditingRestaurant(restaurant)}
        onDelete={handleDelete}
      />
      <RestaurantForm
        editingRestaurant={editingRestaurant}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onClose={() => setEditingRestaurant(null)}
      />
    </div>
  );
}

export default App;