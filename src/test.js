// DataForm.js
import React, { useState } from 'react';
import axios from 'axios';

const DataForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.example.com/save-data', formData);
      console.log('Data saved successfully:', response.data);
      // Handle success, update UI, etc.
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Save Data</button>
    </form>
  );
};

export default DataForm;