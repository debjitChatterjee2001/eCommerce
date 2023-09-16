//create a registration page for an ecommerce website
import '../stylesheet/Register.css'

import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to your registration endpoint
    axios.post('http://localhost:8080/api/register', formData)
      .then((response) => {
        // Registration successful, handle the response as needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle registration errors
        console.error(error);
      });
  };

  return (
    <div className="registration-container">
      <h1>Registration Page</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}

export default Register;

