import React, { useState } from 'react';
import './Contact.css';
/* File name: Contact.js
Student Name: Sadik Elahi
Student ID: 301303846
Date: 2024-09-28
*/


/* ===================== */
/* Section: Contact Component */
/* ===================== */

const Contact = () => {
    /* ===================== */
    /* Section: State Management */
    /* ===================== */

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: '',
    });

    /* ===================== */
    /* Section: Handle Input Change */
    /* ===================== */

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    /* ===================== */
    /* Section: Handle Form Submission */
    /* ===================== */

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Redirect or clear form here
    };

    /* ===================== */
    /* Section: Render Component */
    /* ===================== */

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <div className="contact-container">
                {/* Contact Form */}
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                        <input type="tel" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
                        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="info-container">
                    <h3>Get in Touch</h3>
                    <p><strong>Email:</strong> selahi5@my.centennialcollege.ca</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Agency Website:</strong> <a href="https://www.ssedev.ca" target="_blank" rel="noopener noreferrer">SseDev.ca</a></p>
                    <p><strong>Location:</strong> Toronto, ON</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;