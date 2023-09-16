// Product.js
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from './cartState'; // Import the cart state atom
import Navbar from './Navbar';
import axios from 'axios';
import '../stylesheet/Product.css';
import { useNavigate } from 'react-router-dom';

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
    // Add the selected product to the cart
    setCart((prevCart) => [...prevCart, product]);
    console.log(cart);
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
