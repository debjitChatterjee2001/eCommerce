import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { cartState } from './cartState'; // Import the cart state atom
import Navbar from './Navbar';
import '../stylesheet/Cart.css';

function Cart() {
  // Get the cart contents from Recoil
  const cart = useRecoilValue(cartState);
  const [cartItems, setCartItems] = useRecoilState(cartState);

  const removeFromCart = (productId) => {
    // Remove the selected product from the cart
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Calculate the total cart price
  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <Navbar />
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        <div className="cart-card-container">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-card-image" />
                <div className="cart-card-details">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <button
                    className="remove-from-cart-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Display the total cart price and checkout button */}
      {cart.length > 0 && (
        <div className="total-cart-section">
          <div className="total-cart-price">
            <p>Total Cart Price:</p>
            <h2>${totalCartPrice.toFixed(2)}</h2>
          </div>
          <button className="checkout-button"><Link to="/checkout">Checkout</Link></button>
        </div>
      )}
    </div>
  );
}

export default Cart;
