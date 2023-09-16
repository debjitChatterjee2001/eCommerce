import React from 'react';
import Navbar from './Navbar';
import '../stylesheet/About.css';

function About() {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                <h1>About Us</h1>
                <p>
                    Welcome to our online store! We are dedicated to providing high-quality products to our valued customers.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat lectus nec ligula eleifend eleifend.
                </p>
                <p>
                    Our team is committed to delivering the best shopping experience, and we take pride in offering a wide range
                    of products to meet your needs. We hope you enjoy shopping with us!
                </p>
            </div>
        </div>
    );
}

export default About;
