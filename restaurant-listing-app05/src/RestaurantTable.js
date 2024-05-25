import React from 'react';

function RestaurantTable({ restaurants, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Pincode</th>
          <th>Mobile Number</th>
          <th>Email</th>
          <th>Website</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.address}</td>
            <td>{restaurant.pincode}</td>
            <td>{restaurant.mobileNumber}</td>
            <td>{restaurant.email}</td>
            <td>{restaurant.website}</td>
            <td>
              <button onClick={() => onEdit(restaurant)}>Edit</button>
              <button onClick={() => onDelete(restaurant.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;