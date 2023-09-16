import React, { useState } from 'react';
import Navbar from './Navbar';
import '../stylesheet/Checkout.css'

function Checkout({ cart }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleCheckout = () => {
    if (selectedPaymentMethod === '') {
      alert('Please select a payment method.');
      return;
    }

    // In a real application, you would send the cart and payment information to the server for processing.
    // This is a simplified example to simulate a successful payment.
    setTimeout(() => {
      setPaymentStatus('Payment successful');
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <h2>Checkout</h2>
      {paymentStatus ? (
        <div>
          <p>{paymentStatus}</p>
          <p>Your order will be processed shortly.</p>
        </div>
      ) : (
        <div>
          <div>
            <h3>Select Payment Method</h3>
            <select value={selectedPaymentMethod} onChange={handlePaymentMethodChange}>
              <option value="">Select a payment method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              {/* Add more payment methods as needed */}
            </select>
          </div>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
