import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../stylesheet/ProductDetails.css';
import { cartState } from './cartState'; 
import Navbar from './Navbar';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useRecoilState(cartState);

  useEffect(() => {
    setLoading(true);
    // Fetch product details based on the product ID
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        // Set the fetched product data to the state
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setProduct(null);
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (loading) {
    // Display a loading message or spinner while fetching data
    return <p>Loading...</p>;
  } else if (!loading && !product) {
    return <p>No product found with ID: {id}</p>;
  }

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

  return (
    <div>
      <Navbar />
      <div className="product-details-container">
        <div className="product-image-container">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
        <div className="product-info-container">
          <h1 className="product-name">{product.title}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
