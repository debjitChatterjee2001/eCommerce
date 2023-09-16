import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './frontend/Register'; // Import the Registration component
//Import the Login component
import Login from './frontend/Login';
import ProductList from './frontend/Products'
import Cart from './frontend/Cart';
import ProductDetails from './frontend/ProductDetails';
import { RecoilRoot } from 'recoil';
import Home from './frontend/Home';
import Navbar from './frontend/Navbar';
import Checkout from './frontend/Checkout';

function MainApp() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} /> {/* Your login page */}
            <Route path="/registration" element={<Register />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/home" element={<Home />} />
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default MainApp;
