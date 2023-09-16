import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../stylesheet/ProductDetails.css';
import Navbar from './Navbar';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="product-details">
      <Navbar />
      <h1>Product Details</h1>
      <div className="product-details-container">
        <div className="product-image-container">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
        <div className="product-info-container">
          <h2 className="product-name">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
