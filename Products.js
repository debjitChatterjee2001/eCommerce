// Product.js
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'; // Update the import
import { cartState } from './cartState'; // Import the cart state atom
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import '../stylesheet/Product.css';

function ProductList() {
  const [cart, setCart] = useRecoilState(cartState); // Use Recoil to get and update cart state
  const [products, setProducts] = React.useState([]);
  const [expanded, setExpanded] = React.useState({});

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API using Axios
    axios.get('https://fakestoreapi.com/products?limit=15')
      .then((response) => {
        // Set the fetched data to the products state
        setProducts(response.data);
        // Initialize the expanded state with all items as collapsed
        const initialExpanded = {};
        response.data.forEach((product) => {
          initialExpanded[product.id] = false;
        });
        setExpanded(initialExpanded);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleDescription = (productId) => {
    // Toggle the expanded state for a specific product
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [productId]: !prevExpanded[productId],
    }));
  };

  const addToCart = (product) => {
    // Clone the entire cart
    const updatedCart = [...cart];
  
    // Check if the product is already in the cart
    const productIndex = updatedCart.findIndex((item) => item.id === product.id);
  
    if (productIndex !== -1) {
      // If the product is already in the cart, increase its quantity
      updatedCart[productIndex] = {
        ...updatedCart[productIndex],
        quantity: updatedCart[productIndex].quantity + 1,
      };
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      updatedCart.push({ ...product, quantity: 1 });
    }
  
    // Set the updated cart as the new state
    setCart(updatedCart);
  };

  const handleClick = (productID) => {
    console.log("Clicked on the product with ID:>>", productID);
    navigate(`/product/${productID}`);
  }
  

  return (
    <div>
      <Navbar />
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" onClick={() => handleClick(product.id)}/>
            <h2 className="product-name">{product.title}</h2>
            <p className="product-description">
              ${product.description}
            </p>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
