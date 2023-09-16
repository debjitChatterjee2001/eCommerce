import React from 'react';
import Navbar from './Navbar';
import '../stylesheet/Contact.css';

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>If you have any questions or feedback, please don't hesitate to reach out to us. We are here to assist you.</p>
                <div className="contact-info">
                    <p>Email: contact@yourstore.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Address: 1234 Ecommerce Street, City, Country</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
