import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../stylesheet/Checkout.css';

function Checkout({ cart }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const navigate = useNavigate();

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCheckout = () => {
    if (selectedPaymentMethod === '') {
      alert('Please select a payment method.');
      return;
    }

    // If the selected payment method is UPI, go directly to the payment page.
    if (selectedPaymentMethod === 'UPI') {
      // TODO: Implement UPI payment processing here.
      setTimeout(() => {
        setPaymentStatus('Payment successful');
      }, 5000);
    }

    // Otherwise, prompt the user for card information.
    if (selectedPaymentMethod === 'Credit Card') {
      setTimeout(() => {
        setPaymentStatus('Payment successful');
      }, 2000);
    } else {
      setTimeout(() => {
        setPaymentStatus('Payment successful');
      }, 2000);
    }
  };

  return (
    <div>
      <Navbar />
    <div className="checkout">
      <h2>Checkout</h2>
      {paymentStatus ? (
        <div>
          <p>{paymentStatus}</p>
          <p>Your order will be processed shortly.</p>
        </div>
      ) : (
        <div>
          <div className="shipping-address">
            <h3>Address</h3>
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter your delivery address"
              className="shipping-address-input"
            />
          </div>
          <div className="payment-method">
            <h3>Select Payment Method</h3>
            <select value={selectedPaymentMethod} onChange={handlePaymentMethodChange} className="payment-method-select">
              <option value="">Select a payment method</option>
              <option value="UPI">UPI</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              {/* Add more payment methods as needed */}
            </select>
            {selectedPaymentMethod === 'Credit Card' && (
              <div className="credit-card-info">
                <h3>Card Number</h3>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="Enter your card number"
                  className="credit-card-number-input"
                />
                <h3>CVV</h3>
                <input
                  type="text"
                  value={cvv}
                  onChange={handleCvvChange}
                  placeholder="Enter your CVV code"
                  className="credit-card-cvv-input"
                />
                <h3>Expiry Date</h3>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  placeholder="Enter your card's expiry date (MM/YY)"
                  className="credit-card-expiry-date-input"
                />
              </div>
            )}
          </div>
          <button onClick={handleCheckout} className="checkout_button">Checkout</button>
        </div>
      )}
    </div>
    </div>
  );
}

export default Checkout;