import React from 'react';
import Navbar from './Navbar';
import '../stylesheet/Home.css'


function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <h1>Welcome to Our Online Store</h1>
            <p>Discover a wide range of products and start shopping today!</p>
        </div>
    );
}

export default Home;
